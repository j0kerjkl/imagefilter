import ImageShow from "./ImageShow"
import "./ImageList.css"
import { useState } from "react";


function ImageList({ images }) {
    const [selectedPhoto, setSelecedPhoto] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onClick = (imageSrc) => {
        setSelecedPhoto(imageSrc);
        setModalVisible(true);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        );
    }


    const renderedImages = images.map((image) => {
        return <ImageShow imageClicked={onClick} key={image.id} image={image} />
    })
    return (
        <>
            {modalVisible &&
                <div className="modal">
                    <div className="photoContainer">
                        <div onClick={() => setModalVisible(false)} className="exitIcon"><button className="ui red button">X</button></div>
                        <img src={selectedPhoto} alt="" />
                    </div>
                </div>
            }

            <div className="grid">
                {renderedImages}
            </div>
        </>

    )
}
export default ImageList