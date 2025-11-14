import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about', hasDropdown: true, subLinks: [{ name: 'News', path: '/news' }] },
    { name: 'Products', path: '/products' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://www.apollo-gs.com/cdn/shop/files/apollonewschrift.png?height=36&v=1755554546"
              alt="Apollo Green Solutions"
              className="h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 transition-colors ${
                        location.pathname === link.path || location.pathname.startsWith(link.path)
                          ? 'text-[rgb(1,12,177)]'
                          : 'text-gray-700 hover:text-[rgb(1,12,177)]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[rgb(1,12,177)] transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      location.pathname === link.path
                        ? 'text-[rgb(1,12,177)]'
                        : 'text-gray-700 hover:text-[rgb(1,12,177)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-2 ${
                      location.pathname === link.path
                        ? 'text-[rgb(1,12,177)]'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="block py-2 pl-4 text-gray-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
