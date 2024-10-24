import React, { createContext, useState, useEffect, useRef } from 'react';

// Create a new context for session length
export const SessionLengthContext = createContext();

const SessionLengthProvider = ({ children }) => {
  const [sessionLength, setSessionLength] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    // Start tracking session length
    timerRef.current = setInterval(() => {
      setSessionLength((prevLength) => prevLength + 1);
    }, 1000);

    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  return (
    <SessionLengthContext.Provider value={{ sessionLength, setSessionLength }}>
      {children}
    </SessionLengthContext.Provider>
  );
};

export default SessionLengthProvider;
