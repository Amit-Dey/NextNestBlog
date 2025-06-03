// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-10 lg:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Blog Name/Logo */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors duration-200">
            My Modern Blog
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition-colors duration-200">
            Contact
          </Link>
          {/* Add more links as needed, e.g., Privacy Policy, Terms of Service */}
          <Link href="/privacy" className="hover:text-indigo-400 transition-colors duration-200">
            Privacy Policy
          </Link>
        </nav>

        {/* Social Media Links (Placeholder) */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200" aria-label="Facebook">
            {/* Replace with actual SVG icons or a library like Font Awesome */}
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22c4.781-.75 8.438-4.888 8.438-9.878Z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200" aria-label="Twitter">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.41-4.293 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2 10.425v.054a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.844Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200" aria-label="Instagram">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.104.047 2.17.18 3.333.91 4.312 1.888.98.979 1.71 2.143 1.888 4.313.034.32.047.673.047 3.104s-.013 2.783-.047 3.103c-.18 2.17-2.143 3.333-4.313 4.313-.32.034-.673.047-3.104.047s-2.783-.013-3.103-.047c-2.17-.18-3.333-.91-4.313-1.888-.979-.98-1.71-2.143-1.888-4.313-.034-.32-.047-.673-.047-3.104s.013-2.783.047-3.103c.18-2.17.91-3.333 1.888-4.313.98-.979 2.143-1.71 4.313-1.888.32-.034.673-.047 3.104-.047ZM12 5.032c-3.179 0-5.768 2.589-5.768 5.768S8.821 16.568 12 16.568s5.768-2.589 5.768-5.768S15.179 5.032 12 5.032Zm0 9.062c-1.817 0-3.293-1.476-3.293-3.293S10.183 7.406 12 7.406s3.293 1.476 3.293 3.293-1.476 3.293-3.293 3.293Zm5.443-7.559c-.6-.6-1.414-.974-2.315-.974-.901 0-1.715.374-2.315.974-.6.6-.974 1.414-.974 2.315 0 .901.374 1.715.974 2.315.6.6 1.414.974 2.315.974.901 0 1.715-.374 2.315-.974.6-.6.974-1.414.974-2.315 0-.901-.374-1.715-.974-2.315Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
