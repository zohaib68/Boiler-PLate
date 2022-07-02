import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#dee5ebf5" }}>
      <Navbar />
      <div style={{ height: "86vh" }}>{children}</div>
      <Footer />
    </div>
  );
}
