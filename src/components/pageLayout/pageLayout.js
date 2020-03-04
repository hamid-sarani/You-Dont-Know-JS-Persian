import React from "react";
import { PageHeader, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./pageLayout.less";

function PageLayout(props) {
  const {
    tabs,
    onChangeTab,
    Icon,
    children,
    ...Props
  } = props;

  return (
    <div className="page-layout">
      <PageHeader
        className={`white-section ${tabs ? "no-padding-bottom" : ""}`}
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        onBack={() => null}
        backIcon={Icon || <ArrowRightOutlined />}
        footer={
          tabs &&
          <Tabs onChange={onChangeTab}>
            {tabs.map(tab => (
              <Tabs.TabPane key={tab.value} tab={tab.label} />
            ))}
          </Tabs>
        }
        {...Props}
      />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

PageLayout.propTypes = {
  ...PageHeader.propTypes
};

export default PageLayout;
