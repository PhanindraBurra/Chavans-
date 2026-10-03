/**
 * CHAVANSS COSMETIC CLINIC - CENTRAL DATA CONFIGURATION
 * Single Source of Truth for all text, contacts, branch locations, and clinical services.
 * All real text taken directly from https://chavansclinic.com/
 */

export const clinicConfig = {
  name: "Chavanss Cosmetic Clinic",
  branchFocus: "Rajahmundry",
  tagline: "India's #1 Hair Transplant & Permanent Makeup Specialists",
  logo: "/images/logo.png",

  // Primary Contact Info
  contacts: {
    whatsapp: "+91 91774 25999",
    whatsappClean: "919177425999",
    phoneRajahmundry1: "+91 83096 57861",
    phoneRajahmundry2: "+91 70322 99223",
    email: "chavanssclinic@gmail.com",
    instagram: "https://www.instagram.com/chavanssclinic/",
    youtube: "https://www.youtube.com/@chavanssclinic",
    website: "https://chavansclinic.com/",
  },

  // Top Announcement
  announcement: {
    text: "New Branch opened at Hyderabad!",
    actionText: "Chat on WhatsApp",
    phone: "+91 91774 25999",
    link: "https://wa.me/919177425999?text=Hello%20Chavanss%20Clinic,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
  },

  // Primary Focus: Rajahmundry Branch Details & Timings
  rajahmundryBranch: {
    title: "Chavanss Cosmetic Clinic – Rajahmundry",
    tagline: "Our Premier Center for Hair Restoration & Aesthetic Excellence",
    address: {
      line1: "Flat no. 505, Mounica Plaza",
      line2: "Opp. Madhuram Sweets, Danavaipeta",
      city: "Rajahmundry",
      state: "Andhra Pradesh",
      pincode: "533103",
      full: "Flat no. 505, Mounica Plaza, Opp. Madhuram Sweets, Danavaipeta, Rajahmundry, Andhra Pradesh 533103",
    },
    phones: ["+91 83096 57861", "+91 70322 99223"],
    email: "chavanssclinic@gmail.com",
    timings: {
      morning: "9:00 AM – 1:00 PM",
      afternoon: "2:00 PM – 8:00 PM",
      days: "Monday to Sunday (Open 7 Days a Week)",
      note: "Prior appointment recommended for comprehensive consultation & free hair test",
    },
    // Verified Google Maps embed query for Mounica Plaza, Danavaipeta, Rajahmundry
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.1585869403847!2d81.77708577589255!3d17.015792983808938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f8c85c2d3b%3A0x67dbfae9999a4c84!2sDanavaipeta%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=Mounica+Plaza+Danavaipeta+Rajahmundry",
  },

  // Other Branches Directory
  branches: [
    {
      id: "rajahmundry",
      city: "Rajahmundry",
      isPrimary: true,
      address: "Flat no. 505, Mounica Plaza, Opp. Madhuram Sweets, Danavaipeta, Rajahmundry, Andhra Pradesh",
      phone: "+91 83096 57861 / +91 70322 99223",
      timing: "9:00 AM – 1:00 PM & 2:00 PM – 8:00 PM",
    },
    {
      id: "hyderabad",
      city: "Hyderabad",
      badge: "New Branch",
      address: "Srinagar Colony Main Rd, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500033",
      phone: "+91 91774 25999",
      timing: "10:00 AM – 7:00 PM",
    },
    {
      id: "vijayawada",
      city: "Vijayawada",
      address: "Flat No. 4B, Chavadi residency, D.no : 5A-17-1/B, Panta Kavala Road, Vijayawada, Andhra Pradesh 520010",
      phone: "+91 83096 57861",
      timing: "10:00 AM – 7:00 PM",
    },
    {
      id: "visakhapatnam",
      city: "Visakhapatnam",
      address: "Chavanss Cosmetic Clinic, MVP Colony, Visakhapatnam, Andhra Pradesh",
      phone: "+91 91774 25999",
      timing: "10:00 AM – 7:00 PM",
    },
  ],

  // Hero Section Slides
  heroSlides: [
    {
      id: 1,
      badge: "India's #1 Hair Transplant",
      category: "HAIR TRANSPLANT",
      title: "India's #1 Hair Transplant",
      highlightText: "20k+ Hair Restorations Done",
      description: "20k+ Hair Restorations Done | High Density Results. World Class Results at Chavanss Clinics.",
      primaryCta: "Consult Now",
      secondaryCta: "Explore Treatments",
      image: "/images/consultation.jpg",
      stats: "20,000+ Happy Patients",
    },
    {
      id: 2,
      badge: "Pioneering Innovation",
      category: "HAIRLINE RESTORATION",
      title: "India's First Biotech FUE",
      highlightText: "Zero White Dots • 100% Survival",
      description: "Fusion of Bio Technology Hair Restoration, reduces post FUE White Dots, Skin Thickening, Thinning Hairs & improves transplanted graft survival.",
      primaryCta: "Our Technology",
      secondaryCta: "Book Free Test",
      image: "/images/biotech-fue-hair-transplant.png",
      stats: "Advanced Biotech Science",
    },
  ],

  // Section 4: Permanent Makeup Intro
  pmuIntro: {
    category: "Make up",
    headline: "Effortless beauty, every day",
    lead: "Discover the benefits of permanent makeup at Chavanss Cosmetic Clinic. Let our skilled specialists enhance your natural features, creating a flawless, effortless look. Wake up to the simplicity of beauty every day.",
    quote: "Say goodbye to daily makeup routines! With our permanent makeup services, enjoy flawlessly defined features that stay stunning all day, every day.",
    body: "At Chavanss Cosmetic Clinic, we celebrate your unique beauty with permanent makeup designed to reflect your style and individuality. Experience the ease and elegance of waking up beautiful every day.",
    highlights: [
      "Natural definition customized to your face contour",
      "Smudge-proof, waterproof, 24/7 effortless glow",
      "Medical-grade German pigments & gentle sterile technique",
      "Saves 30+ minutes of daily morning makeup routine"
    ],
  },

  // Section 5: Meet the Founder
  founder: {
    name: "Dr. Swetha Chavan",
    role: "Founder & Chief Cosmetic Director",
    credentials: "FMC (Fellowship in Medical Cosmetology, Germany)",
    quote: "Our mission is to empower individuals with authentic, natural-looking aesthetic confidence through world-class clinical precision.",
    description: "Dr. Swetha Chavan is an internationally trained medical cosmetologist with fellowship certification from Germany. With decades of pioneering experience in both micro-surgical hair restoration and advanced permanent makeup, Dr. Swetha has created transformative, life-changing results for over 20,000 clients across South India.",
    image: "/images/dr-swetha.jpg",
    founderPortrait: "/images/swetha-chavan-founder.png",
    achievements: [
      "German Fellowship in Medical Cosmetology",
      "Pioneer of Biotech FUE in Andhra Pradesh & Telangana",
      "Recognized Authority in Natural Eyebrow Microblading & Lip Blush",
    ],
  },

  // Section 6: Transformations (Before / After)
  transformations: [
    {
      id: "eyebrows",
      title: "Eyebrows Micro Blading",
      tag: "NEW",
      description: "Transform your brows with Eyebrow Microblading at Chavanss Cosmetic Clinic. Enjoy expertly shaped, fuss-free beauty that redefines your look effortlessly.",
      beforeImage: "/images/before.jpg",
      afterImage: "/images/microblading.avif",
      treatmentType: "Permanent Makeup",
      result: "Natural, hair-like strokes & defined symmetry",
    },
    {
      id: "skin-whitening",
      title: "Skin Whitening & Glow",
      tag: "NEW",
      description: "Our skin whitening techniques reduce pigmentation, uneven tone, and blemishes, revealing a radiant, flawless complexion.",
      beforeImage: "/images/before.jpg",
      afterImage: "/images/skin-whitening.png",
      treatmentType: "Skin Aesthetics",
      result: "Radiant, glass-skin clarity with reduced pigmentation",
    },
    {
      id: "lip-treatment",
      title: "Lip Treatment & Blush",
      tag: "NEW",
      description: "Say goodbye to daily lip maintenance and hello to effortlessly beautiful lips with our signature semi-permanent lip neutralization.",
      beforeImage: "/images/before.jpg",
      afterImage: "/images/lip-blush.png",
      treatmentType: "Permanent Makeup",
      result: "Youthful tint, enhanced lip symmetry & zero tint-bleeding",
    },
  ],

  // Section 7: Our Team (Doctors)
  doctors: [
    {
      id: "dr-ramachandra",
      name: "Dr. B. Ramachandra Rao",
      qualification: "M.DS (Oral and Maxillofacial Surgery)",
      role: "Senior Consultant – Maxillofacial & Hair Restoration",
      image: "/images/dr-ramachandra-rao.png",
      specialties: [
        "Biotech FUE Hair Surgery",
        "Facial Symmetry & Hairline Engineering",
        "Micro-Surgical Graft Implantation",
      ],
      bio: "Highly accomplished maxillofacial surgeon specializing in meticulous facial aesthetics and precision donor-graft extraction for lifelong natural hair density.",
    },
    {
      id: "dr-swetha",
      name: "Dr. Swetha Chavan",
      qualification: "FMC (Fellowship Medical Cosmetology, Germany)",
      role: "Founder & Chief Medical Cosmetologist",
      image: "/images/dr-swetha.jpg",
      specialties: [
        "Advanced Permanent Makeup & Eyebrow Design",
        "Biotech FUE & Female Hair Restoration",
        "Medical Skin Aesthetics & BB Glow",
      ],
      bio: "International fellowship trained in Germany, Dr. Swetha blends clinical science with artistic finesse to give clients subtle, undetectable enhancements.",
    },
    {
      id: "dr-cvnr-prasad",
      name: "Dr. CVNR Prasad",
      qualification: "M.D (Hom)",
      role: "Senior Trichology & Wellness Specialist",
      image: "/images/dr-cvnr-prasad.jpg",
      specialties: [
        "Holistic Hair Loss Management",
        "Cellular Scalp Revitalization",
        "Pre & Post Transplant Graft Support",
      ],
      bio: "Focuses on deep root-cause hair restoration, medical scalp revitalization, and holistic follicle rejuvenation protocols.",
    },
  ],

  // Certificates & Facility Gallery for Lightbox
  certificates: [
    {
      id: 1,
      title: "German Fellowship Certification",
      subtitle: "Fellowship in Medical Cosmetology (Germany)",
      image: "/images/certificate-1.jpg",
      category: "Accreditation",
    },
    {
      id: 2,
      title: "State-of-the-Art Clinical Suite",
      subtitle: "Sterile Procedure Theater – Rajahmundry",
      image: "/images/facility-1.jpg",
      category: "Facility",
    },
    {
      id: 3,
      title: "Excellence in Aesthetic Trichology",
      subtitle: "Award for High Density FUE Results",
      image: "/images/certificate-2.jpg",
      category: "Award",
    },
    {
      id: 4,
      title: "Private Consultation Lounge",
      subtitle: "Individual Diagnostic & Trichoscopy Suite",
      image: "/images/facility-2.jpg",
      category: "Facility",
    },
    {
      id: 5,
      title: "Permanent Makeup Excellence Award",
      subtitle: "Recognized for Precision Microblading",
      image: "/images/certificate-3.jpg",
      category: "Award",
    },
    {
      id: 6,
      title: "Advanced Hair Laser Suite",
      subtitle: "FDA-Approved Low-Level Light Therapy",
      image: "/images/facility-3.jpg",
      category: "Facility",
    },
  ],

  // Section 8: "At Your Service" Stats
  stats: {
    title: "At Your Service",
    description: "Experience the artistry of our services, designed to enhance your natural beauty and leave you feeling confident every day.",
    progressIndicators: [
      {
        id: "pmu-rate",
        label: "Permanent MakeUp",
        percentage: 100,
        subtext: "Satisfaction & Client Happiness",
      },
      {
        id: "ht-rate",
        label: "Hair Transplantation",
        percentage: 100,
        subtext: "Graft Survival & Density Success",
      },
    ],
    counters: [
      {
        id: "restorations",
        label: "Hair Restorations",
        value: 20000,
        suffix: "+",
        subtext: "Successful procedures performed",
      },
      {
        id: "staff",
        label: "Staff Members",
        value: 21,
        suffix: "+",
        subtext: "Trained clinical personnel",
      },
      {
        id: "doctors",
        label: "Specialist Doctors",
        value: 6,
        suffix: "+",
        subtext: "Board-certified aesthetic surgeons",
      },
      {
        id: "visits",
        label: "Clinic Visits",
        value: 5086,
        suffix: "+",
        subtext: "Consultations & treatments completed",
      },
    ],
  },

  // Section 9: Hair Care Services Grid (12 cards)
  hairCareServices: [
    {
      id: "instant-fue",
      name: "Revolutionary Instant FUE",
      tag: "NEW",
      description: "Instant FUE ensures immediate graft implantation for improved survival and rapid natural growth.",
      image: "/images/revolutionary-instant-fue.png",
      features: ["Immediate implantation", "Higher follicle viability", "Fast healing"],
    },
    {
      id: "biotech-fue",
      name: "Biotech FUE Hair Transplant",
      tag: "BEST",
      description: "Advanced biotech enhances graft survival, reduces scarring, and thickens existing native hair.",
      image: "/images/biotech-fue-hair-transplant.png",
      features: ["Zero white dots", "Maximum graft density", "Bio-stimulated recovery"],
    },
    {
      id: "dpi",
      name: "Direct Pen Implanter (DPI)",
      tag: null,
      description: "Pen Implanter provides precise control over depth and angle, quick recovery, and enhances FUE results.",
      image: "/images/direct-pen-implanter-dpi.png",
      features: ["Pinpoint angulation", "Minimal trauma", "Natural hairline flow"],
    },
    {
      id: "thicker-grafts",
      name: "Thicker Grafts",
      tag: null,
      description: "Thicker grafts ensure better survival and maximum visual density with minimized scarring.",
      image: "/images/thicker-grafts.png",
      features: ["Robust multi-hair follicular units", "Full volumetric coverage", "Long-term resilience"],
    },
    {
      id: "female-hair",
      name: "Female Hair Restoration",
      tag: "NEW",
      description: "Female hair restoration focuses on unique angles and shaveless techniques for optimal results.",
      image: "/images/female-hair-restoration.png",
      features: ["No-shave discreet procedure", "Natural feminine hair pattern", "Gentle density filling"],
    },
    {
      id: "no-white-dots",
      name: "No White Dots",
      tag: null,
      description: "DP cells, dermal papilla injections, Acell, and Ultra PRP prevent scarring and aid in donor healing.",
      image: "/images/no-white-dots.png",
      features: ["Acell & Ultra-PRP integration", "Scar-free donor zone", "Smooth skin preservation"],
    },
    {
      id: "eyebrow-transplant",
      name: "Eyebrow Transplant",
      tag: "BEST",
      description: "Eyebrows improve expression; sparse or unsatisfactory ones are enhanced with precision micro-grafts.",
      image: "/images/eyebrow-transplant.png",
      features: ["Ultra-fine single hair grafts", "Sculpted arch design", "Permanent natural regrowth"],
    },
    {
      id: "beard-transplant",
      name: "Beard & Mustache Transplant",
      tag: null,
      description: "Restore facial hair density and symmetry with carefully aligned donor follicular units.",
      image: "/images/beard-moustache-transplant.png",
      features: ["Custom beard line contouring", "Patchy beard correction", "Natural growth direction"],
    },
    {
      id: "designer-hairline",
      name: "Designer Hairline",
      tag: "NEW",
      description: "The hairline above the forehead is a key facial feature; reconstruct receding hairlines to match age & bone structure.",
      image: "/images/designer-hairline.png",
      features: ["Golden ratio facial measurement", "Soft feathered transition", "Age-appropriate contours"],
    },
    {
      id: "prp-meso",
      name: "PRP / PRF / GFC / MesoTherapy",
      tag: null,
      description: "Advanced non-surgical cellular therapies for hair rejuvenation, suitable for both men and women.",
      image: "/images/prp-prf-gfc-meso.png",
      features: ["Concentrated growth factors (GFC)", "Stimulates dormant roots", "Arrests ongoing hair fall"],
    },
    {
      id: "laser-therapy",
      name: "Laser Hair Therapy",
      tag: "BEST",
      description: "Low-level laser therapy is a safe, painless treatment for androgenetic alopecia in men and women.",
      image: "/images/laser-hair-therapy.png",
      features: ["FDA-cleared cold lasers", "Boosts scalp micro-circulation", "Thickens miniaturized hair"],
    },
    {
      id: "body-to-scalp",
      name: "Body to Scalp Transplant",
      tag: null,
      description: "Body hair transplants use grafts from areas like the beard, ideal for high-coverage scalp transplants.",
      image: "/images/body-to-scalp.png",
      features: ["Expands donor supply", "Ideal for advanced baldness", "Seamless blending"],
    },
  ],

  // Section 10: Permanent Makeup Services Grid (5 cards)
  permanentMakeupServices: [
    {
      id: "pmu-microblading",
      title: "Eyebrows Microblading",
      badge: "Signature",
      description: "Precision manual hair-stroke artistry that mimics real brow strands, creating natural arches and effortless definition.",
      image: "/images/microblading.avif",
      duration: "90 - 120 mins",
      longevity: "18 - 24 months",
      highlights: ["3D hyper-realistic strokes", "Custom color matching", "Painless numbing cream used"],
    },
    {
      id: "pmu-lip-blush",
      title: "Lip Blush",
      badge: "Popular",
      description: "Gentle watercolor tinting that restores lip symmetry, enhances natural tone, and gives a soft, youthful flush.",
      image: "/images/lip-blush.png",
      duration: "90 mins",
      longevity: "2 - 3 years",
      highlights: ["Natural rosy flush", "Fuller-looking lips", "No lipstick required"],
    },
    {
      id: "pmu-lip-color",
      title: "Permanent Lip Color",
      badge: "Classic",
      description: "Full saturated lip pigment infusion designed to replace daily lipstick with an elegant, always-ready color.",
      image: "/images/lip-blush.png",
      duration: "100 mins",
      longevity: "2 - 3 years",
      highlights: ["Vibrant definition", "Smudge-free during dining", "Even pigment saturation"],
    },
    {
      id: "pmu-lip-neutralization",
      title: "Lip Neutralization",
      badge: "Specialized",
      description: "Color-corrective technique that neutralizes cool, dark, or hyperpigmented lips into warm, even peach or pink tones.",
      image: "/images/skin-whitening.png",
      duration: "90 mins",
      longevity: "2+ years",
      highlights: ["Neutralizes dark tones", "Harmonizes natural pigmentation", "Even canvas for tints"],
    },
    {
      id: "pmu-bb-glow",
      title: "BB Glow Treatment",
      badge: "Radiance",
      description: "Semi-permanent foundation glow infused with peptides and vitamins to reduce blemishes and brighten skin.",
      image: "/images/consultation.jpg",
      duration: "60 mins",
      longevity: "4 - 6 months",
      highlights: ["Radiant illuminated skin", "Smooths skin texture", "Nourishing peptide serum"],
    },
  ],

  // Section 12: CTA Banner
  ctaBanner: {
    tag: "DON'T LOSE",
    headline: "Secure your spot & never miss your moment of beauty!",
    subhead: "Book your Hair Care Appointment today and enjoy a FREE Hair Analysis Test!",
    phone: "+91 83096 57861",
    whatsapp: "+91 91774 25999",
  },
};
