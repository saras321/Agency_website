import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessType: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // A: Submit to FormSubmit
    try {
      await fetch("https://formsubmit.co/ajax/sarasdevi2005@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          businessType: formData.businessType,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: "New Lead from Savi Media Website!"
        }),
      });
    } catch (error) {
      console.error("Formspree submission failed", error);
    }

    // B: Open WhatsApp
    const text = `
🔔 *New Lead from Website*

👤 *Name:* ${formData.name}
🏢 *Business Type:* ${formData.businessType}
📱 *WhatsApp:* ${formData.whatsapp}
🎯 *Service Needed:* ${formData.service}
💰 *Budget:* ${formData.budget}
💬 *Message:* ${formData.message || "N/A"}
`;
    // B: Show Success immediately
    setFormStatus("success");
    setFormData({
      name: "", email: "", whatsapp: "", businessType: "", service: "", budget: "", message: ""
    });

    // C: Open WhatsApp after a short delay so they can see the success message
    setTimeout(() => {
      window.open(`https://wa.me/919629218464?text=${encodeURIComponent(text)}`, "_blank");
    }, 1500);
  };

  return (
    <div className="bg-surface border border-white/5 p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
      {formStatus === "success" ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 flex flex-col items-center text-center">
          <CheckCircle2 size={64} className="text-success mb-6" />
          <h3 className="text-3xl font-bold text-white mb-2">Thank you!</h3>
          <p className="text-textMuted mb-8">We'll reach out to you on WhatsApp shortly 🚀</p>
          <button onClick={() => setFormStatus("idle")} className="text-primary hover:text-white transition-colors">
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Tell us about your project</h3>
            <p className="text-xs text-textMuted">
              Note: The form will send an email directly to our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Full Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Email Address *</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-textMuted mb-2">WhatsApp Number *</label>
            <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Business Type *</label>
              <select required name="businessType" value={formData.businessType} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                <option value="" disabled>Select business type</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Restaurant & Food">Restaurant & Food</option>
                <option value="Retail">Retail</option>
                <option value="Finance">Finance</option>
                <option value="Travel">Travel</option>
                <option value="SaaS/Tech">SaaS/Tech</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Service Interested In *</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                <option value="" disabled>Select a service</option>
                <option value="Poster & Reel Creation">Poster & Reel Creation</option>
                <option value="Competitor Analysis">Competitor Analysis</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="SEM / Google Ads">SEM / Google Ads</option>
                <option value="Full Package">Full Package</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-textMuted mb-2">Monthly Budget *</label>
            <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
              <option value="" disabled>Select a budget</option>
              <option value="Under ₹3,000">Under ₹3,000</option>
              <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
              <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
              <option value="Above ₹10,000">Above ₹10,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-textMuted mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us a bit about your business goals..."></textarea>
          </div>

          <button disabled={formStatus === "submitting"} type="submit" className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/25">
            {formStatus === "submitting" ? "Sending..." : "Send Enquiry 🚀"}
          </button>
        </form>
      )}
    </div>
  );
}
