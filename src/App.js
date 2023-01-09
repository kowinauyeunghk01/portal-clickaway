import styled from "styled-components";
import { useCallback, useState } from "react";
import { Button } from "./Button";
import Portal from "./Portal";

function App() {
  const [portalVisible, setPortalVisible] = useState(false);
  const handleClick = useCallback((e) => {
    const layer = e.currentTarget.innerHTML.split("<")[0];
    console.log(layer, e.eventPhase, e.target);
  }, []);

  return (
    <El onClickCapture={handleClick} onClick={handleClick}>
      root
      <El onClickCapture={handleClick} onClick={handleClick}>
        Layer1
      </El>
      <El onClickCapture={handleClick} onClick={handleClick}>
        Layer1
        <El onClickCapture={handleClick} onClick={handleClick}>
          Layer2
          <El onClickCapture={handleClick} onClick={handleClick}>
            Layer3
            <Button />
            <button onClick={() => setPortalVisible(true)}>portal</button>
          </El>
        </El>
      </El>
      <El onClickCapture={handleClick} onClick={handleClick}>
        Layer1
      </El>
      {portalVisible && <Portal onClick={() => setPortalVisible(false)} />}
    </El>
  );
}

const El = styled.div`
  border: 3px solid red;
  padding: 1rem;
  display: flex;
  flex-grow: 0;
  position: relative;
  &:after {
    display: block;
    content: "El";
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.8rem;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 0.4rem;
  }
  > div {
    border-color: orange;
  }
  > div > div {
    border-color: yellow;
  }
  > div > div > div {
    border-color: green;
  }
  > div > div > div > div {
    border-color: cyan;
  }
  > div > div > div > div > div {
    border-color: blue;
  }
  > div > div > div > div > div > div {
    border-color: purple;
  }
`;

export default App;
