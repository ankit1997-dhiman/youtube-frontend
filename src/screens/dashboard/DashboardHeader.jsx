import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import ApiRequest from "../../helper/ApiRequest";
import { DASHBOARD_URLS } from "../../urls/dashboardUrls";

const DashboardHeader = () => {
  const { user } = useAuthContext();
  const username =
    user.userName.charAt(0).toUpperCase() + user.userName.slice(1);

  return (
    <header className="bg-white  p-4 flex items-center justify-end gap-3">
      <Link
        to={DASHBOARD_URLS.ADD_NEW_VIDEO}
        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-200 focus:ring-blue-500"
      >
        Add New Video
      </Link>
      <div className="text-2xl font-medium  capitalize bg-cyan-500 rounded-full w-12 h-12 flex items-center justify-center ml-2">
        {username.charAt(0)}
      </div>
    </header>
  );
};
export default DashboardHeader;
