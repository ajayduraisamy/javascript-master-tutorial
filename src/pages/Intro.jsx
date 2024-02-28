import { Link } from "react-router-dom";
import { BookOpen, Code, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Intro() {
    const learningObjectives = [
        "Master JavaScript fundamentals from scratch",
        "Write clean, modern ES6+ code",
        "Understand asynchronous programming (Promises, Async/Await)",
        "DOM manipulation and event handling",
        "Build real-world projects and applications",
        "Debug and optimize JavaScript performance"
    ];

    const prerequisites = [
        "Basic HTML & CSS knowledge",
        "A code editor (VS Code recommended)",
        "Modern web browser",
        "No prior JavaScript experience needed!"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            {/* Sidebar */}
            <LessonSidebar currentLesson="intro" />

            {/* Main Content */}
            <main className="pl-0 lg:pl-72 transition-all duration-300">
                <div className="max-w-4xl mx-auto px-6 py-12">

                    {/* Hero Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 mb-6">
                            <BookOpen className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                                BEGINNER FRIENDLY • SELF-PACED
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            Welcome to
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                                JavaScript Mastery
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive, project-based journey from JavaScript basics to advanced patterns.
                            Learn by building, not just reading.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">50+</h3>
                                    <p className="text-slate-500 dark:text-slate-400">Hands-on Exercises</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">10</h3>
                                    <p className="text-slate-500 dark:text-slate-400">Real Projects</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Modern</h3>
                                    <p className="text-slate-500 dark:text-slate-400">ES6+ & Best Practices</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Learning Objectives */}
                        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                What You'll Learn
                            </h2>

                            <ul className="space-y-4">
                                {learningObjectives.map((objective, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Prerequisites */}
                        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500">
                                    <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                Prerequisites
                            </h2>

                            <ul className="space-y-4">
                                {prerequisites.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <span className="text-slate-700 dark:text-slate-300">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* How to Use This Tutorial */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">How to Use This Tutorial</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-3">01</div>
                                <h3 className="font-bold mb-2">Read & Understand</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Go through each lesson carefully. Don't rush!
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-3">02</div>
                                <h3 className="font-bold mb-2">Practice Code</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Type every example. Experiment with modifications.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-3">03</div>
                                <h3 className="font-bold mb-2">Build Projects</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Apply concepts in real projects to cement your learning.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps Button */}
                    <div className="text-center">
                        <Link to="/lesson1">
                            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                                Start Lesson 1: Variables & Data Types
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>


                        <p className="mt-4 text-slate-500 dark:text-slate-400">
                            All lessons are free and available to everyone. Join the community and get access to exclusive content.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}