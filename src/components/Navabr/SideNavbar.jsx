import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBadge,
} from "cdbreact";

import { NavLink } from "react-router-dom";

function SideNavbar() {
  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Instagram
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/tables" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Explore</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="video">Reels</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="primary" size="small" borderType="pill">
                      0
                    </CDBBadge>
                  }
                  icon="user"
                >
                  Message
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem
                  suffix={
                    <CDBBadge color="danger" size="small" borderType="pill">
                      4
                    </CDBBadge>
                  }
                  icon="user"
                >
                  Notification
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="plus">Create</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter >
          <CDBSidebarMenuItem icon="plus">More</CDBSidebarMenuItem>

          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
      );
    </div>
  );
}

export default SideNavbar;
