import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        Google Comp, <IsimGoster ad="Serif" />
      </h1>
      <Hosgeldiniz ad="Serif" soyad="COLAKEL">
        <h3>Merhabalar</h3>
      </Hosgeldiniz>
    </div>
  );
}
//Aşağıdaki func'a propslardan alınan veriler ekrana bastırılabilir
// Ayrıca kendi içinde çağrılan bir fonksiyona alınan propslar props olarak gönderilebilir.
// propslarda herhangi bir veri yok ise default olarak veri eklenebilir.(Ex: IsimGoster Func.)
function Hosgeldiniz(props) {
  return (
    <>
      <div>
        Hosgeldiniz, {props.ad} {props.soyad} {props.children}
      </div>

      <div>
        Hosgeldiniz(default değer yoksa ), Dear <IsimGoster ad={props.ad} />
      </div>
    </>
  );
}

function IsimGoster(props) {
  return <a href="https://google.com">{props.ad || "Misafir"}</a>;
}
