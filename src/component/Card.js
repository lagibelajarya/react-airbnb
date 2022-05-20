
import ionIcon from './ionIcon';

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Card__box">
        <img src={props.img} className="Card__box-img" />
        <div className="Card__box-rating">
          {ionIcon('star', 'icon-star')}
          <span>{props.star}</span>
          <span>(6) &middot; </span>
          <span>{props.country}</span>
        </div>
        <div className="Card__box-info">
          <p>Life lessons with {props.name} </p>
          <p>
            <span>From {props.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}
