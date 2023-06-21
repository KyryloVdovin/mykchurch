import './share-btn.css';

const ShareButton = (props) => {
    return (
        <li>
            <a href={props.link} target='_blank'>
                <img className="share-btn-icon" src={props.icon}/>
                <span>{props.btnTitle}</span>
            </a>
        </li>
    )
}

export default ShareButton;