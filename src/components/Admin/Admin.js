import Dashboard from "./AdminComponents/Dashboard.js";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <Dashboard Outlet={Outlet} />
    </div>
  );
}
