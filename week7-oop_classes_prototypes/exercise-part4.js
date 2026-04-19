// soal 1
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  decrement() {
    if (this.#count > 0) this.#count--;
  }

  reset() {
    this.#count = 0;
  }

  get value() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
c.increment();
c.increment();
console.log(c.value);
c.decrement();
console.log(c.value);
c.reset();
console.log(c.value);
c.decrement();
console.log(c.value);
// console.log(c.#value); // Syntax Error

// Soal 2
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }

  get kelvin() {
    return this.celsius + 273.15;
  }

  static fromFahrenheit(f) {
    return new Temperature(((f - 32) * 5) / 9);
  }

  static fromKelvin(k) {
    return new Temperature(k - 273.15);
  }
}

const t1 = new Temperature(100);
console.log(t1.fahrenheit);
console.log(t1.kelvin);

const t2 = Temperature.fromFahrenheit(32);
console.log(t2.celsius);

const t3 = Temperature.fromKelvin(273.15);
console.log(t3.celsius);

// Soal 3
class IdGenerator {
  static #lastId = 0;

  static generate() {
    return ++this.#lastId;
  }

  static reset() {
    return (this.#lastId = 0);
  }

  static get current() {
    return this.#lastId;
  }
}

console.log("===");
console.log(IdGenerator.generate());
console.log(IdGenerator.generate());
console.log(IdGenerator.generate());
console.log(IdGenerator.current);
IdGenerator.reset();
console.log(IdGenerator.current);
console.log(IdGenerator.generate());
