import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with actual service ID
      'YOUR_TEMPLATE_ID',  // Replace with actual template ID
      form.current,
      'YOUR_USER_ID'       // Replace with actual user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail}
      className="max-w-md mx-auto space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      
      <div>
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <input 
          type="email" 
          name="from_email" 
          placeholder="Your Email" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
