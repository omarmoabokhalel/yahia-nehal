import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dobrjr0sc/image/upload/v1780160500/WhatsApp_Image_2026-05-30_at_6.48.43_PM_1_jf22ow.jpg"
          alt="Indian Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#800020]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-['Lato'] uppercase tracking-[0.3em] text-sm md:text-lg mb-4 text-[#D4AF37]">
            We're Getting Married
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-['Great_Vibes'] text-6xl md:text-8xl lg:text-9xl mb-6 drop-shadow-lg"
        >
          Yahia & Nehal
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-[2px] w-24 bg-[#D4AF37] mb-4" />
          <p className="font-['Lato'] text-xl md:text-2xl font-light">
            December 17, 2026
          </p>
          <p className="font-['Lato'] text-lg md:text-xl font-light tracking-wide">
            قصر الامراء
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
         <div className="w-[1px] h-16 bg-white/50"></div>
      </div>
    </section>
  );
}
