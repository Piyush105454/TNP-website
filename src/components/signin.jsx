import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import API from "../api/axios";   // 👈 axios instance file

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop refresh
    try {
      const res = await API.post("/auth/signin", { email, password }); 
      console.log("✅ Login Success:", res.data);

      // store token in localStorage (for protected routes later)
      localStorage.setItem("token", res.data.token);

      // redirect (if using React Router)
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("❌ Login Failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/bgImages/signup.jpg')" }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-4">
          <img src="/bgImages/tnp_logo.png" alt="Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>
        <p className="text-gray-500 text-center mb-6">
          Welcome back! Please enter your details
        </p>

        {/* Show error if login fails */}
        {error && <p className="text-red-600 text-center mb-2">{error}</p>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100"
            >
              <FaApple className="w-5 h-5 mr-2" />
              Apple
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-red-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
