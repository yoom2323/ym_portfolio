import ComponentBody from "../components/ComponentBody";
import SkillsCon from "../components/SkillsCon";
import SkillsCon2 from "../components/SkillsCon2";
import { useState } from "react";
import "../style/Skills.scss";
import htmlImg from "../assets/images/htmlImg.png";

const data = [
  {
    id: 1,
    title: "html5",
    des: "html 설명",
    img: "{htmlImg}",
  },
  { id: 2, title: "css3", des: "css3css3css3 설명", img: "css3이미지" },
  {
    id: 3,
    title: "javascript & ecmascript6",
    des: "jsjsjs 설명",
    img: "js이미지",
  },
  { id: 4, title: "react", des: "react 설명", img: "react이미지" },
];
function Skills(props) {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const des = (i) => {
    const result = data.findIndex((item) => item.id === i);
    setText(data[result].des);
    setImg(data[result].img);
  };
  return (
    <>
      <div className="container">
        <div className="box1"></div>
        <div className="box2">
          <div className="skills">
            <h1>skills</h1>
          </div>
          <ul>
            {data.map((skill) => (
              <li
                key={skill.id}
                onMouseEnter={() => des(skill.id)}
                onMouseLeave={() => [setText(""), setImg("")]}
              >
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="box3">
          <h2>{text}</h2>
        </div>
        <div className="box4">
          <h1>{img}</h1>
          <img src={img} alt="img" />
        </div>
      </div>
      <div className="stickyBox"></div>
    </>
  );
}

export default Skills;
