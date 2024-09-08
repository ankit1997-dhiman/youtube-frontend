import AuthNavigation from "../navigation/AuthNavigation.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
import DasboardNavigator from "../navigation/DasboardNavigator.jsx";

export function Navigation() {
  const { user } = useAuthContext();
  return <>{user ? <DasboardNavigator /> : <AuthNavigation />}</>;
}
