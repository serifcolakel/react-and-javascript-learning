class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow" + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Arrow" + this.name);
    }, 100);
  }
}
//
let person = new Person(" Serif");
person.printNameArrow(); //Keyword yeniden tanımlandığı için Serif gönderildi ve ekrana basıldı.
person.printNameFunction(); //(Class dışı)Çağrıldığı yere göre tanımlanmadığı için null
