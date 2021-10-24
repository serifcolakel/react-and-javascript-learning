import React, { useEffect, useState } from "react";

//useEffect ile değişiklik olduğunda yeni renderde işleve girecek
export default function HookUseEffect() {
  const [counter, setCounter] = useState(0);
  const [counterOther, setCounterOther] = useState(0);
  const [timer, setTimer] = useState(0);
  //IN CLASS COMPONENT => COMPONENT DID MOUNT & COMPONENT DID UPDATED
  useEffect(() => {
    console.log("useEffect");
  }, [counter]);
  //[]:DependencyArray içerisindeki değerlerin değişikliğine göre useEffect
  //çalışıacak array boş ise yani eleman yoksa sadece bir kez çalışacak sonradan çalışmayacak
  //array içinde eleman varsa o zaman array elemanlarında değişiklik olıursa çalışacak

  //IN CLASS COMPONENT => COMPONENT WILL UNMOUNT FOR
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    //temizlik için
    return () => clearInterval(myTimer);
  }, [timer]);
  useEffect(() => {
    console.log("Timer:", timer);
  });

  const increase = () => {
    setCounter(counter + 1);
  };
  const otherIncrease = () => {
    setCounterOther(counterOther + 1);
  };
  //2.buton ile useEffect kontorolünü sadece counter adlı değişkene göre yapıoyoruz
  // ve diğer parametre de değişiklik olmazsa herhangi bir şekilde useEffect çalışmayacak.
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => increase()}>Increase</button>
      <h2>{counterOther}</h2>
      <button onClick={() => otherIncrease()}>Increase Other Counter</button>
    </div>
  );
}
