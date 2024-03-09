import React, { useState } from 'react';
import {
    AlertCircle, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw, Shield,
    Hash, Filter, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Split, Merge, BookOpen, Brain,
    Box, Zap, Cpu, FunctionSquare, GitBranch,
    Workflow, Palette, Target, Puzzle, Map,
    AlertTriangle, Bug, XCircle, CheckCircle,
    Activity, LifeBuoy, AlertOctagon, Bell,
    Lock, Unlock, AlertHexagon, FileWarning,
    Feather, Anchor, ShieldCheck, AlertSquare
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson12() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === ERROR HANDLING FUNDAMENTALS ===
// 1. Types of Errors in JavaScript
// Syntax Errors - Occur during parsing
// const x = ; // SyntaxError

// Runtime Errors - Occur during execution
const obj = null;
// console.log(obj.property); // TypeError: Cannot read properties of null

// Logical Errors - Code runs but produces wrong results
function calculateArea(width, height) {
    return width * height; // What if width or height is negative?
}

// === TRY-CATCH-FINALLY ===
// 2. Basic Error Handling
try {
    // Code that might throw an error
    const result = riskyOperation();
    console.log('Success:', result);
} catch (error) {
    // Handle the error
    console.error('Error occurred:', error.message);
} finally {
    // Always executes
    console.log('Cleanup complete');
}

// 3. Catching Specific Errors
try {
    const data = JSON.parse('invalid json');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('JSON parsing error:', error.message);
    } else if (error instanceof TypeError) {
        console.log('Type error:', error.message);
    } else {
        console.log('Unknown error:', error);
    }
}

// === THROWING ERRORS ===
// 4. Creating Custom Errors
function validateAge(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    if (age > 150) {
        throw new RangeError('Age seems unrealistic');
    }
    if (typeof age !== 'number') {
        throw new TypeError('Age must be a number');
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    console.log('Validation error:', error.name, '-', error.message);
}

// 5. Custom Error Classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
        this.timestamp = new Date();
    }
}

