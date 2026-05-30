import { useState } from 'react';
import { motion } from 'motion/react';

interface WelcomeEnvelopeProps {
  onOpen: () => void;
  onButtonClick: () => void;
}

export function WelcomeEnvelope({ onOpen, onButtonClick }: WelcomeEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    onButtonClick(); // 👈 شغّل الموسيقى فوراً مع الـ click
    setIsOpen(true);
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0505] overflow-hidden">
      <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
        
        {/* The Card Inside (Preview) */}
        <motion.div
          initial={{ y: 0, scale: 0.9 }}
          animate={isOpen ? { y: -100, scale: 1, opacity: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-[90%] h-[85%] bg-[#FFF8E7] shadow-lg rounded-lg flex flex-col items-center justify-center z-10 p-8 text-center border-4 border-[#D4AF37]/20"
        >
           <h1 className="font-['Great_Vibes'] text-5xl text-[#800020] mb-2">Yahia & Nehal</h1>
           <p className="font-['Lato'] uppercase tracking-widest text-sm text-gray-600">Invite you to their wedding</p>
        </motion.div>

        {/* Envelope Body */}
        <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Bottom Flap */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#800020] [clip-path:polygon(0%_100%,100%_100%,50%_0%)] shadow-2xl"></div>
            {/* Left Flap */}
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#6b001b] [clip-path:polygon(0%_0%,0%_100%,100%_50%)]"></div>
            {/* Right Flap */}
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#6b001b] [clip-path:polygon(100%_0%,100%_100%,0%_50%)]"></div>
        </div>

        {/* Top Flap (The one that opens) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#900024] [clip-path:polygon(0%_0%,100%_0%,50%_100%)] shadow-lg z-30 flex items-center justify-center"
        >
        </motion.div>

         {/* Wax Seal Button */}
         <motion.button
            onClick={handleOpen}
            initial={{ scale: 1, opacity: 1 }}
            animate={isOpen ? { scale: 1.5, opacity: 0 } : {}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute z-40 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
            style={{ 
                top: '40%', // Positioned over the flap intersection
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))'
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#D4AF37]/50">
               <img 
                 src="https://images.unsplash.com/photo-1578531504112-0dcd95eda450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXglMjBzZWFsJTIwc3RhbXAlMjBnb2xkJTIwcmVkJTIwd2VkZGluZ3xlbnwxfHx8fDE3Njk5MzY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                 alt="Open Invitation" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#800020]/20 hover:bg-transparent transition-colors"></div>
            </div>
            <div className="absolute text-white font-['Lato'] text-xs font-bold tracking-widest uppercase drop-shadow-md mt-1">Open</div>
          </motion.button>

      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
    </div>
  );
}
