import ImageShow from "./ImageShow";
import '../App.css';

function ImageList({ images }) {
    const imagesMap = images.map((image) => (
        <ImageShow key={image.id} image={image} />
    ));
    return (
        <div className="image-list">
            {/* Length of image {images.length} */}
            {imagesMap}
        </div>
    )
}

export default ImageList;