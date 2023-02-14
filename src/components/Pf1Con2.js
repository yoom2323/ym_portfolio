import "../style/pf1Con2.scss";
import pf1Con2 from "../assets/images/pf1Con2.png";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

function Pf1Con2(props) {
  return (
    <div className="pf1Con2">
      <div className="imgbox">
        <img src={pf1Con2} alt="studioRhe" />
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

export default Pf1Con2;
