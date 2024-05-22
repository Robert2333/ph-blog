import { Col, Row } from "antd";
import "./menu.css";
import { useState, useEffect } from "react";
function Menu(props) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowSize.width <= 993)
    return (
      <Row gutter={[24, 24]}>
        <Col
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>PORTRAIT</span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20" }}
          sm={{ flex: "20" }}
          md={{ flex: "20" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>CITYSCAPE</span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>PLAN</span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span
            className="menu-item"
            onClick={() => {
              props.showAbout();
            }}
          >
            ABOUT
          </span>
        </Col>
      </Row>
    );
  else
    return (
      <Row gutter={[48, 24]}>
        <Col
          className="menu icon-menu"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>
            <img className="icon" src="/icon.png" />
          </span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>PORTRAIT</span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20" }}
          sm={{ flex: "20" }}
          md={{ flex: "20" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>CITYSCAPE</span>
        </Col>
        <Col
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span>PLAN</span>
        </Col>
        <Col
          onClick={() => {
            props.showAbout();
          }}
          className="menu-item"
          xs={{ flex: "20%" }}
          sm={{ flex: "20%" }}
          md={{ flex: "20%" }}
          lg={{ flex: "100%" }}
          xl={{ flex: "100%" }}
          xxl={{ flex: "100%" }}
        >
          <span className="menu-item">ABOUT</span>
        </Col>
      </Row>
    );
}

export default Menu;
