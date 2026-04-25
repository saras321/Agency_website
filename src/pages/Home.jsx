import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { coreServices } from "../data/services";
import { caseStudies } from "../data/caseStudies";
import { AnimatedCounter, LogoMarquee, TestimonialCarousel } from "../components/SharedComponents";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Impossible to Ignore | Digital Marketing Agency</title>
        <meta name="description" content="We scale ambitious SMBs and startups with high-converting funnels, viral reels, and data-driven SEM." />
      </Helmet>

      <main className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-background z-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-success"></span>
              <span className="text-sm font-medium text-white">10+ Happy Clients & Growing 🚀</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
            >
              We Make Your Brand <br />
              <span className="text-gradient">Impossible to Ignore</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-textMuted max-w-3xl mx-auto mb-10"
            >
              Stop losing customers to competitors with inferior products but better marketing. We build funnels and content that convert.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#contact-form" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                Get Free Strategy Call
              </a>
              <Link to="/work" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
                View Our Work <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textMuted"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* LOGO MARQUEE */}
        <section className="bg-background">
          <p className="text-center text-sm font-medium text-textMuted mb-4">TRUSTED BY AMBITIOUS BRANDS</p>
          <LogoMarquee />
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Arsenal</h2>
              <p className="text-xl text-textMuted max-w-2xl mx-auto">
                We don't do everything. We specialize in the highest-leverage growth levers for modern brands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  whileHover={{ y: -10 }}
                  className="bg-background border border-white/5 hover:border-primary/50 p-10 rounded-2xl transition-all group shadow-lg hover:shadow-primary/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
                  <service.icon className="w-14 h-14 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-textMuted mb-8 text-lg">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-primary font-semibold group-hover:text-white transition-colors">
                    Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value="10" suffix="+" />
                </div>
                <p className="text-primary-100 font-medium text-white/80">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value="100" suffix="%" />
                </div>
                <p className="text-primary-100 font-medium text-white/80">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value="3" suffix="+" />
                </div>
                <p className="text-primary-100 font-medium text-white/80">Years of Expertise</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value="50" suffix="+" />
                </div>
                <p className="text-primary-100 font-medium text-white/80">Creatives Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-2xl"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Results That Speak</h2>
                <p className="text-xl text-textMuted">We don't care about vanity metrics. We care about pipeline, revenue, and market share.</p>
              </motion.div>
              <Link to="/work" className="hidden md:inline-flex px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors items-center gap-2">
                View All Case Studies
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  className="group rounded-2xl overflow-hidden bg-surface border border-white/5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
                    <img 
                      src={study.image} 
                      alt={study.client} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-textMuted text-sm mb-2">{study.industry}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                    <div className="flex items-start gap-3 mb-6">
                      <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                      <p className="text-lg font-medium text-white">{study.metric}</p>
                    </div>
                    <Link to="/work" className="text-primary font-semibold hover:text-white transition-colors flex items-center">
                      Read Case Study <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Link to="/work" className="inline-flex px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors items-center gap-2">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <Pricing />

        {/* TESTIMONIALS */}
        <section className="py-32 bg-surface border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't Just Take Our Word For It</h2>
              <p className="text-xl text-textMuted max-w-2xl mx-auto">Hear from the founders and marketing leaders who trusted us to scale their brands.</p>
            </motion.div>
          </div>
          <TestimonialCarousel />
        </section>

        {/* FINAL CTA */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-full max-w-3xl h-[400px] bg-primary/20 blur-[150px] rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Ready to <span className="text-gradient">Grow?</span>
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-xl text-textMuted mb-12 max-w-2xl mx-auto"
            >
              Stop leaving money on the table. Let's build a marketing engine that drives predictable, scalable growth for your business.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <a href="#contact-form" className="inline-flex px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-xl transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 items-center gap-3">
                Book Your Strategy Call <ArrowRight size={24} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact-form" className="py-32 bg-surface border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build something great.</h2>
              <p className="text-xl text-textMuted max-w-2xl mx-auto">Fill out the form below to get started.</p>
            </motion.div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
