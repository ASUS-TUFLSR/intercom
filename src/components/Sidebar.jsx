import { Link } from 'react-router-dom';
import { Home, MessageCircle, FileText } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
    <h1 className="text-2xl font-bold mb-8">Admin</h1>
    <Link to="/" className="mb-4 flex items-center gap-2 hover:text-blue-500">
      <Home size={20} /> Dashboard
    </Link>
    <Link to="/inbox" className="mb-4 flex items-center gap-2 hover:text-blue-500">
      <MessageCircle size={20} /> Inbox
    </Link>
    <Link to="/kb" className="flex items-center gap-2 hover:text-blue-500">
      <FileText size={20} /> Knowledge Base
    </Link>
  </div>
);

export default Sidebar;

