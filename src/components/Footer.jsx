import React from 'react'
import './Footer.css'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

function Footer({children}) {
    return (
        <div className='Footer'>
            <div className="Footer--Container">
                <Flip left>
                <div className="Footer__img--container">
                    <div className="Footer__img"></div>
                </div>
                </Flip>
                <Fade bottom>
                <div className="Footer--title">
                <h1>LOREM IPSUM SIM COLOR BAES CHU</h1>
                </div>
                </Fade>
                
                <div className="Footer--Faq">
                {children}
                </div>
            </div>
               
        </div>

        
    )
}

export default Footer
