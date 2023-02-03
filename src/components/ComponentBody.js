import "../style/componentBody.scss";
import AboutMeCon from "./AboutMeCon";
import AboutMeCon2 from "./AboutMeCon2";
import SkillsCon from "./SkillsCon";
import SkillsCon2 from "./SkillsCon2";
import Pf1Con from "./Pf1Con";
import Pf1Con2 from "./Pf1Con2";

function ComponentBody(props) {
  const { AboutMeCon, AboutMeCon2, SkillsCon, SkillsCon2, Pf1Con, Pf1Con2 } =
    props;
  return (
    <div className="bodyContainer">
      <div className="box2"></div>
      <div className="box3"></div>
      <div className="box4">
        {AboutMeCon} {SkillsCon} {Pf1Con}
      </div>
      <div className="box5">
        {Pf1Con2}
        {SkillsCon2} {AboutMeCon2}
      </div>
      <div className="box6"></div>
      <div className="box7"></div>
    </div>
  );
}

export default ComponentBody;
