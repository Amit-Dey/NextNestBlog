// pages/contact.tsx or components/ContactPage.tsx (depending on your project structure)
// This component is designed to be a standalone page or a section within a larger page.

import React from 'react';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          {/* Header Section */}
          <header className="mb-10 text-center sm:mb-12 lg:mb-16">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 sm:w-32"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              We'd love to hear from you! Whether you have a question, feedback, or a collaboration idea, feel free to reach out.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    placeholder="Regarding your latest post..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information & Map Section */}
            <div className="lg:pl-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p>
                        <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">
                          info@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p>
                        <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                          +1 (234) 567-890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 flex-shrink-0 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p>123 Blog Street, Suite 456</p>
                      <p>Blogville, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.22014169727!2d144.963057615316!3d-37.8162799797514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b363405789%3A0x5045675218ce770!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678912345678!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
