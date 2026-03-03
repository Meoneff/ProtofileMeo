import React from "react";
import {
  Download,
  Eye,
  Briefcase,
  Award,
  GraduationCap,
  Sparkles,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-24 px-8 relative z-10"
    >
      <div className="container mx-auto space-y-16">
        {/* 1. Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About{" "}
            <span className="text-[#eccb59] drop-shadow-[0_0_15px_#eccb5960]">
              Me
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-m">
            <Sparkles size={16} className="text-[#eccb59]" />
            <span>Transforming ideas into digital experiences</span>
            <Sparkles size={16} className="text-[#eccb59]" />
          </div>
        </div>

        {/* 2. Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#eccb59] text-xl font-medium">Hello, I'm</p>
              <h3 className="text-4xl font-bold text-white">Hoàng Duy (Meo)</h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              As an{" "}
              <span className="text-white">Information Technology graduate</span>
              , I am currently preparing to embark on my journey toward a{" "}
              <span className="text-[#eccb59]">Master’s Degree</span>. My
              background fuels my drive to build intuitive and high-performance
              web interfaces. I am a lifelong learner at heart, always eager to
              explore emerging technologies.{" "}
              <span className="text-white/90">
                Ultimately, my goal is to secure a stable and challenging
                position where I can build a solid career foundation.
              </span>{" "}
              🔥🔥🔥
            </p>

            {/* Quote box */}
            <div className="p-4 bg-[#111] border-l-4 border-[#eccb59] rounded-r-xl bg-gradient-to-r from-[#eccb59]/5 to-transparent">
              <p className="text-gray-400 italic text-sm flex gap-2">
                <Quote size={16} className="text-[#eccb59] shrink-0" />
                "Leveraging AI as a professional tool, not a replacement."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/HoangDuy_CV.pdf"
                download="HoangDuy_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-[#eccb59] text-black font-bold rounded-lg hover:shadow-[0_0_20px_#eccb5940] transition-all active:scale-95 cursor-pointer"
              >
                <Download size={18} /> Download CV
              </a>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-800 text-gray-400 rounded-lg hover:border-[#eccb59]/50 hover:text-[#eccb59] transition-all">
                <Eye size={18} /> View Projects
              </button>
            </div>
          </div>

          {/* Right Column: Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-[#eccb59]/20 rounded-full blur-[60px] scale-75 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl group hover:border-[#eccb59]/50 transition-colors duration-500">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <img
                  src="./src/assets/avtMeo.png"
                  alt="Hoàng Duy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 drop-shadow-[0_0_15px_#eccb59]/30">
          {[
            {
              label: "Total Projects",
              value: "14",
              desc: "Web, design, and editing work delivered",
              icon: <Briefcase size={24} />,
            },
            {
              label: "Certificates",
              value: "2",
              desc: "Professional skills validated",
              icon: <Award size={24} />,
            },
            {
              label: "Academic",
              value: "Master",
              desc: "Preparing for the next tech journey",
              icon: <GraduationCap size={24} />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-[#0d0d0d] border border-gray-800 rounded-2xl relative overflow-hidden group hover:border-[#eccb59]/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-900 border border-gray-800  rounded-xl text-[#eccb59]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono uppercase">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600">{stat.desc}</p>

              {/* Mũi tên góc dưới bên phải */}
              <div className="absolute bottom-4 right-4 text-gray-700 group-hover:text-[#eccb59] transition-colors">
                <ArrowUpRight size={16} />
              </div>

              {/* Thanh Border Bottom di chuyển liên tục giống mẫu */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900/50 overflow-hidden">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#eccb59] to-transparent animate-border-flow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;