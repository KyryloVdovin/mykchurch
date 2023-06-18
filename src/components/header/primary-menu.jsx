import './menu-primary.css';
import { NavLink } from 'react-router-dom';

const PrimaryMenu = (props) => {
    return (
        <div class="menu-primary-container">
            <div class="menu nav-menu">
                <MenuItem goTo="/aboutUs" name="О нас" />
                <MenuItem goTo="/repent" name="Покаяние" />
                <MenuItem goTo="/photos" name="Фотоальбом" />
                <MenuItem goTo="/contactUs" name="Обратная связь" />
            </div>
        </div>
    )
}

const MenuItem = (props) => {
    return (
        <div class="menu-item">
            <NavLink to={`${props.goTo}`} className={navData => navData.isActive ? "active" : ""}>{props.name}</NavLink>
        </div>
    )
}

export default PrimaryMenu;