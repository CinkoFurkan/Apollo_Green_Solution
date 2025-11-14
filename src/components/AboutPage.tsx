import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Lightbulb, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Apollo Green Solutions was established with a mission to revolutionize energy management.',
    },
    {
      year: '2022',
      title: 'First Product Launch',
      description: 'Launched our flagship AI-powered energy monitoring platform.',
    },
    {
      year: '2023',
      title: 'Major Expansion',
      description: 'Expanded to serve over 100 enterprise clients across Germany.',
    },
    {
      year: '2024',
      title: 'Innovation Award',
      description: 'Received the German Sustainability Innovation Award for our smart hardware.',
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Expanding operations across Europe with new offices and partnerships.',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries with cutting-edge AI and IoT technology.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients\' success is our success. We build solutions that deliver real value.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Every decision we make considers its impact on the environment.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, rgb(1,12,177) 0%, rgb(29,78,216) 50%, rgb(59,130,246) 100%)',
              'linear-gradient(135deg, rgb(29,78,216) 0%, rgb(59,130,246) 50%, rgb(6,182,212) 100%)',
              'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(6,182,212) 50%, rgb(1,12,177) 100%)',
              'linear-gradient(135deg, rgb(1,12,177) 0%, rgb(29,78,216) 50%, rgb(59,130,246) 100%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Animated Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
            />
          </div>

          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Diagonal Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0" stroke="white" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
            </svg>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-white">Driving Sustainable Innovation Since 2021</span>
            </motion.div>
            <h1 className="mb-6 text-white">About Apollo Green Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're on a mission to transform how businesses manage energy through intelligent, sustainable solutions.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        {/*<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>*/}
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[rgb(1,12,177)] to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-[rgb(1,12,177)]">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To drive a sustainable energy future through intelligence, precision, and innovation. We empower businesses to optimize their energy consumption while reducing their environmental impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-green-700">Our Vision</h2>
              <p className="text-lg text-gray-700">
                Empowering industries to use energy smarter, cleaner, and more efficiently. We envision a world where every business has the tools to achieve both operational excellence and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border border-transparent hover:border-blue-200"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(1,12,177)] to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader - here's how we've grown
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[rgb(1,12,177)] to-blue-300 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block bg-white rounded-xl p-6 shadow-lg ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-[rgb(1,12,177)] text-white text-sm mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-[rgb(1,12,177)] border-4 border-white shadow-lg flex-shrink-0 z-10 hidden lg:block"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[rgb(1,12,177)] to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2">100+</div>
              <p className="text-white/80">Enterprise Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2">50M+</div>
              <p className="text-white/80">kWh Optimized</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2">30%</div>
              <p className="text-white/80">Average Cost Reduction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2">500+</div>
              <p className="text-white/80">Sites Monitored</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA to News */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-[rgb(1,12,177)]">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Read our latest news and industry insights
            </p>
            <Link
              to="/news"
              className="inline-block bg-[rgb(1,12,177)] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              View News & Updates
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
