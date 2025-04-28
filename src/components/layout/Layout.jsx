import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './Layout.css';

function Layout() {

  return (
      <div className="layout">
        <Header />
        <main className="main-content">
          <div className="content-container">
          <Outlet />
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default Layout;