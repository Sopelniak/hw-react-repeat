import React from "react";
import { Link, Outlet } from "react-router-dom";

export function HomeWork4() {
  return (
    <>
      <Link to="/home-work4/feedback">Feedback</Link>
      <Link to="/home-work4/phonebook">Phonebook</Link>
      <Link to="/home-work4/img-finder">ImgFinder</Link>
      <Outlet />
    </>
  );
}
