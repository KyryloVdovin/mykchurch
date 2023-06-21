import { connect } from 'react-redux';
import Gallary from './photo-album';

let mapStatetoProps = (state) => {
    return {
        repentancePrayer: state.repentancePage.repentancePrayer,
        entryTitle: state.repentancePage.entryTitle,
        shareButtons: state.repentancePage.shareButtons,
    }
}

const PhotoAlbumContainer = connect(mapStatetoProps, {})(Gallary);

export default PhotoAlbumContainer;