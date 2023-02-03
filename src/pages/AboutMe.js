import ComponentBody from "../components/ComponentBody";
import styled from "styled-components";
import AboutMeCon from "../components/AboutMeCon";
import AboutMeCon2 from "../components/AboutMeCon2";

const box4 = styled.div`
  background-color: gray;
`;

function AboutMe() {
  return (
    <>
      <ComponentBody AboutMeCon={AboutMeCon()} AboutMeCon2={AboutMeCon2()} />
    </>
  );
}

export default AboutMe;
