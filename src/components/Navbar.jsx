import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow px-4 py-3 md:px-8">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() =>
            navigate(user?.role === "admin" ? "/admin" : user ? "/dashboard" : "/")
          }
        >
          <span className="text-sky-400">E</span>
          <span className="text-blue-500">V</span>
          <span className="text-indigo-400">E</span>
          <span className="text-violet-400">N</span>
          <span className="text-purple-500">T</span>
          <span className="text-fuchsia-500">R</span>
          <span className="text-pink-400">A</span>
        </h1>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/dashboard" className="hover:underline text-gray-700">
            Events
          </Link>

          {user?.role === "user" && (
            <>
            {/* <Link to="/myregistrations" className="hover:underline text-gray-700">
              My Registrations
            </Link> */}
            <Link to="/create-event" className="hover:underline text-gray-700">
                Create
              </Link>
              </>

          )}

          {user?.role === "admin" && (
            <>
              <Link to="/admin" className="hover:underline text-gray-700">
                Manage Events
              </Link>
              <Link to="/users" className="hover:underline text-gray-700">
                Users
              </Link>
              <Link to="/reports" className="hover:underline text-gray-700">
                Reports
              </Link>
              <Link to="/create-event" className="hover:underline text-gray-700">
                Create
              </Link>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="hover:underline text-gray-700">
                Login
              </Link>
              <Link to="/register" className="hover:underline text-gray-700">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-gray-700">Hello, {user.username || user.email}</span>
              <button
                onClick={logout}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden text-sm">
          <Link to="/events" className="hover:underline text-gray-700" onClick={toggleMenu}>
            Events
          </Link>

          {user?.role === "user" && (
            <Link to="/myregistrations" className="hover:underline text-gray-700" onClick={toggleMenu}>
              My Registrations
            </Link>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/admin" className="hover:underline text-gray-700" onClick={toggleMenu}>
                Manage Events
              </Link>
              <Link to="/users" className="hover:underline text-gray-700" onClick={toggleMenu}>
                Users
              </Link>
              <Link to="/reports" className="hover:underline text-gray-700" onClick={toggleMenu}>
                Reports
              </Link>
            </>
          )}

          {!user && (
            <>
              <Link to="/login" className="hover:underline text-gray-700" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/register" className="hover:underline text-gray-700" onClick={toggleMenu}>
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-gray-700">Hello, {user.username || user.email}</span>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
