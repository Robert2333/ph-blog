import "./App.css";
import { Col, Row, ConfigProvider, theme } from "antd";
import Menu from "./component/menu";
import { useState } from "react";
import About from "./pages/about/about";

function App() {
  //关于我的state控制抽屉打开和关闭
  const [aboutOpen, setAboutOpen] = useState(false);
  const showAbout = () => {
    setAboutOpen(true);
  };
  const closeAbout = () => {
    setAboutOpen(false);
  };

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          // 1. 单独使用暗色算法
          algorithm: theme.darkAlgorithm,

          // 2. 组合使用暗色算法与紧凑算法
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        <Row gutter={[48, 24]}>
          {/* 这里这个用于菜单 */}
          <Col
            className="menu"
            xs={{ flex: "100%" }}
            sm={{ flex: "100%" }}
            md={{ flex: "100%" }}
            lg={{ flex: "10%" }}
            xl={{ flex: "10%" }}
          >
            <Menu showAbout={showAbout} />
          </Col>
          <Col
            xs={{ flex: "100%" }}
            sm={{ flex: "100%" }}
            md={{ flex: "100%" }}
            lg={{ flex: "85%" }}
            xl={{ flex: "85%" }}
          >
            <Row gutter={[24, 24]}>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/jpg1.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/jpg1.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/jpg1.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/jpg1.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/jpg1.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/test.jpg" />
                </div>
              </Col>
              <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={4}>
                <div className="square-container">
                  <img className="square-image" src="/test2.jpg" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <About aboutOpen={aboutOpen} aboutOnClose={closeAbout} />
      </ConfigProvider>
    </div>
  );
}

export default App;
