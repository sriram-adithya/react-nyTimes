import Hooks from "../Hooks";

const MainPage2 = () => {
  const { data, loading, error } = Hooks("topstories/v2/world.json?api-key=");
  return (
    <div className="ml-48 lg:ml-10 pt-8 mr-52 lg:mr-10 whitespace-nowrap">
      {loading && <div>Loading...</div>}
      {error && <div>Error:{error}</div>}

      <div className="uppercase ">
        <p className="border-t-2 lg:hidden block"></p>
        {data?.results?.[4]?.kicker === "" ? data?.results?.[4]?.kicker : ""}
      </div>

      <div className="grid grid-cols-5 lg:grid-cols-1 pb-8 pt-4 lg:border-b-2 lg:border-t-2">
        {/* grid 1 */}
        <div className="border-r-2 pr-[25px] lg:border-b-2 lg:pb-[20px] lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[4]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[4]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden lg:pt-4 lg:justify-center">
            {data?.results?.[4]?.abstract}
          </p>
        </div>

        {/* grid 2 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[5]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[5]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden lg:pt-4">
            {data?.results?.[5]?.abstract}
          </p>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[6]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[6]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden lg:pt-4">
            {data?.results?.[6]?.abstract}
          </p>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[7]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[7]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden lg:pt-4">
            {data?.results?.[7]?.abstract}
          </p>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px] lg:pl-0 lg:py-[30px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[8]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[8]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden lg:pt-4">
            {data?.results?.[8]?.abstract}
          </p>
        </div>
      </div>

      <div className="border-b-2"></div>

      {/* Second Row */}

      <div className="grid grid-cols-5 lg:grid-cols-1 pt-8 pb-12">
        {/* grid 1 */}
        <div className="border-r-2 pr-[25px] lg:border-b-2 lg:pb-[20px] lg:border-r-0">
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
          <p className="text-wrap lg:block hidden">
            {data?.results?.[9]?.abstract}
          </p>
        </div>

        {/* grid 2 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[10]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[10]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[10]?.abstract}
          </p>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[11]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[11]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[11]?.abstract}
          </p>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[12]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[12]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[12]?.abstract}
          </p>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px] lg:pl-0 lg:py-[30px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[13]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[13]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[13]?.abstract}
          </p>
        </div>
      </div>
      <div className="border-b-2 border-black "></div>

      {/* DISPATCHES SECTION  */}

      <div className="flex flex-row justify-between">
      <a className="text-xl font-sans font-extrabold " href="https://www.nytimes.com/spotlight/dispatches-international">Dispatches</a>
      <a href="https://www.nytimes.com/spotlight/dispatches-international">More in Dispatches ›</a>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-1 pt-4 pb-12">
        {/* grid 1 */}
      <div className="border-r-2 pr-[25px] lg:border-b-2 lg:pb-[20px] lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[14]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="https://www.nytimes.com/2024/03/22/world/americas/venezuela-election-corina-yoris.html">
              {data?.results?.[14]?.title}
            </a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[14]?.abstract}
          </p>
        </div>
                {/* grid 2 */}

                <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[15]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[15]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[15]?.abstract}
          </p>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[16]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[16]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[16]?.abstract}
          </p>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[17]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[17]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[17]?.abstract}
          </p>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px] lg:pl-0 lg:py-[30px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[18]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[18]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[18]?.abstract}
          </p>
        </div>
      </div>
      <div className="border-b-2 border-black "></div>

       {/* Saturday Profile  */}
       <div className="flex flex-row justify-between">
      <a className="text-xl font-sans font-extrabold " href="https://www.nytimes.com/column/the-saturday-profile">The Saturday Profile</a>
      <a href="https://www.nytimes.com/column/the-saturday-profile">More in The Saturday Profile ›</a>
      </div>

      <div className="grid grid-cols-5 lg:grid-cols-1 pt-4 pb-12">
        {/* grid 1 */}
      <div className="border-r-2 pr-[25px] lg:border-b-2 lg:pb-[20px] lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[19]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="https://www.nytimes.com/2024/03/22/world/americas/venezuela-election-corina-yoris.html">
              {data?.results?.[19]?.title}
            </a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[19]?.abstract}
          </p>
        </div>
                {/* grid 2 */}

                <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[20]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[20]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[20]?.abstract}
          </p>
        </div>

        {/* grid 3 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[21]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[21]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[21]?.abstract}
          </p>
        </div>

        {/* grid 4 */}

        <div className="px-[25px] lg:px-0 lg:py-[30px] border-r-2 lg:border-b-2 lg:border-r-0">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[22]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[22]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[22]?.abstract}
          </p>
        </div>

        {/* grid 5 */}

        <div className="pl-[25px] lg:pl-0 lg:py-[30px]">
          <img
            className="w-[240px] h-[200px]"
            src={data?.results?.[23]?.multimedia?.[0]?.url ?? ""}
            alt="article"
          />
          <h3 className="font-bold text-wrap hover:underline">
            <a href="/">{data?.results?.[23]?.title}</a>
          </h3>
          <p className="text-wrap lg:block hidden">
            {data?.results?.[23]?.abstract}
          </p>
        </div>
      </div>
        
        
        
      </div>
  );
};
export default MainPage2;
