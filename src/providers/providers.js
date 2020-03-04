import React from "react";
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale/fa_IR";
import { AppProvider } from "./appProvider";

export function Providers({ children }) {
  faIR.DatePicker.lang.locale = "fa";

  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <AppProvider>
        {children}
      </AppProvider>
    </ConfigProvider>
  );
}