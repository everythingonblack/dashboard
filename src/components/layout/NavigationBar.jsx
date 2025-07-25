import React from 'react';

const NavigationBar = ({ activeTab, setActiveTab }) => {
  const tabs = ['Dashboard', 'Digital Products'];

  return (
    <div className="bg-white shadow-md">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;