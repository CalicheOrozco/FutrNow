import React from 'react'
import {Helmet} from "react-helmet";
import './App.css'
import MainSection from './components/MainSection'
import Home from './components/Home'
import Button from './components/Button'
import Cards from './components/Cards'
import CardsItem from './components/CardsItem'
import Schedule from './components/Schedule'
import Register from './components/Register'
import Footer from './components/Footer'
import Faq from './components/Faq'


function App() {
  return (
    <div className="App">

    <Helmet>
      <meta charSet="utf-8" />
      <title>Futurnow</title>
      
    </Helmet>
      
      <div className="main--Container">
        
        <Home>
          <Button />
        </Home>
        
        <MainSection />
        
        
        <Cards>
        
          <CardsItem />
          <CardsItem />
          <CardsItem />
          
          
            
        </Cards>

        <Schedule />
        <Register>
          <Button />
        </Register>

        <Footer>
          <Faq />
          <Faq />
        </Footer>
        

      </div>
      
      
      
      
      
    </div>
  );
}

export default App;
