import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MainPage from "./views/default/mainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mainpage" element={<MainPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
