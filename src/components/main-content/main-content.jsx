import MinistryPost from './ministry-post';

const MainContent = (props) => {
    const ministryPosts = props.ministryPosts.map(post => 
        { return <MinistryPost url={post.url}/> });
    return (
        <div>
            <div>
                {ministryPosts}
            </div>
        </div>
    )
}

export default MainContent;