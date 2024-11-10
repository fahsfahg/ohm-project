import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import {  BrowserRouter, Route, Routes, Link } from "react-router-dom"
import UserList from "./components/UserList";
import Vm from "./components/Vm";
import Docker from "./components/Docker";


function App() {
  return (
    <BrowserRouter>
      <div className="container-app">
        <Nav />
          <Routes>
            <Route path="/user-list" element={<UserList />} />
            <Route path="/manage-vm" element={<Vm />} />
            <Route path="/docker" element={<Docker />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
