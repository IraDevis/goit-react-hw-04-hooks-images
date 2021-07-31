import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  handleClick = (largeImageURL) => {
    this.props.onClick(largeImageURL);
  };

  render() {
    const { image } = this.props;

    return (
      <li key="id" className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          srsset={image.largeImageURL}
          alt={image.tags}
          className={styles.ImageGalleryItemImage}
          onClick={() => this.handleClick(image.largeImageURL)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
