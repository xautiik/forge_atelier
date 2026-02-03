import React, { useState, useEffect } from 'react';

const Card = ({ title, icon, value, description }) => {
  const [countValue, setCountValue] = useState(0);
  const [countDescription, setCountDescription] = useState(0);

  const animateCountUp = (target, setCount) => {
    const duration = 1000;
    const increment = target / (duration / 100);

    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current += increment;
        setCount(Math.min(Math.floor(current), target));
      } else {
        clearInterval(interval);
        setCount(target);
      }
    }, 100);
  };

  useEffect(() => {
    animateCountUp(value, setCountValue);
    animateCountUp(description, setCountDescription);
  }, [value, description]);

  return (
    <div className="dashcard">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="icon">{icon}</div>
      </div>
      <p style={{ fontSize: '2rem', fontWeight: '700' }}>{countValue}</p>
      <p style={{ color: '#CCFF00' }}>{countDescription} {`new this month`}</p>
    </div>
  );
};

export default Card;
