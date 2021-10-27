import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";
//2 parametre alır reducer fonk diğeri başlangıç state değeri
//2 eleman dönderir 1.eleman state 2.dispatch fonk

const initialState = {
  data: "",
  loading: false,
  error: "",
};

export default function HookUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state; //state'den veriler distr. edildi
  //   const [data, setData] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");
  console.log(state);
  const fetchDog = () => {
    //Hata mesaji ve data sıfırlandı, yükleme truel oluyor
    // setLoading(true);
    // setError("");
    // setData("");
    //Uygulamada başlangıç case dispatch ediliyor
    dispatch({ type: "FETCH_START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        // setLoading(false);
        // setData(res.message);
        //Uygulamada Success case dispatch ediliyor
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
      })
      .catch(() => {
        // setLoading(false);
        // setData("Error fetching data");
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" });
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
