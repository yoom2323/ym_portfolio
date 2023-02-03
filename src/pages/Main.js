import ComponentHeader from "../components/ComponentHeader";
import "../style/main.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Maincon from "../components/Maincon.js";

function Main() {
  return (
    <div className="mainWrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maincon />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="stickyBox"></div>
    </div>
  );
}

export default Main;
