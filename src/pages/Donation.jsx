import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [datalength, setDatalength] = useState(4);
  const [noFound, setNoFound] = useState(false);
  const donations = useLoaderData();
  useEffect(() => {
    const storedDonationIds = getStoredDonation();

    if (donations.length > 0) {
      const donated = donations.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );

      setDonates(donated);
      
    }
    if (donates.length > 0) {
        setNoFound(true);
      }
    
  }, [donates.length,donations]);
  
  console.log(noFound);
  console.log(donates.length);
  return (
    <div>
      {!noFound ? 
        <p className="h-[60vh] flex justify-center items-center">
          No Data Found
        </p>
       : 
        <div className="w-4/5 mx-auto mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            {donates.slice(0, datalength).map((donate) => (
              <DonationCard key={donate.id} donate={donate}></DonationCard>
            ))}
          </div>
          <div
            className={`${
              datalength == donates.length && "hidden"
            } card-actions justify-center`}
          >
            {donates.length>4 &&<button
              onClick={() => setDatalength(donates.length)}
              className="btn my-5 bg-[#009444] border-none hover:bg-[#5f8f6e] text-white"
            >
              See All
            </button>}
          </div>
        </div>
      }
    </div>
  );
};

export default Donation;
