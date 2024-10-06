import Dashboard from "../../screens/dashboard/Dashboard";
import DashboardHeader from "../../screens/dashboard/DashboardHeader";
import Sider from "../sider/Sider";

const DashboardLayout = () => {
  return (
    <div className="bg-black">
      <div className="bg-gray-100">
        <DashboardHeader />
        <div>
          <div className="">
            <Sider />
          </div>
        </div>

        <div className="">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
