import facebookIcon from '../../images/icons/icon-facebook.png';
import youtubeIcon from '../../images/icons/icon-youtube.png';
import './footer.css';

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-wrapper">
                <nav class="social-network-container" aria-label="Меню социальных ссылок">
                    <div class="menu-container">
                        <ul class="social-network-menu">
                            <li class="social-network-item">
                                <a target="_blank" href="https://www.facebook.com/CerkovIisusaHristaNikolaev/">
                                    <img className='social-network-icon' src={facebookIcon} alt="facebook-icon" />
                                </a>
                            </li>
                            <li class="social-network-item">
                                <a target="_blank" href="https://www.youtube.com/channel/UC6-__Kvyrc7N2cvLuHqAVxg">
                                    <img className='social-network-icon' src={youtubeIcon} alt="youtube-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="site-info">
                    <p>Тема: Penscratch 2, автор: React</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;