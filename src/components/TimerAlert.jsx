import { useState, useEffect } from "react";

const TimerAlert = () => {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (inputTime > 0) {
      setTime(Number(inputTime));
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setInputTime("");
  };

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      clearInterval(interval);
      setIsRunning(false);
      alert("O tempo acabou!");
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer com Contagem Regressiva</h1>
      <div>
        <input type="number" placeholder="Digite o tempo em segundos" value={inputTime} onChange={(e) => setInputTime(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}/>
        <button onClick={startTimer} style={{borderRadius: '8px', padding: '8px 10px', borderColor: '#ddd', cursor: "pointer"}}>
          Iniciar
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Tempo Restante: {formatTime(time)}</h2>
      </div>
      <div>
        <button onClick={pauseTimer} disabled={!isRunning} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer", margin: "10px" }}>
          Pausar
        </button>
        <button onClick={resetTimer} style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer", margin: "10px" }}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default TimerAlert;