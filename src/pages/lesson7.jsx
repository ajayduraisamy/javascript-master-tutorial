import React, { useState } from 'react';
import {
    CheckSquare, Code, Play, Terminal, Lightbulb,
    AlertTriangle, ChevronRight, Copy, RotateCcw,
    Hash, Grid, List, Filter, Zap, X, RefreshCw,
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson7() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// Arrays are ordered collections of items
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // 'apple'

// Arrays can hold mixed data types
const mixedArray = [1, 'hello', true, { name: 'John' }];

// Common array methods
const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(num => num * 2);

// filter() - select elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce() - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);

// forEach() - execute function for each element
numbers.forEach(num => console.log(num));`);

    const [output, setOutput] = useState('');
    const [currentExercise, setCurrentExercise] = useState(0);

    const runCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args);
            };

            // Safe eval for demonstration
            const safeEval = `
        const fruits = ['apple', 'banana', 'orange'];
        console.log('First fruit:', fruits[0]);
        
        const numbers = [1, 2, 3, 4, 5];
        console.log('Original array:', numbers);
        
        const doubled = numbers.map(num => num * 2);
        console.log('Doubled:', doubled);
        
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log('Even numbers:', evenNumbers);
        
        const sum = numbers.reduce((total, num) => total + num, 0);
        console.log('Sum:', sum);
        
        console.log('ForEach output:');
        numbers.forEach(num => console.log('Number:', num));
      `;

            eval(safeEval);
            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const exercises = [
        {
            title: "Create and Access Arrays",
            description: "Create an array of programming languages and access elements",
            starterCode: `const languages = []; // Add 3 programming languages\nconsole.log(languages[0]); // Should print first language\nconsole.log(languages.length); // Should print 3`,
            solution: `const languages = ['JavaScript', 'Python', 'Java'];
console.log(languages[0]); // 'JavaScript'
console.log(languages.length); // 3`,
            hint: "Arrays start counting from 0. The length property returns number of elements."
        },
        {
            title: "Array Methods Practice",
            description: "Use array methods to transform data",
            starterCode: `const numbers = [10, 20, 30, 40, 50];
// Use map to add 5 to each number
// Use filter to get numbers greater than 25
// Use reduce to calculate average`,
            solution: `const numbers = [10, 20, 30, 40, 50];
const plusFive = numbers.map(num => num + 5);
const greaterThan25 = numbers.filter(num => num > 25);
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log('Plus five:', plusFive);
console.log('Greater than 25:', greaterThan25);
console.log('Average:', average);`,
            hint: "Remember: map returns new array, filter returns subset, reduce returns single value"
        },
        {
            title: "Advanced Array Operations",
            description: "Combine multiple array methods",
            starterCode: `const products = [
  { name: 'Laptop', price: 1000, stock: 5 },
  { name: 'Phone', price: 500, stock: 10 },
  { name: 'Tablet', price: 300, stock: 8 }
];
// Get names of products with price > 400
// Calculate total value of inventory (price * stock)`,
            solution: `const products = [
  { name: 'Laptop', price: 1000, stock: 5 },
  { name: 'Phone', price: 500, stock: 10 },
  { name: 'Tablet', price: 300, stock: 8 }
];

const expensiveProducts = products
  .filter(p => p.price > 400)
  .map(p => p.name);

const totalValue = products
  .reduce((total, p) => total + (p.price * p.stock), 0);

console.log('Expensive products:', expensiveProducts);
console.log('Total inventory value:', totalValue);`,
            hint: "You can chain array methods. Filter first, then map for better performance."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Arrays are ordered collections of items
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // 'apple'

// Arrays can hold mixed data types
const mixedArray = [1, 'hello', true, { name: 'John' }];

// Common array methods
const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(num => num * 2);

// filter() - select elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce() - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);

// forEach() - execute function for each element
numbers.forEach(num => console.log(num));`);
        setOutput('');
    };

    const completeExercise = () => {
        alert('Exercise completed! Moving to next...');
        setCurrentExercise(prev => (prev + 1) % exercises.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
            <LessonSidebar currentLesson="lesson7" />

            <main className="lg:ml-80 p-6">
                {/* Header */}
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <span>Module 1: Fundamentals</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-yellow-600 dark:text-yellow-400">Lesson 7</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
                                    Arrays: Ordered Collections
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-300">
                                    Learn how to store and manipulate ordered data with JavaScript arrays and their powerful methods.
                                </p>
                            </div>

                            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow">
                                <CheckSquare className="w-5 h-5" />
                                Mark Complete
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8">
                        {['content', 'exercises', 'challenges'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium capitalize ${activeTab === tab
                                    ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                {tab}
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
                                        <List className="w-6 h-6 text-yellow-500" />
                                        What are Arrays?
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        Arrays are ordered, indexed collections of values. They can store any data type and are one of the most important data structures in JavaScript.
                                    </p>

                                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                        <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Key Characteristics:</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <Hash className="w-4 h-4 text-green-500" />
                                                <span>Zero-based indexing (first element is at index 0)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Grid className="w-4 h-4 text-blue-500" />
                                                <span>Dynamic size (can grow/shrink automatically)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Filter className="w-4 h-4 text-purple-500" />
                                                <span>Can contain mixed data types</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Common Methods */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                        Essential Array Methods
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300">map()</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Creates a new array by applying a function to each element.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                                            <h3 className="font-bold text-green-700 dark:text-green-300">filter()</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Returns new array with elements that pass a test.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                                            <h3 className="font-bold text-purple-700 dark:text-purple-300">reduce()</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Executes a reducer function to produce a single value.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tips */}
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        <h3 className="font-bold text-slate-800 dark:text-white">Pro Tips</h3>
                                    </div>
                                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                                        <li>• Use <code>Array.isArray()</code> to check if something is an array</li>
                                        <li>• <code>forEach()</code> doesn't return anything - use <code>map()</code> when you need a result</li>
                                        <li>• Spread syntax <code>[...arr]</code> creates shallow copies</li>
                                        <li>• Method chaining: <code>arr.filter().map().slice()</code></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Code Column */}
                            <div className="space-y-8">
                                {/* Code Editor */}
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="flex justify-between items-center bg-slate-800 px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Terminal className="w-5 h-5 text-green-400" />
                                            <span className="font-mono text-slate-300">arrays.js</span>
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

                                {/* Live Examples */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                        Quick Examples
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Create array:</p>
                                            <code className="text-green-600 dark:text-green-400 text-sm">const colors = ['red', 'green', 'blue'];</code>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Add/remove elements:</p>
                                            <code className="text-blue-600 dark:text-blue-400 text-sm">colors.push('yellow'); // Add to end</code><br />
                                            <code className="text-blue-600 dark:text-blue-400 text-sm">colors.pop(); // Remove from end</code>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Find element:</p>
                                            <code className="text-purple-600 dark:text-purple-400 text-sm">
                                                {"const found = colors.find(color => color === 'green');"}
                                            </code>

                                        </div>
                                    </div>
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

                                    {/* Hint */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <AlertTriangle className="w-5 h-5 text-blue-500" />
                                            <h3 className="font-medium text-slate-800 dark:text-white">Hint</h3>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300">
                                            {exercises[currentExercise].hint}
                                        </p>
                                        <button
                                            onClick={() => alert(`Solution:\n${exercises[currentExercise].solution}`)}
                                            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                                        >
                                            Show Solution
                                        </button>
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
                                            onClick={() => setActiveTab('content')}
                                            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            Review Lesson
                                        </button>

                                        <button
                                            onClick={completeExercise}
                                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                                        >
                                            Complete Exercise
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'challenges' && (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Brain className="w-8 h-8 text-yellow-400" />
                                    <h2 className="text-2xl font-bold text-white">Array Challenges</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {/* Challenge 1 */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Timer className="w-5 h-5 text-green-400" />
                                            <span className="text-sm font-medium text-slate-300">Beginner</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">Array Reversal</h3>
                                        <p className="text-slate-400 mb-4">
                                            Write a function that reverses an array without using the built-in <code>reverse()</code> method.
                                        </p>
                                        <button
                                            onClick={() => alert('Hint: Try using a for loop starting from the end!')}
                                            className="text-yellow-400 hover:text-yellow-300 text-sm"
                                        >
                                            Take Challenge →
                                        </button>
                                    </div>

                                    {/* Challenge 2 */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Timer className="w-5 h-5 text-orange-400" />
                                            <span className="text-sm font-medium text-slate-300">Intermediate</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">Duplicate Finder</h3>
                                        <p className="text-slate-400 mb-4">
                                            Find all duplicate values in an array and return them in a new array.
                                        </p>
                                        <button
                                            onClick={() => alert('Hint: Use an object to track occurrences!')}
                                            className="text-yellow-400 hover:text-yellow-300 text-sm"
                                        >
                                            Take Challenge →
                                        </button>
                                    </div>

                                    {/* Challenge 3 */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 md:col-span-2">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Timer className="w-5 h-5 text-red-400" />
                                            <span className="text-sm font-medium text-slate-300">Advanced</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">Array Flattening</h3>
                                        <p className="text-slate-400 mb-4">
                                            Write a function that flattens a nested array of any depth. Input: <code>[1, [2, [3, [4]], 5]]</code> Output: <code>[1, 2, 3, 4, 5]</code>
                                        </p>
                                        <button
                                            onClick={() => alert('Hint: Recursion might help with this one!')}
                                            className="text-yellow-400 hover:text-yellow-300 text-sm"
                                        >
                                            Take Challenge →
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                                        Submit All Challenges
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between">
        
                        <a className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2" href="/lesson6">
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </a>
                    
                        <button className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                            Previous: Scope & Hoisting
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                Up Next: Objects & Prototypes
                            </p>
                            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
                                Continue Learning
                            </button>
                        </div>

                        <button className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            Next: Objects & Prototypes
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}