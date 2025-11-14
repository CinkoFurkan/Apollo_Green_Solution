import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsPage() {
  const newsArticles = [
    {
      title: 'Apollo Receives German Sustainability Innovation Award',
      excerpt: 'We are honored to be recognized for our groundbreaking work in AI-driven energy management and smart hardware development.',
      date: 'November 5, 2024',
      author: 'Apollo Team',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MzA0MDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Company News',
    },
    {
      title: 'Expanding to 100+ Enterprise Clients Across Germany',
      excerpt: 'A major milestone as we continue to help businesses optimize their energy consumption and reduce carbon footprint.',
      date: 'October 20, 2024',
      author: 'Marketing Team',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5NDA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Growth',
    },
    {
      title: 'New AI Forecasting Models Improve Accuracy by 40%',
      excerpt: 'Our latest machine learning algorithms are setting new standards for energy prediction and optimization in the renewable sector.',
      date: 'September 15, 2024',
      author: 'Dr. Sarah Mueller',
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjI5NzE1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Technology',
    },
    {
      title: 'Partnership with Leading Manufacturing Companies',
      excerpt: 'Announcing strategic partnerships with three major manufacturing firms to deploy our energy management solutions at scale.',
      date: 'August 28, 2024',
      author: 'Business Development',
      image: 'https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MzAxMTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Partnerships',
    },
    {
      title: 'Smart Hardware 2.0: Next Generation Sensors Launch',
      excerpt: 'Introducing our most advanced energy sensors yet, featuring improved precision, extended battery life, and enhanced connectivity.',
      date: 'July 10, 2024',
      author: 'Product Team',
      image: 'https://images.unsplash.com/photo-1588317769568-a50fd5b6143b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBlbmVyZ3klMjBncmlkfGVufDF8fHx8MTc2MzA0NDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Product',
    },
    {
      title: 'Webinar: The Future of Energy Management in Real Estate',
      excerpt: 'Join us for an insightful discussion on how AI and IoT are transforming energy efficiency in the real estate sector.',
      date: 'June 22, 2024',
      author: 'Events Team',
      image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzAzNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Events',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-bl from-[rgb(1,12,177)] via-purple-800 to-blue-900">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`
            }}
          ></motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
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
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-white">Latest Updates</span>
            </motion.div>
            <h1 className="mb-6 text-white">News & Updates</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed about our latest developments, partnerships, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[rgb(1,12,177)] text-white text-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[rgb(1,12,177)] text-sm w-fit mb-4">
                  {newsArticles[0].category}
                </span>
                <h2 className="mb-4 text-[rgb(1,12,177)]">{newsArticles[0].title}</h2>
                <p className="text-gray-600 mb-6">{newsArticles[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {newsArticles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {newsArticles[0].author}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-[rgb(1,12,177)] hover:gap-3 transition-all">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[rgb(1,12,177)] text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <button className="text-[rgb(1,12,177)] hover:underline flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Mail className="w-4 h-4 text-[rgb(1,12,177)]" />
              <span className="text-[rgb(1,12,177)]">Stay in the Loop</span>
            </div>
            <h2 className="mb-4 text-[rgb(1,12,177)]">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest news and insights delivered directly to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[rgb(1,12,177)] focus:border-transparent outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[rgb(1,12,177)] text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shadow-lg"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
