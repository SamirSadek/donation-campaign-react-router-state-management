import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {id, picture, card_bg, title, category, category_bg, text_button_bg } =
    card;
  console.log(card_bg);
  return (
    <Link to={`/donation/${id}`}>
      <div className={`card ${card_bg} `}>
        <figure>
          <img className="w-full  h-48" src={picture} alt="car!" />
        </figure>
        <div className="card-body">
          <div className={`${text_button_bg}`}>
            <h2 className={`${category_bg} w-20 rounded px-2`}>{category}</h2>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
