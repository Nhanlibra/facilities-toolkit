import React from "react";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="grid grid-cols-6">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="col-span-5 h-screen">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
