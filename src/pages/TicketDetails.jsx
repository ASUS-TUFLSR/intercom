import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

const TicketDetails = () => {
  const { id } = useParams();
  const [reply, setReply] = useState('');
  const [summary, setSummary] = useState('');
  const [messageHistory, setMessageHistory] = useState([
    {
      sender: 'customer',
      text: 'How much does your product cost?'
    },
    {
      sender: 'agent',
      text: 'Thanks for reaching out! We offer flexible pricing based on usage.'
    }
  ]);

  const handleSummarize = async () => {
    try {
      const combinedText = messageHistory.map(m => m.text).join(' ');
      const response = await fetch('http://localhost:5000/api/gemini/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: combinedText }),
      });
      const data = await response.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        setSummary('Failed to get summary');
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary('Error generating summary');
    }
  };
  

  const handleSend = () => {
    if (!reply.trim()) return;
    setMessageHistory([...messageHistory, { sender: 'agent', text: reply }]);
    setReply('');
  };

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4">Ticket #{id}</h3>
      <div className="bg-white p-4 shadow rounded space-y-4">
        <div className="space-y-3 max-h-[300px] overflow-y-auto border-b pb-4">
          {messageHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded max-w-[70%] ${
                msg.sender === 'agent' ? 'bg-blue-100 ml-auto text-right' : 'bg-gray-100'
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        {summary && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
            <strong>AI Summary:</strong> {summary}
          </div>
        )}

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Type a reply..."
          rows={3}
          value={reply}
          onChange={e => setReply(e.target.value)}
        />

        <div className="flex gap-2 justify-end">
          <button
            onClick={handleSummarize}
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded flex items-center gap-1"
          >
            <Sparkles size={16} /> Summarize
          </button>
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1"
          >
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
