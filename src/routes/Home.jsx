
import {Col, Row, Statistic, Typography} from 'antd'
import React from 'react'
import { useGetCryptosQuery} from '../../services/cryptoApi'
import { prettyDigits } from 'prettydigits'
import DisplayCoins from '../../components/DisplayCoins'
import Stats from '../../components/Stats'
import { Link } from 'react-router-dom'
const {Title} = Typography

const Home = () => {

  return (
    <>
      <h1>Home</h1>
      <div className="home-headings">
        <Title level={2}>Global Stats</Title>
        <Link to={'/coin'}><Title level={3}>See More</Title></Link>
      </div>
      <Stats />
      <div className="home-headings">
        <Title level={2}>Coins</Title>
        <Link to={'/coins'}><Title level={3}>See More</Title></Link>
      </div>
      <DisplayCoins simplified/>
      <div className="home-headings">
        <Title level={2}>Crypto News</Title>
        <Link to={'/news'}><Title level={3}>See More</Title></Link>
      </div>
    </>
  )
}

export default Home