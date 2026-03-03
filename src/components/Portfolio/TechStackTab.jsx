import React from "react";

const TechStackTab = () => {
  const stacks = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
    { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "SweetAlert2", icon: "https://avatars.githubusercontent.com/u/16110188?s=200&v=4" },
    { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
    { name: "Adobe Animate", icon: "https://www.vectorlogo.zone/logos/adobe_animate/adobe_animate-icon.svg" },
    { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
    { name: "Capcut", icon: "https://seeklogo.com/images/C/capcut-logo-A91C27B2B6-seeklogo.com.png" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {stacks.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(236, 203, 89, 0.3)" 
            }}
            className="group relative flex flex-col items-center justify-center p-6 rounded-[1.5rem] 
                       bg-[#111111]/80 border border-white/5 shadow-xl transition-all duration-300"
          >
            {/* Ánh sáng mờ phía sau icon khi hover */}
            <div className="absolute inset-0 bg-[#eccb59]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-[1.5rem]" />
            
            <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" 
              />
            </div>
            
            <span className="relative z-10 text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackTab;