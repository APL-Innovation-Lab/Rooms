
function Reservation({ reservation }) {
  console.log(reservation);
  
  return (
    <div className="reservation">
      <h2>{reservation.mtitle}</h2>
      <p>Start: {reservation.start}</p>
      <p>End: {reservation.end}</p>
      <p>Location: {reservation.mlocation}</p>
    </div>
  );
}


export default Reservation;
