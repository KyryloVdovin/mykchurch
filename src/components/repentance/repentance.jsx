import EntryTitle from "../general-components/entry-title";
import RepentancePrayer from './repentance-prayer';
import ShareButton from './share-btn';
import './share-btn.css';
import LikeButton from '../general-components/like-button';

const Repentance = (props) => {
    let shareButtons = props.shareButtons.map(btn => { return <ShareButton btnTitle={btn.title} icon={btn.icon} link={btn.link}/> });

    return (
        <div>
            <EntryTitle entryTitle={props.entryTitle} />
            <div>
                <div>
                    <RepentancePrayer repentancePrayer={props.repentancePrayer} />
                    {/* <div>search and sorting</div> */}
                </div>
                <div>
                    <div className="share-btn-subtitle-container">
                        <h2 className="share-btn-subtitle">Поделиться ссылкой:</h2>
                    </div>
                    <ul className="share-btn-list">
                        {shareButtons}
                    </ul>
                </div>
                <LikeButton />
            </div>
        </div>
    )
}

export default Repentance;