import React, { useState, useEffect } from 'react'
import '../css/Nav.css'

export const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img id='nexflixlogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzxPs6B4TBH_QXNo4E-rd7I4-l2c2BkPn_4DOmkGggBJijssx4Tuz1ed4DBEPrP5yATA&usqp=CAU' alt='Nexflix Logo' width='90' />

            <img id='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU' alt='...' />
        </div>
    )
}
