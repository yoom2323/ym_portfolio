import "../style/pf2Con2.scss";

import React from "react";
import pf2Con2 from "../assets/images/pf2Con2.png";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

function Pf2Con2(props) {
  return (
    <div className="pf2Con2">
      <div className="imgbox">
        <img src={pf2Con2} alt="studioRhe" />
        <Link to="https://beforechristmas.github.io/StudioRhe/" target="_blank">
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

export default Pf2Con2;
