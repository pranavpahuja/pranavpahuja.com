import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{suffix}</span>;
};

const ProgressBar = ({ targetWidth, isInView }: { targetWidth: string; isInView: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.style.width = targetWidth;
    }
  }, [isInView, targetWidth]);

  return (
    <div className="progress-bar">
      <div ref={ref} className="progress-bar-fill" />
    </div>
  );
};

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <div ref={sectionRef} className="container mx-auto px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 glass-panel rounded-[30px] p-8 text-black">

        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">99.9%</h2>
            <p className="text-gray-600 uppercase tracking-widest text-sm leading-tight">
              Error<br/>Elimination
            </p>
          </div>
          <ProgressBar targetWidth="99.9%" isInView={isInView} />
        </div>

        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <Counter value={300} suffix="+" />
            </h2>
            <p className="text-gray-600 uppercase tracking-widest text-sm leading-tight">
              Hours Saved<br/>Per Month
            </p>
          </div>
          <ProgressBar targetWidth="90%" isInView={isInView} />
        </div>

        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <Counter value={80} suffix="%" />
            </h2>
            <p className="text-gray-600 uppercase tracking-widest text-sm leading-tight">
              Fewer<br/>Failures
            </p>
          </div>
          <ProgressBar targetWidth="80%" isInView={isInView} />
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
            className="btn-primary w-full flex items-center justify-center gap-2 uppercase font-bold text-base cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            Full Profile
          </button>
        </div>

      </div>
    </div>
  );
}
