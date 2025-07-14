import './LabRequests.css';

const requests = [
  {
    request: 'DNA Test',
    urgency: 'Urgent',
    orderDate: '4/12/2023',
  },
  {
    request: 'Litmus Paper Test',
    urgency: 'Urgent',
    orderDate: '4/12/2023',
  },
  {
    request: 'Lead Reaction Test',
    urgency: 'Urgent',
    orderDate: '4/12/2023',
  },
];

export default function LabRequests() {
  return (
    <div className="lab-requests-container">
      <div className="lab-requests-tabs">
        <a href="#" className="lab-requests-tab active">Pending</a>
        <a href="#" className="lab-requests-tab">Active</a>
        <a href="#" className="lab-requests-tab">Completed</a>
        <a href="#" className="lab-requests-tab">Rejected</a>
      </div>
      <table className="lab-requests-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Request</th>
            <th>Urgency</th>
            <th>Order date</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>
                <span className="file-icon" role="img" aria-label="file">📄</span>
                {req.request}
              </td>
              <td>{req.urgency}</td>
              <td>{req.orderDate}</td>
              <td><button className="view-notes-btn">View notes</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
