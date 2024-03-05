import React from 'react'
import Blogitem from './Blogitem'

const Section1 = () => {
  return (
 <>
 
 
 <section className='w-3/4 mx-auto p-2 flex items-center  mt-4'>


<div className='  grid   sm:grid-cols-2 lg:grid-cols-3  gap-2'>
    <div className='row-span-2 shadow'>
        <Blogitem img="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
    </div>
  
    <div className='row-span-1  shadow'>
        <Blogitem img="https://plus.unsplash.com/premium_photo-1706569343707-c693fc58a3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
    </div>
    <div className='row-span-1 shadow'>
        <Blogitem img="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
    </div>
    <div className='row-span-1'>
        <Blogitem img="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D" />
    </div>
    <div className='row-span-1 shadow'>
        <Blogitem img="https://images.unsplash.com/photo-1585250003309-694ff34512d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D" />
    </div>

</div>
</section>
 
 
 
 </>
  )
}

export default Section1