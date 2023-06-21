import { useState } from "react";
import { 
  RiDashboardLine, 
  RiBriefcaseLine, 
  RiCalendarLine, 
  RiMessageLine, 
  RiLogoutBoxRLine, 
  RiMenuFill,
  RiCloseFill 
} from "react-icons/ri";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      {/* SideBar */}
      <div className={`${sidebar ? "-left-0" : "-left-full"} transition-all w-[80%] md:w-[40%] lg:w-full col-span-1 fixed lg:static top-0 left-full w-full h-full overflow-y-scroll p-8 border-r-gray-300 z-50 bg-white`}>
        {/* Logotipo */}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
        </div>
        <div className=" flex flex-col justify-between h-[800px]">
          {/* Menu */}
          <nav>
            <ul>
              <li>
                <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                  <RiBriefcaseLine />
                  RiBriefcaseLine
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                  <RiCalendarLine />
                  RiCalendarLine
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
                  <RiMessageLine />
                  RiMessageLine
                </a>
              </li>

            </ul>
          </nav>
          {/* Image and logout */}
          <div className="flex flex-col gap-4">
            <img src="/img/revenue.svg" alt="ImageRevenue" />
            {/* Update */}
            <div className="bg-purple-100 p-8 flex flex-col rounded-3xl">
              <h3 className="text-xl text-center "> Get upgrade</h3>
              <p className="text-gray-500 text-center "> Lorem ipsum dolor sit amet consectetur </p>
              <button className="bg-purple-600 text-white p-2 rounded-lg">
                Learn more
              </button>
            </div>
            <a href="#" className="flex items-center gap-4 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors text-gray-400 font-semibold">
              <RiLogoutBoxRLine />
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* Btn menu mobile */}
      <button className="absolute bottom-4 right-4 bg-purple-600 text-white rounded-full text-2xl p-2 lg:hidden" onClick={() => {handleSidebar()}}>
        {sidebar? <RiCloseFill /> : <RiMenuFill />}
      </button>
      {/* Content */}
      <div className="col-span-5 bg-blue-400 ">
      </div>
    </div>
  );
}

export default App;
