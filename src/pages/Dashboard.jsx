import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import DiscoverEvents from "../components/Discover";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const gradients = [
  "from-pink-400 via-red-500 to-yellow-500",
  "from-purple-400 via-pink-500 to-red-500",
  "from-green-300 via-blue-500 to-purple-600",
  "from-yellow-200 via-green-400 to-green-500",
  "from-indigo-400 via-purple-500 to-pink-500",
  "from-teal-400 via-blue-500 to-indigo-500",
  "from-orange-300 via-red-500 to-pink-500",
  "from-blue-300 via-purple-300 to-pink-300",
];


  const handleRegister = async (eventId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return toast.error("Please log in first");

    try {
      await axios.post(`http://localhost:8080/api/registrations`, {
        userEmail: user.email,
        eventId,
        userId,
      });
      toast.success("Successfully registered!");
    } catch (err) {
      toast.error("Registration failed");
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/events");
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to load events");
    }
  };

  

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
          <div className="bg-[url('/images/timessquare-img.jpg')] bg-no-repeat  bg-cover bg-center inset-0 bg-white/40 h-128 w-full text-center flex items-center justify-center">
            <div className="relative z-10 p-6">
              <h1 className="text-7xl font-bold text-green-950 mb-6">
              Welcome to Eventra
            </h1>
            <p className="text-5xl text-yellow-300 mb-6 font-bold">
             Your gateway to unforgettable events, all in one place.
            </p>
            </div>
            
          </div>
         
      <h1 className=" font-bold text-center text-yellow-600 text-4xl mb-8 pt-3">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {events.map((event, index) => {
    const gradient = gradients[index % gradients.length]; // pick one in round-robin

    return (
      <div
        key={event.id}
        className={`rounded-xl shadow-md p-4 text-white bg-gradient-to-r ${gradient}`}
      >
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        )}
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p className="text-sm">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-sm mb-2">{event.location}</p>
        <p className="text-sm mb-4">
          {event.description.length > 100
            ? `${event.description.slice(0, 100)}...`
            : event.description}
        </p>
        <button
  onClick={() => handleRegister(event.id)}
  className="w-full py-2 rounded-lg text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out border border-white/20 shadow-md"
>
  Register
</button>

      </div>
    );
  })}
</div>

      )}
      <DiscoverEvents/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
