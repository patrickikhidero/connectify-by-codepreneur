import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { NavLink } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Connectify</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Home</span>
                </NavLink>
      <NavLink to="/profile" style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Profile</span>
      </NavLink>
      <NavLink to="/register" style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Register</span>
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Login</span>
      </NavLink>
      
      

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
