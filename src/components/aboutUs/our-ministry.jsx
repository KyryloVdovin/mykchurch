

const OurMinistry = ({ourLocation, morningPrayer, sundayMinistry, churchPhoto}) => {

    return (
        <div>
            <p className='description-text'>{ourLocation}</p>
            <p className='description-text'>{morningPrayer}</p>
            <p className='description-text'>{sundayMinistry.morning}</p>
            <p className='description-text'>{sundayMinistry.afternoon}</p>
            <img src={churchPhoto} />
        </div>
    )
}

export default OurMinistry;