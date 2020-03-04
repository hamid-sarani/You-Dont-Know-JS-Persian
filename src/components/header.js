import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useApp, useAppDispatcher } from "hooks/useApp";

function AppHeader() {
  const history = useHistory();
  const { activeRoute } = useApp();
  const { toggleSidebar } = useAppDispatcher();

  return (
    <Layout.Header hidden={activeRoute.hideSidebar} className="app-header">
      <Row type="flex" align="middle" gutter="20">
        <Col>
          <div className="logo">
            <BarsOutlined onClick={toggleSidebar} className="trigger btn-small-gap" />
            <h1>شما JS را نمیشناسید!</h1>
          </div>
        </Col>
        <Col>
          <Menu
            selectedKeys={[activeRoute.parentPath]}
            mode="horizontal"
            theme="dark"
            onClick={({ key }) => history.push(`${key}/chapter-1`)}
          >
            <Menu.Item key="/get-started">
              Get Started
            </Menu.Item>
            <Menu.Item key="/scope-closures">
              Scope & Closures
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default AppHeader;
