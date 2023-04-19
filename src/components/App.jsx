import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { HomeWork1 } from "../pages/HomeWork1/HomeWork1";
import { HomeWork2 } from "../pages/HomeWork2/HomeWork2";
import { NotFound } from "../pages/NotFound/NotFound";
import css from "./App.module.css";
import { Feedback } from "../pages/HomeWork2/components/Feedback/Feedback";

function App() {
  return (
    <>
      <div className={css.headerBox}>
        <header className={css.header}>
          <nav className={css.nav}>
            <Link to="/">Home</Link>
            <Link to="/home-work1">HW-1</Link>
            <Link to="/home-work2">HW-2</Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-work1" element={<HomeWork1 />} />
        <Route path="/home-work2" element={<HomeWork2 />}>
          <Route path="feedback" element={<Feedback />} />
          <Route path="phonebook" element={<HomeWork1 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
