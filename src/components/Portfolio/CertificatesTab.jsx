import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

const CertificatesTab = () => {
  const certs = [
    { title: "Frontend Developer Professional", issuer: "Google", date: "2024" },
    { title: "UI/UX Advanced Design", issuer: "Coursera", date: "2023" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {certs.map((cert, index) => (
        <div key={index} className="bg-[#0f0505]/40 border border-white/5 p-6 rounded-3xl flex items-center gap-6 hover:border-red-500/30 transition-all">
          <div className="bg-red-500/10 p-4 rounded-2xl text-red-500">
            <Award size={32} />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">{cert.title}</h4>
            <p className="text-gray-500 font-mono text-sm uppercase">{cert.issuer} • {cert.date}</p>
          </div>
          <CheckCircle2 className="ml-auto text-[#eccb59] opacity-50" size={20} />
        </div>
      ))}
    </div>
  );
};

export default CertificatesTab;