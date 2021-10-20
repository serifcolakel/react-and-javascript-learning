export default class Car {
  constructor(wheels) {
    this.wheels = wheels;
  }
  get getWheels() {
    return this.wheels;
  }
}

app.use("/static", express.static("./static/"));
