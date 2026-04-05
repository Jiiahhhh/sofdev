let shopName = "Warung Kopi Ilal";
let coffee = 15000;
let tea = 10000;
let snack = 8000;
let promo = true;
let result;
let discount;

let subTotal = 2 * coffee + tea + snack;
if (promo) {
  discount = (subTotal * 15) / 100;
  result = subTotal - discount;
}

console.log(`=== ${shopName} ===`);
console.log(`2x Kopi: Rp${2 * coffee}`);
console.log(`1x Teh: Rp${tea}`);
console.log(`1x Snack: Rp${coffee}`);
console.log(`Subtotal: Rp${subTotal}`);
console.log(`Diskon 15%: Rp${discount}`);
console.log(`Total: Rp${result}`);
