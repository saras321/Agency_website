import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap } from "lucide-react";
import { coreServices, addonServices } from "../data/services";
import Pricing from "../components/Pricing";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Digital Marketing Agency</title>
        <meta name="description" content="Detailed breakdown of our digital marketing services including Poster & Reel Creation, Competitor Analysis, Lead Gen, and SEM." />
      </Helmet>

      <main className="pt-32 pb-20">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">What We Do</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Growth <span className="text-gradient">Engineering</span></h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              We engineer scalable growth systems through data-driven performance marketing and thumb-stopping creative.
            </p>
          </motion.div>
        </section>

        {/* DETAILED SERVICES */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 mb-32">
          {coreServices.map((service, index) => (
            <motion.section 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
                <p className="text-xl text-textMuted">{service.description}</p>
                
                <div className="bg-surface border border-white/5 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Zap size={20} className="text-accent" /> What's Included
                  </h4>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-textMuted">
                        <Check size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-textMuted mb-1 uppercase tracking-wider font-semibold">Platforms</p>
                    <p className="text-white font-medium">{service.platforms.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-textMuted mb-1 uppercase tracking-wider font-semibold">Deliverables</p>
                    <p className="text-white font-medium">{service.deliverables}</p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 inline-block w-full">
                  <p className="text-primary font-medium text-center">
                    <span className="font-bold">Perfect for:</span> {service.perfectFor}
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-50 transition-opacity duration-700"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* ADD-ONS */}
        <section className="bg-surface py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Strategic Add-ons</h3>
              <p className="text-textMuted">Available for existing clients on retainer.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addonServices.map((addon, index) => (
                <div key={index} className="bg-background border border-white/5 p-6 rounded-xl text-center hover:border-white/20 transition-colors">
                  <p className="font-semibold text-white">{addon}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <Pricing />

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
          <h2 className="text-4xl font-bold text-white mb-6">Need a custom approach?</h2>
          <p className="text-xl text-textMuted mb-10">We build bespoke packages for enterprise clients and scaling startups.</p>
          <a href="https://wa.me/919629218464" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95 items-center gap-2">
            Get a Custom Package <ArrowRight size={20} />
          </a>
        </section>
      </main>
    </>
  );
}
