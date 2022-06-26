import "./App.css";
import { useEffect } from "react";
import { axiosClient } from "./Axios/axios";
import Login from "./Modules/Users/Components/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    let cancel = new AbortController();
    axiosClient
      .get("/products", {
        signal: cancel.signal,
      })
      .then((res) => {
        console.log("i am rendered", res.data);
      })
      .catch((e) => console.log(e));
    return () => {
      cancel.abort();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
