import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a0505] text-[#D4AF37] py-12 border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-['Great_Vibes'] text-5xl mb-6">Yahia & Nehal</h2>
        <p className="font-['Lato'] uppercase tracking-[0.3em] text-sm mb-8">
          December 17, 2026 
        </p>
        
        <div className="flex justify-center items-center gap-2 mb-8 opacity-70">
          <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
          <Heart size={16} fill="#D4AF37" />
          <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
        </div>

        <p className="font-['Lato'] text-xs text-white/50 tracking-wider">
          #YahiaWedsNehal2026
        </p>
        
        <div className="mt-8 text-[10px] text-white/30">
            © 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
