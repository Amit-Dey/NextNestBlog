import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          {/* Header Section */}
          <header className="mb-10 text-center sm:mb-12 lg:mb-16">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              About Our Blog
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-sky-600 sm:w-32"></div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              Dedicated to sharing knowledge, insights, and stories that inspire and inform.
            </p>
          </header>

          {/* Content Section 1: Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 lg:mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md sm:h-72 md:h-full">
              <Image
                src="https://placehold.co/600x400/A78BFA/FFFFFF?text=Our+Mission"
                alt="Our Mission"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="mb-4 leading-relaxed">
                At My Modern Blog, our mission is to provide high-quality, engaging, and informative content across a wide range of topics. We believe in the power of knowledge to transform lives and foster a deeper understanding of the world around us. Our goal is to be a trusted source for well-researched articles, thought-provoking essays, and practical guides.
              </p>
              <p className="leading-relaxed">
                We strive to create a platform where readers can learn, grow, and connect with ideas that matter. From technology and science to lifestyle and culture, we cover subjects that resonate with our diverse audience.
              </p>
            </div>
          </div>

          {/* Content Section 2: Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 lg:mb-16">
            <div className="text-gray-700 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="mb-4 leading-relaxed">
                We envision a future where accessible and reliable information empowers individuals to make informed decisions and pursue their passions. Our vision is to build a vibrant community of readers and writers who share a common curiosity and a desire for continuous learning.
              </p>
              <p className="leading-relaxed">
                Through compelling storytelling and expert analysis, we aim to inspire critical thinking and spark meaningful conversations. We are constantly evolving, exploring new formats and topics to keep our content fresh, relevant, and impactful.
              </p>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md sm:h-72 md:h-full order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400/6366F1/FFFFFF?text=Our+Vision"
                alt="Our Vision"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Call to Action / Footer */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h3>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with our latest posts and join the conversation.
            </p>
            <Link
              href="/#subscribe" // Assuming a subscribe section on your homepage
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Explore Our Blog
              <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
