const Banner = () => {
  return (
    <div>
      <div className="md:w-4/5 md:h-[400px] mx-auto text-center  bg-[url(/Donate.png)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <h1 className="text-5xl pt-24">I Grow By Helping People In Need</h1>
        <input
          className="p-4 w-[470px] border border-[#DEDEDE] rounded-s-lg"
          type="search"
          name=""
          id=""
          placeholder="Search here...."
        />
        <button className="py-4 px-7 bg-[#FF444A] text-white text-base rounded-e-lg border border-[#FF444A]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
