import React from 'react';
import {useCartStore} from "../store/UserDataStore.js";

const CartItemCard = ({ cartItem }) => {
    const removeCart = useCartStore((state) => state.removeCart)
    const addQuantity = useCartStore((state) => state.addQuantity)
    const reduceQuantity = useCartStore((state) => state.reduceQuantity)
    const removeCartItem = () => {
        removeCart(cartItem.name)
    }
    const addCartItemQuantity = () => {
        addQuantity(cartItem.name)
    }
    const reduceCartItemQuantity =() => {
        reduceQuantity(cartItem.name)
    }
    return (
        <div className='w-full h-48 bg-gray-700 drop-shadow-lg rounded-xl flex my-2'>
            <div className="w-1/3 p-2">
                <img src={cartItem.imageURL} alt='' className='w-full h-full rounded'/>
            </div>
            <div className='w-2/3 flex flex-col justify-evenly'>
                <p className='font-bold text-2xl'>{cartItem.name}</p>
                <p className=''>
                    Price: <span className="font-bold">Ksh {cartItem.price}/=</span>
                </p>
                <div className="flex items-center">
                    <button className="btn-primary" onClick={reduceCartItemQuantity}>-</button>
                    <p>{cartItem.quantity}</p>
                    <button className="btn-primary" onClick={addCartItemQuantity}>+</button>
                </div>
                <p className='checkoutProduct_price'>
                    Subtotal: <span className="font-bold">Ksh {cartItem.price * cartItem.quantity}/=</span>
                </p>
                <button
                    onClick={removeCartItem}
                    className="whitespace-nowrap relative mx-1 flex justify-center p-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700  hover:underline">
                    Remove from Basket
                </button>
            </div>
        </div>
    );
};

export default CartItemCard;
