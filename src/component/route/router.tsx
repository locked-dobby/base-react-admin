import { createBrowserRouter, RouteObject } from "react-router-dom";

import AppContent from "../app-content";
import { commonRoutes } from "./common-routes";

let routes: Array<RouteObject> = [
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

routes = routes.concat(commonRoutes);

export const router = createBrowserRouter([
  {
    Component: AppContent,
    children: routes.map((route) => {
      if (route.errorElement) {
        return route;
      } else {
        // 모든 라우트 element 에 error detect element 를 바인딩 합니다.
        return {
          ...route,
          errorElement: <div>Route Error</div>,
        };
      }
    }),
  },
]);
