"use client";

import { motion, MotionValue } from "motion/react";
import { Send } from "lucide-react";
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
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-black z-60"
    >
      <div className="max-w-6xl w-full flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 shrink-0">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">Contact</h2>
          <div className="h-[2px] w-full md:flex-1 bg-[#a3ff33]/20 md:min-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto no-scrollbar pb-12 pr-4">
          
          {/* Left Side: Text and Direct Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Let's build something <br className="hidden lg:block" />
              <span className="text-[#a3ff33]">extraordinary</span> together.
            </h3>
            
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I will try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-2">Email</p>
                <motion.a 
                  href="mailto:saidulalom525@gmail.com" 
                  whileHover={{ x: 10, color: "#a3ff33" }}
                  className="text-xl md:text-3xl font-bold transition-colors inline-block cursor-pointer"
                >
                  saidulalom525@gmail.com
                </motion.a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-2">Phone</p>
                <div className="text-xl md:text-3xl font-bold text-gray-300">
                  +91 84860 28737
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Built-in Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 border border-white/10 rounded-3xl bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
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
                className="mt-2 w-full bg-[#a3ff33] text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:bg-[#a3ff33] group"
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
