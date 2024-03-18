

const Section = () => {
  return (

    <div className="flex flex-col justify-center pl-20">
      <h1 className="font-extrabold text-5xl whitespace-nowrap py-3 border-b-2">World News</h1>
      <ol className="flex flex-row py-2 cursor-pointer">
        <li className="px-2 border-r-2 hover:underline">AFRICA</li>
        <li className="px-2 border-r-2 hover:underline">AMERICAS</li>
        <li className="px-2 border-r-2 hover:underline">ASIA</li>
        <li className="px-2 border-r-2 hover:underline">AUSTRALIA</li>
        <li className="px-2 border-r-2 hover:underline">CANADA</li>
        <li className="px-2 border-r-2 hover:underline">EUROPE</li>
        <li className="px-2 whitespace-nowrap hover:underline">MIDDLE EAST</li>
      </ol>
      <div className="border-b-2"></div>
    </div>
  )
}

export default Section;