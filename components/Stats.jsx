import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Col, Row, Statistic } from 'antd'
import { prettyDigits } from 'prettydigits'


const  Stats = () => {
  const {data, isFetching} = useGetCryptosQuery(10)
  const stats = data ?. data ?. stats

  if(isFetching) return 'loading...'
  return (
    <>
    <Row className='row'>
        <Col span={12}><Statistic title="Total Coins" value={stats.totalCoins}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={prettyDigits(stats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={prettyDigits(stats.totalMarketCap, {precision: 2})} className='stats'></Statistic></Col>
        <Col span={12}><Statistic title="Total 24H Volume" value={prettyDigits(stats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={stats.totalMarkets}></Statistic></Col>
    </Row>
    </>
  )
}
  
export default Stats