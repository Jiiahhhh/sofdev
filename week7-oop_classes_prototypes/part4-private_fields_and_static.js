/* = = = = = = = = = =
 1. Private Fields (#)
 Private fields adalah property yang hanya bisa diakses dari dalam class - tidak bisa diakses dari luar sama sekali
= = = = = = = = = = */

class BankAccount {
  #balance; // deklarasi private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount harus > 0");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Saldo tidak cukup");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Ilal", 100000);
console.log(acc.balance);
// console.log(acc.#balance); //Syntax Error

/* = = = = = = = = = =
 2. Static Methods & Properties
 static method dan property milik class itu sendiri, bukan milik instance (object). Diakses langsung dari class, bukan dari object:
= = = = = = = = = = */

class MathHelper {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathHelper.PI);
console.log(MathHelper.add(5, 3));
console.log(MathHelper.multiply(4, 2));

const m = new MathHelper();
console.log(m.PI); // undefined, karna PI static

/* = = = = = = = = = =
 3. Static + Private - Pattern Umum
 Pattern yang sering dipakai: static method untuk membuat object dengan validasi (factory method):
= = = = = = = = = = */

class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // static factory method - alternatif constructor dengan validasi
  static create(username, password) {
    if (username.length < 3) throw new Error("Username minimal 3 karakter");
    if (password.length < 8) throw new Error("Password minimal 8 karakter");
    return new User(username, password);
  }

  checkPassword(input) {
    return input === this.#password;
  }
}

// pakai factory method
try {
  const user = User.create("Ilal", "secret123");
  console.log(user.username);
  console.log(user.checkPassword("secret123"));
  //   console.log(user.#password); // SyntaxError
} catch (e) {
  console.log(e.message);
}
