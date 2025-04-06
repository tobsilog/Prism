import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-500  text-white text-right transition-transform duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 text-2xl font-bold pr-10">Menu</div>
        <ul className="mt-8 space-y-4">
          <li className="hover:bg-gray-700 p-2 cursor-pointer pr-10">Home</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer pr-10">Our Projects</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer pr-10">Our Model</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer pr-10">Elements</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer pr-10">Technology News</li>
        </ul>
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-20 cursor-pointer"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;