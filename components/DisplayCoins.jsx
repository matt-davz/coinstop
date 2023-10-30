import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Avatar, Card, Col, Row} from 'antd'
import { prettyDigits } from 'prettydigits'
import { Link } from 'react-router-dom'
import millify from 'millify'

const DisplayCoins = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data , isFetching} = useGetCryptosQuery(count)
  const coins = data ?. data ?. coins

  if (isFetching) { // loading state
    const componentsToRender = Array(count).fill(null);
    
    return (
      <Row gutter={[32,32]}>
        {componentsToRender.map((e,i) => (
          <Col key={i} span={6}>
            <Card loading={true}>
            </Card>
          </Col>
        ))}

      </Row>
    )
  }

  
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
                <p>Price USD: {prettyDigits(coin.price, {precision: 1})}</p>
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