import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

import imageAPI from "./Services/ImagesAPI";

import "modern-normalize";
import "./styles.css";

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
    const options = { searchQuery, page };

    this.setState({ loader: true });

    imageAPI
      .fetchImages(options)
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