try {
    throw new ValidationError('Email is required', 'email');
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(\`\${error.name}: \${error.message} (field: \${error.field})\`);
    }
}

// === ERROR OBJECT PROPERTIES ===
// 6. Understanding Error Objects
try {
    undefinedFunction();
} catch (err) {
    console.log('Error name:', err.name); // ReferenceError
    console.log('Error message:', err.message);
    console.log('Stack trace:', err.stack);
    console.log('Constructor:', err.constructor.name);
}

// === PROMISE ERROR HANDLING ===
// 7. Async Error Handling
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch failed:', error.message);
        return { error: error.message };
    }
}

// Promise error handling
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.log('Promise error:', error.message));

// === FINALLY IN PROMISES ===
// 8. Promise.finally()
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Request completed'));

// === GLOBAL ERROR HANDLING ===
// 9. Global Error Handlers
window.onerror = function(message, source, lineno, colno, error) {
    console.log('Global error:', { message, source, lineno, error });
    return true; // Prevent default browser error handling
};

// Unhandled Promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.log('Unhandled rejection:', event.reason);
    event.preventDefault(); // Prevent default console error
});

// === BEST PRACTICES ===
// 10. Defensive Programming
function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch {
        return null; // Return fallback value
    }
}

function divideSafely(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [errorType, setErrorType] = useState('syntax');

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

    // ERROR HANDLING CONCEPTS
    const concepts = [
        {
            category: "Basic Error Handling",
            concepts: [
                {
                    name: "try-catch Block",
                    icon: <Shield className="w-4 h-4 text-blue-500" />,
                    description: "Try executing code, catch any errors that occur",
                    syntax: "try { code } catch(error) { handle }",
                    example: "try { riskyOp(); } catch(err) { console.error(err); }",
                    useCase: "When code might throw runtime errors"
                },
                {
                    name: "finally Block",
                    icon: <CheckCircle className="w-4 h-4 text-green-500" />,
                    description: "Code that always executes regardless of error",
                    syntax: "try {} catch {} finally { cleanup }",
                    example: "try { openFile(); } finally { closeFile(); }",
                    useCase: "Resource cleanup (files, connections, etc.)"
                },
                {
                    name: "throw Statement",
                    icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
                    description: "Manually throw an error or exception",
                    syntax: "throw new Error('message');",
                    example: "throw new ValidationError('Invalid input');",
                    useCase: "When validation fails or exceptional condition occurs"
                },
                {
                    name: "Error Object",
                    icon: <Bug className="w-4 h-4 text-purple-500" />,
                    description: "Built-in Error object with name, message, stack",
                    syntax: "new Error(message)",
                    example: "const err = new Error('Something went wrong');",
                    useCase: "Creating custom error messages"
                }
            ]
        },
        {
            category: "Error Types",
            concepts: [
                {
                    name: "SyntaxError",
                    icon: <XCircle className="w-4 h-4 text-red-400" />,
                    description: "Error in JavaScript syntax (parsing error)",
                    syntax: "const x = ; // SyntaxError",
                    example: "JSON.parse('invalid json');",
                    useCase: "Catching parsing errors in JSON or code"
                },
                {
                    name: "TypeError",
                    icon: <AlertOctagon className="w-4 h-4 text-orange-500" />,
                    description: "When value is not of expected type",
                    syntax: "null.property // TypeError",
                    example: "undefinedFunction();",
                    useCase: "Preventing property access on null/undefined"
                },
                {
                    name: "ReferenceError",
                    icon: <FileWarning className="w-4 h-4 text-yellow-500" />,
                    description: "When trying to use undefined variable",
                    syntax: "console.log(undefinedVar);",
                    example: "const x = y + z; // if y or z not defined",
                    useCase: "Catching undefined variable references"
                },
                {
                    name: "RangeError",
                    icon: <AlertHexagon className="w-4 h-4 text-pink-500" />,
                    description: "When number is outside allowed range",
                    syntax: "new Array(-1); // RangeError",
                    example: "num.toFixed(101); // 0-100 range",
                    useCase: "Validating numeric ranges"
                }
            ]
        },
        {
            category: "Custom Errors",
            concepts: [
                {
                    name: "Custom Error Class",
                    icon: <ShieldCheck className="w-4 h-4 text-teal-500" />,
                    description: "Extend Error class for specific error types",
                    syntax: "class CustomError extends Error {}",
                    example: "class ValidationError extends Error {}",
                    useCase: "Creating domain-specific error types"
                },
                {
                    name: "Error Inheritance",
                    icon: <GitBranch className="w-4 h-4 text-indigo-500" />,
                    description: "Creating error hierarchy with inheritance",
                    syntax: "class NetworkError extends Error {}",
                    example: "class TimeoutError extends NetworkError {}",
                    useCase: "Organizing related error types"
                },
                {
                    name: "Error with Metadata",
                    icon: <Activity className="w-4 h-4 text-blue-600" />,
                    description: "Adding custom properties to error objects",
                    syntax: "error.code = 'ERR_INVALID';",
                    example: "error.statusCode = 404; error.timestamp = new Date();",
                    useCase: "Providing additional context for error handling"
                },
                {
                    name: "instanceof Checking",
                    icon: <Target className="w-4 h-4 text-green-600" />,
                    description: "Checking error type with instanceof",
                    syntax: "if (error instanceof CustomError)",
                    example: "if (error instanceof ValidationError)",
                    useCase: "Handling different error types differently"
                }
            ]
        },
        {
            category: "Async Error Handling",
            concepts: [
                {
                    name: "try-catch with async/await",
                    icon: <Zap className="w-4 h-4 text-yellow-600" />,
                    description: "Error handling in async functions",
                    syntax: "async function() { try { await op(); } catch {} }",
                    example: "try { await fetch(url); } catch {}",
                    useCase: "Handling errors in asynchronous operations"
                },
                {
                    name: "Promise.catch()",
                    icon: <LifeBuoy className="w-4 h-4 text-red-600" />,
                    description: "Catching errors in promise chains",
                    syntax: "promise.then().catch(error => {})",
                    example: "fetch(url).then().catch(handleError);",
                    useCase: "Error handling in promise-based APIs"
                },
                {
                    name: "Promise.finally()",
                    icon: <Feather className="w-4 h-4 text-purple-600" />,
                    description: "Cleanup after promise settles",
                    syntax: "promise.then().catch().finally()",
                    example: "fetch(url).finally(cleanup);",
                    useCase: "Cleanup after async operations"
                },
                {
                    name: "Multiple Async Errors",
                    icon: <Layers className="w-4 h-4 text-orange-600" />,
                    description: "Handling errors in multiple async operations",
                    syntax: "Promise.all([p1, p2]).catch()",
                    example: "Promise.allSettled([promises]);",
                    useCase: "When multiple async operations can fail"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Global Error Handler",
                    icon: <Bell className="w-4 h-4 text-red-700" />,
                    description: "Catch unhandled errors globally",
                    syntax: "window.onerror = function() {}",
                    example: "window.addEventListener('error', handler);",
                    useCase: "Logging all uncaught errors"
                },
                {
                    name: "Error Boundaries",
                    icon: <Anchor className="w-4 h-4 text-blue-700" />,
                    description: "Catch errors in component tree (React pattern)",
                    syntax: "class ErrorBoundary extends Component",
                    example: "ErrorBoundary for React components",
                    useCase: "Preventing entire app crash from component errors"
                },
                {
                    name: "Graceful Degradation",
                    icon: <AlertSquare className="w-4 h-4 text-green-700" />,
                    description: "Provide fallback when feature fails",
                    syntax: "try { feature(); } catch { fallback(); }",
                    example: "try { localStorage } catch { useCookies(); }",
                    useCase: "Maintaining functionality despite failures"
                },
                {
                    name: "Retry Pattern",
                    icon: <RefreshCw className="w-4 h-4 text-purple-700" />,
                    description: "Retry failed operations with backoff",
                    syntax: "function retry(operation, maxRetries)",
                    example: "retry(fetch, 3); // Retry 3 times",
                    useCase: "Network requests or unreliable operations"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Basic Error Handling Practice",
            description: "Practice try-catch blocks and error throwing",
            difficulty: "Beginner",
            starterCode: `// TASK 1: Safe Division Function
// Create a function divide(a, b) that:
// 1. Throws an error if b is 0
// 2. Throws a TypeError if a or b are not numbers
// 3. Returns the result of a / b otherwise

// TASK 2: JSON Parser with Error Handling
// Create a function safeParseJSON(jsonString) that:
// 1. Parses JSON string
// 2. Returns parsed object if valid
// 3. Returns null if invalid with console.error message

// TASK 3: Array Element Accessor
// Create a function getElement(arr, index) that:
// 1. Returns element at index
// 2. Throws RangeError if index out of bounds
// 3. Throws TypeError if arr is not array

// TASK 4: User Validation
// Create function validateUser(user) that checks:
// 1. user is an object
// 2. user.name exists and is string
// 3. user.age is number between 0-150
// Throw appropriate errors for each violation`,
            solution: `// SOLUTION 1: Safe Division
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Test division
try {
    console.log('10 / 2 =', divide(10, 2));
    console.log('10 / 0 =', divide(10, 0));
} catch (error) {
    console.log('Division error:', error.message);
}

// SOLUTION 2: Safe JSON Parser
function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('JSON parsing failed:', error.message);
        return null;
    }
}

console.log('Valid JSON:', safeParseJSON('{"name":"John"}'));
console.log('Invalid JSON:', safeParseJSON('invalid json'));

// SOLUTION 3: Safe Array Access
function getElement(arr, index) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (index < 0 || index >= arr.length) {
        throw new RangeError(\`Index \${index} is out of bounds (0-\${arr.length-1})\`);
    }
    return arr[index];
}

try {
    const arr = [10, 20, 30];
    console.log('Element at index 1:', getElement(arr, 1));
    console.log('Element at index 5:', getElement(arr, 5));
} catch (error) {
    console.log('Array access error:', error.message);
}

// SOLUTION 4: User Validation
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateUser(user) {
    if (typeof user !== 'object' || user === null) {
        throw new ValidationError('User must be an object', 'user');
    }
    
    if (!user.name || typeof user.name !== 'string') {
        throw new ValidationError('Name is required and must be a string', 'name');
    }
    
    if (typeof user.age !== 'number') {
        throw new ValidationError('Age must be a number', 'age');
    }
    
    if (user.age < 0 || user.age > 150) {
        throw new ValidationError('Age must be between 0 and 150', 'age');
    }
    
    return true;
}

try {
    validateUser({ name: 'John', age: 25 });
    console.log('User validation passed');
    
    validateUser({ name: '', age: 25 });
} catch (error) {
    console.log(\`Validation failed: \${error.field} - \${error.message}\`);
}`,
            hint: "Use typeof and Array.isArray() for type checking. Create specific error types for different validation failures."
        },
        {
            title: "Async Error Handling & Custom Errors",
            description: "Practice error handling in asynchronous operations",
            difficulty: "Intermediate",
            starterCode: `// TASK 1: Fetch with Retry Logic
// Create function fetchWithRetry(url, retries = 3) that:
// 1. Fetches data from URL
// 2. Retries on network failure (up to retries times)
// 3. Throws error if all retries fail
// 4. Uses exponential backoff delay

// TASK 2: Custom Error Hierarchy
// Create error classes:
// 1. APIError extends Error (base API error)
// 2. NetworkError extends APIError (network issues)
// 3. TimeoutError extends NetworkError (request timeout)
// 4. NotFoundError extends APIError (404 errors)
// Each should have statusCode and timestamp

// TASK 3: Promise Error Aggregation
// Create function safePromiseAll(promises) that:
// 1. Takes array of promises
// 2. Returns array of results
// 3. If any promise rejects, collects all errors
// 4. Throws AggregateError with all errors

// TASK 4: Async Validation Chain
// Create async function validateOrder(order) that:
// 1. Validates order structure
// 2. Checks stock asynchronously
// 3. Validates payment asynchronously
// 4. Collects all validation errors before throwing`,
            solution: `// SOLUTION 1: Fetch with Retry
async function fetchWithRetry(url, retries = 3) {
    let lastError;
    
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            return await response.json();
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${i + 1} failed: \${error.message}\`);
            
            if (i < retries - 1) {
                // Exponential backoff: 1s, 2s, 4s...
                const delay = Math.pow(2, i) * 1000;
                console.log(\`Waiting \${delay}ms before retry...\`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw new Error(\`Failed after \${retries} retries: \${lastError.message}\`);
}

// Test (commented to avoid actual fetch)
// fetchWithRetry('https://api.example.com/data')
//     .then(data => console.log('Success:', data))
//     .catch(error => console.log('Failed:', error.message));

// SOLUTION 2: Custom Error Hierarchy
class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode || 500;
        this.timestamp = new Date();
    }
}

class NetworkError extends APIError {
    constructor(message) {
        super(message, 0);
        this.name = 'NetworkError';
    }
}

class TimeoutError extends NetworkError {
    constructor() {
        super('Request timeout');
        this.name = 'TimeoutError';
    }
}

class NotFoundError extends APIError {
    constructor(resource) {
        super(\`\${resource} not found\`, 404);
        this.name = 'NotFoundError';
    }
}

// Test custom errors
try {
    throw new NotFoundError('User');
} catch (error) {
    console.log(\`\${error.name}: \${error.message} (Status: \${error.statusCode})\`);
}

// SOLUTION 3: Safe Promise All
async function safePromiseAll(promises) {
    const results = [];
    const errors = [];
    
    for (let i = 0; i < promises.length; i++) {
        try {
            const result = await promises[i];
            results.push({ status: 'fulfilled', value: result });
        } catch (error) {
            errors.push({ status: 'rejected', reason: error, index: i });
            results.push({ status: 'rejected', reason: error });
        }
    }
    
    if (errors.length > 0) {
        const aggregateError = new AggregateError(
            errors.map(e => e.reason),
            \`\${errors.length} promise(s) rejected\`
        );
        aggregateError.errors = errors;
        throw aggregateError;
    }
    
    return results.map(r => r.value);
}

// Test safePromiseAll
const promises = [
    Promise.resolve(1),
    Promise.reject(new Error('Failed 1')),
    Promise.resolve(3),
    Promise.reject(new Error('Failed 2'))
];

safePromiseAll(promises)
    .then(results => console.log('All succeeded:', results))
    .catch(error => {
        console.log('Some failed:', error.message);
        console.log('Failed promises:', error.errors.length);
    });

// SOLUTION 4: Async Validation Chain
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

async function validateOrder(order) {
    const errors = [];
    
    // Sync validation
    if (!order || typeof order !== 'object') {
        errors.push(new ValidationError('Order must be an object', 'order'));
    }
    
    if (!order.items || !Array.isArray(order.items) || order.items.length === 0) {
        errors.push(new ValidationError('Order must have items', 'items'));
    }
    
    // Async validations
    try {
        await checkStock(order.items);
    } catch (error) {
        errors.push(new ValidationError(error.message, 'stock'));
    }
    
    try {
        await validatePayment(order.payment);
    } catch (error) {
        errors.push(new ValidationError(error.message, 'payment'));
    }
    
    // Throw all errors at once
    if (errors.length > 0) {
        const aggregateError = new AggregateError(
            errors,
            \`Order validation failed with \${errors.length} error(s)\`
        );
        aggregateError.validationErrors = errors;
        throw aggregateError;
    }
    
    return true;
}

// Mock async functions
async function checkStock(items) {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (Math.random() > 0.5) {
        throw new Error('Some items out of stock');
    }
}

async function validatePayment(payment) {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (!payment || !payment.method) {
        throw new Error('Payment method required');
    }
}

// Test validation
validateOrder({ items: ['item1'], payment: { method: 'card' } })
    .then(() => console.log('Order valid'))
    .catch(error => {
        console.log('Validation errors:');
        error.validationErrors?.forEach(err => {
            console.log(\`- \${err.field}: \${err.message}\`);
        });
    });`,
            hint: "Use async/await for cleaner async error handling. AggregateError can collect multiple errors. Exponential backoff improves retry success."
        },
        {
            title: "Advanced: Global Handlers & Production Patterns",
            description: "Implement production-ready error handling patterns",
            difficulty: "Advanced",
            starterCode: `// TASK 1: Global Error Handler Setup
// 1. Set up window.onerror handler
// 2. Set up unhandledrejection handler
// 3. Create error reporting function
// 4. Implement error filtering (ignore specific errors)

// TASK 2: Error Boundary Pattern
// Create ErrorBoundary class that:
// 1. Catches errors in child components
// 2. Shows fallback UI when error occurs
// 3. Logs errors with context
// 4. Has reset capability

// TASK 3: Circuit Breaker Pattern
// Implement circuit breaker for unreliable operations:
// 1. Tracks failures
// 2. Opens circuit after threshold
// 3. Allows limited test requests when open
// 4. Closes circuit after success

// TASK 4: Error Monitoring Setup
// Create error monitoring utility that:
// 1. Captures errors with context
// 2. Adds user info and environment data
// 3. Batches and sends to monitoring service
// 4. Has offline support`,
            solution: `// SOLUTION 1: Global Error Handlers
class ErrorReporter {
    constructor() {
        this.ignoredErrors = [
            'ResizeObserver loop',
            'Script error',
            ' blocked by CORS'
        ];
        
        this.setupGlobalHandlers();
    }
    
    setupGlobalHandlers() {
        // Global sync errors
        window.onerror = (message, source, lineno, colno, error) => {
            if (this.shouldIgnoreError(message)) {
                return true;
            }
            
            this.reportError({
                type: 'global',
                message,
                source,
                lineno,
                colno,
                error: error?.stack,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent
            });
            
            return false; // Let default handler run
        };
        
        // Unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            event.preventDefault();
            
            this.reportError({
                type: 'unhandledRejection',
                reason: event.reason?.message || event.reason,
                stack: event.reason?.stack,
                timestamp: new Date().toISOString()
            });
            
            console.error('Unhandled promise rejection:', event.reason);
        });
        
        // Console error interception
        const originalConsoleError = console.error;
        console.error = (...args) => {
            this.reportError({
                type: 'consoleError',
                message: args.join(' '),
                timestamp: new Date().toISOString()
            });
            originalConsoleError.apply(console, args);
        };
    }
    
    shouldIgnoreError(message) {
        return this.ignoredErrors.some(ignored => 
            message && message.includes(ignored)
        );
    }
    
    reportError(errorData) {
        // In real app, send to error monitoring service
        console.log('Error reported:', errorData);
        
        // Example: Send to backend
        // fetch('/api/errors', {
        //     method: 'POST',
        //     body: JSON.stringify(errorData)
        // });
    }
}

// Initialize error reporter
const errorReporter = new ErrorReporter();

// SOLUTION 2: Error Boundary Pattern (React-like)
class ErrorBoundary {
    constructor(component) {
        this.component = component;
        this.hasError = false;
        this.error = null;
        this.errorInfo = null;
    }
    
    tryExecute() {
        try {
            return this.component();
        } catch (error) {
            this.hasError = true;
            this.error = error;
            this.errorInfo = {
                timestamp: new Date(),
                component: this.component.name || 'Anonymous'
            };
            
            // Log error
            console.error('Component error:', error, this.errorInfo);
            
            // Show fallback
            return this.renderFallback();
        }
    }
    
    renderFallback() {
        return \`
            <div class="error-boundary">
                <h3>Something went wrong</h3>
                <p>\${this.error?.message}</p>
                <button onclick="errorBoundary.reset()">Try Again</button>
            </div>
        \`;
    }
    
    reset() {
        this.hasError = false;
        this.error = null;
        this.errorInfo = null;
        console.log('Error boundary reset');
    }
    
    getErrorInfo() {
        return {
            hasError: this.hasError,
            error: this.error,
            info: this.errorInfo
        };
    }
}

// Example usage
function BuggyComponent() {
    throw new Error('Component crashed!');
}

const errorBoundary = new ErrorBoundary(BuggyComponent);
console.log('Error boundary output:', errorBoundary.tryExecute());

// SOLUTION 3: Circuit Breaker Pattern
class CircuitBreaker {
    constructor(request, options = {}) {
        this.request = request;
        this.state = 'CLOSED';
        this.failureCount = 0;
        this.nextAttempt = Date.now();
        
        this.options = {
            failureThreshold: 3,
            resetTimeout: 10000,
            halfOpenAttempts: 2,
            ...options
        };
    }
    
    async fire(...args) {
        if (this.state === 'OPEN') {
            if (this.nextAttempt <= Date.now()) {
                this.state = 'HALF_OPEN';
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const response = await this.request(...args);
            this.success();
            return response;
        } catch (error) {
            this.failure(error);
            throw error;
        }
    }
    
    success() {
        this.failureCount = 0;
        
        if (this.state === 'HALF_OPEN') {
            this.state = 'CLOSED';
        }
    }
    
    failure(error) {
        this.failureCount++;
        
        if (this.failureCount >= this.options.failureThreshold) {
            this.state = 'OPEN';
            this.nextAttempt = Date.now() + this.options.resetTimeout;
            console.log(\`Circuit breaker OPEN for \${this.options.resetTimeout}ms\`);
        }
        
        console.log(\`Failure \${this.failureCount}: \${error.message}\`);
    }
    
    getStatus() {
        return {
            state: this.state,
            failureCount: this.failureCount,
            nextAttempt: this.nextAttempt
        };
    }
}

// Example usage
const unreliableRequest = async () => {
    if (Math.random() > 0.5) {
        throw new Error('Request failed');
    }
    return 'Success';
};

const breaker = new CircuitBreaker(unreliableRequest);

// Test circuit breaker
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        breaker.fire()
            .then(res => console.log(\`Attempt \${i}: \${res}\`))
            .catch(err => console.log(\`Attempt \${i}: \${err.message}\`))
            .finally(() => console.log('Status:', breaker.getStatus()));
    }, i * 1000);
}

// SOLUTION 4: Error Monitoring Utility
class ErrorMonitor {
    constructor(options = {}) {
        this.queue = [];
        this.isSending = false;
        this.maxBatchSize = options.maxBatchSize || 10;
        this.sendInterval = options.sendInterval || 30000;
        
        // Start batch sending
        setInterval(() => this.sendBatch(), this.sendInterval);
        
        // Save on page unload
        window.addEventListener('beforeunload', () => this.sendBatchSync());
    }
    
    capture(error, context = {}) {
        const errorEvent = {
            id: this.generateId(),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            },
            context: {
                ...context,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                platform: navigator.platform
            },
            severity: this.determineSeverity(error)
        };
        
        this.queue.push(errorEvent);
        console.log('Error captured:', errorEvent);
        
        // Send immediately for high severity
        if (errorEvent.severity === 'high' && !this.isSending) {
            this.sendBatch();
        }
        
        return errorEvent.id;
    }
    
    determineSeverity(error) {
        if (error.name === 'TypeError' || error.name === 'ReferenceError') {
            return 'medium';
        }
        if (error.name === 'SyntaxError') {
            return 'high';
        }
        return 'low';
    }
    
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    async sendBatch() {
        if (this.queue.length === 0 || this.isSending) {
            return;
        }
        
        this.isSending = true;
        const batch = this.queue.splice(0, this.maxBatchSize);
        
        try {
            // In real app: send to your error tracking service
            console.log('Sending error batch:', batch);
            
            // Example: Send to backend
            // await fetch('/api/errors/batch', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ errors: batch })
            // });
            
            console.log(\`Successfully sent \${batch.length} errors\`);
        } catch (error) {
            console.error('Failed to send errors:', error);
            // Put batch back in queue
            this.queue.unshift(...batch);
        } finally {
            this.isSending = false;
        }
    }
    
    sendBatchSync() {
        // Synchronous send for page unload
        if (this.queue.length > 0) {
            navigator.sendBeacon?.('/api/errors/batch', JSON.stringify({
                errors: this.queue
            }));
            this.queue = [];
        }
    }
    
    getStats() {
        return {
            queued: this.queue.length,
            isSending: this.isSending
        };
    }
}

// Initialize error monitor
const errorMonitor = new ErrorMonitor();

// Example usage
try {
    throw new TypeError('Example type error');
} catch (error) {
    errorMonitor.capture(error, {
        userId: 'user123',
        action: 'checkout',
        page: 'checkout'
    });
}

console.log('Monitor stats:', errorMonitor.getStats());`,
            hint: "Global handlers should filter noise errors. Circuit breaker prevents cascading failures. Error monitoring should work offline."
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

    const generateErrorExample = (type) => {
        const examples = {
            syntax: `// Syntax Error Example\nconst x = ; // Missing value\nconsole.log('This will not run');`,
            type: `// Type Error Example\nconst obj = null;\nconsole.log(obj.property); // Cannot read property`,
            reference: `// Reference Error Example\nconsole.log(undefinedVariable); // Variable not defined`,
            range: `// Range Error Example\nconst arr = new Array(-1); // Invalid array length`,
            custom: `// Custom Error Example\nthrow new Error('Custom error message');`
        };
        return examples[type] || examples.syntax;
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson12" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 12: Error Handling</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Error Handling Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master robust error handling techniques from basic try-catch to production-grade patterns.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <Shield className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'playground', 'error-simulator'].map((tab) => (
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
                                            <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Why Error Handling Matters
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Proper error handling prevents application crashes, provides better user experience, and makes debugging easier. It's essential for production-ready applications.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                                            <h3 className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4" /> Without Error Handling
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                                                    <span>App crashes unexpectedly</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                                                    <span>Users see broken pages</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                                                    <span>Difficult to debug</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4" /> With Error Handling
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span>Graceful degradation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span>User-friendly messages</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span>Better debugging info</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Error Types Quick Reference
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {concepts.slice(1, 2).flatMap(category =>
                                            category.concepts.map((concept, idx) => (
                                                <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        {concept.icon}
                                                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                            {concept.name}
                                                        </h3>
                                                    </div>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                                        {concept.description}
                                                    </p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">error-handling.js</span>
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

                    {/* Tab Content: Concepts */}
                    {activeTab === 'concepts' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Error Handling Concepts
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Error Patterns</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCode(`// Basic Try-Catch\ntry {\n  // Risky operation\n  const data = JSON.parse('invalid json');\n  console.log('Success:', data);\n} catch (error) {\n  console.error('Error:', error.message);\n} finally {\n  console.log('Cleanup complete');\n}`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Try-Catch-Finally</div>
                                            <div className="text-xs text-slate-500">Basic error handling pattern</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Custom Error Class\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n    this.timestamp = new Date();\n  }\n}\n\n// Usage\ntry {\n  throw new ValidationError('Email is invalid', 'email');\n} catch (error) {\n  console.log(\`\${error.name}: \${error.message} (field: \${error.field})\`);\n}`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Custom Error Class</div>
                                            <div className="text-xs text-slate-500">Domain-specific error types</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Async Error Handling\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com');\n    if (!response.ok) {\n      throw new Error(\`HTTP \${response.status}\`);\n    }\n    return await response.json();\n  } catch (error) {\n    console.error('Fetch failed:', error.message);\n    return { error: error.message };\n  }\n}\n\n// Usage\nfetchData().then(data => console.log(data));`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Async Error Handling</div>
                                            <div className="text-xs text-slate-500">Error handling with async/await</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Basic Error Handling Practice\n// Create functions that throw and catch errors\n// Practice with different error types`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Error Patterns
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Async Error Practice\n// Handle errors in promises and async functions\n// Try retry logic and error recovery`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Async Error Handling
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Custom Error Practice\n// Create error hierarchy\n// Add custom properties and methods`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Custom Error Classes
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Real-world Scenario\n// Form validation with error handling\n// API error handling with fallbacks`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Real-world Scenarios
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">error-playground.js</span>
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

                    {/* Tab Content: Error Simulator */}
                    {activeTab === 'error-simulator' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Error Simulation Playground
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Generate Different Error Types
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                    Select Error Type
                                                </label>
                                                <select
                                                    value={errorType}
                                                    onChange={(e) => setErrorType(e.target.value)}
                                                    className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900"
                                                >
                                                    <option value="syntax">Syntax Error</option>
                                                    <option value="type">Type Error</option>
                                                    <option value="reference">Reference Error</option>
                                                    <option value="range">Range Error</option>
                                                    <option value="custom">Custom Error</option>
                                                </select>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Error Example</h4>
                                                <div className="bg-slate-900 p-4 rounded">
                                                    <pre className="text-sm text-slate-300 font-mono">
                                                        {generateErrorExample(errorType)}
                                                    </pre>
                                                </div>
                                                <button
                                                    onClick={() => setCode(generateErrorExample(errorType))}
                                                    className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                                >
                                                    Load into Editor
                                                </button>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Try to Handle This Error</h4>
                                                <textarea
                                                    value={code}
                                                    onChange={(e) => setCode(e.target.value)}
                                                    className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-2 font-mono text-sm"
                                                    placeholder="Write code to handle the error..."
                                                />
                                                <button
                                                    onClick={runCode}
                                                    className="mt-2 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                                                >
                                                    Test Error Handling
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Error Handling Patterns
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                                                <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Without Handling</h4>
                                                <div className="text-sm text-red-800 dark:text-red-200/80">
                                                    <p>Code crashes immediately</p>
                                                    <p>User sees browser error</p>
                                                    <p>No recovery possible</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                                                <h4 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">With Basic Handling</h4>
                                                <div className="text-sm text-yellow-800 dark:text-yellow-200/80">
                                                    <p>Error caught gracefully</p>
                                                    <p>User sees friendly message</p>
                                                    <p>Application continues</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                                                <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">With Advanced Handling</h4>
                                                <div className="text-sm text-green-800 dark:text-green-200/80">
                                                    <p>Error logged and reported</p>
                                                    <p>Automatic retry attempts</p>
                                                    <p>Fallback mechanisms</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-3">Error Output</h4>
                                                {output ? (
                                                    <div className={`p-3 rounded ${output.includes('Error') ? 'bg-red-900/20 text-red-300' : 'bg-emerald-900/20 text-emerald-300'}`}>
                                                        <pre className="text-sm whitespace-pre-wrap">{output}</pre>
                                                    </div>
                                                ) : (
                                                    <div className="p-3 bg-slate-900/20 text-slate-400 rounded text-center">
                                                        Run code to see output
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() => setOutput('')}
                                                    className="mt-2 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                                >
                                                    Clear Output
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Best Practices</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Be Specific:</strong> Catch specific error types
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Clean Up:</strong> Always use finally for cleanup
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Log Errors:</strong> Record errors for debugging
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Provide Fallbacks:</strong> Graceful degradation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson11" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Higher-Order Functions</span>
                        </a>
                        <a href="/lesson13" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Dates & Math</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}