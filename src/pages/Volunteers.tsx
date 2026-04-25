import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { volunteers } from "@/lib/mockData";
import { Star, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Volunteers = () => {
  return (
    <DashboardLayout title="Volunteers" subtitle="Your impact network">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...volunteers, ...volunteers].map((v, i) => (
          <Card key={i} className="p-5 border-0 shadow-card rounded-2xl card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-14 h-14 border-2 border-primary/20"><AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">{v.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback></Avatar>
              <div className="flex-1">
                <p className="font-heading font-bold">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.skill}</p>
              </div>
              <span className="text-xs flex items-center gap-0.5 text-warning"><Star className="w-3 h-3 fill-current"/>{v.rating}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/>{v.distance}</span>
              <span>·</span>
              <span className={v.availability.includes("now")?"text-success font-semibold":""}>{v.availability}</span>
              <span>·</span>
              <span>{v.tasks} done</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1"><Phone className="w-3 h-3 mr-1"/> Call</Button>
              <Button size="sm" variant="outline" className="flex-1"><MessageCircle className="w-3 h-3 mr-1"/> Message</Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Volunteers;
