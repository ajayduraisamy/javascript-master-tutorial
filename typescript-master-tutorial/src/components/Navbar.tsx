import { BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

export default function Navbar() {
  const totalDays = lessons.length;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg">
      <div className="page-wrap py-4">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white shadow-soft">
              <Sparkles size={18} />
            </span>
            <span>
              <span className="block font-display text-base font-bold text-ink md:text-lg">TypeScript Master Tutorial</span>
              <span className="text-xs text-slate-500">Daily deep-learning track</span>
            </span>
          </Link>

          <nav className="flex items-center gap-2 md:gap-3">
            <span className="pill hidden sm:inline-flex">{totalDays} Days</span>
            <Link to="/" className="btn-secondary">Home</Link>
            <Link to="/lesson/1" className="btn-primary gap-2">
              <BookOpen size={16} />
              Start
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
