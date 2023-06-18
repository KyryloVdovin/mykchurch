import PrimaryMenu from './primary-menu';
import './header.css';

const Header = () => {
    return (
        <header className='site-header'>
            <div>
                <p className='site-title'>
                    <a href='https://nikchurch.wordpress.com/'>Церковь Иисуса Христа</a>
                </p>
            </div>
            <PrimaryMenu />
        </header>
    )
}

export default Header;