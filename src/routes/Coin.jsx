import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCoinStatsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import CryptoChart from "../../components/CryptoChart";
import { prettyDigits } from "prettydigits";
import { Avatar, Col, Divider, Row, Space, Statistic, Typography } from "antd";
const { Title } = Typography;

const Coin = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCoinStatsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod: "7d",
  });
  const coin = data?.data?.coin;
  console.log(coin);
  if (isFetching) return "loading...";

  return (
    <>
      <div className="coin-header">
        <div className="coin-title">
          <Avatar src={coin.iconUrl} size={"large"} />
          <Title level={1}>{coin.name}</Title>
        </div>
        <Title level={2}>{`$ ${prettyDigits(coin.price, {
          precision: 2,
        })}`}</Title>
      </div>

      <CryptoChart
        coinHistory={coinHistory}
        currentPrice={prettyDigits(coin.price, { precision: 1 })}
        coinName={coin.name}
      />

      <Row className="coin-stats">
        <Col span={8}>
          <Statistic title="Change" value={coin.change} />
        </Col>
        <Col span={8}>
          <Statistic title="Market Cap" value={prettyDigits(coin.marketCap)} />
        </Col>
        <Col span={8}>
          <Statistic
            title="24H Volume"
            value={prettyDigits(coin["24hVolume"])}
          />
        </Col>
      </Row>

      <div className="coin-info-container">
        <Divider orientation="left" plain>
          Description
        </Divider>
        <Row justify={"center"}>
          <Col>
            <Typography.Text>{coin.description}</Typography.Text>
          </Col>
        </Row>
        <Divider orientation="left" plain>
          More Info
        </Divider>
        
      </div>
    </>
  );
};

export default Coin;
