import React, { useCallback, useState } from "react";
import "../App.css";
//https://kentcdodds.com/blog/usememo-and-usecallback => burada detaylı anlatım var.
const phones = [
  { name: "iPhone 12", price: 14000 },
  { name: "Galaxy S20", price: 6500 },
  { name: "Huawei P40", price: 10000 },
];
const classes = [(wrapper = {})];

const App = () => {
  const [products] = useState(phones);
  const [cart, setCart] = useState([]);

  //Alt bileşenlere props olarak gönderilirken sarmalayıp hafıza da tutulması sağlanabilir
  //dependecies array ile girilen parametre ile değişikliğe bağlı olarak re-render edilebilir.
  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product]);
  }, []);
  //useCallback fonksiyonu cachelerken memo ise sadece değeri cacheler******
  //Kullanılan fonksiyonu callBack ile react hatırlar, referans olarak dependency array'a göre işlev yapar
  const emptyCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div className={classes} style={classes}>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

//products addTocart değişmediği için Products renderlama işlemini engellemek için memo kullanıldı
const Products = React.memo(({ products, addToCart }) => {
  return (
    <>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
});

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <h1>
        Sepetiniz <button onClick={emptyCart}>sepeti boşalt</button>
      </h1>
      <div className="products">
        {cart.map(({ name, price }, index) => (
          <Product key={index} name={name} price={price} />
        ))}
      </div>
    </>
  );
};

//name price addTocart propları değişmediği sürece product değişmeyecek memo ile
const Product = React.memo(({ name, price, addToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <h3>{price.toLocaleString()} ₺</h3>
      {addToCart && (
        <button onClick={() => addToCart({ name, price })}>Sepete Ekle</button>
      )}
    </div>
  );
});

export default App;
