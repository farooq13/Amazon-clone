export let cart = [];


let matchingItem;
export function addToCart(productId){
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });
  
  if (matchingItem){
    matchingItem.quantity ++;
  } else {
    cart.push({
      productId,
      quantity: 1
    })
  }
}