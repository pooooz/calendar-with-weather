import React, { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  return <h1>{time}</h1>;
};
