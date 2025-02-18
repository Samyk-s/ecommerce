import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const API_BASE_URL = "http://localhost:9005/api/v1";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    role: "customer",
    address: "",
    gender: "",
    telephone: "",
    profileImage: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Registration successful!", {
          onClose: () => navigate("/verify-email"),
          autoClose: 2000,
        });
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      console.error("Fetch error:", err);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border rounded" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded" />
              <input type="password" name="passwordConfirmation" placeholder="Confirm Password" value={formData.passwordConfirmation} onChange={handleChange} required className="w-full p-2 border rounded" />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded" />
              <div>
                <label className="block text-sm font-medium dark:text-white">Gender</label>
                <div className="flex gap-4 dark:text-white">
                  <label><input type="radio" name="gender" value="male" onChange={handleChange} required /> Male</label>
                  <label><input type="radio" name="gender" value="female" onChange={handleChange} required /> Female</label>
                  <label><input type="radio" name="gender" value="other" onChange={handleChange} required /> Other</label>
                </div>
              </div>
              <select name="role" value={formData.role} onChange={handleChange} required className="w-full p-2 border rounded">
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
              <input type="text" name="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} required className="w-full p-2 border rounded" />
              <input type="file" name="profileImage" accept="image/*" onChange={handleChange} required className="w-full p-2 border rounded dark:text-white" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default RegisterForm;
