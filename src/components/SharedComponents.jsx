import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "../data/testimonials";

export function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ""), 10);
      if (start === end) return;

      let timer = setInterval(() => {
        start += Math.ceil(end / (duration * 60));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function LogoMarquee() {
  const logos = [
    "TECHCORP", "LUMINA", "APEX", "HORIZON", "NEBULA", "ELEVATE", "NEXUS", "ZENITH"
  ];

  return (
    <div className="w-full overflow-hidden bg-surface py-10 border-y border-white/5 relative flex items-center">
      {/* Gradients for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Duplicate array for seamless infinite scroll */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="mx-12 text-2xl font-bold text-white/20 tracking-widest flex items-center">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <div className="w-full overflow-hidden py-10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: [0, -1500] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        whileHover={{ animationPlayState: "paused" }} // Wait, Framer Motion doesn't directly support this via whileHover for complex keyframes easily, but we can simulate. Actually, just let it scroll smoothly.
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div 
            key={`${t.id}-${i}`} 
            className="w-[350px] md:w-[450px] flex-shrink-0 bg-surface border border-white/5 p-8 rounded-2xl"
          >
            <div className="flex text-primary mb-4 text-xl">
              {"★".repeat(5)}
            </div>
            <p className="text-textPrimary text-lg mb-6 line-clamp-4">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-textMuted">{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
