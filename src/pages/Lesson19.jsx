import React, { useState } from 'react';
import {
    Eye, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Lock, Unlock,
    Box, Layers, Filter, Zap, RefreshCw,
    Brain, Code, Lightbulb, Grid, Cpu,
    Database, Settings, Wrench, Package,
    ArrowRight, ArrowLeft, Home, Building,
    Factory, Crown, Award, Target, UserPlus,
    Shield, Key, Timer, EyeOff, Eye as EyeIcon
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson19() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === CLOSURES: MASTERING LEXICAL SCOPING ===

// A closure is a function that remembers its outer variables
// Functions have access to variables from their creation context, even after that context is gone

// ========== BASIC CLOSURES ==========

// 1. Simple Closure Example
function outerFunction() {
    const outerVariable = 'I am from outer scope!';
    let count = 0;
    
    // Inner function forms a closure
    return function innerFunction() {
        count++;
        return \`\${outerVariable} Accessed \${count} times.\`;
    };
}

const closureExample = outerFunction();
console.log(closureExample()); // "I am from outer scope! Accessed 1 times."
console.log(closureExample()); // "I am from outer scope! Accessed 2 times."
console.log(closureExample()); // "I am from outer scope! Accessed 3 times."

// outerFunction has finished executing, but innerFunction remembers 'outerVariable' and 'count'

// 2. Multiple Closures Sharing State
function createCounter() {
    let privateCount = 0;
    
    return {
        increment: function() {
            privateCount++;
            return privateCount;
        },
        decrement: function() {
            privateCount--;
            return privateCount;
        },
        getCount: function() {
            return privateCount;
        },
        reset: function() {
            privateCount = 0;
            return privateCount;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('Counter 1:', counter1.increment()); // 1
console.log('Counter 1:', counter1.increment()); // 2
console.log('Counter 2:', counter2.increment()); // 1 (independent)
console.log('Counter 1:', counter1.getCount()); // 2
console.log('Counter 2:', counter2.getCount()); // 1

// Each counter has its own private state

// ========== PRACTICAL CLOSURE PATTERNS ==========

// 3. Data Privacy / Encapsulation
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return \`Deposited $\${amount}. New balance: $\${balance}\`;
            }
            return 'Deposit amount must be positive';
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return \`Withdrew $\${amount}. New balance: $\${balance}\`;
            }
            return 'Insufficient funds or invalid amount';
        },
        
        getBalance: function() {
            return \`Current balance: $\${balance}\`;
        },
        
        // No direct access to 'balance' variable!
    };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500)); // "Deposited $500. New balance: $1500"
console.log(myAccount.withdraw(200)); // "Withdrew $200. New balance: $1300"
console.log(myAccount.getBalance()); // "Current balance: $1300"

// Try to access balance directly (won't work)
console.log(myAccount.balance); // undefined

// 4. Function Factories
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log('Double 10:', double(10)); // 20
console.log('Triple 10:', triple(10)); // 30
console.log('Quadruple 10:', quadruple(10)); // 40

// 5. Memoization (Performance Optimization)
function createMemoizedFunction(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key] !== undefined) {
            console.log('Returning cached result for:', args);
            return cache[key];
        }
        
        console.log('Calculating new result for:', args);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Example: Expensive calculation
function expensiveCalculation(n) {
    console.log('Performing expensive calculation...');
    // Simulate expensive operation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result = Math.random();
    }
    return n * n;
}

const memoizedCalc = createMemoizedFunction(expensiveCalculation);

console.log(memoizedCalc(5)); // Calculates
console.log(memoizedCalc(5)); // Returns cached
console.log(memoizedCalc(10)); // Calculates
console.log(memoizedCalc(5)); // Returns cached

// ========== ADVANCED CLOSURE PATTERNS ==========

// 6. Module Pattern (Before ES6 Modules)
const UserModule = (function() {
    // Private variables
    let users = [];
    let nextId = 1;
    
    // Private function
    function generateId() {
        return nextId++;
    }
    
    // Public API
    return {
        addUser: function(name, email) {
            const user = {
                id: generateId(),
                name,
                email,
                createdAt: new Date()
            };
            users.push(user);
            return user;
        },
        
        getUser: function(id) {
            return users.find(user => user.id === id);
        },
        
        getAllUsers: function() {
            return [...users]; // Return copy
        },
        
        deleteUser: function(id) {
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        },
        
        getUserCount: function() {
            return users.length;
        },
        
        // No direct access to 'users' or 'nextId'
    };
})();

// Usage
UserModule.addUser('John Doe', 'john@example.com');
UserModule.addUser('Jane Smith', 'jane@example.com');
console.log('Total users:', UserModule.getUserCount()); // 2
console.log('All users:', UserModule.getAllUsers());

// 7. Currying (Functional Programming)
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Example function to curry
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiplyThreeNumbers);

console.log('Curried result 1:', curriedMultiply(2)(3)(4)); // 24
console.log('Curried result 2:', curriedMultiply(2, 3)(4)); // 24
console.log('Curried result 3:', curriedMultiply(2)(3, 4)); // 24

// Practical currying example
function createLogger(prefix) {
    return function(message) {
        console.log(\`[\${prefix}] \${new Date().toISOString()}: \${message}\`);
    };
}

const errorLogger = createLogger('ERROR');
const infoLogger = createLogger('INFO');
const debugLogger = createLogger('DEBUG');

errorLogger('Something went wrong!');
infoLogger('User logged in');
debugLogger('Processing data...');

// 8. Partial Application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn.apply(this, presetArgs.concat(laterArgs));
    };
}

function sendEmail(from, to, subject, body) {
    return \`Email sent from \${from} to \${to} with subject: "\${subject}"\`;
}

// Create specialized functions
const sendFromAdmin = partial(sendEmail, 'admin@company.com');
const sendWelcomeEmail = partial(sendFromAdmin, 'newuser@example.com', 'Welcome!');

console.log(sendWelcomeEmail('Welcome to our platform...'));

// ========== REAL-WORLD CLOSURE EXAMPLES ==========

// 9. Event Handlers with Closures
function setupButtonHandlers() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((button, index) => {
        // Each handler gets its own closure with 'index'
        button.addEventListener('click', function() {
            console.log(\`Button \${index} clicked: \${this.textContent}\`);
            // 'this' refers to the button element
            // 'index' is captured from the loop
        });
    });
}

// Simulated buttons for demo
const buttons = [
    { textContent: 'Save', click: () => {} },
    { textContent: 'Cancel', click: () => {} },
    { textContent: 'Delete', click: () => {} }
];

buttons.forEach((button, index) => {
    const handler = function() {
        console.log(\`Button \${index} clicked: \${this.textContent}\`);
    }.bind(button);
    
    // In real DOM: button.addEventListener('click', handler);
});

// 10. Timeout/Interval with Closures
function createTimer(initialSeconds) {
    let seconds = initialSeconds;
    let timerId = null;
    
    return {
        start: function() {
            if (timerId) return; // Already running
            
            timerId = setInterval(() => {
                seconds--;
                console.log(\`Time remaining: \${seconds}s\`);
                
                if (seconds <= 0) {
                    this.stop();
                    console.log('Timer complete!');
                }
            }, 1000);
        },
        
        stop: function() {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
        },
        
        reset: function(newSeconds) {
            this.stop();
            seconds = newSeconds || initialSeconds;
        },
        
        getTime: function() {
            return seconds;
        }
    };
}

const myTimer = createTimer(5);
// myTimer.start(); // Uncomment to run

// 11. Authentication State Management
function createAuthManager() {
    let currentUser = null;
    let token = null;
    let refreshToken = null;
    
    return {
        login: function(email, password) {
            // Simulate API call
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email && password) {
                        currentUser = { email, name: 'John Doe' };
                        token = 'fake-jwt-token';
                        refreshToken = 'fake-refresh-token';
                        
                        // Store in localStorage
                        localStorage.setItem('auth_token', token);
                        localStorage.setItem('user', JSON.stringify(currentUser));
                        
                        resolve(currentUser);
                    } else {
                        reject(new Error('Invalid credentials'));
                    }
                }, 1000);
            });
        },
        
        logout: function() {
            currentUser = null;
            token = null;
            refreshToken = null;
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            console.log('User logged out');
        },
        
        getCurrentUser: function() {
            if (!currentUser) {
                // Try to restore from localStorage
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    currentUser = JSON.parse(storedUser);
                    token = localStorage.getItem('auth_token');
                }
            }
            return currentUser;
        },
        
        isAuthenticated: function() {
            return !!this.getCurrentUser();
        },
        
        getToken: function() {
            return token;
        },
        
        // Private method simulation
        _refreshToken: function() {
            console.log('Refreshing token...');
            // Would make API call to refresh token
            token = 'new-fake-jwt-token';
            return token;
        }
    };
}

const auth = createAuthManager();

// Usage example
if (!auth.isAuthenticated()) {
    auth.login('user@example.com', 'password')
        .then(user => console.log('Logged in as:', user))
        .catch(error => console.error('Login failed:', error));
}

// ========== CLOSURE GOTCHAS & SOLUTIONS ==========

// 12. The Classic Loop Problem
console.log('\\n=== Classic Loop Closure Problem ===');
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log('var i =', i); // All log "3" - not what we want!
    }, 100);
}

// Solution 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log('let i =', i); // Logs 0, 1, 2
    }, 100);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(function() {
            console.log('IIFE i =', index); // Logs 0, 1, 2
        }, 100);
    })(i);
}

// Solution 3: Function returning function
for (var i = 0; i < 3; i++) {
    setTimeout(createHandler(i), 100);
}

function createHandler(index) {
    return function() {
        console.log('Function factory i =', index); // Logs 0, 1, 2
    };
}

// 13. Memory Management with Closures
function createLargeClosure() {
    const largeArray = new Array(1000000).fill('data');
    
    return function() {
        // Closure holds reference to largeArray
        return largeArray.length;
    };
}

const closureWithLargeData = createLargeClosure();
console.log('Large closure size:', closureWithLargeData());

// To free memory, we need to remove references
// closureWithLargeData = null; // Now largeArray can be garbage collected

// ========== CLOSURE PERFORMANCE PATTERNS ==========

// 14. Debouncing (Performance optimization)
function createDebouncedFunction(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Example: Search input
const searchInput = {
    value: '',
    onInput: function(value) {
        console.log('Searching for:', value);
        // Actual search API call would go here
    }
};

const debouncedSearch = createDebouncedFunction(searchInput.onInput.bind(searchInput), 300);

// Simulate rapid typing
debouncedSearch('h');
debouncedSearch('he');
debouncedSearch('hel');
debouncedSearch('hell');
debouncedSearch('hello'); // Only this will execute after 300ms

// 15. Throttling (Another performance pattern)
function createThrottledFunction(fn, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Example: Window resize handler
const throttledResize = createThrottledFunction(function() {
    console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
}, 200);

// window.addEventListener('resize', throttledResize);

// ========== CLOSURE CHAINING ==========

// 16. Function Composition with Closures
function compose(...functions) {
    return function(input) {
        return functions.reduceRight((value, fn) => {
            return fn(value);
        }, input);
    };
}

// Example functions
function add5(x) {
    return x + 5;
}

function multiply2(x) {
    return x * 2;
}

function subtract3(x) {
    return x - 3;
}

const complexOperation = compose(subtract3, multiply2, add5);
console.log('Compose result:', complexOperation(10)); // ((10 + 5) * 2) - 3 = 27

// 17. Pipeline with Closures
function pipeline(...functions) {
    return function(input) {
        return functions.reduce((value, fn) => {
            return fn(value);
        }, input);
    };
}

const simplePipeline = pipeline(add5, multiply2, subtract3);
console.log('Pipeline result:', simplePipeline(10)); // ((10 + 5) * 2) - 3 = 27

// ========== CLOSURE INTERVIEW QUESTIONS ==========

// 18. What will this code output?
function createFunctions() {
    var result = [];
    
    for (var i = 0; i < 5; i++) {
        result.push(function() {
            return i;
        });
    }
    
    return result;
}

const functions = createFunctions();
console.log('\\nInterview Q1:');
functions.forEach((fn, index) => {
    console.log(\`fn\${index}() returns:\`, fn()); // All return 5
});

// Fix it with IIFE
function createFunctionsFixed() {
    var result = [];
    
    for (var i = 0; i < 5; i++) {
        (function(index) {
            result.push(function() {
                return index;
            });
        })(i);
    }
    
    return result;
}

const fixedFunctions = createFunctionsFixed();
console.log('\\nInterview Q1 Fixed:');
fixedFunctions.forEach((fn, index) => {
    console.log(\`fn\${index}() returns:\`, fn()); // Returns 0, 1, 2, 3, 4
});

// 19. Closure scope chain
var globalVar = 'global';

function outer() {
    var outerVar = 'outer';
    
    function inner() {
        var innerVar = 'inner';
        
        return function innermost() {
            var innermostVar = 'innermost';
            console.log(globalVar, outerVar, innerVar, innermostVar);
        };
    }
    
    return inner();
}

const deepestClosure = outer();
deepestClosure(); // Logs: global outer inner innermost

console.log('\\n=== Closure Examples Complete ===');
console.log('Try creating your own closures in the playground!');`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [closureChain, setClosureChain] = useState({
        levels: [
            { level: 'Global', variables: ['globalVar'] },
            { level: 'outer()', variables: ['outerVar'], captured: ['globalVar'] },
            { level: 'inner()', variables: ['innerVar'], captured: ['outerVar', 'globalVar'] },
            { level: 'innermost()', variables: ['innermostVar'], captured: ['innerVar', 'outerVar', 'globalVar'] }
        ],
        currentExecution: null
    });

    const runCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;
            const originalError = console.error;

            console.log = (...args) => {
                logs.push(`[LOG] ${args.join(' ')}`);
                originalLog(...args);
            };

            console.error = (...args) => {
                logs.push(`[ERROR] ${args.join(' ')}`);
                originalError(...args);
            };

            // Simulate closure chain execution
            setClosureChain(prev => ({
                ...prev,
                currentExecution: 'global'
            }));

            const levels = ['outer()', 'inner()', 'innermost()'];
            let currentLevel = 0;

            const executionInterval = setInterval(() => {
                if (currentLevel >= levels.length) {
                    clearInterval(executionInterval);
                    setTimeout(() => {
                        setClosureChain(prev => ({ ...prev, currentExecution: null }));
                    }, 1000);
                    return;
                }

                setClosureChain(prev => ({
                    ...prev,
                    currentExecution: levels[currentLevel]
                }));

                currentLevel++;
            }, 800);

            try {
                // eslint-disable-next-line no-eval
                eval(code);
            } catch (e) {
                console.log("Runtime Error:", e.message);
            }

            console.log = originalLog;
            console.error = originalError;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const concepts = [
        {
            category: "Closure Fundamentals",
            concepts: [
                {
                    name: "What is a Closure?",
                    icon: <Eye className="w-4 h-4 text-blue-500" />,
                    description: "Function that remembers its lexical scope even when executed outside that scope",
                    syntax: "function outer() { const secret = 'hidden'; return function inner() { return secret; }; }",
                    example: "const getSecret = outer(); console.log(getSecret()); // 'hidden'",
                    useCase: "Preserving state between function calls, data privacy",
                    visual: "outer() scope → inner() closure → Remembers outer variables"
                },
                {
                    name: "Lexical Scoping",
                    icon: <Layers className="w-4 h-4 text-green-500" />,
                    description: "Variables are accessible in their defined scope and nested scopes",
                    syntax: "Variables accessible where they're defined, not where they're called",
                    example: "Inner functions can access outer function variables",
                    useCase: "Understanding variable accessibility in nested functions",
                    visual: "Global → Function → Inner Function → Innermost (all scopes accessible)"
                },
                {
                    name: "Scope Chain",
                    icon: <Filter className="w-4 h-4 text-purple-500" />,
                    description: "Nested scopes forming a chain of variable access",
                    syntax: "Each function creates new scope, forming chain to global",
                    example: "innermost() → inner() → outer() → global scope",
                    useCase: "Understanding variable lookup process",
                    visual: "Current Scope → Outer Scope → Global Scope (lookup chain)"
                }
            ]
        },
        {
            category: "Practical Patterns",
            concepts: [
                {
                    name: "Data Privacy",
                    icon: <Lock className="w-4 h-4 text-red-500" />,
                    description: "Using closures to create private variables and methods",
                    syntax: "Return object with public methods that access private variables",
                    example: "Module pattern, factory functions with encapsulated state",
                    useCase: "Creating objects with truly private state",
                    visual: "Private variables → Closure → Public API (only methods)"
                },
                {
                    name: "Function Factories",
                    icon: <Factory className="w-4 h-4 text-yellow-500" />,
                    description: "Functions that create and return other functions",
                    syntax: "function createFunction(config) { return function() { /* uses config */ }; }",
                    example: "createMultiplier(2) returns doubling function",
                    useCase: "Creating specialized functions with preset configuration",
                    visual: "Factory Function → Configuration → Returns Specialized Function"
                },
                {
                    name: "Memoization",
                    icon: <Database className="w-4 h-4 text-teal-500" />,
                    description: "Caching function results to avoid重复计算",
                    syntax: "Closure maintains cache object",
                    example: "Fibonacci calculator with memoization",
                    useCase: "Optimizing expensive function calls",
                    visual: "Function → Cache Check → Return cached or compute & cache"
                },
                {
                    name: "Currying",
                    icon: <Wrench className="w-4 h-4 text-pink-500" />,
                    description: "Transforming multi-argument function into sequence of single-argument functions",
                    syntax: "function curry(fn) { return function curried(...args) { /* ... */ }; }",
                    example: "add(1)(2)(3) instead of add(1, 2, 3)",
                    useCase: "Function specialization, partial application",
                    visual: "Function(a,b,c) → Curry → Function(a) → Function(b) → Function(c)"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Module Pattern",
                    icon: <Package className="w-4 h-4 text-indigo-500" />,
                    description: "Using IIFE to create private scope and public API",
                    syntax: "const Module = (function() { /* private */ return { /* public */ }; })();",
                    example: "Creating self-contained modules before ES6",
                    useCase: "Organizing code, preventing global namespace pollution",
                    visual: "IIFE → Private Scope → Return Object → Public API"
                },
                {
                    name: "Debouncing",
                    icon: <Timer className="w-4 h-4 text-orange-500" />,
                    description: "Delaying function execution until after wait time",
                    syntax: "Closure maintains timeout reference",
                    example: "Search input that waits for typing to stop",
                    useCase: "Performance optimization for frequent events",
                    visual: "Event → Clear Timeout → Set New Timeout → Execute after delay"
                },
                {
                    name: "Throttling",
                    icon: <RefreshCw className="w-4 h-4 text-blue-600" />,
                    description: "Limiting function execution to once per time period",
                    syntax: "Closure tracks last execution time",
                    example: "Window resize handler that fires at most every 200ms",
                    useCase: "Rate-limiting expensive operations",
                    visual: "Event → Check Time Since Last → Execute or Skip"
                },
                {
                    name: "Partial Application",
                    icon: <Settings className="w-4 h-4 text-green-600" />,
                    description: "Fixing some arguments of a function, producing new function",
                    syntax: "function partial(fn, ...args) { return function(...moreArgs) { /* ... */ }; }",
                    example: "const add5 = partial(add, 5); add5(3) // 8",
                    useCase: "Creating specialized functions from general ones",
                    visual: "Function(a,b,c) → Partial with a=1 → Function(b,c)"
                }
            ]
        },
        {
            category: "Common Pitfalls & Solutions",
            concepts: [
                {
                    name: "Loop Closure Problem",
                    icon: <Cpu className="w-4 h-4 text-red-600" />,
                    description: "Closures in loops capturing final value, not each iteration",
                    syntax: "for (var i=0; i<3; i++) { setTimeout(() => console.log(i), 100); } // logs 3,3,3",
                    example: "Classic interview question with setTimeout in loop",
                    useCase: "Understanding variable capture timing",
                    visual: "Loop iteration → Create Closure → Captures variable reference, not value"
                },
                {
                    name: "Memory Management",
                    icon: <Shield className="w-4 h-4 text-purple-600" />,
                    description: "Closures can cause memory leaks by holding references",
                    syntax: "Large objects captured in closure can't be garbage collected",
                    example: "Event handlers keeping DOM elements alive",
                    useCase: "Avoiding memory leaks in long-running applications",
                    visual: "Closure → Holds Reference → Prevents GC → Memory Leak"
                },
                {
                    name: "IIFE Solution",
                    icon: <Box className="w-4 h-4 text-yellow-600" />,
                    description: "Immediately Invoked Function Expression to create new scope",
                    syntax: "(function(param) { /* new scope */ })(value);",
                    example: "Solving loop closure problem: (function(i) { setTimeout(...) })(i);",
                    useCase: "Creating isolated scope for each iteration",
                    visual: "Loop → IIFE per iteration → New Scope → Correct value captured"
                },
                {
                    name: "let vs var in Loops",
                    icon: <Key className="w-4 h-4 text-teal-600" />,
                    description: "let creates new binding each iteration, var doesn't",
                    syntax: "for (let i=0; i<3; i++) { /* i is fresh each iteration */ }",
                    example: "Using let solves loop closure problem automatically",
                    useCase: "Modern solution to classic closure problems",
                    visual: "for (let i...) → Block Scope per iteration → Correct closure"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Basic Closures",
            description: "Create closures for data privacy and state management",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Counter Factory
// Create a function that returns a counter object with:
// 1. increment() - increases count by 1
// 2. decrement() - decreases count by 1
// 3. getCount() - returns current count
// 4. reset() - resets count to 0
// The count should be private (not directly accessible)

// EXERCISE 2: Temperature Converter
// Create a temperature converter factory:
// 1. Should accept base unit ('C' or 'F')
// 2. Return object with convertTo(otherUnit, value) method
// 3. Store conversion formulas in closure
// 4. Keep track of conversion history

// EXERCISE 3: Unique ID Generator
// Create a function that generates unique IDs:
// 1. Each call returns unique string
// 2. Can reset to start over
// 3. Can set custom prefix
// 4. ID format: prefix_number (e.g., "user_1", "user_2")`,
            solution: `// SOLUTION 1: Counter Factory
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: function(amount = 1) {
            count += amount;
            return count;
        },
        
        decrement: function(amount = 1) {
            count -= amount;
            return count;
        },
        
        getCount: function() {
            return count;
        },
        
        reset: function() {
            count = initialValue;
            return count;
        },
        
        // Bonus: Chainable methods
        incrementAndGet: function(amount = 1) {
            this.increment(amount);
            return this;
        },
        
        getCountAndLog: function() {
            console.log(\`Current count: \${count}\`);
            return count;
        }
    };
}

// Usage
const counter = createCounter(10);
console.log('Initial:', counter.getCount()); // 10
console.log('Increment:', counter.increment()); // 11
console.log('Decrement:', counter.decrement(2)); // 9
console.log('Reset:', counter.reset()); // 10

// SOLUTION 2: Temperature Converter
function createTemperatureConverter(baseUnit = 'C') {
    const conversions = {
        'C->F': (c) => (c * 9/5) + 32,
        'F->C': (f) => (f - 32) * 5/9,
        'C->K': (c) => c + 273.15,
        'K->C': (k) => k - 273.15
    };
    
    const history = [];
    
    function convert(toUnit, value) {
        const fromUnit = baseUnit;
        const key = \`\${fromUnit}->\${toUnit}\`;
        
        if (!conversions[key]) {
            throw new Error(\`Conversion from \${fromUnit} to \${toUnit} not supported\`);
        }
        
        const result = conversions[key](value);
        
        // Record in history
        history.push({
            from: { unit: fromUnit, value },
            to: { unit: toUnit, value: result },
            timestamp: new Date()
        });
        
        return result;
    }
    
    return {
        convertTo: convert,
        
        getHistory: function() {
            return [...history]; // Return copy
        },
        
        clearHistory: function() {
            history.length = 0;
        },
        
        setBaseUnit: function(newUnit) {
            if (!['C', 'F', 'K'].includes(newUnit)) {
                throw new Error('Unit must be C, F, or K');
            }
            baseUnit = newUnit;
        },
        
        getBaseUnit: function() {
            return baseUnit;
        }
    };
}

// Usage
const converter = createTemperatureConverter('C');
console.log('25°C to F:', converter.convertTo('F', 25)); // 77
console.log('77°F to C:', converter.convertTo('F', 77)); // 25

converter.setBaseUnit('F');
console.log('98.6°F to C:', converter.convertTo('C', 98.6)); // 37

console.log('History:', converter.getHistory());

// SOLUTION 3: Unique ID Generator
function createIdGenerator(prefix = 'id') {
    let counter = 0;
    const usedIds = new Set();
    
    function generate() {
        let id;
        let attempts = 0;
        
        do {
            counter++;
            id = \`\${prefix}_\${counter}\`;
            attempts++;
            
            if (attempts > 1000) {
                throw new Error('Too many ID generation attempts');
            }
        } while (usedIds.has(id));
        
        usedIds.add(id);
        return id;
    }
    
    return {
        next: function() {
            return generate();
        },
        
        reset: function() {
            counter = 0;
            usedIds.clear();
        },
        
        setPrefix: function(newPrefix) {
            prefix = newPrefix;
        },
        
        releaseId: function(id) {
            usedIds.delete(id);
        },
        
        isUsed: function(id) {
            return usedIds.has(id);
        },
        
        getCount: function() {
            return counter;
        },
        
        // Generate batch of IDs
        batch: function(count) {
            const ids = [];
            for (let i = 0; i < count; i++) {
                ids.push(this.next());
            }
            return ids;
        }
    };
}

// Usage
const idGen = createIdGenerator('user');
console.log('ID 1:', idGen.next()); // user_1
console.log('ID 2:', idGen.next()); // user_2
console.log('ID 3:', idGen.next()); // user_3

idGen.setPrefix('order');
console.log('New prefix ID:', idGen.next()); // order_4

idGen.releaseId('user_2');
console.log('Is user_2 used?', idGen.isUsed('user_2')); // false

const batch = idGen.batch(3);
console.log('Batch:', batch); // [order_5, order_6, order_7]`,
            hint: "Remember that closures capture variables by reference, not value. Use local variables within the outer function to maintain private state that inner functions can access."
        },
        {
            title: "Advanced Closure Patterns",
            description: "Implement memoization, currying, and other functional patterns",
            difficulty: "Intermediate",
            starterCode: `// EXERCISE 1: Memoization Wrapper
// Create a generic memoize function that:
// 1. Works with any function
// 2. Caches results based on arguments
// 3. Handles async functions
// 4. Has configurable cache size limit

// EXERCISE 2: Function Composition
// Create a compose function that:
// 1. Takes any number of functions
// 2. Returns a new function that applies them right-to-left
// 3. Also create a pipe function (left-to-right)
// 4. Handle async functions optionally

// EXERCISE 3: Observable Pattern
// Create an observable implementation:
// 1. subscribe(callback) - adds observer
// 2. unsubscribe(callback) - removes observer  
// 3. next(value) - notifies all observers
// 4. complete() - completes observable
// 5. Error handling`,
            solution: `// SOLUTION 1: Advanced Memoization
function memoize(fn, options = {}) {
    const cache = new Map();
    const {
        maxSize = 100,
        ttl, // time to live in ms
        keyGenerator = JSON.stringify
    } = options;
    
    function cleanup() {
        if (ttl) {
            const now = Date.now();
            for (const [key, entry] of cache.entries()) {
                if (now - entry.timestamp > ttl) {
                    cache.delete(key);
                }
            }
        }
        
        // Enforce max size (LRU eviction)
        if (cache.size > maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
    }
    
    const memoized = function(...args) {
        cleanup();
        
        const key = keyGenerator(args);
        
        // Check cache
        if (cache.has(key)) {
            const entry = cache.get(key);
            
            // Check TTL if set
            if (!ttl || (Date.now() - entry.timestamp) <= ttl) {
                console.log(\`[CACHE HIT] \${fn.name || 'Function'} with args:\`, args);
                return entry.value;
            }
        }
        
        console.log(\`[CACHE MISS] \${fn.name || 'Function'} with args:\`, args);
        
        // Compute and cache
        const result = fn.apply(this, args);
        cache.set(key, {
            value: result,
            timestamp: Date.now()
        });
        
        return result;
    };
    
    // Async version
    memoized.async = async function(...args) {
        cleanup();
        
        const key = keyGenerator(args);
        
        if (cache.has(key)) {
            const entry = cache.get(key);
            if (!ttl || (Date.now() - entry.timestamp) <= ttl) {
                console.log(\`[ASYNC CACHE HIT] \${fn.name || 'Function'}\`);
                return entry.value;
            }
        }
        
        console.log(\`[ASYNC CACHE MISS] \${fn.name || 'Function'}\`);
        
        const result = await fn.apply(this, args);
        cache.set(key, {
            value: result,
            timestamp: Date.now()
        });
        
        return result;
    };
    
    // Utility methods
    memoized.clearCache = function() {
        cache.clear();
    };
    
    memoized.getCacheSize = function() {
        return cache.size;
    };
    
    memoized.getCacheStats = function() {
        const hits = Array.from(cache.values()).filter(e => e.hits).length;
        return {
            size: cache.size,
            hits,
            hitRate: hits / cache.size || 0
        };
    };
    
    return memoized;
}

// Usage example
function expensiveCalculation(n) {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < n * 1000000; i++) {
        total += Math.random();
    }
    return total;
}

const memoizedCalc = memoize(expensiveCalculation, { maxSize: 10, ttl: 5000 });
console.log(memoizedCalc(5)); // Calculates
console.log(memoizedCalc(5)); // From cache

// SOLUTION 2: Function Composition
function compose(...functions) {
    return function(input) {
        return functions.reduceRight((value, fn) => {
            return fn(value);
        }, input);
    };
}

function pipe(...functions) {
    return function(input) {
        return functions.reduce((value, fn) => {
            return fn(value);
        }, input);
    };
}

// Async versions
function composeAsync(...functions) {
    return async function(input) {
        let result = input;
        
        for (let i = functions.length - 1; i >= 0; i--) {
            const fn = functions[i];
            result = await (typeof result.then === 'function' ? result.then(fn) : fn(result));
        }
        
        return result;
    };
}

function pipeAsync(...functions) {
    return async function(input) {
        let result = input;
        
        for (const fn of functions) {
            result = await (typeof result.then === 'function' ? result.then(fn) : fn(result));
        }
        
        return result;
    };
}

// Usage
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const composed = compose(subtract3, multiply2, add5);
console.log('Compose:', composed(10)); // ((10 + 5) * 2) - 3 = 27

const piped = pipe(add5, multiply2, subtract3);
console.log('Pipe:', piped(10)); // ((10 + 5) * 2) - 3 = 27

// Async example
const asyncAdd = async (x) => x + 5;
const asyncMultiply = async (x) => x * 2;

const asyncPipeline = pipeAsync(asyncAdd, asyncMultiply);
asyncPipeline(10).then(console.log); // 30

// SOLUTION 3: Observable Pattern
function createObservable(initialValue) {
    let value = initialValue;
    let observers = new Set();
    let completed = false;
    let error = null;
    
    function notifyObservers() {
        if (completed) return;
        
        observers.forEach(observer => {
            try {
                observer.next(value);
            } catch (err) {
                console.error('Observer error:', err);
            }
        });
    }
    
    return {
        subscribe: function(observer) {
            if (completed) {
                throw new Error('Observable is completed');
            }
            
            if (typeof observer === 'function') {
                observer = { next: observer };
            }
            
            observers.add(observer);
            
            // Send current value to new subscriber
            if (value !== undefined) {
                try {
                    observer.next(value);
                } catch (err) {
                    console.error('Initial value error:', err);
                }
            }
            
            // Return unsubscribe function
            return () => {
                observers.delete(observer);
            };
        },
        
        next: function(newValue) {
            if (completed) {
                throw new Error('Observable is completed');
            }
            
            value = newValue;
            notifyObservers();
        },
        
        complete: function() {
            completed = true;
            observers.forEach(observer => {
                if (observer.complete) {
                    try {
                        observer.complete();
                    } catch (err) {
                        console.error('Complete error:', err);
                    }
                }
            });
            observers.clear();
        },
        
        error: function(err) {
            error = err;
            observers.forEach(observer => {
                if (observer.error) {
                    try {
                        observer.error(err);
                    } catch (e) {
                        console.error('Error notification error:', e);
                    }
                }
            });
            observers.clear();
        },
        
        getValue: function() {
            return value;
        },
        
        map: function(transformFn) {
            const mapped = createObservable(transformFn(value));
            
            const unsubscribe = this.subscribe({
                next: (newValue) => {
                    mapped.next(transformFn(newValue));
                },
                error: (err) => mapped.error(err),
                complete: () => mapped.complete()
            });
            
            // Clean up when mapped observable has no subscribers
            let mappedSubscribers = 0;
            const mappedUnsubscribe = mapped.subscribe({
                next: () => {},
                complete: () => unsubscribe()
            });
            
            return {
                subscribe: function(observer) {
                    mappedSubscribers++;
                    const subscription = mapped.subscribe(observer);
                    
                    return () => {
                        subscription();
                        mappedSubscribers--;
                        if (mappedSubscribers === 0) {
                            mappedUnsubscribe();
                        }
                    };
                }
            };
        },
        
        filter: function(predicateFn) {
            const filtered = createObservable(predicateFn(value) ? value : undefined);
            
            const unsubscribe = this.subscribe({
                next: (newValue) => {
                    if (predicateFn(newValue)) {
                        filtered.next(newValue);
                    }
                },
                error: (err) => filtered.error(err),
                complete: () => filtered.complete()
            });
            
            return filtered;
        },
        
        // Get subscriber count (for debugging)
        _getObserverCount: function() {
            return observers.size;
        }
    };
}

// Usage
const observable = createObservable(0);

const unsubscribe1 = observable.subscribe({
    next: value => console.log('Observer 1:', value),
    complete: () => console.log('Observer 1 completed'),
    error: err => console.error('Observer 1 error:', err)
});

const unsubscribe2 = observable.subscribe(value => {
    console.log('Observer 2:', value);
});

observable.next(1);
observable.next(2);

// Transformations
const doubled = observable.map(x => x * 2);
doubled.subscribe(value => console.log('Doubled:', value));

const evenOnly = observable.filter(x => x % 2 === 0);
evenOnly.subscribe(value => console.log('Even:', value));

observable.next(3);
observable.next(4);

unsubscribe1();
unsubscribe2();

observable.complete();`,
            hint: "For memoization, consider edge cases like object arguments, cache expiration, and memory limits. For observables, think about cleanup and preventing memory leaks from forgotten subscriptions."
        },
        {
            title: "Real-world Closure Systems",
            description: "Build complete systems using closures for state management and architecture",
            difficulty: "Advanced",
            starterCode: `// DESIGN A STATE MANAGEMENT SYSTEM WITH CLOSURES

// Requirements:
// 1. Store management (like Redux/Vuex)
// 2. State immutability
// 3. Middleware support
// 4. Time travel debugging
// 5. Subscription system
// 6. Plugin architecture

// TASKS:
// 1. Create store with getState, dispatch, subscribe
// 2. Implement reducer pattern
// 3. Add middleware chain
// 4. Enable time travel with undo/redo
// 5. Add plugin system
// 6. Create dev tools integration`,
            solution: `// SOLUTION: Advanced State Management System

// 1. Core Store Implementation
function createStore(reducer, initialState, enhancer) {
    if (typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, initialState);
    }
    
    let state = initialState;
    let listeners = [];
    let isDispatching = false;
    let history = {
        past: [],
        present: state,
        future: []
    };
    
    function getState() {
        if (isDispatching) {
            throw new Error('Cannot call getState while dispatching');
        }
        return state;
    }
    
    function dispatch(action) {
        if (isDispatching) {
            throw new Error('Cannot dispatch while dispatching');
        }
        
        if (typeof action !== 'object' || action === null) {
            throw new Error('Actions must be plain objects');
        }
        
        if (typeof action.type === 'undefined') {
            throw new Error('Actions must have a type property');
        }
        
        try {
            isDispatching = true;
            
            // Add to history for undo/redo
            history.past.push(state);
            history.future = [];
            
            // Apply reducer
            state = reducer(state, action);
            history.present = state;
            
        } finally {
            isDispatching = false;
        }
        
        // Notify listeners
        const listenersToCall = listeners.slice();
        listenersToCall.forEach(listener => {
            try {
                listener();
            } catch (error) {
                console.error('Listener error:', error);
            }
        });
        
        return action;
    }
    
    function subscribe(listener) {
        if (isDispatching) {
            throw new Error('Cannot subscribe while dispatching');
        }
        
        if (typeof listener !== 'function') {
            throw new Error('Listener must be a function');
        }
        
        let isSubscribed = true;
        listeners.push(listener);
        
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            
            if (isDispatching) {
                throw new Error('Cannot unsubscribe while dispatching');
            }
            
            isSubscribed = false;
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }
    
    function replaceReducer(nextReducer) {
        reducer = nextReducer;
        dispatch({ type: '@@redux/REPLACE' });
    }
    
    // Time travel functionality
    function canUndo() {
        return history.past.length > 0;
    }
    
    function canRedo() {
        return history.future.length > 0;
    }
    
    function undo() {
        if (!canUndo()) return false;
        
        const previous = history.past.pop();
        history.future.unshift(state);
        state = previous;
        history.present = state;
        
        notifyListeners();
        return true;
    }
    
    function redo() {
        if (!canRedo()) return false;
        
        const next = history.future.shift();
        history.past.push(state);
        state = next;
        history.present = state;
        
        notifyListeners();
        return true;
    }
    
    function jumpToState(index) {
        if (index < 0 || index >= history.past.length + 1 + history.future.length) {
            return false;
        }
        
        const totalHistory = [...history.past, history.present, ...history.future];
        const newState = totalHistory[index];
        
        history.past = totalHistory.slice(0, index);
        history.present = newState;
        history.future = totalHistory.slice(index + 1);
        
        state = newState;
        notifyListeners();
        return true;
    }
    
    function getHistory() {
        return {
            past: [...history.past],
            present: history.present,
            future: [...history.future]
        };
    }
    
    function notifyListeners() {
        listeners.forEach(listener => {
            try {
                listener();
            } catch (error) {
                console.error('Listener error:', error);
            }
        });
    }
    
    // Plugin system
    const plugins = new Map();
    
    function registerPlugin(name, plugin) {
        if (plugins.has(name)) {
            throw new Error(\`Plugin "\${name}" already registered\`);
        }
        
        if (typeof plugin !== 'object' || plugin === null) {
            throw new Error('Plugin must be an object');
        }
        
        if (typeof plugin.init === 'function') {
            plugin.init({ getState, dispatch, subscribe });
        }
        
        plugins.set(name, plugin);
    }
    
    function getPlugin(name) {
        return plugins.get(name);
    }
    
    function removePlugin(name) {
        const plugin = plugins.get(name);
        if (plugin && typeof plugin.cleanup === 'function') {
            plugin.cleanup();
        }
        plugins.delete(name);
    }
    
    // Dispatch initial action to set up initial state
    dispatch({ type: '@@redux/INIT' });
    
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer,
        
        // Time travel
        canUndo,
        canRedo,
        undo,
        redo,
        jumpToState,
        getHistory,
        
        // Plugins
        registerPlugin,
        getPlugin,
        removePlugin,
        
        // Dev tools integration
        __devTools: {
            getState,
            dispatch,
            subscribe,
            getHistory
        }
    };
}

// 2. Middleware System
function applyMiddleware(...middlewares) {
    return function(createStore) {
        return function(reducer, initialState) {
            const store = createStore(reducer, initialState);
            
            let dispatch = store.dispatch;
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args) => dispatch(action, ...args)
            };
            
            const chain = middlewares.map(middleware => middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            
            return {
                ...store,
                dispatch
            };
        };
    };
}

// Common middleware examples
function loggerMiddleware({ getState }) {
    return next => action => {
        console.group(\`Action: \${action.type}\`);
        console.log('Previous state:', getState());
        console.log('Action:', action);
        
        const result = next(action);
        
        console.log('Next state:', getState());
        console.groupEnd();
        
        return result;
    };
}

function thunkMiddleware({ getState, dispatch }) {
    return next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (action instanceof Promise) {
            return action.then(dispatch);
        }
        
        if (action.payload instanceof Promise) {
            const { type, payload, ...rest } = action;
            
            dispatch({
                type: \`\${type}_PENDING\`,
                ...rest
            });
            
            return payload.then(
                result => dispatch({
                    type: \`\${type}_FULFILLED\`,
                    payload: result,
                    ...rest
                }),
                error => dispatch({
                    type: \`\${type}_REJECTED\`,
                    payload: error,
                    error: true,
                    ...rest
                })
            );
        }
        
        return next(action);
    };
}

// 3. Reducer utilities
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    
    return function combination(state = {}, action) {
        let hasChanged = false;
        const nextState = {};
        
        for (const key of reducerKeys) {
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        
        hasChanged = hasChanged || reducerKeys.length !== Object.keys(state).length;
        
        return hasChanged ? nextState : state;
    };
}

// 4. Action creators
function createAction(type, payloadCreator = p => p) {
    const actionCreator = (...args) => ({
        type,
        payload: payloadCreator(...args)
    });
    
    actionCreator.toString = () => type;
    actionCreator.type = type;
    
    return actionCreator;
}

function createAsyncAction(type, payloadCreator) {
    const pending = createAction(\`\${type}_PENDING\`);
    const fulfilled = createAction(\`\${type}_FULFILLED\`, payloadCreator);
    const rejected = createAction(\`\${type}_REJECTED\`, error => error);
    
    return Object.assign(
        (...args) => ({
            type,
            payload: Promise.resolve(payloadCreator(...args))
        }),
        { pending, fulfilled, rejected, type }
    );
}

// 5. Example usage: Todo Application
// Reducers
function todosReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }];
            
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
            
        default:
            return state;
    }
}

function visibilityFilterReducer(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

// Actions
const addTodo = createAction('ADD_TODO');
const toggleTodo = createAction('TOGGLE_TODO');
const removeTodo = createAction('REMOVE_TODO');
const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER');

// Async action example
const fetchTodos = createAsyncAction(
    'FETCH_TODOS',
    () => fetch('/api/todos').then(res => res.json())
);

// 6. Create store with middleware
const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunkMiddleware, promiseMiddleware, loggerMiddleware)
);

// 7. Plugin: LocalStorage persistence
const localStoragePlugin = {
    init({ getState, subscribe }) {
        // Load from localStorage
        const saved = localStorage.getItem('redux_state');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Would need to replace state here
                console.log('Loaded state from localStorage:', parsed);
            } catch (error) {
                console.error('Failed to load state:', error);
            }
        }
        
        // Save to localStorage on changes
        const unsubscribe = subscribe(() => {
            const state = getState();
            localStorage.setItem('redux_state', JSON.stringify(state));
        });
        
        // Store unsubscribe for cleanup
        this.unsubscribe = unsubscribe;
    },
    
    cleanup() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        localStorage.removeItem('redux_state');
    }
};

store.registerPlugin('localStorage', localStoragePlugin);

// 8. Usage example
console.log('Initial state:', store.getState());

store.dispatch(addTodo('Learn closures'));
store.dispatch(addTodo('Master JavaScript'));
store.dispatch(toggleTodo(store.getState().todos[0].id));

console.log('State after actions:', store.getState());

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
    console.log('State changed:', store.getState());
});

// Time travel
store.dispatch(addTodo('Try time travel'));
console.log('Can undo?', store.canUndo()); // true

store.undo();
console.log('After undo:', store.getState());

store.redo();
console.log('After redo:', store.getState());

// Clean up
unsubscribe();
store.removePlugin('localStorage');`,
            hint: "Think about separation of concerns: core store logic, middleware processing, time travel, and plugins should be independent. Use closures to encapsulate state and provide controlled access through APIs."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Closures Practice Area\nconsole.log("Master JavaScript closures...");`);
        setOutput('');
        setClosureChain({
            levels: [
                { level: 'Global', variables: ['globalVar'] },
                { level: 'outer()', variables: ['outerVar'], captured: ['globalVar'] },
                { level: 'inner()', variables: ['innerVar'], captured: ['outerVar', 'globalVar'] },
                { level: 'innermost()', variables: ['innermostVar'], captured: ['innerVar', 'outerVar', 'globalVar'] }
            ],
            currentExecution: null
        });
    };

    const patterns = [
        {
            name: "Data Privacy",
            code: `function createCounter() {\n  let count = 0;\n  return {\n    increment() { count++; },\n    getCount() { return count; }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\nconsole.log(counter.getCount()); // 1\nconsole.log(counter.count); // undefined`,
            description: "Encapsulate private state"
        },
        {
            name: "Function Factory",
            code: `function createMultiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = createMultiplier(2);\nconsole.log(double(5)); // 10`,
            description: "Create specialized functions"
        },
        {
            name: "Memoization",
            code: `function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) return cache[key];\n    return cache[key] = fn(...args);\n  };\n}`,
            description: "Cache function results"
        },
        {
            name: "Module Pattern",
            code: `const Module = (function() {\n  let privateVar = 'secret';\n  \n  function privateMethod() {\n    return privateVar;\n  }\n  \n  return {\n    publicMethod() {\n      return privateMethod();\n    }\n  };\n})();`,
            description: "Create self-contained modules"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson19" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 3: Advanced</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 19: Closures</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Closures Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Understand and master closures - one of JavaScript's most powerful features.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <Grid className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'playground', 'visualizer'].map((tab) => (
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
                            {/* Left Column: Content */}
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <Eye className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Closures: Functions with Memory
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Closures are functions that remember the environment in which they were created. They capture variables from their outer scope and maintain access to them, even after the outer function has finished executing.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Lock className="w-4 h-4" /> Key Concepts
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Lexical Scoping:</strong> Functions remember where they were born</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Scope Chain:</strong> Nested access to variables</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Data Privacy:</strong> Truly private variables</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Factory className="w-4 h-4" /> Common Uses
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Module Pattern:</strong> Before ES6 modules</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Function Factories:</strong> Specialized functions</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                    <span><strong>Memoization:</strong> Performance optimization</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        How Closures Work: A Simple Example
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h3 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Step 1: Create Closure</h3>
                                            <pre className="text-sm font-mono text-slate-800 dark:text-slate-400">
                                                {`function outer() {
    const secret = "I'm hidden!";
    let count = 0;
    
    return function inner() {
        count++;
        return \`\${secret} (accessed \${count} times)\`;
    };
}`}
                                            </pre>
                                        </div>

                                        <div className="flex justify-center">
                                            <ArrowRight className="w-6 h-6 text-yellow-500" />
                                        </div>

                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">Step 2: Use Closure</h3>
                                            <pre className="text-sm font-mono text-green-800 dark:text-green-300">
                                                {`const getSecret = outer();
// outer() has finished executing here

console.log(getSecret()); 
// "I'm hidden! (accessed 1 times)"

console.log(getSecret());
// "I'm hidden! (accessed 2 times)"

// secret and count are still accessible!
// The inner function remembers them.`}
                                            </pre>
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <strong>Magic:</strong> The inner function maintains a reference to the variables from its birth environment. Even though <code>outer()</code> has finished executing, the closure keeps those variables alive and accessible.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">closures-demo.js</span>
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

                                    {/* Closure Chain Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Layers className="w-4 h-4 text-blue-400" />
                                            <span className="text-xs font-semibold text-slate-400">Closure Scope Chain</span>
                                        </div>

                                        <div className="space-y-2">
                                            {closureChain.levels.map((level, idx) => (
                                                <div key={idx} className={`p-2 rounded border ${closureChain.currentExecution === level.level ? 'border-blue-500 bg-blue-900/20' : 'border-slate-700'}`}>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-medium text-slate-300">{level.level}</span>
                                                        {closureChain.currentExecution === level.level && (
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                        )}
                                                    </div>
                                                    <div className="mt-1 text-xs text-slate-400">
                                                        Variables: {level.variables.join(', ')}
                                                        {level.captured && level.captured.length > 0 && (
                                                            <div className="mt-0.5">
                                                                Captured: {level.captured.join(', ')}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-3 text-xs text-slate-500">
                                            Shows nested scope chain and variable capture
                                        </div>
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

                    {/* Tab Content: Concepts */}
                    {activeTab === 'concepts' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Closure Concept Explorer
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
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Visual Flow</h4>
                                                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                                            <p className="font-mono text-sm text-slate-700 dark:text-slate-300">
                                                                {concept.visual}
                                                            </p>
                                                        </div>
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
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Visualize Pattern</h4>
                                                        <button
                                                            onClick={() => {
                                                                // Update closure chain visualization
                                                                setClosureChain(prev => ({
                                                                    ...prev,
                                                                    currentExecution: concept.name.includes('Module') ? 'Module' :
                                                                        concept.name.includes('Factory') ? 'Factory' :
                                                                            'Closure'
                                                                }));
                                                            }}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            Visualize Scope Chain
                                                        </button>
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Closure Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <Eye className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <div className="text-xs text-slate-500 mt-1">{pattern.description}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Basic closure\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment() { count++; },\n    getCount() { return count; }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\nconsole.log(counter.getCount());`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Counter
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Function factory\nfunction createMultiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\nconsole.log(double(5), triple(5));`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Function Factory
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Module pattern\nconst Calculator = (function() {\n  let memory = 0;\n  \n  function add(a, b) {\n    return a + b;\n  }\n  \n  return {\n    add,\n    store(value) { memory = value; },\n    recall() { return memory; }\n  };\n})();\n\nconsole.log(Calculator.add(2, 3));`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Module Pattern
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Debouncing\nfunction debounce(fn, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst search = debounce((query) => {\n  console.log('Searching:', query);\n}, 300);\n\nsearch('hello');`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Debouncing
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Closure Principles</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <Lock className="w-4 h-4 text-blue-500 mt-0.5" />
                                            <span><strong>Encapsulation:</strong> Truly private state</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Layers className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span><strong>Lexical Scoping:</strong> Functions remember birth environment</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Factory className="w-4 h-4 text-purple-500 mt-0.5" />
                                            <span><strong>Factory Pattern:</strong> Create specialized functions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Timer className="w-4 h-4 text-orange-500 mt-0.5" />
                                            <span><strong>Performance:</strong> Memoization, debouncing, throttling</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">closures-playground.js</span>
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

                                    {/* Closure Chain Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Layers className="w-3 h-3 text-blue-400" />
                                            <span className="text-xs text-slate-400">Scope Chain:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {closureChain.levels.map((level, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded">
                                                    {level.level}
                                                </span>
                                            ))}
                                        </div>
                                        {closureChain.currentExecution && (
                                            <div className="mt-1 text-xs text-blue-300">
                                                Executing: {closureChain.currentExecution}
                                            </div>
                                        )}
                                    </div>

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

                    {/* Tab Content: Visualizer */}
                    {activeTab === 'visualizer' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Closure Scope Chain Visualizer
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Closure Creation & Execution
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Basic Closure Creation</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`function createSecretKeeper(secret) {\n  return {\n    getSecret() { return secret; },\n    setSecret(newSecret) { secret = newSecret; }\n  };\n}\n\nconst keeper = createSecretKeeper('initial');\nconsole.log(keeper.getSecret()); // 'initial'\nkeeper.setSecret('updated');\nconsole.log(keeper.getSecret()); // 'updated'`);
                                                            runCode();
                                                        }}
                                                        className="w-full p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                    >
                                                        <div className="text-sm font-medium">Closure with mutable state</div>
                                                        <div className="text-xs text-slate-500 mt-1">Secret variable captured and maintained</div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">The Classic Loop Problem</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`// Problem: All log 3\nfor (var i = 1; i <= 3; i++) {\n  setTimeout(() => console.log('var i =', i), 100);\n}\n\n// Solution 1: Use let\nfor (let i = 1; i <= 3; i++) {\n  setTimeout(() => console.log('let i =', i), 100);\n}\n\n// Solution 2: IIFE\nfor (var i = 1; i <= 3; i++) {\n  (function(index) {\n    setTimeout(() => console.log('IIFE i =', index), 100);\n  })(i);\n}`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Loop closure problem and solutions</code>
                                                    </button>
                                                    <div className="text-sm text-green-600 dark:text-green-400">
                                                        Key insight: Closures capture variables, not values
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Multiple Independent Closures</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`function createCounter(name) {\n  let count = 0;\n  return {\n    increment() {\n      count++;\n      console.log(\`\${name}: \${count}\`);\n    }\n  };\n}\n\nconst counter1 = createCounter('Counter 1');\nconst counter2 = createCounter('Counter 2');\n\ncounter1.increment(); // Counter 1: 1\ncounter1.increment(); // Counter 1: 2\ncounter2.increment(); // Counter 2: 1`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Each closure has independent state</code>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Interactive Scope Chain
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                    <div className="font-bold text-blue-700 dark:text-blue-300">Closure Created</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Function remembers outer scope</div>
                                                </div>
                                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                    <div className="font-bold text-green-700 dark:text-green-300">Variables Captured</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">By reference, not value</div>
                                                </div>
                                            </div>

                                            {/* Interactive Scope Builder */}
                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => {
                                                        setClosureChain({
                                                            levels: [
                                                                { level: 'Global', variables: ['globalCounter'], captured: [] },
                                                                { level: 'createCounter()', variables: ['count', 'name'], captured: [] },
                                                                { level: 'increment()', variables: [], captured: ['count', 'name', 'globalCounter'] }
                                                            ],
                                                            currentExecution: 'createCounter()'
                                                        });
                                                    }}
                                                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                                >
                                                    Visualize Counter Closure
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setClosureChain({
                                                            levels: [
                                                                { level: 'Global', variables: ['multipliers'], captured: [] },
                                                                { level: 'createMultiplier()', variables: ['factor'], captured: [] },
                                                                { level: 'multiplier()', variables: ['number'], captured: ['factor', 'multipliers'] }
                                                            ],
                                                            currentExecution: 'multiplier()'
                                                        });
                                                    }}
                                                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                                                >
                                                    Visualize Function Factory
                                                </button>
                                            </div>
                                        </div>

                                        {/* Scope Chain Visualization */}
                                        <div className="p-4 bg-slate-900 rounded-lg mb-4">
                                            <div className="text-sm text-slate-400 mb-2">Current Scope Chain:</div>
                                            <div className="space-y-2">
                                                {closureChain.levels.map((level, idx) => (
                                                    <div key={idx} className={`p-2 rounded border ${closureChain.currentExecution === level.level ? 'border-blue-500 bg-blue-900/20' : 'border-slate-700'}`}>
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${closureChain.currentExecution === level.level ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'}`}></div>
                                                            <span className={`text-sm ${closureChain.currentExecution === level.level ? 'text-blue-300' : 'text-slate-300'}`}>
                                                                {level.level}
                                                            </span>
                                                        </div>
                                                        {level.variables.length > 0 && (
                                                            <div className="ml-4 mt-1 text-xs text-slate-400">
                                                                Variables: {level.variables.join(', ')}
                                                            </div>
                                                        )}
                                                        {level.captured && level.captured.length > 0 && (
                                                            <div className="ml-4 mt-1 text-xs text-slate-500">
                                                                Captured: {level.captured.join(', ')}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Test Your Closure Code</h4>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Write closure code to visualize scope chain..."
                                            />
                                            <div className="flex gap-2">
                                                <button onClick={runCode} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                                    Visualize Scope
                                                </button>
                                                <button onClick={resetCode} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Closure Best Practices</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Use for encapsulation:</strong> Truly private variables
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Watch memory:</strong> Closures can cause leaks
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Use let in loops:</strong> Avoids classic closure problem
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Consider IIFEs:</strong> For isolated scope when needed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson18" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Classes & OOP</span>
                        </a>
                        <a href="/lesson20" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Design Patterns</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}