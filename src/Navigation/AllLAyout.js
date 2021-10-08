import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function AllNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/NewMeetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/Favorite">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AllNavigation;
