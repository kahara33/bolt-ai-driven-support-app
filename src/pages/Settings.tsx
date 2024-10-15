import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [endpoint, setEndpoint] = useState('https://api.openai.com/v1/chat/completions');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedApiKey = localStorage.getItem('openaiApiKey');
    const savedEndpoint = localStorage.getItem('openaiEndpoint');
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedEndpoint) setEndpoint(savedEndpoint);
  }, []);

  const handleSave = () => {
    localStorage.setItem('openaiApiKey', apiKey);
    localStorage.setItem('openaiEndpoint', endpoint);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">OpenAI API Configuration</h2>
        <div className="mb-4">
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
            API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endpoint" className="block text-sm font-medium text-gray-700 mb-2">
            API Endpoint
          </label>
          <input
            type="text"
            id="endpoint"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSave}
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          <Save className="mr-2" size={20} />
          Save Settings
        </button>
        {saved && (
          <p className="mt-2 text-green-600">Settings saved successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Settings;