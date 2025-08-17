import React from "react";
import { Mail, Lock, User } from "lucide-react";

const SignUp = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center px-4 py-10 overflow-auto"
      style={{
        backgroundImage: "url('/bgImages/signup.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md w-full max-w-md p-6 rounded-2xl shadow-xl border border-gray-200 min-h-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/bgImages/tnp_logo.png"
            alt="RGPV Logo"
            className="h-16"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Create your account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Join us and start your journey
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Enrollment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enrollment No.
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter your enrollment"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Minimum 3 characters required
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Use 8+ characters with a mix of letters, numbers & symbols
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 mr-2 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <label className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-red-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-red-600 underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            Create Account
          </button>

          {/* Sign-in */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-red-700 font-medium hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
