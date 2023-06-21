import './entry-title.css';

const EntryTitle = (props) => {
    return (
        <div className='entry-title'>
            <p>{props.entryTitle}</p>
        </div>
    )
}

export default EntryTitle;