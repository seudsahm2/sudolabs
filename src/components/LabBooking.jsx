import './LabBooking.css';
import userIcon from '../assets/person-circle.svg';
import labImage from '../assets/lab_1.jpg';

const bookings = [
  {
    requester: 'Leul Solomon',
    lab: {
      img: labImage,
      institute: 'AAU',
      name: 'African Union Chemical Lab',
    },
    orderDate: '4/12/2023',
    checkIn: {
      time: '7:00AM - 3:30AM',
      date: '3/14/2023',
    },
    checkOut: {
      time: '7:00AM - 3:30AM',
      date: '3/15/2023',
    },
  },
  // Add more rows as needed
  {
    requester: 'Leul Solomon',
    lab: {
      img: labImage,
      institute: 'AAU',
      name: 'African Union Chemical Lab',
    },
    orderDate: '4/12/2023',
    checkIn: {
      time: '7:00AM - 3:30AM',
      date: '3/14/2023',
    },
    checkOut: {
      time: '7:00AM - 3:30AM',
      date: '3/15/2023',
    },
  },
];

function LabBookingLabCell({ lab }) {
  return (
    <div className="lab-booking-lab-cell">
      <img className="lab-booking-lab-img" src={lab.img} alt="Lab" />
      <div className="lab-booking-lab-content">
        <div className="lab-booking-lab-institute">{lab.institute}</div>
        <div className="lab-booking-lab-title">{lab.name}</div>
        <div className="lab-booking-underline" />
      </div>
    </div>
  );
}

export default function LabBooking() {
  return (
    <div className="lab-booking-container">
      <div className="lab-booking-tabs">
        <a href="#" className="lab-booking-tab active">Pending</a>
        <a href="#" className="lab-booking-tab">Active</a>
        <a href="#" className="lab-booking-tab">Completed</a>
        <a href="#" className="lab-booking-tab">Rejected</a>
      </div>
      <table className="lab-booking-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Requester</th>
            <th>Lab</th>
            <th>Order date</th>
            <th>Check in</th>
            <th>Check out</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((row, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>
                <span className="lab-booking-user-icon">
                  <img src={userIcon} alt="user" />
                </span>
                <span className="lab-booking-user-name">{row.requester}</span>
                <div className="lab-booking-underline" />
              </td>
              <td>
                <LabBookingLabCell lab={row.lab} />
              </td>
              <td>
                {row.orderDate}
                <div className="lab-booking-underline" />
              </td>
              <td>
                <div>{row.checkIn.time}</div>
                <div>{row.checkIn.date}</div>
                <div className="lab-booking-underline" />
              </td>
              <td>
                <div>{row.checkOut.time}</div>
                <div>{row.checkOut.date}</div>
                <div className="lab-booking-underline" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
