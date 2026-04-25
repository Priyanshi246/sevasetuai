import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 ${className}`}>
    <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
      <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-heading font-bold text-lg text-foreground">SevaSetu <span className="text-primary">AI</span></span>
      <span className="text-[10px] text-muted-foreground tracking-wide">जहाँ ज़रूरत, वहाँ सहायता</span>
    </div>
  </Link>
);
