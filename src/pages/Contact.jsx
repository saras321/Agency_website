import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, ChevronDown } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const faqs = [
    { q: "What is your typical project timeline?", a: "For a full funnel or website build, expect 4-6 weeks. For ongoing retainers (SEM, Social), onboarding takes 2 weeks before campaigns launch." },
    { q: "Do you work with startups?", a: "Yes, we love working with funded startups. We have special frameworks designed to find product-market fit and scale rapidly." },
    { q: "What is your minimum monthly engagement?", a: "Our retainers typically start at $3,000/month. Project-based work starts at $5,000." },
    { q: "Do you offer guarantees?", a: "We don't guarantee specific ROI numbers as that depends on your product and sales team. We do guarantee our output, transparency, and dedication to optimizing until we win." }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Digital Marketing Agency</title>
        <meta name="description" content="Get in touch to see how we can help scale your business." />
      </Helmet>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            {/* Contact Info (Left) */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's build <br/><span className="text-gradient">something great.</span></h1>
              <p className="text-xl text-textMuted mb-12">
                Fill out the form or reach out directly. We typically respond within 24 hours.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-white/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                    <p className="text-textMuted mb-1">sarasdevi2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface border border-white/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                    <p className="text-textMuted">+91 96292 18464</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-xl inline-block mt-4">
                <p className="text-white font-bold mb-2">Prefer WhatsApp? Chat with us directly</p>
                <p className="text-2xl font-bold text-[#25D366] mb-4">+91 96292 18464</p>
                <a href="https://wa.me/919629218464?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Form (Right) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ContactForm />
            </motion.div>
          </div>



          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-surface border border-white/5 rounded-lg group">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-white">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="text-textMuted p-6 pt-0 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
