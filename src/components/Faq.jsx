import React from 'react'
import './Faq.css'
import Fade from 'react-reveal/Fade';

function Faq() {
    return (
        <div className='Faq'>
            <div className="Faq--Container">
            <Fade bottom> 
                <div className="Faq__btn">
                    <a>LOREM IPSUM SIM COLOR BAES CHU</a>
                    <div className="Faq__btn--arrow">
                    <span class="left-bar"></span>
                    <span class="right-bar"></span>
                    </div>
                </div>
                </Fade>
                <Fade bottom> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .</p>
                </Fade>
            </div>
            
            
        </div>
    )
}

export default Faq
