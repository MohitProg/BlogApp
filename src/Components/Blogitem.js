import React from 'react'

const Blogitem = ({img}) => {
   


   
  return (
   <div className=' cursor-pointer rounded overflow-hidden relative w-full  h-[100%] bg-red-500' >
    <img src={img} className=' w-full h-full  object-cover' alt="" />

    <div  className='absolute top-0 bottom-0 left-0 right-0 flex flex-col  items-start justify-end p-2  ' >
     <span className='bg-red-500 p-[3px] rounded-sm font-semibold text-white text-[8px] lg:text-[10px]'>APPLE</span>
     <h1 className='text-white lg:text-xl font-bold'>Best Phone in This world You reaally like it </h1>
     <p className=' text-gray-500'>i hope you like it thank you </p>

    </div>



   </div>
  )
}

export default Blogitem