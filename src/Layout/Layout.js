import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div
        style={{ height: "81vh", backgroundColor: "#dee5ebf5", padding: "2%" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
