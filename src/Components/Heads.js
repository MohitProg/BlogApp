import React from 'react'

const Heads = ({title,size}) => {
    return (
        <>

            <div className={`flex    items-center justify-between gap-2 p-1 ${size}`}>
                <div className=" w-3/4 flex items-center ">
                    <span className="px-2 py-1 bg-gray-200 text-sm font-semibold">
                        {title}
                    </span>
                    <hr className=" w-full border-[2px] border-solid border-red-500 " />
                </div>
                <span className=" cursor-pointer px-1 py-1 bg-gray-200 text-red-500 ">
                    View all
                </span>


            </div>


        </>
    )
}

export default Heads