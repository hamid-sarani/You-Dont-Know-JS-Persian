import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "hooks/useApp";

const { Sider } = Layout;

function AppSidebar({ routes }) {
  const { pathname } = useLocation();
  const { sidebarCollapse, activeRoute } = useApp();

  function MenuItem(route) {
    const className = route.title.toLowerCase().replace(/\s/, "-");
    const { Icon } = route;

    return (
      <Menu.Item className={className} key={route.path}>
        <Link to={route.path}>
          {Icon && <Icon />}
          <span>{route.title}</span>
        </Link>
      </Menu.Item>
    );
  }

  function SubMenu(route) {
    const className = route.title.toLowerCase().replace(/\s/, "-");
    const { Icon } = route;

    return (
      <Menu.SubMenu
        key={route.path}
        className={className}
        title={
          <div>
            {Icon && <Icon />}
            <span className="nav-text">
              {route.title}
            </span>
          </div>
        }
      >
        {
          route.child.map((childRoute) => {
            if(childRoute.title === false || !pathname.includes(activeRoute.parentPath)) return "";

            if(childRoute.child && !childRoute.hideChild) {
              return SubMenu(childRoute);
            }

            return MenuItem(childRoute);
          })
        }
      </Menu.SubMenu>
    );
  }

  return (
    <Sider
      className="app-sidebar"
      breakpoint="lg"
      theme="light"
      collapsible
      width={250}
      collapsedWidth={0}
      trigger={false}
      collapsed={sidebarCollapse}
      hidden={activeRoute.hideSidebar}
      zeroWidthTriggerStyle={{
        display: "none"
      }}
    >
      <Menu
        theme="light"
        defaultOpenKeys={[activeRoute.parentPath]}
        selectedKeys={[activeRoute.path, activeRoute.parentPath]}
        mode="inline"
      >
        {routes.map(routeOptions => {
          if(routeOptions.title === false || !pathname.includes(routeOptions.parentPath)) return "";

          if(routeOptions.child && !routeOptions.hideChild) {
            return SubMenu(routeOptions);
          }

          return MenuItem(routeOptions);
        })}
      </Menu>
    </Sider>
  );
}

export default AppSidebar;
