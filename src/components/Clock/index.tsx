import React, { useEffect, useRef, useState } from 'react';

import { dateOptions, timeOptions } from './constants';
import { DateString, Time } from './styled';

export const Clock = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', timeOptions)
  );

  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', timeOptions));
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
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
