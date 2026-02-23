import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Navigate, Outlet } from 'react-router';
import { AppRoutes } from './routes';

export const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={AppRoutes.AUTH} />;
};
