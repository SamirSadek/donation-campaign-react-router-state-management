const Banner = () => {
  return (
    <div className="relative  md:h-[400px] mx-auto text-center bg-cover bg-no-repeat">
      <div
        className="absolute inset-0 bg-[url(/Donate.png)] bg-no-repeat bg-cover opacity-20"
        style={{
          
          backgroundImage: `url(/Donate.png)`,
        }}
      ></div>
      <div className="relative">
        <h1 className="text-2xl md:text-5xl pt-10 md:pt-32">I Grow By Helping People In Need</h1>
        <div className="w-2/3 mx-auto md:w-max  mt-5 flex md:mt-10 pb-10">
          <input
            className="p-2 md:p-4 w-[470px] border border-[#DEDEDE] rounded-s-lg"
            type="search"
            name=""
            id=""
            placeholder="Search here...."
          />
          <button className="p-2 md:py-4 md:px-7 bg-[#FF444A] text-white text-base rounded-e-lg border border-[#FF444A]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;