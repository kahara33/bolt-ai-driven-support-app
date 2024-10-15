import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, FileText, TestTube2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Source Code Analyzer</h1>
      <p className="text-xl mb-8">Automatically generate design documents and test cases from your source code.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/analyze" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Code2 className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Analyze Source</h2>
          <p>Upload and analyze your source code</p>
        </Link>
        <Link to="/generate-docs" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FileText className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Generate Docs</h2>
          <p>Create design documents from your code</p>
        </Link>
        <Link to="/generate-tests" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <TestTube2 className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Generate Tests</h2>
          <p>Automatically create test cases</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;