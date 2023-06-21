import './repentance-prayer.css';

const RepentancePrayer = (props) => {
    let newText = props.repentancePrayer.split('-').map(p => { return <p className='repentance-prayer-item'>{p}</p> });

    return (
        <div className='prayer-content'>
            {newText}
        </div>
    )
}

export default RepentancePrayer;