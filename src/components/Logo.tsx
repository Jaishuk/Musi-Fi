import React from 'react';
import { Music, Waves, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showText = true, 
  animated = true 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative">
        {/* Main Logo Container */}
        <div className={`${sizeClasses[size]} relative`}>
          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br from-red-500/30 via-red-600/20 to-red-800/30 rounded-2xl blur-lg ${animated ? 'animate-pulse' : ''}`}></div>
          
          {/* Main Logo Background */}
          <div className={`relative ${sizeClasses[size]} bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl border border-red-400/30`}>
            {/* Inner Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-2xl"></div>
            
            {/* Music Note Icon */}
            <div className="relative z-10">
              <Music size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} className="text-white drop-shadow-lg" />
            </div>
            
            {/* Animated Sound Waves */}
            {animated && (
              <>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1000ms' }}></div>
                    <div className="w-0.5 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1000ms' }}></div>
                    <div className="w-0.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1000ms' }}></div>
                  </div>
                </div>
                
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '600ms', animationDuration: '1000ms' }}></div>
                    <div className="w-0.5 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '800ms', animationDuration: '1000ms' }}></div>
                    <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '1000ms', animationDuration: '1000ms' }}></div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Premium Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            <Zap size={8} className="text-white" />
          </div>
          
          {/* Floating Particles */}
          {animated && (
            <>
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
              <div className="absolute -top-2 -right-2 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
            </>
          )}
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[size]} font-bold leading-none`}>
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Musi
            </span>
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              -Fi
            </span>
          </h1>
          {size !== 'small' && (
            <p className={`${size === 'large' ? 'text-sm' : 'text-xs'} text-gray-400 font-medium leading-none mt-0.5`}>
              <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Premium Music
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;