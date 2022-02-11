import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = []
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  
  const newPriceRound = coinPrice.map(data => (Math.round(data)))

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: newPriceRound,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      }
    ]
  }
  
  // const data = {
  //   labels: [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //   ],
  //   datasets: [{
  //     label: 'My First dataset',
  //     backgroundColor: 'rgb(255, 99, 132)',
  //     borderColor: 'rgb(255, 99, 132)',
  //     data: [0, 10, 5, 2, 20, 30, 45],
  //   }]
  // };
  const options = {
    scales: {
      yAxes:[
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
  return (
    <>
    <Row className="chart-header">
      <Title className="chart-title" level={2}>
      {coinName} Price Chart
      </Title>
      <Col className="price-container">
        <Title level={5} className="price-change">
          {coinHistory?.data?.change} %
        </Title>
        <Title level={5} className="current-price">
          Current {coinName} Price: $ {currentPrice} %
        </Title>
      </Col>
    </Row>
    <Line data={data} options={options}/>
    </>
  );
};

export default LineChart;