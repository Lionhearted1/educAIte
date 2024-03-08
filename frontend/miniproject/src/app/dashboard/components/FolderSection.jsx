import React from "react";
import Card1Component from "./Card1Component";

const FolderSection = ({ folders, addfolder }) => {
  const limitedFolders = folders.slice(0, 5); // Get the first 5 folders
  const showAllCard = folders.length > 5;

  return (
    <div className="mt-8 w-[90vw]">
      <div className="grid grid-cols-3 gap-24">
        {limitedFolders.map((folder, index) => (
          <Card1Component key={index} folder={folder} />
        ))}
        {/* Show All Card */}
        {showAllCard && (
          // <Card1Component key="showAll" folder={{ id: null, name: 'Show All', description: 'Click to view all folders' }} />
          <button
            // onClick={handleSendMessage}
            className="px-4 py-2 bg-[#C4A1FF] rounded-[10px]
                            shadow-[8px_8px_0px_rgba(0,0,0,1)]
                            border-2 border-black
                            hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150
                             hover:bg-purple-600 focus:outline-none focus:bg-purple-600 h-48 w-50 mt-8 text-xl text-black"
          >
            Show all
          </button>
        )}
      </div>
    </div>
  );
};

export default FolderSection;
