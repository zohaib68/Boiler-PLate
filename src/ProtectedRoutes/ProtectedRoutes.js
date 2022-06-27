import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Layout from "../Layout/Layout";

export default function ProtectedRoutes({ children }) {
  const isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  return isLoggedIn ? <Layout>{children}</Layout> : <Navigate to="/login" />;
}
