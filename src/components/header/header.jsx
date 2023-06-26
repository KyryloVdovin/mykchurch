import PrimaryMenu from './primary-menu';
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className='site-header'>
            <div>
                <p className='site-title'>
                    <NavLink to='/'>Церковь Иисуса Христа</NavLink>
                </p>
            </div>
            <PrimaryMenu />
        </header>
    )
}

export default Header;