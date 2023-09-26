
const Banner = ({ searchIN, setSearchIn }) => {
  

    const handleSubmit = e =>{
      e.preventDefault()
      setSearchIn(e.target.name.value)
      console.log(searchIN,"Data submitted");
      
      
    }
    
    
  
  return (
    <div className="relative  md:h-[700px] mx-auto text-center bg-cover bg-no-repeat">
      <div
        className="absolute inset-0 bg-[url(/Donate.png)] bg-no-repeat bg-cover opacity-20"
        style={{
          backgroundImage: `url(/donation.jpg)`,
        }}
      ></div>
      <div className="relative">
        <h1 className="text-2xl md:text-5xl pt-10 md:pt-72 font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="w-2/3 mx-auto md:w-max  mt-5 flex md:mt-10 pb-10">
          <form onSubmit={handleSubmit}>
            <input 
              className="p-2 md:p-4 md:w-[470px] border border-[#DEDEDE] rounded-s-lg"
              type="search"
              name="name"
              id=""
              placeholder="Search by Category...."
            />
            <button className="p-2 md:py-4 md:px-7 bg-[#FF444A] text-white text-base rounded-e-lg border border-[#FF444A">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
