import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://bot.kediritechnopark.com/webhook/user-dev/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data[0]?.token);
        
        // Fetch user data
        const userDataResponse = await fetch('https://bot.kediritechnopark.com/webhook/user-dev/data', {
          headers: {
            'Authorization': `Bearer ${data[0]?.token}`,
          },
        });
        
        if (userDataResponse.ok) {
          const userData = await userDataResponse.json();
          console.log('User data:', userData);
          // Store user data in state or context if needed
          navigate('/dashboard');
        } else {
          console.error('Failed to fetch user data:', userDataResponse.status);
          // Handle error fetching user data
        }
      } else {
        console.error('Login failed:', response.status);
        // Handle login error (e.g., display error message)
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;