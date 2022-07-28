import "./TopHeader.css";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <Link to="/">
      <h1 className="top-header">CINEFLEX</h1>;
    </Link>
  );
}
