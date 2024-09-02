import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { initializeApp, initializeGlobalApp } from "../app-initializer";
import { router } from "./route/router";

initializeGlobalApp();
const App = () => {
  useEffect(() => {
    initializeApp();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
