"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

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

export function PricingSection() {
  return (
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
  );
}

export default PricingSection;
