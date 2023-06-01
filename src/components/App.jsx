import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { HomeWork1 } from "../pages/HomeWork1/HomeWork1";
import { HomeWork2 } from "../pages/HomeWork2/HomeWork2";
import { NotFound } from "../pages/NotFound/NotFound";
import css from "./App.module.css";
import { Feedback } from "../pages/HomeWork2/components/Feedback/Feedback";
import { Phonebook } from "../pages/HomeWork2/components/Phonebook/Phonebook";
import { HomeWork3 } from "../pages/HomeWork3/HomeWork3";
import { ImgFinder } from "../pages/HomeWork3/components/ImgFinder/ImgFinder";
import { HomeWork4 } from "../pages/HomeWork4/HomeWork4";
import { ImgFinder4 } from "../pages/HomeWork4/components/ImgFinder/ImgFinder";
import { Phonebook4 } from "../pages/HomeWork4/components/Phonebook/Phonebook";
import { Feedback4 } from "../pages/HomeWork4/components/Feedback/Feedback";
import { HomeWork5 } from "../pages/HomeWork5/HomeWork5";
import { HomeWork6 } from "../pages/HomeWork6/HomeWork6";
import { Movies5 } from "../pages/HomeWork5/components/Movies/Movies";
import { Phonebook6 } from "../pages/HomeWork6/components/Phonebook/Phonebook copy";

function App() {
  return (
    <>
      <div className={css.headerBox}>
        <header className={css.header}>
          <nav className={css.nav}>
            <Link to="/">Home</Link>
            <Link to="/home-work1">HW1-Introduction</Link>
            <Link to="/home-work2">HW2-States</Link>
            <Link to="/home-work3">HW3-Lifecycle</Link>
            <Link to="/home-work4">HW4-Hooks</Link>
            <Link to="/home-work5">HW5-RouterDom</Link>
            <Link to="/home-work6">HW6-Redux</Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-work1" element={<HomeWork1 />} />
        <Route path="/home-work2" element={<HomeWork2 />}>
          <Route path="feedback" element={<Feedback />} />
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
        <Route path="/home-work3" element={<HomeWork3 />}>
          <Route path="img-finder" element={<ImgFinder />} />
        </Route>
        <Route path="/home-work4" element={<HomeWork4 />}>
          <Route path="feedback" element={<Feedback4 />} />
          <Route path="phonebook" element={<Phonebook4 />} />
          <Route path="img-finder" element={<ImgFinder4 />} />
        </Route>
        <Route path="/home-work5" element={<HomeWork5 />}>
          <Route path="movies" element={<Movies5 />} />
        </Route>
        <Route path="/home-work6" element={<HomeWork6 />}>
          <Route path="phonebook" element={<Phonebook6 />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
