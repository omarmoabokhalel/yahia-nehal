import { motion } from 'motion/react';

export function Couple() {
  return (
    <section id="couple" className="py-20 bg-[#FFF8E7] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Great_Vibes'] text-5xl text-[#800020] mb-2">The Happy Couple</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-xl">❦</span>
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="relative w-64 h-64 mb-6 rounded-full border-4 border-[#D4AF37] p-2 shadow-xl bg-white">
              <img
                src="https://res.cloudinary.com/dobrjr0sc/image/upload/v1780156162/yahia_izhjqk.jpg"
                alt="Aarav - The Groom"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-['Great_Vibes'] text-4xl text-[#800020] mb-2">Yahia Mohammed</h3>
            <p className="font-['Lato'] text-gray-600 italic mb-4">The Groom (Engineer)</p>
            <p className="font-['Lato'] text-gray-700 leading-relaxed text-sm">
A passionate civil engineer who is loved by everyone. He fell in love with Nehal’s lively spirit and her lackluster coffee-making skills.            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block font-['Great_Vibes'] text-6xl text-[#D4AF37]">&</div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="relative w-64 h-64 mb-6 rounded-full border-4 border-[#D4AF37] p-2 shadow-xl bg-white">
              <img
                src="https://res.cloudinary.com/dobrjr0sc/image/upload/v1780160964/WhatsApp_Image_2026-05-30_at_8.07.54_PM_saicpq.jpg"
                alt="Riya - The Bride"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-['Great_Vibes'] text-4xl text-[#800020] mb-2">Nehal Mohammed</h3>
            <p className="font-['Lato'] text-gray-600 italic mb-4">The Bride</p>
            <p className="font-['Lato'] text-gray-700 leading-relaxed text-sm">
She doesn't work, but her beautiful spirit made Yahia fall in love with her. And she found peace with Yahia.            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
