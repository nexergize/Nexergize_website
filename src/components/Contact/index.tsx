'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen  from-gray-900 via-gray-800 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side - Title and Description */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Need Any Help?<br />
              <span className="bg-gradient-to-r from-[#D4527A] to-[#A12543] bg-clip-text text-transparent">
                Say hello
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We&apos;re here to turn your ideas into powerful websites, apps, and digital experiences. Our team is ready to guide you every step of the way.
            </p>
          </div>

          {/* Right Side - Quick Contact */}
          <div className="flex justify-end">
            <div className="text-right">
              <div className="inline-block border-b-2 border-[#A12543] pb-2 mb-4">
                <span className="text-[#D4527A] font-semibold text-lg">Quick Contact</span>
              </div>
              <p className="text-white text-xl font-medium">nexergize@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-white font-semibold text-lg mb-2">Email Address</h3>
            <p className="text-gray-400">nexergize@gmail.com</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-white font-semibold text-lg mb-2">Phone Number</h3>
            <p className="text-gray-400">+91 9080063331</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-white font-semibold text-lg mb-2">Office Location</h3>
            <p className="text-gray-400">Vellore, TamilNadu<br />632503</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white font-medium mb-3">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 focus:border-[#A12543] focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 focus:border-[#A12543] focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white font-medium mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 focus:border-[#A12543] focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Type Subject"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 focus:border-[#A12543] focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-medium mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type Message"
                rows={6}
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 focus:border-[#A12543] focus:outline-none transition-colors duration-300 resize-none text-white placeholder-gray-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#A12543] to-[#8B1538] hover:from-[#8B1538] hover:to-[#721229] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#A12543]/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Icons (Optional) */}
        {/* <div className="flex justify-center space-x-6 mt-16 pt-8 border-t border-gray-800">
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#A12543] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
            <span className="text-sm font-bold">f</span>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#A12543] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
            <span className="text-sm font-bold">X</span>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#A12543] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
            <span className="text-sm font-bold">in</span>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#A12543] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
            <span className="text-sm font-bold">Be</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;