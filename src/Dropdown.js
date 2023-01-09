import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useClickAway } from "react-use";

const Item = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Wrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: white;
  border: 3px dotted red;
  border-radius: 5px;
`;

export const Dropdown = ({ close, ...props }) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    console.log("useClickAway");
    close();
  });
  useEffect(() => {
    console.log("Dropdown didMount");
    return () => {
      console.log("Dropdown will unmount");
    };
  }, []);
  return (
    <Wrap ref={ref} {...props}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5</Item>
      <Item>Item 6</Item>
      <Item>Item 7</Item>
      <Item>Item 8</Item>
    </Wrap>
  );
};
