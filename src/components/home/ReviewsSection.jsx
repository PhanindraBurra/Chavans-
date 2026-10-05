import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import confetti from 'canvas-confetti';
import {
  Star,
  CheckCircle2,
  MapPin,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  X,
  Send,
  Plus,
  Heart,
  Quote,
  Building,
} from 'lucide-react';

export default function ReviewsSection({ onOpenAppointment }) {
  const initialReviews = clinicConfig.reviews || [];

  // Persistent user reviews from localStorage
  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem('chavanss_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...initialReviews];
        }
      }
    } catch (e) {}
    return initialReviews;
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [helpfulCounts, setHelpfulCounts] = useState({});

  // Review Form State
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    treatment: 'Biotech FUE Hair Transplant',
    category: 'hair',
    rating: 5,
    branch: 'Rajahmundry Flagship',
    title: '',
    comment: '',
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  // Treatment to Category helper
  const getCategoryFromTreatment = (t) => {
    const lower = t.toLowerCase();
    if (lower.includes('hair') || lower.includes('fue') || lower.includes('prp')) return 'hair';
    if (lower.includes('skin') || lower.includes('melasma') || lower.includes('peel') || lower.includes('hydra')) return 'skin';
    if (lower.includes('microblading') || lower.includes('lip') || lower.includes('makeup') || lower.includes('bb glow')) return 'pmu';
    return 'hair';
  };

  const handleHelpful = (id) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!newReview.name.trim() || !newReview.comment.trim()) {
      alert('Please fill in your name and review comments.');
      return;
    }

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#067C24', '#0B9E31', '#10B981', '#FFFFFF', '#FBBF24'],
      });
    } catch (err) {}

    const nameParts = newReview.name.trim().split(' ');
    const initials = nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
      : newReview.name.slice(0, 2).toUpperCase();

    const createdReview = {
      id: `user-rev-${Date.now()}`,
      name: newReview.name.trim(),
      location: newReview.location.trim() || 'Andhra Pradesh',
      treatment: newReview.treatment,
      category: getCategoryFromTreatment(newReview.treatment),
      rating: newReview.rating,
      date: 'Just now',
      branch: newReview.branch,
      title: newReview.title.trim() || 'Verified Patient Review',
      comment: newReview.comment.trim(),
      verified: true,
      initials,
      isUserSubmitted: true,
    };

    const updated = [createdReview, ...reviewsList];
    setReviewsList(updated);

    // Save user reviews to localStorage
    try {
      const existingUserReviews = JSON.parse(localStorage.getItem('chavanss_user_reviews') || '[]');
      localStorage.setItem('chavanss_user_reviews', JSON.stringify([createdReview, ...existingUserReviews]));
    } catch (e) {}

    setIsSubmittedSuccess(true);
    setTimeout(() => {
      setIsSubmittedSuccess(false);
      setIsModalOpen(false);
      setNewReview({
        name: '',
        location: '',
        treatment: 'Biotech FUE Hair Transplant',
        category: 'hair',
        rating: 5,
        branch: 'Rajahmundry Flagship',
        title: '',
        comment: '',
      });
    }, 2200);
  };

  const filteredReviews = reviewsList.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Reviews', count: reviewsList.length },
    { id: 'hair', label: 'Hair Transplant & Restoration', count: reviewsList.filter(r => r.category === 'hair').length },
    { id: 'skin', label: 'Melasma & Skin Care', count: reviewsList.filter(r => r.category === 'skin').length },
    { id: 'pmu', label: 'Permanent Makeup', count: reviewsList.filter(r => r.category === 'pmu').length },
  ];

  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#DCFCE7]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Trust Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#DCFCE7]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#067C24] text-[#067C24]" />
              <span>PATIENT EXPERIENCES &amp; REVIEWS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414] leading-tight">
              Real Patient Stories &amp; Honest Reviews
            </h2>

            <p className="text-base text-[#23422C] font-normal leading-relaxed">
              Discover authentic journeys from over 20,000+ satisfied clients who trusted Dr. Swetha Chavan and our surgical team across Rajahmundry, Hyderabad, and Vijayawada.
            </p>
          </div>

          {/* Google Review Trust Card + Write Review CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            {/* Google Rating Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#DCFCE7] shadow-sm flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E8F8EC] text-[#067C24] flex items-center justify-center font-bold text-xl font-outfit shadow-sm">
                4.9
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#0B2414]">
                  Google Rating • 2,400+ Reviews
                </p>
                <p className="text-[10px] text-[#067C24] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 100% Genuine Care
                </p>
              </div>
            </div>

            {/* Give Review Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#067C24] via-[#0A912C] to-[#067C24] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(6,124,36,0.35)] hover:shadow-[0_6px_28px_rgba(6,124,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <Plus className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#067C24] text-white shadow-md'
                  : 'bg-white text-[#23422C] border border-[#DCFCE7] hover:border-[#067C24] hover:bg-[#E8F8EC]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-[#E8F8EC] text-[#067C24]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl p-6 sm:p-7 glass-card bg-white/90 backdrop-blur-xl border border-white shadow-luxury hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* User Submitted Badge */}
                {rev.isUserSubmitted && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-[#067C24] border border-emerald-300 animate-pulse">
                      New Review
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Row: User Avatar & Details */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#067C24] to-[#10B981] text-white flex items-center justify-center font-bold font-outfit text-sm shadow-md flex-shrink-0">
                      {rev.initials || 'CP'}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif font-bold text-base text-[#0B2414] truncate">
                          {rev.name}
                        </h4>
                        {rev.verified && (
                          <span title="Verified Patient">
                            <CheckCircle2 className="w-4 h-4 text-[#067C24] flex-shrink-0" />
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#23422C] mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-[#067C24]" />
                          {rev.location}
                        </span>
                        <span>•</span>
                        <span className="text-neutral-400">{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars & Treatment Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#DCFCE7]/60">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8F8EC] text-[#067C24] border border-[#DCFCE7] truncate max-w-[200px]">
                      {rev.treatment}
                    </span>
                  </div>

                  {/* Review Title & Body */}
                  <div className="space-y-2">
                    {rev.title && (
                      <h5 className="font-serif font-bold text-sm sm:text-base text-[#0B2414] leading-snug">
                        "{rev.title}"
                      </h5>
                    )}

                    <p className="text-xs sm:text-sm text-[#23422C] leading-relaxed line-clamp-4">
                      {rev.comment}
                    </p>
                  </div>
                </div>

                {/* Footer: Branch & Helpful Button */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#23422C]">
                  <span className="text-[11px] font-medium text-[#067C24] flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    <span>{rev.branch}</span>
                  </span>

                  <button
                    onClick={() => handleHelpful(rev.id)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-neutral-600 hover:text-[#067C24] hover:bg-[#E8F8EC] transition-colors"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful {helpfulCounts[rev.id] ? `(${helpfulCounts[rev.id]})` : ''}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#E8F8EC] via-white to-[#E8F8EC] border border-[#DCFCE7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2414]">
              Ready for your own aesthetic transformation?
            </h4>
            <p className="text-xs sm:text-sm text-[#23422C]">
              Join thousands of delighted patients. Book your comprehensive consultation &amp; free hair/skin analysis today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#067C24] hover:bg-[#0A912C] shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Book Consultation
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#067C24] bg-white border border-[#067C24] hover:bg-[#E8F8EC] transition-all whitespace-nowrap"
            >
              Give a Review
            </button>
          </div>
        </div>
      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#022109]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DCFCE7] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmittedSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F8EC] text-[#067C24] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B2414]">
                    Thank You for Your Review!
                  </h3>
                  <p className="text-sm text-[#23422C] max-w-md mx-auto">
                    Your feedback has been published on our reviews board. We truly appreciate you sharing your experience at Chavanss Cosmetic Clinic!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-5">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#067C24] bg-[#E8F8EC]">
                      <Quote className="w-3.5 h-3.5 text-[#067C24]" />
                      <span>SHARE YOUR EXPERIENCE</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B2414]">
                      Write a Patient Review
                    </h3>
                    <p className="text-xs text-[#23422C]">
                      Your genuine feedback helps others make informed choices about their hair &amp; aesthetic care.
                    </p>
                  </div>

                  {/* Star Rating Selector */}
                  <div className="p-4 rounded-2xl bg-[#E8F8EC]/50 border border-[#DCFCE7] space-y-1.5 text-center">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                      Your Overall Rating
                    </label>
                    <div className="flex items-center justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= (hoverRating || newReview.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-neutral-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] font-semibold text-[#067C24]">
                      {newReview.rating === 5
                        ? '5 Stars — Exceptional / Highly Recommended!'
                        : newReview.rating === 4
                        ? '4 Stars — Very Good Experience'
                        : newReview.rating === 3
                        ? '3 Stars — Average'
                        : `${newReview.rating} Stars`}
                    </p>
                  </div>

                  {/* Name & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                        Your Name <span className="text-[#067C24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Ananya Rao"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        placeholder="e.g. Rajahmundry, Hyderabad"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                      />
                    </div>
                  </div>

                  {/* Treatment & Branch */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                        Treatment Received
                      </label>
                      <select
                        value={newReview.treatment}
                        onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                      >
                        <option value="Biotech FUE Hair Transplant">Biotech FUE Hair Transplant</option>
                        <option value="Melasma Treatment & Skin Glow">Melasma Treatment &amp; Skin Glow</option>
                        <option value="Revolutionary Instant FUE">Revolutionary Instant FUE</option>
                        <option value="Eyebrows Microblading">Eyebrows Microblading</option>
                        <option value="Lip Blush & Tint">Lip Blush &amp; Tint</option>
                        <option value="Carbon Laser Peel">Carbon Laser Peel</option>
                        <option value="HydraFacial Deep Pore Detox">HydraFacial Deep Pore Detox</option>
                        <option value="PRP / PRF MesoTherapy">PRP / PRF MesoTherapy</option>
                        <option value="Laser Hair Therapy">Laser Hair Therapy</option>
                        <option value="General Cosmetic Consultation">General Cosmetic Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                        Clinic Branch
                      </label>
                      <select
                        value={newReview.branch}
                        onChange={(e) => setNewReview({ ...newReview, branch: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                      >
                        <option value="Rajahmundry Flagship">Rajahmundry Flagship</option>
                        <option value="Hyderabad (Banjara Hills)">Hyderabad (Banjara Hills)</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Title */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                      Review Headline / Summary
                    </label>
                    <input
                      type="text"
                      value={newReview.title}
                      onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                      placeholder="e.g. Excellent doctor and life-changing results!"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                    />
                  </div>

                  {/* Review Comment */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2414]">
                      Your Review / Experience <span className="text-[#067C24]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Describe your treatment, the doctor's approach, comfort during the procedure, and your satisfaction with the results..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DCFCE7] focus:border-[#067C24] focus:ring-2 focus:ring-[#DCFCE7] text-xs sm:text-sm text-[#0B2414] outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#067C24] to-[#0A912C] text-white font-bold text-sm shadow-[0_4px_16px_rgba(6,124,36,0.35)] hover:shadow-[0_6px_24px_rgba(6,124,36,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Publish My Review</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
