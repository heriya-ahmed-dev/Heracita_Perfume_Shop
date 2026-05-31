const Cart = [];

const AddToCart = document.querySelector('.Add_to_cart');
const CountItems = document.getElementById('count_cart');

 AddToCart.addEventListener('click',()=>{

    const Product = {
        name : 'Gabrielle Essence Eau De Perfume',
        Price : '$149.89'
    }
   Cart.push(Product);
   CountItems.textContent = "Selected Items  " + Cart.length;


   console.log(cart);

 })