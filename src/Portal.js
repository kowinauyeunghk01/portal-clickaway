import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  font-size: 5rem;
  background-color: black;
  z-index: 10;
  left: 0;
  top: 0;
  color: white;
  user-select: none;
  cursor: pointer;
`;

const Portal = (props) => {
  return ReactDOM.createPortal(<Wrap {...props}>Portal</Wrap>, document.body);
};

export default Portal;
