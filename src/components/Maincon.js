import "../style/MainCon.scss";
import { Link } from "react-router-dom";
import aboutMe from "../pages/AboutMe";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import skills from "../pages/Skills";
import tree from "../assets/images/tree.png";
import develope from "../assets/images/group16.png";
import art from "../assets/images/art.png";
import { useEffect } from "react";
import smile from "../assets/images/icons8-smiling-face-with-heart-100.png";
import boom from "../assets/images/icons8-bang-64 (1).png";

function Maincon() {
  return (
    <div className="mainWrapper">
      <div className="mainItem">
        <div className="item1 leftbox"></div>
        <div className="item2 video">
          <iframe
            src="https://www.youtube.com/embed/ib0zl5_Z8HI?autoplay=1&loop=1&playlist=ib0zl5_Z8HI&mute=1&controls=0&modestbranding=1&showinfo=0"
            title="YouTube video player"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="item3 aboutMe">
          <Link to="/aboutMe" style={{ textDecoration: "none" }}>
            <div className="colorBox"></div>
            <p>About Me</p>
          </Link>
        </div>
        <div className="item4 skills">
          <Link to="/skills" style={{ textDecoration: "none" }}>
            <div className="colorBox2"></div>
            <p>Skills</p>
          </Link>
        </div>
        <div className="item5 slideText">
          <div className="flowText">
            <div className="flowWrap fw1">
              hi! i'm yumi. <img src={smile} alt="smile" />{" "}
              <span> welcome to my portfolio</span>{" "}
              <img src={boom} alt="boom" />
              hi! i'm yumi. <img src={smile} alt="smile" />{" "}
              <span> welcome to my portfolio</span>{" "}
              <img src={boom} alt="boom" />
            </div>
            <div className="flowWrap fw2">
              hi! i'm yumi. <img src={smile} alt="smile" />{" "}
              <span> welcome to my portfolio</span>{" "}
              <img src={boom} alt="boom" />
              hi! i'm yumi. <img src={smile} alt="smile" />{" "}
              <span> welcome to my portfolio</span>{" "}
              <img src={boom} alt="boom" />
            </div>
          </div>
        </div>
        <div className="item6 pj1">
          <Link to="/Pf1" style={{ textDecoration: "none" }}>
            <p>Pf1</p>
          </Link>
        </div>
        <div className="item7 tree">
          <img src={tree} alt="tree" />
        </div>
        <div className="item8 description"></div>
        <div className="item9 pj2">
          <Link to="/Pf2" style={{ textDecoration: "none" }}>
            <p>Pf2</p>
          </Link>
        </div>
        <div className="item10 pj3">
          <Link to="/Pf3" style={{ textDecoration: "none" }}>
            <p>Pf3</p>
          </Link>
        </div>
        <div className="item11 develope">
          <img src={develope} alt="develope" />
        </div>
        <div className="item12 pj4">
          <Link to="/Pf4" style={{ textDecoration: "none" }}>
            <p>Pf4</p>
          </Link>
        </div>
        <div className="item13 art">
          <img src={art} alt="art" />
        </div>
      </div>
      <div className="stickyBox"></div>
    </div>
  );
}

export default Maincon;
