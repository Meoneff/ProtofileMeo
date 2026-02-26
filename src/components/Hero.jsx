import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="space-y-2 drop-shadow-[0_0_15px_#eccb59]/50">
      <h1 className="text-7xl font-bold text-white leading-none">
        Full Stack <br />
        <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
          Developer
        </span>
      </h1>
      <div className="text-2xl font-mono text-gray-400 flex items-center gap-2 mt-6">
        <Typewriter
          options={{
            strings: [
              "Web Developer",
              "Discord Bot",
              "UI/UX Designer",
              "Creative",
            ],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;