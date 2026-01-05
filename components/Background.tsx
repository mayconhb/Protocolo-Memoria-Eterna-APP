import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-brand-blue to-brand-darkBlue">
      {/* Decorative Plus Signs - Static positions to match the style */}
      <div className="absolute top-10 left-10 text-white/20 animate-pulse text-2xl font-bold">+</div>
      <div className="absolute top-1/4 right-10 text-white/20 text-4xl font-bold">+</div>
      <div className="absolute bottom-1/3 left-5 text-white/10 text-xl font-bold">+</div>
      <div className="absolute bottom-10 right-20 text-white/15 text-3xl font-bold">+</div>
      
      {/* Decorative Circles/Glows */}
      <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Pattern Overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>
    </div>
  );
};