import { useParams } from 'react-router-dom';

const TicketDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Ticket #{id}</h3>
      <div className="bg-white p-4 shadow rounded">
        <p><strong>From:</strong> customer@example.com</p>
        <p><strong>Message:</strong> How much does your product cost?</p>
        <textarea className="w-full mt-4 p-2 border rounded" placeholder="Type a reply..." rows={4} />
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Send Reply</button>
      </div>
    </div>
  );
};

export default TicketDetails;