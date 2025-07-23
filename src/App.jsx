import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import DigitalProducts from './pages/DigitalProducts';
import Login from './pages/Login';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    const fetchUserData = async () => {
      if (token) {
        try {
          const userDataResponse = await fetch('https://bot.kediritechnopark.com/webhook/user-dev/data', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (userDataResponse.ok) {
            const userData = await userDataResponse.json();
            localStorage.setItem('token', userData[0]?.token);
            console.log('User data:', userData);
            // Store user data in state or context if needed
          } else {
            console.error('Failed to fetch user data:', userDataResponse.status);
            // Handle error fetching user data, e.g., logout
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle network or other errors, e.g., logout
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      }
    };
    
    fetchUserData();
  }, []);

  const renderContent = () => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Digital Products':
        return <DigitalProducts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
                {renderContent()}
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
