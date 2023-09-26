import { useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
  const [searchIN, setSearchIn] = useState(null);
  return (
   
    <div>
      <Banner searchIN={searchIN} setSearchIn={setSearchIn}></Banner>
      <Cards searchIN={searchIN}></Cards>
    </div>
  );
};

export default Home;
