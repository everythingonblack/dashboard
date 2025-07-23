import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import NavigationBar from './NavigationBar';

const Layout = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;