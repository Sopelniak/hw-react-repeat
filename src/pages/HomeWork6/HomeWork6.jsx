import React from "react";
import { Link, Outlet } from "react-router-dom";

export function HomeWork6() {
  return (
    <>
      <Link to="/home-work6/phonebook">Phonebook</Link>
      <Outlet />
    </>
  );
}
