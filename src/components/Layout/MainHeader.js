import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <>
    {/* // <header className={classes.header}> */}
        <div class="site-header">
          <div className="container">
              <a href="index.html" className="branding">
                  {/* <img src="images/logo.png" alt="" className="logo" />
                  <div className="logo-type">
                  <h1 className="site-title">Redu</h1>
                  <small className="site-description">tagline goes here</small>
                  </div> */}
                <h1 className='mx-4' >ReduxCart</h1>
                </a>
              {/* Default snippet for navigation */}
          
              <CartButton />
         
              <div className="main-navigation">
                  <button type="button" className="menu-toggle"><i className="fa fa-bars" /></button>
                  <ul className="menu">
                      <li className="menu-item current-menu-item"><a href="/">Home</a></li>
                      <li className="menu-item current-menu-item"><a href="/products">Shop</a></li>
                      <li className="current-menu-item menu-item"><a href="news.html">News</a></li>
                     
                      <li className=" current-menu-item menu-item"><a href="contact.html">Contact</a></li>
                  </ul> {/* .menu */}
              </div> {/* .main-navigation */}
              <div className="mobile-navigation" />
          </div>
          {/* .site-header */}
      </div>
      
    {/* </header> */}
      </>
  );
};

export default MainHeader;
