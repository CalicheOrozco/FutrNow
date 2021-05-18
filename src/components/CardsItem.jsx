import React from 'react'
import "./CardsItem.css"
import Zoom from 'react-reveal/Zoom';

function CardsItem() {
    return (
        <div className="Cards--container--item">
            <Zoom>
            <div className="Cards--container--item__img">
            </div>
            </Zoom>
            <Zoom>
            <div className="Cards--container--item__title">   
            <h1>LOREM IPSUM SIM COLOR BAES CHU</h1>
            </div>
            </Zoom>
            <Zoom>
            <div className="Cards--container--item__content">
            <p>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu</p>
            </div>
            <div className="Cards--container--item__social-media">
            <div className="Cards--container--item__social-media-1"></div>
            <div className="Cards--container--item__social-media-2"></div>
            <div className="Cards--container--item__social-media-3"></div>
            </div>
            </Zoom>
            
            
            
        </div>
    )
}

export default CardsItem
