import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Check, Copy, Play, AlertCircle, Code, Zap,
    CheckCircle, Target, ArrowRight, ArrowLeft, Terminal,
    BookOpen, RefreshCw, Repeat, RotateCw, RotateCcw,
    ChevronRight, ChevronLeft, Eye, EyeOff,
    Maximize2, Minimize2, Wifi, BatteryCharging,
    TrendingUp, TrendingDown, BarChart3, PieChart,
    LineChart, Activity, Cpu, Database,
    Infinity, RotateCw as LoopIcon, SkipForward,
    Award, Calculator
} from 'lucide-react';

export default function Lesson4() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory');
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [selectedLoop, setSelectedLoop] = useState('for');
    const [iterationCount, setIterationCount] = useState(0);
    const [animationPlaying, setAnimationPlaying] = useState(false);

    // Typing effect for title
    useEffect(() => {
        const text = "Loops & Iteration";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Solution: Number Analyzer
function analyzeNumbers(numbers) {
    let sum = 0;
    let max = numbers[0];
    let min = numbers[0];
    let evenCount = 0;
    let oddCount = 0;

    // Loop through array
    for (let i = 0; i < numbers.length; i++) {
        // Calculate sum
        sum += numbers[i];
        
        // Find maximum
        if (numbers[i] > max) {
            max = numbers[i];
        }
        
        // Find minimum
        if (numbers[i] < min) {
            min = numbers[i];
        }
        
        // Count even/odd
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Calculate average
    let average = sum / numbers.length;
    
    return {
        sum: sum,
        average: average.toFixed(2),
        max: max,
        min: min,
        evenCount: evenCount,
        oddCount: oddCount,
        totalNumbers: numbers.length
    };
}

// Test the function
let numbers = [10, 25, 8, 42, 17, 33, 50, 12, 9];
let analysis = analyzeNumbers(numbers);

console.log("Number Analysis Results:");
console.log("Sum:", analysis.sum);
console.log("Average:", analysis.average);
console.log("Maximum:", analysis.max);
console.log("Minimum:", analysis.min);
console.log("Even Numbers:", analysis.evenCount);
console.log("Odd Numbers:", analysis.oddCount);
console.log("Total Numbers:", analysis.totalNumbers);`;

    const codeExamples = {
        for: `// For Loop
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration", i);
}

// Loop through array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("\\nFruits in array:");

for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}

// Nested for loops (multiplication table)
console.log("\\nMultiplication Table (2-4):");

for (let i = 2; i <= 4; i++) {
    console.log(\`\\nTable of \${i}:\`);
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}`,

        while: `// While Loop
console.log("Countdown from 5:");

let count = 5;
while (count > 0) {
    console.log(count);
    count--; // Decrement count
}
console.log("Blast off!");

// While with condition
console.log("\\nSum of numbers until reaching 20:");

let sum = 0;
let number = 1;

while (sum <= 20) {
    sum += number;
    console.log(\`Added \${number}, Sum: \${sum}\`);
    number++;
}

console.log(\`\\nFinal sum: \${sum}\`);

// Infinite loop prevention
console.log("\\nFinding first number divisible by 7 and 8:");

let num = 1;
while (true) {
    if (num % 7 === 0 && num % 8 === 0) {
        console.log(\`Found: \${num}\`);
        break; // Exit loop
    }
    num++;
}`,

        dowhile: `// Do-While Loop
console.log("Do-While Example:");

let attempts = 0;
const maxAttempts = 3;

do {
    attempts++;
    console.log(\`Attempt \${attempts}\`);
} while (attempts < maxAttempts);

console.log(\`\\nTotal attempts: \${attempts}\`);

// Password validation simulation
console.log("\\nPassword Validation:");

let password = "";
const correctPassword = "secret123";

do {
    console.log("Please enter password");
    // Simulating password input
    password = correctPassword;
} while (password !== correctPassword);

console.log("Access granted!");

// Menu system
console.log("\\nMenu System Simulation:");

let choice;
let menuDisplayed = false;

do {
    if (!menuDisplayed) {
        console.log("1. View Profile");
        console.log("2. Settings");
        console.log("3. Exit");
        menuDisplayed = true;
    }
    // Simulating choice 3 to exit
    choice = 3;
    console.log(\`You chose option \${choice}\`);
} while (choice !== 3);

console.log("Goodbye!");`,

        forof: `// For...of Loop (Arrays)
let colors = ["Red", "Green", "Blue", "Yellow"];

console.log("Colors using for...of:");
for (let color of colors) {
    console.log(color);
}

// With index using entries()
console.log("\\nColors with index:");
for (let [index, color] of colors.entries()) {
    console.log(\`\${index}: \${color}\`);
}

// String iteration
let message = "Hello";
console.log("\\nString characters:");
for (let char of message) {
    console.log(char);
}

// Set iteration
let uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("\\nUnique numbers from Set:");
for (let num of uniqueNumbers) {
    console.log(num);
}

// Map iteration
let scores = new Map([
    ["John", 85],
    ["Sarah", 92],
    ["Mike", 78]
]);

console.log("\\nStudent scores:");
for (let [name, score] of scores) {
    console.log(\`\${name}: \${score}\`);
}`,

        forin: `// For...in Loop (Objects)
let student = {
    name: "Alex Johnson",
    age: 21,
    course: "Computer Science",
    gpa: 3.8,
    enrolled: true
};

console.log("Student properties:");
for (let key in student) {
    console.log(\`\${key}: \${student[key]}\`);
}

// Array with for...in (not recommended)
let numbers = [10, 20, 30, 40];
console.log("\\nArray indices (for...in):");
for (let index in numbers) {
    console.log(\`Index \${index}: \${numbers[index]}\`);
}

// Object inheritance
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

// Adding method to prototype
Object.prototype.startEngine = function() {
    return "Engine started!";
};

console.log("\\nAll properties including inherited:");
for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(\`Own property: \${prop}\`);
    } else {
        console.log(\`Inherited: \${prop}\`);
    }
}`,

        arrayMethods: `// Array Iteration Methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original array:", numbers);

// forEach() - Execute function for each element
console.log("\\nUsing forEach():");
numbers.forEach((num, index) => {
    console.log(\`Index \${index}: \${num}\`);
});

// map() - Transform each element
console.log("\\nUsing map() to double numbers:");
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter() - Select elements that pass test
console.log("\\nUsing filter() for even numbers:");
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// reduce() - Accumulate values
console.log("\\nUsing reduce() to calculate sum:");
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// find() - Find first matching element
console.log("\\nUsing find() for first number > 5:");
let firstLarge = numbers.find(num => num > 5);
console.log(firstLarge);

// some() - Check if any element passes test
console.log("\\nUsing some() to check for numbers > 8:");
let hasLarge = numbers.some(num => num > 8);
console.log("Has numbers > 8:", hasLarge);

// every() - Check if all elements pass test
console.log("\\nUsing every() to check all numbers > 0:");
let allPositive = numbers.every(num => num > 0);
console.log("All numbers > 0:", allPositive);`
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

            eval(userCode);   // run user code

            console.log = originalLog;

            if (logs.length === 0) {
                setPracticeOutput(" Code executed successfully (no console output)");
            } else {
                setPracticeOutput(" Output:\n" + logs.join("\n"));
            }

            setIterationCount(prev => prev + 1);

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

    // Loop Types
    const loopTypes = [
        {
            id: 'for',
            name: 'For Loop',
            icon: LoopIcon,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            description: 'Fixed iteration count',
            syntax: 'for (init; condition; increment)',
            useCase: 'When you know exact number of iterations'
        },
        {
            id: 'while',
            name: 'While Loop',
            icon: RefreshCw,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            description: 'Condition-based iteration',
            syntax: 'while (condition)',
            useCase: 'When iterations depend on condition'
        },
        {
            id: 'dowhile',
            name: 'Do-While Loop',
            icon: RotateCw,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            description: 'Execute at least once',
            syntax: 'do { ... } while (condition)',
            useCase: 'When loop must run at least once'
        },
        {
            id: 'forof',
            name: 'For...of Loop',
            icon: TrendingUp,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            description: 'Iterate over iterables',
            syntax: 'for (let item of array)',
            useCase: 'Arrays, strings, maps, sets'
        },
        {
            id: 'forin',
            name: 'For...in Loop',
            icon: Activity,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            description: 'Iterate over object properties',
            syntax: 'for (let key in object)',
            useCase: 'Object properties iteration'
        },
        {
            id: 'arrayMethods',
            name: 'Array Methods',
            icon: BarChart3,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20',
            description: 'Functional iteration',
            syntax: 'array.forEach/map/filter/reduce',
            useCase: 'Modern array manipulation'
        }
    ];

    // Loop Animation Data
    const loopAnimation = [
        { step: 1, description: 'Initialize counter', code: 'let i = 0' },
        { step: 2, description: 'Check condition', code: 'i < 5' },
        { step: 3, description: 'Execute loop body', code: 'console.log(i)' },
        { step: 4, description: 'Increment counter', code: 'i++' },
        { step: 5, description: 'Repeat from step 2', code: 'Back to condition check' }
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <LoopIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What are Loops?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Loops are programming constructs that repeat a block of code multiple times.
                        They help automate repetitive tasks and process collections of data efficiently.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-blue-600 mb-2">Iteration</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Single execution of loop body</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-purple-600 mb-2">Termination</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Condition that stops the loop</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Loop Control Statements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                            <div className="font-bold text-blue-600 mb-2">break</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Exit loop immediately</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                            <div className="font-bold text-green-600 mb-2">continue</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Skip to next iteration</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                            <div className="font-bold text-red-600 mb-2">Infinite Loop</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Loop without termination</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        code: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Loop Performance Tips
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Optimization:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Cache array length for better performance
let items = [/* large array */];

// Good: Cache length
for (let i = 0, len = items.length; i < len; i++) {
    // process items[i]
}

// Avoid: Recalculating length each iteration
for (let i = 0; i < items.length; i++) {
    // items.length is checked every time
}

// Use for...of for arrays (modern and clean)
for (let item of items) {
    // process item
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
                        Loop Best Practices
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">for...of</code> for arrays and strings</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Always ensure loop termination condition</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use array methods for functional programming</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Avoid modifying array while iterating</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-indigo-950/20 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson4" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 4
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 animate-gradient">
                                {typingEffect}
                            </span>
                            
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master repetition in JavaScript. Learn how to automate tasks, process collections, and work efficiently with loops and iteration methods.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <LoopIcon className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm font-medium">30-35 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Essential Concept</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">6 Loop Types</span>
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
                                            ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
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

                    {/* Loop Types Grid */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Loop Types
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {loopTypes.map((loop) => (
                                <button
                                    key={loop.id}
                                    onClick={() => setSelectedLoop(loop.id)}
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedLoop === loop.id
                                            ? `${loop.border} ${loop.bg} scale-105 shadow-xl`
                                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-3 rounded-xl ${loop.bg}`}>
                                            <loop.icon className={`w-6 h-6 ${loop.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">{loop.name}</h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {loop.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mb-2">
                                            {loop.syntax}
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <span className="font-bold">Use when:</span> {loop.useCase}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Loop Animation Steps */}
                    <div className="mb-16">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Loop Execution Flow
                                </h3>
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Steps in a for loop
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {loopAnimation.map((step, index) => (
                                    <div
                                        key={step.step}
                                        className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
                                                <span className="text-white font-bold">{step.step}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">
                                                {step.description}
                                            </h4>
                                        </div>

                                        <div className="mt-3">
                                            <code className="text-sm font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                                {step.code}
                                            </code>
                                        </div>

                                        {index < loopAnimation.length - 1 && (
                                            <div className="mt-4 flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-slate-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => {
                                        setAnimationPlaying(!animationPlaying);
                                        runCode(codeExamples.for);
                                    }}
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                                >
                                    <Play className="w-4 h-4" />
                                    {animationPlaying ? 'Stop Animation' : 'Run Loop Simulation'}
                                </button>
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
                                    <div className="text-sm font-mono text-slate-400">loops_demo.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples[selectedLoop])}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run {loopTypes.find(l => l.id === selectedLoop)?.name} Example
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[selectedLoop])}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <pre className="font-mono text-slate-300 overflow-x-auto text-sm">
                                    <code>{codeExamples[selectedLoop]}</code>
                                </pre>
                            </div>

                            {/* Output Console with Animation */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold text-slate-400">LOOP OUTPUT</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-slate-500">Iterations: {iterationCount}</span>
                                            <button
                                                onClick={() => setOutput('')}
                                                className="text-xs text-slate-500 hover:text-slate-300"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                    <pre className="p-6 text-green-400 font-mono text-sm whitespace-pre-wrap animate-pulse">
                                        {output}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Practice Exercise - Number Analyzer */}
                    <div className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-purple-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-indigo-200 dark:border-indigo-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/30 animate-bounce">
                                        <Calculator className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Number Analyzer</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Test your loop skills</p>
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
                                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Challenge:</span> Create a number analyzer that:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <span>Calculates sum and average of numbers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Finds maximum and minimum values</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Counts even and odd numbers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Uses appropriate loops for each task</span>
                                    </li>
                                </ul>

                                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                    <code className="text-sm text-slate-700 dark:text-slate-300">
                                        Input: [10, 25, 8, 42, 17, 33, 50, 12, 9]
                                    </code>
                                </div>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">number_analyzer.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a number analyzer function
function analyzeNumbers(numbers) {
    // Your code here
    // Calculate sum, average, max, min
    // Count even and odd numbers
    // Return analysis object
}

// Test your function
let numbers = [10, 25, 8, 42, 17, 33, 50, 12, 9];
let analysis = analyzeNumbers(numbers);

// Display results
console.log("Number Analysis Results:");
console.log("Sum:", analysis.sum);
console.log("Average:", analysis.average);
console.log("Maximum:", analysis.max);
console.log("Minimum:", analysis.min);
console.log("Even Numbers:", analysis.evenCount);
console.log("Odd Numbers:", analysis.oddCount);`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Analyze Numbers</span>
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
                                            <span className="font-bold text-slate-300">Analysis Results</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Iterations: {iterationCount}</span>
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
                            href="/lesson3"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Control Flow</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-4/23 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 4 • Module 1
                            </div>
                        </div>

                        <a
                            href="/lesson5"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Functions Basics</span>
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