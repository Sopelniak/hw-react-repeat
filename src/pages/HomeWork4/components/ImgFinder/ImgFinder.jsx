import React, { Component, useEffect, useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { Gallery } from "./Gallery/Gallery";
import { Loader } from "./Loader/Loader";
import { getImages } from "./services/api";
import { Btn } from "./Button/Button";
import { Notification } from "../../../../components/Notification/Notification";

export const ImgFinder4 = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
    if (page === 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 190,
        behavior: "smooth",
      });
    }, 500);
  }, [query, page]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await getImages(query, page);

      setImgs((prevImgs) => {
        return page === 1
          ? [...response.data.hits]
          : [...prevImgs, ...response.data.hits];
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(query) {
    setQuery(query);
    setPage(1);
  }

  function handleClickItem(item) {
    setImg(item);
    setIsModalOpen(true);
  }

  function onLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function onCloseModal() {
    setIsModalOpen(false);
    setError("");
  }

  return (
    <>
      <Searchbar setQuery={handleSubmit} />
      {error && <Modal onCloseModal={onCloseModal}>ERROR: {error}</Modal>}
      {imgs.length > 0 ? (
        <Gallery items={imgs} handleClickItem={handleClickItem} />
      ) : (
        <Notification message="There are no offers for your request!" />
      )}
      {imgs.length > 0 && <Btn onClick={onLoadMore}>Load more...</Btn>}
      {isModalOpen && (
        <Modal onCloseModal={onCloseModal}>
          <img src={img.largeImageURL} alt={img.tags} />
        </Modal>
      )}
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </>
  );
};
