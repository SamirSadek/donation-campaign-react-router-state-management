import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../utility/localstorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  console.log(donation);
  const notify = () => {
    saveDonation(idInt);
    toast("Thanks For Your Donation!");
  };

  return (
    <div className="w-4/5 mx-auto  ">
      <div className="relative">
        <img src={donation.picture} alt="Image" className="w-full h-[550px] rounded" />
        <div className="absolute inset-x-0 bottom-0 h-1/5 bg-black opacity-50"></div>
        <button onClick={notify} style={{backgroundColor:donation.text_button_bg}} className="absolute bottom-8 left-8 bg-blue-500 text-white px-4 py-2 rounded-lg"> Donate  ${donation.price}</button>
      </div>
      <div className="mt-9">
        <h1 className="text-[40px] font-bold my-4">{donation.title}</h1>
        <p className="text-base font-normal mb-20">{donation.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
