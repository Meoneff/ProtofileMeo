import React from "react";
import { Terminal as TerminalIcon, Cpu, Lock } from "lucide-react";

const Terminal = () => {
  return (
    <div className="relative group">
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#eccb59]/20 to-purple-900/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

      <div className="relative bg-[#0d0d0d] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/40">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">
              System Online
            </span>
          </div>
          <span className="text-[10px] text-red-500/70 font-mono tracking-tighter">
            IT CORE v2.0
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-gray-800/50 p-2 rounded-lg border border-gray-700">
              <TerminalIcon size={14} className="text-red-400" />
            </div>
            <span className="text-gray-400 italic">./cli-shell --active</span>
          </div>

          <div className="space-y-2 opacity-80">
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-red-500/40"></div>
            </div>
            <div className="h-1.5 w-2/3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-[#eccb59]/40"></div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-800/50">
            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
              <Cpu size={12} /> Server Node: 01
            </div>
            <div className="flex items-center gap-2 text-[10px] text-green-500/70 uppercase tracking-widest">
              <Lock size={12} /> Secure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;