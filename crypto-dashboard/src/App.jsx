import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
