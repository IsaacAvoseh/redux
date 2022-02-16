import { Fragment } from 'react';
import Weather from '../Weather';
import Footer from './Footer';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {/* <Footer></Footer> */}
    </Fragment>
  );
};

export default Layout;
