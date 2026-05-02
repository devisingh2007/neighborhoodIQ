import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // For now, just trust the token exists and set a mock user or fetch profile
      // In a real app, you'd fetch the user profile from /api/v1/auth/me
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // MOCK LOGIN FOR DEVELOPMENT
    if (email === 'admin@neighborhoodiq.com' && password === 'admin@1234') {
      const mockUser = {
        name: 'Dev Singh',
        email: 'admin@neighborhoodiq.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
        isPremium: true
      };
      const mockToken = 'mock-jwt-token-123';
      localStorage.setItem('token', mockToken);
      setUser(mockUser);
      return { success: true };
    }

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', { email, password });
      const { user: userData, token } = response.data.data;
      localStorage.setItem('token', token);
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', { name, email, password });
      const { user: userData, token } = response.data.data;
      localStorage.setItem('token', token);
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
