import React from "react";

export default function LineItemsTable({ items }) {
  const total = items.reduce((sum, item) => sum + item.estimate, 0);
  return (
    <div>
      <h3 className="font-semibold my-4 underline text-[20px]">Line Items</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-[#202020]">
            <tr>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Estimate</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">${item.estimate.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="font-bold border-t">
              <td className="px-4 py-2">Total</td>
              <td className="px-4 py-2">${total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
