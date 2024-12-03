import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const isUser = user === JSON.stringify(inputs);
    if (isUser) {
      window.location.reload();
    }
    localStorage.setItem("user", JSON.stringify(inputs));
    window.location.reload();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-[30%] max-w-md shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Login</h2>
        <form>
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
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="text-white w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
