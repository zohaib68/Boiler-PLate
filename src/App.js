import "./App.css";
import Login from "./Modules/Users/Components/Login";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Navigate to="/home" />} />
        <Route
          exact
          path={"/home"}
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route exact path={"/login"} element={<Login />} />
        <Route
          exact
          path={"/about"}
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
