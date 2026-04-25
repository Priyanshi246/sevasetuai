import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Building2, Heart, HardHat, Check } from "lucide-react";

const roles = [
  { id: "admin", icon: Building2, title: "NGO Admin", desc: "Manage operations, dispatch volunteers, view analytics.", to: "/admin" },
  { id: "volunteer", icon: Heart, title: "Volunteer", desc: "Receive tasks matched to your skills and availability.", to: "/volunteer-app" },
  { id: "field", icon: HardHat, title: "Field Worker", desc: "Submit reports from the field with photos and voice.", to: "/admin/upload" },
];

const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("admin");

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl" />

      <Card className="relative w-full max-w-2xl p-8 lg:p-10 shadow-lift border-0 rounded-3xl animate-scale-in">
        <div className="flex justify-center mb-6"><Logo /></div>
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Choose your role to continue</p>
        </div>

        <div className="space-y-3 mb-8">
          {roles.map(r => {
            const isSelected = selected === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setSelected(r.id)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                  isSelected ? "border-primary bg-accent shadow-elegant" : "border-border hover:border-primary/50 hover:bg-secondary"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSelected ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  <r.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
                {isSelected && <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center"><Check className="w-4 h-4" /></div>}
              </button>
            );
          })}
        </div>

        <Button
          size="lg"
          className="w-full h-12 bg-gradient-primary shadow-elegant"
          onClick={() => navigate(roles.find(r => r.id === selected)!.to)}
        >
          Continue
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By continuing you agree to SevaSetu AI's Terms & Privacy Policy
        </p>
      </Card>
    </div>
  );
};

export default Login;
