import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dp4n7ra', 'template_sv4llqp', e.target, 'MjhJIJIWEG-6biXUn') // replace 'user_1234567890' with your actual user ID
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!")
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send the message, please try again")
      });
    e.target.reset();
  };

  return (
    <div className="contact-page bg-teal-700 min-h-screen  mt-5 flex flex-wrap justify-center items-center">
      <ContactInfo />
      <EstimateForm sendEmail={sendEmail} />
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info w-full md:w-1/2 px-4 gap-20 mb-8  flex flex-col md:gap-56">
      <div>
        <Toaster />
        <h1 className="text-4xl font-bold text-white mb-4">Let's get in touch</h1>
        <p className="text-white mb-4">
          I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.
        </p>
        <p className="text-white mb-4">Living In: Malikanput, Veerbhanpur, Jaunpur 222109</p>
        <p className="text-white">Call: (+91) 6387427935</p>
      </div>
      <div className="flex flex-row md:gap-10 gap-3  flex-wrap md:flex-row"> {/* Added flex-wrap for smaller screens */}
        <a href="https://github.com/shivansh179" target="blank"><FaGithub className="text-4xl" /></a>
        <a href="https://www.linkedin.com/in/shivansh-shukla-01a139234/" target="blank"><FaLinkedin className="text-4xl" /></a>
        <a href="https://www.instagram.com/shuklajiii_25/?next=https%3A%2F%2Fwww.instagram.com%2Freels%2FC52NnCrPORm%2F%3F__coig_login%3D1" target="blank"><FaInstagram className="text-4xl" /></a>
        <a href="https://x.com/Shivansh751829" target="blank"><FaTwitter className="text-4xl" /></a>
        <a href="https://www.geeksforgeeks.org/user/shivansh_shukla7935/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="blank"><SiGeeksforgeeks className="text-4xl" /></a>
      </div>
    </div>
  );
};

const EstimateForm = ({ sendEmail }) => {
  return (
    <div className="estimate-form w-max md:w-1/2 px-4">
      <h1 className="text-4xl font-bold text-white mb-4">Estimate your Project</h1>
      <form className="space-y-4" onSubmit={sendEmail}>
        <div>
          <label htmlFor="name" className="block text-white mb-2">What is Your Name:</label>
          <input id="name" name="user_name" className="w-full p-2 border border-gray-300 rounded" type="text" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2">Your Email Address:</label>
          <input id="email" name="user_email" className="w-full p-2 border border-gray-300 rounded" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-white mb-2">How can I help you?:</label>
          <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
        </div>
        <button type="submit" className="px-10 py-3 bg-white text-black font-bold md:w-32 rounded-full">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
