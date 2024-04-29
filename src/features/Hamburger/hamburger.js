import React, { useState} from 'react';
import { deelbaba, user } from '../../common/images/images';
import '../../assets/css/index.scss';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
function Hamburger() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <div className='hamburger'>
            <div className='logo-container'>
                <img src={deelbaba} alt="images" />
            </div>
            {!hamburger && <HiOutlineMenuAlt3 onClick={() => setHamburger(true)} className='menubar' />}
            {hamburger && (
            <div className='hamburger-content' onClick={() => setHamburger(false)} >
               <IoClose onClick={() => setHamburger(false)} className='close'/>
                <p>Login | Register</p>
                <p>Home</p>
                <p>About US</p>
                <p>Shop</p>
                <p>Services</p>
                <p>Contact</p>
            </div>)}
        </div>
    )

}

export default Hamburger;