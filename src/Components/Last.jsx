import "./Last.css";
import DiscussionPage from "./DiscussionPage.jpg";
import { Link } from "react-router-dom";

export function Last() {
  return (
    <div className="last">
      <img src={DiscussionPage} alt="last" />
      <Link to="/register">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
