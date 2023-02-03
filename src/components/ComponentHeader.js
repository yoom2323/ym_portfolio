import { Link } from "react-router-dom";
import "../style/componentHeader.scss";

function ComponentHeader() {
  return (
    <div className="headerContainer">
      <div className="box1">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>publisher seolyumi</p>
        </Link>
      </div>
      <div className="box2"></div>
    </div>
  );
}

export default ComponentHeader;
