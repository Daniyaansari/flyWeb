import React from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Navbar from './Components/Navbar/Navbar'
import Search from "./Components/Search/Search";
import Subscribe from "./Components/Subscribers/Subscribes";
import Support from "./Components/Support/Support";
import Travelers from "./Components/Travelers/Travelers";


export default function App(){
  return(
    <>
   
   <Navbar/>
   <Home/>
   <Search/>
   <Support/>
   <Info/>
   <Lounge/>
   <Travelers/>
   <Subscribe/>
   <Footer/>
    
    </>
  )
}