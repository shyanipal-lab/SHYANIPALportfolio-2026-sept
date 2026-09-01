import { motion, AnimatePresence } from "motion/react";
import { User, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./ui/video-player";
import profileImg from "../assets/images/regenerated_image_1780031625396.png";

const ABOUT_IMAGES = [
  { id: 1, src: profileImg, alt: "Shyani Pal" },
];

const DEFAULT_VIDEO_SRC = "https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4";

export default function About() {
  const [isGrid, setIsGrid] = useState(false);
  const [videoSrc, setVideoSrc] = useState(DEFAULT_VIDEO_SRC);
  const [videoFileName, setVideoFileName] = useState("");
  const [isCustomVideo, setIsCustomVideo] = useState(false);

  const handleVideoUpload = (newUrl: string, file: File) => {
    setVideoSrc(newUrl);
    setVideoFileName(file.name);
    setIsCustomVideo(true);
  };

  const handleResetVideo = () => {
    setVideoSrc(DEFAULT_VIDEO_SRC);
    setVideoFileName("");
    setIsCustomVideo(false);
  };

  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className={`relative mx-auto transition-all duration-700 ease-in-out cursor-pointer ${isGrid ? 'w-full max-w-[340px] sm:max-w-[460px] md:max-w-[500px]' : 'aspect-square w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px]'}`}
              onClick={() => setIsGrid(!isGrid)}
            >
              <AnimatePresence mode="wait">
                {!isGrid ? (
                  <motion.div 
                    key="stack"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Stack Background Layer 1 */}
                    <div className="absolute inset-0 bg-brand-primary/10 rounded-[40px] md:rounded-[60px] rotate-12 scale-105 pointer-events-none" />
                    
                    {/* Stack Layer 2: Video Player Card behind */}
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="absolute inset-0 bg-zinc-950 rounded-[40px] md:rounded-[60px] rotate-6 translate-x-4 sm:translate-x-8 -translate-y-2 overflow-hidden shadow-2xl border border-zinc-800 flex items-center justify-center p-2.5 sm:p-4 z-10 opacity-95 hover:opacity-100 hover:rotate-8 hover:translate-x-8 sm:hover:translate-x-12 hover:-translate-y-4 hover:scale-[1.03] transition-all duration-500"
                    >
                      <div className="w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden flex items-center justify-center bg-black">
                        <VideoPlayer 
                          src={videoSrc}
                          allowUpload={true}
                          onVideoUpload={handleVideoUpload}
                          onResetVideo={handleResetVideo}
                          isCustomVideo={isCustomVideo}
                          videoFileName={videoFileName}
                          className="w-full h-full rounded-none"
                        />
                      </div>
                    </div>

                    {/* Stack Layer 3: Front Image Placeholder Card */}
                    <div 
                      className="relative w-full h-full bg-zinc-900 rounded-[40px] md:rounded-[60px] -rotate-3 overflow-hidden shadow-2xl z-20 group/imgcard border border-zinc-800"
                    >
                      <img 
                        src={ABOUT_IMAGES[0].src} 
                        alt="Shyani Pal" 
                        className="w-full h-full object-cover opacity-90 grayscale group-hover/imgcard:grayscale-0 transition-all duration-700 relative z-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono text-zinc-300 border border-white/10 z-20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Shyani Pal
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg z-30">
                      Click to expand
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 w-full relative"
                  >
                    {/* Primary Image in 1:1 Square Frame */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="relative aspect-square w-full rounded-3xl md:rounded-[36px] overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800"
                    >
                      <img 
                        src={ABOUT_IMAGES[0].src} 
                        alt={ABOUT_IMAGES[0].alt} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono text-zinc-300 border border-white/10 z-20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {ABOUT_IMAGES[0].alt}
                      </div>
                    </motion.div>

                    {/* Video Player in 1:1 Square Frame */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="relative aspect-square w-full rounded-3xl md:rounded-[36px] overflow-hidden shadow-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-3 sm:p-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-full h-full rounded-2xl md:rounded-[28px] overflow-hidden flex items-center justify-center bg-black">
                        <VideoPlayer 
                          src={videoSrc}
                          allowUpload={true}
                          onVideoUpload={handleVideoUpload}
                          onResetVideo={handleResetVideo}
                          isCustomVideo={isCustomVideo}
                          videoFileName={videoFileName}
                          className="w-full h-full rounded-none"
                        />
                      </div>
                    </motion.div>

                    <div className="absolute -top-4 -right-2 bg-zinc-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg z-30">
                      Click to stack
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8"
            >
              <User className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-header text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-[0.9]"
            >
              Designing <span className="text-brand-primary font-accent lowercase">human</span> <br />
              centered <span className="text-zinc-200">products</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 md:mb-12 font-medium max-w-2xl mx-auto lg:mx-0"
            >
              I help teams make better decisions through design. 
              Product designer with 5+ years of experience across mobility, fintech, and consumer apps. 
              Currently at Mercedes-Benz R&D, Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-4 bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary transition-all shadow-xl group"
              >
                Full Story & Journey
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

