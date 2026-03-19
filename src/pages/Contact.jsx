import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
  Share2,
  MessageCircle,
} from "lucide-react";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const Contact = () => {
// --- 1. State cho Form Contact
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isEmailSending, setIsEmailSending] = useState(false);

  // --- 2. State cho Form Comment 
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in your full name, email address, and message to send the email to Meo!",
        background: "#0f0c05",
        color: "#fff",
      });
      return;
    }

    setIsEmailSending(true);

    try {
      await emailjs.send(
        "service_gef76aj", 
        "template_3i6173j", 
        {
          from_name: contactName,
          reply_to: contactEmail,
          message: contactMessage,
        },
        "MGdeHGTT5Ci08jit2"
      );

      Swal.fire({
        icon: "success",
        title: "Successfully!",
        text: "The message has been forwarded to Meo's Gmail.",
        timer: 2000,
        showConfirmButton: false,
        background: "#0f0c05",
        color: "#fff",
      });

      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch (error) {
      console.error("Lỗi gửi mail:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi rồi",
        text: "Không gửi được mail, Duy kiểm tra lại kết nối nhé!",
        background: "#0f0c05",
        color: "#fff",
      });
    } finally {
      setIsEmailSending(false);
    }
  };

  // 2. Lấy dữ liệu Real-time từ Firebase khi component load
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));

    // onSnapshot giúp dữ liệu tự cập nhật mà không cần F5
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(docs);
    });

    return () => unsubscribe(); // Clean up khi đóng component
  }, []);

  // 3. Hàm gửi comment lên Firebase
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(docs);
    });
    return () => unsubscribe();
  }, []);

  // --- 5. Hàm gửi Comment lên Firebase ---
  const handlePostComment = async (e) => {
    e.preventDefault();

    if (!commentName.trim() || !commentMessage.trim()) {
      Swal.fire({
        title: "Notification",
        text: "Please enter your name and comment!",
        icon: "warning",
        confirmButtonColor: "#eccb59",
        background: "#0f0c05",
        color: "#fff",
      });
      return;
    }

    setIsSending(true);
    try {
      await addDoc(collection(db, "comments"), {
        name: commentName,
        message: commentMessage,
        createdAt: serverTimestamp(),
      });

      setCommentName(""); // Xóa tên sau khi post
      setCommentMessage(""); // Xóa nội dung sau khi post

      Swal.fire({
        title: "Thank you!",
        text: "Your comment has been displayed!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: "#0f0c05",
        color: "#fff",
      });
    } catch (error) {
      console.error("Lỗi Firebase:", error);
      Swal.fire({
        title: "Sorry!",
        text: "404!",
        icon: "error",
        background: "#0f0c05",
        color: "#fff",
      });
    } finally {
      setIsSending(false);
    }
  };

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
            {/* Box 1: Form nhỏ bên trái (Gửi email/contact) */}
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
              <form className="space-y-4" onSubmit={handleSendEmail}>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
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
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
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
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows="4"
                    className="w-full bg-[#1a160a] border border-white/5 py-4 pl-12 pr-4 rounded-2xl text-sm text-white focus:outline-none focus:border-[#eccb59]/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isEmailSending}
                  className="w-full bg-[#eccb59] hover:bg-[#d4b44a] text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isEmailSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Box 2: Social Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0f0c05]/60 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] shadow-2xl"
            >
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <div className="h-[2px] w-6 bg-[#eccb59]"></div> Connect With Me
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/hoangduymeo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300"
                >
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
                  {/* <span className="text-[#eccb59] text-sm ml-1">
                    (Real-time Database)
                  </span> */}
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
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#111111] border border-white/5 py-4 px-6 rounded-2xl text-white focus:outline-none focus:border-[#eccb59]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 ml-2">
                    Message <span className="text-[#eccb59]">*</span>
                  </label>
                  <textarea
                    value={commentMessage}
                    onChange={(e) => setCommentMessage(e.target.value)}
                    placeholder="Write your message here..."
                    rows="4"
                    className="w-full bg-[#111111] border border-white/5 py-4 px-6 rounded-2xl text-white focus:outline-none focus:border-[#eccb59]/50 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handlePostComment}
                  disabled={isSending}
                  className="w-full bg-[#eccb59] hover:bg-[#d4b44a] text-black font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs disabled:opacity-50"
                >
                  {isSending ? (
                    "Posting..."
                  ) : (
                    <>
                      <Send size={16} /> Post Comment
                    </>
                  )}
                </button>
              </div>

              {/* List Comments từ Firebase */}
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {comments.length > 0 ? (
                  comments.map((item) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={item.id}
                      className="bg-white/5 p-6 rounded-3xl border border-white/5 flex gap-4 transition-all hover:bg-white/10"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eccb59] to-[#b39535] flex-shrink-0 flex items-center justify-center font-bold text-black uppercase text-xl shadow-[0_0_15px_rgba(236,203,89,0.3)]">
                        {item.name?.charAt(0).toUpperCase() || "?"}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-white font-bold text-sm">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-gray-600 font-mono italic">
                            {item.createdAt?.toDate()
                              ? new Date(
                                  item.createdAt.toDate(),
                                ).toLocaleDateString()
                              : "Just now"}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {item.message}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-600 font-mono text-xs italic">
                    No comments yet. Be the first one!
                  </p>
                )}
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
