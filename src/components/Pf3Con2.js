import React from "react";
import "../style/pf3Con2.scss";
import pf3Con2 from "../assets/images/pf3Con2.png";

import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

function Pf3Con2(props) {
  return (
    <div className="pf3Con2">
      <div className="imgbox">
        <img src={pf3Con2} alt="dyami" />
        <Link to="https://yoom2323.github.io/reactwebex/#" target="_blank">
          <div class="view">
            <p>
              <HiOutlineExternalLink />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Pf3Con2;
