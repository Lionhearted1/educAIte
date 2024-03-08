import React from 'react';
import Card1Component from './Card1Component';

const FolderSection = ({ folders , addfolder }) => {
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
          <Card1Component key="showAll" folder={{ id: null, name: 'Show All', description: 'Click to view all folders' }} />
        )}
      </div>
    </div>
  );
};

export default FolderSection;
