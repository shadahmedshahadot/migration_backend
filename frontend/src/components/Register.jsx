import React, { useState } from 'react';
import { toast } from 'sonner';

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const sendingData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const res = await fetch('http://localhost:9000/api/auth/user/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendingData),
    });

    const data = await res.json();
    if(data?.success){
      toast.success(data?.message)
    }else{
      toast.error(data?.message)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h2>
        <form onSubmit={onSubmitHandler}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left mb-2 text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left mb-2 text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-left mb-2 text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full text-left px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
