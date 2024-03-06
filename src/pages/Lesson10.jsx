import React, { useState } from 'react';
import {
    Grid, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw, Box,
    Hash, Filter, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Merge, BookOpen, Brain,
    Folder, Lock, Unlock, Link, Shield, Database,
    Zap, Eye, EyeOff, Wrench, Settings, GitBranch,
    Cog, Package, Users, Globe, Target, Layers2,
    Expand, Combine, Split, Boxes, PackageOpen,
    ScatterChart, Braces, ArrowRightLeft, GitMerge,
    GitPullRequest, Workflow, Palette, Map
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson10() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === DESTRUCTURING FUNDAMENTALS ===
// 1. Array Destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

// Skip elements
const [primary, , tertiary] = colors;
console.log('Primary:', primary, 'Tertiary:', tertiary);

// Default values
const [a, b, c = 'yellow'] = ['red', 'green'];
console.log('With default:', c);

// 2. Object Destructuring
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name, age, email } = user;
console.log('User:', name, age, email);

// Rename variables
const { name: userName, age: userAge } = user;
console.log('Renamed:', userName, userAge);

// Nested destructuring
const { address: { city, country } } = user;
console.log('City:', city, 'Country:', country);

// Default values
const { phone = '123-456-7890' } = user;
console.log('Phone with default:', phone);

// === SPREAD OPERATOR ===
// 3. Array Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Combined array:', combined);

// Copy array (shallow)
const arrCopy = [...arr1];
console.log('Array copy:', arrCopy);

// 4. Object Spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log('Merged object:', merged);

// Override properties
const baseConfig = { theme: 'dark', lang: 'en' };
const userConfig = { ...baseConfig, theme: 'light' };
console.log('User config:', userConfig);

// === REST OPERATOR ===
// 5. Rest with Arrays
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log('First:', first, 'Rest:', rest);

// 6. Rest with Objects
const { name: username, ...otherDetails } = user;
console.log('Username:', username);
console.log('Other details:', otherDetails);

