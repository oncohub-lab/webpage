import { Footer } from './Footer';
import { Nav } from './Nav';

import sLayout from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={sLayout.container}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
