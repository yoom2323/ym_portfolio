import React from "react";
import ComponentBody from "../components/ComponentBody";
import Pf4Con from "../components/Pf4Con";
import Pf4Con2 from "../components/Pf4Con2";

function Pf4(props) {
  return (
    <>
      <ComponentBody Pf4Con={Pf4Con()} Pf4Con2={Pf4Con2()} />
    </>
  );
}

export default Pf4;
