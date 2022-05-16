import React, { useState } from 'react';
import './Header.css';
import { IoLocationOutline } from 'react-icons/io5';
import { BsBug } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Header() {
    const [selectedSite, setSelectedSite] = useState("pest");

    return (
        <header>
            <div className='headerLocation'>
                <BsBug className='bugIcon'/>
                <h4>FrugiOzone Kártevőirtás</h4>
            </div>
            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4 onClick={(e) => {
                        setSelectedSite("pest");
                    }}>Rovarírtás</h4>
                </NavLink>
                <span>|</span>
                <NavLink to="/ozone" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4  onClick={(e) => {
                        setSelectedSite("ozone");
                    }}>Ózonos fertőtlenítés</h4>
                </NavLink>
            </div>
            <nav>
                {
                    // different routes
                    <ul>
                        <a href="#kezdolap"><li>Kezdőlap</li></a>
                        <a href="#rolunk"><li>Rólunk</li></a>
                        <a href="#szolgaltatasok"><li>Szolgáltatások</li></a>
                        <a href="#kapcsolat"><li>Kapcsolat</li></a>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default Header;