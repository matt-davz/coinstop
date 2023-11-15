import React, { useState } from 'react'
import CryptoChart from '../../components/CryptoChart'
import Card from 'antd/es/card/Card'
import DisplayPorfolios from '../../components/DisplayPorfolios'
import { prettyDigits } from 'prettydigits'

const obj = [{
    name: "Test",
    balance: 100,
    change: 10
},
{
    name: "Test2",
    balance: 200,
    change: prettyDigits(-0.0034)
}
]

const Portfolio = () => {
  const [clicked,setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
    <h2>Portfolios</h2>
    <h3>Highlighted Portfolio</h3>
    <CryptoChart />
    <h3>Other Portfolios</h3>
    <Card>
        {obj.map((item) => (
            <DisplayPorfolios name={item.name} balance={item.balance} change={item.change}/>
        ))}
    </Card>
    <button className='add-portfolio' onClick={handleClick}/>
    </>
  )
}

export default Portfolio