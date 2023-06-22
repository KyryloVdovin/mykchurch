import ShareButton from './share-btn';
import './share-btn.css';

const ShareButtonsContainer = (props) => {

    let shareButtons = props.shareButtons.map(btn => { return <ShareButton btnTitle={btn.title} icon={btn.icon} link={btn.link} /> });

    return (
        <div>
            <div className="share-btn-subtitle-container">
                <h2 className="share-btn-subtitle">Поделиться ссылкой:</h2>
            </div>
            <ul className="share-btn-list">
                {shareButtons}
            </ul>
        </div>
    )
}

export default ShareButtonsContainer;