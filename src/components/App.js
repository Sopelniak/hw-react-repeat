import { Route, Routes } from "react-router-dom";
// import { Layout } from "./Layout/Layout";
import { HomeWork1 } from "../pages/HomeWork1/HomeWork1";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="home-work1" element={<HomeWork1 />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
