//Create genaral Employee class that have name and age props, then make 3 subClass of this class,
// like developer, marketer, acoutant, each subclass should have own methods.
// like getProgrammignLanguages, getMarketerTools and etc.

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Developer extends Employee {
  constructor(name, age, skills) {
    super(name, age)
    this.skills = skills
  }
  getSkills() {
    return this.skills
  }
}

class Marketer extends Employee {
  constructor(name, age, status) {
    super(name, age)
    this.status = status
  }

  getStatus() {
    return this.status;
  }
}

class Acoutant extends Employee {
  constructor(name, age, salary) {
    super(name, age)
    this.salary = salary
  }

  getSalary() {
    return `${this.name} salary is ${this.salary}`
  }
}

const developer = new Developer("Tom", 23, ["html", "css", "react"])
console.log(developer.getSkills())

const marketer = new Marketer("Bob", 28, "working")
console.log(marketer.getStatus("working"))

const acoutant = new Acoutant("Ann's", 33, 2000)
console.log(acoutant.getSalary())

// Create a CarFactory class that have following methods,
//  addCar, deleteCar, updateCar, getAllCars

class CarFactory {
  constructor() {
    this.allCars = []
    this.id = 1
  }

  addCar(manufacturer, model, color) {
    const car = { manufacturer, model, color, id: this.id++ }
    this.allCars.push(car);
  }

  deleteCar(id) {
    this.allCars = this.allCars.filter((el) => el.id !== id)
  }

  updateCar(id, test) {
    this.allCars = this.allCars.map((el) => {
      if (el.id === id) {
        return { ...el, testDrive: test }
      }
      return el
    });
  }

  getAllCars() {
    return this.allCars
  }
}

const carFactory = new CarFactory();
carFactory.addCar("Toyota", "Corolla", "red");
carFactory.addCar("Toyota", "Highlander", "black");
carFactory.addCar("Toyota", "Aqua,", "white");
carFactory.deleteCar(1);
carFactory.updateCar(2, true);
console.log(carFactory.getAllCars());
