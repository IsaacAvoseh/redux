import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../toolkit/slices/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;
  const { totalAmount, totalQuantity, items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(cartActions.addItemToCart(id));
  }

 const handleRemove = (id) => {
    dispatch(cartActions.removeItemFromCart()); 
  }
  console.log(totalAmount, totalQuantity);
let price = 0;
  return (
    <li className={classes.item}>
      <header>
        <h3>Test Item</h3>
        <div className={classes.price}>
          ${totalAmount?.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{totalQuantity}</span>
        </div>
        <div className={classes.actions}>
          <a href="/cart">View Cart </a>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
