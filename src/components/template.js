import { Layout } from "antd";
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { useAppDispatcher } from "hooks/useApp";
import AppSidebar from "./sidebar";
import AppHeader from "./header";

const { Content } = Layout;

function Template({ routes, location, children }) {
  const { setActiveRoute } = useAppDispatcher();

  useEffect(() => {
    setActiveRoute(location.pathname, routes);
  }, [routes, location, setActiveRoute]);

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSidebar routes={routes} />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(Template);
