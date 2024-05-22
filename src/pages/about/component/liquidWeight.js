import { Liquid } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const LiquidWeight = () => {
  const config = {
    percent: 130/143,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    },
  };
  return <Liquid {...config} />;
};

export default LiquidWeight;