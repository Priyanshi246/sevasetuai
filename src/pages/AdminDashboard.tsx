import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { requests, alerts, weeklyData, categoryData, responseTrend } from "@/lib/mockData";
import { Clock, Users, CheckCircle2, AlertTriangle, TrendingUp, MapPin, ArrowUpRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const kpis = [
  { label: "Pending Requests", value: "24", delta: "+12%", icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" },
  { label: "Active Volunteers", value: "187", delta: "+8%", icon: Users, color: "text-primary", bg: "bg-primary/10" },
  { label: "Completed Today", value: "412", delta: "+24%", icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
  { label: "Avg Response Time", value: "24m", delta: "-18%", icon: Clock, color: "text-warning", bg: "bg-warning/10" },
];

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

const alertLevelStyle: Record<string,string> = {
  critical: "border-l-destructive",
  high: "border-l-warning",
  info: "border-l-primary",
  success: "border-l-success",
};

const AdminDashboard = () => {
  return (
    <DashboardLayout title="Operations Dashboard" subtitle="Real-time community support overview">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map(k => (
          <Card key={k.label} className="p-5 card-hover border-0 shadow-card rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl ${k.bg} ${k.color} flex items-center justify-center`}>
                <k.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-success flex items-center gap-0.5"><TrendingUp className="w-3 h-3" />{k.delta}</span>
            </div>
            <p className="font-heading text-3xl font-bold">{k.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{k.label}</p>
          </Card>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
        {/* Live requests */}
        <Card className="xl:col-span-5 p-5 border-0 shadow-card rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading font-bold">Live Requests</h3>
              <p className="text-xs text-muted-foreground">Latest community needs</p>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">View all <ArrowUpRight className="ml-1 w-3.5 h-3.5" /></Button>
          </div>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground uppercase">
                  <th className="text-left font-medium px-2 py-2">Need</th>
                  <th className="text-left font-medium px-2 py-2">Location</th>
                  <th className="text-left font-medium px-2 py-2">Priority</th>
                  <th className="text-left font-medium px-2 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.slice(0,6).map(r => (
                  <tr key={r.id} className="border-t hover:bg-secondary/50 transition-colors">
                    <td className="px-2 py-3 font-medium">{r.type}</td>
                    <td className="px-2 py-3 text-muted-foreground text-xs">{r.location}</td>
                    <td className="px-2 py-3"><Badge variant="outline" className={priorityStyle[r.priority]}>{r.priority}</Badge></td>
                    <td className="px-2 py-3"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyle[r.status]}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Heatmap */}
        <Card className="xl:col-span-4 p-5 border-0 shadow-card rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading font-bold">Crisis Heatmap</h3>
              <p className="text-xs text-muted-foreground">Active zones</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-success"><span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Live</span>
          </div>
          <div className="relative h-72 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 via-accent to-success/5 border">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" />
              <path d="M50,150 Q150,80 250,140 T380,180" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>
            {[
              {x:"15%",y:"25%",c:"bg-destructive",l:"Critical"},
              {x:"55%",y:"40%",c:"bg-warning",l:"High"},
              {x:"35%",y:"65%",c:"bg-primary",l:"Medium"},
              {x:"75%",y:"30%",c:"bg-success",l:"Resolved"},
              {x:"25%",y:"80%",c:"bg-warning",l:"High"},
              {x:"70%",y:"75%",c:"bg-destructive",l:"Critical"},
            ].map((d,i)=>(
              <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:d.x,top:d.y}}>
                <div className={`relative w-3.5 h-3.5 rounded-full ${d.c} ring-4 ring-background`}>
                  <span className={`absolute inset-0 rounded-full ${d.c} animate-ping opacity-50`} />
                </div>
              </div>
            ))}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="bg-card/90 backdrop-blur rounded-lg px-3 py-1.5 text-xs font-medium shadow-card flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Patna Region</div>
              <div className="bg-card/90 backdrop-blur rounded-lg px-3 py-1.5 text-xs flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive" />Critical</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning" />High</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Alerts */}
        <Card className="xl:col-span-3 p-5 border-0 shadow-card rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold">Urgent Alerts</h3>
            <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">{alerts.filter(a=>a.level==="critical").length} Critical</span>
          </div>
          <div className="space-y-2.5">
            {alerts.map((a,i) => (
              <div key={i} className={`p-3 rounded-xl bg-secondary/50 border-l-4 ${alertLevelStyle[a.level]} animate-slide-in-right`} style={{animationDelay:`${i*60}ms`}}>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold">{a.title}</p>
                  {a.level === "critical" && <span className="relative flex w-2 h-2 mt-1"><span className="absolute inline-flex w-full h-full rounded-full bg-destructive opacity-75 animate-ping" /><span className="relative inline-flex w-2 h-2 rounded-full bg-destructive" /></span>}
                </div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{a.location}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{a.time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Requests by Category</h3>
          <p className="text-xs text-muted-foreground mb-4">Last 30 days</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {categoryData.map((c,i)=><Cell key={i} fill={c.color} />)}
              </Pie>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {categoryData.map(c => (
              <div key={c.name} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm" style={{background:c.color}} />
                <span className="text-muted-foreground">{c.name}</span>
                <span className="ml-auto font-semibold">{c.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Completion Rate</h3>
          <p className="text-xs text-muted-foreground mb-4">Requests vs completed this week</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false}/>
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
              <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[8,8,0,0]} />
              <Bar dataKey="completed" fill="hsl(var(--success))" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Response Time Trend</h3>
          <p className="text-xs text-muted-foreground mb-4">Avg minutes per response</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={responseTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false}/>
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
              <Line type="monotone" dataKey="time" stroke="hsl(var(--primary))" strokeWidth={3} dot={{fill:"hsl(var(--primary))",r:5}} activeDot={{r:7}}/>
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
