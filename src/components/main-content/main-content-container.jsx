import { connect } from "react-redux"
import MainContent from './main-content';

const mapDispatchToProps = (state) => {
    return {
        ministryPosts: state.mainPage.posts,
        shareButtons: state.repentancePage.shareButtons,
    }
}

const MainContentContainer = connect(mapDispatchToProps, {})(MainContent);

export default MainContentContainer;