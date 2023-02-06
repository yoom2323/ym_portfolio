import React from "react";
// import "../style/aboutMeCon.scss";
import smile from "../assets/images/icons8-smiling-face-with-heart-100.png";
// import pp from "../assets/images/pp.png";
import { Link } from "react-router-dom";

function AboutMeCon(props) {
  const url = "omgvic@naver.com";
  const git = "https://github.com/yoom2323";
  const copy = (url) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = url;
    $textarea.select();
    document.execCommand("copy");
    document.body.removeChild($textarea);

    alert("복사되었습니다!");
  };

  return (
    <div className="aboutMeCon">
      <div class="title">
        <h1>About Me</h1>
      </div>
      <div className="textBox">
        <p>
          <span className="uLine">
            <span>안녕하세요!</span>
          </span>
          <img src={smile} alt="smile" />
          <br />
          <br />
          매일매일 발전하는 신입 프론트엔드 개발자&퍼블리셔, <b>설유미</b>
          입니다.
          <br />
          <br />
          <b>직관성 · 유연성 · 심미성</b> 세가지를 최우선으로 고려한 UI구현에
          중점을 두고 있습니다.
          <br />
          <br />
          항상 <b>클린코드</b>를 만들기 위해 끊임없이 고민합니다.
          <br />
          <br />
          현재 <b>JS</b>와 <b>React</b>를 꾸준히 공부중이며, Vue와 JQuery,
          Typescript를 추가로 공부할 예정입니다.
          <br />
          <br />
          <b>소통</b>에 힘쓰고, 현실에 안주하지 않는 개발자가 되겠습니다.
        </p>
        <div className="link">
          <div className="email">
            <img src={""} alt="pp" />
            <span className="uLine">
              <span>E-MAIL</span>
            </span>
            <p
              onClick={() => {
                copy(url);
              }}
            >
              omgvic@naver.com
            </p>
          </div>
          <div className="github">
            <img src={""} alt="pp" />
            <span className="uLine">
              <span>GITHUB</span>
            </span>
            <p
              onClick={() => {
                window.open(git);
              }}
            >
              https://github.com/yoom2323
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCon;
