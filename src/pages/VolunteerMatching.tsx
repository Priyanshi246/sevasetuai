import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { volunteers } from "@/lib/mockData";
import { MapPin, Star, Clock, AlertTriangle, Sparkles, Send } from "lucide-react";
import { toast } from "sonner";

const VolunteerMatching = () => {
  return (
    <DashboardLayout title="Volunteer Matching" subtitle="AI-suggested volunteers for active tasks">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Task card */}
        <Card className="p-6 border-0 shadow-card rounded-2xl bg-gradient-hero text-primary-foreground">
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full mb-3"><AlertTriangle className="w-3 h-3"/> CRITICAL</span>
          <h2 className="font-heading text-2xl font-bold mb-2">Flood Relief Needed in Ward 7</h2>
          <p className="text-sm opacity-90 mb-4">45 families displaced. Immediate medical aid, food, and temporary shelter required. Water level rising.</p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-80"/> Ward 7, Bihar Flood Zone A</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4 opacity-80"/> Reported 18 minutes ago</p>
            <p className="flex items-center gap-2"><Sparkles className="w-4 h-4 opacity-80"/> Urgency Score: 94/100</p>
          </div>
          <div className="mt-5 pt-5 border-t border-white/20">
            <p className="text-xs opacity-80 mb-2">Required skills</p>
            <div className="flex flex-wrap gap-2">
              {["Medical","Logistics","Search & Rescue"].map(s => <span key={s} className="text-xs font-semibold bg-white/15 px-2.5 py-1 rounded-full">{s}</span>)}
            </div>
          </div>
        </Card>

        {/* Volunteers */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold">AI Suggested Volunteers</h3>
              <p className="text-xs text-muted-foreground">Ranked by skill match, distance, and availability</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast.success("Notification sent to all 5 volunteers")}><Send className="mr-2 w-3.5 h-3.5"/> Notify All</Button>
          </div>

          {volunteers.map((v, i) => (
            <Card key={v.name} className="p-5 border-0 shadow-card rounded-2xl card-hover animate-slide-in-right" style={{animationDelay:`${i*70}ms`}}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Avatar className="w-14 h-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">{v.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  {i === 0 && <span className="absolute -top-1 -right-1 bg-success text-success-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">BEST</span>}
                </div>
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-heading font-bold">{v.name}</p>
                    <span className="flex items-center gap-0.5 text-xs text-warning"><Star className="w-3 h-3 fill-current"/>{v.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.skill}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{v.tasks} tasks completed</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="font-semibold flex items-center gap-1"><MapPin className="w-3 h-3 text-primary"/>{v.distance}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className={`font-semibold text-xs ${v.availability.includes("now")?"text-success":"text-warning"}`}>{v.availability}</p>
                  </div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button size="sm" variant="outline" onClick={()=>toast("Reassignment options opened")}>Reassign</Button>
                  <Button size="sm" className="bg-gradient-primary" onClick={()=>toast.success(`${v.name} assigned to Ward 7`)}>Assign</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerMatching;
