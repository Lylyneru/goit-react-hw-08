import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};
