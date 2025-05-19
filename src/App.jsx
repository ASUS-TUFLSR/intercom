import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import TicketDetails from './pages/TicketDetails';
import KnowledgeBase from './pages/KnowledgeBase';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-4 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/ticket/:id" element={<TicketDetails />} />
              <Route path="/kb" element={<KnowledgeBase />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;