import React, { useState } from 'react';
import {
    CheckSquare, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw,
    Hash, Filter, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Split, Merge, BookOpen, Brain
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson7() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === ARRAY FUNDAMENTALS ===
// 1. Creating Arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, { name: 'John' }];

// 2. Accessing Elements
console.log(fruits[0]);      // 'apple' (zero-based)
console.log(fruits.length);  // 3

// === ESSENTIAL METHODS ===
// 3. Transformation Methods
const doubled = numbers.map(num => num * 2);
console.log('Map:', doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log('Filter:', evens);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Reduce:', sum);

// 4. Iteration
numbers.forEach(num => console.log('ForEach:', num));

// 5. Searching
const found = fruits.find(fruit => fruit.startsWith('b'));
console.log('Find:', found);

const hasApple = fruits.includes('apple');
console.log('Includes:', hasApple);

// 6. Adding/Removing
fruits.push('grape');     // Add to end
fruits.pop();             // Remove from end
fruits.unshift('kiwi');   // Add to start
fruits.shift();           // Remove from start

console.log('Modified:', fruits);`);

    const [output, setOutput] = useState('');
    const [currentMethod, setCurrentMethod] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);

    const runCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args);
            };

            // Note: In a real app, don't use eval. 
            // For this demo, we assume inputs are safe/local.
            // Using a try/catch block for safety.
            try {
                // eslint-disable-next-line no-eval
                eval(code);
            } catch (e) {
                console.log("Runtime Error:", e.message);
            }

            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // ALL ARRAY METHODS
    const arrayMethods = [
        {
            category: "Transformation",
            methods: [
                {
                    name: "map()",
                    icon: <Layers className="w-4 h-4 text-blue-500" />,
                    description: "Creates a new array by applying a function to each element",
                    syntax: "array.map(callback(element, index, array))",
                    example: "const doubled = [1,2,3].map(x => x * 2); // [2,4,6]",
                    useCase: "When you need to transform each element in an array"
                },
                {
                    name: "filter()",
                    icon: <Filter className="w-4 h-4 text-green-500" />,
                    description: "Creates new array with elements that pass a test",
                    syntax: "array.filter(callback(element, index, array))",
                    example: "const evens = [1,2,3,4].filter(x => x % 2 === 0); // [2,4]",
                    useCase: "When you need to select elements based on a condition"
                },
                {
                    name: "reduce()",
                    icon: <BarChart className="w-4 h-4 text-purple-500" />,
                    description: "Executes a reducer function to produce a single value",
                    syntax: "array.reduce(callback(acc, cur), initialValue)",
                    example: "const sum = [1,2,3].reduce((acc, x) => acc + x, 0); // 6",
                    useCase: "When you need to accumulate values (sum, average, etc.)"
                },
                {
                    name: "flat()",
                    icon: <Merge className="w-4 h-4 text-orange-500" />,
                    description: "Flattens nested arrays to specified depth",
                    syntax: "array.flat(depth)",
                    example: "[1,[2,[3]]].flat(2); // [1,2,3]",
                    useCase: "When working with nested arrays"
                },
                {
                    name: "flatMap()",
                    icon: <Split className="w-4 h-4 text-pink-500" />,
                    description: "Maps then flattens the result by one level",
                    syntax: "array.flatMap(callback)",
                    example: "['hi', 'yo'].flatMap(x => x.split('')); // ['h','i','y','o']",
                    useCase: "When map produces arrays that need flattening"
                }
            ]
        },
        {
            category: "Searching & Finding",
            methods: [
                {
                    name: "find()",
                    icon: <Search className="w-4 h-4 text-red-500" />,
                    description: "Returns first element that satisfies condition",
                    syntax: "array.find(callback)",
                    example: "const user = users.find(u => u.id === 123);",
                    useCase: "When you need to find a specific element"
                },
                {
                    name: "findIndex()",
                    icon: <Search className="w-4 h-4 text-red-400" />,
                    description: "Returns index of first element that satisfies condition",
                    syntax: "array.findIndex(callback)",
                    example: "const index = users.findIndex(u => u.age > 18);",
                    useCase: "When you need the index of a specific element"
                },
                {
                    name: "includes()",
                    icon: <Plus className="w-4 h-4 text-green-600" />,
                    description: "Checks if array contains a value",
                    syntax: "array.includes(value)",
                    example: "['a','b','c'].includes('b'); // true",
                    useCase: "When checking for existence of a value"
                },
                {
                    name: "indexOf()",
                    icon: <Hash className="w-4 h-4 text-blue-600" />,
                    description: "Returns first index at which value is found",
                    syntax: "array.indexOf(value)",
                    example: "['a','b','c'].indexOf('b'); // 1",
                    useCase: "When you need the position of a value"
                }
            ]
        },
        {
            category: "Iteration & Testing",
            methods: [
                {
                    name: "forEach()",
                    icon: <CheckSquare className="w-4 h-4 text-yellow-500" />,
                    description: "Executes function for each element (no return)",
                    syntax: "array.forEach(callback)",
                    example: "[1,2,3].forEach(x => console.log(x));",
                    useCase: "When you need to perform side effects"
                },
                {
                    name: "every()",
                    icon: <CheckSquare className="w-4 h-4 text-green-700" />,
                    description: "Tests if all elements pass condition",
                    syntax: "array.every(callback)",
                    example: "[1,2,3].every(x => x > 0); // true",
                    useCase: "When validating all elements"
                }
            ]
        },
        {
            category: "Adding & Removing",
            methods: [
                {
                    name: "push()",
                    icon: <Plus className="w-4 h-4 text-green-500" />,
                    description: "Adds elements to end, returns new length",
                    syntax: "array.push(element1, ...)",
                    example: "arr.push(4); // adds 4 to end",
                    useCase: "When adding to end of array"
                },
                {
                    name: "pop()",
                    icon: <Minus className="w-4 h-4 text-red-500" />,
                    description: "Removes last element, returns that element",
                    syntax: "array.pop()",
                    example: "arr.pop(); // removes last element",
                    useCase: "When removing from end (stack behavior)"
                },
                {
                    name: "unshift()",
                    icon: <ArrowUpDown className="w-4 h-4 text-blue-500" />,
                    description: "Adds elements to beginning",
                    syntax: "array.unshift(element1, ...)",
                    example: "arr.unshift(0); // adds 0 to start",
                    useCase: "When adding to beginning"
                },
                {
                    name: "shift()",
                    icon: <ArrowUpDown className="w-4 h-4 text-blue-400" />,
                    description: "Removes first element",
                    syntax: "array.shift()",
                    example: "arr.shift(); // removes first element",
                    useCase: "When removing from beginning (queue behavior)"
                },
                {
                    name: "splice()",
                    icon: <Trash2 className="w-4 h-4 text-red-600" />,
                    description: "Adds/removes elements at any position",
                    syntax: "array.splice(start, deleteCount, item1, ...)",
                    example: "arr.splice(2, 1, 'new'); // replaces element at index 2",
                    useCase: "When modifying array at specific position"
                },
                {
                    name: "slice()",
                    icon: <Split className="w-4 h-4 text-purple-400" />,
                    description: "Returns shallow copy of portion of array",
                    syntax: "array.slice(start, end)",
                    example: "arr.slice(1, 3); // elements 1-2",
                    useCase: "When you need a subset without modifying original"
                }
            ]
        },
        {
            category: "Sorting & Reordering",
            methods: [
                {
                    name: "sort()",
                    icon: <SortAsc className="w-4 h-4 text-pink-500" />,
                    description: "Sorts elements in place",
                    syntax: "array.sort(compareFunction)",
                    example: "[3,1,2].sort((a,b) => a - b); // [1,2,3]",
                    useCase: "When ordering elements"
                },
                {
                    name: "reverse()",
                    icon: <RefreshCw className="w-4 h-4 text-orange-500" />,
                    description: "Reverses array in place",
                    syntax: "array.reverse()",
                    example: "[1,2,3].reverse(); // [3,2,1]",
                    useCase: "When reversing order"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Complete Array Transformation",
            description: "Use all transformation methods on a dataset",
            starterCode: `const products = [
  { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
  { name: 'Book', price: 20, category: 'books', inStock: true },
  { name: 'Phone', price: 500, category: 'electronics', inStock: false },
  { name: 'Tablet', price: 300, category: 'electronics', inStock: true }
];

// 1. Get all electronic products
// 2. Get just the names of in-stock products
// 3. Calculate total value of in-stock inventory
// 4. Create array of prices with 10% discount`,
            solution: `const products = [
  { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
  { name: 'Book', price: 20, category: 'books', inStock: true },
  { name: 'Phone', price: 500, category: 'electronics', inStock: false },
  { name: 'Tablet', price: 300, category: 'electronics', inStock: true }
];

// 1. Filter electronics
const electronics = products.filter(p => p.category === 'electronics');
console.log('Electronics:', electronics);

// 2. Map names of in-stock
const inStockNames = products
  .filter(p => p.inStock)
  .map(p => p.name);
console.log('In-stock names:', inStockNames);

// 3. Reduce total value
const totalValue = products
  .filter(p => p.inStock)
  .reduce((total, p) => total + p.price, 0);
console.log('Total inventory value:', totalValue);

// 4. Map with discount
const discountedPrices = products.map(p => ({
  name: p.name,
  discountedPrice: p.price * 0.9
}));
console.log('Discounted prices:', discountedPrices);`,
            hint: "Chain filter() before map()/reduce() for better performance"
        },
        {
            title: "Array Search & Manipulation",
            description: "Practice searching and modifying arrays",
            starterCode: `const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'Diana', age: 28, active: true }
];

// 1. Find user with id 3
// 2. Check if any user is under 18
// 3. Get all active users
// 4. Remove user with id 2
// 5. Add new user at position 2`,
            solution: `// Solution provided in app logic`,
            hint: "Use findIndex() with splice() for removing by condition"
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Practice Area\nconsole.log("Start coding!");`);
        setOutput('');
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson7" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 1: Fundamentals</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 7: Complete Array Mastery</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Array Fundamentals & Methods
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master every array method with detailed examples, practical exercises, and real-world scenarios.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <CheckSquare className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'all-methods', 'exercises', 'practice-lab'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-medium capitalize whitespace-nowrap transition-colors relative ${activeTab === tab
                                            ? 'text-yellow-600 dark:text-yellow-400'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                        }`}
                                >
                                    {tab.replace('-', ' ')}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content: Content */}
                    {activeTab === 'content' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            {/* Left Column: Theory */}
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <BookOpen className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Arrays: The Complete Picture
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Arrays are ordered, indexed collections that can store any data type. They act as lists and provide over 30 built-in methods for manipulation.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <RotateCcw className="w-4 h-4" /> Mutable
                                            </h3>
                                            <p className="text-xs text-blue-600/80 dark:text-blue-400/80 mb-2">Changes the original array</p>
                                            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                                                <li>push() / pop()</li>
                                                <li>shift() / unshift()</li>
                                                <li>splice()</li>
                                                <li>reverse() / sort()</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Copy className="w-4 h-4" /> Immutable
                                            </h3>
                                            <p className="text-xs text-green-600/80 dark:text-green-400/80 mb-2">Returns a new array</p>
                                            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300 font-mono">
                                                <li>map() / filter()</li>
                                                <li>slice()</li>
                                                <li>concat()</li>
                                                <li>flat() / flatMap()</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                        Quick Category Reference
                                    </h2>
                                    <div className="space-y-4">
                                        {arrayMethods.map((category, idx) => (
                                            <div key={idx} className="group">
                                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                                                    {category.category}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.methods.map((method, mIdx) => (
                                                        <button
                                                            key={mIdx}
                                                            onClick={() => {
                                                                setActiveTab('all-methods');
                                                                // Simple logic to set approx index (refined logic would be needed for exact mapping)
                                                                setCurrentMethod(idx * 5 + mIdx);
                                                            }}
                                                            className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
                                                        >
                                                            {method.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Sticky Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">interactive-demo.js</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={copyCode} className="p-1.5 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors">
                                                <Copy className="w-4 h-4" />
                                            </button>
                                            <button onClick={resetCode} className="p-1.5 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors">
                                                <RotateCcw className="w-4 h-4" />
                                            </button>
                                            <button onClick={runCode} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-semibold transition-colors">
                                                <Play className="w-3 h-3" /> Run
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-0">
                                        <pre className="text-slate-300 font-mono text-sm p-4 overflow-x-auto max-h-[400px] custom-scrollbar">
                                            <code>{code}</code>
                                        </pre>
                                    </div>

                                    {output && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Console Output</span>
                                                <button onClick={() => setOutput('')} className="text-xs text-slate-500 hover:text-slate-300">Clear</button>
                                            </div>
                                            <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">{output}</pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: All Methods (Detailed View) */}
                    {activeTab === 'all-methods' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Method Explorer
                                    </h2>
                                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                        <button
                                            onClick={() => setCurrentMethod(prev => Math.max(0, prev - 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 font-mono text-sm font-medium">
                                            {currentMethod + 1} / {arrayMethods.flatMap(c => c.methods).length}
                                        </span>
                                        <button
                                            onClick={() => setCurrentMethod(prev => Math.min(arrayMethods.flatMap(c => c.methods).length - 1, prev + 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {(() => {
                                    const allMethods = arrayMethods.flatMap(c => c.methods);
                                    const method = allMethods[currentMethod] || allMethods[0];
                                    const category = arrayMethods.find(c => c.methods.includes(method));

                                    return (
                                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                                    {method.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{method.name}</h3>
                                                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                        {category.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Description</h4>
                                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{method.description}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Common Use Case</h4>
                                                        <p className="text-slate-700 dark:text-slate-300 italic">"{method.useCase}"</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Syntax</h4>
                                                        <div className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
                                                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">{method.syntax}</code>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Example</h4>
                                                        <div className="bg-slate-900 rounded-lg p-4 relative group">
                                                            <code className="text-sm font-mono text-blue-300">{method.example}</code>
                                                            <button
                                                                onClick={() => {
                                                                    setCode(`${method.example}\n\n// Modify the code above to experiment!`);
                                                                    setActiveTab('practice-lab');
                                                                }}
                                                                className="absolute top-2 right-2 px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors opacity-0 group-hover:opacity-100"
                                                            >
                                                                Try It
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Exercises */}
                    {activeTab === 'exercises' && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                                <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                Exercise {currentExercise + 1}
                                            </h2>
                                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">
                                                {exercises[currentExercise].title}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-mono font-medium">
                                            {currentExercise + 1} / {exercises.length}
                                        </span>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                        {exercises[currentExercise].description}
                                    </p>
                                </div>

                                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-slate-500">Starter Code</span>
                                            <button
                                                onClick={() => setCode(exercises[currentExercise].starterCode)}
                                                className="text-xs text-blue-600 hover:underline"
                                            >
                                                Load into Editor
                                            </button>
                                        </div>
                                        <div className="bg-slate-900 rounded-xl p-4">
                                            <pre className="text-xs text-slate-300 font-mono overflow-x-auto">
                                                {exercises[currentExercise].starterCode}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 p-4 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2 text-yellow-700 dark:text-yellow-500">
                                                <Lightbulb className="w-4 h-4" />
                                                <span className="font-bold text-sm">Hint</span>
                                            </div>
                                            <p className="text-sm text-yellow-800 dark:text-yellow-200/80">
                                                {exercises[currentExercise].hint}
                                            </p>
                                        </div>

                                        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-4 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-500">
                                                <Brain className="w-4 h-4" />
                                                <span className="font-bold text-sm">Solution</span>
                                            </div>
                                            <button
                                                onClick={() => alert(exercises[currentExercise].solution)}
                                                className="text-sm text-emerald-600 hover:text-emerald-700 underline"
                                            >
                                                Show Solution
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-between">
                                    <button
                                        onClick={() => setCurrentExercise(prev => Math.max(0, prev - 1))}
                                        disabled={currentExercise === 0}
                                        className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setCurrentExercise(prev => Math.min(exercises.length - 1, prev + 1))}
                                        disabled={currentExercise === exercises.length - 1}
                                        className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                                    >
                                        Next Exercise
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Practice Lab */}
                    {activeTab === 'practice-lab' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 space-y-4">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCode(`// Beginner Practice\nconst numbers = [1, 2, 3, 4, 5];\n\n// TODO: Double them, filter evens, sum total`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Beginner</div>
                                            <div className="text-xs text-slate-500">Basic operations & math</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Intermediate: Objects\nconst users = [\n  { id: 1, name: 'Alice', active: true },\n  { id: 2, name: 'Bob', active: false }\n];\n\n// TODO: Get active user names`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Intermediate</div>
                                            <div className="text-xs text-slate-500">Arrays of Objects</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Advanced Chaining\nconst data = [10, 20, 30, 40];\n\n// TODO: Chain map, filter, and reduce`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Advanced</div>
                                            <div className="text-xs text-slate-500">Method Chaining</div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">playground.js</span>
                                        <div className="flex gap-2">
                                            <button onClick={resetCode} className="text-xs text-slate-400 hover:text-white px-2 py-1">Reset</button>
                                            <button onClick={runCode} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-semibold transition-colors">
                                                <Play className="w-3 h-3" /> Run
                                            </button>
                                        </div>
                                    </div>
                                    <textarea
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="flex-1 w-full bg-slate-950 text-slate-300 font-mono text-sm p-4 focus:outline-none min-h-[300px]"
                                        spellCheck="false"
                                    />
                                    {output && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">{output}</pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson6" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Scope & Hoisting</span>
                        </a>
                        <a href="/lesson8" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Objects & Prototypes</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}