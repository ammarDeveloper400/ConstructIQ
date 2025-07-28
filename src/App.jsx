import React, { useEffect } from 'react';
import { useState } from 'react';
import FileUpload from './components/FileUpload';
import ChatWindow from './components/ChatWindow';
import EstimateRenderer from './components/EstimateRenderer';
import './index.css';
import { ToastContainer } from 'react-toastify';

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

  console.log('chatHistory', chatHistory)
  const getCurrentTime = () => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${hours}:${paddedMinutes} ${ampm}`;
  };

  useEffect(() => {
    if (estimate) {
      setChatHistory((prev) => [...prev, { sender: 'agent', name: 'Bela AI', text: '', time: getCurrentTime(), type: 'estimate' }]);
      setEstimate(null);
    }
  }, [estimate]);

  useEffect(() => {
    if (file) {
      setChatHistory((prev) => [...prev, { sender: 'user', name: 'John Doe', text: 'Please estimate this project', file: file, type: 'file', time: getCurrentTime() }]);
    }
  }, [file]);

  const handleEstimateRequest = () => {
    setTimeout(() => {
      setEstimate(mockJson);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col w-6xl mx-auto p-4">
      <div className="w-full space-y-6">
        <div className="h-[calc(100vh-160px)]">
          <ChatWindow chatHistory={chatHistory} onEstimateRequest={handleEstimateRequest} fileUploaded={!!file} file={file} mockJson={mockJson} />
        </div>
        <div className=''>
          <FileUpload file={file} setFile={setFile} />
        </div>
      </div>
      <ToastContainer />
    </div>

  );
}

export default App;
