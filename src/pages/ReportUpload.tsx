import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Mic, FileText, Sparkles, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const ReportUpload = () => {
  const [mode, setMode] = useState<"image" | "voice" | "form">("form");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { urgency: number; summary: string; priority: string; category: string }>(null);

  const analyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult({
        urgency: 87,
        summary: "Severe food shortage affecting 120+ residents in Ward 5. Vulnerable groups include 30 children and 15 elderly. Local supplies depleted within 24 hours.",
        priority: "High",
        category: "Food Distribution",
      });
      toast.success("AI analysis complete");
    }, 1800);
  };

  const modes = [
    { id: "image", icon: ImagePlus, title: "Upload Image Survey", desc: "Photos of damage or notes" },
    { id: "voice", icon: Mic, title: "Upload Voice Note", desc: "Audio reports from field" },
    { id: "form", icon: FileText, title: "Manual Form Entry", desc: "Type details directly" },
  ] as const;

  return (
    <DashboardLayout title="Report Upload" subtitle="Submit community needs for AI analysis">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-0 shadow-card rounded-2xl">
            <h3 className="font-heading font-bold mb-4">Choose input method</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {modes.map(m => (
                <button key={m.id} onClick={() => setMode(m.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all ${mode===m.id?"border-primary bg-accent shadow-elegant":"border-border hover:border-primary/50"}`}>
                  <m.icon className={`w-6 h-6 mb-2 ${mode===m.id?"text-primary":"text-muted-foreground"}`}/>
                  <p className="font-semibold text-sm">{m.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-card rounded-2xl">
            {mode !== "form" && (
              <div className="border-2 border-dashed rounded-2xl p-10 text-center mb-6 bg-secondary/30">
                {mode === "image" ? <ImagePlus className="w-12 h-12 mx-auto text-muted-foreground mb-3"/> : <Mic className="w-12 h-12 mx-auto text-muted-foreground mb-3"/>}
                <p className="font-semibold">Drop file or click to upload</p>
                <p className="text-sm text-muted-foreground mt-1">{mode==="image"?"PNG, JPG up to 10MB":"MP3, WAV up to 25MB"}</p>
                <Button variant="outline" className="mt-4">Choose file</Button>
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input placeholder="Ward 5, Patna" defaultValue="Ward 5, Patna" />
              </div>
              <div className="space-y-2">
                <Label>Need Type</Label>
                <Input placeholder="Food / Medical / Shelter" defaultValue="Food Shortage" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Description</Label>
                <Textarea rows={4} placeholder="Describe the situation..." defaultValue="Local food supplies have been exhausted after recent flooding. Families are running out of essentials. Children and elderly affected."/>
              </div>
              <div className="space-y-2">
                <Label>People Affected</Label>
                <Input type="number" defaultValue={120}/>
              </div>
              <div className="space-y-2">
                <Label>Reporter Name</Label>
                <Input defaultValue="Field Worker - Ramesh"/>
              </div>
            </div>
            <Button size="lg" onClick={analyze} disabled={loading} className="w-full mt-6 h-12 bg-gradient-primary shadow-elegant">
              {loading ? <><Loader2 className="mr-2 w-5 h-5 animate-spin"/> Analyzing with Gemini AI…</> : <><Sparkles className="mr-2 w-5 h-5"/> Analyze with Gemini AI</>}
            </Button>
          </Card>
        </div>

        <div>
          <Card className="p-6 border-0 shadow-card rounded-2xl sticky top-24">
            <h3 className="font-heading font-bold mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary"/> AI Extracted Result</h3>
            {!result && !loading && (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-30"/>
                <p className="text-sm">Submit a report to see Gemini's analysis here.</p>
              </div>
            )}
            {loading && (
              <div className="text-center py-12">
                <Loader2 className="w-10 h-10 mx-auto mb-3 text-primary animate-spin"/>
                <p className="text-sm font-semibold">Reading & extracting…</p>
                <p className="text-xs text-muted-foreground mt-1">Identifying urgency, category, location</p>
              </div>
            )}
            {result && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Urgency Score</p>
                    <p className="font-heading text-2xl font-bold text-destructive">{result.urgency}</p>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-warning to-destructive rounded-full transition-all" style={{width:`${result.urgency}%`}}/>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-secondary/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Summary</p>
                  <p className="text-sm">{result.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p className="text-[10px] font-semibold text-destructive uppercase mb-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>Priority</p>
                    <p className="font-heading font-bold text-destructive">{result.priority}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-[10px] font-semibold text-primary uppercase mb-1">Category</p>
                    <p className="font-heading font-bold text-primary">{result.category}</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-success"><CheckCircle2 className="mr-2 w-4 h-4"/> Create Task & Notify Volunteers</Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportUpload;
