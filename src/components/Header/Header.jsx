import './Header.css';
import { BsBug } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='headerLocation'>
                <BsBug className='bugIcon'/>
                <h4>FrugiOzone Kártevőirtás</h4>
            </div>
            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4>Rovarirtás</h4>
                </NavLink>
                <span>|</span>
                <NavLink to="/ozone" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4>Ózonos fertőtlenítés</h4>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <a href="#kezdolap"><li>Kezdőlap</li></a>
                    <a href="#rolunk"><li>Rólunk</li></a>
                    <a href="#szolgaltatasok"><li>Szolgáltatások</li></a>
                    <a href="#kapcsolat"><li>Kapcsolat</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;