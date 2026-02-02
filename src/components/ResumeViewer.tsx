import { useState, useEffect, useRef } from "react";
import { X, Download, Printer, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_URL = "/resume_cv/cv.pdf";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-resume-modal", handleOpen);
    return () => window.removeEventListener("open-resume-modal", handleOpen);
  }, []);

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.print();
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Pranav_Pahuja_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
              <h3 className="text-xl font-bold text-black flex items-center gap-2">
                Resume <span className="text-gray-400 text-sm font-normal">| Engagement Lead</span>
              </h3>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                  title="Print Resume"
                >
                  <Printer size={18} />
                  <span className="hidden md:inline">Print</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                  title="Download PDF"
                >
                  <Download size={18} />
                  <span className="hidden md:inline">Download</span>
                </button>

                <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-50 relative">
               <iframe
                 ref={iframeRef}
                 src={RESUME_URL}
                 className="w-full h-full border-none"
                 title="Pranav Pahuja Resume"
               />
            </div>
            
            {/* Footer */}
             <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center md:text-right">
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-black hover:underline flex items-center justify-end gap-1">
                   Open in new tab <ExternalLink size={12}/>
                </a>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
