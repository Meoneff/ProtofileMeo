// import React from "react";
// import { AnimatePresence } from "framer-motion";
// import { ExternalLink, ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// const ProjectsTab = ({ activeTab, setActiveTab, categories, projects }) => {
//   return (
//     <div className="space-y-12">
//       {/* 3. Sub-categories Filter */}
//       <div className="flex justify-center">
//         <div className="bg-[#0d0d0d]/90 backdrop-blur-xl p-1.5 rounded-2xl border border-white/5 flex gap-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
//                 activeTab === cat ? "bg-[#e21d48] text-white" : "text-gray-500 hover:text-white"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 4. Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         <AnimatePresence mode="wait">
//           {projects.filter((p) => p.category === activeTab).map((project) => (
//             <motion.div
//               key={project.id}
//               layout
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080808] transition-all"
//             >
//               {/* Giữ nguyên code Card Project của bạn ở đây */}
//               <div className="aspect-[4/5] overflow-hidden relative">
//                 <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
//               </div>
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#eccb59]">{project.title}</h3>
//                 <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all">
//                    <button className="flex items-center gap-2 text-[10px] font-black text-white bg-white/5 px-5 py-2.5 rounded-full border border-white/10 uppercase hover:bg-[#e21d48]">Live Now <ExternalLink size={12}/></button>
//                    <div className="w-12 h-12 rounded-full bg-[#eccb59] flex items-center justify-center text-black"><ArrowUpRight size={24}/></div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ProjectsTab;

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github, Star } from "lucide-react";

const ProjectsTab = ({ activeTab, setActiveTab, categories }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch dữ liệu từ GitHub
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Thay 'Meoneff' bằng username GitHub của Duy
        const response = await fetch("https://api.github.com/users/Meoneff/repos?sort=updated&per_page=10");
        const data = await response.json();

        // 2. Chuyển đổi dữ liệu GitHub thành định dạng của Project Card
        const formattedProjects = data.map((repo) => ({
          id: repo.id,
          title: repo.name.replace(/-/g, " ").toUpperCase(), // Đổi tên repo từ my-project thành MY PROJECT
          description: repo.description,
          link: repo.html_url,
          live: repo.homepage || repo.html_url,
          stars: repo.stargazers_count,
          // Vì GitHub không có ảnh, tui dùng screenshot từ opengraph hoặc ảnh placeholder
          image: `https://opengraph.githubassets.com/1/Meoneff/${repo.name}`, 
          // Duy có thể dùng "topics" trên GitHub để phân loại category
          category: repo.topics && repo.topics.length > 0 ? repo.topics[0] : "All", 
        }));

        setProjects(formattedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi fetch GitHub:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="text-center text-[#eccb59] font-mono">Loading Github Repos...</div>;

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="bg-[#0d0d0d]/90 backdrop-blur-xl p-1.5 rounded-2xl border border-white/5 flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === cat ? "bg-[#eccb59] text-black" : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <AnimatePresence mode="wait">
          {projects
            .filter((p) => activeTab === "All" || p.category.toLowerCase() === activeTab.toLowerCase())
            .map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080808] hover:border-[#eccb59]/30 transition-all"
              >
                {/* Image Section */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  {/* Số sao Github cho xịn */}
                  <div className="absolute top-6 right-6 flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#eccb59] text-[10px] font-bold">
                    <Star size={12} fill="#eccb59" /> {project.stars}
                  </div>
                </div>

                {/* Content Section */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#eccb59] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.description || "No description provided."}
                  </p>
                  
                  <div className="flex items-center justify-between pointer-events-auto">
                     <a 
                       href={project.live} 
                       target="_blank" 
                       className="flex items-center gap-2 text-[10px] font-black text-white bg-white/5 px-5 py-3 rounded-full border border-white/10 uppercase hover:bg-[#eccb59] hover:text-black transition-all"
                     >
                        View Demo <ExternalLink size={12}/>
                     </a>
                     <a 
                       href={project.link} 
                       target="_blank"
                       className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[#eccb59] hover:bg-[#eccb59] hover:text-black transition-all"
                     >
                        <Github size={20}/>
                     </a>
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