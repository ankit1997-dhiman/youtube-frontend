import AuthNavigation from "../navigation/AuthNavigation.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
import DashboardLayout from "../layouts/dashboard/DashboardLayout.jsx";

export function Navigation() {
  const { user } = useAuthContext();
  return <>{user ? <DashboardLayout /> : <AuthNavigation />}</>;
}
