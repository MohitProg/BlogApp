import React from "react";

const Item = ({ img,title,size }) => {
  return (
    <>
      <div className={`  cursor-pointer relative  overflow-hidden  flex flex-col  w-full gap-1  h-[100%] ${size}  `}>
        <img
          src={img}
          className=" w-full h-full  object-cover"
          alt=""
         
        />

        <div className="  flex flex-col  items-start justify-end   ">
            <div className="absolute top-0 left-0 right-0 bottom-0 p-1">
          <span className="bg-red-500 p-[3px] rounded-sm font-semibold text-white text-[8px] lg:text-[10px]">
            APPLE
          </span>

            </div>
          <h1 className="text-black lg:text-sm font-bold">
            Best Phone in This world You reaally like it
          </h1>
          <p className=" text-gray-500">i hope you like it thank you </p>
        </div>
      </div>
    </>
  );
};

export default Item;
