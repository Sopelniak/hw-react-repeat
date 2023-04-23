import { Link, Outlet } from "react-router-dom";

export const HomeWork2 = () => {
  return (
    <>
      <Link to="/home-work2/feedback">Feedback</Link>
      <Link to="/home-work2/phonebook">Phonebook</Link>
      <Outlet />
    </>
  );
};
