import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext"; // Adjust as needed for your user context

function ProtectedRoute({ children }) {
  const { user, isAdmin } = useUserContext(); // Access user and isAdmin from context
  if (user) {
    if (!user.email.endsWith("@e-polytechnique.ma") || !isAdmin) {
      return <Navigate to="/" />;
    }
  }
  // If the user is not logged in or is not an admin, redirect to the homepage

  // Allow access to the protected route (AdminPage)
  return children;
}

export default ProtectedRoute;
