import React from 'react';
import { Play, MoreHorizontal, Clock, Heart, Plus, Shuffle } from 'lucide-react';

const MainContent: React.FC = () => {
  const recentlyPlayed = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration: '2:54',
      image: 'https://images.pexels.com/photos/1644039/pexels-photo-1644039.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '2:58',
      image: 'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      album: 'Stay',
      duration: '2:21',
      image: 'https://images.pexels.com/photos/1568470/pexels-photo-1568470.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const featuredPlaylists = [
    {
      title: 'Today\'s Top Hits',
      description: 'The most played songs right now',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      title: 'Chill Hits',
      description: 'Kick back to the best new and recent chill hits',
      image: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      title: 'Rock Classics',
      description: 'Rock legends & epic songs',
      image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      title: 'Hip-Hop Central',
      description: 'The sounds that define hip-hop',
      image: 'https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      title: 'Electronic Vibes',
      description: 'The pulse of electronic music',
      image: 'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      title: 'Acoustic Sessions',
      description: 'Stripped down and intimate',
      image: 'https://images.pexels.com/photos/1568470/pexels-photo-1568470.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const quickPicks = [
    'My Playlist #1',
    'Liked Songs',
    'Chill Vibes',
    'Workout Mix',
    'Focus Music',
    'Party Hits'
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
          Good evening
        </h1>
        <p className="text-gray-400 text-lg">Ready to discover your next favorite song?</p>
      </div>

      {/* Quick Access - Amazon Music Style */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Jump back in</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickPicks.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gradient-to-r from-red-900/20 via-red-800/10 to-transparent hover:from-red-900/30 hover:via-red-800/20 hover:to-red-700/10 rounded-lg p-3 cursor-pointer transition-all duration-300 border border-red-900/20 hover:border-red-700/30 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4">
                <Heart size={24} className="text-white" fill={index === 1 ? 'white' : 'none'} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white group-hover:text-red-300 transition-colors">{item}</h3>
                <p className="text-gray-400 text-sm">Playlist</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 w-12 h-12 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 transform scale-90 group-hover:scale-100">
                <Play size={20} fill="white" className="text-white ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recently Played</h2>
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle size={20} />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium rounded-full transition-all duration-200">
              Play All
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-900/10 via-red-800/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-red-900/20">
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-12 gap-4 text-sm text-gray-400 border-b border-red-900/20 pb-3 mb-3">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-3">Album</div>
              <div className="col-span-2">Date added</div>
              <div className="col-span-1 flex justify-center">
                <Clock size={16} />
              </div>
            </div>
            {recentlyPlayed.map((song, index) => (
              <div
                key={song.id}
                className="grid grid-cols-12 gap-4 items-center py-3 hover:bg-gradient-to-r hover:from-red-600/10 hover:to-red-800/5 rounded-xl px-3 transition-all duration-200 group"
              >
                <div className="col-span-1 text-gray-400 group-hover:hidden">
                  {index + 1}
                </div>
                <div className="col-span-1 hidden group-hover:block">
                  <button className="text-white hover:text-red-400 transition-colors">
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>
                <div className="col-span-5 flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-red-300 transition-colors">{song.title}</p>
                    <p className="text-gray-400 text-sm">{song.artist}</p>
                  </div>
                </div>
                <div className="col-span-3 text-gray-400 text-sm">{song.album}</div>
                <div className="col-span-2 text-gray-400 text-sm">3 days ago</div>
                <div className="col-span-1 flex justify-center items-center space-x-2">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} className="text-gray-400 hover:text-red-500" />
                  </button>
                  <span className="text-gray-400 text-sm">{song.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal size={16} className="text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Made for you</h2>
          <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredPlaylists.map((playlist, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-900/10 via-red-800/5 to-transparent backdrop-blur-sm rounded-2xl p-5 border border-red-900/20 hover:border-red-700/30 hover:from-red-900/20 hover:via-red-800/10 hover:to-red-700/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-xl shadow-lg"
                />
                <button className="absolute bottom-3 right-3 w-14 h-14 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110">
                  <Play size={24} fill="white" className="text-white ml-1" />
                </button>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center">
                    <Plus size={16} className="text-white" />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-red-300 transition-colors">{playlist.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;