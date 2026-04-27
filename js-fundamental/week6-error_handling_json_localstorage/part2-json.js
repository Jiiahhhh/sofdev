/* = = = = = = = = = =
 1. JSON.stringify() - Object -> String
= = = = = = = = = = */

const user = { name: "Ilal", age: 25, skills: ["JS", "CSS"] };

const str = JSON.stringify(user);
console.log(str);
console.log(typeof str); // Hasilnya string bukan object lagi

const str2 = JSON.stringify(user, ["name", "age"], 2);
console.log(str2);

/* = = = = = = = = = =
 2. JSON.parse() - String -> Object
= = = = = = = = = = */
const str3 = '{"name":"Ilal","age":25,"skills":["JS","CSS"]}';

const obj = JSON.parse(str3); // Hasilnya jadi object dan bukan string
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
console.log(obj.skills[0]);

/* = = = = = = = = = =
 3. Limitasi JSON
= = = = = = = = = = */
const data = {
  name: "Ilal",
  age: undefined,
  greet: function () {},
  score: NaN,
  birthday: new Date(),
};

console.log(JSON.stringify(data, null, 2));
