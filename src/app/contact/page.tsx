"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
        timeline: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: '',
                    budget: '',
                    timeline: ''
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setErrors({ submit: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (isSubmitted) {
        return (
            <section className="w-full max-w-4xl mx-auto px-4 md:px-6 py-14">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center"
                >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-200 mb-6 font-['Bebas_Neue']">
                        Message Sent!
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Thank you for reaching out! We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#9929EA] text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center">
                    <div className="text-4xl lg:text-6xl font-['Bebas_Neue'] text-[#9929EA] tracking-normal">
                        Get in Touch
                    </div>
                    <p className="text-gray-400 text-md max-w-3xl mx-auto">
                        Ready to transform your digital presence? Let's discuss your project and how we can help bring your vision to life.
                    </p>
                </motion.div>

                {/* Contact Info & Form Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-200 mb-6 font-['Bebas_Neue']">
                                Let's Connect
                            </h2>
                            <p className="text-gray-400 text-md mb-8">
                                Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#9929EA]/20 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-[#9929EA]" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-semibold">Email</p>
                                    <p className="text-gray-400">bikashbhujel381@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#9929EA]/20 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#9929EA]" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-semibold">Phone</p>
                                    <p className="text-gray-400">+91 86384 73525</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#9929EA]/20 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[#9929EA]" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-semibold">Location</p>
                                    <p className="text-gray-400">Assam, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full text-white px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9929EA] transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-700'
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 text-white bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9929EA] transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-700'
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-white bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9929EA] transition-all duration-200"
                                    placeholder="Your company name"
                                />
                            </div>


                            <div>
                                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`w-full px-4 text-white py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9929EA] transition-all duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-gray-700'
                                        }`}
                                    placeholder="Tell us about your project, goals, and what you're looking to achieve..."
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {errors.submit && (
                                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                                    <p className="text-red-400 text-sm">{errors.submit}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#9929EA] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span className='text-md'>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
