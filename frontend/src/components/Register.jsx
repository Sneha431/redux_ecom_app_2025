import React from 'react'

const Register = () => {
  return (
    <div className="container w-1/3 mt-6 mx-auto mb-7 py-8 px-4 md:px-16 lg:px-24 rounded-sm shadow-md border border-gray-300 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>

      {/* Sign Up Section */}
      <div className="text-center">
        <span className="text-gray-700">Already have an account? </span>
        <button className="text-red-800">Sign In</button>
      </div>
    </div>
  );
}

export default Register