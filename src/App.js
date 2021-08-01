import { Component } from "react";
// import { useState, useEffect, useRef } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

import fetchImages from "./Services/ImagesAPI";

import "modern-normalize";
import "./styles.css";

// export default function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [images, setImages] = useState({});
//   const [modalImage, setModalImage] = useState('');
//   const [page, setPage] = useState(1);
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState('');
//   const isFirstRender = useRef(true);

//   return (
//       <>
//         <Searchbar onSubmit={changeSearch} />

//         <ImageGallery images={images} onClick={openModalImage} />

//         {loader && <Loader />}

//         {renderLoadButton && (
//           <Button onClick={getImages} length={images.length} />
//         )}

//         {showModal && <Modal onClose={toggleModal} image={modalImage} />}
//       </>
//     );
//  }

class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    modalImage: "",
    page: 1,
    loader: false,
    showModal: false,
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  changeSearch = (query) => {
    if (query === this.state.searchQuery) {
      return;
    }
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
      error: "",
    });
  };

  getImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ loader: true });

    fetchImages(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  openModalImage = (img) => {
    this.setState({
      modalImage: img,
    });
    this.toggleModal();
  };

  render() {
    const { images, loader, showModal, modalImage } = this.state;
    const { changeSearch, openModalImage, getImages, toggleModal } = this;
    const renderLoadButton = images.length >= 12 && !loader;

    return (
      <>
        <Searchbar onSubmit={changeSearch} />

        <ImageGallery images={images} onClick={openModalImage} />

        {loader && <Loader />}

        {renderLoadButton && (
          <Button onClick={getImages} length={images.length} />
        )}

        {showModal && <Modal onClose={toggleModal} image={modalImage} />}
      </>
    );
  }
}

export default App;
