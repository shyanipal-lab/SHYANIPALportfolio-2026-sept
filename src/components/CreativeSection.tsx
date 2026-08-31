import { motion } from "motion/react";
import { Sparkles, Layers } from "lucide-react";
import { ExpandableGallery } from "./ui/expandable-gallery";

export default function CreativeSection() {
  return (
    <section id="creative" className="py-20 md:py-32 bg-zinc-50/70 border-y border-zinc-200/80 scroll-mt-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary">CREATIVE GALLERY</span>
            </div>
            <h2 className="font-header text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Visuals <br />
              <span className="text-brand-primary font-accent lowercase">illustrations</span> & motion.
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
              An interactive expandable gallery showcasing custom character art, Lottie animations, 3D visual concepts, and storyboard animatics.
            </p>
          </motion.div>
        </div>

        {/* Expandable Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <ExpandableGallery />
        </motion.div>
      </div>
    </section>
  );
}

