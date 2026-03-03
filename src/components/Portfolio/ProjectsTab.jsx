import React from "react";
import { AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const ProjectsTab = ({ activeTab, setActiveTab, categories, projects }) => {
  return (
    <div className="space-y-12">
      {/* 3. Sub-categories Filter */}
      <div className="flex justify-center">
        <div className="bg-[#0d0d0d]/90 backdrop-blur-xl p-1.5 rounded-2xl border border-white/5 flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === cat ? "bg-[#e21d48] text-white" : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <AnimatePresence mode="wait">
          {projects.filter((p) => p.category === activeTab).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080808] transition-all"
            >
              {/* Giữ nguyên code Card Project của bạn ở đây */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#eccb59]">{project.title}</h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all">
                   <button className="flex items-center gap-2 text-[10px] font-black text-white bg-white/5 px-5 py-2.5 rounded-full border border-white/10 uppercase hover:bg-[#e21d48]">Live Now <ExternalLink size={12}/></button>
                   <div className="w-12 h-12 rounded-full bg-[#eccb59] flex items-center justify-center text-black"><ArrowUpRight size={24}/></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsTab;