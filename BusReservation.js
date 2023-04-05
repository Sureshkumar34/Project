import React, { useState } from 'react';
import './BusReservation.css'
const buses = [
  {
    id: 1,
    name: 'Volvo AC seater',
    capacity: 42,
    price: 900
  },
  {
    id: 2,
    name: 'Non-AC Seater',
    capacity: 42,
    price: 700
  },
  {
    id: 3,
    name: ' AC Sleeper',
    capacity: 42,
    price: 1400
  }

  
];

function BusReservationApp() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [passengerName, setPassengerName] = useState('');
  const [passengerCount, setPassengerCount] = useState(0);
  const [totalFare, setTotalFare] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState('');
  const [destinationPoint, setDestinationPoint] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const handleBusSelected = (bus) => {
    setSelectedBus(bus);
    setPassengerCount(0);
    setTotalFare(0);
  }

  const handlePassengerNameChange = (event) => {
    setPassengerName(event.target.value);
  }

  const handlePassengerCountChange = (event) => {
    const count = parseInt(event.target.value);
    setPassengerCount(count);
    setTotalFare(count * selectedBus.price);
  }
  const handleBoardingPointChange = (event) => {
    setBoardingPoint(event.target.value);
  }
  const handleDestinationPointChange = (event) => {
    setDestinationPoint(event.target.value);
  }
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      bus: selectedBus.name,
      passengers: passengerCount,
      passengerName: passengerName,
      fare: totalFare,
      boardingPoint: boardingPoint,
      destinationPoint: destinationPoint
    };
    setReservations([...reservations, reservation]);
    setSelectedBus(null);
    setPassengerName('');
    setPassengerCount(0);
    setTotalFare(0);
    setBoardingPoint('');
    setDestinationPoint('');
  }

  return (
    <div>
      <h1>Bus Reservation App</h1>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            <button onClick={() => handleBusSelected(bus)}>{bus.name}</button>
          </li>
        ))}
      </ul>
      {selectedBus && (
        <form onSubmit={handleSubmit}>
          <h2>{selectedBus.name} ({selectedBus.capacity} seats, {selectedBus.price} Rs)</h2>
          <label>
            Boarding Point:
            <select value={selectedOption} onChange={handleChange} value={boardingPoint} onChange={handleBoardingPointChange} style={{width:'250px',height:'35px'}}>
            Select an option:
            <option value="--BOARDING CITY NAME--">--BOARDING CITY NAME--</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Mangaluru">Mangaluru</option>
            <option value="Mysuru">Mysuru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Tirupati">Tirupati</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kancheepuram">Kancheepuram</option>
            <option value="Karur">Karur</option>
            <option value="Kanniyakumari">Kanniyakumari</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukottai">Pudukottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="Sivagangai">Sivagangai</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thiruvallur">Thiruvallur</option>
            <option value="Thiruvarur">Thiruvarur</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Thrichirappalli">Thrichirappalli</option>
            <option value="Thirunelveli">Thirunelveli</option>
            <option value="Tirupathur">Tirupathur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="Udagamandalam (Ootacamund)">Udagamandalam (Ootacamund)</option>
            <option value="Vellore">Vellore</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
          </select>
        </label>
           <br />
          <label>
            Destination Point:
            <select value={selectedOption} onChange={handleChange1} value={destinationPoint} onChange={handleDestinationPointChange} style={{width:'250px',height:'35px'}}>
            Select an option:
            <option value="--DESTINATION CITY NAME--">--DESTINATION CITY NAME--</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Mangaluru">Mangaluru</option>
            <option value="Mysuru">Mysuru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Tirupati">Tirupati</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kancheepuram">Kancheepuram</option>
            <option value="Karur">Karur</option>
            <option value="Kanniyakumari">Kanniyakumari</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukottai">Pudukottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="Sivagangai">Sivagangai</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thiruvallur">Thiruvallur</option>
            <option value="Thiruvarur">Thiruvarur</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Thrichirappalli">Thrichirappalli</option>
            <option value="Thirunelveli">Thirunelveli</option>
            <option value="Tirupathur">Tirupathur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="Udagamandalam (Ootacamund)">Udagamandalam (Ootacamund)</option>
            <option value="Vellore">Vellore</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
          </select>
          </label>
          <br />
          
          <label>
            Passenger name:
            <input type="text"  value={passengerName} onChange={handlePassengerNameChange} required />
          </label>
          <br />
          <label>
            Number of passengers:
            <input type="number" min="1" max={selectedBus.capacity} value={passengerCount} onChange={handlePassengerCountChange} required />
          </label>
          <br />
          <p>Total fare: {totalFare} Rs</p>
          <button type="submit">Submit</button>
        </form>
      )}
      <div className='container'>
      <h2>Passenger Details</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            <p>Bus: {reservation.bus}</p>
            <p>Boarding: {reservation.boardingPoint}</p>
            <p>Destination: {reservation.destinationPoint}</p>
            <p>Passengers: {reservation.passengers}</p>
            <p>Passenger Name: {reservation.passengerName}</p>
            <p>Fare: {reservation.fare} Rs</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default BusReservationApp;
