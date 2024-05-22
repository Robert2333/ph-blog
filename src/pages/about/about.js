import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import WeightLine from './component/weight'
import LiquidWeight from './component/liquidWeight'
const About = (props) => {
  return (
    <>
      <Drawer title="About Me" onClose={props.aboutOnClose} placement="left" size="large" open={props.aboutOpen}>
        <WeightLine/>
        <LiquidWeight/>
      </Drawer>
    </>
  );
};
export default About;