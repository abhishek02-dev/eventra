import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const MyRegistrations = () => {
  const [events, setEvents] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.email) {
      fetchRegisteredEvents();
    }
  }, []);

  const fetchRegisteredEvents = async () => {
    try {
      const res = await axios.get(
        `https://eventra-backend-hv3i.onrender.com/api/registrations/user/${user.userId}`
      );
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch your registrations");
    }
  };
 
  const handleCancel = async (eventId) => {
    try {
      await axios.delete(
        `https://eventra-backend-hv3i.onrender.com/api/registrations/cancel?email=${user.email}&eventId=${eventId}`
      );
      toast.success("Registration cancelled");
      fetchRegisteredEvents(); // refresh
    } catch (err) {
      toast.error("Cancel failed");
    }
  };

  return (
    <>
      <div className="p-6 min-h-screen bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          My Registered Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-600">You have not registered for any events.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                <p className="text-gray-700 text-sm mb-4">
                  {event.description.length > 100
                    ? `${event.description.slice(0, 100)}...`
                    : event.description}
                </p>
                <button
                  onClick={() => handleCancel(event.id)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Cancel Registration
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyRegistrations;
