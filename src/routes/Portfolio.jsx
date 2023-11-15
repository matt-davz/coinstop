import React from 'react'
import CryptoChart from '../../components/CryptoChart'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Portfolio = () => {
  const { portfolioId } = useParams();
  const info = useSelector((state) => state.portfolio.find((item) => item.id === portfolioId));

  
  return (
    <>
    <h2>{info.name}</h2>
    <CryptoChart />
    <h3>Other Portfolios</h3>
    </>
  )
}

export default Portfolio