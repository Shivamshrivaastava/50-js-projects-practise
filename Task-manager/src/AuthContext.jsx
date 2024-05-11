import { useNavigate, useLocation } from "react-router";
import { createContext, useState } from "react";
import qs from "qs";
import { useAuthAxios } from "./http-common";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const http = useAuthAxios();

  let loginUser = async (username, password) => {
    await http({
      method: "post",
      url: "/login",
      data: qs.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((response) => {
      // Success
      console.log("Login success", response);
      setLoggedInUser({
        username: response.data.username,
        roles: response.data.roles,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: response.data.username,
          roles: response.data.roles,
        })
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      // redirect to uri
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    });
  };

  let logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  let registerUser = async (username, email, password, directLogin = false) => {
    console.log("register: ", username, email, password, directLogin);
    await http({
      method: "post",
      url: "/register",
      data: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // Success
      console.log("Register success", response);
      if (directLogin) {
        loginUser(email, password);
      } else {
        navigate("/");
      }
    });
  };

  let context = {
    loggedInUser: loggedInUser,
    setLoggedInUser: setLoggedInUser,
    logoutUser: logoutUser,
    loginUser: loginUser,
    registerUser: registerUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
