import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <div className={css.backdrop} onClick={this.props.onCloseModal}>
        <div className={css.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
