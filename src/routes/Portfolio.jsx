import React from 'react'
import CryptoChart from '../../components/CryptoChart'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Typography } from 'antd';

const { Title } = Typography;

const Portfolio = () => {
  const { portfolioName } = useParams();
  const info = useSelector((state) => state.portfolio.find((item) => item.name === portfolioName));


  return (
    <>
    <div className="coin-header">
        <div className="coin-title">
          <h1>{info.name}</h1>
        </div>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center',gap: '2rem'}}>
          <h2> {`$ ${info.balance}`}</h2>
          <h2> {`${info.change}%`}</h2>
        </div>
      </div>
    <CryptoChart />
    <h3>Coins</h3>
    </>
  )
}

export default Portfolio