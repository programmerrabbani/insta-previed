import React from "react";
import "./Modal.scss";

import { FaTimes } from "react-icons/fa";

const Modal = ({ children, title, hide }) => {
  return (
    <>
      <div className="modal_blur">
        <button className="cross_btn" onClick={() => hide(false)}>
          <FaTimes />
        </button>
        <div className="modal_wrapper">
          <div className="modal_main">
            <div className="modal_head">
              <h1 className="modal_title">{title}</h1>
            </div>
            <div className="modal_bodyPart">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
