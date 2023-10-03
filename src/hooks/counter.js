import { useState } from "react";

const useCounter = ({ initial = 0, stock = 0, intervalo = 1 }) => {
  const [newValue, setNewValue] = useState(initial);

  const more = () => {
    if (newValue <= stock - 1) {
      setNewValue(newValue + intervalo);
    }
  };

  const less = () => {
    if (newValue >= 2) {
      setNewValue(newValue - intervalo);
    }
  };

  return { newValue, less, more };
};

export default useCounter;
