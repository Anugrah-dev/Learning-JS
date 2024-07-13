let cartQuantity = 0;
document.querySelector('#cart-summary').innerText = 'You have ' + cartQuantity + ' item in your bag';
//or we can use backticks `you have ${cartQuantity} item in your bag`;
let wishListQuantity = 0;
document.querySelector('#wishlist-summary').innerText = `You have ${wishListQuantity} item in your wishlist`;