import React from "react";

function Card1Component({ folder }) {
  // Generate a random color from a Neo-Brutalism palette
  const getNeoBrutalismColor = () => {
    const neoBrutalismPalette = [
      "#FF6347",
      "#4682B4",
      "#32CD32",
      "#BA55D3",
      "#FFA500",
      "#00CED1",
    ];
    return neoBrutalismPalette[
      Math.floor(Math.random() * neoBrutalismPalette.length)
    ];
  };

  const neoBrutalismColor = getNeoBrutalismColor();

  return (
    <div
      className="neo-box flex flex-col mt-8 w-50 h-48 justify-between border-black border-2 "
      style={{ backgroundColor: neoBrutalismColor }}
    >
      <h1 className="text-[30px]">{folder.name}</h1>
      <button
        // onClick={handleSendMessage}
        className="px-4 py-2 text-white bg-[#C4A1FF] rounded-lg
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                            border-2 border-black
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
      >
        Continue Learning
      </button>
    </div>
  );
}

export default Card1Component;
