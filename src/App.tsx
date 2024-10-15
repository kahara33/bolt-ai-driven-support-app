import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SourceAnalysis from './pages/SourceAnalysis';
import DocumentGeneration from './pages/DocumentGeneration';
import TestGeneration from './pages/TestGeneration';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<SourceAnalysis />} />
            <Route path="/generate-docs" element={<DocumentGeneration />} />
            <Route path="/generate-tests" element={<TestGeneration />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;