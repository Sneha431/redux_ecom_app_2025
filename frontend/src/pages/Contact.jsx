import React from "react";
import { useForm } from "react-hook-form";
import {
  FaLinkedinIn,
  FaMobileAlt,
  FaPinterest,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="bg-gray-300 flex flex-col md:flex-row p-10 relative items-center justify-center gap-5 md:gap-0">
      {/* Left Contact Info */}
      <div className="bg-blue-950 w-[350px] md:w-[400px] px-10 py-8 md:py-4 md:max-h-[600px] flex flex-col gap-6 justify-center text-gray-300 mt-3 md:absolute left-35 md:h-[450px] h-[560px]">
        <h1 className="text-3xl font-semibold mb-2 text-gray-300 mt-4">
          Contact Us
        </h1>

        <div>
          <div className="flex gap-3 mt-4 w-full">
            <FaLocationPin className="text-xl mt-1" />
            <p className="w-full break-words">
              4630 West Jefferson Blvd, Unit 1, Fort Wayne, IN 46804, United
              States
            </p>
          </div>

          <div className="flex gap-3 mt-4 w-full">
            <CiMail className="text-xl mt-1" />
            <p className="w-full">support@test.com</p>
          </div>

          <div className="flex gap-3 mt-4 w-full">
            <FaSkype className="text-xl mt-1" />
            <p className="w-full">Sneha@test</p>
          </div>

          <div className="flex gap-3 mt-4 w-full">
            <FaMobileAlt className="text-xl mt-1" />
            <p className="w-full">+1(233)32222</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:mt-8 text-sm justify-center md:items-center md:px-5 text-center">
          {[FaTwitter, FaLinkedinIn, FaYoutube, FaPinterest].map(
            (Icon, index) => (
              <div key={index} className="flex items-center gap-3">
                <Icon className="text-xl" />
                <p>Sneha</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white w-[350px] md:w-4xl px-4 py-7 md:p-8 flex">
        <div className="hidden md:w-1/4 md:block"></div>
        <div className="w-full md:w-3/4 md:px-10">
          <h1 className="text-3xl font-semibold mb-2">Get In Touch</h1>
          <span className="text-slate-500 font-light text-md">
            Feel free to drop us a message!
          </span>
          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700">First Name</label>
                <input
                  type="text"
                  className="px-3 py-2 border border-gray-400 rounded-sm outline-0"
                  placeholder="Enter First Name"
                  {...register("fname", { required: "First name is required" })}
                />
                {errors.fname && (
                  <span className="text-red-500 text-sm">
                    {errors.fname.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="px-3 py-2 border border-gray-400 rounded-sm outline-0"
                  placeholder="Enter Last Name"
                  {...register("lname", { required: "Last name is required" })}
                />
                {errors.lname && (
                  <span className="text-red-500 text-sm">
                    {errors.lname.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email & Contact */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700">Email</label>
                <input
                  type="email"
                  className="px-3 py-2 border border-gray-400 rounded-sm outline-0"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="px-3 py-2 border border-gray-400 rounded-sm outline-0"
                  placeholder="Enter Phone Number"
                  {...register("contact", {
                    required: "Phone number is required",
                    minLength: {
                      value: 7,
                      message: "Phone number too short",
                    },
                  })}
                />
                {errors.contact && (
                  <span className="text-red-500 text-sm">
                    {errors.contact.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-700">What do you have in mind?</label>
              <textarea
                rows="5"
                className="px-3 py-2 border border-gray-400 rounded-sm outline-0"
                placeholder="Type your message here..."
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-sm font-medium text-white py-2 hover:bg-blue-600 transition rounded-4xl w-24"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
