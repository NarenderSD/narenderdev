'use client';
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaUser, FaEnvelope, FaBuilding, FaPhone, FaComments, FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";

const socialLinks = [
  { 
    href: "https://github.com/NarenderSD", 
    icon: <FaGithub />, 
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  { 
    href: "https://www.linkedin.com/in/narendersingh1", 
    icon: <FaLinkedin />, 
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  { 
    href: "mailto:narendersingh2028@gmail.com", 
    icon: <MdEmail />, 
    label: "Email",
    color: "hover:text-red-500"
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  company: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [focusedField, setFocusedField] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          company: ''
        });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-4 pl-12 rounded-2xl border-2 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm
    ${focusedField === fieldName 
      ? 'border-orange-500 shadow-lg shadow-orange-500/20 scale-[1.02]' 
      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
    }
    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 focus:scale-[1.02]
  `;

  return (
    <section id="contact" className="relative w-full py-32 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
            <FaComments className="text-orange-500 text-xl" />
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Let&apos;s Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I&apos;d love to hear from you. Drop me a message and let&apos;s create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 dark:border-gray-700/30"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Message</h3>
                <p className="text-gray-600 dark:text-gray-400">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Name *"
                    required
                    className={inputClasses('name')}
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Email *"
                    required
                    className={inputClasses('email')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Phone Field */}
                <div className="relative group">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Phone Number"
                    className={inputClasses('phone')}
                  />
                </div>

                {/* Company Field */}
                <div className="relative group">
                  <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Company/Organization"
                    className={inputClasses('company')}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative group mb-6">
                <MdSubject className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Subject *"
                  required
                  className={inputClasses('subject')}
                />
              </div>

              {/* Message Field */}
              <div className="relative group mb-8">
                <FaComments className="absolute left-4 top-6 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Your Message *"
                  required
                  rows={6}
                  className={`${inputClasses('message')} pt-6 resize-none`}
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 ${
                  status.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' :
                  status.type === 'error' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' :
                  'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                }`}>
                  {status.type === 'loading' && <FaSpinner className="animate-spin" />}
                  {status.type === 'success' && <FaCheckCircle />}
                  {status.type === 'error' && <FaExclamationTriangle />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {status.type === 'loading' ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <MdEmail className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email Me</h4>
                    <p className="text-gray-600 dark:text-gray-400">Quick response guaranteed</p>
                  </div>
                </div>
                <a href="mailto:narendersingh2028@gmail.com" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                  narendersingh2028@gmail.com
                </a>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <FaLinkedin className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400">Let&apos;s connect professionally</p>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/narendersingh1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
                  @narendersingh1
                </a>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <FaGithub className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400">Check out my projects</p>
                  </div>
                </div>
                <a href="https://github.com/NarenderSD" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
                  @NarenderSD
                </a>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-3xl p-8 border border-orange-200 dark:border-orange-800">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response Time</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Email: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">LinkedIn: Within 48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Project inquiries: Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 