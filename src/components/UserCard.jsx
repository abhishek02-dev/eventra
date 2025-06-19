const UserCard = ({ user ,onDelete ,onView}) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
          src={
            user.avatar ||
            `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`
          }
          alt={user.name}
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="mt-2 text-sm font-medium text-indigo-600">{user.role}</p>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button 
       onClick={() => onView(user)}
        className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-600">
          View
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserCard;
