import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  Heart,
  Maximize2,
  List,
  Cast,
  Mic2
} from 'lucide-react';

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(65);
  const [volume, setVolume] = useState(80);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one

  const currentSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    duration: '3:20',
    currentTime: '2:10'
  };

  const handleRepeatClick = () => {
    setRepeatMode((prev) => (prev + 1) % 3);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl border-t border-red-900/30 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Current Song Info */}
        <div className="flex items-center space-x-4 w-1/4 min-w-0">
          <div className="relative group">
            <img
              src={currentSong.image}
              alt={currentSong.title}
              className="w-16 h-16 rounded-xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-xl transition-colors flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={20} className="text-white" />
              </button>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-semibold truncate hover:text-red-300 cursor-pointer transition-colors">{currentSong.title}</h4>
            <p className="text-gray-400 text-sm truncate hover:text-white cursor-pointer transition-colors">{currentSong.artist}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isLiked ? 'text-red-500 bg-red-500/10' : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
              <Mic2 size={18} />
            </button>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-3 w-1/2 max-w-2xl">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsShuffled(!isShuffled)}
              className={`transition-all duration-200 ${
                isShuffled ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <SkipBack size={22} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg"
            >
              {isPlaying ? (
                <Pause size={24} className="text-black" />
              ) : (
                <Play size={24} className="text-black ml-1" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <SkipForward size={22} />
            </button>
            <button 
              onClick={handleRepeatClick}
              className={`transition-all duration-200 relative ${
                repeatMode > 0 ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Repeat size={20} />
              {repeatMode === 2 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              )}
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-4 w-full">
            <span className="text-xs text-gray-400 w-12 text-right font-mono">{currentSong.currentTime}</span>
            <div className="flex-1 relative group">
              <div className="h-1 bg-gray-600 rounded-full">
                <div 
                  className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-400 w-12 font-mono">{currentSong.duration}</span>
          </div>
        </div>

        {/* Volume and Other Controls */}
        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <List size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <Cast size={20} />
          </button>
          <div className="flex items-center space-x-3 group">
            <Volume2 size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            <div className="w-24 relative">
              <div className="h-1 bg-gray-600 rounded-full">
                <div 
                  className="h-1 bg-white rounded-full relative"
                  style={{ width: `${volume}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;