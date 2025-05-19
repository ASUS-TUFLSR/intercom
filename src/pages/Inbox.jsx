import { Link } from 'react-router-dom';

const Inbox = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">Inbox</h3>
    <div className="space-y-2">
      {[1, 2, 3].map(id => (
        <Link
          key={id}
          to={`/ticket/${id}`}
          className="block p-4 bg-white shadow rounded hover:bg-gray-100"
        >
          Ticket #{id} — Customer inquiry about pricing.
        </Link>
      ))}
    </div>
  </div>
);

export default Inbox;