
import {Col, Row, Statistic, Typography} from 'antd'
import React from 'react'
import { useGetCryptosQuery} from '../../services/cryptoApi'
import { prettyDigits } from 'prettydigits'
import DisplayCoins from '../../components/DisplayCoins'
const {Title} = Typography

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery()
  const coins = data ?. data ?. coins
  console.log(coins)
  const top10Coins = coins ?. slice(0,10)
  const stats = data ?.data ?.stats
  console.log(useGetCryptosQuery)
  if(isFetching){
    return 'Loading...'
  }
  return (
    <>
      <h1>Home</h1>

      <Title level={2}>Stats</Title>
      <Row className='row'>
        <Col span={12}><Statistic title="Total Coins" value={prettyDigits(stats.totalCoins)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={prettyDigits(stats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={prettyDigits(stats.totalMarketCap, {precision: 2})} className='stats'></Statistic></Col>
        <Col span={12}><Statistic title="Total 24H Volume" value={prettyDigits(stats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={prettyDigits(stats.totalMarkets)}></Statistic></Col>
      </Row>
      <Title level={2}>Top 10 Coins</Title>
      <DisplayCoins coins={top10Coins}/>
      <Title level={2}>Top 10 Exchanges</Title>
      <Title level={2}>Crypto News</Title>
    </>
  )
}

export default Home