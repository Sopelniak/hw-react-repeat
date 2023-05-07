import React, { Component } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { Gallery } from "./Gallery/Gallery";
import { Loader } from "./Loader/Loader";
import { getImages } from "./services/api";
import { Btn } from "./Button/Button";

export class ImgFinder extends Component {
  state = {
    query: "",
    page: 1,
    imgs: [],
    img: null,
    isLoading: false,
    isModalOpen: false,
    error: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const response = await getImages(query, page);

      this.setState((prevState) => {
        return {
          imgs:
            page === 1
              ? [...response.data.hits]
              : [...prevState.imgs, ...response.data.hits],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (query) => {
    this.setState({ query, page: 1 });
  };

  handleClickItem = (item) => {
    this.setState({ img: item, isModalOpen: true });
  };

  onLoadMore = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false, error: "" });
  };

  render() {
    const { imgs, img, isModalOpen, isLoading, error } = this.state;
    return (
      <>
        <Searchbar setQuery={this.handleSubmit} />
        {error && (
          <Modal onCloseModal={this.onCloseModal}>ERROR: {error}</Modal>
        )}
        <Gallery items={imgs} handleClickItem={this.handleClickItem} />
        {imgs.length > 0 && <Btn onClick={this.onLoadMore}>Load more...</Btn>}
        {isModalOpen && (
          <Modal onCloseModal={this.onCloseModal}>
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
  }
}
