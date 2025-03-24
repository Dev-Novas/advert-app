import React from "react";
import Laptop from "../../assets/pics/laptop-2.mp4"

const Login = () => {
  return <div className="relative w-full h-screen overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={Laptop} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative flex flex-col items-center justify-center h-full text-white ">
    <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative ">
      <h1 className="text-2xl font-semibold text-center mb-6">Log In</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Log In
        </button>

        <p className="text-sm text-center text-white">
          No account yet?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
    </div>
  </div>  
};

export default Login;
