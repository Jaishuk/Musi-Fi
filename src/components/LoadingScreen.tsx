import React from 'react';
import Logo from './Logo';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600/10 via-transparent to-red-800/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-red-500/10 via-transparent to-red-700/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Large Animated Logo */}
        <div className="transform scale-150">
          <Logo size="large" showText={true} animated={true} />
        </div>
        
        {/* Loading Animation */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-8 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-12 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-6 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-10 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
            <div className="w-2 h-4 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-white text-lg font-medium mb-2">Loading your music experience...</p>
          <p className="text-gray-400 text-sm">Preparing the best sound quality for you</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;