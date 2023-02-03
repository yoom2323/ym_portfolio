import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ComponentBody from "./components/ComponentBody";

import ComponentFooter from "./components/ComponentFooter";
import ComponentHeader from "./components/ComponentHeader";
import Maincon from "./components/Maincon";
import Main from "./pages/Main";
import "./style/main.scss";
import aboutMe from "./pages/AboutMe";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import skills from "./pages/Skills";
import Pf1 from "./pages/Pf1";
import Pf2 from "./pages/Pf2";
import Pf3 from "./pages/Pf3";
import Pf4 from "./pages/Pf4";

function App() {
  return (
    <>
      <BrowserRouter>
        <ComponentHeader />
        <Maincon />
        <Routes>
          <Route path="/" element={<Maincon />}></Route>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/Pf1" element={<Pf1 />}></Route>
          <Route path="/Pf2" element={<Pf2 />}></Route>
          <Route path="/Pf3" element={<Pf3 />}></Route>
          <Route path="/Pf4" element={<Pf4 />}></Route>
        </Routes>
        <ComponentFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
