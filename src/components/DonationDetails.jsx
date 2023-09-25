import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  console.log(donation);

  return (
    <div className="w-4/5 mx-auto  ">
      <div className="relative m-10  bg-base-100 shadow-xl image-full">
        <figure>
          <img
           className="h-96 rounded-lg object-cover w-full"
            src={donation.picture}
            alt="Shoes"
          />
          <div className="bg-red-600 ">
            <button className="btn btn-primary absolute bottom-3 left-3">Donate ${donation.price}</button>
          </div>
        </figure>
        
      </div>
      <dir>
        <h1>{donation.title}</h1>
        <p>{donation.description}</p>
      </dir>
    </div>
  );
};

export default DonationDetails;
