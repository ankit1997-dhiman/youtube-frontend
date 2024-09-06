import { useNavigate } from "react-router-dom";
import ApiRequest from "../../helper/ApiRequest";
import Cookies from "js-cookie";
import { useAuthContext } from "../../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { logoutUser } = useAuthContext();

  const logout = async () => {
    try {
      const response = await ApiRequest.post(
        "http://localhost:4000/api/v1/users/logout"
      );
      if (response) {
        logoutUser();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 h-screen flex overflow-hidden">
        {/* <!-- Sidebar --> */}
        <div className="w-64 bg-gray-800 text-white flex-shrink-0">
          <div className="p-4 text-xl font-semibold">Dashboard</div>
          <nav className="mt-6">
            <a
              href="#"
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Profile
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Settings
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Logout
            </a>
          </nav>
        </div>

        {/* <!-- Main content --> */}
        <div className="flex-1 flex flex-col">
          {/* <!-- Top navigation bar --> */}
          <header className="bg-white shadow-md p-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-700">
              Welcome, User
            </h1>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                New Post
              </button>
            </div>
          </header>

          {/* <!-- Main area --> */}
          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                <p className="text-gray-600">
                  This is a description of card 1.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                <p className="text-gray-600">
                  This is a description of card 2.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                <p className="text-gray-600">
                  This is a description of card 3.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      Dashboard
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default Dashboard;
