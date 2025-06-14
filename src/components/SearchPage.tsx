import React from 'react';
import { Search, Mic } from 'lucide-react';

interface SearchPageProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ searchQuery, onSearchChange }) => {
  const genres = [
    { name: 'Pop', color: 'from-purple-500 to-pink-500', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Hip-Hop', color: 'from-orange-500 to-red-500', image: 'https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Rock', color: 'from-gray-700 to-gray-900', image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Jazz', color: 'from-blue-600 to-purple-600', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Electronic', color: 'from-cyan-500 to-blue-500', image: 'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Country', color: 'from-yellow-600 to-orange-600', image: 'https://images.pexels.com/photos/1568470/pexels-photo-1568470.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'R&B', color: 'from-red-600 to-pink-600', image: 'https://images.pexels.com/photos/1644039/pexels-photo-1644039.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Indie', color: 'from-green-500 to-teal-500', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
  ];

  const recentSearches = [
    'The Weeknd',
    'Billie Eilish',
    'Drake',
    'Taylor Swift',
    'Dua Lipa'
  ];

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="max-w-md relative mb-8">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-red-900/20 border border-red-900/30 rounded-full py-3 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            <Mic size={20} />
          </button>
        </div>
      </div>

      {!searchQuery ? (
        <>
          {/* Recent Searches */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Recent searches</h2>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => onSearchChange(search)}
                  className="flex items-center space-x-3 w-full text-left p-3 hover:bg-red-600/10 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Search size={20} className="text-red-400" />
                  </div>
                  <span className="text-white">{search}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Browse All */}
          <section>
            <h2 className="text-xl font-bold mb-6">Browse all</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {genres.map((genre, index) => (
                <div
                  key={index}
                  className={`relative aspect-square rounded-lg bg-gradient-to-br ${genre.color} p-4 cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden`}
                >
                  <h3 className="text-white font-bold text-xl mb-2">{genre.name}</h3>
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="absolute bottom-0 right-0 w-20 h-20 object-cover rounded transform rotate-12 translate-x-2 translate-y-2"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Search Results */
        <section>
          <h2 className="text-xl font-bold mb-6">Search results for "{searchQuery}"</h2>
          <div className="bg-red-900/10 backdrop-blur-sm rounded-xl p-6 border border-red-900/20">
            <p className="text-gray-400 text-center py-8">
              Search functionality would be implemented here with real API integration
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchPage;