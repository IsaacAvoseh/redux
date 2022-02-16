import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Weather from './components/Weather';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const product = useSelector(state => state.products.products)
  console.log('tuttututu',product)
  const clickHandler = () => {
    console.log('clicked')
  }
  return (
    <>
     <Layout>

     {
     showCart ?
     
      <Cart />
      : ''
     }
     
    </Layout>
    <BrowserRouter>
    <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Weather />} />
 </Routes>
   
    </BrowserRouter>
      {/* <Weather /> */}

    <Footer></Footer>
    </>
  );
}

export default App;