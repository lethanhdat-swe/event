import { Navigate, Route, Routes } from 'react-router-dom';

import PublicLayout from '@/layouts/PublicLayout';
import AuthLayout from '@/layouts/AuthLayout';
import AdminLayout from '@/layouts/AdminLayout';

import AuthGuestRoute from '@/routes/AuthGuestRoute';
import ProtectedRoute from '@/routes/ProtectedRoute';

import Home from '@/pages/(public)/Home';
import LoginPage from '@/pages/(auth)/Login/LoginPage';
import Dashboard from '@/pages/(admin)/Dashboard';

function App() {
  return (
    <Routes>
      {/* Public base */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Auth redirect */}
      <Route path="/auth" element={<Navigate replace to="/login" />} />

      {/* Auth base */}
      <Route element={<AuthGuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>

      {/* Admin base */}
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
