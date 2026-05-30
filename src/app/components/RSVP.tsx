import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  guests: number;
  attending: string;
  message: string;
};

export function RSVP() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Thank you for your RSVP! We can't wait to see you.");
    reset();
  };

  return (
    <section id="rsvp" className="py-24 bg-[#800020] text-white relative overflow-hidden">
      {/* Decorative Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-[#D4AF37]/30 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="font-['Great_Vibes'] text-5xl mb-2 text-[#D4AF37]">RSVP</h2>
            <p className="font-['Lato'] tracking-wide">Please respond by November 1st, 2026</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-['Lato']">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-[#D4AF37]">Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-black/20 border border-[#D4AF37]/50 rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && <span className="text-red-300 text-xs mt-1">{errors.name.message}</span>}
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-[#D4AF37]">Email Address</label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-black/20 border border-[#D4AF37]/50 rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && <span className="text-red-300 text-xs mt-1">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-[#D4AF37]">Number of Guests</label>
                <select
                  {...register("guests", { required: true })}
                  className="w-full bg-black/20 border border-[#D4AF37]/50 rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors [&>option]:text-black"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-[#D4AF37]">Attending?</label>
                <select
                  {...register("attending", { required: true })}
                  className="w-full bg-black/20 border border-[#D4AF37]/50 rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors [&>option]:text-black"
                >
                  <option value="yes">Joyfully Accepts</option>
                  <option value="no">Regretfully Declines</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider mb-2 text-[#D4AF37]">Message for the Couple</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-black/20 border border-[#D4AF37]/50 rounded px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Write a message..."
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type="submit"
                className="bg-[#D4AF37] text-[#800020] px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send RSVP'}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
