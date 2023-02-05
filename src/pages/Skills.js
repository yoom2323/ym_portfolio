import ComponentBody from "../components/ComponentBody";
import { useState } from "react";
import "../style/Skills.scss";
import htmlImg from "../assets/images/htmlImg.png";
import jsImg from "../assets/images/jsImg.png";
import cssImg from "../assets/images/cssImg.png";
import reactImg from "../assets/images/reactImg.png";



const data = [

  {
    id: 1,
    title: "html5",
    des: "html 설명",
    img: <img src={htmlImg} alt="html5"/>,
  },
  { id: 2, title: "css3", des: "css3css3css3 설명", img: <img src={cssImg} alt="css3"/>},
  {
    id: 3,
    title: "javascript & ecmascript6",
    des: "jsjsjs 설명",
    img: <img src={jsImg} alt="js" />,
  },
  { id: 4, title: "react", des: "react 설명", img: <img src={reactImg} alt="react" /> },
];
function Skills(props) {

  const [text, setText] = useState("What Can I Do?");
  const [img, setImg] = useState("");
  const [check, setCheck] = useState(false);
  const des = (i) => {
    const result = data.findIndex((item) => item.id === i);
    setCheck(data[result].id ? true : false);
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
              console.log(skill),
              <li
                key={skill.id}
                onMouseEnter={() => [des(skill.id) ]}
                onMouseLeave={() => [setText("What Can I Do?"), setImg(""), setCheck(false)]}
              >
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={check ? 'box3' : 'box4'}>
          <h2 className={check ? 'transition' : ''} >{text}</h2>
        </div>
        <div className="box4" >
              {img}
        </div>
      </div>
      <div className="stickyBox"></div>
    </>
  );
}

export default Skills;
