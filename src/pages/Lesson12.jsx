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
                    icon: <AlertTriangle className="w

