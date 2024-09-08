import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const DashboardHeader = () => {
  const { user } = useAuthContext();

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-700">
        Welcome
        <span className="text-2xl font-medium pl-2 capitalize ">
          {user.userName}
        </span>
      </h1>
      <div>
        <Link
          to="#"
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-200 focus:ring-blue-500"
        >
          Add New Video
        </Link>
      </div>
    </header>
  );
};
export default DashboardHeader;
