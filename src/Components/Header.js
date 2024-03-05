import { useState } from "react";

const Header = () => {
  const [navvalue, setnavvalue] = useState(false);
  const handleClick = () => {
    setnavvalue(!navvalue);
  };

  return (
    <>
      <header className="boder flex  items-center justify-center ">
        <nav
          className={`p-[10px] ${
            navvalue === true ? "hidden" : ""
          } flex gap-4 w-3/4  items-center justify-center   `}
        >
          <h1 className="font-bold text-3xl">
            <span className="text-red-600">Web</span>tech
          </h1>

          <div className="  px-4 ">
            <ul className="flex gap-10 items-center">
              <div className="">
                <li className="text-[14px]  hover:text-red-500 font-bold flex items-center">
                  HOME
                  <span className=" text-[15px] material-symbols-outlined ">
                    expand_more
                  </span>
                </li>
              </div>

              <div className="  relative flex items-center justify-center group">
                <li className="text-[14px]  hover:text-red-500 font-bold flex items-center justify-center">
                  FEATURE
                  <span className=" text-[15px] material-symbols-outlined ">
                    expand_more
                  </span>
                </li>
                {/* feature drop menu */}

                <ul className="flex-col gap-2  w-[150px]  bg-gray-300  text-[12px] hidden absolute  z-20 top-[15px] group-hover:block  border shadow-lg p-2 ">
                  <div className="  group/item ">
                    <li className=" text-[14px] p-1 my-1 flex items-center hover:text-red-500 ">
                      Multi Dropdown
                      <span className="rotate-[-90deg] text-[15px] material-symbols-outlined">
                        expand_more
                      </span>
                    </li>

                    <ul className="w-[100px] p-2 bg-gray-300  absolute z-50 left-[130px] top-2 hidden group-hover/item:block  shadow-lg">
                      <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                        ShortCodes
                      </li>
                      <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                        FEATURES
                      </li>
                      <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                        FEATURES
                      </li>
                    </ul>
                  </div>
                  <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                    ShortCodes
                  </li>
                  <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                    FEATURES
                  </li>
                  <li className=" p-1 my-1 flex items-center hover:text-red-500 ">
                    FEATURES
                  </li>
                </ul>
              </div>

              <div className="relative group/menu ">
                <li className="text-[14px] hover:text-red-500 flex items-center font-bold">
                  MEGAMENU
                  <span className=" text-[15px] material-symbols-outlined">
                    expand_more
                  </span>
                </li>

                {/* <div className="absolute text-[14px] bg-gray-300 shadow-lg right-0 left-0  w-[400px]  group-hover/menu:block hidden">
                  <div>div1</div>
                  <div>div2</div>
                  <div>div3</div>
                </div> */}
              </div>

              <div className="relative  group/doc ">
                <li className="text-[14px] hover:text-red-500  flex items-center font-bold">
                  DOCUMENTAION
                  <span className=" text-[15px] material-symbols-outlined">
                    expand_more
                  </span>
                </li>

                <ul className="w-[100px] p-2 bg-gray-300 absolute z-50  top-4 hidden group-hover/doc:block  shadow-lg">
                  <li className=" p-1 my-1 text-[14px] flex items-center hover:text-red-500 ">
                    webdoc
                  </li>
                  <li className=" p-1 my-1 text-[14px] flex items-center hover:text-red-500 ">
                    vidodoc
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
        {/* second nav */}
        <nav
          className={`${
            navvalue === true ? "block" : "hidden"
          } w-3/4 text-sm  p-[10px]`}
        >
          <input
            type="search"
            placeholder="Search here.."
            className="p-1  w-full  ring-1 ring-blue-500 border-0"
          />
        </nav>

        {/* button tonggle */}
        <div className="flex items-center justify-center ">
          {navvalue === true ? (
            <span
              className="material-symbols-outlined cursor-pointer   hover:text-red-500 "
              onClick={handleClick}
            >
              close
            </span>
          ) : (
            <>
              <i
                className="bi bi-search font-bold cursor-pointer  hover:text-red-500"
                onClick={handleClick}
              ></i>
            </>
          )}
        </div>
      </header>

      <header className="bg-red-500 z-10 text-white">
        <div className="flex w-3/4  items-center mx-auto justify-between p-1  ">
          <ul className="flex items-center gap-3 text-[15px]">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
          <ul className="flex items-center gap-3 text-[14px]">
            <i className="bi text-[15px] bi-instagram"></i>
            <i className="bi text-[15px] bi-facebook"></i>
            <i className="bi text-[15px] bi-twitter"></i>
            <i className="bi text-[15px] bi-linkedin"></i>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
