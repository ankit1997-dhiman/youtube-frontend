import AuthNavigation from "../navigation/AuthNavigation.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
import DasboardNavigator from "../navigation/DasboardNavigator.jsx";
import Sider from "../layouts/sider/Sider.jsx";
import DashboardHeader from "../screens/dashboard/DashboardHeader.jsx";

export function Navigation() {
  const { user } = useAuthContext();
  return (
    <>
      {user ? (
        <div>
          <div className="bg-gray-100  flex overflow-hidden">
            {/* <!-- Sidebar --> */}
            <Sider />

            {/* <!-- Main content --> */}
            <div className="flex-1 flex flex-col">
              {/* <!-- Top navigation bar --> */}
              <DashboardHeader />

              {/* <!-- Main area --> */}
              <main className="">
                <DasboardNavigator />
              </main>
            </div>
          </div>
        </div>
      ) : (
        <AuthNavigation />
      )}
    </>
  );
}
