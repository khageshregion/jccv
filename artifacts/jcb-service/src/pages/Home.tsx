import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Clock, MapPin, Truck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        {/* Abstract background elements to represent earth/dirt layers */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Aman Trading JCB Service</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-black uppercase leading-[1.1] mb-6">
              Dependable <span className="text-primary">Earthmoving</span> Support
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
              Reliable machinery and experienced operators for residential, commercial, and industrial projects in Bihar Lalpur.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold uppercase tracking-wide">
                <a href="tel:+917706034464" data-testid="hero-btn-call">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-bold uppercase tracking-wide bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/services" data-testid="hero-btn-services">
                  View Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-6 border-b-8 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12 font-bold uppercase tracking-wider text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span>Experienced Operators</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Timely Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <span>Well-Maintained Equipment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Heavy-duty support tailored to your site's specific requirements. From early excavation to final leveling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excavation & Site Prep",
                desc: "For foundations, pits, trenches, and early-stage land work.",
                icon: Truck
              },
              {
                title: "Construction Support",
                desc: "For active building sites that need dependable machine support.",
                icon: Settings
              },
              {
                title: "Land & Access",
                desc: "For farms, private land, and commercial space improvements.",
                icon: MapPin
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                className="bg-card border-2 border-border p-8 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8">{service.desc}</p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-primary font-bold uppercase tracking-wider group-hover:gap-2 transition-all"
                  data-testid={`link-service-card-${i}`}
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 clip-triangle"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8">Built for the work that matters</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Residential",
                    desc: "Plot cleaning, foundation digging, leveling, and access preparation for homes and private land."
                  },
                  {
                    title: "Commercial",
                    desc: "Retail, office, and layout development support with machine-ready service for active site needs."
                  },
                  {
                    title: "Industrial",
                    desc: "Heavy-duty support for factories, yards, infrastructure, and larger operational ground work."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold uppercase mb-2 text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-card text-card-foreground p-8 md:p-12 border-4 border-primary relative"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary border-4 border-primary"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-secondary border-4 border-primary"></div>
              
              <h3 className="text-2xl font-display font-bold uppercase mb-6">Ready to start?</h3>
              <p className="text-muted-foreground mb-8">
                We respond quickly to availability requests and pricing inquiries. Let us know what you need.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full h-14 text-lg font-bold uppercase tracking-wide">
                  <a href="tel:+917706034464" data-testid="help-btn-call">
                    <Phone className="mr-2 h-5 w-5" />
                    +91 7706034464
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full h-14 text-lg font-bold uppercase tracking-wide">
                  <a href="https://wa.me/917706034464?text=Hello%20Aman%20Trading%20JCB%20Service%2C%20I%20need%20JCB%20support%20for%20my%20project.%20Please%20share%20availability%20and%20pricing." target="_blank" rel="noopener noreferrer" data-testid="help-btn-whatsapp">
                    WhatsApp Message
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
