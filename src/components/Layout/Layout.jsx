import { Link } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <div className="Layout">
        <header className="Layout-header">
          <ul>
            <li className="Layout-link">
              <Link to="/home-work1">Home Work 1</Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};
