import { motion } from "framer-motion";
import img1 from "@/assets/images/gallery-1.png";
import img2 from "@/assets/images/gallery-2.png";
import img3 from "@/assets/images/gallery-3.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Gallery() {
  const images = [
    {
      src: img1,
      alt: "JCB excavator at work on a construction site",
      caption: "Site Excavation",
      desc: "Heavy-duty digging for foundation and plot preparation."
    },
    {
      src: img2,
      alt: "Aerial view of earthmoving project",
      caption: "Large-Scale Earthmoving",
      desc: "Coordinated machinery for expansive commercial and industrial sites."
    },
    {
      src: img3,
      alt: "JCB backhoe loader at a foundation dig",
      caption: "Residential Foundation Dig",
      desc: "Precision trenching and foundation work for new homes."
    }
  ];

  return (
    <div className="w-full pb-20 md:pb-32 bg-background">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 border-b-8 border-primary mb-16 md:mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-6"
          >
            Work Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A look at our machinery in action across various sites in Bihar Lalpur and surrounding areas.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-12"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center group`}
            >
              <div className="w-full md:w-2/3">
                <div className="relative p-2 border-4 border-border bg-card transition-colors group-hover:border-primary duration-300">
                  {/* Image container with 16:9 aspect ratio */}
                  <div className="relative w-full aspect-video overflow-hidden bg-muted">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                <div className="h-1 w-12 bg-primary mb-6"></div>
                <h2 className="text-3xl font-display font-bold uppercase">{img.caption}</h2>
                <p className="text-lg text-muted-foreground">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
