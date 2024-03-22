import React from 'react'

const Section = () => {
  return (
    <div className='absolute ml-48 lg:ml-10 mt-20 flex flex-col left-0 right-52 md:right-10'>
        <div className='pb-2 border-b-2'>
            <h1 className='font-black text-5xl whitespace-nowrap'>World News</h1>
        </div>
        <ul className='flex items-center py-2 border-b-2 border-black cursor-pointer whitespace-nowrap sm:justify-center'>
            <li className='px-2 border-r-2 hover:underline'><a href="Africa">AFRICA</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="Africa">AMERICAS</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="Africa">ASIA</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="Africa">AUSTRALIA</a></li>
            <li className='px-2 border-r-2 hover:underline sm:hidden'><a href="Africa">CANADA</a></li>
            <li className='px-2 border-r-2 hover:underline sm:hidden'><a href="Africa">EUROPE</a></li>
            <li className='px-2 hover:underline sm:hidden'><a href="Africa">MIDDLE EAST</a></li>
            <li className='px-2 hover:underline sm:block hidden'><a href="More">More</a></li>
        </ul>
    </div> 
  )
}

export default Section