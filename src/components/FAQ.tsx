import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "For what type of projects can I contact you?",
    answer: "Reach out for business strategy, process improvement, or solutions development. I use modern technologies like Python, analytics, and automation to optimize workflows and deliver impactful results tailored to your needs."
  },
  {
    question: "What times are you available for calls?",
    answer: (
      <>
        <p className="mb-4">I am available between 0800 hrs and 2000 hrs. You can block my calendar here:</p>
        <a href="https://cal.com/pranavpahuja" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-lg hover:bg-green hover:text-black transition-colors font-bold uppercase">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Reserve Time
        </a>
      </>
    )
  },
  {
    question: "How do we proceed with work?",
    answer: "I work in a phased manner with full transparency, ensuring you have strong data privacy and complete ownership of your solutions. Active participation from your side is encouraged to deliver the most impactful results."
  },
  {
    question: "Will I get the source files of my order?",
    answer: "Generally - yes. However, if a proprietery SaaS solution is re-used, then no."
  },
  {
    question: "How to communicate and share data during work?",
    answer: "By using secure communication and data sharing channels, depending on the project senstivity."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 container mx-auto px-5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">FAQs</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[30px] overflow-hidden shadow-2xl">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/images/bg_faq.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-gray-50 transition-colors"
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-green" : "text-black"}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
