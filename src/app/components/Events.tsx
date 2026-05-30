import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import haldiImage from "figma:asset/f3c47a3a8979c65df564fdd86534170f1638b880.png";

const events = [
  {
    title: "العزال",
    date: "December 2, 2026",
    time: "4:00 PM",
    venue: "شارع القنايه",
    description: "متتأخروش علشان تشيلوا معانا علشان ال مش هيشيل مش هيأكل",
    image: "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780156969/ww_pm7ik7.jpg",
    align: "left"
  },
  {
    title: "حنة العروسة",
    date: "December 15, 2026",
    time: "7:00 PM",
    venue: " قاعة ترند",
    description: "حنة وشماريخ وضرب نار وكتب كتاب تعالو علشان تشهدوا",
    image: "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155568/WhatsApp_Image_2026-05-30_at_6.24.47_PM_1_n7eaky.jpg",
    align: "right"
  },
  {
    title: "The Wedding",
    date: "December 17, 2026",
    time: "8:00 PM",
    venue: "قصر الأمراء",
    description: " مستنيينكم يوم الفرح عشان نضحك ونفرح ونحتفل سوا بأجمل بداية 🤍✨ ",
    image: "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155803/hero_td6ged.jpg",
    align: "left"
  }
];

export function Events() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Great_Vibes'] text-5xl text-[#800020] mb-2">Wedding Events</h2>
          <p className="font-['Lato'] text-gray-600 uppercase tracking-widest text-sm">A Royal Affair</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#D4AF37]/30"></div>

          <div className="space-y-12 md:space-y-0">
            {events.map((event, index) => {
              const isHaldi = event.title === "Haldi Ceremony";
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                    event.align === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Side */}
                  <div className={`w-full md:w-1/2 flex ${event.align === 'right' ? 'md:justify-start' : 'md:justify-end'} px-0 md:px-12`}>
                     <div 
                        className={`relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFF8E7] bg-[#FFF8E7] ${isHaldi ? 'pb-10' : ''}`}
                     >
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className={`w-full h-full transition-transform duration-700 hover:scale-110 ${isHaldi ? 'object-contain object-bottom' : 'object-cover'}`} 
                        />
                     </div>
                  </div>
  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 flex ${event.align === 'right' ? 'md:justify-end' : 'md:justify-start'} px-0 md:px-12 text-center md:text-left`}>
                    <div className={`bg-[#FFF8E7] p-8 rounded-lg shadow-lg border border-[#D4AF37]/20 w-full max-w-md relative`}>
                      
                      {/* Arrow for Desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FFF8E7] rotate-45 border-l border-b border-[#D4AF37]/20 ${
                          event.align === 'right' ? '-right-2 border-l-0 border-b-0 border-t border-r' : '-left-2'
                      }`}></div>
  
                      <h3 className="font-['Great_Vibes'] text-3xl text-[#800020] mb-4">{event.title}</h3>
                      
                      <div className="space-y-3 mb-4 text-gray-700 font-['Lato']">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <Calendar size={16} className="text-[#D4AF37]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <Clock size={16} className="text-[#D4AF37]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-left">
                          <MapPin size={16} className="text-[#D4AF37] shrink-0" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      
                      <p className="font-['Lato'] text-gray-600 text-sm italic">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
