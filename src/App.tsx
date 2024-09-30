import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/navbar/navbar";

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
