import { useState,useRef } from 'react';
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Couple } from "@/app/components/Couple";
import { Events } from "@/app/components/Events";
import { Gallery } from "@/app/components/Gallery";
import { RSVP } from "@/app/components/RSVP";
import { Footer } from "@/app/components/Footer";
import { WelcomeEnvelope } from "@/app/components/WelcomeEnvelope";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnvelopeOpen = () => {
  setShowEnvelope(false);
  if (audioRef.current) {
    audioRef.current.volume = 0;
    audioRef.current.play().then(() => {
      // Fade in خلال 3 ثواني
      let vol = 0;
      const fade = setInterval(() => {
        vol = Math.min(vol + 0.05, 0.6);
        audioRef.current!.volume = vol;
        if (vol >= 0.6) clearInterval(fade);
      }, 150);
    }).catch(() => {});
  }
};

  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      {/* الأغنية — غيّر الـ src لأغنيتك */}
      <audio
        ref={audioRef}
        src="/music/wedding-song.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50"
          >
            <WelcomeEnvelope onOpen={handleEnvelopeOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${showEnvelope ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <Hero />
        <Couple />
        <Events />
        <Gallery />
        <Footer />
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}