import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link here
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-10 relative overflow-hidden"
      style={{ marginTop: "-10px" }}
    >
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-40 rounded-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full relative z-10 scale-110">
        <div className="w-1/2 p-12 bg-white">
          <h1 className="text-6xl font-black mb-10 text-gray-800">Login</h1>
          <p className="text-lg text-gray-600">
            By logging in, you agree to the ridiculously long terms that you
            didn't bother to read.
          </p>
          <div className="mt-5 text-left">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-gray-900 relative flex items-center justify-center p-12">
          <form className="w-full space-y-8" onSubmit={handleLogin}>
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
              value="Login"
              className="w-full py-3 bg-emerald-500 text-white font-bold rounded-xl cursor-pointer text-lg shadow-lg hover:bg-emerald-600 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
