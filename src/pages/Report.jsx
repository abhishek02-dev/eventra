import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

const Report = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/events");
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
    >
      <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
      <p
        className={`mt-2 text-xs font-semibold uppercase ${
          event.status === "approved" ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {event.status}
      </p>
    </div>
  );

  const pendingEvents = events.filter((event) => event.status === "pending");
  const approvedEvents = events.filter((event) => event.status === "approved");

  return (
    <div>
    <div className="min-h-screen bg-blue-100 py-8 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Event Status Report
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : (
        <div className="grid gap-12">
          {/* Pending Events */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              Pending Events ({pendingEvents.length})
            </h2>
            {pendingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingEvents.map(renderEventCard)}
              </div>
            ) : (
              <p className="text-gray-500">No pending events.</p>
            )}
          </div>

          {/* Approved Events */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Approved Events ({approvedEvents.length})
            </h2>
            {approvedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {approvedEvents.map(renderEventCard)}
              </div>
            ) : (
              <p className="text-gray-500">No approved events.</p>
            )}
          </div>
        </div>
      )}
    </div>
          <Footer/>
    </div>
  );
};

export default Report;
