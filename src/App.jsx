import { useState } from "react";
import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendarLine,
  RiMessageLine,
  RiLogoutBoxRLine,
  RiMenuFill,
  RiCloseFill,
  RiNotification2Line,
  RiArrowDownSLine,
  RiSearch2Line,
  RiCheckboxBlankCircleFill
} from "react-icons/ri";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      
      {/* SideBar EN EL ANTERIOR COMMIT, CORREGIR LA LINEA DE ABAJO*/}
      <div className={`${sidebar ? "-left-0" : "-left-full"} transition-all  w-[80%] md:w-[40%] lg:w-full  col-span-1 fixed lg:static top-0 h-full overflow-y-scroll p-8 border-r-gray-300 z-50 bg-white`}>
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
      <button className="absolute bottom-4 right-4 bg-purple-600 text-white rounded-full text-2xl p-2 lg:hidden" onClick={() => { handleSidebar() }}>
        {sidebar ? <RiCloseFill /> : <RiMenuFill />}
      </button>
      
      {/* Content */}
      <div className="col-span-5 ">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between p-4 gap-4" >
          
          {/* Search */}
          <form className="w-full md:w-[40%] lg:w-[30%]  order-1 md:order-none">
            <div className="relative">
              <RiSearch2Line className="absolute left-2 top-3"/>
              <input type="text" className="bg-gray-100 w-full outline-none rounded-lg py-2 pl-8 pr-4" placeholder="Buscar" />
            </div>
          </form>

          {/* Notifications */}
          <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
            <ul className="flex gap-4 items-center">
              <li>
                <a href="#" className="relative">
                  <RiNotification2Line className="text-xl"/>
                  <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  Rodrigo Ticona  <RiArrowDownSLine />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
