import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
    {
        src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=414&resize=414%2C311&h=311#038;h=311", 
        width: 1600, height: 1200,
        // srcSet: [
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=414&resize=414%2C311&h=311#038;h=311", width: 400, height: 300 },
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=414&resize=414%2C311&h=311#038;h=311", width: 200, height: 150 }
        // ]
    },
    {
        src: "https://nikchurch.files.wordpress.com/2017/04/dsc03494.jpg?w=391&resize=391%2C293&h=293#038;h=293",
        width: 1600, height: 900,
        // srcSet: [
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/dsc03494.jpg?w=391&resize=391%2C293&h=293#038;h=293", width: 400, height: 300 },
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/dsc03494.jpg?w=391&resize=391%2C293&h=293#038;h=293", width: 200, height: 150 }
        // ]
    },
    {
        src: "https://nikchurch.files.wordpress.com/2017/04/rzpquxnmx-q.jpg?w=652&resize=652%2C489&h=489#038;h=489", width: 1600, height: 900,
        // srcSet: [
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/rzpquxnmx-q.jpg?w=652&resize=652%2C489&h=489#038;h=489", width: 400, height: 300 },
        //     { src: "https://nikchurch.files.wordpress.com/2017/04/rzpquxnmx-q.jpg?w=652&resize=652%2C489&h=489#038;h=489", width: 200, height: 150 }
        // ]
    },
];

const Gallary = (props) => {
    const [open, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openCurrentPhoto = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    }

    return (
        <div>
            <PhotoAlbum layout="rows" photos={photos} onClick={({ index }) => { openCurrentPhoto(index); }} />
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={photoIndex}
                slides={photos}
            />
        </div>
    )
}

export default Gallary;