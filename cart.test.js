const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties', () => {
    //cart should default empty (the contents will be stored as an array)

    //your shopping subtotal should default to 0

})

describe('Cart Methods', () => {
    //you should be able to add cars to your shopping cart
        //it will accept one argument - a car from /data/cars
        //the contents of the cart will increase by one
        //the car you added will be present in the cart
        //the subtotal will increase by the value of the car

    //you should be able to remove things from your cart
        //the method for removal takes two arguments, the index of the car to be removed (in the array) and the value of the car to be removed
        //the contents of the cart will decrease by one
        //the car you removed will no longer be present, everything else should remain
        //the value of the car will be removed from the subtotal

    //You should be able to checkout
        //most of this functionality will be developed separately (the merchant portion)
        //the cart should be empty again
        //the subtotal should return to 0

})