import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UserCard from "./UserCard";

export default function UserGrid() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://eventra-backend-hv3i.onrender.com/auth/users");
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

const handleView = async (user) => {
  try {
    const res = await axios.get(
      `https://eventra-backend-hv3i.onrender.com/registrations/user/${user.id}`
    );
    setSelectedUser(user);
    setRegistrations(res.data);
    setShowModal(true);
  } catch (err) {
    toast.error("Failed to load registrations");
  }
};


 const handleDelete = async (id) => {
  try {
    await axios.delete(`https://eventra-backend-hv3i.onrender.com/auth/users/${id}`);
    toast.success("User deleted successfully");
    setUsers(users.filter((u) => u.id !== id));
  } catch (err) {
    toast.error("Failed to delete user");
  }
};


  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">All Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user, index) => (
  <UserCard key={index} user={user} onDelete={handleDelete} onView={handleView}/>
))}

      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Registrations for {selectedUser?.name}
      </h2>
      {registrations.length === 0 ? (
        <p className="text-gray-500">No registrations found.</p>
      ) : (
        <ul className="space-y-2">
          {registrations.map((reg, index) => (
            <li
              key={index}
              className="p-3 border rounded-md shadow-sm bg-gray-50"
            >
              <p className="text-sm font-medium text-gray-700">{reg.eventName}</p>
              <p className="text-xs text-gray-500">{reg.date}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShowModal(false)}
        className="mt-4 bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-800"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}
