import React from "react";
import ComponentBody from "../components/ComponentBody";
import Pf1Con from "../components/Pf1Con";
import Pf1Con2 from "../components/Pf1Con2";

function Pf1(props) {
  return (
    <>
      <ComponentBody Pf1Con={Pf1Con()} Pf1Con2={Pf1Con2()} />
    </>
  );
}

export default Pf1;
