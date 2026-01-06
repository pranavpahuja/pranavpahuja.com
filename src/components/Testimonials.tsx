import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Outstanding work!",
    author: "US Based Retail Client",
    date: "8/20/2024",
  },
  {
    quote: "Pranav's business and data automations have saved hundreds of hours of effort.",
    author: "Kevin H.",
    date: "3/12/2025",
  },
  {
    quote: "Pranav's business and data automations have saved hundreds of hours of effort.",
    author: "John L.",
    date: "7/09/2025", // Future date from original content? Keeping as is.
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black text-white p-8 rounded-[30px] border border-transparent hover:border-green hover:shadow-xl transition-all relative group"
              >
                <Quote className="text-green w-10 h-10 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                  “{item.quote}”
                </p>
                <div className="mt-auto">
                    <div className="w-10 h-1 bg-green mb-4 rounded-full"></div>
                  <h5 className="font-bold text-lg">{item.author}</h5>
                  <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
