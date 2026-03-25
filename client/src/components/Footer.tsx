import { HeartPulse, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold font-display text-white">
                Meximies Inc.
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
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                meximiesny@gmail.com
              </a>
              <a
                href="tel:+18452618243"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                +1 (845) 261-8243
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0" />
                21 Charnwood Dr, Suffern, NY 10901
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold font-display text-white mb-6">Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 shrink-0" />
                <div>
                  <p>Mon – Fri: 3:00 PM – 9:00 PM</p>
                  <p>Sat – Sun: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Meximies Inc. Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
