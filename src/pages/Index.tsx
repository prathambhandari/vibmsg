import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Zap, Shield, Users, Smartphone, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black text-primary animate-fade-in">
                  VibMSG
                </h1>
                <p className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                  Connect Faster. Chat Smarter.
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The next generation messaging app designed for speed, privacy, and seamless communication across all your devices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary group">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button className="btn-secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Built for the Future of <span className="text-primary">Communication</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience messaging like never before with cutting-edge features designed for modern conversations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Send messages instantly with our optimized delivery system"
              },
              {
                icon: Shield,
                title: "Private & Secure",
                description: "End-to-end encryption keeps your conversations protected"
              },
              {
                icon: Users,
                title: "Built for Groups",
                description: "Seamless group chats and community management tools"
              },
              {
                icon: Smartphone,
                title: "Cross-Device Sync",
                description: "Access your messages anywhere, on any device, instantly"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background rounded-3xl p-8 shadow-soft hover-lift group border border-border">
                <div className="bg-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VibMSG Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose <span className="text-primary">VibMSG?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: "Designed for the Next Generation",
                    description: "Modern interface and intuitive design that feels natural and engaging."
                  },
                  {
                    icon: Zap,
                    title: "Unmatched Speed",
                    description: "Messages deliver in milliseconds, not seconds. Feel the difference."
                  },
                  {
                    icon: Shield,
                    title: "Privacy First",
                    description: "Your data stays yours. We don't read, store, or sell your messages."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-primary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-3xl p-8 shadow-large border border-border">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground">Uptime Reliability</p>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">&lt;10ms</div>
                    <p className="text-sm text-muted-foreground">Message Latency</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">256-bit</div>
                    <p className="text-sm text-muted-foreground">Encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Be the First to Try VibMSG
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our waitlist and get early access when we launch. Plus, exclusive beta features!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-input border-border text-foreground placeholder:text-muted-foreground rounded-2xl"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-2xl font-semibold shadow-soft hover-lift whitespace-nowrap">
                Join Waitlist
              </Button>
            </div>
            
            <div className="flex justify-center gap-6 pt-8">
              {['Twitter', 'Discord', 'GitHub'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center hover-lift text-foreground hover:bg-accent/80 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-6 h-6 bg-foreground/60 rounded"></div>
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground text-sm pt-8">
              © 2024 VibMSG. Built with ❤️ for better conversations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;