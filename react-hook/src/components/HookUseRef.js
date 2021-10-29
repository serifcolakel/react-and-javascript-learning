//DON'daki elementlere ulaşmak için kullanılır.
//
import React, { useRef, useEffect, useState } from "react";

export default function HookUseRef() {
  const inputRef = useRef();
  const divRef = useRef();
  const value = useRef(0); //**** Value değeri HookUseRef Component'inin yaşam süresi boyunca aynı
  //objeye referans ediyor.

  const [, setValue] = useState();
  useEffect(() => {
    console.log(inputRef.current); //DOM daki hali yazıldı
  });
  const onDivBorder = () => {
    divRef.current.style.border = "1px solid black"; //Div/istenilen elementte değişiklik yapılır
  };
  const onFocusButton = () => {
    inputRef.current.focus();
  };

  console.log(value);
  const onIncrease = () => {
    setValue({}); //re-render için değişiklik olması lazım ekranda value değerini görmek için herhangi bir işlemde yapılabilir.
    value.current += 1; //Yeniden değişikliğe sebep olmuyor ***** onun için setValue değiştirildi
  };

  return (
    <div ref={divRef}>
      <h2>UseRef Kullanimi</h2>
      <h3>UseRef Kullanimi</h3>
      <input ref={inputRef} placeholder="Buraya yazin" />
      <button onClick={onFocusButton}>Input'a odaklan</button>
      <button onClick={onDivBorder}>Div'e Border ekle</button>
      <h1>{value.current}</h1>
      <button onClick={onIncrease}>Arttır</button>
    </div>
  );
}
