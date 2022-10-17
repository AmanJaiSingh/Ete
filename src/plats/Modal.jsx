import React from "react";
import ReactDom from "react-dom";

export const Backdrop = (props) => {
  const handleClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return <div onClick={handleClick} className="loader-overlay"></div>;
};
const Modal = (props) => {
  //   console.log(props);
  return (
    <>
      {ReactDom.createPortal(
        <>
          <Backdrop onClose={props.onClose} />
          <div className="modal">
            <button type="close" onClick={props.onClose}>
              X
            </button>
            <div className="">{props.children}</div>
          </div>
        </>,

        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
