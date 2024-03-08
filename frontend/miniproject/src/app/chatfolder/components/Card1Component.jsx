import React from "react";
import Link from "next/link";

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
  const unique_id=folder.unique_id;


  return (
    <div
      className="neo-box flex flex-col mt-8 w-50 h-48 justify-between border-black border-2 "
      style={{ backgroundColor: neoBrutalismColor }}
    >
      <h1 className="text-[30px]">{folder.folder_name}</h1>
      <Link href={{pathname:'/chat',query:{unique_id}}}>
      <button
        // onClick={handleSendMessage}
        className="px-4 py-2 text-black font-semibold bg-[#C4A1FF] rounded-lg
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                            border-2 border-black
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
      >
        Continue Learning
      </button>
      </Link>
    </div>
  );
}

export default Card1Component;
