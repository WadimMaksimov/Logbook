import { AuthorizationPage } from '@/pages/auth_pages';
import { HomePage } from '@/pages/main_pages';
import { UserPage } from '@/pages/user_pages';
import { Layout } from '@/app/layouts';
import { Routes, Route } from 'react-router';
import { AppRoutes } from './routes';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.AUTH} element={<AuthorizationPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={AppRoutes.PROFILE} element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
