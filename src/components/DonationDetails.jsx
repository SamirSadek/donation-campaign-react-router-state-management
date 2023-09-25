import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../utility/localstorage";

const DonationDetails = () => {
    
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  console.log(donation);
  const notify = () => {
    saveDonation(idInt)
    toast("Thanks For Your Donation!")
};

  return (
    <div className="w-4/5 mx-auto  ">
      <div className="relative  bg-base-100 shadow-xl image-full">
        <figure>
          <img
           className="h-96 rounded-lg object-cover w-full"
            src={donation.picture}
            alt="Shoes"
          />
          <div className="w-full ">
            <button onClick={notify} className="btn  absolute bottom-3 left-3">Donate ${donation.price}</button>
          </div>
        </figure>
        
      </div>
      <div className="mt-9">
        <h1>{donation.title}</h1>
        <p>{donation.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