// 7. Function parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4, 5));`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [visualizationData, setVisualizationData] = useState({
        source: { a: 1, b: 2, c: 3 },
        destructured: { a: null, b: null, c: null }
    });

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

    // DESTRUCTURING & SPREAD CONCEPTS
    const concepts = [
        {
            category: "Array Destructuring",
            concepts: [
                {
                    name: "Basic Destructuring",
                    icon: <Split className="w-4 h-4 text-blue-500" />,
                    description: "Extract values from arrays into variables",
                    syntax: "const [a, b] = array;",
                    example: "const [x, y] = [10, 20]; // x=10, y=20",
                    useCase: "When you need individual elements from an array",
                    visual: "[10, 20] → const [x, y] = array"
                },
                {
                    name: "Skipping Elements",
                    icon: <Minus className="w-4 h-4 text-purple-500" />,
                    description: "Skip unwanted elements using commas",
                    syntax: "const [first, , third] = array;",
                    example: "const [a, , c] = [1, 2, 3]; // a=1, c=3",
                    useCase: "When you only need specific positions",
                    visual: "[1, 2, 3] → const [a, , c] = array"
                },
                {
                    name: "Default Values",
                    icon: <Box className="w-4 h-4 text-green-500" />,
                    description: "Provide fallback values if element is undefined",
                    syntax: "const [a = defaultValue] = array;",
                    example: "const [a = 5] = []; // a=5",
                    useCase: "When array might be shorter than expected",
                    visual: "[] → const [a = 5] = array"
                },
                {
                    name: "Rest Pattern",
                    icon: <Expand className="w-4 h-4 text-orange-500" />,
                    description: "Collect remaining elements into new array",
                    syntax: "const [first, ...rest] = array;",
                    example: "const [head, ...tail] = [1,2,3,4];",
                    useCase: "When you need first element and the rest separately",
                    visual: "[1,2,3,4] → const [head, ...tail]"
                }
            ]
        },
        {
            category: "Object Destructuring",
            concepts: [
                {
                    name: "Basic Object Destructuring",
                    icon: <Braces className="w-4 h-4 text-red-500" />,
                    description: "Extract properties from objects into variables",
                    syntax: "const { prop1, prop2 } = object;",
                    example: "const { name, age } = user;",
                    useCase: "When you need specific properties from an object",
                    visual: "{name:'John',age:30} → const {name, age}"
                },
                {
                    name: "Renaming Variables",
                    icon: <ArrowRightLeft className="w-4 h-4 text-pink-500" />,
                    description: "Assign property to variable with different name",
                    syntax: "const { prop: newName } = object;",
                    example: "const { name: userName } = user;",
                    useCase: "When variable name conflicts or needs to be descriptive",
                    visual: "{name:'John'} → const {name: userName}"
                },
                {
                    name: "Nested Destructuring",
                    icon: <Layers2 className="w-4 h-4 text-teal-500" />,
                    description: "Extract nested object properties",
                    syntax: "const { prop: { nestedProp } } = object;",
                    example: "const { address: { city } } = user;",
                    useCase: "When working with deeply nested objects",
                    visual: "{address:{city:'NY'}} → const {address:{city}}"
                },
                {
                    name: "Default Values",
                    icon: <Shield className="w-4 h-4 text-yellow-500" />,
                    description: "Provide fallback values for missing properties",
                    syntax: "const { prop = defaultValue } = object;",
                    example: "const { role = 'user' } = settings;",
                    useCase: "When property might be undefined",
                    visual: "{} → const {role = 'user'}"
                },
                {
                    name: "Computed Property Names",
                    icon: <Hash className="w-4 h-4 text-indigo-500" />,
                    description: "Destructure using dynamic property names",
                    syntax: "const { [key]: value } = object;",
                    example: "const key = 'name'; const { [key]: value } = obj;",
                    useCase: "When property name is determined at runtime",
                    visual: "const key='id'; const {[key]:value} = {id:1}"
                }
            ]
        },
        {
            category: "Spread Operator",
            concepts: [
                {
                    name: "Array Spread",
                    icon: <ScatterChart className="w-4 h-4 text-green-600" />,
                    description: "Expand array elements in place",
                    syntax: "...array",
                    example: "const combined = [...arr1, ...arr2];",
                    useCase: "Merging arrays or creating copies",
                    visual: "[1,2] + [3,4] → [...[1,2], ...[3,4]] = [1,2,3,4]"
                },
                {
                    name: "Object Spread",
                    icon: <Globe className="w-4 h-4 text-blue-600" />,
                    description: "Expand object properties in place",
                    syntax: "...object",
                    example: "const merged = { ...obj1, ...obj2 };",
                    useCase: "Merging objects or creating copies",
                    visual: "{a:1} + {b:2} → {...{a:1}, ...{b:2}} = {a:1,b:2}"
                },
                {
                    name: "Spread in Function Calls",
                    icon: <Zap className="w-4 h-4 text-orange-600" />,
                    description: "Pass array elements as individual arguments",
                    syntax: "function(...args)",
                    example: "Math.max(...numbers);",
                    useCase: "When function expects individual arguments but you have array",
                    visual: "Math.max(...[1,2,3]) = Math.max(1,2,3)"
                },
                {
                    name: "Shallow Copy",
                    icon: <Copy className="w-4 h-4 text-gray-600" />,
                    description: "Create shallow copy of arrays or objects",
                    syntax: "const copy = [...array]; or const copy = { ...object };",
                    example: "const arrCopy = [...original];",
                    useCase: "When you need a copy to avoid mutation",
                    visual: "[1,2,3] → [...[1,2,3]] = [1,2,3] (new array)"
                }
            ]
        },
        {
            category: "Rest Operator",
            concepts: [
                {
                    name: "Function Parameters",
                    icon: <GitPullRequest className="w-4 h-4 text-purple-600" />,
                    description: "Collect all function arguments into array",
                    syntax: "function(...args)",
                    example: "function sum(...numbers) { /* numbers is array */ }",
                    useCase: "When function accepts variable number of arguments",
                    visual: "sum(1,2,3) → ...numbers = [1,2,3]"
                },
                {
                    name: "Array Rest",
                    icon: <Boxes className="w-4 h-4 text-teal-600" />,
                    description: "Collect remaining array elements",
                    syntax: "const [first, ...rest] = array;",
                    example: "const [head, ...tail] = [1,2,3,4];",
                    useCase: "Separating first element from the rest",
                    visual: "[1,2,3,4] → [head, ...tail] where tail=[2,3,4]"
                },
                {
                    name: "Object Rest",
                    icon: <PackageOpen className="w-4 h-4 text-pink-600" />,
                    description: "Collect remaining object properties",
                    syntax: "const { prop1, ...rest } = object;",
                    example: "const { id, ...userData } = user;",
                    useCase: "Extracting specific properties, keeping rest together",
                    visual: "{id:1,name:'J'} → const {id, ...rest} where rest={name:'J'}"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Swapping Variables",
                    icon: <RefreshCw className="w-4 h-4 text-red-600" />,
                    description: "Swap variable values without temp variable",
                    syntax: "[a, b] = [b, a];",
                    example: "let a = 1, b = 2; [a, b] = [b, a]; // a=2, b=1",
                    useCase: "Clean variable swapping",
                    visual: "a=1,b=2 → [a,b]=[b,a] → a=2,b=1"
                },
                {
                    name: "Multiple Return Values",
                    icon: <GitMerge className="w-4 h-4 text-green-700" />,
                    description: "Return multiple values from function using array/object",
                    syntax: "return [a, b]; or return { a, b };",
                    example: "function getCoords() { return [x, y]; }",
                    useCase: "When function needs to return multiple related values",
                    visual: "function() { return [x, y]; } → const [x, y] = getCoords()"
                },
                {
                    name: "Parameter Destructuring",
                    icon: <Workflow className="w-4 h-4 text-blue-700" />,
                    description: "Destructure function parameters directly",
                    syntax: "function({ prop1, prop2 })",
                    example: "function printUser({ name, age }) { console.log(name, age); }",
                    useCase: "When function only needs specific properties from object",
                    visual: "printUser({name:'J',age:30}) → function({name, age})"
                },
                {
                    name: "Nested with Defaults",
                    icon: <Layers className="w-4 h-4 text-purple-700" />,
                    description: "Combine nested destructuring with default values",
                    syntax: "const { a: { b = defaultValue } } = obj;",
                    example: "const { settings: { theme = 'light' } } = user;",
                    useCase: "Safe extraction from potentially missing nested properties",
                    visual: "{} → const {settings:{theme='light'}}"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Basic Destructuring Practice",
            description: "Practice extracting values from arrays and objects",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Array Destructuring
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// TODO: 
// 1. Extract first and third fruits
// 2. Extract first fruit and collect rest in array
// 3. Extract second fruit with default 'mango' if undefined

// EXERCISE 2: Object Destructuring
const book = {
    title: 'JavaScript Guide',
    author: 'John Doe',
    year: 2023,
    publisher: 'Tech Books',
    ratings: {
        goodreads: 4.5,
        amazon: 4.7
    }
};

// TODO:
// 1. Extract title and author
// 2. Extract title as bookTitle and author as writer
// 3. Extract goodreads rating from nested ratings
// 4. Extract publisher with default 'Unknown'`,
            solution: `// SOLUTION 1
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// 1. First and third
const [firstFruit, , thirdFruit] = fruits;
console.log('First and third:', firstFruit, thirdFruit);

// 2. First and rest
const [head, ...tail] = fruits;
console.log('Head:', head, 'Tail:', tail);

// 3. Second with default
const [, second = 'mango'] = fruits;
console.log('Second with default:', second);

// SOLUTION 2
const book = {
    title: 'JavaScript Guide',
    author: 'John Doe',
    year: 2023,
    publisher: 'Tech Books',
    ratings: {
        goodreads: 4.5,
        amazon: 4.7
    }
};

// 1. Basic extraction
const { title, author } = book;
console.log('Book:', title, 'by', author);

// 2. Renaming
const { title: bookTitle, author: writer } = book;
console.log('Book title:', bookTitle, 'Writer:', writer);

// 3. Nested
const { ratings: { goodreads } } = book;
console.log('Goodreads rating:', goodreads);

// 4. Default value
const { publisher = 'Unknown' } = book;
console.log('Publisher:', publisher);`,
            hint: "Use commas to skip array elements. For nested destructuring, match the object structure."
        },
        {
            title: "Spread & Rest Operations",
            description: "Practice using spread and rest operators in various contexts",
            difficulty: "Intermediate",
            starterCode: `// EXERCISE 1: Array Spread
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// TODO:
// 1. Merge arrays
// 2. Create copy with additional element at beginning
// 3. Find maximum value using spread

// EXERCISE 2: Object Spread
const defaultSettings = {
    theme: 'dark',
    language: 'en',
    notifications: true
};

const userSettings = {
    theme: 'light',
    fontSize: 'medium'
};

// TODO:
// 1. Merge settings (user should override defaults)
// 2. Create new object with updated theme
// 3. Remove notifications property using rest

// EXERCISE 3: Rest Parameters
// TODO: Create function that accepts any number of arguments and:
// 1. Returns their sum
// 2. Returns the average
// 3. Returns an object with count and total`,
            solution: `// SOLUTION 1: Array Spread
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// 1. Merge
const merged = [...numbers, ...moreNumbers];
console.log('Merged:', merged);

// 2. Copy with prepend
const withZero = [0, ...numbers];
console.log('With zero:', withZero);

// 3. Max value
const max = Math.max(...numbers);
console.log('Max:', max);

// SOLUTION 2: Object Spread
const defaultSettings = {
    theme: 'dark',
    language: 'en',
    notifications: true
};

const userSettings = {
    theme: 'light',
    fontSize: 'medium'
};

// 1. Merge (user overrides)
const finalSettings = { ...defaultSettings, ...userSettings };
console.log('Final settings:', finalSettings);

// 2. Update theme
const darkTheme = { ...defaultSettings, theme: 'dark' };
console.log('Dark theme:', darkTheme);

// 3. Remove property
const { notifications, ...withoutNotifications } = defaultSettings;
console.log('Without notifications:', withoutNotifications);

// SOLUTION 3: Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function average(...numbers) {
    return sum(...numbers) / numbers.length;
}

function stats(...numbers) {
    const total = sum(...numbers);
    return {
        count: numbers.length,
        total: total,
        average: total / numbers.length
    };
}

console.log('Sum 1-5:', sum(1, 2, 3, 4, 5));
console.log('Average:', average(10, 20, 30));
console.log('Stats:', stats(1, 2, 3, 4));`,
            hint: "Spread operator expands elements, rest operator collects them. Later properties override earlier ones in object spread."
        },
        {
            title: "Real-World Patterns",
            description: "Apply destructuring and spread to practical scenarios",
            difficulty: "Advanced",
            starterCode: `// SCENARIO 1: API Response Processing
const apiResponse = {
    status: 'success',
    data: {
        users: [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
        ],
        page: 1,
        totalPages: 5
    },
    timestamp: '2024-01-15T10:30:00Z'
};

// TODO: Extract using destructuring:
// 1. status and timestamp
// 2. users array and page number
// 3. First user's name and email
// 4. All users' emails as array

// SCENARIO 2: Function Configuration
// TODO: Create a function configureApp that:
// 1. Accepts config object with defaults
// 2. Merges with user config
// 3. Returns final config with some properties removed

// SCENARIO 3: State Management
const currentState = {
    user: { id: 1, name: 'John' },
    cart: { items: [1, 2, 3], total: 300 },
    theme: 'dark'
};

// TODO: Create new state:
// 1. Add item to cart (immutably)
// 2. Update user name
// 3. Toggle theme`,
            solution: `// SOLUTION 1: API Response
const apiResponse = {
    status: 'success',
    data: {
        users: [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
        ],
        page: 1,
        totalPages: 5
    },
    timestamp: '2024-01-15T10:30:00Z'
};

// 1. Extract status and timestamp
const { status, timestamp } = apiResponse;
console.log('Status:', status, 'Time:', timestamp);

// 2. Extract users and page
const { data: { users, page } } = apiResponse;
console.log('Page:', page, 'Users count:', users.length);

// 3. First user's details
const { data: { users: [firstUser] } } = apiResponse;
const { name: firstName, email: firstEmail } = firstUser;
console.log('First user:', firstName, firstEmail);

// 4. All emails
const emails = users.map(({ email }) => email);
console.log('All emails:', emails);

// SOLUTION 2: Function Configuration
function configureApp(userConfig = {}) {
    const defaults = {
        theme: 'light',
        language: 'en',
        apiUrl: 'https://api.example.com',
        debug: false,
        version: '1.0.0'
    };
    
    // Merge with user config (user overrides defaults)
    const config = { ...defaults, ...userConfig };
    
    // Remove internal properties
    const { version, ...publicConfig } = config;
    
    return publicConfig;
}

const userConfig = { theme: 'dark', apiUrl: 'https://custom.api.com' };
console.log('App config:', configureApp(userConfig));

// SOLUTION 3: State Management
const currentState = {
    user: { id: 1, name: 'John' },
    cart: { items: [1, 2, 3], total: 300 },
    theme: 'dark'
};

// 1. Add item to cart
const newState1 = {
    ...currentState,
    cart: {
        ...currentState.cart,
        items: [...currentState.cart.items, 4],
        total: currentState.cart.total + 100
    }
};

// 2. Update user name
const newState2 = {
    ...currentState,
    user: { ...currentState.user, name: 'John Updated' }
};

// 3. Toggle theme
const newState3 = {
    ...currentState,
    theme: currentState.theme === 'dark' ? 'light' : 'dark'
};

console.log('State with new item:', newState1);
console.log('State with updated user:', newState2);
console.log('State with toggled theme:', newState3);`,
            hint: "Use nested destructuring for deep extraction. For immutability, always spread at each level you modify."
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

    const updateVisualization = (type, example) => {
        // This would update visualization based on selected example
        console.log('Update visualization:', type, example);
    };

    const patterns = [
        {
            name: "Swap Variables",
            code: `// Swap without temp variable\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b); // 2, 1`,
            description: "Clean variable swapping"
        },
        {
            name: "Function Defaults",
            code: `// Function with destructured defaults\nfunction greet({ name = 'Guest', greeting = 'Hello' } = {}) {\n  return \`\${greeting}, \${name}!\`;\n}\nconsole.log(greet()); // Hello, Guest!`,
            description: "Safe function parameters"
        },
        {
            name: "Clone & Modify",
            code: `// Immutable update pattern\nconst user = { name: 'John', age: 30 };\nconst updatedUser = { ...user, age: 31 };\nconsole.log(updatedUser); // {name: 'John', age: 31}`,
            description: "Update objects immutably"
        },
        {
            name: "Extract & Rename",
            code: `// API response processing\nconst response = { data: { userId: 123, userName: 'john' } };\nconst { data: { userId: id, userName: name } } = response;\nconsole.log(id, name); // 123, 'john'`,
            description: "Clean API data extraction"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson10" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 10: Destructuring & Spread</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Destructuring & Spread Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Unpack values, merge data, and write cleaner JavaScript with destructuring and spread syntax.
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
                            {/* Left Column: Theory */}
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <Grid className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Destructuring & Spread: Modern JavaScript Essentials
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Destructuring unpacks values from arrays/objects into variables. Spread expands iterables into individual elements. Together, they enable cleaner, more expressive code.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Split className="w-4 h-4" /> Destructuring
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Extract</strong> values from arrays/objects</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Default values</strong> for missing elements</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Rename</strong> variables during extraction</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Globe className="w-4 h-4" /> Spread & Rest
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Expand</strong> arrays/objects in place</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Merge</strong> multiple arrays/objects</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                    <span><strong>Collect</strong> remaining elements</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Quick Comparison
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                                    <th className="py-2 text-left">Syntax</th>
                                                    <th className="py-2 text-left">Purpose</th>
                                                    <th className="py-2 text-left">Example</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono text-blue-500">const [a,b] = arr</td>
                                                    <td className="py-3">Array destructuring</td>
                                                    <td className="py-3 font-mono text-xs">Extract first two elements</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono">
                                                        {"const {x, y} = obj"}
                                                    </td>

                                                    <td className="py-3">Object destructuring</td>
                                                    <td className="py-3 font-mono text-xs">Extract properties x and y</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono text-purple-500">...arr</td>
                                                    <td className="py-3">Spread operator</td>
                                                    <td className="py-3 font-mono text-xs">Expand array elements</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 font-mono text-orange-500">...args</td>
                                                    <td className="py-3">Rest operator</td>
                                                    <td className="py-3 font-mono text-xs">Collect arguments</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">destructuring-demo.js</span>
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
                                        Concept Explorer
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
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Visual Representation</h4>
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
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Try It Yourself</h4>
                                                        <button
                                                            onClick={() => updateVisualization(concept.name, concept.example)}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <Play className="w-4 h-4" />
                                                            Visualize This Pattern
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <ArrowRightLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                            onClick={() => setCode(`// Array Destructuring Practice\nconst numbers = [10, 20, 30, 40, 50];\n// Your code here\nconsole.log('Practice array destructuring');`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Array Destructuring
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Object Destructuring Practice\nconst user = {\n  id: 1,\n  name: 'Alice',\n  email: 'alice@example.com',\n  settings: { theme: 'dark', notifications: true }\n};\n// Your code here`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Object Destructuring
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Spread Practice\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\n// Your code here`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Spread Operator
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Rest Practice\nfunction process(...args) {\n  // Your code here\n}\n// Test with: process(1, 2, 3, 4, 5);`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Rest Parameters
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tips</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                                            <span>Use defaults to handle missing values</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                            <span>Rename variables to avoid conflicts</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                            <span>Spread creates shallow copies only</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                                            <span>Rest must be the last element in destructuring</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">playground.js</span>
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

                    {/* Tab Content: Visualizer */}
                    {activeTab === 'visualizer' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Visual Destructuring & Spread
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Interactive Examples
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Array Destructuring</h4>
                                                <div className="flex items-center justify-between mb-2">
                                                    <code className="text-sm bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">const [a, b] = [1, 2]</code>
                                                    <button className="text-xs text-blue-600 hover:underline">Visualize</button>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">[1, 2]</div>
                                                    <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                                                    <div className="flex gap-2">
                                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">a = 1</div>
                                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">b = 2</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Object Spread</h4>
                                                <div className="flex items-center justify-between mb-2">
                                                    <code className="text-sm bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                                                        {"const merged = {...obj1, ...obj2}"}
                                                    </code>

                                                    <button className="text-xs text-blue-600 hover:underline">Visualize</button>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">obj1: {"{a:1}"}</div>
                                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded">obj2: {"{b:2}"}</div>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <Merge className="w-4 h-4 text-slate-400" />
                                                    </div>
                                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">merged: {"{a:1, b:2}"}</div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Rest Operator</h4>
                                                <div className="flex items-center justify-between mb-2">
                                                    <code className="text-sm bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">const [first, ...rest] = array</code>
                                                    <button className="text-xs text-blue-600 hover:underline">Visualize</button>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">[1, 2, 3, 4]</div>
                                                    <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                                                    <div className="flex gap-2">
                                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">first: 1</div>
                                                        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded">rest: [2,3,4]</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Try Your Own Code
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-40 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Enter destructuring/spread code to visualize..."
                                            />
                                            <div className="flex gap-2">
                                                <button onClick={runCode} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                                    Visualize Code
                                                </button>
                                                <button onClick={resetCode} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Visual Representation</h4>
                                            {output && (
                                                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700">
                                                    <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
                                                        Output: {output.split('\n')[0]}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                                <p><strong>How it works:</strong></p>
                                                <ul className="mt-2 space-y-1">
                                                    <li>• Destructuring extracts values from right side to left side</li>
                                                    <li>• Spread (...) expands elements from source</li>
                                                    <li>• Rest (...) collects remaining elements</li>
                                                    <li>• Default values provide fallbacks for undefined</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Key Rules to Remember</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Destructuring:</strong> Right side → Left side
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Spread:</strong> Expands iterables in place
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Rest:</strong> Always last in pattern
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Defaults:</strong> Only used if value is undefined
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson9" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Advanced Functions</span>
                        </a>
                        <a href="/lesson11" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Modules & Import/Export</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}