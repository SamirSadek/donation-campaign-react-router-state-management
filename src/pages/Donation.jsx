import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";
import DonationCard from "../components/DonationCard";

const Donation = () => {
    const [donates , setDonates] = useState([])
    const [datalength, setDatalength] = useState(4);
    const donations = useLoaderData();
    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        
        if(donations.length >0 ){
            const donated = donations.filter(donation => storedDonationIds.includes(donation.id))

            setDonates(donated)
        }
    },[donations])
    return (
       
        <div className="w-4/5 mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
                
                {
                    donates.slice(0, datalength).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
            <div className={`${datalength === donates.length && 'hidden'} card-actions justify-center`}>
            <button onClick={()=>setDatalength(donates.length)} className="btn my-5 bg-orange-300 hover:bg-orange-500 border-orange-800 text-black">
              See All
            </button>
          </div>
        </div>
    );
};

export default Donation;