
import {Col, Row, Statistic, Typography} from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { prettyDigits } from 'prettydigits'
const {Title} = Typography

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery()
  const stats = data ?.data ?.stats
  
  return (
    <>
      <Title level={2}>Stats</Title>
      <Row className='row'>
        <Col span={12}><Statistic title="Total Coins" value={prettyDigits(stats.totalCoins)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={prettyDigits(stats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={prettyDigits(stats.totalMarketCap, {precision: 2})} className='stats'></Statistic></Col>
        <Col span={12}><Statistic title="Total 24H Volume" value={prettyDigits(stats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={prettyDigits(stats.totalMarkets)}></Statistic></Col>
      </Row>
    </>
  )
}

export default Home