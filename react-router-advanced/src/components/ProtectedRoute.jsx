import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; 
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Link to="/blog/9">profile</Link>;
  }

  return children;
}

export default ProtectedRoute;