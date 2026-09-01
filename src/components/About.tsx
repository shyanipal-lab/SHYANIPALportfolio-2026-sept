import { motion, AnimatePresence } from "motion/react";
import { User, Sparkles, Heart, Coffee, Code, CheckCircle2, Car, Play, Pause, Volume2, VolumeX, Maximize2, X, Film, Video, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LocationMap } from "./ui/expand-map";
import { MovingBorder } from "./ui/moving-border";
import profileImg from "../assets/images/regenerated_image_1780031625396.png";

const ABOUT_IMAGES = [
  { id: 1, src: profileImg, alt: "Shyani Pal" },
  { id: 2, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design&backgroundColor=c0aede&style=circle", alt: "Design Workshop - Caricature" },
  { id: 3, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Collab&backgroundColor=d1d4f9&style=circle", alt: "Collaboration - Caricature" },
  { id: 4, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pixel&backgroundColor=ffd5dc&style=circle", alt: "Pixel Perfection - Caricature" },
];

export default function About() {
  const [isGrid, setIsGrid] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [activeVideoTab, setActiveVideoTab] = useState<"intro" | "process" | "reel">("intro");

  // Simulated playback timer when modal is open and playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVideoOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isVideoOpen, isPlaying]);

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
              className={`relative mx-auto transition-all duration-700 ease-in-out cursor-pointer ${isGrid ? 'w-full h-[400px] md:h-[600px]' : 'aspect-square max-w-[280px] sm:max-w-md'}`}
              onClick={() => setIsGrid(!isGrid)}
            >
              <AnimatePresence mode="wait">
                {!isGrid ? (
                  <motion.div 
                    key="stack"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute inset-0 bg-brand-primary/10 rounded-[40px] md:rounded-[60px] rotate-6" />
                    <div className="absolute inset-0 bg-zinc-900 rounded-[40px] md:rounded-[60px] -rotate-3 overflow-hidden shadow-2xl">
                      <MovingBorder
                        outerClassName="absolute inset-0 pointer-events-none z-10"
                        className="bg-transparent w-full h-full"
                        borderWidth={2}
                        gradientWidth={140}
                        duration={5}
                        colors={["#dce817", "#10f400", "#75ba33"]}
                      >
                        <div className="w-full h-full bg-transparent" />
                      </MovingBorder>
                      <img 
                        src={ABOUT_IMAGES[0].src} 
                        alt="Shyani" 
                        className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700 relative z-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Floating Location Map - Only in stack view */}
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [-3, 3, -3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-12 -left-4 md:top-8 md:-left-12 z-50 scale-[0.6] sm:scale-[0.75] md:scale-[1] drop-shadow-2xl"
                    >
                      <LocationMap 
                        location="Bengaluru, India" 
                        coordinates="12.9716° N, 77.5946° E" 
                      />
                    </motion.div>
                    
                    {/* Floating Video Placeholder Component */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoOpen(true);
                      }}
                      className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100/80 z-20 group/video hover:scale-105 transition-all cursor-pointer backdrop-blur-xl bg-white/90"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-900 flex items-center justify-center overflow-hidden shrink-0 shadow-md group-hover/video:bg-brand-primary transition-colors">
                          {/* Animated Waveform Background */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-indigo-600/30 opacity-70" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/video:scale-110 transition-transform">
                              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                          {/* Live pulse dot */}
                          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-brand-primary/10 text-brand-primary">
                              Video Reel
                            </span>
                            <span className="text-[8px] md:text-[9px] font-bold text-zinc-400">0:45</span>
                          </div>
                          <p className="text-xs md:text-sm font-black text-zinc-900 leading-tight group-hover/video:text-brand-primary transition-colors flex items-center gap-1">
                            Meet Shyani
                          </p>
                          <p className="text-[9px] md:text-[10px] font-medium text-zinc-400">Click to watch intro</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Bug Tickets</p>
                          <p className="text-xs md:text-sm font-bold text-zinc-900 whitespace-nowrap">500+ Bug Tickets Closed</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                      className="absolute top-1/2 -right-10 md:-right-20 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-lg md:rounded-xl flex items-center justify-center">
                          <Car className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Cars crashed</p>
                          <p className="text-xs md:text-sm font-bold text-zinc-900">Zero 🏎️</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Click to expand
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 w-full h-full"
                  >
                    {ABOUT_IMAGES.map((img, i) => (
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl ${i === 0 ? 'row-span-2' : ''}`}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                          <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">{img.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Location Map as Grid Item */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LocationMap 
                        location="Bengaluru, India" 
                        coordinates="12.9716° N, 77.5946° E" 
                        className="w-full h-full"
                      />
                    </motion.div>

                    <div className="absolute -top-4 -right-4 bg-zinc-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg">
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

      {/* Interactive Video Player Modal Placeholder */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-zinc-950 rounded-[32px] md:rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Shyani Pal — Video Bio & Reel</h3>
                    <p className="text-[10px] font-mono text-zinc-400">4K · 60fps · Spatial Audio</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-zinc-800/80 p-1 rounded-xl">
                    <button
                      onClick={() => setActiveVideoTab("intro")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeVideoTab === "intro" ? "bg-brand-primary text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Intro
                    </button>
                    <button
                      onClick={() => setActiveVideoTab("process")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeVideoTab === "process" ? "bg-brand-primary text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Process
                    </button>
                    <button
                      onClick={() => setActiveVideoTab("reel")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeVideoTab === "reel" ? "bg-brand-primary text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Reel
                    </button>
                  </div>

                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Screen Area */}
              <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden group/player">
                {/* Simulated Visualizer / Presentation Video Content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-[100px] animate-pulse" />
                  <div className="w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] -translate-y-12" />
                </div>

                {/* Profile Video Frame */}
                <div className="relative z-10 flex flex-col items-center text-center p-8">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <img 
                        src={profileImg} 
                        alt="Shyani Pal" 
                        className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                      />
                    </div>
                    {isPlaying && (
                      <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    {activeVideoTab === "intro" && "Hi, I'm Shyani Pal"}
                    {activeVideoTab === "process" && "Design Systems & Craft Engine"}
                    {activeVideoTab === "reel" && "Product Highlights 2024-2026"}
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-zinc-400 mt-1 max-w-md">
                    {activeVideoTab === "intro" && '"Designing intuitive, scalable products for Mercedes-Benz R&D, Fyle & fast-growing startups."'}
                    {activeVideoTab === "process" && '"From 0-to-1 discovery, rapid prototyping, token architecture to pixel-perfect code handoff."'}
                    {activeVideoTab === "reel" && '"Featuring Hoshaksham SaaS, Split & Grow, Mercedes-Benz cockpit UI and Fyle mileage."'}
                  </p>

                  {/* Audio Waveform Bars Simulation */}
                  {isPlaying && (
                    <div className="flex items-center gap-1.5 mt-6 h-6">
                      {[40, 70, 90, 60, 100, 75, 45, 85, 95, 55, 80, 60, 40].map((h, idx) => (
                        <motion.div
                          key={idx}
                          animate={{ height: isPlaying ? [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] : '20%' }}
                          transition={{ duration: 0.8 + (idx * 0.1), repeat: Infinity, ease: "easeInOut" }}
                          className="w-1 bg-brand-primary rounded-full"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Big Center Play/Pause Trigger Overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/player:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transform hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-white ml-1" />}
                  </div>
                </button>
              </div>

              {/* Video Player Controls Bar */}
              <div className="p-4 md:p-6 bg-zinc-900 border-t border-zinc-800 flex flex-col gap-3">
                {/* Scrubber Progress Bar */}
                <div 
                  className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <motion.div 
                    className="h-full bg-brand-primary relative rounded-full"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>

                {/* Controls Action Row */}
                <div className="flex items-center justify-between text-zinc-400 text-xs">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-brand-primary transition-colors p-1"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                    </button>
                    <button 
                      onClick={() => setProgress(0)}
                      className="hover:text-white transition-colors p-1"
                      title="Restart"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-white transition-colors p-1"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-[11px] text-zinc-400">
                      0:{Math.floor((progress * 45) / 100).toString().padStart(2, "0")} / 0:45
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                      1080p HD
                    </span>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-white transition-colors p-1"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

