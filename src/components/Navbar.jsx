import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 1. Logic xử lý Background & Ép Home khi ở đỉnh trang
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      
      // Đổi nền Navbar khi cuộn quá 20px
      setIsScrolled(scrollPos > 20);

      // Tuyệt chiêu: Nếu lướt lên gần đầu trang (< 100px), tự động sáng chữ Home
      if (scrollPos < 100) {
        setActiveSection("home");
      }
    };

    // 2. Logic Intersection Observer (Nhận diện Section giữa màn hình)
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Vùng nhận diện rộng 50% giữa màn hình
      threshold: [0, 0.1, 0.25],       // Nhạy ở nhiều mức độ hiển thị
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Nếu section đang hiển thị và chiếm ưu thế
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Lấy tất cả section có ID trong App.jsx để theo dõi
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Danh sách các mục Menu để Duy dễ quản lý
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-4 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#eccb59]/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex-none">
        <img
          src="./src/assets/logoMeo.png"
          alt="Logo"
          className="h-16 w-auto object-contain hover:drop-shadow-[0_0_15px_#eccb5980] transition-all cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      {/* Menu Section */}
      <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-semibold">
        {navLinks.map((link) => (
          <li 
            key={link.id}
            className={`relative group cursor-pointer transition-colors duration-300 ${
              activeSection === link.id ? "text-[#eccb59]" : "text-gray-400 hover:text-[#eccb59]/80"
            }`}
          >
            <a href={`#${link.id}`}>{link.label}</a>
            
            {/* Thanh gạch chân Active */}
            <span 
              className={`absolute -bottom-1 left-0 h-[1px] bg-[#eccb59] transition-all duration-500 ${
                activeSection === link.id ? "w-full" : "w-0 group-hover:w-full opacity-50"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;