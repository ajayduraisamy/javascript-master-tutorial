import {
    ArrowRight,
    Award,
    BookOpen,
    Box,
    Calculator,
    Check,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Code,
    Copy,
    Eye,
    FunctionSquare,
    Layers,
    Play,
    RefreshCw,
    Target,
    Terminal,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson5() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory');
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [selectedFunction, setSelectedFunction] = useState('declaration');
    const [executionCount, setExecutionCount] = useState(0);

    // Typing effect for title
    useEffect(() => {
        const text = "Functions Basics";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Solution: Temperature Converter
// Function Declaration
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function Expression
const fahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
};

// Arrow Function
const convertTemperature = (value, fromUnit, toUnit) => {
    if (fromUnit === 'C' && toUnit === 'F') {
        return celsiusToFahrenheit(value);
    } else if (fromUnit === 'F' && toUnit === 'C') {
        return fahrenheitToCelsius(value);
    } else {
        return value; // Same unit
    }
};

// Test the functions
console.log("Temperature Conversions:");
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F to Celsius:", fahrenheitToCelsius(77).toFixed(2));

console.log("\\nUsing converter function:");
console.log("100°C to F:", convertTemperature(100, 'C', 'F'));
console.log("212°F to C:", convertTemperature(212, 'F', 'C').toFixed(2));
console.log("50°C to C:", convertTemperature(50, 'C', 'C'));

// Function with default parameters
function formatTemperature(value, unit = 'C') {
    return \`\${value}°\${unit}\`;
}

console.log("\\nFormatted Temperatures:");
console.log(formatTemperature(25));
console.log(formatTemperature(77, 'F'));
console.log(formatTemperature(0));`;

    const codeExamples = {
        declaration: `// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Calling the function
console.log(greet("Alice"));      // Hello, Alice!
console.log(greet("Bob"));        // Hello, Bob!

// Function with multiple parameters
function calculateArea(length, width) {
    return length * width;
}

console.log("Area of rectangle 5x3:", calculateArea(5, 3));

// Function without parameters
function sayHello() {
    return "Hello, World!";
}

console.log(sayHello());

// Function with return statement
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Is 25 an adult?", isAdult(25));
console.log("Is 16 an adult?", isAdult(16));

// Early return
function checkNumber(num) {
    if (num < 0) {
        return "Negative";
    }
    if (num > 0) {
        return "Positive";
    }
    return "Zero";
}

console.log(checkNumber(10));   // Positive
console.log(checkNumber(-5));   // Negative
console.log(checkNumber(0));    // Zero`,

        expression: `// Function Expression
const multiply = function(x, y) {
    return x * y;
};

console.log("Multiplication:", multiply(4, 5));

// Function expression with name (optional)
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log("Factorial of 5:", factorial(5));

// Anonymous function assigned to variable
const greet = function(name) {
    return \`Hello, \${name}\`;
};

console.log(greet("John"));

// Function expression in array
const operations = [
    function add(a, b) { return a + b; },
    function subtract(a, b) { return a - b; },
    function multiply(a, b) { return a * b; },
    function divide(a, b) { return a / b; }
];

console.log("Array of functions:");
operations.forEach((func, index) => {
    console.log(\`Operation \${index}: \`, func(10, 2));
});

// Function expression as object method
const calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    multiply: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; }
};

console.log("\\nCalculator object:");
console.log("10 + 5 =", calculator.add(10, 5));
console.log("10 - 5 =", calculator.subtract(10, 5));
console.log("10 * 5 =", calculator.multiply(10, 5));
console.log("10 / 5 =", calculator.divide(10, 5));`,

        arrow: `// Arrow Functions
// Basic arrow function
const square = (x) => {
    return x * x;
};

console.log("Square of 5:", square(5));

// Arrow function with implicit return
const double = x => x * 2;
console.log("Double of 7:", double(7));

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log("10 + 20 =", add(10, 20));

// Arrow function with no parameters
const getRandom = () => Math.random();
console.log("Random number:", getRandom());

// Arrow function with object return
const createUser = (name, age) => ({ name, age });
console.log("User:", createUser("Alice", 25));

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];

console.log("\\nUsing arrow functions with arrays:");
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);

// Arrow functions and 'this'
const person = {
    name: "John",
    tasks: ["Task 1", "Task 2", "Task 3"],
    showTasks: function() {
        this.tasks.forEach(task => {
            console.log(\`\${this.name} needs to do: \${task}\`);
        });
    }
};

person.showTasks();`,

        parameters: `// Function Parameters
// Default parameters
function greet(name = "Guest") {
    return \`Hello, \${name}!\`;
}

console.log(greet());           // Hello, Guest!
console.log(greet("Alice"));    // Hello, Alice!

// Multiple default parameters
function createProfile(name, age = 25, country = "Unknown") {
    return {
        name: name,
        age: age,
        country: country
    };
}

console.log(createProfile("John"));
console.log(createProfile("Sarah", 30));
console.log(createProfile("Mike", 28, "USA"));

// Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("\\nUsing rest parameters:");
console.log("Sum of 1,2,3:", sumAll(1, 2, 3));
console.log("Sum of 1-5:", sumAll(1, 2, 3, 4, 5));
console.log("Sum of no numbers:", sumAll());

// Mixed parameters
function calculate(operation, ...numbers) {
    if (operation === "sum") {
        return numbers.reduce((total, num) => total + num, 0);
    } else if (operation === "product") {
        return numbers.reduce((total, num) => total * num, 1);
    }
    return 0;
}

console.log("\\nMixed parameters:");
console.log("Sum of 2,4,6:", calculate("sum", 2, 4, 6));
console.log("Product of 2,3,4:", calculate("product", 2, 3, 4));

// Destructuring parameters
function displayUser({name, age, email}) {
    console.log(\`Name: \${name}\`);
    console.log(\`Age: \${age}\`);
    console.log(\`Email: \${email}\`);
}

const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

console.log("\\nDestructured parameters:");
displayUser(user);`
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
            setExecutionCount(prev => prev + 1);
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

    // Function Types
    const functionTypes = [
        {
            id: 'declaration',
            name: 'Function Declaration',
            icon: FunctionSquare,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            description: 'Hoisted, can be called before declaration',
            syntax: 'function name() { ... }',
            useCase: 'General purpose functions'
        },
        {
            id: 'expression',
            name: 'Function Expression',
            icon: Box,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            description: 'Assigned to variable, not hoisted',
            syntax: 'const name = function() { ... }',
            useCase: 'When function is a value'
        },
        {
            id: 'arrow',
            name: 'Arrow Function',
            icon: Zap,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            description: 'Concise syntax, lexical this',
            syntax: 'const name = () => { ... }',
            useCase: 'Short functions, callbacks'
        },
        {
            id: 'parameters',
            name: 'Parameters & Arguments',
            icon: Layers,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            description: 'Input values for functions',
            syntax: 'function(name, age = 25)',
            useCase: 'Flexible function inputs'
        }
    ];

    // Function Anatomy
    const functionAnatomy = [
        { part: 'Function Name', description: 'Identifier to call the function', example: 'calculateArea' },
        { part: 'Parameters', description: 'Variables that accept input values', example: '(length, width)' },
        { part: 'Function Body', description: 'Code executed when function is called', example: '{ return length * width; }' },
        { part: 'Return Statement', description: 'Sends value back to caller', example: 'return result;' },
        { part: 'Arguments', description: 'Actual values passed to parameters', example: 'calculateArea(5, 3)' }
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <FunctionSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What are Functions?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Functions are reusable blocks of code that perform specific tasks.
                        They help organize code, avoid repetition, and make programs more modular and maintainable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-blue-600 mb-2">Declaration</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Defining a function</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-purple-600 mb-2">Invocation</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Calling/executing a function</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Parameters vs Arguments
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Parameters</h4>
                            <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                                <li>• Variables in function definition</li>
                                <li>• Placeholders for values</li>
                                <li>• function greet(name)</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Arguments</h4>
                            <ul className="text-sm text-purple-600 dark:text-purple-300 space-y-1">
                                <li>• Actual values passed</li>
                                <li>• Replace parameters</li>
                                <li>• greet("Alice")</li>
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
                        <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Return Values
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Functions can return values
function add(a, b) {
    return a + b;  // Returns the sum
}

let result = add(5, 3);  // result = 8

// Functions can return different types
function processUser(user) {
    if (!user) return null;          // Return null
    if (user.age < 18) return false; // Return boolean
    return user.name;                // Return string
}

// Return vs Console.log
function logMessage(message) {
    console.log(message);  // Outputs to console
    // No return value (returns undefined)
}

function createMessage(message) {
    return message;  // Returns value to caller
}

// logMessage returns undefined
// createMessage returns the message string`}
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
                        Function Best Practices
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use descriptive function names</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Keep functions small and focused</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Limit parameters (max 3-4)</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use default parameters for optional values</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950/20 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson5" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    
                    {/* Header with Animation */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 5
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient">
                                {typingEffect}
                            </span>
                        
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master the building blocks of reusable code. Learn how to create, use, and understand functions - JavaScript's primary unit of execution.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <FunctionSquare className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">35-40 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Core Concept</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm font-medium">4 Function Types</span>
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
                                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30'
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

                    {/* Function Anatomy */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                                Function Anatomy
                            </span>
                        </h2>

                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {functionAnatomy.map((part, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                                                <span className="text-white font-bold">{index + 1}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">
                                                {part.part}
                                            </h4>
                                        </div>

                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                            {part.description}
                                        </p>

                                        <code className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                            {part.example}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Function Types Grid */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Function Types
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {functionTypes.map((func) => (
                                <button
                                    key={func.id}
                                    onClick={() => setSelectedFunction(func.id)}
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedFunction === func.id
                                        ? `${func.border} ${func.bg} scale-105 shadow-xl`
                                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-3 rounded-xl ${func.bg}`}>
                                            <func.icon className={`w-6 h-6 ${func.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">{func.name}</h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {func.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mb-2">
                                            {func.syntax}
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <span className="font-bold">Use when:</span> {func.useCase}
                                        </p>
                                    </div>
                                </button>
                            ))}
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
                                    <div className="text-sm font-mono text-slate-400">functions_demo.js</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => runCode(codeExamples[selectedFunction])}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Run {functionTypes.find(f => f.id === selectedFunction)?.name} Example
                                    </button>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[selectedFunction])}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <pre className="font-mono text-slate-300 overflow-x-auto text-sm">
                                    <code>{codeExamples[selectedFunction]}</code>
                                </pre>
                            </div>

                            {/* Output Console with Animation */}
                            {output && (
                                <div className="border-t border-slate-800 bg-black/50 animate-in slide-in-from-top-4">
                                    <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold text-slate-400">FUNCTION OUTPUT</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-slate-500">Executions: {executionCount}</span>
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

                    {/* Practice Exercise - Temperature Converter */}
                    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-blue-200 dark:border-blue-900/50 overflow-hidden group">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-indigo-500/30 animate-bounce">
                                        <Calculator className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Temperature Converter</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Test your function skills</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-500">Executions: {executionCount}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-blue-600 dark:text-blue-400">Challenge:</span> Create a temperature converter that:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Converts Celsius to Fahrenheit</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <span>Converts Fahrenheit to Celsius</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Uses different function types</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Includes a main converter function</span>
                                    </li>
                                </ul>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        <div className="font-bold text-blue-700 dark:text-blue-400">Formula</div>
                                        <code className="text-sm text-blue-600 dark:text-blue-300">
                                            °F = (°C × 9/5) + 32<br />
                                            °C = (°F - 32) × 5/9
                                        </code>
                                    </div>
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                                        <div className="font-bold text-indigo-700 dark:text-indigo-400">Examples</div>
                                        <code className="text-sm text-indigo-600 dark:text-indigo-300">
                                            0°C = 32°F<br />
                                            100°C = 212°F<br />
                                            32°F = 0°C
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">temperature_converter.js</span>
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
                                    placeholder={`// Create temperature conversion functions
// 1. Function declaration for Celsius to Fahrenheit
// 2. Function expression for Fahrenheit to Celsius
// 3. Arrow function for main converter
// 4. Function with default parameters for formatting

// Your code here...

// Test your functions
console.log("Temperature Conversions:");`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Convert Temperatures</span>
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
                                            <span className="font-bold text-slate-300">Conversion Results</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Executions: {executionCount}</span>
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
                            href="/lesson4"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Loops & Iteration</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-5/23 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 5 • Module 1
                            </div>
                        </div>

                        <a
                            href="/lesson6"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Scope & Hoisting</span>
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