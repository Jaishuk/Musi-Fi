import React from 'react';
import { Home, Search, Library, Settings, Plus, Heart, Music } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: 'home' | 'search' | 'library' | 'settings') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Your Library' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const playlists = [
    'My Playlist #1',
    'Favorites',
    'Chill Vibes',
    'Workout Mix',
    'Road Trip Songs',
    'Focus Music',
    'Party Hits',
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-black via-gray-900 to-black border-r border-red-900/30 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-red-900/20">
        <Logo size="medium" showText={true} animated={true} />
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as any)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 mb-2 group ${
              currentPage === item.id
                ? 'bg-gradient-to-r from-red-600/30 to-red-800/20 text-red-400 shadow-lg border border-red-600/30'
                : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-red-800/10'
            }`}
          >
            <item.icon size={20} className={`${currentPage === item.id ? 'text-red-400' : 'group-hover:text-red-400'} transition-colors`} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Quick Access */}
      <div className="px-3 mb-4">
        <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 rounded-xl p-4 border border-red-900/30">
          <h3 className="text-white font-semibold mb-2">Quick Access</h3>
          <button className="w-full flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-red-600/20 to-red-800/20 hover:from-red-600/30 hover:to-red-800/30 rounded-lg transition-all duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <Heart size={16} fill="white" />
            </div>
            <span className="text-white font-medium">Liked Songs</span>
          </button>
        </div>
      </div>

      {/* Library Section */}
      <div className="flex-1 px-3 overflow-y-auto">
        <div className="flex items-center justify-between px-3 py-2 mb-3">
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Your Playlists
          </h3>
          <button className="text-gray-400 hover:text-red-400 transition-colors p-1 hover:bg-red-600/10 rounded">
            <Plus size={16} />
          </button>
        </div>
        
        <div className="space-y-1">
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-red-800/10 rounded-lg transition-all duration-200 text-sm group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-700 group-hover:bg-red-600/30 rounded flex items-center justify-center transition-colors">
                  <Music size={12} className="text-gray-400 group-hover:text-red-400" />
                </div>
                <span className="truncate">{playlist}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Upgrade */}
      <div className="p-3">
        <div className="bg-gradient-to-br from-red-600/20 via-red-700/20 to-red-800/20 rounded-xl p-4 border border-red-600/30">
          <h4 className="text-white font-semibold mb-1">Upgrade to Premium</h4>
          <p className="text-gray-300 text-xs mb-3">Unlimited skips, ad-free listening</p>
          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;