import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

export default function Stats() {
  return (
    <div className="container mx-auto px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-black rounded-[30px] p-8 text-white">
        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <Counter value={5} />+
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm leading-tight">
              Years of <br /> experience
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <Counter value={6} />+
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm leading-tight">
              satisfied <br /> clients
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <Counter value={20} />+
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm leading-tight">
              ideas turned <br /> into solutions
            </p>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <a
            href="https://google.com"
            className="btn-primary w-full flex items-center justify-center gap-2 uppercase font-bold text-lg text-center no-underline"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            Get My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
