import React,{useState,useEffect} from 'react';
import './scss/index.scss'
import Categories from './Component/Categories';
import Choose from './Component/Choose';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Products from './Component/Product';
import Promo from './Component/Promo';
import Recommend from './Component/Recommend';
import ScrollTop from './Component/ScrollToTop';
import Service from './Component/Services';
import scrollReveal from 'scrollreveal';

export default function App() {
  const [theme,setTheme] = useState("dark");
  const changeTheme = () =>{
    theme == "dark" ?setTheme("light"):setTheme("dark")
  }
  useEffect(()=>{
    const registerAnimation = () =>{
      const sr = scrollReveal({
        origin : "bottom",
        distance : "80px",
        duration : 1000,
        reset : false,
      })
      sr.reveal(`
      nav,.home,.service-container,.categories-container,.recomment-container,.choose-us-container,.products-container,.promo-container,.footer

      `,{
        interval : 500,
      })
    }
    registerAnimation()
  })
  
  return (
    <>
      <div className='app' data-theme={theme}>
          <ScrollTop />
          <Navbar changeTheme={changeTheme} currentTheme = {theme}/>
          <Home />
          <Service />
          <Categories />
          <Recommend />
          <Choose />
          <Products />
          <Promo />
          <Footer />


      </div>
    </>
  );
}


