import React, { useState } from "react";
import {
  Terminal,
  Code2,
  ExternalLink,
  ArrowUpRight,
  Monitor,
  Award,
  Layers,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Project");

  const projects = [
    {
      id: 1,
      title: "Website Perusahaan (Company Profile) Prima Tekstil",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Liburan Kita - Platform Pemesanan Penginapan",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Website Company Profile Kedai Kopi KenanganSenja",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const categories = ["Project", "Design", "Editing"];

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-24 px-8 relative z-10"
    >
      <div className="container mx-auto space-y-16">
        {/* 1. Header Section */}

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Tiêu đề chính với hiệu ứng gạch chân giả */}

          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter  italic">
              Portfolio{" "}
              <span className="text-[#eccb59] filter drop-shadow-[0_0_15px_rgba(236,203,89,0.5)]">
                Showcase
              </span>
            </h2>

            {/* Thanh trang trí dưới chân chữ */}

            <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#eccb59] to-transparent opacity-50"></div>
          </div>

          {/* Phần mô tả bóp gọn lại cho thanh thoát */}

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 filter drop-shadow-[0_0_70px_rgba(236,203,89,0.8)] tracking-tight">
              <div className="h-[1px] w-12 bg-gray-800"></div>

              <Terminal size={18} className="text-[#eccb59] animate-pulse" />

              <span className="text-[#eccb59] font-mono text-xs uppercase tracking-[0.3em]">
                Technical Expertise
              </span>

              <Code2 size={18} className="text-[#eccb59] animate-pulse" />

              <div className="h-[1px] w-12 bg-gray-800"></div>
            </div>

            <p className="text-gray-400 text-m md:text-base leading-relaxed font-mono px-4">
              Explore my journey through{" "}
              <span className="text-white border-b border-gray-700">
                projects
              </span>
              ,
              <span className="text-white border-b border-gray-700">
                {" "}
                certifications
              </span>
              , and expertise. Each section represents a milestone in my
              continuous learning path.
            </p>
          </div>
        </div>

        {/* 2. KHUNG CHUNG BENTO - Đã kéo dài (max-w-7xl) */}
        <div className="max-w-full mx-auto w-full px-4 md:px-2">
          <div className="bg-[#0f0505]/60 backdrop-blur-2xl border border-white/5 p-3 rounded-[1.5rem] shadow-2xl overflow-hidden relative">
            {/* Lớp lưới mờ trang trí phía sau (Grid) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="flex flex-col md:flex-row gap-3 relative z-10 px-8">
              {[
                { id: "Projects", icon: <Monitor size={22} />, active: true },
                {
                  id: "Certificates",
                  icon: <Award size={22} />,
                  active: false,
                },
                { id: "Tech Stack", icon: <Layers size={22} />, active: false },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`flex-1 flex items-center justify-center gap-4 py-6 rounded-[1rem] transition-all duration-500 group ${
                    tab.active
                      ? "bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] border border-red-500/30 text-white shadow-[0_10px_40px_rgba(220,38,38,0.15)]"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl transition-colors ${tab.active ? "bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "bg-gray-800/50 text-gray-600 group-hover:text-gray-400"}`}
                  >
                    {tab.icon}
                  </div>
                  <span className="font-bold tracking-[0.3em] text-sm uppercase font-mono">
                    {tab.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Sub-categories Filter */}
        <div className="flex justify-center">
          <div className="bg-[#0d0d0d]/90 backdrop-blur-xl p-1.5 rounded-2xl border border-white/5 flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-[#e21d48] text-white shadow-[0_5px_25px_rgba(226,29,72,0.4)] scale-105"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          <AnimatePresence mode="wait">
            {projects
              .filter((p) => p.category === activeTab)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 hover:border-[#eccb59]/40 shadow-2xl"
                >
                  {/* Container Ảnh */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100 group-hover:blur-0 blur-[1px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100"></div>
                  </div>

                  {/* Nội dung đè lên ảnh */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="h-[2px] w-12 bg-[#eccb59]"></div>
                        <p className="text-[#eccb59] text-[10px] uppercase font-mono tracking-[0.4em] font-bold">
                          Project Portofolio
                        </p>
                      </div>

                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#eccb59] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                        {project.title}
                      </h3>

                      <div className="flex items-center justify-between pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        <button className="flex items-center gap-2 text-[10px] font-black text-white bg-white/5 backdrop-blur-2xl px-5 py-2.5 rounded-full border border-white/10 uppercase tracking-widest hover:bg-[#e21d48] transition-colors">
                          Live Now <ExternalLink size={12} />
                        </button>
                        <div className="w-12 h-12 rounded-full bg-[#eccb59] flex items-center justify-center text-black shadow-[0_0_20px_rgba(236,203,89,0.4)]">
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
