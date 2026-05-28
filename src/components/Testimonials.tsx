import { motion } from "framer-motion";

const QuoteIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const testimonials = [
  {
    quote: "Outstanding work. Pranav's delivery exceeded every expectation — structured, proactive, and results-driven.",
    author: "US-Based Retail Client",
    role: "Fortune 500 Program",
    date: "Aug 2024",
  },
  {
    quote: "Pranav's business and data automations have saved hundreds of hours of effort. The quality and reliability are exceptional.",
    author: "Kevin H.",
    role: "Delivery Lead",
    date: "Mar 2025",
  },
  {
    quote: "A rare consultant who combines technical depth with sharp business judgment. Highly recommended.",
    author: "John L.",
    role: "Senior Stakeholder",
    date: "Jan 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="mb-14">
          <span className="section-label">04 — Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            What Clients Say<span style={{ color: "#10b981" }}>.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel text-black p-8 rounded-[30px] relative group"
            >
              <QuoteIcon
                className="w-9 h-9 mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ color: "#10b981" }}
              />
              <p className="text-lg font-medium mb-8 leading-relaxed text-gray-800">
                "{item.quote}"
              </p>
              <div className="mt-auto">
                <div className="w-8 h-[2px] mb-4 rounded-full" style={{ background: "#10b981" }} />
                <h5 className="font-bold text-base text-black">{item.author}</h5>
                <p className="text-gray-400 text-sm mt-0.5">{item.role} · {item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
