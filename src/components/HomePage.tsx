import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, HardDrive, Settings, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Premium Software',
      description: 'Real-time monitoring, AI forecasting, and multi-site control for optimized energy management.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HardDrive,
      title: 'Smart Hardware',
      description: 'Precision sensors with easy setup and secure connectivity for seamless integration.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Settings,
      title: 'Energy Management',
      description: 'Strategic planning, predictive maintenance, and advanced analytics for efficiency.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588317769568-a50fd5b6143b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBlbmVyZ3klMjBncmlkfGVufDF8fHx8MTc2MzA0NDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Energy Grid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,12,177)]/90 to-[rgb(1,12,177)]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            360° Energy Solutions for Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
          >
            AI-driven optimization, smart hardware, and sustainable energy management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(1,12,177)] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Our Three Pillars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive energy solutions powered by cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Apollo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-[rgb(1,12,177)]">Why Choose Apollo?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We combine artificial intelligence, precision engineering, and deep industry expertise to deliver energy solutions that are smarter, cleaner, and more efficient.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900">AI-Powered Insights</span>
                    <p className="text-gray-600 text-sm mt-1">Advanced algorithms predict energy needs and optimize consumption in real-time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900">Seamless Integration</span>
                    <p className="text-gray-600 text-sm mt-1">Plug-and-play hardware that works with your existing infrastructure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900">Sustainability First</span>
                    <p className="text-gray-600 text-sm mt-1">Reduce carbon footprint while improving operational efficiency</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MzA0MDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Network"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners & Certifications Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Trusted Partners & Certifications</h2>
            <p className="text-gray-600">Collaborating with industry leaders across Europe</p>
          </motion.div>
          
          <div className="relative">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Carousel Track */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -1680],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8 sm:gap-12 md:gap-16 items-center"
              >
                {/* First set of logos */}
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/images__2_-removebg-preview.png?v=1756463995&width=300"
                    alt="Partner 1"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/pvmaint_white_-n-removebg-preview.png?v=1756463712&width=300"
                    alt="Partner 2"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/BVES_LOGO_deutsch-removebg-preview.png?v=1756463809&width=300"
                    alt="Partner 3"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/images_3.png?v=1756464141&width=300"
                    alt="Partner 4"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/Gridty_Logo_primary_negative_white-green_1024px_RGB.jpg?v=1757941977&width=300"
                    alt="Partner 5"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/deutsch_griechische_industrie__und_handelskammer_logo-removebg-preview.png?v=1756463514&width=300"
                    alt="Partner 6"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/NEONTO-revisi1.png?v=1762178155&width=300"
                    alt="Partner 7"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Duplicate set for seamless infinite loop */}
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/images__2_-removebg-preview.png?v=1756463995&width=300"
                    alt="Partner 1"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/pvmaint_white_-n-removebg-preview.png?v=1756463712&width=300"
                    alt="Partner 2"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/BVES_LOGO_deutsch-removebg-preview.png?v=1756463809&width=300"
                    alt="Partner 3"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/images_3.png?v=1756464141&width=300"
                    alt="Partner 4"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/Gridty_Logo_primary_negative_white-green_1024px_RGB.jpg?v=1757941977&width=300"
                    alt="Partner 5"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/deutsch_griechische_industrie__und_handelskammer_logo-removebg-preview.png?v=1756463514&width=300"
                    alt="Partner 6"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img
                    src="https://www.apollo-gs.com/cdn/shop/files/NEONTO-revisi1.png?v=1762178155&width=300"
                    alt="Partner 7"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-[rgb(1,12,177)]">Ready to Transform Your Energy Management?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Join leading businesses in Germany and beyond in the sustainable energy revolution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[rgb(1,12,177)] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
