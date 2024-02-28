import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Check, Copy, Play, AlertCircle, Code, Zap, Type,
    Hash, MessageSquare, CheckCircle, Target, ArrowRight,
    ArrowLeft, Terminal, Lightbulb, HelpCircle, Info,
    Sparkles, Award, BookOpen, Key, Lock, Unlock,
    ChevronRight, ChevronLeft, Eye, EyeOff, RefreshCw,
    Maximize2, Minimize2, Volume2, VolumeX, Wifi,
    Battery, BatteryCharging, Smartphone, Monitor,
    Calculator, Plus, Minus, X, Divide, Percent,
    Equal, NotEqual, ChevronUp, ChevronDown, ChevronsUp,
    ChevronsDown, PlusCircle, MinusCircle, XCircle,
    DivideCircle, Infinity, Pi, FunctionSquare,
    Brackets, Parentheses, Braces, Asterisk,
    Slash, Backslash, Ampersand, AtSign, Hash as HashIcon,
    DollarSign, Euro, PoundSterling, Bitcoin,
    TrendingUp, TrendingDown, BarChart3, PieChart,
    LineChart, Activity, Cpu, Server, HardDrive,
    Database, MemoryStick, Chip, Motherboard,
    CircuitBoard, Network, Wifi as WifiIcon,
    Bluetooth, Battery as BatteryIcon, Power,
    RotateCw, RotateCcw, Repeat, Repeat1, Repeat2,
    Shuffle, SkipBack, SkipForward, Play as PlayIcon,
    Pause, StopCircle, Square, Circle, Triangle,
    Hexagon, Octagon, Pentagon, Diamond, Octahedron,
    Dodecahedron, Icosahedron, Cube, Cuboid, Cylinder,
    Cone, Pyramid, Sphere, Torus, Celestial, Atom,
    Biohazard, Radiation, Radioactive, Skull, Ghost,
    Alien, Robot, Gamepad2, Joystick, Dice1, Dice2,
    Dice3, Dice4, Dice5, Dice6, ChessKing, ChessQueen,
    ChessRook, ChessBishop, ChessKnight, ChessPawn,
    Crown, Gem, Diamond as DiamondIcon, Trophy,
    Medal, Award as AwardIcon, Gift, Package, Box,
    Container, Palette, PaintBucket, Brush, PenTool,
    Scissors, Ruler, Compass, SquareRoot, Sigma,
    Pi as PiIcon, Infinity as InfinityIcon
} from 'lucide-react';

