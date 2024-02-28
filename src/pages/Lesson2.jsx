import React from 'react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson2() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            <LessonSidebar currentLesson="lesson2" />

            <main className="pl-0 lg:pl-80 transition-all duration-300">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold mb-6">Lesson 2: Operators & Expressions</h1>
                    <p>Content coming soon...</p>
                </div>
            </main>
        </div>
    );
}