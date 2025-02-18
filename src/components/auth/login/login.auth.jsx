import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"; // Import icons
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Using environment variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.data?.token;
        const role = data.data?.detail?.role;

        if (!token) {
          throw new Error("Token not found in response");
        }

        // Store token and role in localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", role);

        toast.success("Login successful!", {
          onClose: () => {
            const destination = location.state?.from || `/${role}`;
            navigate(destination);
          },
          autoClose: 2000,
        });
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      console.error("Fetch error:", err);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    id="password"
                    placeholder="******"
                    className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle visibility on button click
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <MdOutlineVisibility className="w-6 h-6 text-gray-900 dark:text-white" /> // Eye open icon
                    ) : (
                      <MdOutlineVisibilityOff className="w-6 h-6 text-gray-900 dark:text-white" /> // Eye closed icon
                    )}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-red-600 font-medium rounded-lg px-5 py-2.5">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default LoginForm;
