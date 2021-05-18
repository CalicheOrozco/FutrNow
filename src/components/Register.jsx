import React from 'react'
import './Register.css'
import Fade from 'react-reveal/Fade';

function Register({children}) {
    return (
        <div className="Register">
        
        <div className="Register--container">
            

            
        <Fade bottom>
            <div className="Register__form--section">
            <div className="Register__form">
                <div className="Register__form--container">
                <div className="Register__form--title">
                    <h2>LOREM IPSUM SIM</h2>
                </div>
                
                <div className="Register__form--name">
                    <a>Nombre completo</a>
                </div>

                <div className="Register__form--name__input">
                    <input type="text"/>
                </div>

                <div className="Register__form--mail">
                    <a>Correo electrónico</a>
                </div>

                <div className="Register__form--mail__input">
                    <input type="text"/>
                </div>
                
                <div className="Register__form__btn">
                    {children}
                </div>
                </div>
            </div>
                



            </div>
            
            
            </Fade>   
        </div>
            
        </div>
        
    )
}

export default Register
