import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutThunk } from "../Modules/Users/Redux/Actions/Users.actions";
import { useNavigate } from "react-router";
import css from "./Navbar.module.css";
export default function Navbar() {
  const isLoggedIn = useSelector((state) => state?.login?.isLoggedIn);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <header
      style={{
        backgroundColor: "black",
        height: "7vh",
      }}
    >
      <div style={{ padding: "1.5% 5% 0% 5%" }}>
        <Link to={"/home"}>
          <button className={css.button}>Home</button>
        </Link>
        <Link to="/about">
          <button className={css.button}>About</button>
        </Link>
        {isLoggedIn && (
          <button
            className={css.button}
            onClick={() => {
              dispatch(logOutThunk(false, Navigate));
              localStorage.clear();
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}
