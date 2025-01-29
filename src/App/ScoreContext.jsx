import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <ScoreContext.Provider value={{ score, incrementScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
