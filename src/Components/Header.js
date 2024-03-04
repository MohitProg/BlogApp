import React from "react";

const Header = () => {
    return (
        <>
            <header className="boder shadow">
                <nav className="p-[10px] flex gap-4 items-center container  mx-auto">
                    <h1 className="font-bold text-2xl"><span className="text-red-600">Web</span>tech</h1>

                    <div className="w-full  px-4 ">
                        <ul className="flex gap-10 items-center">

                            <div className="">
                                <li className="text-sm  hover:text-red-500 font-bold flex items-center">
                                    HOME<span className="material-symbols-outlined ">expand_more</span>
                                </li>

                            </div>

                            <div className="relative  flex items-center justify-center">
                                <li className="text-sm  hover:text-red-500 font-bold flex items-center justify-center">
                                    FEATURE<span className="material-symbols-outlined ">expand_more</span>
                                </li>

                                <div className="absolute top-[60px] border shadow p-3 " >

                                    <ul className="flex-col gap-2">

                                        <li className="text-sm  my-1 flex items-center hover:text-red-500 ">
                                            FEATURES
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </li>
                                        <li className="text-sm  my-1 flex items-center hover:text-red-500 ">
                                            FEATURES

                                        </li>
                                        <li className="text-sm  my-1 flex items-center hover:text-red-500 ">
                                            FEATURES

                                        </li>
                                        <li className="text-sm  my-1 flex items-center hover:text-red-500 ">
                                            FEATURES

                                        </li>
                                    </ul>

                                </div>
                            </div>







                            <li className="text-sm hover:text-red-500 flex items-center font-bold">
                                MEGAMENU
                                <span className="material-symbols-outlined">expand_more</span>
                            </li>



                            <li className="text-sm hover:text-red-500  flex items-center font-bold">
                                DOCUMENTAION
                                <span className="material-symbols-outlined">expand_more</span>
                            </li>



                        </ul>
                    </div>

                    <span className="material-symbols-outlined text-lg hover:text-red-500">search</span>
                </nav>
            </header>
        </>
    );
};

export default Header;
