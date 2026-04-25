import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Digital Marketing Agency</title>
      </Helmet>
      
      <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <p className="text-2xl text-textMuted mb-8">Oops! Looks like this page got lost in the funnel.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-transform hover:scale-105">
            <ArrowLeft size={20} /> Back to Homepage
          </Link>
        </motion.div>
      </main>
    </>
  );
}
