import React, { useState } from 'react';
import './Header.css';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Header() {
    const [selectedSite, setSelectedSite] = useState("pest");

    return (
        <header>
            <div className='headerLocation'>
                <IoLocationOutline className='locationIcon'/>
                <h4>Dunakeszi, Magyarország</h4>
            </div>
            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4 onClick={(e) => {
                        console.log(e.target);
                        setSelectedSite("pest");
                    }}>Rovarírtás</h4>
                </NavLink>
                <span>|</span>
                <NavLink to="/ozone" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4  onClick={(e) => {
                        console.log(e.target);
                        setSelectedSite("ozone");
                    }}>Ózonos fertőtlenítés</h4>
                </NavLink>
            </div>
            <nav>
                {
                    // different routes
                    <ul>
                        <a href="#landingSection"><li>Kezdőlap</li></a>
                        <a href="#chooseUs"><li>Rólunk</li></a>
                        <a href="#services"><li>Szolgáltatások</li></a>
                        <a href="#contactSection"><li>Kapcsolat</li></a>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default Header;