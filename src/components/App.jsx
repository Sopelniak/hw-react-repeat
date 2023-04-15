import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { HomeWork1 } from "../pages/HomeWork1/HomeWork1";
import { NotFound } from "../pages/NotFound/NotFound";
import css from "./App.module.css";

function App() {
  return (
    <>
      <div className={css.headerBox}>
        <header className={css.header}>
          <nav className={css.nav}>
            <Link to="/home-work1">Home Work 1</Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-work1" element={<HomeWork1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
