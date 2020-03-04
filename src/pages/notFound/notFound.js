import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="/get-started/chapter-1">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    </div>
  )
}

export default NotFound;