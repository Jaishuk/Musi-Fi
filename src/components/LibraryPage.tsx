import React, { useState } from 'react';
import { Grid3X3, List, Search, Plus, Download, Heart, Music } from 'lucide-react';

const LibraryPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [filter, setFilter] = useState<'all' | 'playlists' | 'artists' | 'albums'>('all');

  const libraryItems = [
    {
      type: 'playlist',
      title: 'Liked Songs',
      subtitle: '247 songs',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isLiked: true
    },
    {
      type: 'playlist',
      title: 'My Playlist #1',
      subtitle: '23 songs',
      image: 'https://images.pexels.com/photos/1644039/pexels-photo-1644039.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isDownloaded: true
    },
    {
      type: 'album',
      title: 'After Hours',
      subtitle: 'The Weeknd • 2020',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      type: 'artist',
      title: 'Billie Eilish',
      subtitle: 'Artist',
      image: 'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      type: 'playlist',
      title: 'Chill Vibes',
      subtitle: '45 songs',
      image: 'https://images.pexels.com/photos/1568470/pexels-photo-1568470.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      type: 'album',
      title: 'Fine Line',
      subtitle: 'Harry Styles • 2019',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const filterButtons = [
    { key: 'all', label: 'All' },
    { key: 'playlists', label: 'Playlists' },
    { key: 'artists', label: 'Artists' },
    { key: 'albums', label: 'Albums' }
  ];

  const filteredItems = filter === 'all' 
    ? libraryItems 
    : libraryItems.filter(item => filter === 'playlists' ? item.type === 'playlist' : item.type === filter.slice(0, -1));

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <button className="p-2 hover:bg-red-600/20 rounded-full transition-colors">
            <Plus size={20} className="text-gray-300 hover:text-white" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-red-600/20 rounded-full transition-colors">
            <Search size={18} className="text-gray-300 hover:text-white" />
          </button>
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
            className="p-2 hover:bg-red-600/20 rounded-full transition-colors"
          >
            {viewMode === 'list' ? (
              <Grid3X3 size={18} className="text-gray-300 hover:text-white" />
            ) : (
              <List size={18} className="text-gray-300 hover:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 mb-6">
        {filterButtons.map((button) => (
          <button
            key={button.key}
            onClick={() => setFilter(button.key as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === button.key
                ? 'bg-red-600 text-white'
                : 'bg-red-900/20 text-gray-300 hover:text-white hover:bg-red-900/30'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Library Items */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6' 
          : 'space-y-2'
      }`}>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`${
              viewMode === 'grid'
                ? 'bg-red-900/10 backdrop-blur-sm rounded-xl p-4 border border-red-900/20 hover:bg-red-900/20 transition-all duration-300 cursor-pointer group'
                : 'flex items-center space-x-4 p-3 hover:bg-red-600/10 rounded-lg transition-colors cursor-pointer group'
            }`}
          >
            {viewMode === 'grid' ? (
              <>
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.isLiked && <Heart size={16} className="text-red-500 absolute top-2 right-2" fill="currentColor" />}
                      {item.isDownloaded && <Download size={16} className="text-green-500 absolute top-2 left-2" />}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-1 truncate">{item.title}</h3>
                <p className="text-gray-400 text-sm truncate">{item.subtitle}</p>
              </>
            ) : (
              <>
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  {item.type === 'playlist' && !item.isLiked && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-red-800/80 rounded flex items-center justify-center">
                      <Music size={16} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white truncate">{item.title}</h3>
                  <p className="text-gray-400 text-sm truncate flex items-center space-x-2">
                    <span>{item.subtitle}</span>
                    {item.isLiked && <Heart size={12} className="text-red-500" fill="currentColor" />}
                    {item.isDownloaded && <Download size={12} className="text-green-500" />}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;