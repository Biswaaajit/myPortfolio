import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";

function AppLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col text-white ">
      <Navigation />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
