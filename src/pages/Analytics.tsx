import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { weeklyData, categoryData } from "@/lib/mockData";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from "recharts";
import { Trophy, Clock, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const efficiency = [
  { week: "W1", efficiency: 72 },
  { week: "W2", efficiency: 78 },
  { week: "W3", efficiency: 81 },
  { week: "W4", efficiency: 85 },
  { week: "W5", efficiency: 89 },
  { week: "W6", efficiency: 93 },
];

const topVolunteers = [
  { name: "Vikram Singh", tasks: 89, rating: 5.0 },
  { name: "Rahul Verma", tasks: 62, rating: 4.8 },
  { name: "Priya Sharma", tasks: 47, rating: 4.9 },
  { name: "Anjali Mehta", tasks: 38, rating: 4.9 },
];

const Analytics = () => {
  return (
    <DashboardLayout title="Analytics" subtitle="Impact metrics and insights">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { l: "Total Cases Solved", v: "8,432", d: "+18%", i: CheckCircle2, c: "text-success", bg: "bg-success/10" },
          { l: "Avg Resolution Time", v: "24m", d: "-22%", i: Clock, c: "text-primary", bg: "bg-primary/10" },
          { l: "Top Volunteers", v: "187", d: "+12", i: Trophy, c: "text-warning", bg: "bg-warning/10" },
          { l: "High Risk Zones", v: "9", d: "-3", i: AlertTriangle, c: "text-destructive", bg: "bg-destructive/10" },
        ].map(k => (
          <Card key={k.l} className="p-5 card-hover border-0 shadow-card rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl ${k.bg} ${k.c} flex items-center justify-center`}><k.i className="w-5 h-5"/></div>
              <span className="text-xs font-semibold text-success flex items-center gap-0.5"><TrendingUp className="w-3 h-3"/>{k.d}</span>
            </div>
            <p className="font-heading text-3xl font-bold">{k.v}</p>
            <p className="text-xs text-muted-foreground mt-1">{k.l}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Weekly Requests</h3>
          <p className="text-xs text-muted-foreground mb-4">Volume vs completion rate</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false}/>
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
              <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[8,8,0,0]}/>
              <Bar dataKey="completed" fill="hsl(var(--success))" radius={[8,8,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Need Categories</h3>
          <p className="text-xs text-muted-foreground mb-4">Distribution last 30d</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80} paddingAngle={3}>
                {categoryData.map((c,i)=><Cell key={i} fill={c.color}/>)}
              </Pie>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-1">Volunteer Efficiency</h3>
          <p className="text-xs text-muted-foreground mb-4">Improving every week</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={efficiency}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false}/>
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false}/>
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:12}}/>
              <Area type="monotone" dataKey="efficiency" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#g1)"/>
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-4 flex items-center gap-2"><Trophy className="w-4 h-4 text-warning"/> Top Volunteers</h3>
          <div className="space-y-3">
            {topVolunteers.map((v,i)=>(
              <div key={v.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-secondary/50 transition-colors">
                <span className="w-6 text-center font-heading font-bold text-muted-foreground">{i+1}</span>
                <Avatar className="w-9 h-9"><AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs font-bold">{v.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback></Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{v.name}</p>
                  <p className="text-xs text-muted-foreground">{v.tasks} tasks · ⭐ {v.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
