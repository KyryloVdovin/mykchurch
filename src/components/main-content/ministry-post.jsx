import ReactPlayer from 'react-player/youtube'

const MinistryPost = (props) => {
    return (
        <article>
            <div>
                <div className="video-wrapper">
                    <ReactPlayer url={props.url} controls />
                </div>
            </div>
        </article>
    )
}

export default MinistryPost;