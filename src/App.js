import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

import fetchImages from "./Services/ImagesAPI";

import "modern-normalize";
import "./styles.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const renderLoadButton = images.length >= 12 && !loader;

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoader(true);
    fetchImages(searchQuery, page)
      .then((images) => {
        setImages((prev) => [...prev, ...images]);
      })
      .catch(setError)
      .finally(setLoader(false));
  }, [searchQuery, page]);

  const changeSearch = (query) => {
    if (query === searchQuery) {
      return;
    }

    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setError("");
  };

  const openModalImage = (img) => {
    setModalImage(img);
    setShowModal(!showModal);
  };

  return (
    <>
      <Searchbar onSubmit={changeSearch} />

      <ImageGallery images={images} onClick={openModalImage} />

      {loader && <Loader />}

      {error && <p>Sorry! Somethimg went wrong... Try again, please!</p>}

      {renderLoadButton && (
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          length={images.length}
        />
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)} image={modalImage} />
      )}
    </>
  );
}
