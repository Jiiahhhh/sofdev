// Named export - bisa export banyak hal dari satu file
// utils.js
export function formatCurrency(amount) {
  return `Rp${amount.toLocaleString("id-ID")}`;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const MAX_ITEMS = 100;

// Default export - satu file satu default export:
// user.js
export default function createUser(name, age) {
  return { name, age, createdAt: new Date() };
}

// Named import - nama harus sama dengan yang di-export
import { formatCurrency, capitalize } from "./utils.js";

// Import semua named exports sekaligus
import * as Utils from "./utils.js";
Utils.formatCurrency(50000);

// Default import - nama bebas
import createUser from "./user.js";

// Kombinasi named + default
import createUser, { formatCurency } from "./user.js";
