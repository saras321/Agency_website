import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export default function FreeAuditPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if already seen in this session (optional, but good for UX)
    const hasSeen = sessionStorage.getItem("hasSeenAuditPopup");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000); // 8 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenAuditPopup", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-textMuted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    Limited Time Offer
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get a Free Marketing Audit
                  </h3>
                  <p className="text-textMuted">
                    Find out exactly why your competitors are outranking you and how to fix it. Valued at $500.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="url"
                      placeholder="Your Website URL"
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Work Email"
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Claim My Free Audit
                  </button>
                </form>
                <p className="text-xs text-textMuted text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-8 flex flex-col items-center text-center"
              >
                <CheckCircle2 size={64} className="text-success mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-textMuted">
                  Our team will review your site and email the audit within 48 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
