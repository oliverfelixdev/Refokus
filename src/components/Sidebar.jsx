import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
const Sidebar = () => {
    return (
        <div className="h-[97%] w-1/3 bg-[var(--color-dark)] text-white p-5 border-y border-x border-zinc-600 rounded-lg fixed top-[1.5%] left-[.75%] z-20">
            <div className="wrap h-full w-full">
                {/* Close Icon Top */}
                <div className="close-icon w-full pb-3">
                    <button className='btn-default inline-block px-1 py-1 rounded-lg border'>
                        <IoCloseOutline />
                    </button>
                </div>
                {/* Middle Headings */}
                <div className="w-full">
                    <a href="#" className='block text-2xl py-2 border-b border-zinc-600'>
                        <span>Home</span>
                    </a>
                    <a href="#" className='block text-2xl py-2 border-b border-zinc-600'>
                        <span>Portfolio</span>
                    </a>
                    <a href="#" className='block text-2xl py-2 border-b border-zinc-600'>
                        <span>About</span>
                    </a>
                    <div className='w-full'>
                        <div className="w-full flex items-start justify-between">
                            <span className='block w-full text-2xl py-2 pt-4 border-b border-zinc-600'>Services</span>
                            
                        </div>
                        <div className="py-3 flex items-start justify-center flex-col gap-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white bg-opacity-15 rounded-sm overflow-hidden">
                                    <img src="./src/assets/media/sidebarIconImage1.webp" alt="Creative Development" className="w-full h-full object-cover" />
                                </div>
                                <div className="ml-2">
                                    <span className="block text-sm font-normal">Web Design</span>
                                    <span className="block text-sm text-gray-500">High-end design that captivates and converts.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white bg-opacity-15 rounded-sm overflow-hidden">
                                    <img src="./src/assets/media/sidebarIconImage2.webp" alt="Creative Development" className="w-full h-full object-cover" />
                                </div>
                                <div className="ml-2">
                                    <span className="block text-sm font-normal">WebFlow Development</span>
                                    <span className="block text-sm text-gray-500">Fast and scalable sites with the power of Webflow.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white bg-opacity-15 rounded-sm overflow-hidden">
                                    <img src="./src/assets/media/sidebarIconImage3.webp" alt="Creative Development" className="w-full h-full object-cover" />
                                </div>
                                <div className="ml-2">
                                    <span className="block text-sm font-normal">Creative Development</span>
                                    <span className="block text-sm text-gray-500">Blending storytelling with immersive experiences.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <span className='block text-2xl py-2 border-b'>Solutions</span>
                    </div>
                    <a href="#" className='block text-2xl py-2 border-b'>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
