import {useContext} from "react";
import {useLocation} from "react-router";
import {Navigate, Outlet} from "react-router-dom";
import AuthContext from "./AuthContext";
function isAuthenticated(loggedInUser) {
  return loggedInUser;
}

function isAuthorized(loggedInUser, role) {
  return loggedInUser && loggedInUser.roles.includes(role);
}

function ProtectedRoutes({redirectPath = "/login"}) {
  const location = useLocation();
  const {loggedInUser} = useContext(AuthContext);

  if (!isAuthenticated(loggedInUser)) {
    return <Navigate to={redirectPath} replace state={{from: location}} />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;