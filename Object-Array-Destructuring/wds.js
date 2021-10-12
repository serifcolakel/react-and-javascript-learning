const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = [1, 2, 3, 4, 5, 6];

const [first, , ...remainder] = alphabet; //ikinci eleman null oldu yani remainder.length = alphabet-2
//console.log(first);
//console.log(remainder);
const newArray = [...alphabet, ...numbers];
console.log(newArray);

function sumAndMultiple(a, b) {
  //return [a + b, a * b];
  return [a + b, a * b, a / b];
}

//const array = sumAndMultiple(2, 5);
//console.log(array);
//OR
const [
  sum,
  multiply,
  division = "Fonksiyonda 3.paramatre boşşa bu mesaj gidicek varsa işlem gidicek",
] = sumAndMultiple(2, 5);
console.log(sum);
console.log(multiply);
console.log(division);

//Object Dest.

const personOne = {
  name: "Serif",
  age: 24,
  address: {
    city: "Hatay",
    state: "One of Them",
  },
};

const personTwo = {
  name: "Fatih",
  age: 12,
  address: {
    city: "Hatay/Antakya",
    state: "Noob",
  },
};

const {
  name: firstName,
  age,
  address: { city },
  ...rest
} = personTwo; //firtName="Fatih"

//console.log("name:", firstName);
//console.log("age", age);
//console.log(rest);
//console.log(city);

//function printUser() {
//console.log(`Name is : ${user.name}. Age is ${user.age}`);
//}
//OR
//favFood default olarak çağrıldığı yerde ayarlandı ayrıca personOne
//içerisinde ayarlanırsa direkt olarak ayarlandığı değeri görecektik
function printUser({ name, age, address, favFood = "McDonald" }) {
  console.log(
    `Name is : ${name}. Age is ${age} , address : ${address.city}. FavFood: ${favFood}`
  );
}

printUser(personOne);
