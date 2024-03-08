import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Select({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div className="relative z-10" aria-expanded={isActiveSelect}>
      <button
        onClick={() => {
          setIsActiveSelect(!isActiveSelect)
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className="flex w-[100px] cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-3 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {selectedItem === null ? 'Home' : selectedItem}
          <IoIosArrowDown
            style={{ transform: `rotate(${isActiveSelect ? '180deg' : '0'})` }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        style={{
          top: 'calc(100% + 10px)', // Adjust the distance from the select bar
          opacity: isActiveSelect ? '1' : '0',
          visibility: isActiveSelect ? 'visible' : 'hidden',
          transition: 'opacity 0.2s, visibility 0.2s', // Add transition for smooth animation
        }}
        role="listbox"
        aria-labelledby="select-label"
        className="absolute left-0 w-[100%] rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleItemClick(item)
              }}
              className="block w-full border-b-2 border-black bg-[#C4A1FF] px-5 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-[#a36ec4]"
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  );
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
