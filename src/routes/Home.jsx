
import {Col, Row, Statistic, Typography} from 'antd'
import React from 'react'
const {Title} = Typography
const Home = () => {
  return (
    <>
      <Title level={2}>Stats</Title>
      <Row className='row'>
        <Col span={12}><Statistic title="Total Coins" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5" className='stats'></Statistic></Col>
        <Col span={12}><Statistic title="Total 24H Volume" value="5"></Statistic></Col>
        <Col span={12}><Statistic title="Total Merkets" value="5"></Statistic></Col>
      </Row>
    </>
  )
}

export default Home