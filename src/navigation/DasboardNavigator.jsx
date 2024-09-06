import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard/Dashboard";

function DasboardNavigator() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<Dashboard />}></Route>
    </Routes>
  );
}
export default DasboardNavigator;
