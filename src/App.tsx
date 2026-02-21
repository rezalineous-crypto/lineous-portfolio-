/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Zap,
  Shield,
  Rocket,
  Users
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Logo from './components/Logo';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import lineousLogo from './assets/logos/lineous_logo_v3.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Web Development",
    description: "Crafting high-performance, scalable web applications with modern frameworks and cutting-edge technologies.",
    icon: Globe,
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Mobile Development",
    description: "Building intuitive native and cross-platform mobile experiences that users love on iOS and Android.",
    icon: Smartphone,
    color: "from-fuchsia-500 to-pink-600"
  },
  {
    title: "DevOps & Cloud",
    description: "Streamlining your development lifecycle with automated CI/CD pipelines and robust cloud infrastructure.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your brand, increase visibility, and drive meaningful conversions.",
    icon: Megaphone,
    color: "from-purple-500 to-indigo-600"
  }
];

const plans = [
  {
    phase: "Phase #1",
    name: "Starter",
    price: "$999.00",
    feeLabel: "MONTHLY SUBSCRIPTION",
    managementFee: "+ $150",
    managementLabel: "Setup Fee",
    description: "The $999 is a monthly investment to get access to our core development team and basic digital strategy.",
    features: ["Exclusive Discord Community", "Experienced Expertise & Management", "Members Discount & Special Events"],
    highlight: false
  },
  {
    phase: "Phase #2",
    name: "Growth",
    price: "$2,499.00",
    feeLabel: "MONTHLY SUBSCRIPTION",
    managementFee: "+ $325",
    managementLabel: "Management Fee",
    description: "Our Growth plan is designed for scaling businesses that need a dedicated team for continuous delivery.",
    features: ["Full Stack Development Team", "24/7 Infrastructure Monitoring", "Priority Strategy & Support"],
    highlight: true
  },
  {
    phase: "Phase #3",
    name: "Enterprise",
    price: "Inquire Team",
    feeLabel: "PER PROJECT / RETAINER",
    managementFee: "Custom",
    managementLabel: "Service Fee",
    description: "Tailored infrastructure and development for large-scale operations requiring white-glove service.",
    features: ["Unlimited Scaling & Support", "Custom AI & ML Integration", "Dedicated Account Manager"],
    highlight: false
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-primary)]/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-[var(--bg-secondary)]/80 backdrop-blur-md border-[var(--border-primary)] py-4" 
          : "bg-transparent border-transparent/30 py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo variant="full" type="image" imageSrc={lineousLogo} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-colors">
              Get Started
            </button>
            <ThemeSwitcher />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--bg-card)] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'Pricing', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {item}
                </a>
              ))}
              {/* Theme Switcher - Mobile */}
              <div className="py-2">
                <ThemeSwitcher />
              </div>
              <button className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 rounded-xl font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--border-primary)] border border-[var(--border-primary)] text-xs font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-6">
              Connect • Build • Grow
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Digital Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500">
                Engineered for Scale
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Lineous is a premium technology partner helping businesses navigate the digital landscape through world-class engineering and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-[var(--border-primary)] border border-[var(--border-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--border-primary)]/50 transition-colors">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
              <p className="text-[var(--text-secondary)] text-lg">We don't just build software; we build the future of your business with precision and care.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br", service.color)}>
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-10">{service.description}</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        <span className="text-sm font-medium">Proven Results</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        <span className="text-sm font-medium">Expert Team</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        <span className="text-sm font-medium">24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        <span className="text-sm font-medium">Secure Tech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Monthly Subscriptions</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Predictable pricing for high-velocity development. No hidden fees, just pure progress.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden min-h-[600px]"
              >
                {/* Top Section */}
                <div className="p-10 text-center">
                  <div className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">{plan.phase}</div>
                  <div className="text-5xl font-bold mb-2 tracking-tight">{plan.price}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{plan.feeLabel}</div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-[var(--border-primary)]" />

                {/* Body Section */}
                <div className="p-10 flex-grow relative">
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                      <div className="text-lg font-bold">{plan.managementFee}</div>
                      <div className="text-xs font-medium text-[var(--text-muted)]">{plan.managementLabel}</div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Membership</h4>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-12">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-black" />
                          </div>
                          <span className="text-sm font-medium text-[var(--text-primary)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-auto">
                      <button className="w-full max-w-[200px] bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
                        Book A Call
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)] uppercase tracking-widest font-mono">
            {/* <Logo variant="icon" size="sm" /> */}
            <Logo variant="full" type="image" imageSrc={lineousLogo} />
            <div>© 2026 Lineous Technologies. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
