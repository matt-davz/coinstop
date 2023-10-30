import { Col, Row, Typography } from 'antd';
import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
     
const format = {
  hour: '2-digit',
  minute: '2-digit',
}

const CryptoChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleTimeString('en-US',format)) //formats time;
    }

    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#fda312',
          borderColor: '#14223e',
        },
      ],
    };
  
    const options = {
      
    };
  
    return (
      <>
        <Line data={data} options={options} />
      </>
    );
  };

export default CryptoChart