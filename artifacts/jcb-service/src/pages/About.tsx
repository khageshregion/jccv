import { motion } from "framer-motion";
import { ShieldCheck, Clock, MapPin, Target } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function About() {
  const values = [
    {
      title: "Safety First",
      description: "Our operators are experienced and focused on safe machine handling at all times, protecting your site and our crew.",
      icon: ShieldCheck
    },
    {
      title: "Timely Coordination",
      description: "We understand that construction delays cost money. We communicate clearly on site timing and stick to the schedule.",
      icon: Clock
    },
    {
      title: "Local Expertise",
      description: "We know the terrain. Serving Bihar Lalpur and surrounding areas gives us the advantage of understanding local soil and access conditions.",
      icon: MapPin
    },
    {
      title: "Job-Matched Support",
      description: "We don't just send a machine; we send the right support for the specific job, whether it's a tight residential plot or an open industrial site.",
      icon: Target
    }
  ];

  return (
    <div className="w-full pb-20 md:pb-32 bg-background">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary clip-triangle opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Honest, grounded, and built on reputation. We are your dependable local earthmoving partner.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-display font-black uppercase mb-6 text-secondary">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Aman Trading JCB Service was built to solve a simple problem: local contractors and plot owners needed a dependable machine hire service that actually showed up when promised and got the work done without the runaround.
                </p>
                <p>
                  We operate out of Bihar Lalpur, serving the surrounding rural and semi-urban areas. Our focus isn't on corporate polish; it's on providing heavy equipment, raw earthmoving capability, and machinery that keeps your project moving forward.
                </p>
                <p>
                  When you hire us, you're getting a trusted local operator who understands the visual weight and practical demands of earthmoving work.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-card p-8 md:p-12 border-4 border-border relative"
          >
            {/* Decorative construction styling */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,var(--color-primary),var(--color-primary)_10px,var(--color-secondary)_10px,var(--color-secondary)_20px)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,var(--color-primary),var(--color-primary)_10px,var(--color-secondary)_10px,var(--color-secondary)_20px)]"></div>
            
            <h2 className="text-3xl font-display font-black uppercase mb-8 text-secondary mt-4">The Aman Trading Difference</h2>
            
            <div className="space-y-8">
              {values.map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold uppercase mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
