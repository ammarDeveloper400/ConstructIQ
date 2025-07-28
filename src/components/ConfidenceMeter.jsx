import React from "react";

export default function ConfidenceMeter({ scores }) {
  return (
    <div>
      <h3 className="font-semibold mb-4 underline text-[20px]">Confidence Scores</h3>
      <div className="space-y-2">
        {Object.entries(scores).map(([key, val]) => (
          <div key={key}>
            <div className="flex justify-between">
              <span className="capitalize">{key.replace("_", " ")}</span>
              <span>{Math.round(val * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${val * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
