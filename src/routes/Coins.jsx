import { Select, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';
import { DisplayCoins } from '../../components';
const { Title } = Typography;
const { Option } = Select;

const Coins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTags, setSearchTags] = useState('');
  const [sortBy, setSortBy] = useState('value');

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <>
      <Title level={2}>Coins</Title>
      <Search placeholder='Eg. Bitcoin' onSearch={setSearchTerm}/>
      <Select defaultValue={sortBy} style={{ width: 120 }} onChange={handleSortChange}>
        <Option value="value">Value</Option>
        <Option value="amount">Amount</Option>
        <Option value="volume">Volume</Option>
      </Select>
      <DisplayCoins term={searchTerm} tags={searchTags} sortBy={sortBy}/>
    </>
  )
}

export default Coins;