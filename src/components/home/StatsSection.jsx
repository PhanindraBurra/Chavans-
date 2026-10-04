import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { clinicConfig } from '../../data/clinic';
import { Sparkles, Users, Award, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';

function CounterNumber({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const incrementTime = (duration * 1000) / 60;
    const step = Math.ceil(end / 60);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function ProgressRing({ percentage = 100, label, subtext }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const size = 136;
  const stroke = 7;
  const center = size / 2;
  const radius = center - stroke - 4; // ~57px radius
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl glass-card bg-white/85 shadow-luxury border border-white hover:border-[#067C24]/30 hover:shadow-2xl transition-all duration-300">
      {/* Circle container ensuring 100% text stays strictly INSIDE the ring */}
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg height={size} width={size} className="transform -rotate-90">
          {/* Background circle in soft mint */}
          <circle
            stroke="#DCFCE7"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx={center}
            cy={center}
          />
          {/* Animated Progress Circle in Logo Green */}
          <motion.circle
            stroke="url(#clinicGreenGradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            strokeLinecap="round"
            r={radius}
            cx={center}
            cy={center}
          />
          <defs>
            <linearGradient id="clinicGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#045217" />
              <stop offset="60%" stopColor="#067C24" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center label strictly confined inside the circular boundary */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-2">
          <span className="font-serif text-xl sm:text-2xl font-black text-[#0B2414] tracking-tight leading-none">
            {isInView ? `${percentage}%` : '0%'}
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#067C24] mt-1">
            SUCCESS
          </span>
        </div>
      </div>

      <h4 className="mt-5 font-serif text-lg font-bold text-[#0B2414]">
        {label}
      </h4>
      <p className="text-xs text-[#23422C] mt-1 max-w-[220px] leading-relaxed">
        {subtext}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { stats } = clinicConfig;

  const counterIcons = {
    restorations: Award,
    staff: Users,
    doctors: HeartHandshake,
    visits: Eye,
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#FAFCFA] overflow-hidden">
      {/* Decorative ambient background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#DCFCE7]/50 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#067C24]/10 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#067C24] bg-[#E8F8EC] border border-[#067C24]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#067C24]" />
            <span>CLINICAL EXCELLENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2414]">
            {stats.title}
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#067C24] to-[#10B981] rounded-full mx-auto" />

          <p className="text-base text-[#23422C] font-normal">
            {stats.description}
          </p>
        </div>

        {/* Circular Progress Rings - 3 Columns for PMU, Hair Transplant & Skin Care */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.progressIndicators.map((ring) => (
            <ProgressRing
              key={ring.id}
              label={ring.label}
              percentage={ring.percentage}
              subtext={ring.subtext}
            />
          ))}
        </div>

        {/* Counter Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.counters.map((item, idx) => {
            const Icon = counterIcons[item.id] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-3xl glass-card bg-white/80 shadow-luxury border border-white text-center flex flex-col items-center justify-center hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8EC] border border-[#067C24]/20 flex items-center justify-center text-[#067C24] mb-3">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2414] tracking-tight">
                  <CounterNumber target={item.value} suffix={item.suffix} />
                </div>

                <h4 className="font-serif font-bold text-sm text-[#067C24] mt-1 uppercase tracking-wider">
                  {item.label}
                </h4>

                <p className="text-[11px] text-[#23422C] mt-0.5 max-w-[150px]">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
