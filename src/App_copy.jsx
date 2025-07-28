import React from 'react';
import { useState } from 'react';
import FileUpload from './components/FileUpload';
import ChatWindow from './components/ChatWindow';
import EstimateRenderer from './components/EstimateRenderer';
import './index.css';

const mockJson = {
  project_type: 'multifamily',
  scope: 'HVAC',
  valuation: 210000,
  confidence_score: {
    overall: 0.87,
    scope_alignment: 0.92,
    regional_benchmark: 0.81,
    data_density: 0.77,
  },
  risk_flags: ['Above regional average', 'Permit count below median for scope'],
  line_items: [
    { category: 'Labor', estimate: 72000 },
    { category: 'Materials', estimate: 89000 },
    { category: 'Equipment', estimate: 29000 },
  ],
};

function App() {
  const [file, setFile] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [estimate, setEstimate] = useState(null);

  const handleEstimateRequest = () => {
    setChatHistory((prev) => [...prev, { sender: 'user', text: 'Please estimate this project.' }]);
    setTimeout(() => {
      setChatHistory((prev) => [...prev, { sender: 'agent', text: 'Estimate ready. Displaying results...' }]);
      setEstimate(mockJson);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <FileUpload file={file} setFile={setFile} />
        <ChatWindow chatHistory={chatHistory} onEstimateRequest={handleEstimateRequest} fileUploaded={!!file} />
        {estimate && <EstimateRenderer data={estimate} />}
      </div>
    </div>
  );
}

export default App;
