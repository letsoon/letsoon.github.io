import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {NavLink, Outlet} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink style={({isActive})=> isActive ? {color: '#fff'} : {}} to="/">首页</NavLink>
        <NavLink style={({isActive})=> isActive ? {color: '#fff'} : {}} to="/about">关于</NavLink>
        <Outlet />
      </header>
    </div>
  )
}

export default App
