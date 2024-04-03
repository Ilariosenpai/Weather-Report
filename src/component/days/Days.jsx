import React, { useState } from 'react'

function Days() {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(today);

  const getNextFiveDays = () => {
    let nextFiveDays = [];
    for (let i = 0; i < 5; i++) {
      nextFiveDays.push((today + i) % 7);
    }
    return nextFiveDays;
  }

  return (
    <div className="card-action">
      {getNextFiveDays().map((dayIndex, index) => (
        <a href="#" key={index} style={{fontWeight: selectedDay === dayIndex ? "bold" : "normal"}} onClick={() => setSelectedDay(dayIndex)}>
          {days[dayIndex]}
        </a>
      ))}
    </div>
  )
}

export default Days