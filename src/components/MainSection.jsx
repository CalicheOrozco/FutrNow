import React from 'react'
import './MainSection.css'
import Fade from 'react-reveal/Fade';

function MainSection({children}) {
    return (
        
        
        <div className='MainSection' >
            
            <div className="MainSection--title" >
            <Fade top>
                <h1>LOREM IPSUM SIM COLOR BAES CHU</h1>
                </Fade>
            </div>
            <Fade top>
            <div className="MainSection--content">
                <p className="MainSection--content">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
            </div>
            </Fade>
            {children}
        </div>
    )
}

export default MainSection

