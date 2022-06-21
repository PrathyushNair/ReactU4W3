import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { RequiredAuth } from './hoc/Requireauth';
// import {Link} from "react-router-dom"
// import {useNavigate} from "react-router-dom"
// import {useParams} from "react-router-dom"
// import {Outlet} from "react-router-dom"
import { Feeds } from './Pages/Feeds';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import {Navbar} from "./Components/Navbar"
import { Posts } from './Pages/Posts';
import { Careers } from './Pages/Careers';
function App() {
  return (
    <div className="App">
      <div>Routing lec2</div>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/feeds" element ={
          <RequiredAuth>
               <Feeds/>
          </RequiredAuth>
       
        }></Route>
        <Route path="/posts" element ={
          <RequiredAuth>
               <Posts/>
          </RequiredAuth>
       
        }></Route>
        <Route path="/careers" element ={
          <RequiredAuth>
               <Careers/>
          </RequiredAuth>
       
        }></Route>
        {/* <Route path="" element></Route> */}
      </Routes>
    </div>
  );
}

export default App;
