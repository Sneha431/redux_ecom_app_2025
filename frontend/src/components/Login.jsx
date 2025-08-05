const Login = () => {
  return (
    <div className="container w-1/3 mt-6 mx-auto mb-7 py-8 px-4 md:px-16 lg:px-24 rounded-sm shadow-md border border-gray-300 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
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

        {/* Remember Me & Forgot Password */}
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>

      {/* Sign Up Section */}
      <div className="text-center">
        <span className="text-gray-700">Don't have an account? </span>
        <button className="text-red-800">Sign Up</button>
      </div>
    </div>
  );
};
export default Login;