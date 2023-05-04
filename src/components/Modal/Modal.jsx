import React from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ children }) {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.content}>{children}</div>
    </div>,
    modalRoot
  );
}
