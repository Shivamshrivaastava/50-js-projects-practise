import { Outlet } from "react-router-dom";
import NavbarPage from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarPage />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
