import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <div className="flex flex-grow h-full">
        <Sidebar />
        <div className="flex items-center justify-center flex-grow p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
