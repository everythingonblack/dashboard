import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">yourLOGO</h1>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">Demo campaign</button>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-gray-500 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-1.165.45-2.223 1.228-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
        </a>
        <a href="#" className="text-gray-500 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </a>
        <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full ml-4" />
      </div>
    </header>
  );
};

export default Header;