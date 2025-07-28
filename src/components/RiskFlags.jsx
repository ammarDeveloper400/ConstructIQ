import React from 'react';

export default function RiskFlags({ flags }) {
  return (
    <div>
      <h3 className="font-semibold my-4 text-[20px] underline">Risk Flags</h3>
      <div className="flex flex-wrap gap-2">
        {flags.map((flag, idx) => (
          <span key={idx} className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">⚠️ {flag}</span>
        ))}
      </div>
    </div>
  );
}
