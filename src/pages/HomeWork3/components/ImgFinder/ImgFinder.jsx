import React, { Component } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";
import { Gallery } from "./Gallery/Gallery";

axios.defaults.baseURL = "https://pixabay.com/api/";
const keyPixabay = "30807685-8e6cd00353cc1057d11bd8bf4";

export class ImgFinder extends Component {
  state = {
    query: "",
    imgs: [],
    isModalOpen: false,
  };

  async componentDidMount() {
    const response = await axios.get(
      `?q=cat&page=1&key=${keyPixabay}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ imgs: response.data.hits });
    console.log(response.data.hits);
  }

  async componentDidUpdate(prevProps, prevState) {
    const response = await axios.get(
      `?q=${this.state.query}&page=1&key=${keyPixabay}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (this.state.query !== prevState.query) {
      this.setState({ imgs: response.data.hits });
      console.log(response.data.hits);
    }
  }

  setQuery = (query) => {
    this.setState({ query: query });
  };

  render() {
    const { imgs, isModalOpen } = this.state;
    return (
      <>
        <Searchbar setQuery={this.setQuery} />
        <Gallery items={imgs} />
        {isModalOpen && (
          <Modal>
            <p>Hallo, ANDREY</p>
          </Modal>
        )}
        {/* <p>SearchBar</p> */}
      </>
    );
  }
}
