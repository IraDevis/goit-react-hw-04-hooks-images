// import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} onClick={onClick} image={image} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// class ImageGallery extends Component {
//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//   };

//   render() {
//     const { images, onClick } = this.props;

//     return (
//       <ul className={styles.ImageGallery}>
//         {images.map((image) => (
//           <ImageGalleryItem key={image.id} onClick={onClick} image={image} />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ImageGallery;
