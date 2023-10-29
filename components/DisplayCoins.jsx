import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Card, Col, Row, Typography } from 'antd'
import { prettyDigits } from 'prettydigits'

const DisplayCoins = ({coins}) => {
  console.log(coins)
  return (
    <Row gutter={10} >
        {coins.map((coin) => (
          <Col span={6} >
            <Card key={coin.uuid}
            title={coin.name}
            >
            <img style={{width: "20px"}} src={coin.iconUrl} alt="" />
            <p>Price: {prettyDigits(coin.price)}</p>
            <p>Market Cap: {prettyDigits(coin.marketCap)}</p>
            <p style={coin.change > 0 ? {color: "green"} : {color: "red"}  }>Change in %: {prettyDigits(coin.change, {precision: 1})}</p>
            <p>24Hr Vol: {prettyDigits(coin["24hVolume"],{precision: 1})}</p>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default DisplayCoins