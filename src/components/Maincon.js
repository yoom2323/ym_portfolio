import "../style/MainCon.scss";
import { Link } from "react-router-dom";
import aboutMe from "../pages/AboutMe";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import skills from "../pages/Skills";
import tree from "../assets/images/tree.png";
import develope from "../assets/images/group16.png";
import art from "../assets/images/art.png";
import { useEffect, useState } from "react";
import smile from "../assets/images/icons8-smiling-face-with-heart-100.png";
import boom from "../assets/images/icons8-bang-64 (1).png";
import pf1 from "../assets/images/pf1.png";
import pf2 from "../assets/images/pf2.png";

const pfData = [
  {
    id: 1,
    title: pf1,
    img: <img src={pf1} alt="pf1" />,
    des: "Studio RHE",
  },
  { id: 2, title: pf2, img: <img src={pf2} alt="pf2" />, des: "desdesdes" },
  {
    id: 3,
    title: pf2,
    img: <img src="" alt="pf3" />,
    des: "pf3pf3pf3pf3pf3pf3pf3",
  },
  {
    id: 4,
    title: pf2,
    img: <img src="" alt="pf4" />,
    des: "pf4pf4pf4pf4pf4pf4pf4pf4",
  },
];

{
  pfData.map((pf, i) => <div key={pfData.id}></div>);
}
function Maincon(props) {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const des = (i) => {
    const result = pfData.findIndex((item) => item.id === i);
    setText(pfData[result].des);
  };

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
          <Link
            to="/Pf1"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => [des(pfData[0].id)]}
            onMouseLeave={() => setText("")}
          >
            {pfData[0].img}
          </Link>
        </div>
        <div className="item7 tree">
          <img src={tree} alt="tree" />
        </div>
        <div className="item8 description">{text}</div>
        <div className="item9 pj2">
          <Link
            to="/Pf2"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => [des(pfData[1].id)]}
            onMouseLeave={() => setText("")}
          >
            {pfData[1].img}
          </Link>
        </div>
        <div className="item10 pj3">
          <Link
            to="/Pf3"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => [des(pfData[2].id)]}
            onMouseLeave={() => setText("")}
          >
            {pfData[2].img}
          </Link>
        </div>
        <div className="item11 develope">
          <img src={develope} alt="develope" />
        </div>
        <div className="item12 pj4">
          <Link
            to="/Pf4"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => [des(pfData[3].id)]}
            onMouseLeave={() => setText("")}
          >
            {pfData[3].img}
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
