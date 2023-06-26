import ReactPlayer from 'react-player/youtube'
import ShareButtons from '../repentance/share-buttons-container';
import LikeButton from '../general-components/like-button';
import './ministry-post.css';

const MinistryPost = (props) => {
    return (
        <article>
            <div className='post'>
                <header>
                    <h2 className='entry-title'>
                        <a className='header-title-hover' href='#f'>Воскресное служение - <span>{props.data}</span></a>
                    </h2>
                    <div className='entry-meta'>
                        <span>
                            <a className='header-title-hover' href='#f'>{props.data}</a>
                        </span>
                        <span> ~ </span>
                        <span>
                            <a className='header-title-hover' href='#f'>Оставьте комментарий</a>
                        </span>
                    </div>
                </header>
                <div className="video-wrapper">
                    <ReactPlayer url={props.url} controls />
                </div>
                <ShareButtons shareButtons={props.shareButtons} />
                <div className='like-btn-container'><LikeButton /></div>
            </div>
        </article>
    )
}

export default MinistryPost;