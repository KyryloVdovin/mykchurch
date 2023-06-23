import React, { useEffect, useRef, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photoAlbumData from '../data/photo-album-data';
import EntryTitle from '../general-components/entry-title';
import ShareButtonsContainer from '../repentance/share-buttons-container';
import LikeButton from '../general-components/like-button';
import './photo-album.css';

const Gallary = (props) => {
    const [open, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const cont = useRef();

    const openCurrentPhoto = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    }

    const getColumns = (containerWidth) => {
        if (containerWidth < 400) return 1;
        if (containerWidth < 800) return 2;
        return 2;
    }

    return (
        <div>
            <EntryTitle entryTitle={props.entryTitle} />
            <div ref={cont} className="photo-album-container">
                <PhotoAlbum columns={(containerWidth) => getColumns(containerWidth)}
                    layout="masonry" photos={photoAlbumData.photos} onClick={({ index, }) => { openCurrentPhoto(index); }} />
            </div>
            <ShareButtonsContainer shareButtons={props.shareButtons} />
            <LikeButton />
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={photoIndex}
                slides={photoAlbumData.photos}
            />
        </div>
    )
}

export default Gallary;