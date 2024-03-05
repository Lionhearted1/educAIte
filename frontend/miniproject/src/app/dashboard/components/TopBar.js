import React from 'react';
import Image from 'next/image';
const TopBar = () => {
    return (
        <div className="topbar flex items-center justify-between bg-gray-200 p-2">
            <centre>
                <div className="search-bar ml-80 relative"> 
                <span className='absolute -left-7 top-[6px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#616161" d="M29.171,32.001L32,29.172l12.001,12l-2.828,2.828L29.171,32.001z"></path><path fill="#616161" d="M36,20c0,8.837-7.163,16-16,16S4,28.837,4,20S11.163,4,20,4S36,11.163,36,20"></path><path fill="#37474f" d="M32.476,35.307l2.828-2.828l8.693,8.693L41.17,44L32.476,35.307z"></path><path fill="#64b5f6" d="M7,20c0-7.18,5.82-13,13-13s13,5.82,13,13s-5.82,13-13,13S7,27.18,7,20"></path>
                    </svg>
                </span>
                    <input type="text" placeholder="       Search..." 
                     className="border border-gray-300 rounded-full pl-20 py-1 " />
                    
                </div>
            </centre>
            <div className="profile-picture">
                <Image src="" alt="Profile" className="rounded-full bg-blue-500 w-10 h-10" />
            </div>
        </div>
    );
};

export default TopBar;
