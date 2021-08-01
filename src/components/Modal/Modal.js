// import { Component } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const onEscKeyPress = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onEscKeyPress);
    return () => {
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, [onClose]);

  const onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div className={styles.Overlay} onClick={onOverlayClick}>
      <div className={styles.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// class Modal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.onEscKeyPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onEscKeyPress);
//   }

//   onEscKeyPress = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   onOverlayClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <div className={styles.Overlay} onClick={this.onOverlayClick}>
//         <div className={styles.Modal}>
//           <img src={this.props.image} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
