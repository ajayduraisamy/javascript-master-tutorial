import React from 'react';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    {/* Abstract Logo Icon */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/20">
                        <span className="text-white font-bold text-xs tracking-tighter">JS</span>
                    </div>

                    {/* Gradient Text Title */}
                    <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
                        JavaScript Master
                    </h1>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Optional: Add dummy links for a fuller premium look */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 mr-2">
                        <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Modules</span>
                        <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Resources</span>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-800"></div>

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}