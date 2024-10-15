import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, FileText, TestTube2, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center hover:text-blue-200">
              <Code2 className="mr-2" size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/analyze" className="flex items-center hover:text-blue-200">
              <Code2 className="mr-2" size={20} />
              Analyze Source
            </Link>
          </li>
          <li>
            <Link to="/generate-docs" className="flex items-center hover:text-blue-200">
              <FileText className="mr-2" size={20} />
              Generate Docs
            </Link>
          </li>
          <li>
            <Link to="/generate-tests" className="flex items-center hover:text-blue-200">
              <TestTube2 className="mr-2" size={20} />
              Generate Tests
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center hover:text-blue-200">
              <Settings className="mr-2" size={20} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;