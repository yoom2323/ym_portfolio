import React from "react";
import ComponentBody from "../components/ComponentBody";
import Pf3Con from "../components/Pf3Con";
import Pf3Con2 from "../components/Pf3Con2";

function Pf3(props) {
  return (
    <>
      <ComponentBody Pf3Con={Pf3Con()} Pf3Con2={Pf3Con2()} />
    </>
  );
}

export default Pf3;
