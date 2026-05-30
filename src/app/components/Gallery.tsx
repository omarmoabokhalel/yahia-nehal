import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780157173/WhatsApp_Image_2026-05-30_at_6.24.47_PM_4_wjqals.jpg",
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155571/WhatsApp_Image_2026-05-30_at_6.24.47_PM_2_hfkwzp.jpg",
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780157219/WhatsApp_Image_2026-05-30_at_6.24.48_PM_1_i0hnv2.jpg",
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155567/WhatsApp_Image_2026-05-30_at_6.24.48_PM_2_q2f7fi.jpg",
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155567/WhatsApp_Image_2026-05-30_at_6.24.47_PM_5_y6fxfd.jpg",
  "https://res.cloudinary.com/dobrjr0sc/image/upload/v1780155579/WhatsApp_Image_2026-05-30_at_6.24.47_PM_3_t8x2fu.jpg",
  ];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#FFF8E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Great_Vibes'] text-5xl text-[#800020] mb-2">Captured Moments</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto"></div>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
          <Masonry gutter="16px">
            {images.map((image, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  style={{width: "100%", display: "block"}}
                  alt={`Gallery Image ${i + 1}`}
                  className="hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
