import Hooks from '../Hooks';
import moment from "moment";

const MainPage = () => {

    const { data} = Hooks("topstories/v2/world.json?api-key=");
    const formattedDate = data?.results?.[0]?.created_date
    ? moment(data?.results?.[0]?.created_date).fromNow()
    : "";

  return (
    <div className='pt-52 ml-48 lg:ml-10 mr-10 lg:flex-col flex'>
        <div className='lg:w-full w-[700px]'>
            <p className='border-r-2'></p>
                <img className='md:w-[626px] w-[800px] h-[400px]' src={data?.results?.[0]?.multimedia?.[0]?.url??""} alt="article"/>
                <figcaption className='pl-[410px] text-gray-500 text-base whitespace-nowrap sm:text-sm md:pl-[50px]'>
                    { data?.results?.[0]?.multimedia?.[0]?.copyright}
                </figcaption>
            <h3 className='hover:underline font-bold text-2xl flex-wrap'><a href="https://www.nytimes.com/live/2024/03/21/world/israel-hamas-war-gaza-news">{data?.results?.[0]?.title}</a></h3>
            <p className='font-medium text-base pt-2'>{data?.results?.[0]?.abstract}</p>
            <p className='text-sm text-gray-500'><span>{formattedDate}</span>.<span className='uppercase'>{data?.results?.[0]?.byline}</span></p>
            <p className='border-b-2 pt-8 lg:pt-4 hidden lg:block'></p>
        </div>
        <div className='border-r-2 px-[10px] lg:hidden'></div>

        <div className='w-96 lg:w-auto'>
        <div className='lg:py-4 px-5 lg:p-0'>
            <img className='lg:w-[700px] lg:h-[466.55px] w-[400px] h-[300px]' src={data?.results?.[1]?.multimedia?.[0]?.url?? ""} alt="article" />
            <p className=' text-gray-500 text-base whitespace-nowrap sm:text-sm md:pl-[50px] hidden'>{ data?.results?.[1]?.multimedia?.[0]?.copyright}</p>
            <h3 className='hover:underline font-bold text-2xl pt-10 flex-wrap'><a href="https://www.nytimes.com/2024/03/21/world/europe/russia-missile-attack-kyiv-ukraine.html">{data?.results?.[1]?.title}</a></h3>
            <p className='font-medium text-base pt-2'>{data?.results?.[1]?.abstract}</p>
            <p className='text-sm text-gray-500'><span>{formattedDate}</span>.<span className='uppercase lg:hidden block'>{data?.results?.[1]?.byline}</span></p>
            <p className='lg:border-b-2 lg:block hidden lg:pt-4'></p>
        </div>
        </div>
        <div className='border-r-2 px-[10px] lg:hidden'></div>

        <div className='w-[400px] lg:w-auto'>
        <div className='lg:py-4 px-5 lg:p-0'>
            <img className='w-[250px] h-[200px] lg:w-[700px] lg:h-[466px]' src={data?.results?.[2]?.multimedia?.[0]?.url?? ""} alt="article" />
                <figcaption className='pr-[200px] text-right text-gray-500 text-base whitespace-nowrap sm:text-sm md:pl-[50px]'>
                    { data?.results?.[2]?.multimedia?.[0]?.copyright}
                </figcaption>
            <h3 className='hover:underline font-bold text-2xl lg:flex-wrap lg:w-auto'><a href="https://www.nytimes.com/2024/03/21/world/europe/portugal-chega.html">{data?.results?.[2]?.title}</a></h3>
            <p className='font-medium text-base pt-2'>{data?.results?.[2]?.abstract}</p>
            <p className='text-sm text-gray-500'><span>{formattedDate}</span>.<span className='uppercase lg:hidden block'>{data?.results?.[2]?.byline}</span></p>
            <p className='border-b-2 py-4 lg:pt-4'></p>
        </div>

        <div className='lg:py-4 py-5 px-5 lg:p-0'>
            <img className='w-[250px] h-[200px] lg:w-[700px] lg:h-[466px]' src={data?.results?.[3]?.multimedia?.[0]?.url?? ""} alt="article" />
                <figcaption className='pr-[200px]  text-gray-500 text-base whitespace-nowrap sm:text-sm md:pl-[50px]'>
                    { data?.results?.[3]?.multimedia?.[0]?.copyright}
                </figcaption>
            <h3 className='hover:underline font-bold text-2xl flex-wrap lg:w-auto'><a href="https://www.nytimes.com/2024/03/21/world/asia/india-national-congress-bank-accounts-bjp.html">{data?.results?.[3]?.title}</a></h3>
            <p className='font-medium text-base pt-2'>{data?.results?.[3]?.abstract}</p>
            <p className='text-sm text-gray-500'><span>{formattedDate}</span>.<span className='uppercase lg:hidden block'>{data?.results?.[3]?.byline}</span></p>
        </div>
        </div>
    </div>
  )
}

export default MainPage