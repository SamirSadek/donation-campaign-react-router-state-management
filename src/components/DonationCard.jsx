
const DonationCard = ({donate}) => {
    const {id, picture, card_bg, title, category, price,category_bg, text_button_bg} =donate;
    console.log(donate)
    console.log(title)
    return (
        <div style={{backgroundColor:card_bg}} className="flex">
           <div className="w-1/3 ">
            <img className="w-full h-48 rounded-s-lg" src={picture} alt="" />
            </div> 
            <div className="w-2/3 p-5 rounded-e-lg">
                <p style={{color:text_button_bg,backgroundColor:category_bg}}  className="text-sm w-20 text-center rounded mt-2">{category}</p>
                <h1 className="text-2xl mt-2 font-semibold">{title}</h1>
                <p style={{color:text_button_bg}} className="text-base font-semibold mt-2">${price}.00</p>
                <button style={{backgroundColor:text_button_bg}} className="py-1 px-3 mt-4 text-white rounded">View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;