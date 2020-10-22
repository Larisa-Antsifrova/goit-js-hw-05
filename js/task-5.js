console.log(
  "Task 5 ------------------------------------------------------------"
);
class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }

  static getSpecs(car) {
    let keys = Object.keys(car);
    let specs = "";

    for (const key of keys) {
      specs += `${key}: ${car[key]}, `;
    }
    return specs.slice(0, -2);
  }

  constructor(car, speed = 0, isOn = false, distance = 0) {
    this.maxSpeed = car.maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = car.price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    return (this._price = value);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    this.speed = 0;
    return (this.isOn = false);
  }

  accelerate(value) {
    return this.maxSpeed <= this.speed + value
      ? (this.speed = this.maxSpeed)
      : (this.speed = this.speed + value);
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      return (this.speed = this.speed - value);
    }
  }
  drive(hours) {
    if (this.isOn) {
      return (this.distance += this.speed * hours);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// console.log(mustang.turnOn());
// console.log(Car.getSpecs(mustang));

// console.log(mustang.accelerate(50));
// console.log(Car.getSpecs(mustang));

// console.log(mustang.drive(2));
// console.log(Car.getSpecs(mustang));

// mustang.decelerate(20);
// console.log(Car.getSpecs(mustang));

// mustang.drive(1);
// console.log(Car.getSpecs(mustang));
// mustang.turnOff();
// console.log(Car.getSpecs(mustang));

// console.log(Car.getSpecs(mustang));
// // // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
