import { connect } from 'react-redux';
import Gallary from './photo-album';

let mapStatetoProps = (state) => {
    return {
        photos: state.photoAlbumPage.photos,
        entryTitle: state.photoAlbumPage.entryTitle,
        shareButtons: state.repentancePage.shareButtons,
    }
}

const PhotoAlbumContainer = connect(mapStatetoProps, {})(Gallary);

export default PhotoAlbumContainer;