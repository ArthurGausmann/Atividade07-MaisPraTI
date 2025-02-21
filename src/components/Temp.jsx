import React, { useState, useEffect } from "react";

const Temp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Temporizador</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Tempo: {formatTime(time)}</h2>
      </div>
      <div>
        {!isRunning ? (
          <button onClick={startTimer} style={{ padding: "10px 20px", fontSize: "16px", border: "none", borderRadius: "4px",
          cursor: "pointer", marginRight: "10px" }}>
            Iniciar
          </button>
        ) : (
          <button onClick={pauseTimer} style={{ padding: "10px 20px", fontSize: "16px", border: "none", borderRadius: "4px",
          cursor: "pointer", marginRight: "10px" }}>
            Pausar
          </button>
        )}
        <button onClick={resetTimer} style={{ padding: "10px 20px", fontSize: "16px", border: "none", borderRadius: "4px", 
          cursor: "pointer" }}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Temp;