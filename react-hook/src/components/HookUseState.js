import React, { useState } from "react";

export default function HookUseState() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState("NULL");

  const increase = () => {
    setCounter(counter + 10);
  };

  const decrease = () => {
    setCounter(counter - 5);
  };

  const reset = () => {
    setCounter(0);
  };

  const visible = () => {
    setIsVisible("Set Edildi ve sayi 5'e bolundu");
    setCounter(counter / 5);
  };

  const resetVisible = () => {
    setIsVisible("Reset edildi ve sayi 5 ıle carpıldı");
    setCounter(counter * 5);
  };

  return (
    <div>
      <h2>useState kullanım</h2>
      <p>Counter : {counter}</p>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
      <button onClick={() => reset()}>Reset</button>
      <p>{isVisible}</p>
      <button onClick={() => visible()}>SET</button>
      <button onClick={() => resetVisible()}>RESET</button>
    </div>
  );
}
