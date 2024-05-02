import { Outlet } from "react-router-dom";
import Header from "./Header";
import Context from "../context/Context";

const RootLayout = () => {
  return (
    <Context>
      <Header />
      <main>
        <Outlet />
      </main>
    </Context>
  );
};

export default RootLayout;
