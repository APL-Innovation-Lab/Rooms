import React, { useState } from 'react';
import Reservation from './Reservation'; // Import the Reservation component
import data from './data.json';

function RoomReservationPage() {
  const [reservations, setReservations] = useState(data);

  return (
    <div>
      <h1>Room Reservations</h1>
      {reservations.map((reservation, index) => (
        <Reservation key={index} reservation={reservation} />
        // Use the Reservation component to render each reservation
      ))}
    </div>
  );
}

export default RoomReservationPage;
