import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {id, picture, card_bg, title, category, category_bg, text_button_bg } =
    card;
  // console.log(card_bg);
  return (
    <Link to={`/donations/${id}`}>
      <div style={{backgroundColor:card_bg}} className="rounded-lg">
        <figure>
          <img className="w-full rounded-t-lg  h-48 rounded" src={picture} alt="img!" />
        </figure>
        
          <div style={{color:text_button_bg}} className="ml-4">
            <h2 style={{backgroundColor:category_bg}} className="w-20 rounded-lg text-center text-sm font-medium mb-1 mt-4">{category}</h2>
            <p className="pb-4 text-xl font-semibold">{title}</p>
          </div>
        
      </div>
    </Link>
  );
};

export default Card;
