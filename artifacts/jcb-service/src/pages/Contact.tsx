import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSubmitEnquiry } from "@workspace/api-client-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Please provide at least 10 characters about the work required." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitEnquiry = useSubmitEnquiry();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitEnquiry.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Request Received",
            description: "We will contact you shortly regarding your earthmoving needs.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "Please try again or contact us directly by phone.",
            variant: "destructive",
          });
        },
      }
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full pb-20 md:pb-32 bg-background">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Share your job needs and site details. We respond quickly to confirm availability and scope.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-3 bg-card border-4 border-border p-8 md:p-10 relative"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary"></div>

            <h2 className="text-3xl font-display font-black uppercase mb-6">Request Support</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you to discuss your project requirements.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-sm tracking-wider">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="h-12 border-2 rounded-none" data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-sm tracking-wider">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} className="h-12 border-2 rounded-none" data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase font-bold text-sm tracking-wider">Job Details & Location</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the work needed, site location, project type (e.g. residential plot clearing, foundation digging), and preferred timing."
                          className="min-h-[140px] border-2 rounded-none resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold uppercase tracking-wide"
                  disabled={submitEnquiry.isPending}
                  data-testid="btn-submit-contact"
                >
                  {submitEnquiry.isPending ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-secondary text-secondary-foreground p-8 md:p-10 border-l-8 border-primary">
              <h3 className="text-2xl font-display font-black uppercase mb-6">Direct Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1 opacity-70">Call Us</h4>
                    <a href="tel:+917706034464" className="text-lg font-bold hover:text-primary transition-colors" data-testid="link-contact-call">
                      +91 7706034464
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1 opacity-70">Email</h4>
                    <a href="mailto:hello@amantradingjcbservice.in" className="text-lg font-bold hover:text-primary transition-colors" data-testid="link-contact-email">
                      hello@amantradingjcbservice.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1 opacity-70">Service Area</h4>
                    <p className="text-lg font-bold">
                      Bihar Lalpur & Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1 opacity-70">Working Hours</h4>
                    <p className="text-lg font-bold">
                      Mon-Sun, 6:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild variant="outline" className="w-full h-14 text-lg font-bold uppercase tracking-wide bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="https://wa.me/917706034464?text=Hello%20Aman%20Trading%20JCB%20Service%2C%20I%20need%20JCB%20support%20for%20my%20project.%20Please%20share%20availability%20and%20pricing." target="_blank" rel="noopener noreferrer" data-testid="btn-contact-whatsapp">
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
