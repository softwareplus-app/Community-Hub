import { HeartPulse, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold font-display text-white">
                Maximize
              </span>
            </div>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Bringing the community together through rhythm, movement, and wellness. 
              Find your passion with us.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold font-display text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="mailto:meximiesny@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                meximiesny@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-6">Quick Links</h4>
            <div className="space-y-4 flex flex-col items-start">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-muted-foreground hover:text-white transition-colors">About Us</button>
              <button onClick={() => document.getElementById('classes')?.scrollIntoView({behavior: 'smooth'})} className="text-muted-foreground hover:text-white transition-colors">Classes</button>
              <button onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})} className="text-muted-foreground hover:text-white transition-colors">Join Now</button>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-muted-foreground">
          <p>© {new Date().getFullYear()} Maximize Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
