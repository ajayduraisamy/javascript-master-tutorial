import {
    AlertCircle,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Award,
    BookOpen,
    Box,
    Calculator,
    Check,
    CheckCircle,
    Code,
    Copy,
    Cpu,
    Eye, EyeOff,
    FunctionSquare,
    GitBranch,
    Layers,
    Maximize2, Minimize2,
    Package,
    Play,
    RefreshCw,
    Target,
    Terminal,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson6() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory');
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('global');
    const [scopeLevel, setScopeLevel] = useState(0);

    // Typing effect for title
    useEffect(() => {
        const text = "Scope & Hoisting";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Solution Code
    const solutionCode = `// Solution: Scope Chain Demonstration
// Global Scope
let globalVar = "I'm global";
const GLOBAL_CONST = "I'm also global";

function outerFunction() {
    // Outer function scope
    let outerVar = "I'm in outer function";
    const outerConst = "Outer constant";
    
    console.log("Inside outer function:");
    console.log("Can access globalVar:", globalVar);
    console.log("Can access outerVar:", outerVar);
    
    function innerFunction() {
        // Inner function scope
        let innerVar = "I'm in inner function";
        
        console.log("\\nInside inner function:");
        console.log("Can access globalVar:", globalVar);
        console.log("Can access outerVar:", outerVar);
        console.log("Can access innerVar:", innerVar);
        
        // Block scope inside inner function
        if (true) {
            let blockVar = "I'm in block scope";
            const blockConst = "Block constant";
            
            console.log("\\nInside block scope:");
            console.log("Can access blockVar:", blockVar);
            console.log("Can access all parent scopes:");
            console.log("- globalVar:", globalVar);
            console.log("- outerVar:", outerVar);
            console.log("- innerVar:", innerVar);
        }
        
        // Try to access block-scoped variables (will cause error)
        // console.log(blockVar); // ReferenceError!
    }
    
    innerFunction();
    
    // Can't access inner function variables
    // console.log(innerVar); // ReferenceError!
}

outerFunction();

// Hoisting demonstration
console.log("\\n=== Hoisting Examples ===");

// Variable hoisting
console.log("Before declaration:", hoistedVar); // undefined
var hoistedVar = "Now I'm defined";
console.log("After declaration:", hoistedVar);

// Function hoisting
hoistedFunction(); // Works!
function hoistedFunction() {
    console.log("I was hoisted!");
}

// Let/const hoisting
try {
    console.log("Trying to access let before declaration:", letVar);
} catch (error) {
    console.log("Error with let:", error.message);
}
let letVar = "I'm let";

// Temporal Dead Zone demonstration
console.log("\\n=== Temporal Dead Zone ===");
let tdzVar = "Outer value";
{
    // TDZ starts
    // console.log(tdzVar); // ReferenceError!
    let tdzVar = "Inner value"; // TDZ ends
    console.log("After declaration:", tdzVar);
}`;

    const codeExamples = {
        global: `// Global Scope
// Variables declared outside any function or block
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "I'm global constant";

function testGlobalScope() {
    console.log("Inside function:");
    console.log("Can access globalVar:", globalVar);
    console.log("Can access globalLet:", globalLet);
    console.log("Can access globalConst:", globalConst);
    
    // We can modify global variables
    globalVar = "Modified globally";
    console.log("Modified globalVar:", globalVar);
}

testGlobalScope();

console.log("\\nOutside function:");
console.log("Still can access globalVar:", globalVar);

// Global variables are properties of window object (in browsers)
console.log("\\nGlobal variables in browser environment:");
console.log("window.globalVar:", typeof window !== 'undefined' ? window.globalVar : "Not in browser");
console.log("window.globalLet:", typeof window !== 'undefined' ? window.globalLet : "Not in browser");

// Pollution of global scope
function accidentalGlobal() {
    // Forgetting var/let/const creates global variable!
    oopsGlobal = "I'm accidentally global";
    console.log("\\nInside function - oopsGlobal:", oopsGlobal);
}

accidentalGlobal();
console.log("Outside function - oopsGlobal:", oopsGlobal);

// Best practice: Avoid polluting global scope
const app = {
    config: {
        apiUrl: "https://api.example.com",
        timeout: 5000
    },
    utils: {
        formatDate: function(date) { /* ... */ },
        validateEmail: function(email) { /* ... */ }
    }
};

// Use modules or IIFE to avoid globals
(function() {
    "use strict";
    var privateVar = "I'm private";
    console.log("\\nIIFE private variable:", privateVar);
})();

// Can't access privateVar here
// console.log(privateVar); // ReferenceError`,

        function: `// Function Scope
// Variables declared inside a function
function functionScopeDemo() {
    var functionVar = "I'm in function scope";
    let functionLet = "I'm also in function scope";
    const functionConst = "Function constant";
    
    console.log("Inside function:");
    console.log("functionVar:", functionVar);
    console.log("functionLet:", functionLet);
    console.log("functionConst:", functionConst);
    
    // Inner function can access outer function variables
    function innerFunction() {
        console.log("\\nInside inner function:");
        console.log("Can access functionVar:", functionVar);
        console.log("Can access functionLet:", functionLet);
        console.log("Can access functionConst:", functionConst);
        
        // Can declare new variables
        var innerVar = "I'm in inner function";
        console.log("innerVar:", innerVar);
    }
    
    innerFunction();
    
    // Can't access inner function variables
    // console.log(innerVar); // ReferenceError!
    
    // Different functions don't share scope
    function anotherFunction() {
        var sameName = "Different variable";
        console.log("\\nIn another function:");
        console.log("sameName:", sameName);
        // Can't access functionVar from here
        // console.log(functionVar); // Would be ReferenceError
    }
    
    anotherFunction();
}

functionScopeDemo();

// Can't access function-scoped variables outside
// console.log(functionVar); // ReferenceError!

// Function parameters are also function-scoped
function processUser(name, age) {
    console.log("\\nProcessing user:");
    console.log("name parameter:", name);
    console.log("age parameter:", age);
    
    // Parameters are like local variables
    name = "Modified " + name;
    console.log("Modified name:", name);
}

processUser("Alice", 25);

// Variable shadowing
let outer = "I'm outer";
function shadowDemo() {
    let outer = "I'm inner (shadowing)";
    console.log("\\nShadowing example:");
    console.log("Inside function:", outer);
}

shadowDemo();
console.log("Outside function:", outer);`,

        block: `// Block Scope (let and const)
// Variables declared with let/const are block-scoped
function blockScopeDemo() {
    console.log("=== Block Scope Examples ===");
    
    // if block
    if (true) {
        let blockLet = "I'm in if block";
        const blockConst = "Block constant";
        var blockVar = "I'm var in block";
        
        console.log("\\nInside if block:");
        console.log("blockLet:", blockLet);
        console.log("blockConst:", blockConst);
        console.log("blockVar:", blockVar);
    }
    
    console.log("\\nOutside if block:");
    // Can't access let/const outside block
    // console.log(blockLet); // ReferenceError!
    // console.log(blockConst); // ReferenceError!
    console.log("blockVar (var):", blockVar); // var is function-scoped
    
    // for loop block
    console.log("\\n=== For Loop Scope ===");
    for (let i = 0; i < 3; i++) {
        let loopVar = \`Iteration \${i}\`;
        console.log("Inside loop:", loopVar);
    }
    // console.log(i); // ReferenceError!
    // console.log(loopVar); // ReferenceError!
    
    // Each iteration has its own scope
    const functions = [];
    for (let j = 0; j < 3; j++) {
        functions.push(function() {
            return j;
        });
    }
    console.log("\\nClosures with let:");
    functions.forEach((func, index) => {
        console.log(\`Function \${index} returns: \`, func());
    });
    
    // Compare with var
    console.log("\\n=== For Loop with var ===");
    var functionsVar = [];
    for (var k = 0; k < 3; k++) {
        functionsVar.push(function() {
            return k;
        });
    }
    functionsVar.forEach((func, index) => {
        console.log(\`Function \${index} returns: \`, func());
    });
    
    // while loop block
    console.log("\\n=== While Loop Scope ===");
    let count = 0;
    while (count < 2) {
        let whileVar = \`Count: \${count}\`;
        const whileConst = "While constant";
        console.log(whileVar);
        count++;
    }
    
    // switch block
    console.log("\\n=== Switch Statement Scope ===");
    let value = "A";
    switch (value) {
        case "A": {
            let caseVar = "Case A variable";
            console.log(caseVar);
            break;
        }
        case "B": {
            let caseVar = "Case B variable"; // Different variable
            console.log(caseVar);
            break;
        }
    }
    
    // try-catch block
    console.log("\\n=== Try-Catch Scope ===");
    try {
        let tryVar = "In try block";
        throw new Error("Test error");
    } catch (error) {
        let catchVar = "In catch block";
        console.log("Error caught:", error.message);
        console.log("catchVar:", catchVar);
        // console.log(tryVar); // ReferenceError!
    } finally {
        let finallyVar = "In finally block";
        console.log("Finally executed");
        // console.log(catchVar); // ReferenceError!
    }
}`,

        hoisting: `// Hoisting
console.log("=== Variable Hoisting ===");

// var hoisting
console.log("varBefore:", varBefore); // undefined
var varBefore = "Now defined";
console.log("varAfter:", varBefore);

// Equivalent to:
// var varBefore;
// console.log("varBefore:", varBefore);
// varBefore = "Now defined";

// let/const hoisting (Temporal Dead Zone)
try {
    console.log("letBefore:", letBefore);
} catch (error) {
    console.log("Error with let:", error.message);
}
let letBefore = "Now defined";
console.log("letAfter:", letBefore);

try {
    console.log("constBefore:", constBefore);
} catch (error) {
    console.log("Error with const:", error.message);
}
const constBefore = "Now defined";
console.log("constAfter:", constBefore);

console.log("\\n=== Function Hoisting ===");

// Function declaration hoisting
hoistedFunction(); // Works!
function hoistedFunction() {
    console.log("I was hoisted to the top!");
}

// Function expression hoisting (var)
try {
    console.log("Before var function expression:", typeof varFunc);
    varFunc(); // TypeError!
} catch (error) {
    console.log("Error calling varFunc:", error.message);
}
var varFunc = function() {
    console.log("I'm a function expression with var");
};
console.log("After declaration:", typeof varFunc);
varFunc();

// Function expression hoisting (let/const)
try {
    console.log("Before let function expression:", typeof letFunc);
    letFunc(); // ReferenceError!
} catch (error) {
    console.log("Error calling letFunc:", error.message);
}
let letFunc = function() {
    console.log("I'm a function expression with let");
};
console.log("After declaration:", typeof letFunc);
letFunc();

console.log("\\n=== Class Hoisting ===");

// Class declarations are not hoisted
try {
    new MyClass();
} catch (error) {
    console.log("Error with class:", error.message);
}

class MyClass {
    constructor() {
        console.log("Class instance created");
    }
}

new MyClass();

console.log("\\n=== Hoisting Order ===");

var hoistingOrder = "Global";
function hoistingOrder() {
    console.log("I'm a function");
}

console.log("Type of hoistingOrder:", typeof hoistingOrder);
console.log("Value of hoistingOrder:", hoistingOrder);

// What happens:
// 1. Function declarations are hoisted first
// 2. Variable declarations are hoisted next
// 3. Assignments happen in place

console.log("\\n=== Practical Hoisting Issues ===");

function hoistingIssue() {
    console.log("value:", value); // undefined, not ReferenceError
    var value = "local";
    console.log("value after:", value);
}

hoistingIssue();

// Better: Declare variables at top
function betterPractice() {
    var name = "Alice";
    var age = 25;
    var isActive = true;
    
    // Rest of the function
    console.log(name, age, isActive);
}

betterPractice();`,

        lexical: `// Lexical Scope (Static Scope)
console.log("=== Lexical Scope ===");

// JavaScript uses lexical (static) scope
// Scope is determined by where functions are declared, not where they're called

let lexicalGlobal = "I'm lexical global";

function outerLexical() {
    let outerVar = "I'm in outer";
    
    function innerLexical() {
        let innerVar = "I'm in inner";
        
        console.log("Inside inner function:");
        console.log("Can access:", lexicalGlobal);
        console.log("Can access:", outerVar);
        console.log("Can access:", innerVar);
        
        return function deepestLexical() {
            console.log("\\nDeepest function:");
            console.log("Can access:", lexicalGlobal);
            console.log("Can access:", outerVar);
            console.log("Can access:", innerVar);
            console.log("Can't access variables from unrelated scopes");
        };
    }
    
    return innerLexical();
}

const deepest = outerLexical();
deepest();

console.log("\\n=== Scope Chain ===");

// Scope chain example
let chainLevel0 = "Level 0 - Global";

function level1() {
    let chainLevel1 = "Level 1 - Function";
    
    function level2() {
        let chainLevel2 = "Level 2 - Nested Function";
        
        function level3() {
            let chainLevel3 = "Level 3 - Deeply Nested";
            
            console.log("Scope Chain:");
            console.log("Level 3:", chainLevel3);
            console.log("Level 2:", chainLevel2);
            console.log("Level 1:", chainLevel1);
            console.log("Level 0:", chainLevel0);
            // console.log(nonExistent); // ReferenceError
        }
        
        level3();
    }
    
    level2();
}

level1();

console.log("\\n=== Closures ===");

// Closures preserve lexical scope
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Counter created");
console.log("Initial count:", counter.getCount());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());
console.log("Final count:", counter.getCount());

// Can't access count directly
// console.log(counter.count); // undefined

console.log("\\n=== Module Pattern ===");

const calculatorModule = (function() {
    // Private variables and functions
    let memory = 0;
    
    function validateNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
    
    // Public API
    return {
        add: function(a, b) {
            if (!validateNumber(a) || !validateNumber(b)) {
                return "Invalid input";
            }
            memory = a + b;
            return memory;
        },
        
        subtract: function(a, b) {
            if (!validateNumber(a) || !validateNumber(b)) {
                return "Invalid input";
            }
            memory = a - b;
            return memory;
        },
        
        getMemory: function() {
            return memory;
        },
        
        clearMemory: function() {
            memory = 0;
        }
    };
})();

console.log("Calculator Module:");
console.log("10 + 5 =", calculatorModule.add(10, 5));
console.log("Memory:", calculatorModule.getMemory());
console.log("15 - 7 =", calculatorModule.subtract(15, 7));
console.log("Memory:", calculatorModule.getMemory());`
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
                setPracticeOutput(" Code executed successfully (no console output)");
            } else {
                setPracticeOutput(" Output:\n" + logs.join("\n"));
            }
            setScopeLevel(prev => prev + 1);
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

    // Scope Topics
    const scopeTopics = [
        {
            id: 'global',
            name: 'Global Scope',
            icon: Box,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            description: 'Accessible everywhere in code',
            accessibility: 'Everywhere',
            variables: 'var, let, const (top-level)'
        },
        {
            id: 'function',
            name: 'Function Scope',
            icon: FunctionSquare,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            description: 'Accessible within function',
            accessibility: 'Function only',
            variables: 'var, let, const, parameters'
        },
        {
            id: 'block',
            name: 'Block Scope',
            icon: Layers,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            description: 'Accessible within block {}',
            accessibility: 'Block only',
            variables: 'let, const (inside {})'
        },
        {
            id: 'hoisting',
            name: 'Hoisting',
            icon: ArrowUp,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            description: 'Variable/function lifting',
            accessibility: 'Declaration moved up',
            variables: 'var, function declarations'
        },
        {
            id: 'lexical',
            name: 'Lexical Scope',
            icon: GitBranch,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20',
            description: 'Static nested scope',
            accessibility: 'Nested access',
            variables: 'All (determined by location)'
        }
    ];

    // Scope Chain Visualization
    const scopeChain = [
        { level: 0, name: 'Global Scope', color: 'bg-blue-100 dark:bg-blue-900/30', variables: ['globalVar', 'GLOBAL_CONST'] },
        { level: 1, name: 'Outer Function', color: 'bg-purple-100 dark:bg-purple-900/30', variables: ['outerVar', 'outerConst'] },
        { level: 2, name: 'Inner Function', color: 'bg-green-100 dark:bg-green-900/30', variables: ['innerVar'] },
        { level: 3, name: 'Block Scope', color: 'bg-yellow-100 dark:bg-yellow-900/30', variables: ['blockVar', 'blockConst'] }
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What is Scope?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Scope determines the accessibility (visibility) of variables, functions, and objects in your code.
                        It defines where variables can be accessed and prevents naming conflicts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-blue-600 mb-2">Scope</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Where variables are accessible</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-lg font-bold text-purple-600 mb-2">Hoisting</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Moving declarations to top</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Temporal Dead Zone (TDZ)
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <span className="text-xs font-bold text-red-500">!</span>
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Variables declared with <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">let</code> and
                                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">const</code> exist in TDZ from start of block until declaration
                            </span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-500" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Accessing variables in TDZ causes <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">ReferenceError</code>
                            </span>
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
                        Scope Chain Lookup
                    </h3>

                    <div className="space-y-4">
                        <div className="bg-slate-900 p-4 rounded-lg">
                            <pre className="text-slate-300 text-sm">
                                {`// When accessing a variable:
// 1. JavaScript looks in current scope
// 2. If not found, looks in outer scope
// 3. Continues up the chain until global scope
// 4. If not found in global: ReferenceError

let global = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        
        console.log(innerVar);   // 1. Current scope ✓
        console.log(outerVar);   // 2. Outer scope ✓
        console.log(global);     // 3. Global scope ✓
        // console.log(missing); // 4. ReferenceError ✗
    }
    
    inner();
}

outer();

// Variable Shadowing
let name = "global";
function shadow() {
    let name = "local"; // Shadows global 'name'
    console.log(name);  // "local"
}
shadow();
console.log(name);      // "global"`}
                            </pre>
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
                        Scope Best Practices
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">const</code> by default, <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">let</code> when needed</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Avoid <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">var</code> in modern code</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Keep variables in smallest possible scope</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Declare variables at top of scope</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-purple-950/20 text-slate-900 dark:text-slate-100 font-sans selection:bg-purple-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson6" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">



                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold animate-pulse">
                                MODULE 1: FUNDAMENTALS
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" /> Lesson 6
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 animate-gradient">
                                {typingEffect}
                            </span>

                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master variable visibility and declaration behavior. Understand scope chains, hoisting, and JavaScript's unique scoping rules.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Layers className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium">40-45 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Advanced Concept</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm font-medium">5 Scope Types</span>
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
                                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30'
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

                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                                Scope Chain
                            </span>
                        </h2>

                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Scope Chain Visualization
                                </h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className={`space-y-4 transition-all duration-300 ${isExpanded ? 'max-h-[600px]' : 'max-h-[400px] overflow-y-auto'}`}>
                                {scopeChain.map((scope, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${scope.color} border-slate-200 dark:border-slate-700`}
                                        style={{
                                            marginLeft: `${scope.level * 2}rem`,
                                            borderLeftWidth: '4px',
                                            borderLeftColor: scope.level === 0 ? '#3b82f6' :
                                                scope.level === 1 ? '#8b5cf6' :
                                                    scope.level === 2 ? '#10b981' : '#f59e0b'
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                    <span className="font-bold text-slate-800 dark:text-slate-200">
                                                        {scope.name}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {scope.variables.map((variable, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 text-xs rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                                                        >
                                                            {variable}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                                    Level {scope.level}
                                                </div>
                                                {scope.level > 0 && (
                                                    <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                                                        <ArrowLeft className="w-3 h-3" />
                                                        Can access parent scope
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Scope Chain Diagram */}
                                <div className="relative mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">
                                        Scope Chain Lookup Flow
                                    </h4>
                                    <div className="flex flex-col items-center">
                                        {scopeChain.map((scope, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className={`w-32 h-16 rounded-lg flex items-center justify-center ${scope.level === 0 ? 'bg-blue-500' : scope.level === 1 ? 'bg-purple-500' : scope.level === 2 ? 'bg-green-500' : 'bg-yellow-500'} text-white font-bold mb-2`}>
                                                    {scope.name}
                                                </div>
                                                {index < scopeChain.length - 1 && (
                                                    <div className="w-1 h-8 bg-slate-300 dark:bg-slate-600 mb-2 relative">
                                                        <ArrowDown className="w-4 h-4 absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-slate-400" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center mt-4 text-sm text-slate-600 dark:text-slate-400">
                                        When JavaScript looks for a variable, it starts from current scope and moves upward
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scope Type Cards */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                                Scope Types
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {scopeTopics.map((topic) => {
                                const Icon = topic.icon;
                                return (
                                    <button
                                        key={topic.id}
                                        onClick={() => setSelectedTopic(topic.id)}
                                        className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${topic.bg} ${topic.border} ${selectedTopic === topic.id ? 'ring-2 ring-offset-2 ' + topic.color.replace('text-', 'ring-') : ''}`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${topic.color.replace('text-', 'bg-').replace('500', '500/20')}`}>
                                                <Icon className={`w-5 h-5 ${topic.color}`} />
                                            </div>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{topic.name}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 text-left">
                                            {topic.description}
                                        </p>
                                        <div className="space-y-2 text-left">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-slate-500 dark:text-slate-500">Access:</span>
                                                <span className="font-medium">{topic.accessibility}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-slate-500 dark:text-slate-500">Variables:</span>
                                                <span className="font-medium font-mono">{topic.variables}</span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Code Example Area */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Interactive Examples
                                </span>
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowSolution(!showSolution)}
                                    className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                                >
                                    {showSolution ? <EyeOff className="w-4 h-4 inline mr-2" /> : <Eye className="w-4 h-4 inline mr-2" />}
                                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                                </button>
                                <button
                                    onClick={() => copyToClipboard(codeExamples[selectedTopic])}
                                    className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium text-blue-600 dark:text-blue-400"
                                >
                                    <Copy className="w-4 h-4 inline mr-2" />
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                                <button
                                    onClick={() => runCode(codeExamples[selectedTopic])}
                                    className={`px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all ${pulseAnimation ? 'animate-pulse' : ''}`}
                                >
                                    <Play className="w-4 h-4 inline mr-2" />
                                    Run Example
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-sm text-slate-300">
                                                {scopeTopics.find(t => t.id === selectedTopic)?.name} Example
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-slate-400">
                                            <Code className="w-3 h-3" />
                                            JavaScript
                                        </div>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm">
                                        <code className="text-slate-300 font-mono">
                                            {codeExamples[selectedTopic]}
                                        </code>
                                    </pre>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                    <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-300 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Key Insights
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-400">
                                        {selectedTopic === 'global' && (
                                            <>
                                                <li>• Global variables can be accessed from anywhere</li>
                                                <li>• Be careful of global namespace pollution</li>
                                                <li>• Use modules or IIFEs to avoid globals</li>
                                            </>
                                        )}
                                        {selectedTopic === 'function' && (
                                            <>
                                                <li>• Function scope includes parameters</li>
                                                <li>• Inner functions can access outer variables</li>
                                                <li>• Variables aren't shared between functions</li>
                                            </>
                                        )}
                                        {selectedTopic === 'block' && (
                                            <>
                                                <li>• let/const are block-scoped (ES6+)</li>
                                                <li>• var is NOT block-scoped (it's function-scoped)</li>
                                                <li>• Each loop iteration creates new scope</li>
                                            </>
                                        )}
                                        {selectedTopic === 'hoisting' && (
                                            <>
                                                <li>• var: hoisted and initialized as undefined</li>
                                                <li>• let/const: hoisted but in TDZ (not initialized)</li>
                                                <li>• Function declarations: fully hoisted</li>
                                            </>
                                        )}
                                        {selectedTopic === 'lexical' && (
                                            <>
                                                <li>• Scope determined by where code is written</li>
                                                <li>• Forms the basis of closures</li>
                                                <li>• Nested functions have access to parent scopes</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700">
                                        <div className="flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-amber-400" />
                                            <span className="font-mono text-sm text-slate-300">Output</span>
                                        </div>
                                        <button
                                            onClick={() => setOutput('')}
                                            className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
                                        >
                                            Clear Output
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap">
                                            {output || 'Output will appear here after running code...'}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-4 rounded-2xl border border-amber-200 dark:border-amber-800">
                                    <h4 className="font-bold mb-2 text-amber-800 dark:text-amber-300 flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        Pro Tip
                                    </h4>
                                    <p className="text-sm text-slate-700 dark:text-slate-400">
                                        {selectedTopic === 'global' &&
                                            "Use 'use strict' to prevent accidental global variables"}
                                        {selectedTopic === 'function' &&
                                            "Keep functions small and focused to avoid scope confusion"}
                                        {selectedTopic === 'block' &&
                                            "Prefer let/const over var for better block scoping"}
                                        {selectedTopic === 'hoisting' &&
                                            "Declare all variables at the top of their scope for clarity"}
                                        {selectedTopic === 'lexical' &&
                                            "Leverage lexical scoping for data encapsulation and closures"}
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-4 rounded-2xl border border-purple-200 dark:border-purple-800">
                                    <h4 className="font-bold mb-2 text-purple-800 dark:text-purple-300 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4" />
                                        Scope Level: {scopeLevel}
                                    </h4>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-2">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
                                            style={{ width: `${Math.min(scopeLevel * 10, 100)}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        Run more examples to master scope concepts!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Practice Area */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                                    Practice Zone
                                </span>
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={clearPractice}
                                    className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                                >
                                    <RefreshCw className="w-4 h-4 inline mr-2" />
                                    Clear
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                                        <div className="flex items-center gap-2">
                                            <Code className="w-4 h-4 text-amber-400" />
                                            <span className="font-mono text-sm text-slate-300">Practice Editor</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-slate-400">
                                            <Package className="w-3 h-3" />
                                            Try your own scope code
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <textarea
                                            value={userCode}
                                            onChange={(e) => setUserCode(e.target.value)}
                                            placeholder={`// Try writing some scope-related code!
// Example:
let global = "I'm global";

function testScope() {
    let local = "I'm local";
    console.log("Inside function:");
    console.log("Can access global:", global);
    console.log("Can access local:", local);
}

testScope();
// console.log(local); // What happens?`}
                                            className="w-full h-64 bg-slate-950 text-slate-300 font-mono text-sm p-4 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                                            spellCheck="false"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={runPracticeCode}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all font-bold text-white flex items-center justify-center gap-2"
                                >
                                    <Play className="w-4 h-4" />
                                    Run Practice Code
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-green-400" />
                                            <span className="font-mono text-sm text-slate-300">Practice Output</span>
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            Results appear here
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap min-h-[200px]">
                                            {practiceOutput || 'Practice output will appear here...'}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-4 rounded-2xl border border-green-200 dark:border-green-800">
                                    <h4 className="font-bold mb-2 text-green-800 dark:text-green-300 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Challenge Tasks
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-400">
                                        <li>• Create a closure that remembers a counter</li>
                                        <li>• Demonstrate variable shadowing</li>
                                        <li>• Show TDZ error with let/const</li>
                                        <li>• Create a module pattern using scope</li>
                                        <li>• Fix a scope-related bug in code</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution Section */}
                    {showSolution && (
                        <div className="mb-12 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                                        Complete Solution
                                    </span>
                                </h2>
                                <button
                                    onClick={() => copyToClipboard(solutionCode)}
                                    className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors text-sm font-medium text-green-600 dark:text-green-400"
                                >
                                    <Copy className="w-4 h-4 inline mr-2" />
                                    Copy Solution
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl border border-green-200 dark:border-green-800 overflow-hidden">
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 border-b border-green-200 dark:border-green-800">
                                    <div className="flex items-center gap-2">
                                        <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
                                        <span className="font-bold text-green-800 dark:text-green-300">
                                            Scope Chain Demonstration
                                        </span>
                                    </div>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm">
                                    <code className="text-slate-700 dark:text-slate-300 font-mono">
                                        {solutionCode}
                                    </code>
                                </pre>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                    <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">Scope Chain</div>
                                    <div className="text-sm text-slate-700 dark:text-slate-400">
                                        Demonstrates nested scope access patterns
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                                    <div className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-1">Hoisting</div>
                                    <div className="text-sm text-slate-700 dark:text-slate-400">
                                        Shows var vs let/const hoisting differences
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                                    <div className="text-xs text-amber-600 dark:text-amber-400 font-bold mb-1">TDZ</div>
                                    <div className="text-sm text-slate-700 dark:text-slate-400">
                                        Temporal Dead Zone demonstration
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span className="text-sm">
                                Lesson 6: Scope & Hoisting
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Previous: Arrays & Objects
                            </button>
                            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all font-medium text-white flex items-center gap-2">
                                Next: Closures & IIFE
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}