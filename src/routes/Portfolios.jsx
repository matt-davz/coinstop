import React, { useState } from 'react'
import CryptoChart from '../../components/CryptoChart'
import Card from 'antd/es/card/Card'
import DisplayPorfolios from '../../components/DisplayPorfolios'
import { prettyDigits } from 'prettydigits'
import { Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { createPortfolio } from '../../slices/portfolioSlice'

const obj = [{
    name: "Test",
    balance: 100,
    change: 10
},
{
    name: "Test2",
    balance: 200,
    change: prettyDigits(-0.0034)
},
{
    name: "Test2",
    balance: 0,
    change: 0
}
]

const Portfolio = () => {
  const portfolio = useSelector((state) => state.portfolio);  
  const [clicked,setClicked] = useState(false)
  const [name,setName] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    setClicked(!clicked)
  }

  console.log(portfolio)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPortfolio({ name: name, balance: 0, change: 0 }));
    setClicked(false);
    setPortfolioName('');
  };

  return (
    <>
    <h2>Portfolios</h2>
    <h3>Highlighted Portfolio</h3>
    <CryptoChart />
    <h3>Other Portfolios</h3>
    <Card>
        {portfolio.map((item) => (
            <DisplayPorfolios name={item.name} balance={item.balance} change={item.change}/>
        ))}
    </Card>
    <button className='add-portfolio' onClick={handleClick}/>
    <Modal title="Name Your Portfolio" open={clicked} onOk={handleSubmit} onCancel={handleClick}>
        <form action="" className='portoflio-form'>
            <input type="text" onChange={handleChange} value={name}/>
        </form>
    </Modal>
    </>
  )
}

export default Portfolio