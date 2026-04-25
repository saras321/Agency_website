import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919629218464";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Pricing() {
  const valueProps = [
    {
      title: "₹3,000/month",
      points: ["Start running ads & get your first sales", "Increase reach & attract customers"],
      icon: Target,
      highlight: false
    },
    {
      title: "Business Growth Plan",
      points: ["Start running ads & get customers consistently", "Build your brand & generate consistent leads"],
      icon: TrendingUp,
      highlight: true
    },
    {
      title: "₹10,000/month",
      points: ["No big budget needed", "Start running and generate consistent leads"],
      icon: Zap,
      highlight: false
    }
  ];

  const packages = [
    {
      id: "ad-package",
      name: "Ad Package",
      price: "3,000",
      period: "/month",
      desc: "Monthly ad support for your business",
      features: [
        "Monthly ad support",
        "1 to 2 ad creatives",
        "Creatives only",
        "For ads"
      ],
      footerNote: "Ad spend separate",
      ctaText: "DM to Book",
      popular: false
    },
    {
      id: "growth-plan",
      name: "Growth Plan",
      price: "5,000",
      period: "/month",
      desc: "Perfect for consistent social presence",
      features: [
        "5 posters",
        "1 reel",
        "Monthly content support"
      ],
      ctaText: "Contact Us to Get Started",
      popular: true
    },
    {
      id: "brand-growth",
      name: "Brand Growth",
      price: "10,000",
      period: "/month",
      desc: "Complete brand building solution",
      features: [
        "10 posters",
        "5 reels",
        "Monthly planning",
        "Content strategy"
      ],
      ctaText: "Get Started",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      {/* Value Proposition Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Grow Your Business with Smart Marketing</h2>
          <p className="text-xl text-primary font-medium tracking-wide uppercase">Small budget. Strong results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {valueProps.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col items-center text-center ${
                prop.highlight 
                  ? 'bg-surface border-2 border-primary shadow-[0_0_30px_rgba(108,43,217,0.3)] md:-translate-y-4' 
                  : 'bg-background border border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${prop.highlight ? 'bg-primary text-white' : 'bg-surface text-primary border border-white/5'}`}>
                <prop.icon size={28} />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${prop.highlight ? 'text-white' : 'text-white'}`}>{prop.title}</h3>
              <ul className="space-y-4 text-left w-full flex-grow">
                {prop.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-textMuted">
                    <Check size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-textMuted text-lg mb-8 italic">"No big budget needed. Just the right strategy."</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            DM Us to Get Started <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-textMuted mt-4 uppercase tracking-wider">Ad spend separate | Limited slots available</p>
        </motion.div>
      </div>

      {/* Pricing Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Monthly Digital Marketing Packages</h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">Smart plans for small business growth</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full bg-surface ${
                pkg.popular 
                  ? 'border-2 border-accent shadow-[0_0_40px_rgba(59,130,246,0.2)] md:-translate-y-4' 
                  : 'border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
                  Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-textMuted min-h-[48px]">{pkg.desc}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-3xl font-bold text-primary">₹</span>
                <span className="text-5xl font-bold text-white">{pkg.price}</span>
                <span className="text-textMuted mb-2">{pkg.period}</span>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-textPrimary">
                      <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.footerNote && (
                <p className="text-sm text-textMuted mb-4 italic text-center">{pkg.footerNote}</p>
              )}

              <Link 
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.ctaText} <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
