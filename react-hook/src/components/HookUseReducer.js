import React, { useState } from "react";
//2 parametre alır reducer fonk diğeri başlangıç state değeri
//2 eleman dönderir 1.eleman state 2.dispatch fonk

export default function HookUseReducer() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDog = () => {
    //Hata mesaji ve data sıfırlandı, yükleme truel oluyor
    setLoading(true);
    setError("");
    setData("");

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res.message);
      })
      .catch(() => {
        setLoading(false);
        setData("Error fetching data");
      });
  };
  //disabled ile loading'in duruma göre yani veri alınırken ON/OFF olması kontrol ediliyor
  return (
    <div>
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {data && (
        <div>
          <img
            style={{ width: 150, height: 150, paddingTop: 10 }}
            src={data}
            alt="rndm dog"
          />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
