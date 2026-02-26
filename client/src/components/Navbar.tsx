import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group outline-none"
          >
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <HeartPulse className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold font-display text-foreground">
              Meximies
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('classes')} 
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Our Classes
            </button>
            <Button 
              onClick={() => scrollToSection('join')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Join the Community
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl py-6 px-4 flex flex-col gap-4"
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted font-medium"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('classes')}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted font-medium"
          >
            Our Classes
          </button>
          <Button 
            onClick={() => scrollToSection('join')}
            className="w-full mt-2 bg-primary rounded-xl py-6 text-lg"
          >
            Join the Community
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
