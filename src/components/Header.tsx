import React from 'react';
import { ChevronLeft, ChevronRight, User, Bell, Crown, Download, Search } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 backdrop-blur-xl border-b border-red-900/30 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <button className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600/30 to-red-800/20 hover:from-red-600/40 hover:to-red-800/30 flex items-center justify-center transition-all duration-200 border border-red-600/20 hover:border-red-500/30">
          <ChevronLeft size={18} className="text-red-400" />
        </button>
        <button className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600/30 to-red-800/20 hover:from-red-600/40 hover:to-red-800/30 flex items-center justify-center transition-all duration-200 border border-red-600/20 hover:border-red-500/30">
          <ChevronRight size={18} className="text-red-400" />
        </button>
        
        {/* Mini Logo for Header */}
        <div className="ml-4 lg:hidden">
          <Logo size="small" showText={false} animated={true} />
        </div>
      </div>

      {/* Search Bar - Amazon Music Style */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            className="w-full bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-900/30 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-200"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-3">
        <button className="p-2.5 hover:bg-red-600/20 rounded-full transition-all duration-200 relative">
          <Download size={18} className="text-gray-300 hover:text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
        
        <button className="p-2.5 hover:bg-red-600/20 rounded-full transition-all duration-200 relative">
          <Bell size={18} className="text-gray-300 hover:text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </button>

        <div className="w-px h-6 bg-red-900/30"></div>

        <button className="flex items-center space-x-3 bg-gradient-to-r from-red-600/20 to-red-800/20 hover:from-red-600/30 hover:to-red-800/30 px-4 py-2.5 rounded-full transition-all duration-200 border border-red-600/20 hover:border-red-500/30 group">
          <div className="relative">
            <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <Crown size={12} className="absolute -top-1 -right-1 text-yellow-400" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-white group-hover:text-red-300 transition-colors">Premium User</div>
            <div className="text-xs text-gray-400">Your Account</div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;