import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { MapPin, Navigation, CheckCircle2, Clock, AlertTriangle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const VolunteerApp = () => {
  const [stage, setStage] = useState<"new" | "accepted" | "done">("new");
  const progress = stage === "new" ? 25 : stage === "accepted" ? 65 : 100;

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="max-w-md mx-auto">
        <Link to="/login" className="inline-flex items-center text-sm text-muted-foreground mb-4 hover:text-foreground"><ArrowLeft className="w-4 h-4 mr-1"/> Back</Link>

        {/* Phone frame */}
        <div className="bg-foreground rounded-[2.5rem] p-3 shadow-lift">
          <div className="bg-background rounded-[2rem] overflow-hidden">
            {/* Status bar */}
            <div className="bg-card px-6 pt-3 pb-2 flex items-center justify-between text-xs font-semibold">
              <span>9:41</span>
              <span>•••</span>
            </div>

            {/* Header */}
            <div className="px-5 pt-2 pb-5 bg-card">
              <div className="flex items-center justify-between mb-4">
                <Logo />
                <div className="w-9 h-9 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center">PS</div>
              </div>
              <p className="text-xs text-muted-foreground">Welcome back,</p>
              <h2 className="font-heading text-xl font-bold">Priya Sharma</h2>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase">My Assigned Task</p>

              <Card className="p-5 border-0 shadow-card rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-destructive/10 text-destructive px-2 py-1 rounded-full"><AlertTriangle className="w-3 h-3"/> CRITICAL</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3"/> 18 min ago</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Medical Aid Required</h3>
                <p className="text-sm text-muted-foreground mb-4">First aid for 12 affected residents in flood zone. Bring basic supplies and oximeter.</p>

                <div className="space-y-2.5 text-sm mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5"/>
                    <div>
                      <p className="font-semibold">Ward 7, Flood Zone A</p>
                      <p className="text-xs text-muted-foreground">1.2 km away · ~6 min</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-primary mt-0.5"/>
                    <div>
                      <p className="font-semibold">Field Coordinator</p>
                      <p className="text-xs text-muted-foreground">Ramesh K. · +91 98xx xx1234</p>
                    </div>
                  </div>
                </div>

                {/* Mini map */}
                <div className="h-32 rounded-xl bg-gradient-to-br from-primary/10 to-success/10 relative overflow-hidden mb-4 border">
                  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 200 100">
                    <path d="M20,80 Q60,40 100,60 T180,30" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="4"/>
                  </svg>
                  <div className="absolute left-4 bottom-4 w-3 h-3 rounded-full bg-primary ring-4 ring-background"/>
                  <div className="absolute right-4 top-4">
                    <div className="relative w-3 h-3 rounded-full bg-destructive ring-4 ring-background">
                      <span className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-60"/>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold">Progress</span>
                    <span className="text-muted-foreground">{progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full transition-all duration-500" style={{width:`${progress}%`}}/>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  {stage === "new" && (
                    <Button className="w-full h-12 bg-gradient-primary shadow-elegant" onClick={()=>{setStage("accepted");toast.success("Task accepted!")}}>Accept Task</Button>
                  )}
                  {stage === "accepted" && (
                    <>
                      <Button className="w-full h-12 bg-gradient-primary" onClick={()=>toast("Opening navigation…")}><Navigation className="mr-2 w-4 h-4"/> Navigate</Button>
                      <Button className="w-full h-12 bg-gradient-success" onClick={()=>{setStage("done");toast.success("Task marked as completed 🎉")}}><CheckCircle2 className="mr-2 w-4 h-4"/> Mark Completed</Button>
                    </>
                  )}
                  {stage === "done" && (
                    <div className="text-center py-3 animate-scale-in">
                      <div className="w-14 h-14 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-8 h-8 text-success"/>
                      </div>
                      <p className="font-heading font-bold text-success">Task Completed!</p>
                      <p className="text-xs text-muted-foreground">Thank you for your service 💚</p>
                    </div>
                  )}
                </div>
              </Card>

              <div className="grid grid-cols-3 gap-2 text-center">
                {[{l:"Tasks",v:"47"},{l:"Hours",v:"126"},{l:"Rating",v:"4.9"}].map(s=>(
                  <Card key={s.l} className="p-3 border-0 shadow-sm rounded-xl">
                    <p className="font-heading font-bold text-lg">{s.v}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{s.l}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerApp;
