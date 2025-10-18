import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from '../ui/WhatsAppWidget';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
