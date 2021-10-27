// https://www.robinwieruch.de/react-usememo-hook Makalesi iyice anlatmış

// useMemo genel syntax => useMemo(() => function, input)
//Usememo genel olarak hesaplama maliyetlerini optimize etmek için kullanılır
//useMemo değerleri hafızaya almak için kullanılır

import React from "react";

const users = [
  { id: "1", name: "Serif" },
  { id: "2", name: "Rasit" },
  { id: "3", name: "Ismail" },
  { id: "4", name: "Aras" },
  { id: "5", name: "Alex" },
  { id: "6", name: "Hasan" },
  { id: "7", name: "Dev" },
  { id: "8", name: "Eva" },
  { id: "9", name: "Koray" },
  { id: "10", name: "Mustafa" },
  { id: "11", name: "Fatih" },
];

const App = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  //   const filteredUsers = users.filter((user) => {
  //     //normalde search değiştiğinde değişmesi lazım burada ise input kısmına her bir harf girildiğinde yeniden filtreleme yapılıyor.
  //     //Konsol'dan aşağıdaki değişiklik memo kullandıktan sonra (satır 40 aktif edilerek) sonuçlar karşılaştirilaiblir
  //     console.log("Filter function is running ...");
  //     return user.name.toLowerCase().includes(search.toLowerCase());
  //   });

  //memo ile yapılan filtrelemede ise dependcy array içerisinde bulunan değişken(ki bu array boş olamaz)
  //hafızaya alınır ve değişiklik olmadığı sürece useMemo içerisinde bulunan işlemler gerçekleştirilmez
  //Böylece inputlara girilen birden fazla değerin girilmesi anında hesaplama yapılmayıp sonradan
  //buttona tıklandığında hesaplama/filtreleme işlemi yapılabilir.
  //Tabii ki hafızaya alması bazı duurmlarda bu işlevleri yapmasından maliyetli olabilir.
  //Sonuç olarak, React'in useMemo Hook'u değerleri hafızaya almak için kullanılır.
  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is running ...");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
