import React from 'react';
import {
    Home, Book, Code, Repeat, Box, Database,
    Cpu, Zap, Grid, Filter, AlertCircle, Calendar, Type,
    Clock, Layers, Package, Users, Eye, Folder, Lock,
    Cloud, ShoppingCart, Brain, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const lessons = [
    // Module 1: Fundamentals
    { id: 'intro', title: 'Introduction', icon: Home, module: 'start', completed: true },
    { id: 'lesson1', title: 'Variables & Data Types', icon: Book, module: 'fundamentals', completed: false },
    { id: 'lesson2', title: 'Operators & Expressions', icon: Code, module: 'fundamentals', completed: false },
    { id: 'lesson3', title: 'Control Flow', icon: Repeat, module: 'fundamentals', completed: false },
    { id: 'lesson4', title: 'Loops', icon: Repeat, module: 'fundamentals', completed: false },
    { id: 'lesson5', title: 'Functions Basics', icon: Code, module: 'fundamentals', completed: false }, // Changed from Function
    { id: 'lesson6', title: 'Scope & Hoisting', icon: Box, module: 'fundamentals', completed: false },
    { id: 'lesson7', title: 'Arrays', icon: Database, module: 'fundamentals', completed: false },

    // Module 2: Intermediate
    { id: 'lesson8', title: 'Objects & Prototypes', icon: Cpu, module: 'intermediate', completed: false },
    { id: 'lesson9', title: 'ES6+ Modern Features', icon: Zap, module: 'intermediate', completed: false },
    { id: 'lesson10', title: 'Destructuring & Spread', icon: Grid, module: 'intermediate', completed: false },
    { id: 'lesson11', title: 'Higher-Order Functions', icon: Filter, module: 'intermediate', completed: false },
    { id: 'lesson12', title: 'Error Handling', icon: AlertCircle, module: 'intermediate', completed: false },
    { id: 'lesson13', title: 'Dates & Math', icon: Calendar, module: 'intermediate', completed: false },
    { id: 'lesson14', title: 'Regular Expressions', icon: Type, module: 'intermediate', completed: false },

    // Module 3: Advanced
    { id: 'lesson15', title: 'Asynchronous JS', icon: Clock, module: 'advanced', completed: false },
    { id: 'lesson16', title: 'Async/Await', icon: Layers, module: 'advanced', completed: false },
    { id: 'lesson17', title: 'ES6 Modules', icon: Package, module: 'advanced', completed: false },
    { id: 'lesson18', title: 'Classes & OOP', icon: Users, module: 'advanced', completed: false },
    { id: 'lesson19', title: 'Closures', icon: Eye, module: 'advanced', completed: false },
    { id: 'lesson20', title: 'Design Patterns', icon: Brain, module: 'advanced', completed: false },

    // Module 4: Web APIs
    { id: 'lesson21', title: 'DOM Manipulation', icon: Folder, module: 'web', completed: false },
    { id: 'lesson22', title: 'Events', icon: Zap, module: 'web', completed: false },
    { id: 'lesson23', title: 'Browser Storage', icon: Lock, module: 'web', completed: false },

    // Projects
    { id: 'project1', title: 'To-Do App Project', icon: Award, module: 'projects', completed: false },
    { id: 'project2', title: 'Weather App Project', icon: Cloud, module: 'projects', completed: false },
    { id: 'project3', title: 'E-commerce Cart', icon: ShoppingCart, module: 'projects', completed: false },
];

export default function LessonSidebar({ currentLesson }) {
    const modules = {
        start: 'Getting Started',
        fundamentals: 'Module 1: Fundamentals',
        intermediate: 'Module 2: Intermediate',
        advanced: 'Module 3: Advanced',
        web: 'Module 4: Web APIs',
        projects: 'Real Projects'
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-80 border-r border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 hidden lg:block overflow-y-auto">
            <div className="p-6">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">JavaScript Master</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Complete 23-Lesson Course</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600 dark:text-slate-400">Course Progress</span>
                        <span className="font-bold text-yellow-600 dark:text-yellow-400">1/23</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-1/23 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        Estimated completion: 40-50 hours
                    </p>
                </div>

                {/* Lessons List */}
                <nav className="space-y-1">
                    {Object.entries(modules).map(([moduleKey, moduleTitle]) => {
                        const moduleLessons = lessons.filter(lesson => lesson.module === moduleKey);

                        return (
                            <div key={moduleKey} className="mb-6">
                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-2">
                                    {moduleTitle}
                                </h3>

                                <div className="space-y-1">
                                    {moduleLessons.map((lesson) => (
                                        <Link
                                            key={lesson.id}
                                            to={`/${lesson.id}`}
                                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${currentLesson === lesson.id
                                                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800'
                                                    : 'hover:bg-slate-100 dark:hover:bg-slate-900'
                                                }`}
                                        >
                                            {/* Lesson Number */}
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${lesson.completed
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                    : currentLesson === lesson.id
                                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                                }`}>
                                                {lessons.findIndex(l => l.id === lesson.id)}
                                            </div>

                                            {/* Lesson Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <lesson.icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                                                    <span className={`font-medium truncate ${currentLesson === lesson.id
                                                            ? 'text-yellow-700 dark:text-yellow-300'
                                                            : 'text-slate-700 dark:text-slate-300'
                                                        }`}>
                                                        {lesson.title}
                                                    </span>
                                                </div>

                                                {/* Status indicator */}
                                                {lesson.module === 'projects' && (
                                                    <span className="text-xs text-blue-500 dark:text-blue-400">Project</span>
                                                )}
                                            </div>

                                            {/* Completion Check */}
                                            {lesson.completed ? (
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            ) : (
                                                <div className="w-3 h-3 rounded-full border-2 border-slate-300 dark:border-slate-700"></div>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">23</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Lessons</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Exercises</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">∞</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Practice</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}