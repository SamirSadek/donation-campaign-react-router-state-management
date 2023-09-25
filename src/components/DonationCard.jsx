
const DonationCard = ({donate}) => {
    const {id, picture, card_bg, title, category, price,category_bg, text_button_bg} =donate;
    console.log(donate)
    console.log(title)
    return (
        <div className="flex">
           <div className="w-1/3 ">
            <img className="w-full h-48 rounded-s-lg" src={picture} alt="" />
            </div> 
            <div className="w-2/3 p-5 bg-orange-100  rounded-e-lg">
                <p className="text-sm">{category}</p>
                <h1 className="text-2xl">{title}</h1>
                <p className="text-base">${price}</p>
                <button className="text-lg">View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;