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
          <NavLink to={'/'}><h3 className='tabs'>Home</h3></NavLink>
          <NavLink to={'/Coins'}><h3 >Coins</h3></NavLink>
          <NavLink to={'/News'}><h3 >News</h3></NavLink>
          <NavLink to={'/Exchanges'}><h3 >Exchanges</h3></NavLink>
          <NavLink to={'/Portfolio'}><h3 >Portfolio</h3></NavLink>
        </div>
    </nav>
    <section className='outlet-display'>
      <Outlet />
    </section>
    </>
  )
}

export default Root