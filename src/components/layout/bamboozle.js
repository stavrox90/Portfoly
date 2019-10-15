import React, { useState, useRef } from "react";
import { Box } from '@material-ui/core';
import { Button, Overlay, Popover } from "react-bootstrap";

function Bamboozle() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10rem" }}>
        <Button
          ref={target}
          onClick={() => setShow(!show)}
        >
          Click this for no reason
      </Button>
        <Overlay target={target.current} show={show} placement="top">
          {props => <Popover.Title {...props}>Aha! A curious one! Apparently there's nothing yet..</Popover.Title>}
        </Overlay>{" "}
      </Box>
    </div>
  );
}

export default Bamboozle;
