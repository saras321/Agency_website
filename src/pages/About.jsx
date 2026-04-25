import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Digital Marketing Agency</title>
        <meta name="description" content="Learn about our story, our team, and the values that drive our agency to deliver exceptional marketing results." />
      </Helmet>

      <main className="pt-32 pb-20">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Built for <span className="text-gradient">Growth</span></h1>
            <p className="text-2xl text-textMuted leading-relaxed">
              We are a passionate young team helping local businesses grow digitally — one brand at a time. No fluff, no fake promises.
            </p>
          </motion.div>
        </section>

        {/* IMAGE GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 rounded-2xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Strategy meeting" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Office vibe" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 rounded-2xl overflow-hidden bg-primary p-8 flex flex-col justify-end"
            >
              <p className="text-white text-2xl font-bold">"Creative minds. Data-driven hearts."</p>
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-surface py-32 mb-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-textMuted max-w-2xl mx-auto">The principles that guide every strategy we build and every campaign we launch.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Results Obsessed", desc: "If it doesn't drive revenue or pipeline, we don't do it." },
                { icon: Zap, title: "Move Fast", desc: "The digital landscape changes daily. We adapt instantly." },
                { icon: Heart, title: "Empathy First", desc: "We market to humans, not just algorithms." },
                { icon: Shield, title: "Total Transparency", desc: "No vanity metrics. No hidden fees. Just honest data." }
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }}
                  className="bg-background border border-white/5 p-8 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-textMuted">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM (Placeholder) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Leadership</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Mercer", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Jordan Lee", role: "Head of Creative", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Samira Khan", role: "Director of Performance", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
            ].map((member, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          </motion.div>
          <div className="space-y-12 border-l-2 border-white/10 ml-4 md:ml-0 md:pl-10">
            {[
              { year: "2023", title: "The Beginning", desc: "Started as a small team helping local businesses build their digital presence." },
              { year: "2024", title: "Gaining Momentum", desc: "Hit 10+ active clients and expanded our services to include performance ads." },
              { year: "2025", title: "Scaling Up", desc: "Consistently delivering high-quality creatives and generating real leads for SMBs." }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] md:-left-[49px] top-1.5 shadow-[0_0_10px_rgba(108,43,217,0.8)]"></div>
                <h3 className="text-primary font-bold text-xl mb-1">{item.year}</h3>
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-textMuted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
