import './LabCards.css';
import labImage from '../assets/lab_1.jpg';

const cards = [
  {
    img: labImage,
    institute: 'AAU',
    name: 'African Union Chemical Lab',
    rating: 4.94,
    reviews: 233,
    price: '13,000 Birr / Guest',
  },
  {
    img: labImage,
    institute: 'AAU',
    name: 'African Union Chemical Lab',
    rating: 4.94,
    reviews: 233,
    price: '13,000 Birr / Guest',
  },
  {
    img: labImage,
    institute: 'AAU',
    name: 'African Union Chemical Lab',
    rating: 4.94,
    reviews: 233,
    price: '13,000 Birr / Guest',
  },
];

export default function LabCards() {
  return (
    <div className="lab-cards-grid">
      {cards.map((card, i) => (
        <div className="lab-card-hz" key={i}>
          <img className="lab-card-img-hz" src={card.img} alt="Lab" />
          <div className="lab-card-content-hz">
            <div className="lab-card-institute-hz">{card.institute}</div>
            <div className="lab-card-title-hz">{card.name}</div>
            <div className="lab-card-separator-hz" />
            <div className="lab-card-meta-hz">
              <span className="lab-card-rating-hz">
                <span className="lab-card-star-hz">★</span> {card.rating}
                <span className="lab-card-reviews-hz"> ({card.reviews} reviews)</span>
              </span>
              <span className="lab-card-price-hz">{card.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}