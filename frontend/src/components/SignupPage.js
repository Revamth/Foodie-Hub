import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      localStorage.setItem("auth", "true");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10 relative overflow-hidden mt-[-10px]">
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-teal-500 to-teal-300 opacity-40 rounded-lg"
        style={{
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full relative z-10 scale-90 mt-10">
        <div className="w-1/2 p-12 bg-white">
          <h1 className="text-6xl font-black mb-10 text-gray-800">Sign Up</h1>
          <p className="text-lg text-gray-600">
            Create an account to access all features.
          </p>
          <div className="mt-8 text-left">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-teal-500 hover:underline font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 relative flex items-center justify-center p-12">
          <form
            className="w-full space-y-8 relative z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-lg text-gray-400 mb-3">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg focus:outline-none focus:border-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-3">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg focus:outline-none focus:border-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-3">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg focus:outline-none focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg text-gray-400 mb-3">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg focus:outline-none focus:border-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <motion.input
              type="submit"
              value="Sign Up"
              className="w-full py-3 bg-teal-500 text-white font-bold rounded-xl cursor-pointer text-lg shadow-lg hover:bg-teal-600 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
