import './Card.css';
import { deleteReservation } from './fetchCalls';

const Card = ({ name, date, time, number, id }) => {
    return (
      <div className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>{number}</p>
        <button onClick={()=>{deleteReservation(id)}}>Cancel Reservation</button>
      </div>
    )
  }
  export default Card;