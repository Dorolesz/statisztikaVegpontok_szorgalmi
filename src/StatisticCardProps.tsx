import React from 'react';

interface StatisticCardProps {
  name: string;
  age: number;
  gender: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ name, age, gender }) => {
  return (
    <div className="statistic-card">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default StatisticCard;