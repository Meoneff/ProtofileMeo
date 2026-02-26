import React from "react";
import { Download, Eye, Briefcase, Award, GraduationCap, Sparkles, Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-20 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. Header Section: Căn giữa giống mẫu */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="text-[#eccb59] drop-shadow-[0_0_15px_#eccb5960]">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-sm">
            <Sparkles size={16} className="text-[#eccb59]" />
            <span>Transforming ideas into digital experiences</span>
            <Sparkles size={16} className="text-[#eccb59]" />
          </div>
        </div>

        {/* 2. Main Content: Chia 2 cột (Text & Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#eccb59] text-xl font-medium">Hello, I'm</p>
              <h3 className="text-4xl font-bold text-white">Hoàng Duy (Meo)</h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              As an <span className="text-white">Information Technology graduate</span>, I am currently preparing to embark on my journey toward a <span className="text-[#eccb59]">Master’s Degree</span>. My background fuels my drive to build intuitive and high-performance web interfaces. I am a lifelong learner at heart, always eager to explore emerging technologies. 🔥🔥🔥
            </p>

            {/* Quote box giống trong mẫu */}
            <div className="p-4 bg-[#111] border-l-4 border-[#eccb59] rounded-r-xl bg-gradient-to-r from-[#eccb59]/5 to-transparent">
              <p className="text-gray-400 italic text-sm flex gap-2">
                <Quote size={16} className="text-[#eccb59] shrink-0" />
                "Leveraging AI as a professional tool, not a replacement."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#eccb59] text-black font-bold rounded-lg hover:shadow-[0_0_20px_#eccb5940] transition-all active:scale-95">
                <Download size={18} /> Download CV
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-800 text-gray-400 rounded-lg hover:border-[#eccb59]/50 hover:text-[#eccb59] transition-all">
                <Eye size={18} /> View Projects
              </button>
            </div>
          </div>

          {/* Avatar với hiệu ứng Glow tròn */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[#eccb59]/20 rounded-full blur-[60px] scale-75 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl group hover:border-[#eccb59]/50 transition-colors duration-500">
              {/* Thay /avatar.jpg bằng ảnh của Duy */}
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <span className="text-gray-700 font-mono text-sm uppercase">Duy_Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Stats Section: Bento Box 3 cột giống mẫu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1 */}
          <div className="p-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl relative overflow-hidden group hover:border-[#eccb59]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-[#eccb59]">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono uppercase">Total Projects</p>
                <p className="text-4xl font-black text-white">14</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">Web, design, and editing work delivered</p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#eccb59] group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Box 2 */}
          <div className="p-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl relative overflow-hidden group hover:border-[#eccb59]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-[#eccb59]">
                <Award size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono uppercase">Certificates</p>
                <p className="text-4xl font-black text-white">2</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">Professional skills validated</p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#eccb59] group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Box 3 */}
          <div className="p-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl relative overflow-hidden group hover:border-[#eccb59]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl text-[#eccb59]">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono uppercase">Academic</p>
                <p className="text-4xl font-black text-white">Master</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">Preparing for the next tech journey</p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#eccb59] group-hover:w-full transition-all duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;