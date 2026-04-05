import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
