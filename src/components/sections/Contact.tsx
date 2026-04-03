"use client";

import { motion, MotionValue } from "motion/react";
import { Send, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export default function Contact({ styles }: ContactProps) {
  const [state, handleSubmit] = useForm("xjgpewka");

  return (
    <motion.section
      id="contact"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex flex-col p-4 sm:p-6 md:p-24 pt-20 md:pt-28 bg-black z-60 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-4 mb-4 md:mb-10 shrink-0">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase">Contact</h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20 min-w-[30px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 flex-1 min-h-0 overflow-y-auto pb-20 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">

          {/* Left Side — hidden on mobile */}
          <div className="hidden lg:flex flex-col justify-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a3ff33]/30 bg-[#a3ff33]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#a3ff33] animate-pulse" />
              <span className="text-[#a3ff33] text-xs font-bold uppercase tracking-widest">Available for Freelance & Remote Work</span>
            </div>

            <h3 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-8">
              Let's build something <br className="hidden lg:block" />
              <span className="text-[#a3ff33]">extraordinary</span> together.
            </h3>

            <p className="text-gray-400 mb-6 md:mb-10 max-w-md leading-relaxed text-sm md:text-base">
              Whether you have a question, a project idea, or just want to say hi, I will try my best to get back to you!
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-2">Email</p>
                <div className="overflow-x-hidden">
                  <motion.a
                    href="mailto:saidulalom525@gmail.com"
                    whileHover={{ x: 10, color: "#a3ff33" }}
                    className="text-lg md:text-3xl font-bold transition-colors inline-block cursor-pointer break-all"
                  >
                    saidulalom525@gmail.com
                  </motion.a>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-2">Phone</p>
                <div className="text-xl md:text-3xl font-bold text-gray-300">
                  +91 84860 28737
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918486028737?text=Hi%20Saidul%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-black font-bold rounded-2xl hover:bg-[#20bd5a] transition-colors text-sm uppercase tracking-widest"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Mobile-only quick info */}
          <div className="lg:hidden flex items-center justify-between gap-4 shrink-0 mb-1">
            <a href="mailto:saidulalom525@gmail.com" className="text-xs text-[#a3ff33] font-bold truncate">saidulalom525@gmail.com</a>
            <a
              href="https://wa.me/918486028737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-black text-[10px] font-bold rounded-full shrink-0"
            >
              <MessageCircle size={12} /> WhatsApp
            </a>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-5 md:p-12 border border-white/10 rounded-3xl bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-8 relative z-10">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3ff33]">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-[#a3ff33] transition-colors placeholder:text-gray-600"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3ff33]">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-[#a3ff33] transition-colors placeholder:text-gray-600"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3ff33]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello Saidul, I would like to discuss..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-[#a3ff33] transition-colors placeholder:text-gray-600 resize-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className="btn-glow mt-2 w-full bg-[#a3ff33] text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:bg-[#a3ff33] group"
              >
                {!state.submitting && !state.succeeded && (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {state.submitting && 'Sending...'}
                {state.succeeded && 'Message Sent!'}
              </button>
            </form>

            {/* Form Success Overlay */}
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 bg-neutral-900/90 backdrop-blur-md flex items-center justify-center"
              >
                <div className="text-center p-6 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-[#a3ff33]/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <Send size={32} className="text-[#a3ff33]" />
                  </motion.div>
                  <h4 className="text-3xl font-bold text-white mb-2">Message Received</h4>
                  <p className="text-gray-400 text-sm max-w-xs">Thank you for reaching out! I will get back to you as soon as possible.</p>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Embedded Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 md:p-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 bg-black/80 backdrop-blur-md z-20">
        <p>© {new Date().getFullYear()} Saidul Alom. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Designed & Built with <span className="text-[#a3ff33]">♥</span>
        </p>
      </footer>
    </motion.section>
  );
}
