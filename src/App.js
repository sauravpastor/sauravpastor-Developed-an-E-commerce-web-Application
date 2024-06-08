import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Home from './Home';
import CartItem from './CartItem';
import BuyNow from './BuyNow';
import About from './About';
import PaymentDone from './PaymentDone';
import Search from './Search';
import Contact from './Contact';
import Location from './Location';
import Blogs from './Blogs';

const  App = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="cartitem" element={<CartItem/>} />
        <Route path="buynow" element={<BuyNow/>} />
        <Route path="paydone" element={<PaymentDone/>} />
        <Route path="search" element={<Search/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="location" element={<Location/>} />


        </Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
