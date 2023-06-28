import React from "react";
import SideNavbar from "../Navabr/SideNavbar";
import Header from "../Navabr/Header";
import Feed from "../Feed/Feed";
import "./home.css"
function Home() {
  return (
    <div>
      <Header />
      <Feed/>
      <SideNavbar />
    </div>
  );
}

export default Home;
