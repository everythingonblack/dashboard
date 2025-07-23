import React from 'react';

const ClicksList = () => {
  const clicksData = [
    { name: 'Tesla, Elon Musk', value: 62 },
    { name: 'Tesla | Premium Electric Sedans and SUVs', value: 57 },
    { name: 'Tesla Model 3', value: 52 },
    { name: 'Tesla | Electric Cars of the Future', value: 43 },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="font-bold">Clicks</h2>
      <ul className="mt-4">
        {clicksData.map((item) => (
          <li key={item.name} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClicksList;