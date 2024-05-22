import { Line } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const WeightLine = () => {
  const data = [
    {year:"4/14",value:"83.4"},
    {year:"4/15",value:"82.75"},
    {year:"4/16",value:"83.58"},
    {year:"4/17",value:"82.86"},
    {year:"4/18",value:"82.34"},
    {year:"4/19",value:"82.4"},
    {year:"4/20",value:"81.85"},
    {year:"4/21",value:"81.89"},
    {year:"4/22",value:"81.4"},
    {year:"4/26",value:"81.4"},
    {year:"4/27",value:"80.83"},
    {year:"4/28",value:"80.24"},
    {year:"4/29",value:"79.93"},
    {year:"4/30",value:"80.12"},
    {year:"5/1",value:"79.49"},
    {year:"5/2",value:"79.47"},
    {year:"5/3",value:"79.85"},
    {year:"5/4",value:"79.95"},
    {year:"5/5",value:"79.77"},
    {year:"5/6",value:"79.76"},
    {year:"5/7",value:"78.32"},
    {year:"5/8",value:"78.37"},
    {year:"5/9",value:"78.13"},
    {year:"5/10",value:"78.07"},
    {year:"5/11",value:"78.22"},
    {year:"5/12",value:"77.25"},
    {year:"5/13",value:"77.55"},
    {year:"5/14",value:"77.32"},
    {year:"5/15",value:"77.09"},
    {year:"5/16",value:"76.9"},
    {year:"5/17",value:"76.4"},
    {year:"5/18",value:"75.45"},
    {year:"5/19",value:"75.42"},
    {year:"5/20",value:"75.39"},
    {year:"5/21",value:"75.39"},
    {year:"5/22",value:"75.78"},
  ];
  const config = {
    theme: "classicDark",
    data,
    xField: 'year',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};

export default WeightLine;