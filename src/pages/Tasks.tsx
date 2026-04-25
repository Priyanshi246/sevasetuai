import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { requests } from "@/lib/mockData";
import { CheckCircle2, Clock, AlertTriangle, MapPin } from "lucide-react";

const columns = [
  { id: "Pending", icon: Clock, color: "text-warning", bg: "bg-warning/10" },
  { id: "In Progress", icon: AlertTriangle, color: "text-primary", bg: "bg-primary/10" },
  { id: "Completed", icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
] as const;

const Tasks = () => {
  return (
    <DashboardLayout title="Tasks" subtitle="Live task board">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {columns.map(col => {
          const items = requests.filter(r => col.id === "In Progress" ? (r.status === "In Progress" || r.status === "Assigned") : r.status === col.id);
          return (
            <div key={col.id} className="space-y-3">
              <div className="flex items-center gap-2 px-1">
                <div className={`w-8 h-8 rounded-lg ${col.bg} ${col.color} flex items-center justify-center`}><col.icon className="w-4 h-4"/></div>
                <h3 className="font-heading font-bold">{col.id}</h3>
                <span className="ml-auto text-xs font-semibold bg-secondary px-2 py-0.5 rounded-full">{items.length}</span>
              </div>
              {items.map(r => (
                <Card key={r.id} className="p-4 border-0 shadow-card rounded-2xl card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground">{r.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.priority==="Critical"?"bg-destructive/10 text-destructive":r.priority==="High"?"bg-warning/10 text-warning":"bg-primary/10 text-primary"}`}>{r.priority}</span>
                  </div>
                  <p className="font-semibold mb-1">{r.type}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3"><MapPin className="w-3 h-3"/>{r.location}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{r.people} people</span>
                    <span className="text-muted-foreground">{r.time}</span>
                  </div>
                </Card>
              ))}
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
