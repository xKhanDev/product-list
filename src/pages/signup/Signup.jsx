import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(inputs));
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-md w-full lg:w-[30%] mx-auto shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your fullName"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) => {
                setInputs({ ...inputs, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <p
            className="text-sm cursor-pointer text-blue-600"
            onClick={() => navigate("/login")}
          >
            Login here
          </p>
        </p>
      </div>
    </div>
  );
};

export default Signup;
