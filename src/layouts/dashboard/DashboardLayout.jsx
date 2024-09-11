import DasboardNavigator from "../../navigation/DasboardNavigator";
import DashboardHeader from "../../screens/dashboard/DashboardHeader";
import Sider from "../sider/Sider";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="relative">
          <div className="absolute bg-stone-500 w-[15%] z-10">
            <div className="fixed  w-[15%]">
              <h1 className="text-2xl font-bold text-gray-700 py-6 pl-4">
                Logo
              </h1>
              <Sider />
            </div>
          </div>
          <div className="w-[85%] absolute right-0 ">
            <DashboardHeader />
            <DasboardNavigator />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
