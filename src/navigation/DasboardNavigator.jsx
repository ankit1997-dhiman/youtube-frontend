import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard/Dashboard";
import { DASHBOARD_URLS } from "../urls/dashboardUrls";

function DasboardNavigator() {
  return (
    <Routes>
      <Route path={DASHBOARD_URLS.DASHBOARD} element={<Dashboard />}></Route>
      <Route path="*" element={<Dashboard />}></Route>
    </Routes>
  );
}
export default DasboardNavigator;
