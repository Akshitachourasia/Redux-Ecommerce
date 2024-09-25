import {  Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        {/* <h1>Hello , this is my app</h1> */}

      </nav>
      <Outlet />
    </>
  );
}

export default App;
