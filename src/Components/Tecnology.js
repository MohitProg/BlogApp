import React from 'react'
import Item from './Item'

const Tecnology = () => {
  return (
<>
<div>
          <div className="flex  items-center justify-between w-3/4 gap-2 p-1 mx-auto">
            <div className=" w-4/5 flex items-center ">
              <span className="px-2 py-1 bg-gray-200 text-sm font-semibold">
                TECHNOLOGY
              </span>
              <hr className=" w-full border-[2px] border-solid border-red-500 " />
            </div>
            <span className=" cursor-pointer px-1 py-1 bg-gray-200 text-red-500 ">
              View all
            </span>
          </div>

          <div className=" w-3/4 mx-auto  grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            <Item img="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGltYWdlfGVufDB8fDB8fHww" />
            <Item img="https://plus.unsplash.com/premium_photo-1671995576248-57bf9036d326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2glMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" />
            <Item img="https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2glMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" />
            <Item img="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>





</>
  )
}

export default Tecnology