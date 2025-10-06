'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Don&apos;t forget to add your key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new opportunities, collaborations, or just chatting about AI and technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-full text-gray-700"><FaEnvelope /></div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:jamsheer.hussain.k@gmail.com" className="text-gray-800 hover:text-blue-600">
                      jamsheer.hussain.k@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-full text-gray-700"><FaPhone /></div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-800">+91 9037276148</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-full text-gray-700"><FaMapMarkerAlt /></div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-800">Malappuram, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-full text-gray-700"><FaGithub /></div>
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <a
                      href="https://github.com/Jamsheerhussaink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600"
                    >
                      github.com/Jamsheerhussaink
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 p-3 rounded-full text-gray-700"><FaLinkedin /></div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600"
                    >
                      linkedin.com/in/your-profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Box */}
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Let&apos;s Collaborate!</h3>
              <p className="text-sm text-gray-800 mb-3">I&apos;m particularly interested in:</p>
              <ul className="text-sm text-gray-800 list-disc list-inside space-y-1">
                <li>AI research opportunities</li>
                <li>Machine learning internships</li>
                <li>Open source contributions</li>
                <li>Tech discussions and networking</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="w-full p-3 bg-gray-100 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full p-3 bg-gray-100 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 bg-gray-100 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 bg-gray-100 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full p-3 bg-gray-100 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                <FaPaperPlane />
                Send Message
              </button>
              {result && <p className="mt-4 text-center text-gray-600">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
