import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyPress);
  }

  onEscKeyPress = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.onOverlayClick}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
