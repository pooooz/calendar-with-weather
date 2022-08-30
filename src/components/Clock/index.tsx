import React, { useEffect, useState } from 'react';

import { dateOptions, timeOptions } from './constants';
import { DateString, Time } from './styled';

export const Clock = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', timeOptions)
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', timeOptions));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  const dayPart = time.slice(time.length - 2, time.length);
  return (
    <div>
      <h2>
        <Time>{time.slice(0, time.length - 2)}</Time>
        {dayPart}
      </h2>
      <DateString>
        {new Date().toLocaleDateString('en-US', dateOptions)}
      </DateString>
    </div>
  );
};
