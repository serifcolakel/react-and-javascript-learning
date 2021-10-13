const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
//Sarta bağlı olarak döndürülecek itemleri dizi içerisine atar
const filteredItems = items.filter((item) => {
  return item.price < 100;
});

console.log(filteredItems);

//Tum Detailse ulasilabilir
const itemDetails = items.map((item) => {
  return `name:${item.name} price:${item.price}`;
});

console.log(itemDetails);

const fountItem = items.find((item) => {
  return item.name === "Book" && item.price >= 5;
});

console.log(fountItem);

//Alternative for
items.forEach((item) => {
  console.log(item.name);
  console.log(item.price);
});

//Dizi içerisinde bir adet şartı sağlayan varsa true yoksa false
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 5;
});

console.log(hasInexpensiveItems);

//Hepsi sartı saglıyorsa true tek bir tane saglıyorsa false
const everyItems = items.every((item) => {
  return item.price <= 999;
});

console.log(everyItems);

//reduce ilk parametresi total price olurken ikinci parametresi ise dizi öğesi
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0); //0 başlangıç değeri

console.log(total);

const totalText = items.reduce((currentText, item) => {
  return item.name + " " + currentText;
}, ""); //null başlangıç değeri

console.log(totalText);

const number = [1, 2, 3, 4, 5, 6];
//dizi de aranan sayi varsa true yok ise false dönderir
const icindeVarmi1 = number.includes(1);
console.log(icindeVarmi1);
const icindeVarmi2 = number.includes(2);
console.log(icindeVarmi2);
const icindeVarmi3 = number.includes(3);
console.log(icindeVarmi3);
const icindeVarmi4 = number.includes(4);
console.log(icindeVarmi4);
const icindeVarmi7 = number.includes(7);
console.log(icindeVarmi7);

//Slice ile start(dahil) ve end(dahil değil) indexleri arasında bulunan nesneleri yeni bir diziye atabiliriz.
const numSlice = number.slice(1, 4);
console.log(numSlice);
//Slice paramatresi pozitif olursa başlangıçtan sayi adedi kadar olan kismi alır
const pozNumSlice = number.slice(2);
console.log(pozNumSlice);
//Slice parametresi negatif olursa sondan sayi adedi kadar olan kismi alır
const revNumSlice = number.slice(-2);
console.log(revNumSlice);

//Splice ilk parametre başlangıç indexi 2.parametre kaç adet silinecek
const deleted = number.splice(1, 2);
console.log(deleted);
//Splice ilk parametre başlangıç indexi 2.parametre kaç adet silinecek diğer paramatreler ise diziye eklenecek elemanları gösterir
const sayi = [1, 2, 3, 4, 5, 6];
const addDeleteSplice = sayi.splice(3, 2, "add1", "add2", "add3");
console.log(sayi);

//Stringlerde sort metodu
const name = ["Serif", "Rasit", "ismail", "Fatih", "Ayse ", "Mehmet"];
const sortArray = name.sort();
console.log(sortArray);
//Sayilarda ise
const nums = [12, 22, 31, 4, 56, 1, 212, 312];
nums.sort(compareFunction);
console.log(nums);
function compareFunction(a, b) {
  //1. < 0 ... a comes first
  //2.   0 ... nothing will be changed
  //3. > 0 ... b comes first
  return a - b;
}
//Objelerde
const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "compter",
    price: 1500,
  },
  {
    name: "phone",
    price: 1250,
  },
];
//for price
products.sort((a, b) => {
  return a.price - b.price;
  // return b.price - a.price; // mostexpensive first
});

console.log(products);

//fill Methods : elemanları verilene göre dolduracak
const sayis = [1, 2, 3, 4, 5, 6];
sayis.fill(-1);
console.log(sayis);

const fillStartEnd = sayis.fill(-5, 2, 4);
console.log(fillStartEnd);
//Other Uses
function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((x, idx) => idx + 1);
}
console.log(fillInNumbers(10));

//Push Methods : 1 ve birden fazla eleman eklemek için kullanılır
const n = [1, 2, 3, 4];
n.push(5);
n.push(6, 7);
console.log(n);

//Pop Methods : En son elemanı siler
const n1 = [1, 2, 3, 4];
//const lastItem = n1.pop(); //4
n1.pop();
//console.log(lastItem);
console.log(n1);

//flat Methods : derinliği aldığı parametre sayisi kadar kaldırır default = 1
const arr = [1, 2, [3, [[4]]]];
const arrResult = arr.flat(2);
console.log(arrResult);
