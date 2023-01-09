import React, { useState, useCallback } from "react";
import { Dropdown } from "./Dropdown";

export const Button = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    console.log("handleClick");
    setVisible(!visible);
  }, [visible, setVisible]);

  const close = useCallback(() => {
    console.log("close");
    setVisible(false);
  }, [setVisible]);

  return (
    <>
      <button onClick={handleClick}>open</button>
      {visible && <Dropdown close={close} />}
    </>
  );
};
