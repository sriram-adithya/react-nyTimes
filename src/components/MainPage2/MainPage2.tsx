import axios from "axios";
import React, { useEffect } from "react";
import { Result } from "../model";
import Hooks from "../Hooks";

const MainPage2 = () => {
  const { data, loading, error } = Hooks("topstories/v2/world.json?api-key=");
  return (
    <div className="ml-48 lg:ml-10 mr-52 lg:mr-10 whitespace-nowrap">
      {loading && <div>Loading...</div>}
      {error && <div>Error:{error}</div>}

      <div className="uppercase ">
        <p className="border-t-2 lg:hidden block"></p>
        {data?.results?.[4]?.kicker === "" ? data?.results?.[4]?.kicker : ""}
      </div>

      <div className="grid grid-cols-5 grid-rows-1 pb-8 pt-4">
        {/* grid 1 */}
        <div className="border-r-2 pr-[25px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[4]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">
              {data?.results?.[4]?.title}
            </a>
          </h3>
        </div>

        {/* grid 2 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[5]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[5]?.title}</a></h3>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[6]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap"><a href="/">{data?.results?.[6]?.title}</a></h3>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[7]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[7]?.title}</h3>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[8]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[8]?.title}</h3>
        </div>
      </div>

      <div className="border-b-2"></div>

      {/* Second Row */}

      <div className="grid grid-cols-5 grid-rows-1 pt-8 pb-12">
        {/* grid 1 */}
        <div className="border-r-2 pr-[25px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[9]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="https://www.nytimes.com/2024/03/22/world/americas/venezuela-election-corina-yoris.html">
              {data?.results?.[9]?.title}
            </a>
          </h3>
        </div>

        {/* grid 2 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[10]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[10]?.title}</h3>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[11]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[11]?.title}</h3>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] border-r-2">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[12]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[12]?.title}</h3>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[13]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap">{data?.results?.[13]?.title}</h3>
        </div>
      </div>
      <div className="border-b-2 border-black "></div>
    </div>
  );
};
export default MainPage2;

{
  /* <div>
<div className='ml-48 lg:ml-10 mr-52 lg:mr-10 whitespace-nowrap'>

{data && data.results?<div>{loading}</div> :""}
<p className='border-t-2 lg:hidden block'></p>
<div className='uppercase'>
{data?.results?.[4]?.kicker}
THE SATURDAY PROFILE
</div>   
<div className='grid grid-cols-2 grid-rows-5'>
<img className='w-[100px] h-[100px]' src={data?.results?.[4]?.multimedia?.[0]?.url?? ""} alt="article" />
</div>
</div>
</div> */
}
