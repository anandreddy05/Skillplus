import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (token stored in localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true); // Set user as authenticated
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 p-5">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">
            <img src="Logo.png" className="w-20 rounded-full" alt="logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="bg-gray-200 rounded-full px-10 py-3 hidden md:flex">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-blue-800 font-serif">Home</Link></li>
            <li><Link to="/features" className="hover:text-blue-800 font-serif">Features</Link></li>
            {user && <li><Link to="/dashboard" className="hover:text-blue-800 font-serif">Dashboard</Link></li>}
            <li><Link to="/community" className="hover:text-blue-800 font-serif">Community</Link></li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 shadow-lg text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 font-serif cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-cyan-500 shadow-lg text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-serif cursor-pointer">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-indigo-500 shadow-lg text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 font-serif cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
