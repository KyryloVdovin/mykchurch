import './description.css';

const AboutUsDescription = (props) => {
    let description = props.aboutUsDescription.map(descrip => { return <p className='description-text'>{descrip.description}</p> });

    return (
        <div className='border'>
            {description}
        </div>
    )
}

export default AboutUsDescription;