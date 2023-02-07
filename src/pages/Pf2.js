import React from "react";
import ComponentBody from "../components/ComponentBody";
import Pf2Con from "../components/Pf2Con";
import Pf2Con2 from "../components/Pf2Con2";

function Pf2(props) {
  return (
    <>
      <ComponentBody Pf2Con={Pf2Con()} Pf2Con2={Pf2Con2()} />
    </>
  );
}

export default Pf2;
