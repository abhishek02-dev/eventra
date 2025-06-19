import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    price: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "admin") {
      toast.error("Only admins can create events.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/events", {
        ...eventData,
        createdBy: user.email,
      });
      toast.success("Event created successfully!");
      setEventData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        price: "",
      });
    } catch (err) {
      toast.error("Failed to create event");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-200 p-6">
      <div className="max-w-3xl mx-auto p-6 mt-8 bg-yellow-100 shadow rounded-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Event</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventData.title}
            onChange={handleChange}
            className="border p-2 rounded-3xl"
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={eventData.description}
            onChange={handleChange}
            rows={3}
            className="border p-2 rounded-2xl"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="border p-2 rounded-2xl"
              required
            />
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="border p-2 rounded-2xl"
              required
            />
          </div>
          <input
            type="text"
            name="location"
            placeholder="Location / Online Link"
            value={eventData.location}
            onChange={handleChange}
            className="border p-2 rounded-2xl"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Ticket Price"
            value={eventData.price}
            onChange={handleChange}
            className="border p-2 rounded-2xl"
            required
          />
          <button
            type="submit"
            className="bg-red-300 text-blue-950 text-2xl font-bold py-2 rounded-3xl hover:bg-yellow-700 transition"
          >
            Create Event
          </button>
        </form>
      </div>
      </div>
    
  );
};

export default CreateEvent;
