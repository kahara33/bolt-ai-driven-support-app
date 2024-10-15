import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 Source Code Analyzer. All rights reserved.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;