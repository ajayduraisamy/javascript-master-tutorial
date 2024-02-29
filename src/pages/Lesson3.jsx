import {
    ArrowRight,
    Award,
    BookOpen,
    Calculator,
    Check,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Code,
    Copy,
    Eye,
    FunctionSquare,
    GitBranch,
    Play,
    RefreshCw,
    Target,
    Terminal,
    X as XIcon
} from "lucide-react";
import { useEffect, useState } from 'react';
import LessonSidebar from '../components/LessonSidebar';


export default function Lesson3() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory');
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [selectedFlow, setSelectedFlow] = useState('if');
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);

    // Typing effect for title
    useEffect(() => {
        const text = "Control Flow";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Solution: Grade Calculator
function calculateGrade(score) {
    let grade;
    
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Determine pass/fail
    let status = (score >= 60) ? 'Pass' : 'Fail';
    
    // Return result
    return \`Score: \${score}, Grade: \${grade}, Status: \${status}\`;
}

// Test the function
console.log(calculateGrade(95));  // A
console.log(calculateGrade(85));  // B
console.log(calculateGrade(75));  // C
console.log(calculateGrade(55));  // F`;

    const codeExamples = {
        if: `// if-else Statements
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's warm outside!");
} else if (temperature > 10) {
    console.log("It's cool outside!");
} else {
    console.log("It's cold outside!");
}

// Nested if statements
let age = 18;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive!");
    } else {
        console.log("You need a license!");
    }
} else {
    console.log("Too young to drive!");
}`,

        switch: `// switch Statement
let day = "Monday";
let message;

switch (day) {
    case "Monday":
        message = "Start of the work week";
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        message = "Middle of the week";
        break;
    case "Friday":
        message = "TGIF! Weekend is coming";
        break;
    case "Saturday":
    case "Sunday":
        message = "Weekend! Time to relax";
        break;
    default:
        message = "Invalid day";
}

console.log(\`\${day}: \${message}\`);

// Switch with numbers
let rating = 4;
let feedback;

switch (rating) {
    case 5:
        feedback = "Excellent!";
        break;
    case 4:
        feedback = "Very Good";
        break;
    case 3:
        feedback = "Good";
        break;
    case 2:
        feedback = "Fair";
        break;
    case 1:
        feedback = "Poor";
        break;
    default:
        feedback = "Invalid rating";
}`,

        ternary: `// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote!" : "No, you cannot vote!";
console.log(canVote);

// Multiple conditions with ternary
let score = 85;
let result = (score >= 90) ? "A" :
             (score >= 80) ? "B" :
             (score >= 70) ? "C" :
             (score >= 60) ? "D" : "F";
console.log(\`Score: \${score}, Grade: \${result}\`);

// Using ternary for simple assignments
let isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(welcomeMessage);`
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
            setAttempts(attempts + 1);
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

    // Control Flow Types
    const controlFlows = [
        {
            id: 'if',
            name: 'Conditional Statements',
            icon: GitBranch,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            description: 'Make decisions based on conditions',
            examples: ['if', 'else if', 'else', 'nested if'],
            usage: 'When you need to check multiple conditions'
        },
        {
            id: 'switch',
            name: 'Switch Statements',
            icon: GitBranch,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            description: 'Choose between many alternatives',
            examples: ['switch', 'case', 'break', 'default'],
            usage: 'When comparing one value against many options'
        },
        {
            id: 'ternary',
            name: 'Ternary Operator',
            icon: Code,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            description: 'Short conditional expression',
            examples: ['condition ? true : false'],
            usage: 'Simple if-else assignments in one line'
        },
        {
            id: 'logical',
            name: 'Logical Operators',
            icon: FunctionSquare,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            description: 'Combine conditions',
            examples: ['&&', '||', '!'],
            usage: 'When checking multiple conditions together'
        }
    ];

    // Decision Flowchart Data
    const flowchartData = [
        { id: 1, condition: 'Is it raining?', yes: 'Take umbrella', no: 'Wear sunglasses' },
        { id: 2, condition: 'Temperature > 25°C?', yes: 'Wear shorts', no: 'Wear jacket' },
        { id: 3, condition: 'Weekend?', yes: 'Sleep in', no: 'Wake up early' },
        { id: 4, condition: 'Hungry?', yes: 'Eat food', no: 'Keep working' }
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What is Control Flow?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Control flow refers to the order in which individual statements, instructions, or function calls are executed in a program.
                        It allows your program to make decisions and execute different code paths based on conditions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-blue-600 mb-2">Sequential Flow</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Code executes line by line, in order</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-purple-600 mb-2">Conditional Flow</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Code executes based on conditions</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Truthy and Falsy Values
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        In JavaScript, conditions evaluate to <span className="font-bold text-green-600 dark:text-green-400">truthy</span> or
                        <span className="font-bold text-red-600 dark:text-red-400"> falsy</span> values. Understanding these is crucial for control flow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Truthy Values</h4>
                            <ul className="text-sm text-green-600 dark:text-green-300 space-y-1">
                                <li>• true</li>
                                <li>• Any non-zero number</li>
                                <li>• Non-empty strings</li>
                                <li>• Arrays and objects</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                            <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Falsy Values</h4>
                            <ul className="text-sm text-red-600 dark:text-red-300 space-y-1">
                                <li>• false</li>
                                <li>• 0, -0, 0n</li>
                                <li>• "" (empty string)</li>
                                <li>• null, undefined, NaN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ),
        code: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <TerminalIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Code Patterns
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Early Returns:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Use early returns to avoid nested if statements
function processUser(user) {
    if (!user) return "No user provided";
    if (!user.active) return "User is inactive";
    if (user.age < 18) return "User is underage";
    
    // Main logic here
    return "User processed successfully";
}

// This is cleaner than:
function processUserOld(user) {
    if (user) {
        if (user.active) {
            if (user.age >= 18) {
                // Main logic here
                return "User processed successfully";
            } else {
                return "User is underage";
            }
        } else {
            return "User is inactive";
        }
    } else {
        return "No user provided";
    }
}`}
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
                        Best Practices
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Follow these guidelines for clean control flow:
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-blue-500" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">===</code> for strict comparisons</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-500" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Prefer early returns to reduce nesting</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-purple-500" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use switch for multiple fixed values</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-yellow-500" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Ternary for simple one-line conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-emerald-950/20 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson3" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    {/* Floating Progress Indicator */}
                    <div className="fixed top-24 right-8 z-20 hidden lg:block">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">PROGRESS</div>
                            <div className="w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-3/23 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">Lesson 3 of 23</div>
                        </div>
                    </div>

                    {/* Header with Animation */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 3
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="animate-pulse">▋</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master decision-making in JavaScript. Learn how to control the flow of your program with conditions and logical operators.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <GitBranch className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm font-medium">25-30 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Core Concept</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">4 Control Types</span>
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
                                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
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

                    {/* Control Flow Types */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Control Flow Types
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {controlFlows.map((flow) => (
                                <button
                                    key={flow.id}
                                    onClick={() => setSelectedFlow(flow.id)}
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedFlow === flow.id
                                        ? `${flow.border} ${flow.bg} scale-105 shadow-xl`
                                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-3 rounded-xl ${flow.bg}`}>
                                            <flow.icon className={`w-6 h-6 ${flow.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">{flow.name}</h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {flow.examples.length} variants
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                        {flow.description}
                                    </p>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        <span className="font-bold">Use when:</span> {flow.usage}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Flowchart */}
                    <div className="mb-16">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Interactive Decision Flowchart
                                </h3>
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Click decisions to see paths
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {flowchartData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center">
                                                <span className="text-white font-bold">{item.id}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">
                                                {item.condition}
                                            </h4>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                                </div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                                    If YES: <span className="font-bold text-green-600 dark:text-green-400">{item.yes}</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                                    <XIcon className="w-3 h-3 text-red-600 dark:text-red-400" />
                                                </div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                                    If NO: <span className="font-bold text-red-600 dark:text-red-400">{item.no}</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                            <button
                                                onClick={() => runCode(`console.log("${item.condition}"); console.log("YES: ${item.yes}"); console.log("NO: ${item.no}");`)}
                                                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold hover:shadow-lg transition-all"
                                            >
                                                Simulate Decision
                                            </button>
                                        </div>
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
                                    <div className="text-sm font-mono text-slate-400">control_flow.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples[selectedFlow] || codeExamples.if)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run {controlFlows.find(f => f.id === selectedFlow)?.name} Example
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[selectedFlow] || codeExamples.if)}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <pre className="font-mono text-slate-300 overflow-x-auto text-sm">
                                    <code>{codeExamples[selectedFlow] || codeExamples.if}</code>
                                </pre>
                            </div>

                            {/* Output Console with Animation */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold text-slate-400">DECISION OUTPUT</span>
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

                    {/* Practice Exercise - Grade Calculator */}
                    <div className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-purple-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-emerald-200 dark:border-emerald-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg shadow-blue-500/30 animate-bounce">
                                        <Calculator className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Grade Calculator</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Test your control flow skills</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-500">Attempts: {attempts}</div>
                                        <div className="text-xs text-slate-500">Score: {score}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Challenge:</span> Create a grade calculator that:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <span>Takes a score (0-100) as input</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Returns a letter grade (A, B, C, D, F)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Determines pass/fail (60+ passes)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span>Uses different control flow methods</span>
                                    </li>
                                </ul>

                                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
                                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                        <div className="font-bold text-green-700 dark:text-green-400">A</div>
                                        <div className="text-xs text-green-600 dark:text-green-300">90-100</div>
                                    </div>
                                    <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        <div className="font-bold text-blue-700 dark:text-blue-400">B</div>
                                        <div className="text-xs text-blue-600 dark:text-blue-300">80-89</div>
                                    </div>
                                    <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                                        <div className="font-bold text-yellow-700 dark:text-yellow-400">C</div>
                                        <div className="text-xs text-yellow-600 dark:text-yellow-300">70-79</div>
                                    </div>
                                    <div className="text-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                                        <div className="font-bold text-orange-700 dark:text-orange-400">D</div>
                                        <div className="text-xs text-orange-600 dark:text-orange-300">60-69</div>
                                    </div>
                                    <div className="text-center p-2 bg-red-50 dark:bg-red-900/30 rounded-lg">
                                        <div className="font-bold text-red-700 dark:text-red-400">F</div>
                                        <div className="text-xs text-red-600 dark:text-red-300">0-59</div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">grade_calculator.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a grade calculator function
function calculateGrade(score) {
    // Your code here
    // Use if-else or switch statements
    // Return grade and pass/fail status
}

// Test your function
console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(75));
console.log(calculateGrade(65));
console.log(calculateGrade(55));`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Calculate Grades</span>
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
                                            <span className="font-bold text-slate-300">Grade Results</span>
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
                            href="/lesson2"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Operators & Expressions</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-3/23 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 3 • Module 1
                            </div>
                        </div>

                        <a
                            href="/lesson4"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Loops & Iteration</span>
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