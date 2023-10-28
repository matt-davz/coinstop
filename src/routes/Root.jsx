import { Avatar, Typography } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../assets/logo.svg"

const {Title} = Typography

const Root = () => {
  return (
    <>
    <nav className='nav-bar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <Title>Coin Stop</Title>
    </nav>
    <Outlet />
    </>
  )
}

export default Root