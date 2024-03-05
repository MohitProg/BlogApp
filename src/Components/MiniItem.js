import React from 'react'

const MiniItem = ({img}) => {
    return (
        <>

            <div className='flex gap-3 items-center'>
                <img src={img} className='w-[70px] h-[70px] object-contain' alt="" />

                <div>
                    <div className="  flex flex-col  items-start justify-end   ">
                        
                        <h1 className="text-black lg:text-sm font-bold">
                            Best Phone in This world You reaally like it
                        </h1>
                        <p className=" text-gray-500">i hope you like it thank you </p>
                    </div>
                </div>
            </div>




        </>
    )
}

export default MiniItem