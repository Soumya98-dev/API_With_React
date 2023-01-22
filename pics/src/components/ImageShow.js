import '../App.css';

function ImageShow({ image }) {

    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
            {/* {image.id} */}
        </div>
    )
}

export default ImageShow;