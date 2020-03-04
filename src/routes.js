import NotFound from "./pages/notFound";
import WhatIsJS from "./pages/whatIsJS";

const routes = [
  {
    exact: true,
    path: "/get-started/chapter-1",
    parentPath: "/get-started",
    title: "فصل What Is JavaScript",
    component: WhatIsJS
  },
  {
    path: "*",
    title: false,
    hideSidebar: true,
    component: NotFound
  }
];

export default routes;
