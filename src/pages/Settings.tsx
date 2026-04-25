import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera, Bell, Globe, Moon, Shield } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Settings = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = (v: boolean) => {
    setDark(v);
    document.documentElement.classList.toggle("dark", v);
  };

  return (
    <DashboardLayout title="Settings" subtitle="Manage your account and preferences">
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-4">Profile</h3>
          <div className="flex items-center gap-4 mb-5">
            <div className="relative">
              <Avatar className="w-20 h-20 border-2 border-primary/20"><AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-xl">AK</AvatarFallback></Avatar>
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-elegant"><Camera className="w-3.5 h-3.5"/></button>
            </div>
            <div>
              <p className="font-heading font-bold">Anand Kumar</p>
              <p className="text-xs text-muted-foreground">NGO Admin · Patna Region</p>
            </div>
          </div>
          <div className="space-y-3">
            <div><Label>Full Name</Label><Input defaultValue="Anand Kumar"/></div>
            <div><Label>Email</Label><Input defaultValue="anand@sevasetu.org"/></div>
            <div><Label>Phone</Label><Input defaultValue="+91 98xxx xx456"/></div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-4 flex items-center gap-2"><Shield className="w-4 h-4"/> Organization</h3>
          <div className="space-y-3">
            <div><Label>Organization Name</Label><Input defaultValue="SevaSetu Foundation"/></div>
            <div><Label>Region</Label><Input defaultValue="Bihar / Patna"/></div>
            <div><Label>Registration ID</Label><Input defaultValue="NGO-2019-PT-4421"/></div>
            <div><Label>Team Size</Label><Input defaultValue="187 volunteers"/></div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-card rounded-2xl">
          <h3 className="font-heading font-bold mb-4 flex items-center gap-2"><Bell className="w-4 h-4"/> Preferences</h3>
          <div className="space-y-4">
            {[
              { l: "Critical alerts (push)", d: "Get notified for urgency > 80", v: true },
              { l: "Daily summary email", d: "Receive at 8:00 AM IST", v: true },
              { l: "Volunteer updates", d: "When tasks are accepted/completed", v: false },
              { l: "Weekly impact report", d: "Sent every Monday", v: true },
            ].map(p => (
              <div key={p.l} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{p.l}</p>
                  <p className="text-xs text-muted-foreground">{p.d}</p>
                </div>
                <Switch defaultChecked={p.v}/>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 pt-3 border-t">
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-muted-foreground"/><div><p className="text-sm font-semibold">Language</p><p className="text-xs text-muted-foreground">हिन्दी / English</p></div></div>
              <select className="text-sm bg-secondary rounded-lg px-3 py-1.5 border-0 outline-none"><option>English</option><option>हिन्दी</option><option>தமிழ்</option><option>বাংলা</option></select>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2"><Moon className="w-4 h-4 text-muted-foreground"/><div><p className="text-sm font-semibold">Dark Mode</p><p className="text-xs text-muted-foreground">Easy on the eyes</p></div></div>
              <Switch checked={dark} onCheckedChange={toggleDark}/>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-gradient-primary shadow-elegant" onClick={()=>toast.success("Settings saved")}>Save Changes</Button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
