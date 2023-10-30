import React from 'react'
import DisplayCoins from '../../components/DisplayCoins'
import { Typography } from 'antd'

const {Title} = Typography

const Coins = () => {
  return (
    <>
    <Title level={2}>Coins</Title>
    <DisplayCoins/>
    </>
    
  )
}

export default Coins