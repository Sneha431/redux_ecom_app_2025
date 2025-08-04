import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            explicabo nisi vel enim ut atque nemo tenetur tempore praesentium
            non, voluptates, eveniet nihil quisquam voluptatum voluptatem.
            Dolorem nisi aliquam et.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li className="">
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <Link to="/" className="hover:text-gray-400">
              <FaFacebook />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <FaGithub />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <FaLinkedin />
            </Link>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2  bg-gray-800 border border-gray-600 rounded-l-lg"
            />
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 E-SHOP ALL RIGHTS RESERVED</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className="hover:underline"> Privacy Policy</Link>
            <Link className="hover:underline">Terms and condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer