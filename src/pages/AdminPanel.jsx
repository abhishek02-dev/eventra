import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const AdminPanel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchPendingEvents();
  }, []);

  const fetchPendingEvents = async () => {
    try {
      const res = await axios.get("https://eventra-backend-hv3i.onrender.com/api/events/pending");
      setEvents(res.data);
    } catch {
      toast.error("Failed to fetch events");
    }
  };

  const handleApproval = async (id, approved) => {
    try {
      await axios.put(`https://eventra-backend-hv3i.onrender.com/api/events/${id}/status`, null, {
        params: { approved },
      });
      toast.success(`Event ${approved ? "approved" : "rejected"}`);
      fetchPendingEvents();
    } catch {
      toast.error("Action failed");
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Event Approvals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-green-100 p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600">{event.description}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleApproval(event.id, true)}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleApproval(event.id, false)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default AdminPanel;
