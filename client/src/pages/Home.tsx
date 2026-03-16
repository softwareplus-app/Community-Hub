import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Music, Activity, Users, ArrowRight, CheckCircle, Sparkles, Send, MapPin, Phone, Clock } from "lucide-react";
import { insertLeadSchema, type InsertLead } from "@shared/schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export default function Home() {
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    const subject = encodeURIComponent(`New Inquiry: ${data.interest} - from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nInterest: ${data.interest}\n\nMessage:\n${data.message || "N/A"}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=meximiesny@gmail.com&su=${subject}&body=${body}`, "_blank");
    form.reset();
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Navbar />

      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-secondary/15 rounded-full blur-[120px] -z-10 animate-float-delayed" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-accent/20 rounded-full blur-[120px] -z-10 animate-float" />

      <main>
        {/* HERO SECTION */}
        <section id="about" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border mb-8">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-foreground">Community & Wellness</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6">
              Find Your Rhythm, <br />
              <span className="text-gradient">Build Your Strength</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Maximize offers vibrant musical and exercise classes designed to bring the community together. Discover new passions, meet amazing people, and transform your daily routine.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Join a Class Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('classes')?.scrollIntoView({behavior: 'smooth'})}
                className="rounded-full px-8 h-14 text-lg border-2 hover:bg-muted transition-all"
              >
                Explore Offerings
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4 text-sm font-medium text-muted-foreground justify-center">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-white"><Users className="w-5 h-5"/></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-white"><Music className="w-5 h-5"/></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-white"><Activity className="w-5 h-5"/></div>
              </div>
              <p>Join over 500+ happy community members</p>
            </motion.div>
          </motion.div>
        </section>

        {/* CLASSES SECTION */}
        <section id="classes" className="py-24 bg-white/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                Discover Our Classes
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Whether you're looking to express yourself musically or sweat it out with friends, we have a space for you.
              </p>
              <p className="text-lg font-semibold text-primary">$100 – $150 per session</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Music Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-10 shadow-lg shadow-black/5 border border-border/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8">
                  <Music className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold font-display mb-4 text-foreground">Musical Classes</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Unleash your inner musician! From group vocal sessions to beginner instrument workshops, our music classes are focused on joy, rhythm, and collaboration.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Group vocal & choir', 'Guitar & percussion basics', 'Music theory made fun', 'Community jam sessions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl h-12 text-secondary border-secondary/20 hover:bg-secondary hover:text-white transition-colors"
                  onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Join Music Class
                </Button>
              </motion.div>

              {/* Exercise Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-10 shadow-lg shadow-black/5 border border-border/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold font-display mb-4 text-foreground">Exercise Classes</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Move your body, clear your mind! Our energetic group workouts cater to all fitness levels. Expect great music, high energy, and a supportive environment.
                </p>
                <ul className="space-y-4 mb-10">
                  {['High-energy cardio', 'Flexibility & stretching', 'Strength building', 'Outdoor park sessions'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl h-12 text-primary border-primary/20 hover:bg-primary hover:text-white transition-colors"
                  onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Join Exercise Class
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT / JOIN SECTION */}
        <section id="join" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-[2.5rem] shadow-2xl shadow-black/5 border border-border/50 p-8 md:p-16 relative overflow-hidden">
              {/* Background gradient for form card */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[80px]" />
              
              <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold font-display text-foreground mb-4">
                  Ready to join the fun?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below or email us directly at <br/>
                  <a href="mailto:meximiesny@gmail.com" className="text-primary font-semibold hover:underline">meximiesny@gmail.com</a>
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>21 Charnwood Dr, Suffern, NY 10901</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+18452618243" className="hover:text-primary transition-colors">+1 (845) 261-8243</a>
                  </div>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Weekends: 9 AM – 9 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Mon–Fri: 3 PM – 9 PM</span>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Jane Doe" 
                              {...field} 
                              className="h-14 rounded-xl bg-background border-border/60 focus:ring-primary/20 focus:border-primary text-base px-4"
                            />
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
                          <FormLabel className="text-base">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="jane@example.com" 
                              {...field} 
                              className="h-14 rounded-xl bg-background border-border/60 focus:ring-primary/20 focus:border-primary text-base px-4"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Area of Interest</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-xl bg-background border-border/60 focus:ring-primary/20 focus:border-primary text-base px-4">
                              <SelectValue placeholder="What are you interested in?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl border-border/50 shadow-xl">
                            <SelectItem value="Music" className="text-base py-3 cursor-pointer">Music Classes</SelectItem>
                            <SelectItem value="Exercise" className="text-base py-3 cursor-pointer">Exercise Classes</SelectItem>
                            <SelectItem value="General" className="text-base py-3 cursor-pointer">Both / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a bit about what you're looking for..."
                            {...field}
                            value={field.value ?? ""}
                            className="min-h-[120px] rounded-xl bg-background border-border/60 focus:ring-primary/20 focus:border-primary text-base p-4 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </div>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
