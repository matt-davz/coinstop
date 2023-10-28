import { Avatar, Typography } from 'antd'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../assets/logo.svg"

const {Title} = Typography

const Root = () => {
  return (
    <>
    <nav className='nav-bar'>
        <div className="nav-header">
          <NavLink className='title' to={'/'}><h1 className='title'>Coin Stop</h1></NavLink>
          <img className="logo" src={logo} />
        </div>
        <hr></hr>
        <div className="nav-items-container">
          <NavLink to={'/'}><Title >Home</Title></NavLink>
          <NavLink to={'/Coins'}><Title >Coins</Title></NavLink>
          <NavLink to={'/News'}><Title >News</Title></NavLink>
          <NavLink to={'/Exchanges'}><Title >Exchanges</Title></NavLink>
          <NavLink to={'/Portfolio'}><Title >Portfolio</Title></NavLink>
        </div>
    </nav>
    <section className='outlet-display'>
      <Outlet />
    </section>
    </>
  )
}

export default Root