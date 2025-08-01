import React from "react";
import Features from "./Features";
import CallToAction from "./CallToAction";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 relative">
        <div className="text-center pt-24 pb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Discover the Power of <br />
            <span className="text-orange-600">Shared Wisdom</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
            Join a global network of thinkers, builders, and learners. Collaborate. Grow. Innovate.
          </p>
          <div className="flex justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-lg transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mb-16" />

        {/* Features */}
        <Features />

        {/* Call to Action */}
        <div className="mt-24">
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Home;
