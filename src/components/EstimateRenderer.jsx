import React from 'react';
import ConfidenceMeter from "./ConfidenceMeter";
import RiskFlags from "./RiskFlags";
import LineItemsTable from "./LineItemsTable";


const EstimateRenderer = ({ data }) => {
  return (
    <>
      <h2 className="text-xl font-bold">Estimate Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
        <div className='font-normal'>
          <strong className='font-bold'>Project Type:</strong> {data.project_type}
        </div>
        <div>
          <strong>Scope:</strong> {data.scope}
        </div>
        <div>
          <strong>Valuation:</strong> ${data.valuation.toLocaleString()}
        </div>
      </div>
      <ConfidenceMeter scores={data.confidence_score} />
      <RiskFlags flags={data.risk_flags} />
      <LineItemsTable items={data.line_items} />
    </>
  );
};

export default EstimateRenderer;
