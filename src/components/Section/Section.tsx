const Section = () => {
  return (
    <div className='absolute ml-48 lg:ml-10 mt-20 flex flex-col left-0 right-52 md:right-10'>
        <div className='pb-2 border-b-2'>
            <h1 className='font-black text-5xl whitespace-nowrap'>World News</h1>
        </div>
        <ul className='flex items-center py-2 border-b-2 border-black cursor-pointer whitespace-nowrap sm:justify-center'>
            <li className='px-2 border-r-2 hover:underline'><a href="/">AFRICA</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="/">AMERICAS</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="/">ASIA</a></li>
            <li className='px-2 border-r-2 hover:underline'><a href="/">AUSTRALIA</a></li>
            <li className='px-2 border-r-2 hover:underline sm:hidden'><a href="/">CANADA</a></li>
            <li className='px-2 hover:underline border-r-2 sm:hidden'><a href="/">EUROPE</a></li>
            <li className='px-2 hover:underline md:hidden'><a href="/">MIDDLE EAST</a></li>
            <li className='px-2 hover:underline sm:block hidden'><a href="/">More</a></li>
        </ul>
    </div> 
  )
}

export default Section