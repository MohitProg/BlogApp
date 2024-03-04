const Header = () => {
    return (
        <>
            <header className="boder flex  items-center justify-center ">
                <nav className="p-[10px] flex gap-4 w-3/4  items-center justify-center   mx-auto">
                    <h1 className="font-bold text-2xl">
                        <span className="text-red-600">Web</span>tech
                    </h1>

                    <div className="  px-4 ">
                        <ul className="flex gap-10 items-center">
                            <div className="">
                                <li className="text-[11px]  hover:text-red-500 font-bold flex items-center">
                                    HOME
                                    <span className=" text-[15px] material-symbols-outlined ">
                                        expand_more
                                    </span>
                                </li>
                            </div>

                            <div className="  relative flex items-center justify-center group">
                                <li className="text-[11px]  hover:text-red-500 font-bold flex items-center justify-center">
                                    FEATURE
                                    <span className=" text-[15px] material-symbols-outlined ">
                                        expand_more
                                    </span>
                                </li>
                                {/* feature drop menu */}

                                <ul className="flex-col gap-2  w-[120px]  bg-gray-300  text-[11px] hidden absolute  z-20 top-[15px] group-hover:block  border shadow-lg p-2 ">
                                    <div className="  group/item ">
                                        <li className=" text-[11px] p-1 my-1 flex items-center hover:text-red-500 ">
                                            Multi Dropdown
                                            <span className="rotate-[-90deg] text-[15px] material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </li>

                                        <ul className="w-[100px] p-2 bg-gray-300  absolute z-50 left-[110px] top-2 hidden group-hover/item:block  shadow-lg">
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
                                <li className="text-[11px] hover:text-red-500 flex items-center font-bold">
                                    MEGAMENU
                                    <span className=" text-[15px] material-symbols-outlined">
                                        expand_more
                                    </span>
                                </li>

                                {/* <div className="absolute text-[11px] bg-gray-300 shadow-lg right-0 left-0  w-[400px]  group-hover/menu:block hidden">
                  <div>div1</div>
                  <div>div2</div>
                  <div>div3</div>
                </div> */}
                            </div>

                            <div className="relative  group/doc ">
                                <li className="text-[11px] hover:text-red-500  flex items-center font-bold">
                                    DOCUMENTAION
                                    <span className=" text-[15px] material-symbols-outlined">
                                        expand_more
                                    </span>
                                </li>

                                <ul className="w-[100px] p-2 bg-gray-300 absolute z-50  top-4 hidden group-hover/doc:block  shadow-lg">
                                    <li className=" p-1 my-1 text-[11px] flex items-center hover:text-red-500 ">
                                        webdoc
                                    </li>
                                    <li className=" p-1 my-1 text-[11px] flex items-center hover:text-red-500 ">
                                        vidodoc
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>

                </nav>
                <span className="material-symbols-outlined  text-lg hover:text-red-500">
                    search
                </span>
            </header>

            <header className="bg-red-500 text-white">
                <div className="flex container items-center mx-auto justify-between p-1 ">
                    <ul className="flex items-center gap-3 text-[11px]">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                    <ul className="flex items-center gap-3 text-[11px]">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-linkedin"></i>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
