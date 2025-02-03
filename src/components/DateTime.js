import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="datetime">
      {dateTime}
    </div>
  );
};

export default DateTime;
