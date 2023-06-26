import MinistryPost from './ministry-post';

const MainContent = (props) => {
    const reversedMinistryPosts = [...props.ministryPosts].reverse()
    const ministryPosts = reversedMinistryPosts.map(post => {
        return <MinistryPost
            shareButtons={props.shareButtons} url={post.url} data={post.data}/>
    });

    return (
        <div>
            <div className='main-content'>
                {ministryPosts}
            </div>
        </div>
    )
}

export default MainContent;