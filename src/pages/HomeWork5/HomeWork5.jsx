import React from "react";
import { Link, Outlet } from "react-router-dom";

export function HomeWork5() {
  return (
    <>
      <Link to="/home-work5/movies">Movies</Link>
      <Outlet />
    </>
  );
}
