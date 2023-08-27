import React from "react"
import Login from './hack1/Login'
import MainPage from './hack1/LandingPage'
import './App.css'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Display from './hack1/displayinfo'
import Register from './hack1/Reg1'
import StoreMain from "./hack1/StoreMain"

function App(){
  return (
    <div>
      <Router>

      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/user/main' element={<MainPage></MainPage>}></Route> 
          <Route path="/store/admin" element={<Display></Display>}></Route>
          <Route path="/Reg" element={<Register/>}></Route>
          <Route path='/store/main' element={<StoreMain></StoreMain>}></Route>
      </Routes> 
      </Router> 
    </div>
  )
}
export default App