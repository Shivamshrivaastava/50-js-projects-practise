import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  return { isOpen, handleOpen, handleClose };
};

export default useDisclouse;