import React from "react";
import "./ImageList.css"
const ImageShow = ({ image, imageClicked }) => {
    const imageSrc = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    return (
        <div onClick={() => imageClicked(imageSrc)}>
            <img src={imageSrc} alt={image.title} />
        </div>
    )
}

export default ImageShow;