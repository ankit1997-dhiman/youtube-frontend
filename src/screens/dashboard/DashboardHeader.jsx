import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import ApiRequest from "../../helper/ApiRequest";
import { DASHBOARD_URLS } from "../../urls/dashboardUrls";

const DashboardHeader = () => {
  const { user } = useAuthContext();
  // const username =
  //   user.userName.charAt(0).toUpperCase() + user.userName.slice(1);

  return (
    <header className="bg-black fixed top-0 left-0  h-[80px] right-0 z-10  p-4 flex items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-white ">We.Tube</h1>
      </div>
      <div className="flex gap-3">
        <Link
          to={DASHBOARD_URLS.ADD_NEW_VIDEO}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-200 focus:ring-blue-500"
        >
          Add New Video
        </Link>
        <div className="text-2xl font-medium  capitalize bg-cyan-500 rounded-full w-12 h-12 flex items-center justify-center ml-2">
          {user.fullName.charAt(0)}
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;
