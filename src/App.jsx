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
  RiCheckboxBlankCircleFill,
  RiFilter3Fill,
  RiMapPinRangeLine,
  RiDropboxFill,
  RiTwitchFill,
  RiGoogleFill,
  RiAmazonFill
} from "react-icons/ri";

const App = () => {
  const primaryColor = "text-red-600";
  const secondaryColor = "text-purple-100";
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
      <button 
        className=" fixed bottom-4 right-4 bg-purple-600 text-white rounded-full z-40 text-2xl p-2 lg:hidden" 
        onClick={() => { handleSidebar() }}>
        {sidebar ? <RiCloseFill /> : <RiMenuFill />}
      </button>
      
      {/* Content */}
      <div className="col-span-5 ">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between p-4  lg:px-12 gap-4" >
          
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

        {/* Content */}
        <div className = "py-8 px-12 md:p-8 bg-gray-100">
          
          {/* Tittle */}
          <div className="mb-4">
            <h1 className="text-3xl font-semibold">Job Board</h1>
          </div>

          {/* Searching Content */}
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center mb-6">
            <form className="col-span-1 md:col-span-2">
              <div className="relative">
                <RiSearch2Line className="absolute left-2 top-3 text-purple-600"/>
                <input type="text" className="bg-white-100 w-full outline-none py-2 pl-8 pr-4" placeholder="Search" />
              </div>
            </form>

            <form className="">
              <div className="relative col-span-1">
                <RiMapPinRangeLine className="absolute left-2 top-3 text-purple-600"/>
                <select type="text" className="bg-white-100 w-full outline-none py-[9px] pl-8 pr-4" placeholder="Anywher" >
                  <option value="Anywhere">Anywhere</option>
                  <option value="Anywhere2">Anywhere2</option>
                </select>
              </div>
            </form>

            <form className="">
              <div className="relative col-span-1">
                <RiFilter3Fill className="absolute left-2 top-3 text-purple-600"/>
                <input type="text" className="bg-white-100 w-full outline-none py-2 pl-8 pr-4" placeholder="Filters" />
                <span className="absolute text-xs right-2 top-2 bg-purple-600 text-white px-[9px] py-1 rounded-full ">4</span>
              </div>
            </form>
            
          </div>

          {/* Tags */}
          <div className="flex gap-2 items-center flex-wrap mb-20">
          <span className="bg-white flex item-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 rounded-full p-1 text-purple-800 text-xs">
                <RiCloseFill/>
              </button>
              <span className="text-gray-500"> Design </span>
            </span>

            <span className="bg-white flex item-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 rounded-full p-1 text-purple-800 text-xs">
                <RiCloseFill/>
              </button>
              <span className="text-gray-500"> Regular </span>
            </span>

            <span className="bg-white flex item-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 rounded-full p-1 text-purple-800 text-xs">
                <RiCloseFill/>
              </button>
              <span className="text-gray-500"> Full time </span>
            </span>

            <span className="bg-white flex item-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 rounded-full p-1 text-purple-800 text-xs">
                <RiCloseFill/>
              </button>
              <span className="text-gray-500"> B2B </span>
            </span>
            

            <button className="text-gray-500 ml-4">
              Clear all
            </button>

          </div>

          {/* Results */}
          <div className="flex justify-between gap-2 mb-8">
            <p className="text-gray-500"> 
              We've found 
              <span className="text-purple-600 font-bold"> 523 </span>
              jobs!
            </p>
            <p className="flex gap-2 items-center"> 
              Sort by 
              <span className="text-purple-600 font-bold hover:cursor-pointer"> 
                Date
              </span>{" "}
              <RiArrowDownSLine /> 
            </p>
          </div>

          {/* Cards */}
          <a href="#" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full  items-center drop-shadow-lg hover:border-purple-400 transition-all  border-2 border-transparent mb-4">
            
            {/* Icon */}
            <div className="w-full md:w-[10%] items-center justify-center ">
                <RiDropboxFill className=" text-7xl bg-purple-100  text-purple-600 p-4"/>  
            </div>
            
            {/* Tittle */}
            <div className="w-full md:w-[70%] ">
              <h1 className="font-semibold text-xl flex items-center gap-4 mb-2">
                UX Designer 
                <span className="bg-purple-100 text-purple-600 text-xs font-bold py-1 px-2 rounded-md">Remote</span> 
                <span className="bg-green-100 text-green-600 text-xs font-bold py-1 px-2 rounded-md">Scketch</span>
              </h1>
              <p className="text-gray-500">
                Dropbox ---- Warzawa
              </p>
            </div>

            {/* Date */}
            <div className="w-full md:w-[20%] text-center md:text-end">
              <h3 className="text-xl  text-gray-500 mb-2 ">
                8.8 - 13.7k PLN
              </h3>
              <p className="text-gray-500">
                2 days ago
              </p>
            </div>
          </a>

          <a href="#" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full  items-center drop-shadow-lg hover:border-purple-400 transition-all  border-2 border-transparent mb-4">
            
            {/* Icon */}
            <div className="w-full md:w-[10%] items-center justify-center ">
                <RiTwitchFill className=" text-7xl bg-purple-100  text-purple-600 p-4"/>  
            </div>
            
            {/* Tittle */}
            <div className="w-full md:w-[70%] ">
              <h1 className="font-semibold text-xl flex items-center gap-4 mb-2">
                Producto Designer
                <span className="bg-purple-100 text-purple-600 text-xs font-bold py-1 px-2 rounded-md">Remote</span> 
                
              </h1>
              <p className="text-gray-500">
                Twitch ---- Wroclaw
              </p>
            </div>

            {/* Date */}
            <div className="w-full md:w-[20%] text-center md:text-end">
              <h3 className="text-xl  text-gray-500 mb-2 ">
                8.2 - 13.5k PLN
              </h3>
              <p className="text-gray-500">
                2 days ago
              </p>
            </div>
          </a>

          <a href="#" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full  items-center drop-shadow-lg hover:border-purple-400 transition-all  border-2 border-transparent mb-4">
            
            {/* Icon */}
            <div className="w-full md:w-[10%] items-center justify-center ">
                <RiGoogleFill className=" text-7xl bg-purple-100  text-purple-600 p-4"/>  
            </div>
            
            {/* Tittle */}
            <div className="w-full md:w-[70%] ">
              <h1 className="font-semibold text-xl flex items-center gap-4 mb-2">
                UX/UI Designer
                <span className="bg-purple-100 text-purple-600 text-xs font-bold py-1 px-2 rounded-md">Remote</span> 
                <span className="bg-yellow-100 text-yellow-600 text-xs font-bold py-1 px-2 rounded-md">JavaScript</span> 
              </h1>
              <p className="text-gray-500">
                Google ---- Warszawa
              </p>
            </div>

            {/* Date */}
            <div className="w-full md:w-[20%] text-center md:text-end">
              <h3 className="text-xl  text-gray-500 mb-2 ">
                7.5 - 12.5k PLN
              </h3>
              <p className="text-gray-500">
                3 days ago
              </p>
            </div>
          </a>
          
          <a href="#" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full  items-center drop-shadow-lg hover:border-purple-400 transition-all  border-2 border-transparent mb-4">
            
            {/* Icon */}
            <div className="w-full md:w-[10%] items-center justify-center ">
                <RiAmazonFill className=" text-7xl bg-purple-100  text-purple-600 p-4"/>  
            </div>
            
            {/* Tittle */}
            <div className="w-full md:w-[70%] ">
              <h1 className="font-semibold text-xl flex items-center gap-4 mb-2">
                Amazon Designer
                <span className="bg-purple-100 text-purple-600 text-xs font-bold py-1 px-2 rounded-md">Remote</span> 
                <span className="bg-red-100 text-red-600 text-xs font-bold py-1 px-2 rounded-md">AWS</span> 
              </h1>
              <p className="text-gray-500">
                Amazon ---- New York
              </p>
            </div>

            {/* Date */}
            <div className="w-full md:w-[20%] text-center md:text-end">
              <h3 className="text-xl  text-gray-500 mb-2 ">
                9.5 - 14.5k PLN
              </h3>
              <p className="text-gray-500">
                1 days ago
              </p>
            </div>
          </a>
          
        </div>

      </div>

    </div>

  );
}

export default App;
