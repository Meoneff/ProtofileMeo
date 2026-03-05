import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Linkedin,
  Instagram,
  Github,
  Facebook,
  MessageSquare,
  User,
  Mail,
  Phone,
  Share2,
  MessageCircle,
  Image as ImageIcon,
} from "lucide-react";

const Contact = () => {
  // Logic để bắt tên người dùng nhập vào
  const [userName, setUserName] = useState("");

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 md:px-8 relative z-10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* --- Title Section --- */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Contact{" "}
            <span className="text-[#eccb59] filter drop-shadow-[0_0_15px_rgba(236,203,89,0.4)]">
              Me
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-xs">
            Do you have any questions? Send me a message, and I'll reply
            immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- CỘT TRÁI (4/12): Form & Social --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Box 1: Form nhỏ bên trái */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0f0c05]/60 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] shadow-2xl relative"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#eccb59] text-2xl font-black italic uppercase">
                  Contact
                </h3>
                <Share2
                  size={20}
                  className="text-[#eccb59] cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
              <form className="space-y-4">
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#1a160a] border border-white/5 py-4 pl-12 pr-4 rounded-2xl text-sm text-white focus:outline-none focus:border-[#eccb59]/50"
                  />
                </div>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#1a160a] border border-white/5 py-4 pl-12 pr-4 rounded-2xl text-sm text-white focus:outline-none focus:border-[#eccb59]/50"
                  />
                </div>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-5 text-gray-500"
                    size={16}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-[#1a160a] border border-white/5 py-4 pl-12 pr-4 rounded-2xl text-sm text-white focus:outline-none focus:border-[#eccb59]/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#eccb59] hover:bg-[#d4b44a] text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Box 2: Social Connect - ĐÃ CẬP NHẬT LINK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0f0c05]/60 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] shadow-2xl"
            >
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <div className="h-[2px] w-6 bg-[#eccb59]"></div> Connect With Me
              </h3>

              <div className="flex flex-col gap-4">
                {/* LinkedIn - Ô lớn phía trên */}
                <a
                  href="https://www.linkedin.com/in/hoangduymeo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300"
                >
                  {/* Hiệu ứng quét màu khi hover */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  <div className="bg-[#0077b5] p-3 rounded-xl text-white shadow-[0_0_15px_rgba(0,119,181,0.3)]">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Let's Connect
                    </p>
                    <p className="text-gray-400 text-[10px] font-mono">
                      on LinkedIn
                    </p>
                  </div>
                </a>

                {/* Github - Ô lớn thứ 2 */}
                <a
                  href="https://github.com/Meoneff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300"
                >
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  <div className="bg-[#333] p-3 rounded-xl text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Github</p>
                    <p className="text-gray-400 text-[10px] font-mono">
                      @Meoneff
                    </p>
                  </div>
                </a>

                {/* Grid 2 ô nhỏ bên dưới */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Instagram",
                      user: "@meo.neff",
                      icon: <Instagram size={20} />,
                      link: "https://www.instagram.com/meo.neff/",
                      bgColor: "bg-[#e4405f]",
                      shadow: "shadow-[0_0_15px_rgba(228,64,95,0.3)]",
                    },
                    {
                      name: "Facebook",
                      user: "@meo.neff",
                      icon: <Facebook size={20} />,
                      link: "https://www.facebook.com/meo.neff/",
                      bgColor: "bg-[#1877f2]",
                      shadow: "shadow-[0_0_15px_rgba(24,119,242,0.3)]",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300"
                    >
                      {/* Hiệu ứng quét màu */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                      <div
                        className={`${social.bgColor} ${social.shadow} w-fit p-2 rounded-lg text-white mb-2`}
                      >
                        {social.icon}
                      </div>
                      <p className="text-white font-bold text-[11px]">
                        {social.name}
                      </p>
                      <p className="text-gray-400 text-[9px] font-mono truncate">
                        {social.user}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- CỘT PHẢI (8/12): Comments Section --- */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#0f0c05]/60 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl h-full"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-[#eccb59]/10 rounded-xl text-[#eccb59]">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-white font-bold text-xl">
                  Comments{" "}
                  <span className="text-[#eccb59] text-sm ml-1">
                    (Live Preview)
                  </span>
                </h3>
              </div>

              {/* Comment Form */}
              <div className="space-y-6 border-b border-white/5 pb-10 mb-10">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 ml-2">
                    Name <span className="text-[#eccb59]">*</span>
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#111111] border border-white/5 py-4 px-6 rounded-2xl text-white focus:outline-none focus:border-[#eccb59]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 ml-2">
                    Message <span className="text-[#eccb59]">*</span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    rows="4"
                    className="w-full bg-[#111111] border border-white/5 py-4 px-6 rounded-2xl text-white focus:outline-none focus:border-[#eccb59]/50 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#eccb59] hover:bg-[#d4b44a] text-black font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                  <Send size={16} /> Post Comment
                </button>
              </div>

              {/* List Comments Preview */}
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex gap-4 transition-all hover:bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eccb59] to-[#b39535] flex-shrink-0 flex items-center justify-center font-bold text-black uppercase text-xl shadow-[0_0_15px_rgba(236,203,89,0.3)]">
                    {userName ? userName.trim().charAt(0).toUpperCase() : "G"}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold text-sm">
                        {userName || "Guest"}
                      </h4>
                      <span className="text-[10px] text-gray-600 font-mono italic">
                        Just now
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Your GitHub is great, and your website is very impressive
                      too!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- HR FULL WIDTH --- */}
        <div className="relative mt-24 mb-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100vw", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#eccb59]/40 to-transparent"
          />
        </div>

        {/* --- FOOTER INFO --- */}
        <footer className="text-center space-y-4 pt-4">
          <p className="text-gray-600 text-[13px] md:text-[14px] font-mono tracking-[0.4em] uppercase">
            © 2026 <span className="text-[#eccb59] font-black">M E O™</span>.
            All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 text-[9px] text-gray-800 font-mono uppercase tracking-widest">
            <span className="hover:text-[#eccb59] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#eccb59] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
