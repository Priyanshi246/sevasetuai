import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Brain, MapPin, Users, Bell, BarChart3, ScanLine, ArrowRight, Play, Heart, CheckCircle2, Sparkles, Github } from "lucide-react";

const features = [
  { icon: ScanLine, title: "AI Survey Scanner", desc: "Upload images, voice notes, or forms — Gemini AI extracts structured data instantly." },
  { icon: Sparkles, title: "Smart Need Prioritization", desc: "Urgency scoring helps you act on what matters most, first." },
  { icon: MapPin, title: "Live Crisis Heatmap", desc: "See where help is needed in real-time across your region." },
  { icon: Users, title: "Volunteer Matching", desc: "Match by skill, distance, and availability automatically." },
  { icon: Bell, title: "Instant Alerts", desc: "Push notifications keep volunteers and field teams in sync." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Measure impact with response time, completion rates, and trends." },
];

const stats = [
  { v: "10,000+", l: "Requests Managed" },
  { v: "2,000+", l: "Volunteers" },
  { v: "65%", l: "Faster Response" },
  { v: "50+", l: "NGOs Supported" },
];

const steps = [
  { n: "01", t: "Upload Report", d: "Field workers submit photos, voice notes, or surveys from anywhere." },
  { n: "02", t: "AI Understands Need", d: "Gemini extracts urgency, category, and location automatically." },
  { n: "03", t: "Volunteers Assigned", d: "Best-fit volunteers are matched and notified instantly." },
  { n: "04", t: "Task Completed", d: "Track progress live and measure community impact." },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-card/80 glass">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" size="sm">Sign in</Button></Link>
            <Link to="/login"><Button size="sm" className="bg-gradient-primary shadow-elegant">Get Started</Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
        <div className="container relative mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Powered by Gemini AI
              </div>
              <h1 className="font-heading text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Turn Community Needs Into <span className="bg-gradient-hero bg-clip-text text-transparent">Instant Action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                SevaSetu AI helps NGOs detect urgent needs, coordinate volunteers, and deliver faster support — all from one beautifully simple platform.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/login"><Button size="lg" className="bg-gradient-primary shadow-elegant h-12 px-6">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                <Button size="lg" variant="outline" className="h-12 px-6"><Play className="mr-2 w-4 h-4" /> Watch Demo</Button>
                <Link to="/login"><Button size="lg" variant="ghost" className="h-12 px-6"><Heart className="mr-2 w-4 h-4 text-destructive" /> Join as Volunteer</Button></Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Free for NGOs</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> 5-min setup</div>
              </div>
            </div>

            {/* Hero Visual — dashboard preview */}
            <div className="relative animate-scale-in">
              <Card className="p-5 shadow-lift border-0 bg-card rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Live Operations</p>
                    <p className="font-heading font-bold">Patna Region</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-success"><span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Live</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[{l:"Pending",v:"24",c:"text-destructive"},{l:"Active",v:"187",c:"text-primary"},{l:"Done",v:"412",c:"text-success"}].map(k=>(
                    <div key={k.l} className="bg-secondary rounded-xl p-3">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{k.l}</p>
                      <p className={`font-heading text-2xl font-bold ${k.c}`}>{k.v}</p>
                    </div>
                  ))}
                </div>
                <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-success/10 mb-4">
                  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 200">
                    <path d="M0,100 Q100,60 200,100 T400,100" stroke="hsl(221 83% 53%)" strokeWidth="2" fill="none"/>
                    <path d="M0,140 Q100,100 200,140 T400,140" stroke="hsl(160 84% 39%)" strokeWidth="2" fill="none"/>
                  </svg>
                  {[{x:"20%",y:"30%",c:"bg-destructive"},{x:"60%",y:"50%",c:"bg-warning"},{x:"45%",y:"70%",c:"bg-primary"},{x:"80%",y:"35%",c:"bg-success"}].map((d,i)=>(
                    <div key={i} className="absolute" style={{left:d.x,top:d.y}}>
                      <div className={`relative w-3 h-3 rounded-full ${d.c}`}>
                        <span className={`absolute inset-0 rounded-full ${d.c} animate-ping opacity-60`} />
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur rounded-lg px-2.5 py-1.5 text-xs font-medium shadow-card">📍 Crisis Heatmap</div>
                </div>
                <div className="space-y-2">
                  {[{n:"Priya S.",t:"Medical",d:"1.2 km"},{n:"Rahul V.",t:"Logistics",d:"2.4 km"}].map(v=>(
                    <div key={v.n} className="flex items-center justify-between p-2.5 rounded-xl bg-secondary">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{v.n[0]}</div>
                        <div>
                          <p className="text-xs font-semibold">{v.n}</p>
                          <p className="text-[10px] text-muted-foreground">{v.t} · {v.d}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">Available</span>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="absolute -top-4 -right-4 bg-card shadow-lift rounded-2xl p-3 flex items-center gap-2 animate-float">
                <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-success" /></div>
                <div><p className="text-xs font-semibold">Task Completed</p><p className="text-[10px] text-muted-foreground">Ward 12 · 22 min</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="impact" className="py-16 border-y bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.l} className="text-center">
                <p className="font-heading text-4xl lg:text-5xl font-extrabold bg-gradient-hero bg-clip-text text-transparent">{s.v}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Features</p>
            <h2 className="font-heading text-4xl font-bold mb-4">Everything you need to coordinate impact</h2>
            <p className="text-muted-foreground">Built for NGOs and ground teams who need to move fast and act with clarity.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <Card key={f.title} className="p-6 card-hover border bg-card rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-elegant">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">How it works</p>
            <h2 className="font-heading text-4xl font-bold mb-4">From report to relief in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Card key={s.n} className="p-6 relative bg-card border-0 shadow-card rounded-2xl">
                <p className="font-heading text-5xl font-extrabold text-primary/10 mb-2">{s.n}</p>
                <h3 className="font-heading font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
                {i < steps.length - 1 && <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-6 h-6 text-primary/30" />}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 lg:p-16 bg-gradient-hero border-0 rounded-3xl shadow-elegant text-center text-primary-foreground">
            <Brain className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Ready to amplify your impact?</h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8">Join 50+ NGOs already using SevaSetu AI to coordinate community support, faster.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/login"><Button size="lg" variant="secondary" className="h-12 px-8">Get Started Free</Button></Link>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Play className="mr-2 w-4 h-4" /> Watch Demo</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground inline-flex items-center gap-1"><Github className="w-4 h-4" /> GitHub</a>
            <a href="#" className="hover:text-foreground">Demo</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 SevaSetu AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
