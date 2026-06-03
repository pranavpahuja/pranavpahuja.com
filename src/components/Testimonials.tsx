import { motion } from "framer-motion";

const recognitions = [
  {
    metric: "3×",
    title: "Deloitte Awards",
    detail: "Recognised multiple times for outstanding delivery, technical excellence, and client impact across programmes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    metric: "F500",
    title: "Client Commendation",
    detail: "Directly commended by client stakeholders at a Fortune 500 US retailer for automation solutions and delivery quality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    metric: "Top 3",
    title: "Deloitte AI Academy",
    detail: "Ranked 3rd out of 134 practitioners by XP earned across a 9-month AI learning, testing, and capstone programme.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="mb-14">
          <span className="section-label">04 — Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Awards & Recognition<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel text-black p-8 rounded-[30px] relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-6"
                     style={{ background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.25)" }}>
                  {item.icon}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{item.detail}</p>
              </div>
              <div>
                <div className="w-8 h-[2px] mb-4 rounded-full" style={{ background: "#10b981" }} />
                <p className="text-4xl font-bold text-black mb-1">{item.metric}</p>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
