const Dashboard = () => (
    <div>
      <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">Tickets: 42</div>
        <div className="bg-green-100 p-4 rounded shadow">Agents Online: 5</div>
        <div className="bg-yellow-100 p-4 rounded shadow">Open Chats: 10</div>
      </div>
    </div>
  );
  
  export default Dashboard;