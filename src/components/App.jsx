import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MainPage from "./views/default/mainPage/MainPage";
import DsTest2 from "./views/desktop/test2/DsTest2";
import DsTest3 from "./views/desktop/test3/DsTest3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/test2" element={<DsTest2 />}></Route>
          <Route path="/test3" element={<DsTest3 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
