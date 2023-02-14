import ComponentBody from "../components/ComponentBody";
import { useState } from "react";
import "../style/Skills.scss";
import htmlImg from "../assets/images/htmlImg.png";
import jsImg from "../assets/images/jsImg.png";
import cssImg from "../assets/images/cssImg.png";
import reactImg from "../assets/images/reactImg.png";
import check from "../assets/images/check.png";

const chk = <img src={check} alt="chk" />;

const data = [
  {
    id: 1,
    title: "html5",
    des: (
      <div className="html">
        <ul>
          <li>
            {chk}
            <span>웹 사이트 구축 및 디자인</span>
          </li>
          <li>
            {chk}
            <span>
              웹 표준 & 웹 접근성을 고려한 <b>시맨틱 마크업</b>
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>미디어쿼리</b>를 이용한 반응형 웹 제작
            </span>
          </li>
          <li>
            {chk}
            <span>
              디자인 <b>코드화</b>
            </span>
          </li>
          <li>
            {chk}
            <span>다양한 레이아웃 구조</span>
          </li>
        </ul>
      </div>
    ),
    img: <img src={htmlImg} alt="html5" />,
  },
  {
    id: 2,
    title: "css3",
    des: (
      <div className="css3">
        <ul>
          <li>
            {chk}
            <span>
              <b>flex, grid, position</b>을 사용한 다양한 레이아웃 구현
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>Keyframe</b>을 활용한 비자바스크립트 애니메이션 구현
            </span>
          </li>
          <li>
            {chk}
            <span>inline / block 요소의 분별과 적절한 활용</span>
          </li>
          <li>
            {chk}
            <span>
              <b>SCSS</b> 활용
            </span>
          </li>
        </ul>
      </div>
    ),
    img: <img src={cssImg} alt="css3" />,
  },
  {
    id: 3,
    title: "javascript & ecmascript6",
    des: (
      <div className="js">
        <ul>
          <li>
            {chk}
            <span>자바스크립트 ES6문법 이해</span>
          </li>
          <li>
            {chk}
            <span>
              <b>슬라이드 & 자동 애니메이션</b> 및 움직임 구현
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>이벤트 매서드</b> 사용
            </span>
          </li>
          <li>
            {chk}
            <span>DOM 조작 및 제어</span>
          </li>
          <li>
            {chk}
            <span>
              다양한 <b>OpenAPI</b> 사용 가능
            </span>
          </li>
        </ul>
      </div>
    ),
    img: <img src={jsImg} alt="js" />,
  },
  {
    id: 4,
    title: "react",
    des: (
      <div className="react">
        <ul>
          <li>
            {chk}
            <span>
              함수 스타일로 컴포넌트 작성하고 props를 사용하여 데이터 전달
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>리액트에 최적화</b>된 자바스크립트 문법으로 데이터 바인딩
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>Axios</b>를 활용한 외부 데이터 로딩
            </span>
          </li>
          <li>
            {chk}
            <span>
              <b>Router</b>의 이해와 활용
            </span>
          </li>
        </ul>
      </div>
    ),
    img: <img src={reactImg} alt="react" />,
  },
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
            {data.map(
              (skill) => (
                console.log(skill),
                (
                  <li
                    key={skill.id}
                    onMouseEnter={() => [des(skill.id)]}
                    onMouseLeave={() => [
                      // setText("What Can I Do?"),
                      // setImg(""),
                      // setCheck(false),
                    ]}
                  >
                    {skill.title}
                  </li>
                )
              )
            )}
          </ul>
        </div>
        <div className={check ? "box3" : "box4"}>
          <h2 className={check ? "transition" : ""}>{text}</h2>
        </div>
        <div className="box4">{img}</div>
      </div>
      <div className="stickyBox"></div>
    </>
  );
}

export default Skills;
