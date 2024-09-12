import DasboardNavigator from "../../navigation/DasboardNavigator";
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
          <DasboardNavigator />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
