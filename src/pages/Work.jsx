import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, TrendingUp, ExternalLink } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

const categories = ["All", "Lead Gen", "SEM", "Social Media", "Branding"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  return (
    <>
      <Helmet>
        <title>Our Work | Digital Marketing Agency</title>
        <meta name="description" content="View our portfolio of successful digital marketing campaigns and case studies." />
      </Helmet>

      <main className="pt-32 pb-20 min-h-screen">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our <span className="text-gradient">Work</span></h1>
          <p className="text-xl text-textMuted max-w-2xl mx-auto mb-12">
            Data-driven strategies that turn attention into revenue. Filter by service to see relevant results.
          </p>

          {/* FILTER BAR */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/25" 
                    : "bg-surface text-textMuted hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedStudy(study)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors"></div>
                    <img 
                      src={study.image} 
                      alt={study.client} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-textMuted text-sm mb-2">{study.industry}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                      <p className="text-lg font-medium text-white">{study.metric}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStudy(null)}
                className="absolute inset-0 bg-background/90 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full"
              >
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="absolute top-6 right-6 z-20 p-2 bg-background/80 backdrop-blur-md text-white rounded-full hover:bg-primary transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="overflow-y-auto">
                  <div className="h-64 sm:h-80 relative">
                    <img src={selectedStudy.image} alt={selectedStudy.client} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                    <div className="absolute bottom-6 left-6 sm:left-10 z-10">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 inline-block">
                        {selectedStudy.category}
                      </span>
                      <h2 className="text-4xl sm:text-5xl font-bold text-white">{selectedStudy.client}</h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="text-textMuted leading-relaxed text-lg">{selectedStudy.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Strategy</h3>
                        <p className="text-textMuted leading-relaxed text-lg">{selectedStudy.strategy}</p>
                      </div>
                    </div>
                    
                    <div className="bg-background border border-white/5 p-6 rounded-xl h-fit">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="text-success" size={20} /> Results
                      </h3>
                      <div className="space-y-6">
                        {selectedStudy.results.map((result, idx) => (
                          <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            <p className="text-4xl font-bold text-white mb-1">{result.value}</p>
                            <p className="text-sm text-textMuted uppercase tracking-wider">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-10 border-t border-white/5 bg-background flex justify-between items-center">
                    <p className="text-textMuted">Want similar results?</p>
                    <a href="https://wa.me/919629218464" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                      Let's Talk <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
