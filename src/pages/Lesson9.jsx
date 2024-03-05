import React, { useState } from 'react';
import {
    CheckSquare, Code, Play, Terminal, Lightbulb,
    AlertTriangle, ChevronRight, Copy, RotateCcw,
    Hash, Grid, Zap, ArrowRight, ArrowLeft, RefreshCw, ChevronLeft,
    Lock, Unlock, Globe, Target, Cpu, Package,
    Download, Upload, Split, Merge, Type, Filter,
    Battery, Shield, Eye, EyeOff, Infinity, Award
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson9() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// ===== ES6+ MODERN FEATURES =====

// 1. LET & CONST (Block Scoping)
let count = 0;          // Can be reassigned
const PI = 3.14159;     // Cannot be reassigned

if (true) {
    let blockScoped = "I'm only here";
    const alsoBlockScoped = "Me too!";
    // These don't exist outside
}

// 2. ARROW FUNCTIONS
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Implicit return
const square = x => x * x;

// With multiple lines
const greet = name => {
    const message = \`Hello, \${name}!\`;
    return message.toUpperCase();
};

// 3. TEMPLATE LITERALS
const userName = "Alice";
const age = 30;
const greeting = \`Hello \${userName}, you are \${age} years old!\`;
const multiLine = \`
    This is
    a multi-line
    string
\`;

// 4. DESTRUCTURING
// Array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;
console.log(firstColor); // 'red'

// Object destructuring
const person = {
    name: 'John',
    age: 25,
    city: 'New York'
};
const { name, age: personAge } = person;
console.log(name); // 'John'

// 5. DEFAULT PARAMETERS
function createUser(name, role = 'user') {
    return { name, role };
}
console.log(createUser('Alice')); // { name: 'Alice', role: 'user' }

// 6. REST & SPREAD OPERATORS
// Rest (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a:1,b:2,c:3,d:4}

// 7. ENHANCED OBJECT LITERALS
const propName = 'dynamicKey';
const enhancedObj = {
    // Shorthand property names
    name,
    age,
    
    // Computed property names
    [propName]: 'value',
    
    // Method shorthand
    sayHello() {
        return \`Hi, I'm \${this.name}\`;
    }
};

// 8. OPTIONAL CHAINING (?.)
const user = {
    profile: {
        address: {
            city: 'London'
        }
    }
};
console.log(user?.profile?.address?.city); // 'London'
console.log(user?.profile?.phone?.number); // undefined (no error)

// 9. NULLISH COALESCING (??)
const defaultValue = null ?? 'default'; // 'default'
const emptyString = '' ?? 'default';    // '' (empty string is NOT nullish)
const zero = 0 ?? 'default';           // 0 (0 is NOT nullish)

// 10. BIGINT
const bigNumber = 9007199254740991n; // 'n' suffix
const evenBigger = BigInt('123456789012345678901234567890');

console.log('Modern JavaScript is awesome!');`);

    const [output, setOutput] = useState('');
    const [currentFeature, setCurrentFeature] = useState(0);
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
                console.log('=== ES6+ MODERN FEATURES ===');
                
                // 1. Let & Const
                let count = 0;
                count = 1;
                const PI = 3.14159;
                console.log('Let/Const:', count, PI);
                
                // 2. Arrow Functions
                const multiply = (a, b) => a * b;
                console.log('Arrow function:', multiply(5, 3));
                
                // 3. Template Literals
                const name = 'Alice';
                const greeting = \`Hello \${name}!\`;
                console.log('Template literal:', greeting);
                
                // 4. Destructuring
                const colors = ['red', 'green', 'blue'];
                const [first, second] = colors;
                console.log('Array destructuring:', first, second);
                
                const person = { name: 'John', age: 25 };
                const { name: personName } = person;
                console.log('Object destructuring:', personName);
                
                // 5. Default Parameters
                function greet(name = 'Guest') {
                    return \`Hello, \${name}!\`;
                }
                console.log('Default params:', greet(), greet('Alice'));
                
                // 6. Rest & Spread
                function sum(...numbers) {
                    return numbers.reduce((t, n) => t + n, 0);
                }
                console.log('Rest operator:', sum(1, 2, 3));
                
                const arr = [1, 2, 3];
                const spread = [...arr, 4, 5];
                console.log('Spread operator:', spread);
                
                // 7. Enhanced Object Literals
                const key = 'dynamic';
                const enhanced = {
                    [key]: 'value',
                    shorthand: 'works',
                    method() { return 'hello'; }
                };
                console.log('Enhanced object:', enhanced);
                
                // 8. Optional Chaining
                const data = { user: { profile: { name: 'Alice' } } };
                console.log('Optional chaining:', data?.user?.profile?.name);
                console.log('Safe missing:', data?.user?.address?.city);
                
                // 9. Nullish Coalescing
                const value = null ?? 'default';
                const zero = 0 ?? 'default';
                console.log('Nullish coalescing:', value, zero);
                
                // 10. BigInt
                const big = 9007199254740991n;
                console.log('BigInt:', big + 1n);
            `;

            eval(safeEval);
            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // ES6+ Features with detailed explanations
    const features = [
        {
            category: "Variable Declarations",
            items: [
                {
                    name: "let & const",
                    icon: <Lock className="w-4 h-4 text-blue-500" />,
                    description: "Block-scoped variable declarations replacing var",
                    syntax: "let variable = value; const constant = value;",
                    example: "let count = 0; const PI = 3.14;",
                    year: "ES6 (2015)",
                    benefits: ["Block scope", "No hoisting issues", "const prevents reassignment"]
                },
                {
                    name: "Temporal Dead Zone",
                    icon: <EyeOff className="w-4 h-4 text-red-500" />,
                    description: "Variables are inaccessible until declared",
                    syntax: "// Can't access before declaration",
                    example: "console.log(x); let x = 5; // ReferenceError",
                    year: "ES6 (2015)",
                    benefits: ["Prevents bugs", "Better error messages"]
                }
            ]
        },
        {
            category: "Functions",
            items: [
                {
                    name: "Arrow Functions",
                    icon: <ArrowRight className="w-4 h-4 text-green-500" />,
                    description: "Shorter syntax and lexical 'this' binding",
                    syntax: "const func = (params) => expression;",
                    example: "const add = (a, b) => a + b;",
                    year: "ES6 (2015)",
                    benefits: ["Concise syntax", "No own 'this'", "Implicit return"]
                },
                {
                    name: "Default Parameters",
                    icon: <Target className="w-4 h-4 text-purple-500" />,
                    description: "Function parameters with default values",
                    syntax: "function greet(name = 'Guest') {}",
                    example: "function multiply(a, b = 1) { return a * b; }",
                    year: "ES6 (2015)",
                    benefits: ["Cleaner code", "Backward compatible", "Flexible APIs"]
                },
                {
                    name: "Rest Parameters",
                    icon: <Merge className="w-4 h-4 text-orange-500" />,
                    description: "Collect remaining arguments into an array",
                    syntax: "function sum(...numbers) {}",
                    example: "const sumAll = (...args) => args.reduce((a,b) => a+b);",
                    year: "ES6 (2015)",
                    benefits: ["Variable arguments", "Cleaner than arguments object"]
                }
            ]
        },
        {
            category: "Strings & Templates",
            items: [
                {
                    name: "Template Literals",
                    icon: <Type className="w-4 h-4 text-yellow-500" />,
                    description: "Multi-line strings with embedded expressions",
                    syntax: "\`String \${expression} text\`",
                    example: "\`Hello \${name}, you are \${age} years old!\`",
                    year: "ES6 (2015)",
                    benefits: ["Multi-line", "Interpolation", "Tagged templates"]
                },
                {
                    name: "String Methods",
                    icon: <Type className="w-4 h-4 text-blue-400" />,
                    description: "New string utility methods",
                    syntax: "str.includes(), str.startsWith(), str.repeat()",
                    example: "'hello'.includes('ell'); // true",
                    year: "ES6 (2015)",
                    benefits: ["Better search", "Padding", "Repeat"]
                }
            ]
        },
        {
            category: "Objects & Arrays",
            items: [
                {
                    name: "Destructuring",
                    icon: <Split className="w-4 h-4 text-pink-500" />,
                    description: "Extract values from objects/arrays into variables",
                    syntax: "const {prop} = obj; const [first] = array;",
                    example: "const {name, age} = user; const [a,b] = [1,2];",
                    year: "ES6 (2015)",
                    benefits: ["Clean extraction", "Swap variables", "Function parameters"]
                },
                {
                    name: "Spread Operator",
                    icon: <Globe className="w-4 h-4 text-green-600" />,
                    description: "Expand arrays/objects into individual elements",
                    syntax: "...array, ...object",
                    example: "const combined = [...arr1, ...arr2];",
                    year: "ES6 (2015)",
                    benefits: ["Copy arrays/objects", "Merge data", "Function arguments"]
                },
                {
                    name: "Enhanced Object Literals",
                    icon: <Package className="w-4 h-4 text-purple-600" />,
                    description: "Shorthand syntax for object creation",
                    syntax: "{prop, method() {}, [key]: value}",
                    example: "const obj = {name, age, greet() {}};",
                    year: "ES6 (2015)",
                    benefits: ["Less boilerplate", "Computed properties", "Method shorthand"]
                }
            ]
        },
        {
            category: "Modern Operators",
            items: [
                {
                    name: "Optional Chaining (?.)",
                    icon: <Shield className="w-4 h-4 text-teal-500" />,
                    description: "Safe property access through nested objects",
                    syntax: "obj?.prop?.nested",
                    example: "user?.address?.city",
                    year: "ES2020",
                    benefits: ["Prevents errors", "Cleaner code", "Safe navigation"]
                },
                {
                    name: "Nullish Coalescing (??)",
                    icon: <Filter className="w-4 h-4 text-indigo-500" />,
                    description: "Returns right operand when left is null/undefined",
                    syntax: "value ?? defaultValue",
                    example: "const name = input ?? 'Anonymous';",
                    year: "ES2020",
                    benefits: ["Better than ||", "Handles falsy values properly"]
                },
                {
                    name: "Logical Assignment",
                    icon: <Battery className="w-4 h-4 text-orange-600" />,
                    description: "Combine logical operators with assignment",
                    syntax: "a ||= b, a &&= b, a ??= b",
                    example: "user.name ||= 'Anonymous';",
                    year: "ES2021",
                    benefits: ["Concise", "Conditional assignment", "Clean syntax"]
                }
            ]
        },
        {
            category: "Advanced Features",
            items: [
                {
                    name: "BigInt",
                    icon: <Infinity className="w-4 h-4 text-red-600" />,
                    description: "Arbitrary precision integers",
                    syntax: "123n, BigInt('123')",
                    example: "const huge = 9007199254740991n;",
                    year: "ES2020",
                    benefits: ["Large numbers", "Precise calculations", "Financial apps"]
                },
                {
                    name: "Promise & Async/Await",
                    icon: <Zap className="w-4 h-4 text-yellow-600" />,
                    description: "Modern asynchronous programming",
                    syntax: "async function() { await promise; }",
                    example: "const data = await fetch(url);",
                    year: "ES2017",
                    benefits: ["Clean async code", "Error handling", "Sequential logic"]
                },
                {
                    name: "Modules (import/export)",
                    icon: <Download className="w-4 h-4 text-blue-600" />,
                    description: "Modern module system for code organization",
                    syntax: "import/export",
                    example: "export const api = {}; import {api} from './module';",
                    year: "ES6 (2015)",
                    benefits: ["Code splitting", "Dependency management", "Tree shaking"]
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Modern Syntax Refactoring",
            description: "Convert old JavaScript code to modern ES6+ syntax",
            oldCode: `// Old JavaScript (ES5)
function createUser(firstName, lastName, age) {
    var user = {
        firstName: firstName,
        lastName: lastName,
        age: age || 18
    };
    
    user.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
    
    return user;
}

var colors = ['red', 'green', 'blue'];
var firstColor = colors[0];
var secondColor = colors[1];

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function checkUser(user) {
    if (user && user.address && user.address.city) {
        return user.address.city;
    }
    return 'Unknown';
}`,
            solution: `// Modern ES6+ Syntax
const createUser = (firstName, lastName, age = 18) => {
    const user = {
        firstName,
        lastName,
        age,
        getFullName() {
            return \`\${this.firstName} \${this.lastName}\`;
        }
    };
    
    return user;
};

const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;

const combineArrays = (arr1, arr2) => [...arr1, ...arr2];

const checkUser = (user) => user?.address?.city ?? 'Unknown';`,
            hint: "Look for: var → let/const, function expressions → arrow functions, || → ??, && chains → ?."
        },
        {
            title: "ES6+ Feature Implementation",
            description: "Use multiple modern features to solve problems",
            tasks: [
                "Create function with default parameters and rest operator",
                "Use destructuring to extract nested values",
                "Implement optional chaining for safe access",
                "Use template literals for formatted output"
            ],
            starterCode: `const data = {
    users: [
        {
            id: 1,
            name: 'Alice',
            profile: {
                email: 'alice@example.com',
                settings: {
                    theme: 'dark',
                    notifications: true
                }
            },
            scores: [95, 87, 92]
        },
        {
            id: 2,
            name: 'Bob',
            profile: {
                email: 'bob@example.com',
                settings: {
                    theme: 'light'
                }
            },
            scores: [88, 91, 84]
        }
    ],
    config: {
        maxUsers: 100,
        features: ['search', 'filter', 'sort']
    }
};

// TODO: Implement using ES6+ features:
// 1. Extract Alice's theme and Bob's email using destructuring
// 2. Safely get notification settings (might not exist)
// 3. Combine all scores into one array
// 4. Format a welcome message with template literals
// 5. Create a function that accepts variable number of scores`,
            solution: `const data = { /* same as above */ };

// 1. Destructuring
const { 
    users: [
        { profile: { settings: { theme: aliceTheme } } },
        { profile: { email: bobEmail } }
    ] 
} = data;

// 2. Optional chaining
const aliceNotifications = data.users[0]?.profile?.settings?.notifications ?? 'Not set';
const bobNotifications = data.users[1]?.profile?.settings?.notifications ?? 'Not set';

// 3. Spread operator
const allScores = data.users.flatMap(user => user.scores);

// 4. Template literal
const welcomeMessage = \`Welcome! There are \${data.users.length} users.\`;

// 5. Rest parameters
const averageScore = (...scores) => {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

// Usage
console.log(\`Alice theme: \${aliceTheme}\`);
console.log(\`Bob email: \${bobEmail}\`);
console.log(\`Alice notifications: \${aliceNotifications}\`);
console.log(\`All scores: \${allScores}\`);
console.log(welcomeMessage);
console.log(\`Average: \${averageScore(...allScores)}\`);`,
            hint: "Use array destructuring for nested arrays, optional chaining with ?? for defaults"
        },
        {
            title: "Real-World Application",
            description: "Build a user management system with modern features",
            starterCode: `// User Management System
class UserManager {
    constructor() {
        this.users = [];
        this.config = {
            maxAge: 120,
            minAge: 13,
            allowedCountries: ['US', 'CA', 'UK']
        };
    }
    
    // TODO: Implement these methods with ES6+ features
    
    // 1. Add user with validation
    addUser(userData) {
        // Use destructuring, default values, optional chaining
    }
    
    // 2. Get users by criteria
    filterUsers(criteria = {}) {
        // Use object destructuring, spread, arrow functions
    }
    
    // 3. Format user report
    generateReport() {
        // Use template literals, array methods, destructuring
    }
    
    // 4. Merge user data
    mergeUserData(updates) {
        // Use spread operator, optional chaining, nullish coalescing
    }
}

const manager = new UserManager();`,
            solution: `class UserManager {
    constructor() {
        this.users = [];
        this.config = {
            maxAge: 120,
            minAge: 13,
            allowedCountries: ['US', 'CA', 'UK']
        };
    }
    
    addUser({
        name,
        age = 18,
        email,
        country = 'US',
        preferences = {}
    }) {
        // Validation with optional chaining and nullish coalescing
        const isValidAge = age >= this.config.minAge && age <= this.config.maxAge;
        const isValidCountry = this.config.allowedCountries.includes(country);
        
        if (!isValidAge || !isValidCountry) {
            throw new Error(\`Invalid user data: \${!isValidAge ? 'age' : 'country'}\`);
        }
        
        const newUser = {
            id: Date.now(),
            name,
            age,
            email: email?.toLowerCase() ?? 'no-email@example.com',
            country,
            preferences: {
                theme: 'light',
                notifications: true,
                ...preferences
            }
        };
        
        this.users = [...this.users, newUser];
        return newUser;
    }
    
    filterUsers({
        minAge = 0,
        maxAge = Infinity,
        countries = this.config.allowedCountries,
        hasEmail = true
    } = {}) {
        return this.users.filter(user => {
            const ageMatch = user.age >= minAge && user.age <= maxAge;
            const countryMatch = countries.includes(user.country);
            const emailMatch = !hasEmail || (user.email && user.email !== 'no-email@example.com');
            
            return ageMatch && countryMatch && emailMatch;
        });
    }
    
    generateReport() {
        const total = this.users.length;
        const avgAge = this.users.reduce((sum, user) => sum + user.age, 0) / total || 0;
        const countries = [...new Set(this.users.map(u => u.country))];
        
        return \`
            USER REPORT
            ===========
            Total Users: \${total}
            Average Age: \${avgAge.toFixed(1)}
            Countries: \${countries.join(', ')}
            
            User List:
            \${this.users.map(user => \`• \${user.name} (\${user.age}) from \${user.country}\`).join('\\n')}
        \`;
    }
    
    mergeUserData(userId, updates) {
        const userIndex = this.users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        
        const currentUser = this.users[userIndex];
        const mergedUser = {
            ...currentUser,
            ...updates,
            preferences: {
                ...currentUser.preferences,
                ...updates.preferences
            },
            lastUpdated: new Date().toISOString()
        };
        
        this.users[userIndex] = mergedUser;
        return mergedUser;
    }
}`,
            hint: "Use spread operator for immutability, optional chaining for safe access, destructuring for clean parameter handling"
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// ===== ES6+ MODERN FEATURES =====

// 1. LET & CONST (Block Scoping)
let count = 0;          // Can be reassigned
const PI = 3.14159;     // Cannot be reassigned

if (true) {
    let blockScoped = "I'm only here";
    const alsoBlockScoped = "Me too!";
    // These don't exist outside
}

// 2. ARROW FUNCTIONS
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Implicit return
const square = x => x * x;

// With multiple lines
const greet = name => {
    const message = \`Hello, \${name}!\`;
    return message.toUpperCase();
};

// 3. TEMPLATE LITERALS
const userName = "Alice";
const age = 30;
const greeting = \`Hello \${userName}, you are \${age} years old!\`;
const multiLine = \`
    This is
    a multi-line
    string
\`;

// 4. DESTRUCTURING
// Array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;
console.log(firstColor); // 'red'

// Object destructuring
const person = {
    name: 'John',
    age: 25,
    city: 'New York'
};
const { name, age: personAge } = person;
console.log(name); // 'John'

// 5. DEFAULT PARAMETERS
function createUser(name, role = 'user') {
    return { name, role };
}
console.log(createUser('Alice')); // { name: 'Alice', role: 'user' }

// 6. REST & SPREAD OPERATORS
// Rest (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a:1,b:2,c:3,d:4}

// 7. ENHANCED OBJECT LITERALS
const propName = 'dynamicKey';
const enhancedObj = {
    // Shorthand property names
    name,
    age,
    
    // Computed property names
    [propName]: 'value',
    
    // Method shorthand
    sayHello() {
        return \`Hi, I'm \${this.name}\`;
    }
};

// 8. OPTIONAL CHAINING (?.)
const user = {
    profile: {
        address: {
            city: 'London'
        }
    }
};
console.log(user?.profile?.address?.city); // 'London'
console.log(user?.profile?.phone?.number); // undefined (no error)

// 9. NULLISH COALESCING (??)
const defaultValue = null ?? 'default'; // 'default'
const emptyString = '' ?? 'default';    // '' (empty string is NOT nullish)
const zero = 0 ?? 'default';           // 0 (0 is NOT nullish)

// 10. BIGINT
const bigNumber = 9007199254740991n; // 'n' suffix
const evenBigger = BigInt('123456789012345678901234567890');

console.log('Modern JavaScript is awesome!');`);
        setOutput('');
    };

    const FeatureCard = ({ feature, onClick }) => (
        <div
            className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-700 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
            onClick={onClick}
        >
            <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{feature.name}</h3>
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                        {feature.year}
                    </span>
                </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {feature.description}
            </p>
            <div className="space-y-1">
                {feature.benefits?.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-green-500"></div>
                        <span className="text-slate-500 dark:text-slate-400">{benefit}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
            <LessonSidebar currentLesson="lesson9" />

            <main className="lg:ml-80 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-yellow-600 dark:text-yellow-400">Lesson 9: ES6+ Modern Features</span>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
                                    Modern JavaScript: ES6+ & Beyond
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-300">
                                    Master the powerful features that revolutionized JavaScript - arrow functions, destructuring, optional chaining, and more!
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
                        {['content', 'features', 'exercises', 'playground'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium capitalize whitespace-nowrap ${activeTab === tab
                                    ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                {tab === 'features' ? 'All Features' : tab}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'content' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Content Column */}
                            <div className="space-y-8">
                                {/* ES6+ Timeline */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-yellow-500" />
                                        JavaScript Evolution Timeline
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">ES6</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">2015 - The Big Update</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    let/const, arrow functions, classes, promises, modules
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">ES2017</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Async/Await</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    async functions, shared memory, Object.values/entries
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">ES2020</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Modern Operators</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Optional chaining, nullish coalescing, BigInt, dynamic import
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Best Practices */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                        Modern JavaScript Best Practices
                                    </h2>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Use const by default</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Use <code>const</code> unless you need reassignment, then use <code>let</code>. Never use <code>var</code>.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Prefer arrow functions</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Use arrow functions for callbacks and methods that don't need their own <code>this</code>.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Use optional chaining</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Replace <code>&&</code> chains with <code>?.</code> for cleaner, safer property access.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-orange-500"></div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 dark:text-white">Leverage destructuring</h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    Extract values from objects/arrays directly in variable declarations and function parameters.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Column */}
                            <div className="space-y-8">
                                {/* Interactive Editor */}
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="flex justify-between items-center bg-slate-800 px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Terminal className="w-5 h-5 text-yellow-400" />
                                            <span className="font-mono text-slate-300">modern-js.js</span>
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

                                {/* Quick Reference */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-blue-500" />
                                        Quick Reference
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <code className="text-sm text-green-600 dark:text-green-400">let x = 5</code>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Block-scoped variable</p>
                                        </div>

                                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <code className="text-sm text-blue-600 dark:text-blue-400">const arr = []</code>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Constant reference</p>
                                        </div>

                                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <code className="text-sm text-purple-600 dark:text-purple-400">
                                                (x) =&gt; x * 2
                                            </code>

                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Arrow function</p>
                                        </div>

                                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <code className="text-sm text-red-600 dark:text-red-400">obj?.prop</code>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Optional chaining</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'features' && (
                        <div className="space-y-8">
                            {/* Feature Navigation */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                                        All ES6+ Features
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">
                                            {features.flatMap(f => f.items).length} features
                                        </span>
                                    </div>
                                </div>

                                {/* Feature Categories */}
                                <div className="space-y-8">
                                    {features.map((category, catIdx) => (
                                        <div key={catIdx}>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                                                {category.category}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {category.items.map((feature, featIdx) => (
                                                    <FeatureCard
                                                        key={featIdx}
                                                        feature={feature}
                                                        onClick={() => {
                                                            setCurrentFeature(catIdx * 10 + featIdx);
                                                            setActiveTab('content');
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'exercises' && (
                        <div className="max-w-6xl mx-auto">
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

                                {/* Exercise Content */}
                                <div className="space-y-6">
                                    {exercises[currentExercise].oldCode && (
                                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                                            <h3 className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                                                <AlertTriangle className="w-5 h-5" />
                                                Old JavaScript (ES5)
                                            </h3>
                                            <pre className="text-red-800 dark:text-red-200 font-mono text-sm bg-white/50 dark:bg-black/50 p-4 rounded-lg overflow-x-auto">
                                                {exercises[currentExercise].oldCode}
                                            </pre>
                                            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                                                Convert this to modern ES6+ syntax
                                            </p>
                                        </div>
                                    )}

                                    {exercises[currentExercise].tasks && (
                                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Tasks</h3>
                                            <ul className="space-y-2">
                                                {exercises[currentExercise].tasks.map((task, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                        <span className="text-slate-700 dark:text-slate-300">{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                                                    <h3 className="font-medium text-slate-800 dark:text-white">Hint</h3>
                                                </div>
                                                <p className="text-slate-700 dark:text-slate-300">
                                                    {exercises[currentExercise].hint}
                                                </p>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Award className="w-5 h-5 text-green-500" />
                                                    <h3 className="font-medium text-slate-800 dark:text-white">Solution</h3>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        setCode(exercises[currentExercise].solution);
                                                        setActiveTab('playground');
                                                    }}
                                                    className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors"
                                                >
                                                    Load Solution & Try It
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={() => setCurrentExercise(prev => prev > 0 ? prev - 1 : exercises.length - 1)}
                                        className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Previous Exercise
                                    </button>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setActiveTab('playground')}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                                        >
                                            Try in Playground
                                        </button>

                                        <button
                                            onClick={() => {
                                                alert('Excellent work! Modern JavaScript mastered!');
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

                    {activeTab === 'playground' && (
                        <div className="space-y-8">
                            {/* Playground Header */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Zap className="w-8 h-8 text-yellow-400" />
                                    <h2 className="text-2xl font-bold text-white">ES6+ Playground</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {/* Quick Templates */}
                                    <button
                                        onClick={() => setCode(`// Template 1: Arrow Functions & Destructuring
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];

// Convert to arrow functions and destructuring
const getUserNames = users.map(user => user.name);
const { name: firstName } = users[0];

console.log(getUserNames, firstName);`)}
                                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">Arrow & Destructure</h3>
                                        <p className="text-slate-400 text-sm">Practice arrow functions and destructuring</p>
                                    </button>

                                    <button
                                        onClick={() => setCode(`// Template 2: Optional Chaining & Nullish
const company = {
    name: 'Tech Corp',
    employees: [
        { name: 'Alice', contact: { email: 'alice@example.com' } },
        { name: 'Bob' }
    ]
};

// Safely access nested properties
const aliceEmail = company.employees[0]?.contact?.email ?? 'No email';
const bobEmail = company.employees[1]?.contact?.email ?? 'No email';

console.log(aliceEmail, bobEmail);`)}
                                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">Safe Access</h3>
                                        <p className="text-slate-400 text-sm">Practice optional chaining and nullish</p>
                                    </button>

                                    <button
                                        onClick={() => setCode(`// Template 3: Spread & Rest Operators
// Spread for arrays/objects
const baseConfig = { theme: 'dark', language: 'en' };
const userConfig = { language: 'fr', notifications: true };

const finalConfig = { ...baseConfig, ...userConfig };

// Rest parameters
const logAll = (...args) => {
    args.forEach(arg => console.log(arg));
};

console.log(finalConfig);
logAll('a', 'b', 'c');`)}
                                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">Spread & Rest</h3>
                                        <p className="text-slate-400 text-sm">Practice spread and rest operators</p>
                                    </button>
                                </div>
                            </div>

                            {/* Live Editor */}
                            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="flex justify-between items-center bg-slate-800 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <Terminal className="w-5 h-5 text-yellow-400" />
                                        <span className="font-mono text-slate-300">es6-playground.js</span>
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
                                        className="w-full h-96 bg-slate-950 text-green-400 font-mono text-sm p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
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
                            href="/lesson8"
                            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Previous: Objects & Prototypes
                        </a>

                        <div className="text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                Up Next: Destructuring & Spread
                            </p>
                            <a
                                href="/lesson10"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                            >
                                Continue Learning
                            </a>
                        </div>

                        <a
                            href="/lesson10"
                            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            Next: Destructuring & Spread
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}