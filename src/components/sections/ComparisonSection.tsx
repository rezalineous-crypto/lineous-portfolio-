"use client";

import { CheckCircle2, X } from "lucide-react";

const comparisonData = [
  { feature: "Development Team Access", starter: "2 Developers", growth: "4 Developers", enterprise: "Full Team" },
  { feature: "Support Hours", starter: "20 hrs/month", growth: "80 hrs/month", enterprise: "Unlimited" },
  { feature: "Response Time", starter: "48 hours", growth: "24 hours", enterprise: "4 hours" },
  { feature: "Project Management", starter: true, growth: true, enterprise: true },
  { feature: "Dedicated Manager", starter: false, growth: true, enterprise: true },
  { feature: "CI/CD Pipeline", starter: true, growth: true, enterprise: true },
  { feature: "Cloud Infrastructure", starter: "Basic", growth: "Advanced", enterprise: "Enterprise" },
  { feature: "Security Audits", starter: false, growth: "Quarterly", enterprise: "Monthly" },
  { feature: "API Development", starter: true, growth: true, enterprise: true },
  { feature: "Mobile Apps", starter: false, growth: true, enterprise: true },
  { feature: "AI/ML Integration", starter: false, growth: true, enterprise: true },
  { feature: "24/7 Monitoring", starter: false, growth: true, enterprise: true },
];

export function ComparisonSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Compare Plans</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">See what's included in each plan and choose the one that fits your needs.</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-primary)]">
                <th className="text-left py-4 px-6 text-[var(--text-secondary)] font-medium">Features</th>
                <th className="text-center py-4 px-6">
                  <div className="text-lg font-bold">Starter</div>
                  <div className="text-sm text-[var(--text-muted)]">$999/mo</div>
                  
                </th>


                <th className="text-center py-4 px-6">
                  <div className="text-lg font-bold text-[var(--accent-primary)]">Growth</div>
                  <div className="text-sm text-[var(--text-muted)]">$2,499/mo</div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="text-lg font-bold">Enterprise</div>
                  <div className="text-sm text-[var(--text-muted)]">Custom</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b border-[var(--border-primary)]/50 hover:bg-[var(--bg-card)]/50 transition-colors">
                  <td className="py-4 px-6 text-[var(--text-primary)] font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? (
                        <CheckCircle2 size={20} className="mx-auto text-green-500" />
                      ) : (
                        <X size={20} className="mx-auto text-red-500/50" />
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{row.starter}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-[var(--accent-primary)]/5">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? (
                        <CheckCircle2 size={20} className="mx-auto text-green-500" />
                      ) : (
                        <X size={20} className="mx-auto text-red-500/50" />
                      )
                    ) : (
                      <span className="text-[var(--text-primary)] font-medium">{row.growth}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? (
                        <CheckCircle2 size={20} className="mx-auto text-green-500" />
                      ) : (
                        <X size={20} className="mx-auto text-red-500/50" />
                      )
                    ) : (
                      <span className="text-[var(--text-secondary)]">{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
