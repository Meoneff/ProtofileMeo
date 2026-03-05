import React, { useState } from "react";
import {
  Terminal,
  Code2,
  ExternalLink,
  ArrowUpRight,
  Monitor,
  Award,
  Layers,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
// Import các con của nó từ folder Portfolio
import ProjectsTab from "../components/Portfolio/ProjectsTab";
import CertificatesTab from "../components/Portfolio/CertificatesTab";
import TechStackTab from "../components/Portfolio/TechStackTab";

const Portfolio = () => {
  // Tab lớn: Projects, Certificates, Tech Stack
  const [activeMainTab, setActiveMainTab] = useState("Projects");

  // Tab nhỏ (Chỉ dùng cho Projects): Project, Design, Editing
  const [activeSubTab, setActiveSubTab] = useState("Project");

  const categories = ["Project", "Design", "Editing"];
  const projects = [
    {
      id: 1,
      title: "Website Perusahaan Prima Tekstil",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426",
    },
    {
      id: 2,
      title: "Liburan Kita - Platform Pemesanan",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070",
    },
    {
      id: 3,
      title: "Kedai Kopi Kenangan Senja",
      category: "Project",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    },
  ];

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
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter  italic">
              Portfolio{" "}
              <span className="text-[#eccb59] filter drop-shadow-[0_0_15px_rgba(236,203,89,0.5)]">
                Showcase
              </span>
            </h2>

            <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#eccb59] to-transparent opacity-50"></div>
          </div>

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

        {/* 2. KHUNG CHUNG BENTO (GIỮ NGUYÊN CẤU TRÚC - CHỈ THÊM CLICK) */}
        <div className="max-w-full mx-auto w-full px-4 md:px-2">
          <div className="bg-[#0f0505]/60 backdrop-blur-2xl border border-white/5 p-3 rounded-[1.5rem] shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="flex flex-col md:flex-row gap-3 relative z-10 px-8">
              {[
                { id: "Projects", icon: <Monitor size={22} /> },
                { id: "Certificates", icon: <Award size={22} /> },
                { id: "Tech Stack", icon: <Layers size={22} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMainTab(tab.id)} // Cập nhật tab khi click
                  className={`flex-1 flex items-center justify-center gap-4 py-6 rounded-[1rem] transition-all duration-500 group ${
                    activeMainTab === tab.id
                      ? "bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] border border-red-500/30 text-white shadow-[0_10px_40px_rgba(220,38,38,0.15)]"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl transition-colors ${activeMainTab === tab.id ? "bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "bg-gray-800/50 text-gray-600 group-hover:text-gray-400"}`}
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

        {/* 3. PHẦN NỘI DUNG THAY ĐỔI (Động) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMainTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Nếu chọn Projects: Hiện Sub-filter và Grid ảnh */}
              {activeMainTab === "Projects" && (
                <ProjectsTab
                  activeTab={activeSubTab}
                  setActiveTab={setActiveSubTab}
                  categories={categories}
                  projects={projects}
                />
              )}

              {/* Nếu chọn Certificates: Hiện component chứng chỉ */}
              {activeMainTab === "Certificates" && <CertificatesTab />}

              {/* Nếu chọn Tech Stack: Hiện grid icon như hình bạn gửi */}
              {activeMainTab === "Tech Stack" && <TechStackTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
