import { Link } from "react-router-dom";
import { DASHBOARD_URLS } from "../../urls/dashboardUrls";
import { useAuthContext } from "../../context/AuthContext";
import ApiRequest from "../../helper/ApiRequest";
import { showToast } from "../../helper/toastHelper";
import { API_URL } from "../../urls/apiUrl";

const menus = [
  {
    key: 1,
    menu_name: "Dashboard",
    href: DASHBOARD_URLS.DASHBOARD,
  },
  {
    key: 2,
    menu_name: "Profile",
    href: DASHBOARD_URLS.PROFILE,
  },
  {
    key: 3,
    menu_name: "Setting",
    href: DASHBOARD_URLS.SETTING,
  },
];
const Sider = () => {
  const { logoutUser } = useAuthContext();

  return (
    <div>
      <div className="w-64 bg-gray-800 h-screen text-white flex-shrink-0">
        <div className="p-4 text-xl font-semibold">Dashboard</div>
        <nav className="mt-6">
          {menus.length
            ? menus.map((item) => {
                console.log(item);
                return (
                  <DashboardLink
                    key={item.key}
                    menu_name={item.menu_name}
                    href={item.href}
                  />
                );
              })
            : ""}
          <div>
            <button
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
              onClick={logoutUser}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Sider;

const DashboardLink = ({ href, menu_name }) => {
  console.log(href);
  return (
    <Link
      to={href}
      className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {menu_name}
    </Link>
  );
};
