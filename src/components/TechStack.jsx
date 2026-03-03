import React from "react";

const allTech = ["React", "JavaScript", "Node.js", "Tailwind", "Angular", "TypeScript", "C++"];

const TechStack = () => {
  const generateBalancedRows = (techs) => {
    const result = [];
    let temp = [...techs];
    let size = 4;
    while (temp.length > 0) {
      result.push(temp.splice(0, size));
      if (size > 2) size--; 
    }
    return result;
  };

  const rows = generateBalancedRows(allTech);

  return (
    <div className="flex flex-col items-start gap-3 w-fit">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-3 items-center justify-center w-full"
          style={{ paddingLeft: rowIndex % 2 !== 0 ? "40px" : "0px" }}
        >
          {row.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-[10px] md:text-xs font-mono hover:border-[#eccb59]/50 transition-all hover:scale-110 hover:bg-red-500/5 whitespace-nowrap shadow-sm hover:shadow-red-500/20 text-gray-300 drop-shadow-[0_0_10px_#eccb59]/30"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechStack;