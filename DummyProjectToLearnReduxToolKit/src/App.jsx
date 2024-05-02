/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="text-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
