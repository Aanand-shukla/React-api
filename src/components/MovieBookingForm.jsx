import React, { useState } from "react";

function MovieBookingForm({ showName }) {
  const [userName, setUserName] = useState("");

  const handleBooking = () => {
    // Handle booking logic here (e.g., store details in local storage)
    console.log(`Movie: ${showName}, User: ${userName}`);
  };

  return (
    <div>
      <h2>Book a Movie Ticket</h2>
      <p>{showName}</p>
      <label htmlFor="userName">Your Name:</label>
      <input
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default MovieBookingForm;
