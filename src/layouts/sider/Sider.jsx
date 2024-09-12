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
    <div className="">
      <nav className="pt-4 flex flex-col fixed left-0 bg-black  bottom-0 top-[80px] w-[190px] z-10">
        {menus.length
          ? menus.map((item) => {
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
            className="block py-2 px-4 text-white    text-left"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Sider;

const DashboardLink = ({ href, menu_name }) => {
  return (
    <Link to={href} className="block py-2 px-4 text-white text-left">
      {menu_name}
    </Link>
  );
};
