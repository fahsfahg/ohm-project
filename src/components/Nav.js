import React from "react";
import "./Nav.css";
import { useEffect } from "react";
import { Outlet } from 'react-router-dom';

function Nav() {
  useEffect(() => {
    const handleClick = () => {
      document.querySelector("#sidebar").classList.toggle("expand");
      console.log("tennie lovelove");
    };
    const hamBurger = document.querySelector(".toggle-btn");
    if (hamBurger) {
      hamBurger.addEventListener("click", handleClick);
    }

    return () => {
      if (hamBurger) {
        hamBurger.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <aside id="sidebar">
          <div className="d-flex">
            <button className="toggle-btn" type="button">
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <a href="#">CIS</a>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-user"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Virtual Machine</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="docker" className="sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Docker</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="manage-vm" className="sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Manage Server</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="user-list" className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Manage User</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <a href="login" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>
        <div className="main p-3">
          <div className="text-center">
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
