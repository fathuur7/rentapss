'use client';
import React from 'react';
import AuthNav from './components/intro/AuthNav';
import  MainContent  from './components/intro/MainContent';
import FooterIntro from './components/intro/FooterIntro.';

const APP = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Right Login */}
      <AuthNav />
      {/* Main Content */}
      <MainContent />
      {/* Minimal Bottom Footer */}
      <FooterIntro />
    </div>
  );
};

export default APP;