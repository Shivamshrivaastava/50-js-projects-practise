/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ handleClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute left-0 top-0 z-40 grid h-screen w-screen place-content-center backdrop-blur">
          <div className=" text-blacks relative z-50 m-auto min-h-[200px] w-[360px] rounded-md bg-white p-4">
            <div
              className="flex cursor-pointer justify-end text-2xl"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;