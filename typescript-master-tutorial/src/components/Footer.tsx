import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200/70 bg-white/70 backdrop-blur-sm">
      <div className="page-wrap py-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <p>TypeScript Master Tutorial</p>
          <p>Daily plan: August 1, 2024 to December 31, 2024</p>
          <div className="flex items-center gap-2">
            <span className="pill gap-2"><Github size={14} /> Git Ready</span>
            <span className="pill gap-2"><Linkedin size={14} /> Career Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
