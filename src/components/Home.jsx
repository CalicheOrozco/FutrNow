import React, { Children } from 'react'
import './Home.css'
import Slide from 'react-reveal/Slide';

function Home({children}) {
    return (
        <div className='Home' >
            <Slide right>
            <div className="Home--title">
                <h1>Futurnow</h1>
            </div>
            </Slide>
            <Slide right>
            <div className="Home--content">
                <p >rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
            </Slide>
            <Slide left>
            <div className="Home__img--container">
            <div class="Home--content__Allura-Giant-Phone"></div>
            <div class="Home--content__Allura-Standing"></div>
            </div>
            </Slide>
            <Slide right>
            <div className="Home--content__btn">
            {children}
            </div>
            </Slide>
            
        </div>
    )
}

export default Home
