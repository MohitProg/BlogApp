import React from "react";
import Item from "./Item";

const Section4 = () => {
    return (
        <>
            <div className=" w-3/4 mx-auto  mt-4  grid grid-cols-3 gap-2 ">
                {/*part 1 */}





                <div className="col-span-2">

                    <div className="flex   items-center justify-between gap-2 p-1  ">
                        <div className=" w-3/5 flex items-center ">
                            <span className="px-2 py-1 bg-gray-200 text-sm font-semibold">
                                Coding
                            </span>
                            <hr className=" w-full border-[2px] border-solid border-red-500 " />
                        </div>
                        <span className=" cursor-pointer px-1 py-1 bg-gray-200 text-red-500 ">
                            View all
                        </span>


                    </div>
                    {/* child  */}
                    <div className=" grid  gap-3 grid-cols-2 ">

                        {/* PART1  */}


                        <div className="  cursor-pointer  overflow-hidden  flex flex-col  w-full gap-1  h-[100%]  ">
                            <img
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                                className=" w-full h-full  object-contain"
                                alt=""
                                style={{
                                    background:
                                        "linear-gradient( rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0.5) )",
                                }}
                            />

                            <div className="  flex flex-col  items-start justify-end p-2  ">
                                <span className="bg-red-500 p-[3px] rounded-sm font-semibold text-white text-[8px] lg:text-[10px]">
                                    APPLE
                                </span>
                                <h1 className="text-black lg:text-XL font-bold">
                                    Best Phone in This world You reaally like it{" "}
                                </h1>
                                <p className=" text-gray-500">i hope you like it thank you </p>
                            </div>
                        </div>


                        {/* PART2  */}
                        <div className="flex gap-2 flex-col">
                            <div className="flex gap-1 items-center">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" className="w-[80px] h-[60px]" alt="" />
                                <div className="  flex flex-col  items-start justify-end p-2  ">

                                    <h1 className="text-black lg:text-sm font-bold">
                                        Best Phone in This world You reaally like it{" "}
                                    </h1>

                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" className="w-[80px] h-[60px]" alt="" />
                                <div className="  flex flex-col  items-start justify-end p-2  ">

                                    <h1 className="text-black lg:text-sm font-bold">
                                        Best Phone in This world You reaally like it{" "}
                                    </h1>

                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8fDA%3D" className="w-[80px] h-[60px]" alt="" />
                                <div className="  flex flex-col  items-start justify-end p-2  ">

                                    <h1 className="text-black lg:text-sm font-bold">
                                        Best Phone in This world You reaally like it{" "}
                                    </h1>

                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D" className="w-[80px] h-[60px]" alt="" />
                                <div className="  flex flex-col  items-start justify-end p-2  ">

                                    <h1 className="text-black lg:text-sm font-bold">
                                        Best Phone in This world You reaally like it{" "}
                                    </h1>

                                </div>
                            </div>
                        </div>






                    </div>
                </div>


                {/* part 2 */}

                <div className=" col-span-1">
                    <div className="flex  flex-col gap-1   p-1 ">
                        <div className=" w-full flex items-center ">
                            <span className="px-2 py-1 bg-gray-200 text-sm font-semibold">
                                Follow Us
                            </span>
                            <hr className=" w-3/4 border-[2px] border-solid border-red-500 " />
                        </div>
                        {/*  Social Media Link */}
                        <div className="grid grid-cols-2 p-3  gap-2">
                            <span className="bg-blue-800   flex justify-between items-center rounded-sm  ">
                                <i className="bi bi-facebook p-2 bg-gray-100"></i>
                                <div>

                                    <span className="text-white p-2 ">Facebook</span>
                                </div>
                            </span>
                            <span className="bg-orange-400   flex justify-between items-center rounded-sm  ">
                                <i className="bi bi-instagram p-2 bg-gray-100"></i>
                                <div>

                                    <span className="text-white p-2 ">Instagram</span>
                                </div>
                            </span>
                            <span className="bg-red-500   flex justify-between items-center rounded-sm  ">
                                <i className="bi bi-youtube p-2 bg-gray-100"></i>
                                <div>

                                    <span className="text-white p-2 ">Youtube</span>
                                </div>
                            </span>
                            <span className="bg-blue-400   flex justify-between items-center rounded-sm  ">
                                <i className="bi bi-twitter p-2 bg-gray-100"></i>
                                <div>

                                    <span className="text-white p-2 ">twitter</span>
                                </div>
                            </span>
                        </div>



                    </div>
                </div>









            </div>
        </>
    );
};

export default Section4;
