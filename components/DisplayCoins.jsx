import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Avatar, Card, Col, Row} from 'antd'
import { prettyDigits } from 'prettydigits'
import { Link } from 'react-router-dom'
import millify from 'millify'
import Loader from './Loader'

const DisplayCoins = ({simplified, term, tags}) => {
  
  console.log(`term: ${term} tags: ${tags}`)
  const count = simplified ? 10 : 100;
  const {data , isFetching} = useGetCryptosQuery({count: count, term: term, tags:tags})
  if (isFetching) return (<Loader count={count}/>)

  
  const coins = data ?. data ?. coins
  
  console.log(coins)

  
  return ( 
    <Row gutter={[32,32]} >
        {coins.map((coin) => (
          <Col key={coin.uuid} span={6} >
            <Link to={`/coin/${coin.uuid}`}>
              <Card 
              title={coin.name}
              extra={coin.rank}
              >
                <Avatar src={coin.iconUrl} />
                <p>Price USD: </p>
                <p>{prettyDigits(coin.price, {precision: 1})}</p>
                <p>Market Cap: {prettyDigits(coin.marketCap)}</p>
                <p style={coin.change > 0 ? {color: "green"} : {color: "red"}  }>Change in %: {prettyDigits(coin.change, {precision: 1})}</p>
                <p>24Hr Vol: {prettyDigits(coin["24hVolume"],{precision: 1})}</p>
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  )
}

export default DisplayCoins