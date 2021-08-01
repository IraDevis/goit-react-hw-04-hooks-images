import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ image, onClick }) {
  const handleClick = (largeImageURL) => {
    onClick(largeImageURL);
  };

  return (
    <li key="id" className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        srsset={image.largeImageURL}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => handleClick(image.largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};
