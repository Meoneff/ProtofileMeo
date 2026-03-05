import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { motion } from "framer-motion";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    // Duy lưu ý: h-full hoặc min-h-screen ở đây cực kỳ quan trọng
    <div className="relative min-h-screen bg-[#0a0a0a] ctext-gray-300 selection:bg-[#eccb59]/30 scroll-smooth">
      {/* 1. Lưới Grid: FIXED để lướt tới đâu nó cũng hiện ra tới đó */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] z-0 pointer-events-none"></div>

      {/* 2. Vùng màu Gradient: SỬA LẠI Ở ĐÂY */}
      {/* Thay vì dùng absolute inset-0, mình dùng h-full để nó kéo dài từ đầu đến cuối trang */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Đốm màu 1: Ở đỉnh trang Home */}
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#eccb59]/15 rounded-full blur-[120px] opacity-70"></div>

        {/* Đốm màu 2: Nằm sâu xuống dưới, ngang tầm trang About */}
        {/* Mình dùng pixel (ví dụ 1000px) để chắc chắn nó nằm ở trang 2 */}
        <div className="absolute top-[100vh] right-[-5%] w-[500px] h-[500px] bg-[#eccb59]/10 rounded-full blur-[100px] opacity-50"></div>

        {/* Đốm màu 3: Nằm ở cuối cùng trang web */}
        <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-[#eccb59]/10 rounded-full blur-[150px] opacity-40"></div>
      </div>

      {/* Navbar cố định */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar activeSection={activeSection} />
      </div>

      {/* 3. Nội dung chính */}
      <div className="relative z-10">
        <motion.section
          id="home"
          onViewportEnter={() => setActiveSection("home")}
          viewport={{ amount: 0.5 }}
          className="min-h-screen flex items-center"
        >
          <Home />
        </motion.section>

        <motion.section
          id="about"
          onViewportEnter={() => setActiveSection("about")}
          viewport={{ amount: 0.5 }}
          className="min-h-screen flex items-center"
        >
          <About />
        </motion.section>

        <motion.section
          id="portfolio"
          onViewportEnter={() => setActiveSection("portfolio")}
          viewport={{ amount: 0.5 }}
          className="min-h-screen flex items-center"
        >
          <Portfolio />
        </motion.section>

        <motion.section
          id="contact"
          onViewportEnter={() => setActiveSection("contact")}
          viewport={{ amount: 0.5 }}
          className="min-h-screen flex items-center"
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default App;
