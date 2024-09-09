import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard/Dashboard";
import { DASHBOARD_URLS } from "../urls/dashboardUrls";
import VideoById from "../screens/pages/video/VideoById";

function DasboardNavigator() {
  return (
    <Routes>
      <Route path={DASHBOARD_URLS.DASHBOARD} element={<Dashboard />}></Route>
      <Route
        path={`${DASHBOARD_URLS.VIDEO}:id`}
        element={<VideoById />}
      ></Route>
      {/* <Route path="*" element={<Dashboard />}></Route> */}
    </Routes>
  );
}
export default DasboardNavigator;
