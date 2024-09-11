import { Link } from "react-router-dom";
import { DASHBOARD_URLS } from "../../urls/dashboardUrls";
import { useAuthContext } from "../../context/AuthContext";

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
    <nav className="pt-4 flex flex-col">
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
          className="block py-2 px-4 text-black hover:bg-gray-700 hover:text-white  text-left"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Sider;

const DashboardLink = ({ href, menu_name }) => {
  console.log(href);
  return (
    <Link
      to={href}
      className="block py-2 px-4 text-black hover:bg-gray-700 hover:text-white"
    >
      {menu_name}
    </Link>
  );
};
