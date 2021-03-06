import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../toolkit/slices/cart-slice';

const Card = ( product ) => {
    const { image, title, price } = product.product;
    console.log('productCard',product)

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItemToCart(product.product));
    };

    return (
        <div className="col-lg-3 mx-0 mt-2 b-5" >
            <div className=" card p-0 overflow-hidden h-100 shadow">
                <div className=" card-body " >
                    <div >
                        <img className='img-fluid' src={image} style={{
                            height: '200px',
                            width: '100%',
                        }} ></img>
                    </div>
                    <p className="text-center mt-3" >{title} </p>
                    <p className="text-center main" > ${price} </p>
                    <button onClick={addToCart} className='btn btn-info text-white mx-auto'> Add To cart </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
