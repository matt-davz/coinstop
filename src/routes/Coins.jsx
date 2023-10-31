import React, { useEffect, useState } from 'react'
import DisplayCoins from '../../components/DisplayCoins'
import { Typography } from 'antd'
import Search from 'antd/es/input/Search'

const {Title} = Typography

const Coins = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [searchTags,setSearchTags] = useState('');
  


  return (
    <>
    <Title level={2}>Coins</Title>
    <Search placeholder='Eg. Bitcoin' onSearch={setSearchTerm}/>
    <DisplayCoins term={searchTerm} tags={searchTags}/>
    </>
    
  )
}

export default Coins