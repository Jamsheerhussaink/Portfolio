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

        {/* Rest of your Contact component stays unchanged */}
      </div>
    </section>
  );
};

export default Contact;
