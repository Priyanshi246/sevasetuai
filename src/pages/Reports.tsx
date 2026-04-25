import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { requests } from "@/lib/mockData";
import { Search, Filter, Download } from "lucide-react";

const priorityStyle: Record<string,string> = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-warning/10 text-warning border-warning/20",
  Medium: "bg-primary/10 text-primary border-primary/20",
  Low: "bg-muted text-muted-foreground",
};
const statusStyle: Record<string,string> = {
  Pending: "bg-warning/10 text-warning",
  "In Progress": "bg-primary/10 text-primary",
  Assigned: "bg-accent text-accent-foreground",
  Completed: "bg-success/10 text-success",
};

const Reports = () => {
  return (
    <DashboardLayout title="Reports" subtitle="All community needs and case files">
      <Card className="p-5 border-0 shadow-card rounded-2xl">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
            <Input placeholder="Search by ID, location, or category…" className="pl-10"/>
          </div>
          <Button variant="outline"><Filter className="w-4 h-4 mr-2"/> Filters</Button>
          <Button variant="outline"><Download className="w-4 h-4 mr-2"/> Export</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground uppercase">
                <th className="text-left font-medium px-3 py-2">ID</th>
                <th className="text-left font-medium px-3 py-2">Need Type</th>
                <th className="text-left font-medium px-3 py-2">Location</th>
                <th className="text-left font-medium px-3 py-2">People</th>
                <th className="text-left font-medium px-3 py-2">Priority</th>
                <th className="text-left font-medium px-3 py-2">Status</th>
                <th className="text-left font-medium px-3 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <tr key={r.id} className="border-t hover:bg-secondary/50 transition-colors">
                  <td className="px-3 py-3 font-mono text-xs text-muted-foreground">{r.id}</td>
                  <td className="px-3 py-3 font-semibold">{r.type}</td>
                  <td className="px-3 py-3 text-muted-foreground">{r.location}</td>
                  <td className="px-3 py-3">{r.people}</td>
                  <td className="px-3 py-3"><Badge variant="outline" className={priorityStyle[r.priority]}>{r.priority}</Badge></td>
                  <td className="px-3 py-3"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyle[r.status]}`}>{r.status}</span></td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Reports;
