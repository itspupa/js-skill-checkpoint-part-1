// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (products, promotionCode) {
  let total = 0;
  for (let one of products) {
    total += one.price * one.quantity;
  }

  let discount = 0;
  if (promotionCode === "SALE20") {
    discount = total * 0.20;
  } else if (promotionCode === "SALE50") {
    discount = total * 0.50;
  } 
  return total - discount;
}

console.log(calculateTotalPrice(products, ""))
console.log(calculateTotalPrice(products, "SALE20"))
console.log(calculateTotalPrice(products, "SALE50"))