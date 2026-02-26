import React from "react";
import { ExternalLink, Mail, Github, Linkedin, Instagram } from "lucide-react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Terminal from "../components/Terminal";

const Home = () => {
  return (
    <main className="relative z-10 container mx-auto px-8 mt-8 flex flex-col lg:flex-row items-center gap-16">
      {/* Left Side: Info */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Lưu ý: Bạn cần vào file Hero.jsx để đổi màu chữ Developer thành #eccb59 luôn nhé */}
        <Hero />

        <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
          I am a Web Developer with a background in Angular and .NET, and I have
          experience developing management systems using the Agile methodology.
          I focus on source code structure, scalability, and applying SOLID
          principles during development. Additionally, I have built and
          customized a Discord Bot to automate server management functions. I
          also have the ability to design and improve user interfaces using
          Figma, combining UI/UX thinking to enhance the overall user
          experience.
        </p>

        {/* <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
          My name is <span className="text-white">Hoàng Duy</span>, also known as <span className="text-[#eccb59]">Meo</span>. 
          As an Information Technology graduate, I am currently preparing to embark on my journey toward a 
          Master’s Degree. My goal is to secure a stable and challenging 
          position where I can build a solid career foundation.
        </p> */}

        <TechStack />

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 drop-shadow-[0_0_15px_#eccb59]/30">
          <button className="flex items-center gap-2 px-8 py-3 bg-gray-900 border border-[#eccb59]/30 rounded-lg hover:bg-[#eccb59]/10 transition group text-gray-300">
            Projects{" "}
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform text-[#eccb59]"
            />
          </button>
          <button className="flex items-center gap-2 px-8 py-3  bg-gray-900 border border-gray-800 rounded-lg hover:border-[#eccb59]/50 transition">
            Contact <Mail size={16} className="text-[#eccb59]" />
          </button>
        </div>

        {/* Socials */}
        <div className="flex drop-shadow-[0_0_15px_#eccb59] gap-6 pt-6">
          <Github className="text-gray-500 hover:text-[#eccb59] cursor-pointer transition-colors" />
          <Linkedin className="text-gray-500 hover:text-[#eccb59] cursor-pointer transition-colors" />
          <Instagram className="text-gray-500 hover:text-[#eccb59] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Right Side: Terminal UI */}
      <div className="w-full lg:w-1/2">
        <Terminal />
      </div>
    </main>
  );
};

export default Home;
