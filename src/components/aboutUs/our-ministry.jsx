

const OurMinistry = ({ourLocation, morningPrayer, sundayMinistry, churchPhoto, youthMinistry}) => {

    return (
        <div>
            <p className='description-text'>{ourLocation}</p>
            <p className='description-text'>{morningPrayer}</p>
            <p className='description-text'>{sundayMinistry.morning}</p>
            <p className='description-text'>{sundayMinistry.afternoon}</p>
            <p className='description-text'>{youthMinistry}</p>
            <img className="church-img" src={churchPhoto} />
        </div>
    )
}

export default OurMinistry;