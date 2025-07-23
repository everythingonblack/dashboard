import React from 'react';

const StatCard = ({ title, value, change, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <div className="flex justify-between">
        <h2 className="text-gray-500">{title}</h2>
        {change && (
          <span className={`text-sm font-semibold ${changeColor}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;