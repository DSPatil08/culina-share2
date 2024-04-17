import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  // Fixed credentials for login
  const fixedUsername = 'admin';
  const fixedPassword = 'admin@123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const user = users.find((u) => u.username === username && u.password === password);
      if (user || (username === fixedUsername && password === fixedPassword)) {
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    } else {
      // Sign-up logic
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        alert('Username already exists. Please choose a different username.');
      } else {
        setUsers([...users, { username, password }]);
        alert('Sign-up successful! Please log in.');
        setIsLogin(true);
        setUsername('');
        setPassword('');
      }
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          <p>
            {isLogin
              ? 'Don\'t have an account? '
              : 'Already have an account? '}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
