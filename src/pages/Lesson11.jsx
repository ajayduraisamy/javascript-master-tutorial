import React, { useState } from 'react';
import {
    Filter, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw, ArrowUpDown,
    Hash, Search, RefreshCw, ChevronLeft,
    Layers, BarChart, Split, Merge, BookOpen, Brain,
    Box, Zap, Cpu, FunctionSquare, GitBranch,
    Workflow, Palette, Target, Puzzle, Map,
    ArrowRightLeft, IterationCw, Sigma, BrainCircuit,
    Sparkles, Infinity, Crown
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson11() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === HIGHER-ORDER FUNCTIONS FUNDAMENTALS ===
// 1. Functions as First-Class Citizens
const greet = function(name) {
    return \`Hello, \${name}!\`;
};

// 2. Passing functions as arguments
function executeTwice(func, value) {
    return func(func(value));
}

const double = x => x * 2;
console.log('Execute twice:', executeTwice(double, 5)); // 20

// 3. Returning functions from functions
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = createMultiplier(3);
console.log('Triple 7:', triple(7)); // 21

// === COMMON HIGHER-ORDER FUNCTIONS ===
// 4. Array HOFs (Review from arrays lesson)
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2);
console.log('Map - doubled:', doubled);

const evens = numbers.filter(x => x % 2 === 0);
console.log('Filter - evens:', evens);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Reduce - sum:', sum);

// 5. Custom Higher-Order Functions
function compose(func1, func2) {
    return function(value) {
        return func1(func2(value));
    };
}

const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;
const addThenMultiply = compose(multiplyBy2, add5);
console.log('Compose:', addThenMultiply(10)); // 30

// 6. Function Decorators
function withLogging(func) {
    return function(...args) {
        console.log(\`Calling \${func.name} with args:\`, args);
        const result = func(...args);
        console.log(\`Result:\`, result);
        return result;
    };
}

const loggedAdd = withLogging((a, b) => a + b);
console.log('Logged add:', loggedAdd(3, 4));

// 7. Currying
function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log('Curried multiply:', curriedMultiply(2)(3)(4)); // 24
console.log('Partial application:', curriedMultiply(2, 3)(4)); // 24

// 8. Memoization
function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Returning cached result');
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

const memoizedFactorial = memoize(function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});

console.log('Memoized factorial(5):', memoizedFactorial(5));
console.log('Memoized factorial(5) again (cached):', memoizedFactorial(5));`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);

    const runCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args);
            };

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

    // HOF CONCEPTS
    const concepts = [
        {
            category: "Core Concepts",
            concepts: [
                {
                    name: "First-Class Functions",
                    icon: <FunctionSquare className="w-4 h-4 text-blue-500" />,
                    description: "Functions can be assigned to variables, passed as arguments, and returned from other functions",
                    syntax: "const func = function() {}; func();",
                    example: "const greet = name => `Hello ${name}`;",
                    useCase: "When you need to treat functions like any other value"
                },
                {
                    name: "Function Composition",
                    icon: <GitBranch className="w-4 h-4 text-purple-500" />,
                    description: "Combining multiple functions to create new functions",
                    syntax: "const composed = f(g(x));",
                    example: "const addThenDouble = compose(double, add);",
                    useCase: "Building complex operations from simple functions"
                },
                {
                    name: "Partial Application",
                    icon: <Puzzle className="w-4 h-4 text-green-500" />,
                    description: "Fixing some arguments of a function, producing another function with smaller arity",
                    syntax: "const partial = func.bind(null, arg1, arg2);",
                    example: "const add5 = add.bind(null, 5); add5(3); // 8",
                    useCase: "Creating specialized functions from general ones"
                },
                {
                    name: "Currying",
                    icon: <ArrowRightLeft className="w-4 h-4 text-red-500" />,
                    description: "Transforming a function with multiple arguments into a sequence of functions with single arguments",
                    syntax: "f(a, b, c) → f(a)(b)(c)",
                    example: "const curriedAdd = a => b => a + b;",
                    useCase: "When you need to create specialized functions step by step"
                }
            ]
        },
        {
            category: "Common HOF Patterns",
            concepts: [
                {
                    name: "Function Decorators",
                    icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
                    description: "Wrap a function to extend its behavior without modifying it",
                    syntax: "const decorated = decorator(original);",
                    example: "const logged = withLogging(func);",
                    useCase: "Adding logging, timing, caching, or validation to functions"
                },
                {
                    name: "Memoization",
                    icon: <BrainCircuit className="w-4 h-4 text-teal-500" />,
                    description: "Caching function results based on input parameters",
                    syntax: "const memoized = memoize(expensiveFunction);",
                    example: "const memoizedFactorial = memoize(factorial);",
                    useCase: "Optimizing expensive function calls with repeated inputs"
                },
                {
                    name: "Throttling",
                    icon: <Infinity className="w-4 h-4 text-orange-500" />,
                    description: "Limit how often a function can be called over time",
                    syntax: "const throttled = throttle(func, delay);",
                    example: "const throttledScroll = throttle(handleScroll, 100);",
                    useCase: "Optimizing performance for frequent events (scroll, resize)"
                },
                {
                    name: "Debouncing",
                    icon: <Sigma className="w-4 h-4 text-pink-500" />,
                    description: "Delay function execution until after wait time has passed",
                    syntax: "const debounced = debounce(func, delay);",
                    example: "const debouncedSearch = debounce(search, 300);",
                    useCase: "Handling rapid successive events (search input, window resize)"
                }
            ]
        },
        {
            category: "Built-in Array HOFs",
            concepts: [
                {
                    name: "map()",
                    icon: <Map className="w-4 h-4 text-blue-400" />,
                    description: "Creates new array by applying function to each element",
                    syntax: "array.map(callback)",
                    example: "const doubled = [1,2,3].map(x => x * 2);",
                    useCase: "Transforming each element in an array"
                },
                {
                    name: "filter()",
                    icon: <Filter className="w-4 h-4 text-green-400" />,
                    description: "Creates new array with elements that pass test",
                    syntax: "array.filter(callback)",
                    example: "const evens = [1,2,3].filter(x => x % 2 === 0);",
                    useCase: "Selecting elements based on condition"
                },
                {
                    name: "reduce()",
                    icon: <BarChart className="w-4 h-4 text-purple-400" />,
                    description: "Reduces array to single value using accumulator",
                    syntax: "array.reduce(callback, initialValue)",
                    example: "const sum = [1,2,3].reduce((acc, x) => acc + x, 0);",
                    useCase: "Accumulating values (sum, average, etc.)"
                },
                {
                    name: "forEach()",
                    icon: <IterationCw className="w-4 h-4 text-yellow-400" />,
                    description: "Executes function for each element",
                    syntax: "array.forEach(callback)",
                    example: "[1,2,3].forEach(x => console.log(x));",
                    useCase: "When you need side effects for each element"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Function Pipelining",
                    icon: <Workflow className="w-4 h-4 text-indigo-500" />,
                    description: "Chaining functions where output of one becomes input of next",
                    syntax: "pipe(func1, func2, func3)",
                    example: "const process = pipe(clean, validate, transform);",
                    useCase: "Data processing pipelines"
                },
                {
                    name: "Factory Functions",
                    icon: <Cpu className="w-4 h-4 text-blue-600" />,
                    description: "Functions that return objects or other functions",
                    syntax: "function createX(config) { return { ... }; }",
                    example: "const userFactory = (name) => ({ name, id: Date.now() });",
                    useCase: "Creating multiple similar objects with configuration"
                },
                {
                    name: "Callback Pattern",
                    icon: <ArrowRightLeft className="w-4 h-4 text-green-600" />,
                    description: "Passing functions to be executed later (asynchronous operations)",
                    syntax: "function asyncOperation(callback) { ... callback(result); }",
                    example: "fs.readFile('file.txt', (err, data) => { ... });",
                    useCase: "Asynchronous operations, event handlers"
                },
                {
                    name: "Middleware Pattern",
                    icon: <Layers className="w-4 h-4 text-purple-600" />,
                    description: "Chain of functions that process requests/responses",
                    syntax: "middleware1(req, res, next) => next();",
                    example: "Express.js middleware functions",
                    useCase: "Web frameworks, request processing pipelines"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Basic HOF Implementation",
            description: "Practice creating and using higher-order functions",
            difficulty: "Beginner",
            starterCode: `// TASK 1: Create a function multiplierFactory that:
// - Takes a multiplier number
// - Returns a function that multiplies any number by the multiplier
// Example: const double = multiplierFactory(2); double(5) → 10

// TASK 2: Create a function compose that:
// - Takes two functions f and g
// - Returns a new function that applies g then f
// Example: const add2 = x => x + 2; const square = x => x * x;
// compose(square, add2)(3) → 25

// TASK 3: Create a function repeat that:
// - Takes a function f and number n
// - Returns a function that applies f n times
// Example: const add1 = x => x + 1; repeat(add1, 3)(5) → 8

// TASK 4: Create a function withLogging that:
// - Takes any function
// - Returns a new function that logs arguments and result
// Example: const loggedAdd = withLogging((a, b) => a + b);
// loggedAdd(2, 3) → logs "Called with: 2, 3", "Result: 5"`,
            solution: `// SOLUTION 1
function multiplierFactory(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = multiplierFactory(2);
const triple = multiplierFactory(3);
console.log('Double 5:', double(5)); // 10
console.log('Triple 5:', triple(5)); // 15

// SOLUTION 2
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const add2 = x => x + 2;
const square = x => x * x;
const addThenSquare = compose(square, add2);
console.log('Add then square 3:', addThenSquare(3)); // 25

// SOLUTION 3
function repeat(func, times) {
    return function(value) {
        let result = value;
        for (let i = 0; i < times; i++) {
            result = func(result);
        }
        return result;
    };
}

const add1 = x => x + 1;
const add3 = repeat(add1, 3);
console.log('Add 1 three times to 5:', add3(5)); // 8

// SOLUTION 4
function withLogging(func) {
    return function(...args) {
        console.log(\`Function \${func.name || 'anonymous'} called with:\`, args);
        const result = func(...args);
        console.log(\`Returned:\`, result);
        return result;
    };
}

const loggedAdd = withLogging((a, b) => a + b);
console.log('Logged add result:', loggedAdd(2, 3));`,
            hint: "Remember that functions can return other functions. Use closures to remember values from outer scope."
        },
        {
            title: "Array HOFs & Function Composition",
            description: "Practice combining array methods and function composition",
            difficulty: "Intermediate",
            starterCode: `const products = [
    { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
    { name: 'Book', price: 20, category: 'books', inStock: true },
    { name: 'Phone', price: 500, category: 'electronics', inStock: false },
    { name: 'Tablet', price: 300, category: 'electronics', inStock: true },
    { name: 'Pen', price: 2, category: 'office', inStock: false }
];

// TASK 1: Create reusable function transformers
// - createDiscounter(discountPercent): returns function that applies discount
// - createTaxAdder(taxPercent): returns function that adds tax
// - createCurrencyFormatter(currency): returns function that formats price

// TASK 2: Process products array
// 1. Get all in-stock electronics
// 2. Apply 10% discount to each
// 3. Add 8% tax to discounted price
// 4. Format as USD currency
// 5. Get array of {name, finalPrice}

// TASK 3: Create a pipeline function that:
// - Takes an array and series of transformation functions
// - Returns new array after applying all transformations in sequence`,
            solution: `const products = [
    { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
    { name: 'Book', price: 20, category: 'books', inStock: true },
    { name: 'Phone', price: 500, category: 'electronics', inStock: false },
    { name: 'Tablet', price: 300, category: 'electronics', inStock: true },
    { name: 'Pen', price: 2, category: 'office', inStock: false }
];

// SOLUTION 1: Function factories
function createDiscounter(discountPercent) {
    return function(price) {
        return price * (1 - discountPercent / 100);
    };
}

function createTaxAdder(taxPercent) {
    return function(price) {
        return price * (1 + taxPercent / 100);
    };
}

function createCurrencyFormatter(currency) {
    return function(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(price);
    };
}

const apply10PercentDiscount = createDiscounter(10);
const add8PercentTax = createTaxAdder(8);
const formatUSD = createCurrencyFormatter('USD');

// SOLUTION 2: Process products
const processedProducts = products
    .filter(product => product.category === 'electronics' && product.inStock)
    .map(product => {
        const discounted = apply10PercentDiscount(product.price);
        const withTax = add8PercentTax(discounted);
        const formatted = formatUSD(withTax);
        
        return {
            name: product.name,
            originalPrice: formatUSD(product.price),
            finalPrice: formatted,
            rawPrice: withTax
        };
    });

console.log('Processed products:', processedProducts);

// SOLUTION 3: Pipeline function
function pipeline(data, ...transformations) {
    return transformations.reduce((result, transform) => {
        return transform(result);
    }, data);
}

// Example usage:
const filterElectronics = arr => arr.filter(p => p.category === 'electronics');
const filterInStock = arr => arr.filter(p => p.inStock);
const applyDiscount = arr => arr.map(p => ({
    ...p,
    price: p.price * 0.9
}));

const result = pipeline(
    products,
    filterElectronics,
    filterInStock,
    applyDiscount
);

console.log('Pipeline result:', result);`,
            hint: "Chain array methods for readability. Create small, reusable functions that do one thing well."
        },
        {
            title: "Advanced: Memoization, Throttling & Debouncing",
            description: "Implement performance optimization patterns",
            difficulty: "Advanced",
            starterCode: `// TASK 1: Implement memoize function
// - Takes any function
// - Returns memoized version that caches results
// - Cache key should be based on arguments

// TASK 2: Implement throttle function
// - Takes function and time interval (ms)
// - Returns throttled version that can only be called once per interval
// - Last call in interval should execute after interval ends

// TASK 3: Implement debounce function
// - Takes function and delay (ms)
// - Returns debounced version that only executes after delay has passed
// - Resets timer on each call

// TASK 4: Create a search input handler with debouncing
// - Simulate API call with console.log
// - Debounce by 300ms
// - Show loading indicator concept`,
            solution: `// SOLUTION 1: Memoization
function memoize(func) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Returning cached result for:', args);
            return cache.get(key);
        }
        
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

// Test memoization
const expensiveCalculation = memoize((a, b) => {
    console.log('Calculating...');
    return a * b * 1000;
});

console.log('First call:', expensiveCalculation(2, 3));
console.log('Second call (cached):', expensiveCalculation(2, 3));

// SOLUTION 2: Throttling
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Test throttling
const throttledScroll = throttle(() => {
    console.log('Scroll handler executed');
}, 1000);

// Simulate rapid calls
setTimeout(throttledScroll, 0);
setTimeout(throttledScroll, 500);
setTimeout(throttledScroll, 1500);

// SOLUTION 3: Debouncing
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Test debouncing
const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
}, 300);

// SOLUTION 4: Search handler with debouncing
class SearchHandler {
    constructor() {
        this.isLoading = false;
        this.debouncedSearch = debounce(this.performSearch.bind(this), 300);
    }
    
    performSearch(query) {
        console.log(\`API call for: "\${query}"\`);
        // Simulate API call
        this.isLoading = false;
    }
    
    handleInput(query) {
        this.isLoading = true;
        console.log('Loading...');
        this.debouncedSearch(query);
    }
}

const searchHandler = new SearchHandler();
searchHandler.handleInput('jav');
setTimeout(() => searchHandler.handleInput('javasc'), 100);
setTimeout(() => searchHandler.handleInput('javascript'), 200);`,
            hint: "Use closures to maintain state between calls. clearTimeout before setTimeout for debouncing."
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
            <LessonSidebar currentLesson="lesson11" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 11: Higher-Order Functions</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Higher-Order Functions Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master functions that take functions as arguments, return functions, and enable functional programming patterns.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <FunctionSquare className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'playground'].map((tab) => (
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

                    
                    {activeTab === 'content' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <FunctionSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Functions as First-Class Citizens
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        In JavaScript, functions are first-class objects. They can be stored in variables, passed as arguments, returned from other functions, and have their own properties and methods.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Crown className="w-4 h-4" /> Key Characteristics
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                                                    <span>
                                                        <strong>Assignable:</strong>{" "}
                                                        {"const func = () => { }"}
                                                    </span>

                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Passable:</strong> array.map(func)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Returnable:</strong> function factory() { }</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                                            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                                <Workflow className="w-4 h-4" /> Common Patterns
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Decorators:</strong> Add behavior</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Factories:</strong> Create objects</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Composition:</strong> Combine functions</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Quick Reference
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {concepts.map((category, idx) => (
                                            <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                                    {category.category}
                                                </h3>
                                                <div className="space-y-1">
                                                    {category.concepts.slice(0, 2).map((concept, cIdx) => (
                                                        <button
                                                            key={cIdx}
                                                            onClick={() => {
                                                                setActiveTab('concepts');
                                                                const conceptIndex = concepts.slice(0, idx)
                                                                    .reduce((acc, cat) => acc + cat.concepts.length, 0) + cIdx;
                                                                setCurrentConcept(conceptIndex);
                                                            }}
                                                            className="block w-full text-left px-2 py-1 text-sm hover:bg-white dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300 transition-colors"
                                                        >
                                                            {concept.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">hof-demo.js</span>
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

                
                    {activeTab === 'concepts' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        HOF Concept Explorer
                                    </h2>
                                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                        <button
                                            onClick={() => setCurrentConcept(prev => Math.max(0, prev - 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 font-mono text-sm font-medium">
                                            {currentConcept + 1} / {concepts.flatMap(c => c.concepts).length}
                                        </span>
                                        <button
                                            onClick={() => setCurrentConcept(prev => Math.min(concepts.flatMap(c => c.concepts).length - 1, prev + 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {(() => {
                                    const allConcepts = concepts.flatMap(c => c.concepts);
                                    const concept = allConcepts[currentConcept] || allConcepts[0];
                                    const category = concepts.find(c => c.concepts.includes(concept));

                                    return (
                                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                                    {concept.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{concept.name}</h3>
                                                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                        {category.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Description</h4>
                                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{concept.description}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">When to Use</h4>
                                                        <p className="text-slate-700 dark:text-slate-300 italic">"{concept.useCase}"</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Syntax</h4>
                                                        <div className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
                                                            <code className="text-sm font-mono text-purple-600 dark:text-purple-400">{concept.syntax}</code>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Example</h4>
                                                        <div className="bg-slate-900 rounded-lg p-4 relative group">
                                                            <code className="text-sm font-mono text-blue-300">{concept.example}</code>
                                                            <button
                                                                onClick={() => {
                                                                    setCode(`${concept.example}\n\n// Try modifying the code above!`);
                                                                    setActiveTab('playground');
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
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                    {exercises[currentExercise].difficulty}
                                                </span>
                                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                    Exercise {currentExercise + 1}
                                                </h2>
                                            </div>
                                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">
                                                {exercises[currentExercise].title}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-mono font-medium">
                                                {currentExercise + 1} / {exercises.length}
                                            </span>
                                            <button
                                                onClick={() => setShowSolution(!showSolution)}
                                                className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors"
                                            >
                                                {showSolution ? 'Hide' : 'Show'} Solution
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                        {exercises[currentExercise].description}
                                    </p>
                                </div>

                                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="space-y-4">
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

                                        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 p-4 rounded-xl">
                                            <div className="flex items-center gap-2 mb-2 text-yellow-700 dark:text-yellow-500">
                                                <Lightbulb className="w-4 h-4" />
                                                <span className="font-bold text-sm">Hint</span>
                                            </div>
                                            <p className="text-sm text-yellow-800 dark:text-yellow-200/80">
                                                {exercises[currentExercise].hint}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl h-full">
                                            <div className="flex items-center gap-2 mb-3 text-slate-700 dark:text-slate-300">
                                                <Brain className="w-4 h-4" />
                                                <span className="font-bold text-sm">Your Solution</span>
                                            </div>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Write your solution here..."
                                            />
                                            <div className="flex gap-2 mt-3">
                                                <button
                                                    onClick={runCode}
                                                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                                >
                                                    Test Solution
                                                </button>
                                                <button
                                                    onClick={() => setCode(exercises[currentExercise].solution)}
                                                    className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                                >
                                                    Load Solution
                                                </button>
                                            </div>
                                        </div>

                                        {showSolution && (
                                            <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-4 rounded-xl">
                                                <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-500">
                                                    <Code className="w-4 h-4" />
                                                    <span className="font-bold text-sm">Solution Code</span>
                                                </div>
                                                <pre className="text-xs text-emerald-800 dark:text-emerald-300 font-mono overflow-x-auto">
                                                    {exercises[currentExercise].solution}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-between">
                                    <button
                                        onClick={() => {
                                            setCurrentExercise(prev => Math.max(0, prev - 1));
                                            setShowSolution(false);
                                        }}
                                        disabled={currentExercise === 0}
                                        className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCurrentExercise(prev => Math.min(exercises.length - 1, prev + 1));
                                            setShowSolution(false);
                                        }}
                                        disabled={currentExercise === exercises.length - 1}
                                        className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                                    >
                                        Next Exercise
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Playground */}
                    {activeTab === 'playground' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common HOF Patterns</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCode(`// Function Factory\nfunction createGreeter(greeting) {\n  return function(name) {\n    return \`\${greeting}, \${name}!\`;\n  };\n}\n\nconst sayHello = createGreeter('Hello');\nconst sayHi = createGreeter('Hi');\n\nconsole.log(sayHello('John')); // Hello, John!\nconsole.log(sayHi('Jane')); // Hi, Jane!`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Function Factory</div>
                                            <div className="text-xs text-slate-500">Create functions with preset configurations</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Function Composition\nfunction compose(f, g) {\n  return function(x) {\n    return f(g(x));\n  };\n}\n\nconst add2 = x => x + 2;\nconst multiplyBy3 = x => x * 3;\nconst square = x => x * x;\n\nconst process = compose(square, compose(multiplyBy3, add2));\nconsole.log(process(5)); // ((5+2)*3)^2 = 441`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Function Composition</div>
                                            <div className="text-xs text-slate-500">Chain functions together</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Memoization Pattern\nfunction memoize(func) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) {\n      console.log('Returning cached result');\n      return cache[key];\n    }\n    const result = func(...args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nconst memoizedAdd = memoize((a, b) => a + b);\nconsole.log(memoizedAdd(2, 3)); // Calculates\nconsole.log(memoizedAdd(2, 3)); // Returns cached`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Memoization</div>
                                            <div className="text-xs text-slate-500">Cache function results</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Basic HOF Practice\n// Create a function that returns another function\n// Try creating multipliers, adders, or validators`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic HOF Creation
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Array HOF Practice\nconst numbers = [1, 2, 3, 4, 5];\n// Practice map, filter, reduce with custom functions\n// Create reusable transformer functions`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Array HOF Combinations
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Performance Patterns\n// Implement debounce or throttle\n// Try with setTimeout simulations`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Performance Optimization
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Real-world Example: Validation Pipeline\nconst user = { name: 'John', age: 25, email: 'john@test.com' };\n// Create validation functions and compose them`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Validation Pipeline
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">hof-playground.js</span>
                                        <div className="flex gap-2">
                                            <button onClick={resetCode} className="text-xs text-slate-400 hover:text-white px-2 py-1">Reset</button>
                                            <button onClick={copyCode} className="text-xs text-slate-400 hover:text-white px-2 py-1">Copy</button>
                                            <button onClick={runCode} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-semibold transition-colors">
                                                <Play className="w-3 h-3" /> Run
                                            </button>
                                        </div>
                                    </div>
                                    <textarea
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="flex-1 w-full bg-slate-950 text-slate-300 font-mono text-sm p-4 focus:outline-none min-h-[400px]"
                                        spellCheck="false"
                                    />
                                    {output && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-semibold text-slate-500">Output</span>
                                                <button onClick={() => setOutput('')} className="text-xs text-slate-500 hover:text-slate-300">Clear</button>
                                            </div>
                                            <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">{output}</pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson10" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Destructuring & Spread</span>
                        </a>
                        <a href="/lesson12" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Error Handling</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}