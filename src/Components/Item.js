import React from 'react'

const Item = ({ img }) => {
    return (
        <>

            <div className='  cursor-pointer  overflow-hidden  flex flex-col  w-full gap-1  h-[100%]  ' >
                <img src={img} className=' w-full h-full  object-contain' alt="" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0.5) )' }} />

                <div className='  flex flex-col  items-start justify-end p-2  ' >
                    <span className='bg-red-500 p-[3px] rounded-sm font-semibold text-white text-[8px] lg:text-[10px]'>APPLE</span>
                    <h1 className='text-white lg:text-sm font-bold'>Best Phone in This world You reaally like it </h1>
                    <p className=' text-gray-500'>i hope you like it thank you </p>

                </div>



            </div>



        </>
    )
}

export default Item