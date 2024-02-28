import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Check, Copy, Play, AlertCircle, Code, Zap, Type,
    Hash, MessageSquare, CheckCircle, Target, ArrowRight,
    ArrowLeft, Terminal, Lightbulb, HelpCircle, Info,
    Sparkles, Award, BookOpen, Key, Lock, Unlock,
    ChevronRight, ChevronLeft, Eye, EyeOff, RefreshCw,
    Maximize2, Minimize2, Volume2, VolumeX, Wifi,
    Battery, BatteryCharging, Smartphone, Monitor, Clock
} from 'lucide-react';

export default function Lesson1() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'code', 'practice'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);

    // Typing effect for title
    useEffect(() => {
        const text = "Variables & Data Types";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
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

    const runPracticeCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;

            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            eval(userCode);

            console.log = originalLog;

            if (logs.length === 0) {
                setPracticeOutput(" Code executed successfully (no console output)");
            } else {
                setPracticeOutput(" Output:\n" + logs.join("\n"));
            }
        } catch (error) {
            setPracticeOutput(" Error: " + error.message);
        }
    };

    const clearPractice = () => {
        setUserCode('');
        setPracticeOutput('');
    };

    const runCode = (code) => {
        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 300);

        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            eval(code);

            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(` Error: ${error.message}`);
        }
    };

    const dataTypes = [
        { name: 'String', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', example: '"Hello"', description: 'Text data' },
        { name: 'Number', icon: Hash, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', example: '42, 3.14', description: 'Numeric data' },
        { name: 'Boolean', icon: CheckCircle, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', example: 'true/false', description: 'True/False values' },
        { name: 'Null', icon: AlertCircle, color: 'text-gray-500', bg: 'bg-gray-500/10', border: 'border-gray-500/20', example: 'null', description: 'Intentional empty value' },
        { name: 'Undefined', icon: Code, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', example: 'undefined', description: 'Uninitialized variable' },
        { name: 'Symbol', icon: Zap, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20', example: 'Symbol()', description: 'Unique identifier' },
        { name: 'BigInt', icon: Type, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', example: '123n', description: 'Large integers' },
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What are Variables?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Variables are containers for storing data values. Think of them as labeled boxes where you can store information to use later in your program.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-2">let</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Modern, block-scoped, can be reassigned</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">const</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Constant, cannot be reassigned</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl opacity-70">
                            <div className="text-2xl font-bold text-gray-500 mb-2">var</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Old, function-scoped, avoid using</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Key className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Dynamic Typing
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        JavaScript is <span className="font-bold text-purple-600 dark:text-purple-400">dynamically typed</span>. This means you don't need to specify the data type when declaring a variable. The type is determined at runtime.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-green-400 text-sm">
                            let x = 10;        // x is a number<br />
                            x = "hello";       // now x is a string<br />
                            x = true;          // now x is a boolean
                        </code>
                    </div>
                </div>
            </div>
        ),
        code: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Code Examples
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Variable Declaration:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`let name = "John";
const age = 30;
var city = "New York"; // Avoid using var`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Type Checking:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`console.log(typeof "Hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        practice: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        Interactive Practice
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Try creating variables in the code editor below. The system will automatically run your code and show the output.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Green dot means code is valid</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Red dot means error in code</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-yellow-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson1" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    

                
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 1
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
                                {typingEffect}
                            </span>
                        
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master the essential building blocks of JavaScript. Learn to store, manage, and understand data like a professional developer.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">15-20 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Beginner Friendly</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium">Essential Concept</span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Tabs */}
                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['theory', 'code', 'practice'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${activeTab === tab
                                            ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {tab === 'theory' && <BookOpen className="w-4 h-4" />}
                                    {tab === 'code' && <Code className="w-4 h-4" />}
                                    {tab === 'practice' && <Target className="w-4 h-4" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="animate-in fade-in duration-500">
                            {tabContents[activeTab]}
                        </div>
                    </div>

                    {/* Interactive Data Types Grid */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                    Data Types
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Smartphone className="w-4 h-4" />
                                <span className="hidden sm:inline">7 Primitive Types</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            {dataTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className={`
                                        bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm 
                                        p-5 rounded-2xl border ${type.border}
                                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-${type.color.split('text-')[1]}/10
                                        transition-all duration-300 group cursor-pointer
                                        animate-in fade-in slide-in-from-bottom-4
                                        ${isExpanded ? 'col-span-2 row-span-2' : ''}
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${type.bg}`}>
                                            <type.icon className={`w-6 h-6 ${type.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500">
                                                {type.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {type.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                            EXAMPLE
                                        </div>
                                        <code className="block w-full bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                                            {type.example}
                                        </code>
                                    </div>
                                    {isExpanded && (
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                                USAGE
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                This data type is used for {type.description.toLowerCase()} in JavaScript programs.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interactive Code Playground */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                            <div className="flex justify-between items-center px-6 py-4 bg-slate-900/50 border-b border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-sm font-mono text-slate-400">interactive_playground.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples.variables)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-green-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run Code
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples.variables)}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <pre className={`font-mono text-slate-300 overflow-x-auto ${isExpanded ? 'text-base' : 'text-sm'}`}>
                                    <code>{codeExamples.variables}</code>
                                </pre>
                            </div>

                            {/* Output Console with Animation */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold text-slate-400">OUTPUT</span>
                                        </div>
                                        <button
                                            onClick={() => setOutput('')}
                                            className="text-xs text-slate-500 hover:text-slate-300"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    <pre className="p-6 text-green-400 font-mono text-sm whitespace-pre-wrap animate-pulse">
                                        {output}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Practice Exercise - Enhanced */}
                    <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-yellow-200 dark:border-yellow-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg shadow-orange-500/30 animate-bounce">
                                        <Code className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Practice Exercise</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Test your understanding</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Live Execution</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-yellow-600 dark:text-yellow-400">Challenge:</span> Create three variables:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>A <span className="font-bold text-green-600">String</span> for your name</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>A <span className="font-bold text-blue-600">Number</span> for your age</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>A <span className="font-bold text-purple-600">Boolean</span> for student status</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">practice.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder="// Write your solution here...
// Example:
// let name = 'JavaScript';
// let age = 30;
// let isStudent = true;
// console.log(name, age, isStudent);"
                                />

                                {/* Solution Reveal */}
                                {showSolution && (
                                    <div className="border-t border-slate-800 bg-green-950/20 animate-in slide-in-from-top-4">
                                        <div className="px-4 py-2 bg-green-900/30 border-b border-green-900/50 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span className="text-xs font-bold text-green-400">Model Solution</span>
                                        </div>
                                        <pre className="p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">
                                            {solutionCode}
                                        </pre>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={runPracticeCode}
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-2xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Execute Code</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={clearPractice}
                                    className="px-6 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Reset
                                </button>
                            </div>

                            {/* Output Display */}
                            {practiceOutput && (
                                <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl p-5 border border-slate-800 animate-in fade-in">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-5 h-5 text-green-500" />
                                            <span className="font-bold text-slate-300">Live Results</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Real-time</span>
                                        </div>
                                    </div>
                                    <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto p-4 bg-black/30 rounded-lg">
                                        {practiceOutput}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Introduction</span>
                        </button>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-1/23 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 1 • Module 1
                            </div>
                        </div>

                        <a
                            href="/lesson2"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-2xl hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Operators & Expressions</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </main>

            {/* Add CSS Animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                    background-size: 200% 200%;
                }
                .animate-gradient {
                    background-size: 300% 300%;
                    animation: gradient-x 5s ease infinite;
                }
            `}</style>
        </div>
    );
}