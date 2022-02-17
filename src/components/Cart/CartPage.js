import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../toolkit/slices/cart-slice';
import classes from './CartItem.module.css';

const CartPage = (props) => {
    // const { title, quantity, total, price } = props.item;
    const items = useSelector(state => state.cart.items);
    console.log(items);
    const dispatch = useDispatch();

    const handleAdd = (id) => {
        dispatch(cartActions.addItemToCart(id));
    }

    const handleRemove = (id) => {
        dispatch(cartActions.removeItemFromCart());
    }
    // console.log(totalAmount, totalQuantity);
    let price = 0;
    return (
        <>
        {
            items.map(item => (
                <li className={classes.item}>
                    <header>
                        <h3>{ item.title }</h3>
                        <div className={classes.price}>
                            ${item.price?.toFixed(2)}
                            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                        </div>
                    </header>
                    <div className={classes.details}>
                        <div className={classes.quantity}>
                            x <span>{ item.quantity }</span>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={ ()=> handleRemove(item.id)} >-</button>
                            <button onClick={ () => handleAdd(item) } >+</button>
                        </div>
                    </div>
                </li>
            ))
        }
        </>
    );
};

export default CartPage;
