import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '20+', label: 'Startup Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Nexora Labs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in the heart of Bangalore's tech ecosystem, Nexora Labs is born from a simple belief: 
              great technology should accelerate business growth, not complicate it. We're a team of passionate 
              engineers who've seen firsthand how the right technical foundation can transform startups into industry leaders.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Based in Whitefield, we work closely with startups and growing companies across India and globally. 
              Our mission is to bridge the gap between ambitious ideas and production-ready digital products. 
              We don't just write code; we build scalable solutions that grow with your business.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Partner With Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Nexora Labs team working together"
              className="rounded-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl"
            >
              <div className="text-3xl font-bold mb-1">Whitefield</div>
              <div className="text-sm">Bangalore, India</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Engineering Excellence', desc: 'We write clean, scalable code that stands the test of time' },
              { title: 'Client Partnership', desc: 'Your success is our success - we grow together' },
              { title: 'Continuous Innovation', desc: 'Always learning, always improving, always delivering value' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
