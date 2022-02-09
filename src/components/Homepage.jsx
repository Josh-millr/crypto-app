import React from "react";
import {Link} from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Typography, Row, Statistic, Col } from "antd";
import {Cryptocurrencies, News} from "./index";

const Homepage = () => { 

  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // console.log(globalStats)
  if(isFetching){ return "Loading..." }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24HR Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies In The World</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified showSearch={false} />
      <div className="home-heading-container">
      <Title level={2} className="home-title">To Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  );
};

export default Homepage;
