import React, { Component } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";

export class ImgFinder extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <Searchbar />
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
