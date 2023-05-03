import React from "react";
import { Link, Outlet } from "react-router-dom";

export function HomeWork3() {
  return (
    <>
      <Link to="/home-work3/img-finder">ImgFinder</Link>
      <Outlet />
    </>
  );
}
