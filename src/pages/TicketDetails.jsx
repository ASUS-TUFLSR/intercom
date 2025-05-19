import { useParams } from 'react-router-dom';
import { useState } from 'react';

const TicketDetails = () => {
  const { id } = useParams();
  const [reply, setReply] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    // Simulate AI summarization
    setSummary('Summary: The customer is inquiring about pricing details.');
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Ticket #{id}</h3>
      <div className="bg-white p-4 shadow rounded space-y-4">
        <div>
          <p><strong>From:</strong> customer@example.com</p>
          <p><strong>Message:</strong> How much does your product cost?</p>
        </div>

        {summary && (
          <div className="bg-gray-100 p-2 rounded border">
            <strong>AI Summary:</strong> {summary}
          </div>
        )}

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Type a reply..."
          rows={4}
          value={reply}
          onChange={e => setReply(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={() => alert('Reply sent!')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Reply
          </button>
          <button
            onClick={handleSummarize}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Summarize Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;