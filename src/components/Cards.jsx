import React from 'react'
import './Cards.css'

function Cards({children}) {
    return (
        <div className="Cards">
            <div className="Cards--container">
                {children}
            </div>
            
        </div>
    )
}

export default Cards
