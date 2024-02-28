import React, { useState } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Check, Copy, Play, AlertCircle, Code, Zap, Type,
    Hash, MessageSquare, CheckCircle, Target, ArrowRight,
    ArrowLeft, Terminal
} from 'lucide-react';

export default function Lesson1() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);

    // 1. Defined the Solution Code here
    const solutionCode = `// Solution:
let fullName = "Alex Dev";   // String
let myAge = 24;              // Number
let isStudent = true;        // Boolean

console.log("Name:", fullName);
console.log("Age:", myAge);
console.log("Status:", isStudent);`;

    const codeExamples = {
        variables: `// Variable Declaration
let message = "Hello, JavaScript!";
const pi = 3.14159;
var oldWay = "Avoid using var";

console.log(message); // Output: Hello, JavaScript!
console.log(pi);      // Output: 3.14159`,

        dataTypes: `// Primitive Data Types
let name = "John";          // String
let age = 25;               // Number
let isStudent = true;       // Boolean
let score = null;           // Null
let address;                // Undefined
let id = Symbol('id');      // Symbol
let bigNumber = 9007199254740991n; // BigInt

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(typeof isStudent);// "boolean"`,
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const runCode = (code) => {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            // Note: eval is used here for educational demonstration only
            // In a real production app, use a sandboxed environment
            eval(code);

            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const dataTypes = [
        { name: 'String', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-500', example: '"Hello"' },
        { name: 'Number', icon: Hash, color: 'text-blue-500', bg: 'bg-blue-500', example: '42, 3.14' },
        { name: 'Boolean', icon: CheckCircle, color: 'text-purple-500', bg: 'bg-purple-500', example: 'true/false' },
        { name: 'Null', icon: AlertCircle, color: 'text-gray-500', bg: 'bg-gray-500', example: 'null' },
        { name: 'Undefined', icon: Code, color: 'text-yellow-500', bg: 'bg-yellow-500', example: 'undefined' },
        { name: 'Symbol', icon: Zap, color: 'text-pink-500', bg: 'bg-pink-500', example: 'Symbol()' },
        { name: 'BigInt', icon: Type, color: 'text-red-500', bg: 'bg-red-500', example: '123n' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-yellow-500/30">
            {/* Sidebar presumed to handle its own responsiveness (hidden on mobile, fixed on desktop) */}
            <LessonSidebar currentLesson="lesson1" />

            {/* Main Content Area */}
            <main className="transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono uppercase tracking-wide">
                            <span className="font-bold text-yellow-600 dark:text-yellow-400">Module 1: Fundamentals</span>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span>Lesson 1 of 23</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
                            Variables & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Data Types</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
                            Master the building blocks of JavaScript. Learn how to store information and understand the different types of data available in the language.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs sm:text-sm font-semibold border border-blue-200 dark:border-blue-500/20">
                                ⏱️ 15 min read
                            </span>
                            <span className="px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs sm:text-sm font-semibold border border-green-200 dark:border-green-500/20">
                                🌱 Beginner
                            </span>
                        </div>
                    </div>

                    {/* Learning Objectives */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/20">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            What You'll Learn
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Declare variables using let, const, and var",
                                "Understand JavaScript's 7 primitive types",
                                "Use typeof operator to check data types",
                                "Work with dynamic typing in JavaScript"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Variables Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">1.</span>
                            Variables
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { title: "let", desc: "Block-scoped. Reassignable. Modern standard.", color: "text-green-600 dark:text-green-400" },
                                { title: "const", desc: "Block-scoped. Immutable. Use by default.", color: "text-blue-600 dark:text-blue-400" },
                                { title: "var", desc: "Function-scoped. Hoisted. Avoid using.", color: "text-slate-500", opacity: "opacity-70" }
                            ].map((card, i) => (
                                <div key={i} className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all ${card.opacity || ''}`}>
                                    <div className={`text-3xl font-black ${card.color} mb-3 font-mono`}>{card.title}</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Code Block */}
                        <div className="group relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0f172a]">
                            <div className="flex justify-between items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    <span className="ml-2 text-xs text-slate-500 font-mono">script.js</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples.variables)}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all"
                                    >
                                        <Play className="w-3 h-3 fill-current" />
                                        RUN
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples.variables)}
                                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-slate-300">
                                    <code>{codeExamples.variables}</code>
                                </pre>
                            </div>

                            {/* Output Console */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 p-4 animate-in slide-in-from-top-2">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider font-bold mb-2">
                                        <Terminal className="w-3 h-3" /> Console Output
                                    </div>
                                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{output}</pre>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Data Types Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">2.</span>
                            Data Types
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {dataTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2.5 rounded-xl ${type.bg} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                                            <type.icon className={`w-5 h-5 ${type.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">{type.name}</h3>
                                        </div>
                                    </div>
                                    <code className="block w-full bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 truncate">
                                        {type.example}
                                    </code>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                            <div className="flex justify-between items-center px-4 py-3 bg-slate-900/50">
                                <span className="text-xs text-slate-500 font-mono">types_example.js</span>
                                <button
                                    onClick={() => copyToClipboard(codeExamples.dataTypes)}
                                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                                >
                                    <Copy className="w-3 h-3" /> Copy
                                </button>
                            </div>
                            <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono text-slate-300">
                                <code>{codeExamples.dataTypes}</code>
                            </pre>
                        </div>
                    </section>

                    {/* Practice Exercise - FIXED */}
                    <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-yellow-200 dark:border-yellow-900/50 overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

                        <h3 className="relative text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                            <div className="p-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg shadow-orange-500/20">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            Practice Exercise
                        </h3>

                        <div className="relative mb-8">
                            <p className="text-slate-700 dark:text-slate-300 mb-4 font-medium">
                                Create variables to store your <span className="text-yellow-600 dark:text-yellow-400">name</span>, your <span className="text-blue-600 dark:text-blue-400">age</span>, and a boolean for <span className="text-purple-600 dark:text-purple-400">student status</span>.
                            </p>

                            <div className="bg-slate-900 rounded-2xl p-1 border border-slate-800 shadow-2xl">
                                <div className="flex justify-between items-center px-4 py-3 border-b border-slate-800 bg-slate-900 rounded-t-xl">
                                    <h4 className="text-slate-400 font-mono text-xs uppercase tracking-wider">Editor</h4>

                                    {/* FIXED: Toggle Button */}
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 transition-all text-xs font-bold border border-yellow-500/20"
                                    >
                                        {showSolution ? (
                                            <>
                                                <AlertCircle className="w-3.5 h-3.5" />
                                                <span>Hide Solution</span>
                                            </>
                                        ) : (
                                            <>
                                                <Zap className="w-3.5 h-3.5 group-hover:fill-current" />
                                                <span>Show Solution</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <textarea
                                    className="w-full h-40 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm md:text-base leading-relaxed"
                                    placeholder="// Write your code here..."
                                    defaultValue={`// Exercise:
// 1. Create a String variable for name
// 2. Create a Number variable for age
// 3. Create a Boolean variable for isStudent

`}
                                />

                                {/* FIXED: Solution Reveal Area */}
                                {showSolution && (
                                    <div className="border-t border-slate-800 bg-slate-950/50 animate-in slide-in-from-top-4 duration-300">
                                        <div className="px-4 py-2 bg-green-900/10 border-b border-green-900/20 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Correct Implementation</span>
                                        </div>
                                        <pre className="p-5 font-mono text-sm md:text-base text-green-400/90 whitespace-pre-wrap overflow-x-auto">
                                            {solutionCode}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:transform hover:scale-[1.02] hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            Run Verification <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Footer Navigation - Responsive Stack */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <button className="w-full md:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors flex items-center justify-center gap-2 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Previous Lesson
                        </button>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium uppercase tracking-wider">
                                Progress: 5%
                            </div>
                            <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mx-auto">
                                <div className="h-full w-[5%] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                            </div>
                        </div>

                        <a
                            href="/lesson2"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            Next Lesson
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}