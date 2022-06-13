import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps) {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default RequireAuth;
