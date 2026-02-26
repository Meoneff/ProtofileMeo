import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { motion } from "framer-motion";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-[#eccb59]/30 scroll-smooth relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>
      
      {/* Truyền activeSection xuống Navbar để nó hiển thị */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar activeSection={activeSection} />
      </div>

      <div className="relative z-10">
        {/* Section Home */}
        <motion.section 
          id="home" 
          onViewportEnter={() => setActiveSection("home")}
          viewport={{ amount: 0.5 }} // Khi hiện 50% là nhận diện ngay
          className="min-h-screen flex items-center"
        >
          <Home />
        </motion.section>

        {/* Section About */}
        <motion.section 
          id="about" 
          onViewportEnter={() => setActiveSection("about")}
          viewport={{ amount: 0.5 }}
          className="min-h-screen flex items-center"
        >
          <About />
        </motion.section>
      </div>
    </div>
  );
};

export default App;