import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../toolkit/slices/product-slice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import Card from '../Card';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  console.log('use selector products',products)
const fetchProducts = async () => {
  let result = await axios.get('https://fakestoreapi.com/products').catch(err => {
    console.log(err);
  });
  console.log('result',result.data)
  dispatch(productActions.setProducts(result.data));
}


useEffect(() => {
  fetchProducts();
}, []);

  return (
    // <section className={classes.products}>
    //   <h2>Buy your favorite products</h2>
    //   <ul>
    //     <ProductItem
    //       title='Test'
    //       price={6}
    //       description='This is a first product - amazing!'
    //     />
    //   </ul>
    // </section>

    <div className='container' >
      <div className='col-lg-12' >
        <div className='row' >
    {
      products?.map(product => (
        <Card
          key={product.id}
          product={product}
         />
      ))
    }
        </div>
      </div>

    </div>
  );
};

export default Products;
