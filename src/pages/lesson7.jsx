import React, { useState } from 'react';
import {
    CheckSquare, Code, Play, Terminal, Lightbulb,
    AlertTriangle, ChevronRight, Copy, RotateCcw,
    Hash, Grid, List, Filter, Zap, X, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Split, Merge, BookOpen, Brain, Timer
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

            const safeEval = `
                // Creating Arrays
                const fruits = ['apple', 'banana', 'orange'];
                const numbers = [1, 2, 3, 4, 5];
                
                console.log('=== ARRAY BASICS ===');
                console.log('Fruits array:', fruits);
                console.log('First fruit:', fruits[0]);
                console.log('Array length:', fruits.length);
                
                // Transformation Methods
                console.log('\\n=== TRANSFORMATION ===');
                const doubled = numbers.map(num => num * 2);
                console.log('Map (doubled):', doubled);
                
                const evens = numbers.filter(num => num % 2 === 0);
                console.log('Filter (evens):', evens);
                
                const sum = numbers.reduce((total, num) => total + num, 0);
                console.log('Reduce (sum):', sum);
                
                // Searching
                console.log('\\n=== SEARCHING ===');
                const found = fruits.find(fruit => fruit.startsWith('b'));
                console.log('Find (starts with b):', found);
                
                const hasApple = fruits.includes('apple');
                console.log('Includes apple?', hasApple);
                
                const bananaIndex = fruits.indexOf('banana');
                console.log('Index of banana:', bananaIndex);
                
                // Iteration
                console.log('\\n=== ITERATION ===');
                console.log('ForEach output:');
                numbers.forEach(num => console.log('  Number:', num));
                
                // Every/Some
                const allPositive = numbers.every(num => num > 0);
                console.log('Every (positive)?', allPositive);
                
                const hasEven = numbers.some(num => num % 2 === 0);
                console.log('Some (even)?', hasEven);
            `;

            eval(safeEval);
            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // ALL ARRAY METHODS with detailed explanations
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
                    syntax: "array.reduce(callback(accumulator, element, index, array), initialValue)",
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
                    syntax: "array.flatMap(callback(element, index, array))",
                    example: "['hello', 'world'].flatMap(x => x.split('')); // ['h','e','l','l','o','w','o','r','l','d']",
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
                    syntax: "array.find(callback(element, index, array))",
                    example: "const user = users.find(u => u.id === 123);",
                    useCase: "When you need to find a specific element"
                },
                {
                    name: "findIndex()",
                    icon: <Search className="w-4 h-4 text-red-400" />,
                    description: "Returns index of first element that satisfies condition",
                    syntax: "array.findIndex(callback(element, index, array))",
                    example: "const index = users.findIndex(u => u.age > 18);",
                    useCase: "When you need the index of a specific element"
                },
                {
                    name: "includes()",
                    icon: <Plus className="w-4 h-4 text-green-600" />,
                    description: "Checks if array contains a value",
                    syntax: "array.includes(value, fromIndex)",
                    example: "['a','b','c'].includes('b'); // true",
                    useCase: "When checking for existence of a value"
                },
                {
                    name: "indexOf()",
                    icon: <Hash className="w-4 h-4 text-blue-600" />,
                    description: "Returns first index at which value is found",
                    syntax: "array.indexOf(value, fromIndex)",
                    example: "['a','b','c'].indexOf('b'); // 1",
                    useCase: "When you need the position of a value"
                },
                {
                    name: "lastIndexOf()",
                    icon: <Hash className="w-4 h-4 text-blue-700" />,
                    description: "Returns last index at which value is found",
                    syntax: "array.lastIndexOf(value, fromIndex)",
                    example: "['a','b','c','b'].lastIndexOf('b'); // 3",
                    useCase: "When searching from the end"
                }
            ]
        },
        {
            category: "Iteration & Testing",
            methods: [
                {
                    name: "forEach()",
                    icon: <List className="w-4 h-4 text-yellow-500" />,
                    description: "Executes function for each element (no return)",
                    syntax: "array.forEach(callback(element, index, array))",
                    example: "[1,2,3].forEach(x => console.log(x));",
                    useCase: "When you need to perform side effects"
                },
                {
                    name: "every()",
                    icon: <CheckSquare className="w-4 h-4 text-green-700" />,
                    description: "Tests if all elements pass condition",
                    syntax: "array.every(callback(element, index, array))",
                    example: "[1,2,3].every(x => x > 0); // true",
                    useCase: "When validating all elements"
                },
                {
                    name: "some()",
                    icon: <AlertTriangle className="w-4 h-4 text-orange-600" />,
                    description: "Tests if at least one element passes condition",
                    syntax: "array.some(callback(element, index, array))",
                    example: "[1,2,3].some(x => x > 2); // true",
                    useCase: "When checking if any element satisfies condition"
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
                    syntax: "array.push(element1, element2, ...)",
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
                    description: "Adds elements to beginning, returns new length",
                    syntax: "array.unshift(element1, element2, ...)",
                    example: "arr.unshift(0); // adds 0 to start",
                    useCase: "When adding to beginning"
                },
                {
                    name: "shift()",
                    icon: <ArrowUpDown className="w-4 h-4 text-blue-400" />,
                    description: "Removes first element, returns that element",
                    syntax: "array.shift()",
                    example: "arr.shift(); // removes first element",
                    useCase: "When removing from beginning (queue behavior)"
                },
                {
                    name: "splice()",
                    icon: <Trash2 className="w-4 h-4 text-red-600" />,
                    description: "Adds/removes elements at any position",
                    syntax: "array.splice(start, deleteCount, item1, item2, ...)",
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
                    description: "Sorts elements in place (modifies original)",
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
            solution: `const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'Diana', age: 28, active: true }
];

// 1. Find
const user3 = users.find(u => u.id === 3);
console.log('User with id 3:', user3);

// 2. Some
const hasUnder18 = users.some(u => u.age < 18);
console.log('Has under 18?', hasUnder18);

// 3. Filter
const activeUsers = users.filter(u => u.active);
console.log('Active users:', activeUsers);

// 4. Find index + splice
const bobIndex = users.findIndex(u => u.id === 2);
users.splice(bobIndex, 1);
console.log('After removing Bob:', users);

// 5. Splice to add
users.splice(2, 0, { id: 5, name: 'Eve', age: 22, active: true });
console.log('After adding Eve:', users);`,
            hint: "Use findIndex() with splice() for removing by condition"
        },
        {
            title: "Advanced Array Operations",
            description: "Combine multiple methods for complex operations",
            starterCode: `const orders = [
  { id: 1, items: ['apple', 'banana'], total: 5 },
  { id: 2, items: ['orange', 'grape', 'apple'], total: 8 },
  { id: 3, items: ['banana'], total: 2 },
  { id: 4, items: ['apple', 'orange'], total: 6 }
];

// 1. Get all unique items purchased
// 2. Get total revenue from all orders
// 3. Find order with highest total
// 4. Get array of just item lists, flattened
// 5. Sort orders by total descending`,
            solution: `const orders = [
  { id: 1, items: ['apple', 'banana'], total: 5 },
  { id: 2, items: ['orange', 'grape', 'apple'], total: 8 },
  { id: 3, items: ['banana'], total: 2 },
  { id: 4, items: ['apple', 'orange'], total: 6 }
];

// 1. FlatMap + Set for unique
const allItems = orders.flatMap(order => order.items);
const uniqueItems = [...new Set(allItems)];
console.log('Unique items:', uniqueItems);

// 2. Reduce for total
const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
console.log('Total revenue:', totalRevenue);

// 3. Reduce for max
const highestOrder = orders.reduce((max, order) => 
  order.total > max.total ? order : max
);
console.log('Highest order:', highestOrder);

// 4. Map for items
const itemLists = orders.map(order => order.items);
console.log('Item lists:', itemLists);

// 5. Sort
const sortedOrders = [...orders].sort((a, b) => b.total - a.total);
console.log('Sorted orders:', sortedOrders);`,
            hint: "Use [...new Set(array)] to get unique values. Use [...array] to copy before sort()"
        }
    ];

    const challenges = [
        {
            title: "Array Master Challenge",
            difficulty: "Advanced",
            description: "Implement common utility functions from scratch",
            tasks: [
                "Write your own map() function",
                "Write your own filter() function",
                "Write your own reduce() function",
                "Implement array deduplication",
                "Flatten nested arrays recursively"
            ]
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// === ARRAY FUNDAMENTALS ===
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
        setOutput('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
            <LessonSidebar currentLesson="lesson7" />

            <main className="lg:ml-80 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <span>Module 1: Fundamentals</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-yellow-600 dark:text-yellow-400">Lesson 7: Complete Array Mastery</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
                                    Arrays: Complete Guide with ALL Methods
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-300">
                                    Master every array method with detailed examples, practical exercises, and real-world scenarios.
                                </p>
                            </div>

                            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                                <CheckSquare className="w-5 h-5" />
                                Mark Complete
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
                        {['content', 'all-methods', 'exercises', 'practice-lab'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium capitalize whitespace-nowrap ${activeTab === tab
                                    ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                {tab.replace('-', ' ')}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'content' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Content Column */}
                            <div className="space-y-8">
                                {/* What are Arrays */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <BookOpen className="w-6 h-6 text-yellow-500" />
                                        Arrays: The Complete Picture
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Arrays are JavaScript's workhorse data structure. They're ordered, indexed collections that can store any data type and provide over 30 methods for manipulation.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Mutable Methods</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• push() / pop()</li>
                                                <li>• shift() / unshift()</li>
                                                <li>• splice()</li>
                                                <li>• reverse() / sort()</li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">Immutable Methods</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• map() / filter()</li>
                                                <li>• slice()</li>
                                                <li>• concat()</li>
                                                <li>• flat() / flatMap()</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Method Categories */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                        Array Method Categories
                                    </h2>

                                    <div className="space-y-4">
                                        {arrayMethods.map((category, idx) => (
                                            <div key={idx} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                                                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">
                                                    {category.category} ({category.methods.length} methods)
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.methods.map((method, mIdx) => (
                                                        <span
                                                            key={mIdx}
                                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
                                                            onClick={() => {
                                                                setActiveTab('all-methods');
                                                                setCurrentMethod(idx * 10 + mIdx);
                                                            }}
                                                        >
                                                            {method.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Code Column */}
                            <div className="space-y-8">
                                {/* Interactive Editor */}
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="flex justify-between items-center bg-slate-800 px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Terminal className="w-5 h-5 text-green-400" />
                                            <span className="font-mono text-slate-300">array-practice.js</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={copyCode}
                                                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                                title="Copy code"
                                            >
                                                <Copy className="w-4 h-4 text-slate-400" />
                                            </button>
                                            <button
                                                onClick={resetCode}
                                                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                                title="Reset code"
                                            >
                                                <RotateCcw className="w-4 h-4 text-slate-400" />
                                            </button>
                                            <button
                                                onClick={runCode}
                                                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-shadow"
                                            >
                                                <Play className="w-4 h-4" />
                                                Run Code
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <pre className="text-slate-100 font-mono text-sm overflow-x-auto">
                                            <code>{code}</code>
                                        </pre>
                                    </div>

                                    {output && (
                                        <div className="border-t border-slate-800">
                                            <div className="px-6 py-4 bg-slate-950">
                                                <h4 className="text-slate-400 font-medium mb-2">Output:</h4>
                                                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                                                    {output}
                                                </pre>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'all-methods' && (
                        <div className="space-y-8">
                            {/* Method Navigation */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                                        All Array Methods ({arrayMethods.flatMap(c => c.methods).length}+)
                                    </h2>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setCurrentMethod(prev => prev > 0 ? prev - 1 : arrayMethods.flatMap(c => c.methods).length - 1)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                            {currentMethod + 1} / {arrayMethods.flatMap(c => c.methods).length}
                                        </span>
                                        <button
                                            onClick={() => setCurrentMethod(prev => (prev + 1) % arrayMethods.flatMap(c => c.methods).length)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Method Categories */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {arrayMethods.map((category, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentMethod(idx * 10)}
                                            className={`px-4 py-2 rounded-lg ${currentMethod >= idx * 10 && currentMethod < (idx + 1) * 10
                                                ? 'bg-yellow-500 text-white'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                                }`}
                                        >
                                            {category.category}
                                        </button>
                                    ))}
                                </div>

                                {/* Current Method Detail */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                                    {(() => {
                                        const allMethods = arrayMethods.flatMap(c => c.methods);
                                        const method = allMethods[currentMethod];
                                        const category = arrayMethods.find(c => c.methods.includes(method));

                                        return (
                                            <>
                                                <div className="flex items-center gap-3 mb-4">
                                                    {method.icon}
                                                    <div>
                                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                                            {method.name}
                                                        </h3>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                                            {category.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Description</h4>
                                                        <p className="text-slate-600 dark:text-slate-400">
                                                            {method.description}
                                                        </p>

                                                        <h4 className="font-bold text-slate-700 dark:text-slate-300 mt-4 mb-2">Use Case</h4>
                                                        <p className="text-slate-600 dark:text-slate-400">
                                                            {method.useCase}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Syntax</h4>
                                                        <pre className="bg-slate-800 text-green-400 p-3 rounded-lg text-sm">
                                                            {method.syntax}
                                                        </pre>

                                                        <h4 className="font-bold text-slate-700 dark:text-slate-300 mt-4 mb-2">Example</h4>
                                                        <pre className="bg-slate-800 text-blue-400 p-3 rounded-lg text-sm">
                                                            {method.example}
                                                        </pre>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        setCode(`${method.example}\n// Try modifying this example!`);
                                                        setActiveTab('practice-lab');
                                                    }}
                                                    className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                                                >
                                                    Practice This Method
                                                </button>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'exercises' && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                                            Exercise {currentExercise + 1}: {exercises[currentExercise].title}
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {exercises[currentExercise].description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">
                                            {currentExercise + 1} of {exercises.length}
                                        </span>
                                        <button
                                            onClick={() => setCurrentExercise(prev => (prev + 1) % exercises.length)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                    {/* Starter Code */}
                                    <div className="bg-slate-900 rounded-xl p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Code className="w-5 h-5 text-green-400" />
                                            <h3 className="font-medium text-white">Your Task</h3>
                                        </div>
                                        <pre className="text-slate-200 font-mono text-sm">
                                            {exercises[currentExercise].starterCode}
                                        </pre>
                                        <button
                                            onClick={() => setCode(exercises[currentExercise].starterCode)}
                                            className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors"
                                        >
                                            Load into Editor
                                        </button>
                                    </div>

                                    {/* Hint & Solution */}
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Lightbulb className="w-5 h-5 text-blue-500" />
                                                <h3 className="font-medium text-slate-800 dark:text-white">Hint</h3>
                                            </div>
                                            <p className="text-slate-700 dark:text-slate-300">
                                                {exercises[currentExercise].hint}
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Brain className="w-5 h-5 text-green-500" />
                                                <h3 className="font-medium text-slate-800 dark:text-white">Solution</h3>
                                            </div>
                                            <button
                                                onClick={() => alert(`Full Solution:\n\n${exercises[currentExercise].solution}`)}
                                                className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors"
                                            >
                                                View Complete Solution
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setCurrentExercise(prev => prev > 0 ? prev - 1 : exercises.length - 1)}
                                        className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Previous Exercise
                                    </button>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setActiveTab('practice-lab')}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                                        >
                                            Try in Practice Lab
                                        </button>

                                        <button
                                            onClick={() => {
                                                alert('Great job! Moving to next exercise...');
                                                setCurrentExercise(prev => (prev + 1) % exercises.length);
                                            }}
                                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                                        >
                                            Complete Exercise
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'practice-lab' && (
                        <div className="space-y-8">
                            {/* Practice Lab Header */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Brain className="w-8 h-8 text-purple-400" />
                                    <h2 className="text-2xl font-bold text-white">Array Practice Lab</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                                    {/* Quick Practice Templates */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                                        <h3 className="text-lg font-bold text-white mb-3">Beginner Practice</h3>
                                        <p className="text-slate-400 mb-4 text-sm">
                                            Basic array operations and transformations
                                        </p>
                                        <button
                                            onClick={() => setCode(`// Practice basic array methods
const numbers = [1, 2, 3, 4, 5];

// TODO: Try these operations:
// 1. Double each number (map)
// 2. Filter even numbers
// 3. Calculate sum (reduce)
// 4. Add new numbers
// 5. Remove first number

console.log('Original:', numbers);`)}
                                            className="text-purple-400 hover:text-purple-300 text-sm"
                                        >
                                            Load Template →
                                        </button>
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                                        <h3 className="text-lg font-bold text-white mb-3">Intermediate Practice</h3>
                                        <p className="text-slate-400 mb-4 text-sm">
                                            Working with arrays of objects and complex data
                                        </p>
                                        <button
                                            onClick={() => setCode(`// Practice with objects
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true }
];

// TODO: Try these:
// 1. Get all active users
// 2. Get just the names
// 3. Find user by id
// 4. Calculate average age
// 5. Sort by age

console.log('Users:', users);`)}
                                            className="text-purple-400 hover:text-purple-300 text-sm"
                                        >
                                            Load Template →
                                        </button>
                                    </div>

                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                                        <h3 className="text-lg font-bold text-white mb-3">Advanced Practice</h3>
                                        <p className="text-slate-400 mb-4 text-sm">
                                            Method chaining and complex transformations
                                        </p>
                                        <button
                                            onClick={() => setCode(`// Advanced method chaining
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Book', price: 20, category: 'books' },
  { name: 'Phone', price: 500, category: 'electronics' }
];

// TODO: Create a single chain that:
// 1. Filters electronics
// 2. Applies 10% discount
// 3. Sorts by price descending
// 4. Gets only names and prices

console.log('Products:', products);`)}
                                            className="text-purple-400 hover:text-purple-300 text-sm"
                                        >
                                            Load Template →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Live Editor */}
                            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="flex justify-between items-center bg-slate-800 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Terminal className="w-5 h-5 text-yellow-400" />
                                        <span className="font-mono text-slate-300">practice-lab.js</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={copyCode}
                                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                        >
                                            <Copy className="w-4 h-4 text-slate-400" />
                                        </button>
                                        <button
                                            onClick={resetCode}
                                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                        >
                                            <RotateCcw className="w-4 h-4 text-slate-400" />
                                        </button>
                                        <button
                                            onClick={runCode}
                                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-shadow"
                                        >
                                            <Play className="w-4 h-4" />
                                            Run Code
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <textarea
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="w-full h-96 bg-slate-950 text-green-400 font-mono text-sm p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        spellCheck="false"
                                    />
                                </div>

                                {output && (
                                    <div className="border-t border-slate-800">
                                        <div className="px-6 py-4 bg-slate-950">
                                            <div className="flex justify-between items-center mb-2">
                                                <h4 className="text-slate-400 font-medium">Output:</h4>
                                                <button
                                                    onClick={() => setOutput('')}
                                                    className="text-xs text-slate-500 hover:text-slate-300"
                                                >
                                                    Clear
                                                </button>
                                            </div>
                                            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap max-h-64 overflow-y-auto">
                                                {output}
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <a
                            href="/lesson6"
                            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Previous: Scope & Hoisting
                        </a>

                        <div className="text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                Up Next: Objects & Prototypes
                            </p>
                            <a
                                href="/lesson8"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                            >
                                Continue Learning
                            </a>
                        </div>

                        <a
                            href="/lesson8"
                            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            Next: Objects & Prototypes
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}