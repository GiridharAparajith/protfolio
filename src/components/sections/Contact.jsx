import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just prevent default. Real logic could integrate with Formspree/EmailJS
    console.log("Form submitted", formData);
    alert("Message sent! (Mock)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-xl text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                <a href="mailto:giridhar05072004@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                  giridhar05072004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 rounded-xl text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Location</h4>
                <p className="text-slate-400">Madurai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h4 className="text-white font-semibold mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-lighter border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/giridhar-aparajith-j-246077293/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-lighter border border-slate-800 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 bg-dark-lighter border border-slate-800 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
