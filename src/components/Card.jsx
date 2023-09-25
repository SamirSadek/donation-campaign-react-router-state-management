const Card = ({ card }) => {
  const { picture, card_bg,title,category,category_bg,text_button_bg } = card;
  console.log(card_bg);
  return (
    <div className={`card ${card_bg} `}>
      <figure>
        <img 
          className="w-full  h-40"
          src={picture}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <div  className={`${text_button_bg}` }>
        <h2 className={`${category_bg}`}>{category}</h2>
        <p>{title}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