export default function Lesson2() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'code', 'practice'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [selectedOperator, setSelectedOperator] = useState('arithmetic');

    // Typing effect for title
    useEffect(() => {
        const text = "Operators & Expressions";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Solution: Calculator Operations
let a = 15;
let b = 4;

// Arithmetic Operations
console.log("Addition:", a + b);        // 19
console.log("Subtraction:", a - b);     // 11
console.log("Multiplication:", a * b);  // 60
console.log("Division:", a / b);        // 3.75
console.log("Modulus:", a % b);         // 3
console.log("Exponentiation:", a ** b); // 50625

// Comparison Operations
console.log("Is a > b?", a > b);        // true
console.log("Is a == b?", a == b);      // false
console.log("Is a != b?", a != b);      // true

// Logical Operations
let isAdult = true;
let hasLicense = false;
console.log("Can drive?", isAdult && hasLicense); // false
console.log("Can vote?", isAdult || hasLicense);   // true`;

    const codeExamples = {
        arithmetic: `// Arithmetic Operators
let x = 10, y = 3;

console.log("x + y =", x + y);  // 13
console.log("x - y =", x - y);  // 7
console.log("x * y =", x * y);  // 30
console.log("x / y =", x / y);  // 3.333...
console.log("x % y =", x % y);  // 1 (remainder)
console.log("x ** y =", x ** y); // 1000 (10³)
console.log("x++ =", x++);      // 10 (post-increment)
console.log("++x =", ++x);      // 12 (pre-increment)`,

        comparison: `// Comparison Operators
let a = 5, b = "5", c = 10;

console.log("a == b", a == b);   // true (loose equality)
console.log("a === b", a === b); // false (strict equality)
console.log("a != b", a != b);   // false
console.log("a !== b", a !== b); // true
console.log("a < c", a < c);     // true
console.log("a > c", a > c);     // false
console.log("a <= c", a <= c);   // true
console.log("a >= c", a >= c);   // false`,

        logical: `// Logical Operators
let hasAccount = true;
let isLoggedIn = false;
let balance = 100;

// AND (&&) - both must be true
console.log("Can access?", hasAccount && isLoggedIn); // false

// OR (||) - at least one true
console.log("Can view?", hasAccount || isLoggedIn);   // true

// NOT (!) - reverses boolean
console.log("Is logged out?", !isLoggedIn);           // true

// Combined expression
console.log("Can withdraw?", hasAccount && balance > 0); // true`
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
                setPracticeOutput("✅ Code executed successfully (no console output)");
            } else {
                setPracticeOutput("✅ Output:\n" + logs.join("\n"));
            }
        } catch (error) {
            setPracticeOutput("❌ Error: " + error.message);
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
            setOutput(`❌ Error: ${error.message}`);
        }
    };

    // Operator Categories
    const operatorCategories = [
        {
            id: 'arithmetic',
            name: 'Arithmetic',
            icon: Calculator,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            operators: [
                { symbol: '+', name: 'Addition', example: '5 + 3 = 8' },
                { symbol: '-', name: 'Subtraction', example: '5 - 3 = 2' },
                { symbol: '*', name: 'Multiplication', example: '5 * 3 = 15' },
                { symbol: '/', name: 'Division', example: '6 / 2 = 3' },
                { symbol: '%', name: 'Modulus', example: '7 % 3 = 1' },
                { symbol: '**', name: 'Exponentiation', example: '2 ** 3 = 8' },
                { symbol: '++', name: 'Increment', example: 'x++ (adds 1)' },
                { symbol: '--', name: 'Decrement', example: 'x-- (subtracts 1)' }
            ]
        },
        {
            id: 'comparison',
            name: 'Comparison',
            icon: Equal,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            operators: [
                { symbol: '==', name: 'Equal to', example: '5 == "5" (true)' },
                { symbol: '===', name: 'Strict equal', example: '5 === "5" (false)' },
                { symbol: '!=', name: 'Not equal', example: '5 != 3 (true)' },
                { symbol: '!==', name: 'Strict not equal', example: '5 !== "5" (true)' },
                { symbol: '>', name: 'Greater than', example: '5 > 3 (true)' },
                { symbol: '<', name: 'Less than', example: '5 < 3 (false)' },
                { symbol: '>=', name: 'Greater or equal', example: '5 >= 5 (true)' },
                { symbol: '<=', name: 'Less or equal', example: '5 <= 5 (true)' }
            ]
        },
        {
            id: 'logical',
            name: 'Logical',
            icon: Braces,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            operators: [
                { symbol: '&&', name: 'AND', example: 'true && false = false' },
                { symbol: '||', name: 'OR', example: 'true || false = true' },
                { symbol: '!', name: 'NOT', example: '!true = false' },
                { symbol: '??', name: 'Nullish Coalescing', example: 'null ?? "default" = "default"' },
                { symbol: '?.', name: 'Optional Chaining', example: 'obj?.prop' }
            ]
        },
        {
            id: 'assignment',
            name: 'Assignment',
            icon: ChevronRight,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            operators: [
                { symbol: '=', name: 'Assignment', example: 'x = 5' },
                { symbol: '+=', name: 'Add & assign', example: 'x += 3 (x = x + 3)' },
                { symbol: '-=', name: 'Subtract & assign', example: 'x -= 3 (x = x - 3)' },
                { symbol: '*=', name: 'Multiply & assign', example: 'x *= 3 (x = x * 3)' },
                { symbol: '/=', name: 'Divide & assign', example: 'x /= 3 (x = x / 3)' },
                { symbol: '%=', name: 'Modulus & assign', example: 'x %= 3 (x = x % 3)' }
            ]
        }
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What are Operators?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Operators are special symbols that perform operations on operands (values or variables).
                        JavaScript has various types of operators for arithmetic, comparison, logical operations, and more.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-blue-600 mb-2">Operand</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">The values that operators work on</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-purple-600 mb-2">Expression</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Combination of values, variables, and operators</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Equal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Operator Precedence
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        JavaScript evaluates expressions in a specific order called <span className="font-bold text-purple-600 dark:text-purple-400">operator precedence</span>.
                        When operators have the same precedence, they're evaluated from left to right.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-green-400 text-sm">
                            // Example: Operator Precedence<br />
                            let result = 2 + 3 * 4;  // 14, not 20<br />
                            // Multiplication (*) has higher precedence than addition (+)
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
                        Operator Examples
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Type Coercion:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// JavaScript automatically converts types
console.log("5" + 2);     // "52" (string concatenation)
console.log("5" - 2);     // 3 (string converted to number)
console.log("5" * "2");   // 10 (both converted to numbers)
console.log("hello" * 2); // NaN (Not a Number)`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Short-circuit Evaluation:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Logical operators stop evaluating when possible
let result = false && expensiveFunction();  // expensiveFunction never called
let value = true || expensiveFunction();    // expensiveFunction never called

// Nullish coalescing operator
let username = null ?? "Guest";  // "Guest"
let age = 0 ?? 25;               // 0 (0 is not null/undefined)`}
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
                        Practice Tips
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        When practicing operators, remember these key points:
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-500">1</span>
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">===</code> instead of <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">==</code> for strict equality checks</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-green-500">2</span>
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Understand type coercion in JavaScript</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-purple-500">3</span>
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Parentheses <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">()</code> can change evaluation order</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson2" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    {/* Floating Progress Indicator */}
                    <div className="fixed top-24 right-8 z-20 hidden lg:block">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">PROGRESS</div>
                            <div className="w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-2/23 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">Lesson 2 of 23</div>
                        </div>
                    </div>

                    {/* Header with Animation */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 2
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="animate-pulse">▋</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Learn how to perform calculations, make comparisons, and combine conditions using JavaScript's powerful operators.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Calculator className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">20-25 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Essential Concept</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium">4 Categories</span>
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
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
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

                    {/* Operator Category Selector */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
                                Operator Categories
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {operatorCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedOperator(category.id)}
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 ${selectedOperator === category.id
                                            ? `${category.border} ${category.bg} scale-105 shadow-xl`
                                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl ${category.bg}`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{category.name}</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {category.operators.length} operators
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Operator Grid */}
                    <div className="mb-16">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {operatorCategories.find(c => c.id === selectedOperator)?.name} Operators
                                </h3>
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Click any operator to see details
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {operatorCategories
                                    .find(c => c.id === selectedOperator)
                                    ?.operators.map((op, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group cursor-pointer"
                                            onClick={() => {
                                                const example = codeExamples[selectedOperator];
                                                if (example) runCode(example);
                                            }}
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                    {op.symbol}
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-all group-hover:translate-x-1" />
                                            </div>
                                            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">
                                                {op.name}
                                            </h4>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                                                {op.example}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

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
                                    <div className="text-sm font-mono text-slate-400">operators_demo.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples[selectedOperator] || codeExamples.arithmetic)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-purple-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run {selectedOperator} Example
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[selectedOperator] || codeExamples.arithmetic)}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <pre className="font-mono text-slate-300 overflow-x-auto text-sm">
                                    <code>{codeExamples[selectedOperator] || codeExamples.arithmetic}</code>
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
                    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-blue-200 dark:border-blue-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 animate-bounce">
                                        <Calculator className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Calculator Challenge</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Test your operator skills</p>
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
                                    <span className="font-bold text-blue-600 dark:text-blue-400">Challenge:</span> Create a simple calculator that performs:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Basic arithmetic operations (+, -, *, /, %)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Comparison operations (`>`, <, ==, ===`)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Logical operations (&&, ||, !)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">calculator.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a calculator with two numbers
let num1 = 15;
let num2 = 4;

// Your code here:
// 1. Perform arithmetic operations
// 2. Compare the numbers
// 3. Use logical operators
// 4. Print results using console.log()`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Execute Calculator</span>
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
                                            <span className="font-bold text-slate-300">Calculator Results</span>
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
                        <a
                            href="/lesson1"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Variables & Data Types</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-2/23 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 2 • Module 1
                            </div>
                        </div>

                        <a
                            href="/lesson3"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Control Flow</span>
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