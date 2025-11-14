import React from "react";
import { motion } from "motion/react";
import {
  Sun,
  Building2,
  Factory,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function SectorsPage() {
  const sectors = [
    {
      title: "Renewables",
      icon: Sun,
      description:
        "Optimize renewable energy generation and distribution with AI-powered forecasting and grid integration solutions.",
      features: [
        "AI-powered solar and wind forecasting",
        "Smart grid integration and management",
        "Energy storage optimization",
        "Real-time performance monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjI5NzE1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Real Estate",
      icon: Building2,
      description:
        "Transform buildings into smart, energy-efficient spaces with comprehensive monitoring and optimization.",
      features: [
        "Multi-building energy monitoring",
        "HVAC optimization and control",
        "Tenant billing and reporting",
        "Sustainability certification support",
      ],
      image:
        "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5NDA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description:
        "Maximize production efficiency and minimize energy costs with intelligent load management and optimization.",
      features: [
        "Production line energy optimization",
        "Peak demand management",
        "Predictive maintenance",
        "Energy cost reduction strategies",
      ],
      image:
        "https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MzAxMTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description:
        "Reduce energy costs by up to 30% with intelligent optimization",
    },
    {
      icon: Zap,
      title: "Efficiency Gains",
      description: "Improve operational efficiency through real-time insights",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Dynamic Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(1,12,177)] via-blue-800 to-cyan-900">
          {/* Animated Mesh Gradient Overlay */}
          <div className="absolute inset-0 opacity-50">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.5) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            ></motion.div>
          </div>

          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="hexagons"
                  width="50"
                  height="43.4"
                  patternUnits="userSpaceOnUse"
                  patternTransform="scale(2)"
                >
                  <polygon
                    points="25,0 50,14.43 50,28.87 25,43.3 0,28.87 0,14.43"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>

        {/* Floating Sector Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center"
          >
            <Sun className="w-10 h-10 text-yellow-300" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/3 right-[15%] w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
          >
            <Building2 className="w-10 h-10 text-blue-300" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 left-[20%] w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center"
          >
            <Factory className="w-10 h-10 text-purple-300" />
          </motion.div>
        </div>

        {/* Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="15%"
            y1="25%"
            x2="80%"
            y2="33%"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="80%"
            y1="33%"
            x2="25%"
            y2="75%"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
        </svg>

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
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-white">Industry-Specific Solutions</span>
            </motion.div>
            <h1 className="mb-6 text-white">Sectors We Serve</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tailored energy solutions for diverse industries, powered by AI
              and precision engineering.
            </p>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        {/*<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>*/}
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${sector.gradient} text-white mb-6`}
                    >
                      <sector.icon className="w-5 h-5" />
                      <span>{sector.title}</span>
                    </div>
                    <h2 className="mb-4 text-[rgb(1,12,177)]">
                      {sector.title} Solutions
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      {sector.description}
                    </p>

                    <div className="space-y-3">
                      {sector.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient}`}
                          ></div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <ImageWithFallback
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-20`}
                      ></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Universal Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter your industry, Apollo delivers measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-cyan-200"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[rgb(1,12,177)] to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-[rgb(1,12,177)]">
              Ready to Optimize Your Sector?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how Apollo can transform your energy management
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[rgb(1,12,177)] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
