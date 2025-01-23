'use client';
import React from 'react';
import AuthNav from './components/intro/AuthNav';
import MainContent from './components/intro/MainContent';
import FooterIntro from './components/intro/FooterIntro.'

const APP = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      {/* Top Right Login */}
      <nav className="w-full p-4">
        <div className="max-w-7xl mx-auto">
          <AuthNav />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full">
          <MainContent />
        </div>
      </main>

      {/* Minimal Bottom Footer */}
      <footer className="w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <FooterIntro />
        </div>
      </footer>
    </div>
  );
};

export default APP;