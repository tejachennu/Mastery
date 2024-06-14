import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import HeroSection from '../Components/HeroSection'
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get('JWTToken');
    const refreshToken = Cookies.get('RefreshToken');

    if (!jwtToken || !refreshToken) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
       <Sidebar/>
       <HeroSection/>
    </div>
  );
};

export default Dashboard;
