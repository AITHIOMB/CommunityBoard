import './ExpoCard.css';

function ExpoCard({ designer, event, category, image }) {
  return (
    <div className="expo-card">
      <div className="card-image">
        <img src={image} alt={designer} />
        <span className="card-category">{category}</span>
      </div>
      <div className="card-body">
        <h2 className="card-designer">{designer}</h2>
        <h3 className="card-event">{event}</h3>
      </div>
    </div>
  );
}

export default ExpoCard;