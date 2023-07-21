import { useState } from "react";

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);
  
  const transition = (newMode, replace = false) => {
    const newArr = [...history];
    if (replace === false) {
      newArr.push(newMode)
    }
    else {
      newArr.pop()
      newArr.push(newMode)
    }
    setHistory(newArr)
  }

  const back = () => {

    if (history.length === 1 &&   history[0] === initial) return initial;
    setHistory(prev => [...prev.slice(0, prev.length -1)])
  }
  
  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;