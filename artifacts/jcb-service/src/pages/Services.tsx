import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Phone, Truck, Settings, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Services() {
  const services = [
    {
      title: "Excavation and Site Preparation",
      description: "For foundations, pits, trenches, and early-stage land work.",
      icon: Truck,
      jobs: [
        "Plot excavation",
        "Foundation digging",
        "Site clearing",
        "Debris removal"
      ]
    },
    {
      title: "Construction Support",
      description: "For active building sites that need dependable machine support.",
      icon: Settings,
      jobs: [
        "Material loading",
        "Backfilling",
        "Road work support",
        "Utility trenching"
      ]
    },
    {
      title: "Land and Access Improvements",
      description: "For farms, private land, and commercial spaces.",
      icon: MapPin,
      jobs: [
        "Land leveling",
        "Approach road preparation",
        "Drainage channels",
        "Boundary cleanup"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Share your job need",
      desc: "Tell us your site type, work scope, and preferred timing by phone, WhatsApp, or form."
    },
    {
      number: "02",
      title: "Confirm site requirement",
      desc: "We align on the machine work needed, location, and expected support for the job."
    },
    {
      number: "03",
      title: "Get work moving",
      desc: "Our team arrives prepared to help you complete the site activity efficiently and safely."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[100px] border-primary/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Reliable earthmoving support for residential, commercial, and industrial projects. We bring the right machinery to get the job done.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-card border-2 border-border p-8 md:p-10 relative flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold uppercase mb-4 leading-tight">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                
                <div className="mt-auto">
                  <h3 className="font-bold uppercase tracking-wider text-sm text-secondary mb-4">Common Jobs:</h3>
                  <ul className="space-y-3">
                    {service.jobs.map((job, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium text-card-foreground">{job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary opacity-20"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground border-y-8 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              A simple, straightforward process to get your site moving quickly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                className="relative p-8 border-l-4 border-primary bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors"
              >
                <div className="text-6xl font-display font-black text-primary/20 absolute top-4 right-6 pointer-events-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-4 relative z-10 text-white">{step.title}</h3>
                <p className="text-muted-foreground relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button asChild size="lg" className="h-14 px-8 text-lg font-bold uppercase tracking-wide">
                <Link href="/contact" data-testid="services-btn-contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
