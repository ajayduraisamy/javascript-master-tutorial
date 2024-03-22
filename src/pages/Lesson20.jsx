import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Brain, Check, Copy, Play, AlertCircle, Code, Zap, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, Award, Key, Lock, Unlock, ChevronRight,
    ChevronLeft, Eye, EyeOff, RefreshCw, Maximize2, Minimize2,
    Users, Shield, Cpu, Layers, Package, Settings, GitBranch,
    Puzzle, Workflow, Clock, BatteryCharging, Wifi
} from 'lucide-react';

export default function Lesson20() {
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
        const text = "Design Patterns";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Singleton Pattern Solution
class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        this.connection = this.createConnection();
        DatabaseConnection.instance = this;
        return this;
    }

    createConnection() {
        // Simulate database connection
        console.log("Creating new database connection...");
        return { connected: true };
    }

    query(sql) {
        console.log(\`Executing query: \${sql}\`);
        return { rows: [] };
    }
}

// Usage
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true - Same instance`;

    const codeExamples = {
        singleton: `// Singleton Pattern
class ConfigurationManager {
    static instance = null;
    
    constructor() {
        if (ConfigurationManager.instance) {
            return ConfigurationManager.instance;
        }
        this.settings = {};
        ConfigurationManager.instance = this;
    }

    set(key, value) {
        this.settings[key] = value;
    }

    get(key) {
        return this.settings[key];
    }
}

// Usage - always get the same instance
const config1 = new ConfigurationManager();
const config2 = new ConfigurationManager();
console.log(config1 === config2); // true`,

        factory: `// Factory Pattern
class Car {
    constructor(model) {
        this.model = model;
    }

    drive() {
        console.log(\`\${this.model} is driving\`);
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'sedan':
                return new Car('Toyota Camry');
            case 'suv':
                return new Car('Ford Explorer');
            case 'sports':
                return new Car('Porsche 911');
            default:
                throw new Error('Unknown car type');
        }
    }
}

// Usage
const factory = new CarFactory();
const myCar = factory.createCar('suv');
myCar.drive(); // "Ford Explorer is driving"`,

        observer: `// Observer Pattern
class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    publish(news) {
        console.log(\`Publishing: \${news}\`);
        this.subscribers.forEach(subscriber => subscriber.notify(news));
    }
}

class NewsSubscriber {
    constructor(name) {
        this.name = name;
    }

    notify(news) {
        console.log(\`\${this.name} received news: \${news}\`);
    }
}

// Usage
const publisher = new NewsPublisher();
const subscriber1 = new NewsSubscriber("User1");
const subscriber2 = new NewsSubscriber("User2");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.publish("JavaScript 2024 Released!");`
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

    const designPatterns = [
        {
            name: 'Singleton',
            icon: Shield,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            example: 'One instance only',
            description: 'Single global instance',
            useCase: 'Configuration managers, Database connections',
            complexity: 'Medium'
        },
        {
            name: 'Factory',
            icon: Package,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            example: 'Object creation',
            description: 'Creates objects without exposing logic',
            useCase: 'Creating different UI components',
            complexity: 'Low'
        },
        {
            name: 'Observer',
            icon: Eye,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            example: 'Pub-Sub system',
            description: 'One-to-many dependency',
            useCase: 'Event systems, State management',
            complexity: 'Medium'
        },
        {
            name: 'Strategy',
            icon: Settings,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            example: 'Interchangeable algorithms',
            description: 'Encapsulates algorithms',
            useCase: 'Payment processors, Sorting algorithms',
            complexity: 'Low'
        },
        {
            name: 'Decorator',
            icon: Layers,
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            border: 'border-pink-500/20',
            example: 'Adds functionality',
            description: 'Extends object behavior',
            useCase: 'Adding logging, Caching, Validation',
            complexity: 'Medium'
        },
        {
            name: 'Module',
            icon: Cpu,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            example: 'Encapsulated code',
            description: 'Self-contained units',
            useCase: 'ES6 modules, Namespace patterns',
            complexity: 'Low'
        },
        {
            name: 'Proxy',
            icon: GitBranch,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20',
            example: 'Object placeholder',
            description: 'Controls access to objects',
            useCase: 'Lazy loading, Access control',
            complexity: 'High'
        },
        {
            name: 'MVC',
            icon: Workflow,
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
            border: 'border-teal-500/20',
            example: 'Architecture pattern',
            description: 'Separation of concerns',
            useCase: 'Frontend frameworks, Web applications',
            complexity: 'High'
        },
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        What are Design Patterns?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Design patterns are proven solutions to common software design problems. They're like blueprints that can be customized to solve recurring design issues in your code.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-2">Creational</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Object creation patterns (Singleton, Factory)</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Structural</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Object composition patterns (Decorator, Proxy)</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-2">Behavioral</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Communication patterns (Observer, Strategy)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Why Use Design Patterns?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Design patterns provide <span className="font-bold text-blue-600 dark:text-blue-400">tested solutions</span> that make your code more maintainable, scalable, and understandable by other developers.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-green-400 text-sm">
                            // Benefits:<br />
                            ✅ Reusable solutions<br />
                            ✅ Industry standard terminology<br />
                            ✅ Prevents reinventing the wheel<br />
                            ✅ Improves code readability<br />
                            ✅ Easier maintenance
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
                        Pattern Implementations
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Module Pattern (Common in JS):</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`const CounterModule = (function() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
        reset: () => count = 0
    };
})();

// Usage
CounterModule.increment();
console.log(CounterModule.getCount()); // 1`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Revealing Module Pattern:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`const UserService = (function() {
    const apiUrl = 'https://api.example.com';
    
    function getAllUsers() {
        return fetch(apiUrl + '/users');
    }
    
    function getUserById(id) {
        return fetch(apiUrl + '/users/' + id);
    }
    
    // Reveal only these methods
    return {
        getAllUsers,
        getUserById
    };
})();`}
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
                        <Puzzle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        Advanced Pattern Practice
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Implement a real-world design pattern. The system will test your implementation against common use cases.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Pattern correctly implemented</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Partial implementation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Pattern violation</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-purple-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson20" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold animate-pulse">
                                MODULE 3: ADVANCED
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Brain className="w-4 h-4" /> Lesson 20
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Professional Solutions for Complex Problems
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master the art of software architecture with proven design patterns used by senior developers worldwide.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium">30-40 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-medium">Advanced Level</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Users className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">Senior Developer Topic</span>
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
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {tab === 'theory' && <BookOpen className="w-4 h-4" />}
                                    {tab === 'code' && <Code className="w-4 h-4" />}
                                    {tab === 'practice' && <Puzzle className="w-4 h-4" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="animate-in fade-in duration-500">
                            {tabContents[activeTab]}
                        </div>
                    </div>

                    {/* Design Patterns Grid */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                    Essential Patterns
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Workflow className="w-4 h-4" />
                                <span className="hidden sm:inline">8 Core Patterns</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            {designPatterns.map((pattern, index) => (
                                <div
                                    key={index}
                                    className={`
                                        bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm 
                                        p-5 rounded-2xl border ${pattern.border}
                                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-${pattern.color.split('text-')[1]}/10
                                        transition-all duration-300 group cursor-pointer
                                        animate-in fade-in slide-in-from-bottom-4
                                        ${isExpanded ? 'col-span-2 row-span-2' : ''}
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${pattern.bg}`}>
                                            <pattern.icon className={`w-6 h-6 ${pattern.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500">
                                                {pattern.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {pattern.description}
                                            </p>
                                        </div>
                                        <div className="px-2 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                            {pattern.complexity}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                            USE CASE
                                        </div>
                                        <code className="block w-full bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                                            {pattern.useCase}
                                        </code>
                                    </div>
                                    {isExpanded && (
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                                CHARACTERISTICS
                                            </div>
                                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                                <li>• {pattern.category}</li>
                                                <li>• {pattern.complexity} complexity</li>
                                                <li>• Widely used in {pattern.useCase.split(',')[0].toLowerCase()}</li>
                                            </ul>
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
                                    <div className="text-sm font-mono text-slate-400">pattern_demo.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples.singleton)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-purple-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run Singleton
                                    </button>
                                    <button
                                        onClick={() => runCode(codeExamples.factory)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30"
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run Factory
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples.singleton)}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    {Object.keys(codeExamples).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => runCode(codeExamples[key])}
                                            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono"
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>
                                <pre className={`font-mono text-slate-300 overflow-x-auto ${isExpanded ? 'text-base' : 'text-sm'}`}>
                                    <code>{codeExamples.singleton}</code>
                                </pre>
                            </div>

                            {/* Output Console with Animation */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold text-slate-400">PATTERN OUTPUT</span>
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
                    <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-red-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-purple-200 dark:border-purple-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg shadow-purple-500/30 animate-bounce">
                                        <Puzzle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Architecture Challenge</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Implement Singleton Pattern</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Advanced Mode</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-purple-600 dark:text-purple-400">Challenge:</span> Create a DatabaseConnection class that follows the Singleton pattern. Requirements:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Only <span className="font-bold text-purple-600">one instance</span> can exist</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Provide a <span className="font-bold text-blue-600">query()</span> method</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Multiple calls should return the <span className="font-bold text-green-600">same instance</span></span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">singleton_pattern.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-purple-500/20 text-purple-500 hover:bg-purple-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Implement Singleton Pattern for DatabaseConnection
class DatabaseConnection {
    // Your code here
    
    constructor() {
        // Ensure only one instance
    }
    
    query(sql) {
        // Execute query
    }
}

// Test your implementation
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // Should be: true`}
                                />

                                {/* Solution Reveal */}
                                {showSolution && (
                                    <div className="border-t border-slate-800 bg-green-950/20 animate-in slide-in-from-top-4">
                                        <div className="px-4 py-2 bg-green-900/30 border-b border-green-900/50 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-400" />
                                            <span className="text-xs font-bold text-green-400">Professional Solution</span>
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test Pattern</span>
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
                                            <span className="font-bold text-slate-300">Pattern Validation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Singleton Check</span>
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
                        <a
                            href="/lesson19"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Closures</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Module Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-20/23 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 20 • Module 3: Advanced
                            </div>
                        </div>

                        <a
                            href="/lesson21"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>DOM Manipulation</span>
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