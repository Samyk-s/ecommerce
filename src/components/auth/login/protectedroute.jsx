import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      // Check if the user is logged in
      const token = localStorage.getItem("token"); // Assuming you store a token on login
      const userRole = localStorage.getItem("userRole"); // Assuming you store the user's role on login

      // If no token or role, the user is not authenticated
      if (!token || !userRole) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Check if the user's role is allowed
      const isAuth = allowedRoles.includes(userRole);
      setIsAuthenticated(isAuth);
      setIsLoading(false);
    };

    checkAuth();
  }, [allowedRoles]);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  if (!isAuthenticated) {
    // Redirect to login page and pass the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;