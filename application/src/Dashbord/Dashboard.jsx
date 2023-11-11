import SideBar from "../components/Dashboard/SideBar";
import TopBar from "../components/Dashboard/TopBar";
import { Outlet } from "react-router-dom"


export default function Dashboard() {
  return (
    <div className="position-relative dashboard">
        <TopBar />
        <SideBar />
        <Outlet />
    </div>
  )
}
