import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Player from './components/Player';
import SearchPage from './components/SearchPage';
import LibraryPage from './components/LibraryPage';
import SettingsPage from './components/SettingsPage';

type PageType = 'home' | 'search' | 'library' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (currentPage) {
      case 'search':
        return <SearchPage searchQuery={searchQuery} onSearchChange={setSearchQuery} />;
      case 'library':
        return <LibraryPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col overflow-hidden">
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-red-900/10 via-black to-red-800/5 scrollbar-thin scrollbar-thumb-red-600/30 scrollbar-track-transparent">
            {renderContent()}
          </main>
        </div>
      </div>
      
      {/* Player */}
      <Player />
    </div>
  );
}

export default App;