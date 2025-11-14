import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Cpu, BarChart3, Zap, Shield, TrendingUp, Database, Wifi, Activity } from 'lucide-react';

export function ProductsPage() {
  const products = [
    {
      title: 'Premium Software',
      subtitle: 'Intelligent Energy Management Platform',
      description: 'Our flagship software solution provides comprehensive real-time monitoring and control of your energy systems.',
      features: [
        { icon: Monitor, text: 'Real-time monitoring across all sites' },
        { icon: TrendingUp, text: 'AI-powered forecasting and predictions' },
        { icon: BarChart3, text: 'Multi-site control and analytics' },
        { icon: Database, text: 'Historical data analysis and reporting' },
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Smart Hardware',
      subtitle: 'Precision Sensors & IoT Devices',
      description: 'State-of-the-art hardware designed for accuracy, reliability, and seamless integration.',
      features: [
        { icon: Cpu, text: 'High-precision energy sensors' },
        { icon: Wifi, text: 'Secure wireless connectivity' },
        { icon: Zap, text: 'Plug-and-play installation' },
        { icon: Shield, text: 'Enterprise-grade security' },
      ],
      gradient: 'from-green-500 to-green-700',
    },
    {
      title: 'Energy Management',
      subtitle: 'Strategic Optimization Services',
      description: 'Expert services to maximize your energy efficiency and reduce operational costs.',
      features: [
        { icon: Activity, text: 'Energy strategy consulting' },
        { icon: TrendingUp, text: 'Predictive maintenance programs' },
        { icon: BarChart3, text: 'Advanced analytics and insights' },
        { icon: Database, text: 'Performance optimization' },
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[rgb(1,12,177)] via-blue-800 to-blue-900">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"
          ></motion.div>
        </div>

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
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-white/80">Smart Solutions Portfolio</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>
            <h1 className="mb-6 text-white">Our Products</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive energy solutions that combine cutting-edge software, precision hardware, and expert management services.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm mb-4`}>
                    {product.subtitle}
                  </div>
                  <h2 className="mb-4 text-[rgb(1,12,177)]">{product.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{product.description}</p>
                  
                  <div className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${product.gradient} p-8`}>
                    <div className="relative z-10">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <div className="space-y-4">
                          <div className="h-4 bg-white/30 rounded w-3/4"></div>
                          <div className="h-4 bg-white/20 rounded w-full"></div>
                          <div className="h-4 bg-white/20 rounded w-5/6"></div>
                          <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-white/20 rounded-lg p-4 h-24"></div>
                            <div className="bg-white/20 rounded-lg p-4 h-24"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6 text-[rgb(1,12,177)]">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our products work together as a unified ecosystem, providing you with complete control and visibility over your energy systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Cloud-Based</h3>
                <p className="text-gray-600">Access your data anywhere, anytime with our secure cloud platform</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-green-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Secure</h3>
                <p className="text-gray-600">Enterprise-grade security with end-to-end encryption</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-purple-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">Scalable</h3>
                <p className="text-gray-600">Grow from single site to enterprise-wide deployment</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
