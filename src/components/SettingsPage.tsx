import React, { useState } from 'react';
import { Volume2, Wifi, Download, Bell, User, Shield, Palette, Moon, Sun } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    volume: 75,
    highQuality: true,
    autoplay: true,
    notifications: true,
    darkMode: true,
    downloadQuality: 'high',
    language: 'english'
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const settingSections = [
    {
      title: 'Playback',
      icon: Volume2,
      items: [
        {
          type: 'slider',
          key: 'volume',
          label: 'Volume',
          value: settings.volume,
          min: 0,
          max: 100
        },
        {
          type: 'toggle',
          key: 'autoplay',
          label: 'Autoplay',
          description: 'Play similar content when your music ends',
          value: settings.autoplay
        }
      ]
    },
    {
      title: 'Audio Quality',
      icon: Wifi,
      items: [
        {
          type: 'toggle',
          key: 'highQuality',
          label: 'High Quality Audio',
          description: 'Stream at 320 kbps',
          value: settings.highQuality
        },
        {
          type: 'select',
          key: 'downloadQuality',
          label: 'Download Quality',
          value: settings.downloadQuality,
          options: [
            { value: 'low', label: 'Low (96 kbps)' },
            { value: 'normal', label: 'Normal (160 kbps)' },
            { value: 'high', label: 'High (320 kbps)' }
          ]
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          type: 'toggle',
          key: 'notifications',
          label: 'Push Notifications',
          description: 'Get notified about new releases and recommendations',
          value: settings.notifications
        }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        {
          type: 'toggle',
          key: 'darkMode',
          label: 'Dark Mode',
          description: 'Use dark theme',
          value: settings.darkMode
        }
      ]
    },
    {
      title: 'Language',
      icon: User,
      items: [
        {
          type: 'select',
          key: 'language',
          label: 'Display Language',
          value: settings.language,
          options: [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Español' },
            { value: 'french', label: 'Français' },
            { value: 'german', label: 'Deutsch' },
            { value: 'italian', label: 'Italiano' }
          ]
        }
      ]
    }
  ];

  const renderSettingItem = (item: any) => {
    switch (item.type) {
      case 'toggle':
        return (
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="text-white font-medium">{item.label}</h4>
              {item.description && (
                <p className="text-gray-400 text-sm">{item.description}</p>
              )}
            </div>
            <button
              onClick={() => updateSetting(item.key, !item.value)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                item.value ? 'bg-red-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  item.value ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        );
      
      case 'slider':
        return (
          <div className="py-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-medium">{item.label}</h4>
              <span className="text-gray-400 text-sm">{item.value}%</span>
            </div>
            <input
              type="range"
              min={item.min}
              max={item.max}
              value={item.value}
              onChange={(e) => updateSetting(item.key, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${item.value}%, #4b5563 ${item.value}%, #4b5563 100%)`
              }}
            />
          </div>
        );
      
      case 'select':
        return (
          <div className="py-4">
            <h4 className="text-white font-medium mb-2">{item.label}</h4>
            <select
              value={item.value}
              onChange={(e) => updateSetting(item.key, e.target.value)}
              className="w-full bg-red-900/20 border border-red-900/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {item.options.map((option: any) => (
                <option key={option.value} value={option.value} className="bg-black">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-8">
        {settingSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-red-900/10 backdrop-blur-sm rounded-xl p-6 border border-red-900/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <section.icon size={24} className="text-red-400" />
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
            </div>
            
            <div className="divide-y divide-red-900/20">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {renderSettingItem(item)}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Account Section */}
        <div className="bg-red-900/10 backdrop-blur-sm rounded-xl p-6 border border-red-900/20">
          <div className="flex items-center space-x-3 mb-6">
            <Shield size={24} className="text-red-400" />
            <h2 className="text-xl font-bold text-white">Account & Privacy</h2>
          </div>
          
          <div className="space-y-4">
            <button className="w-full text-left p-4 hover:bg-red-600/10 rounded-lg transition-colors">
              <h4 className="text-white font-medium">Manage Account</h4>
              <p className="text-gray-400 text-sm">Update your profile and account settings</p>
            </button>
            
            <button className="w-full text-left p-4 hover:bg-red-600/10 rounded-lg transition-colors">
              <h4 className="text-white font-medium">Privacy Settings</h4>
              <p className="text-gray-400 text-sm">Control who can see your activity</p>
            </button>
            
            <button className="w-full text-left p-4 hover:bg-red-600/10 rounded-lg transition-colors">
              <h4 className="text-white font-medium">Download Data</h4>
              <p className="text-gray-400 text-sm">Get a copy of your data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;