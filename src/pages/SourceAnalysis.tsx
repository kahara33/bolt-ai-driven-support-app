import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const SourceAnalysis: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement file upload and analysis logic
    console.log('Files to analyze:', files);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Source Code Analysis</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Source Files
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">ZIP, JS, TS, PY, JAVA, or other source files</p>
              </div>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} multiple />
            </label>
          </div>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Selected Files:</h3>
            <ul className="list-disc list-inside">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Analyze Source
        </button>
      </form>
    </div>
  );
};

export default SourceAnalysis;