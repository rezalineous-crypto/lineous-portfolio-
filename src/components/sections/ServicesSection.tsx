"use client";

import { motion } from "motion/react";
import { Globe, Smartphone, Cpu, Megaphone, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import FuturisticBackground from "../ui/FuturisticBackground";

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

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <FuturisticBackground seed={2} preset="cyber" />
      <div className="max-w-7xl mx-auto relative z-10">
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
  );
}

export default ServicesSection;
