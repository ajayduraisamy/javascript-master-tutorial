import React, { useState } from 'react';
import {
    Package, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Box, Folder,
    FileText, FolderTree, GitBranch, Upload,
    Download, Eye, EyeOff, Lock, Unlock,
    RefreshCw, Brain, Code, Lightbulb, Grid,
    Cpu, Database, Layers, Filter, Zap,
    ArrowRight, ArrowLeft, Merge, Split,
    Search, Settings, Wrench, PackageOpen,
    FileCode, FolderOpen, Share2, Network,
    Globe, Home, Users, Shield, Key
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson17() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === ES6 MODULES: MODERN JAVASCRIPT MODULARITY ===

// Modules allow you to split your code into separate files
// Each module has its own scope and can export/import functionality

// ========== EXPORT SYNTAX ==========

// 1. Named Exports (multiple per module)
export const apiKey = '12345-abcde-67890';
export const MAX_USERS = 1000;
export const DEFAULT_CONFIG = {
    theme: 'dark',
    language: 'en',
    debug: false
};

export function calculateTotal(price, quantity) {
    return price * quantity;
}

export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return \`Hello, \${this.name}!\`;
    }
}

// Export list (can be at bottom of file)
const privateHelper = () => {
    console.log('This is private to the module');
};

export { calculateTotal, User };

// 2. Default Export (one per module)
// Typically used for the main functionality
const App = {
    version: '1.0.0',
    init() {
        console.log('App initialized');
    }
};

export default App;

// 3. Re-exporting (barrel files)
// Useful for creating index files that aggregate exports
export { calculateTotal } from './math.js';
export { User } from './models.js';

// ========== IMPORT SYNTAX ==========

// 1. Importing Named Exports
// Import specific items with exact names
import { apiKey, MAX_USERS } from './config.js';
import { calculateTotal, User } from './utils.js';

console.log('API Key:', apiKey);
console.log('Max Users:', MAX_USERS);

const total = calculateTotal(29.99, 3);
console.log('Total:', total);

const user1 = new User('Alice', 'alice@example.com');
console.log(user1.greet());

// 2. Import with Aliases
// Useful for avoiding naming conflicts
import { calculateTotal as calculateSum } from './math.js';
import { User as Person } from './models.js';

const sum = calculateSum(10, 20);
const person = new Person('Bob', 'bob@example.com');

// 3. Import All as Namespace
// Import all exports as an object
import * as Config from './config.js';
import * as Utils from './utils.js';

console.log('Config:', Config.apiKey, Config.MAX_USERS);
console.log('Utils:', Utils.calculateTotal(5, 6));

// 4. Import Default Export
// No curly braces for default imports
import App from './app.js';
import Logger from './logger.js';

App.init();
Logger.log('App started');

// 5. Import for Side Effects Only
// When module has initialization code but no exports needed
import './analytics.js';  // Runs analytics setup
import './polyfills.js';  // Adds polyfills to global scope

// 6. Dynamic Imports (code splitting)
// Import modules at runtime
async function loadFeature(featureName) {
    try {
        // Dynamic import returns a promise
        const module = await import(\`./features/\${featureName}.js\`);
        module.initialize();
    } catch (error) {
        console.error(\`Failed to load feature \${featureName}:\`, error);
        // Fallback to basic version
        import('./features/basic.js').then(m => m.initialize());
    }
}

// ========== MODULE PATTERNS ==========

// 1. Singleton Pattern
// config.js
let instance = null;

class ConfigManager {
    constructor() {
        if (!instance) {
            this.settings = {};
            instance = this;
        }
        return instance;
    }
    
    set(key, value) {
        this.settings[key] = value;
    }
    
    get(key) {
        return this.settings[key];
    }
}

const configManager = new ConfigManager();
export default configManager;

// Usage: Every import gets the same instance
import config from './config.js';
config.set('theme', 'dark');

// 2. Factory Pattern
// userFactory.js
export function createUser(type, data) {
    switch(type) {
        case 'admin':
            return new AdminUser(data);
        case 'customer':
            return new CustomerUser(data);
        default:
            throw new Error('Unknown user type');
    }
}

class AdminUser {
    constructor(data) {
        this.role = 'admin';
        this.permissions = ['read', 'write', 'delete'];
        Object.assign(this, data);
    }
}

class CustomerUser {
    constructor(data) {
        this.role = 'customer';
        this.permissions = ['read'];
        Object.assign(this, data);
    }
}

// 3. Utility Module
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

// Optional: Export as object for convenience
export const MathUtils = {
    PI,
    add,
    subtract,
    multiply,
    divide
};

// 4. Service Module
// apiService.js
const BASE_URL = 'https://api.example.com';
const API_KEY = process.env.API_KEY;

async function request(endpoint, options = {}) {
    const url = \`\${BASE_URL}/\${endpoint}\`;
    
    const defaultOptions = {
        headers: {
            'Authorization': \`Bearer \${API_KEY}\`,
            'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    return response.json();
}

export const apiService = {
    async getUsers() {
        return request('users');
    },
    
    async getUser(id) {
        return request(\`users/\${id}\`);
    },
    
    async createUser(userData) {
        return request('users', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    },
    
    async updateUser(id, userData) {
        return request(\`users/\${id}\`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    },
    
    async deleteUser(id) {
        return request(\`users/\${id}\`, {
            method: 'DELETE'
        });
    }
};

// ========== REAL-WORLD EXAMPLE ==========

// File: src/utils/formatters.js
export function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

export function formatDate(date, locale = 'en-US') {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// File: src/services/auth.js
let currentUser = null;

export async function login(email, password) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    currentUser = {
        id: 1,
        email,
        name: 'John Doe',
        token: 'fake-jwt-token'
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    return currentUser;
}

export function logout() {
    currentUser = null;
    localStorage.removeItem('user');
}

export function getCurrentUser() {
    if (!currentUser) {
        const stored = localStorage.getItem('user');
        currentUser = stored ? JSON.parse(stored) : null;
    }
    return currentUser;
}

export const authService = {
    login,
    logout,
    getCurrentUser
};

// File: src/components/UserProfile.js
import { formatCurrency, formatDate } from '../utils/formatters.js';
import { authService } from '../services/auth.js';

export class UserProfile {
    constructor(user) {
        this.user = user;
    }
    
    render() {
        return \`
            <div class="user-profile">
                <h2>\${this.user.name}</h2>
                <p>Email: \${this.user.email}</p>
                <p>Member since: \${formatDate(this.user.joinedAt)}</p>
                <p>Balance: \${formatCurrency(this.user.balance)}</p>
            </div>
        \`;
    }
}

export default UserProfile;

// File: src/main.js - Entry point
import App from './app.js';
import { authService } from './services/auth.js';
import { formatCurrency } from './utils/formatters.js';
import UserProfile from './components/UserProfile.js';

// Dynamic imports for code splitting
const loadAnalytics = async () => {
    if (process.env.NODE_ENV === 'production') {
        const analytics = await import('./analytics.js');
        analytics.trackPageView();
    }
};

// Initialize app
async function initialize() {
    console.log('Initializing application...');
    
    // Check authentication
    const user = authService.getCurrentUser();
    
    if (user) {
        console.log('Welcome back,', user.name);
        
        // Load user profile component
        const profile = new UserProfile(user);
        document.getElementById('app').innerHTML = profile.render();
        
        // Load analytics (code split)
        await loadAnalytics();
    } else {
        console.log('Please log in');
        // Show login form
    }
    
    // Demo formatting
    console.log('Formatted amount:', formatCurrency(1234.56));
}

// Start the app
initialize().catch(console.error);

// ========== MODULE TRICKS ==========

// 1. Conditional Exports
const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = isDevelopment ? 
    { log: console.log, warn: console.warn, error: console.error } :
    { log: () => {}, warn: () => {}, error: () => {} };

// 2. Lazy Loading with Dynamic Import
class LazyLoader {
    constructor() {
        this.cache = new Map();
    }
    
    async load(modulePath) {
        if (this.cache.has(modulePath)) {
            return this.cache.get(modulePath);
        }
        
        const module = await import(modulePath);
        this.cache.set(modulePath, module);
        return module;
    }
}

// 3. Circular Dependency Solution
// fileA.js
import { b } from './fileB.js';

export const a = 'A';
export function useB() {
    return b + ' from A';
}

// fileB.js
import { a } from './fileA.js';

export const b = 'B';
export function useA() {
    return a + ' from B';
}

// Avoid by using function exports or restructuring

console.log('=== Module Examples Loaded ===');
console.log('Try importing different modules in the playground!');`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [moduleGraph, setModuleGraph] = useState({
        nodes: [
            { id: 'main', label: 'main.js', type: 'entry', status: 'pending' },
            { id: 'utils', label: 'utils.js', type: 'utility', status: 'pending' },
            { id: 'components', label: 'components/', type: 'folder', status: 'pending' },
            { id: 'services', label: 'services/', type: 'folder', status: 'pending' },
            { id: 'config', label: 'config.js', type: 'config', status: 'pending' }
        ],
        edges: [
            { from: 'main', to: 'utils' },
            { from: 'main', to: 'components' },
            { from: 'main', to: 'services' },
            { from: 'components', to: 'utils' },
            { from: 'services', to: 'config' }
        ]
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

            // Simulate module loading visualization
            const modules = ['config.js', 'utils.js', 'services.js', 'components.js', 'main.js'];
            let currentModule = 0;

            const loadInterval = setInterval(() => {
                if (currentModule >= modules.length) {
                    clearInterval(loadInterval);
                    return;
                }

                setModuleGraph(prev => ({
                    ...prev,
                    nodes: prev.nodes.map(node =>
                        node.label === modules[currentModule].replace('.js', '').replace('/', '')
                            ? { ...node, status: 'loaded' }
                            : node
                    )
                }));

                currentModule++;
            }, 300);

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

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// ES6 Modules Practice Area\nconsole.log("Master JavaScript modules...");`);
        setOutput('');
        setModuleGraph({
            nodes: [
                { id: 'main', label: 'main.js', type: 'entry', status: 'pending' },
                { id: 'utils', label: 'utils.js', type: 'utility', status: 'pending' },
                { id: 'components', label: 'components/', type: 'folder', status: 'pending' },
                { id: 'services', label: 'services/', type: 'folder', status: 'pending' },
                { id: 'config', label: 'config.js', type: 'config', status: 'pending' }
            ],
            edges: [
                { from: 'main', to: 'utils' },
                { from: 'main', to: 'components' },
                { from: 'main', to: 'services' },
                { from: 'components', to: 'utils' },
                { from: 'services', to: 'config' }
            ]
        });
    };

    const concepts = [
        {
            category: "Export Syntax",
            concepts: [
                {
                    name: "Named Exports",
                    icon: <FileText className="w-4 h-4 text-blue-500" />,
                    description: "Export multiple values with specific names from a module",
                    syntax: "export const name = value; export function name() {}",
                    example: "export const apiKey = '123'; export function calculate() {}",
                    useCase: "When you need to export multiple utilities, constants, or functions",
                    visual: "Module → Export {item1, item2, item3} → Import {item1, item2}"
                },
                {
                    name: "Default Export",
                    icon: <Box className="w-4 h-4 text-green-500" />,
                    description: "Export a single primary value as the default from a module",
                    syntax: "export default value;",
                    example: "export default class App {} or export default function() {}",
                    useCase: "When module has one main thing to export (component, class, config)",
                    visual: "Module → Export default mainThing → Import mainThing (no braces)"
                },
                {
                    name: "Re-exporting",
                    icon: <RefreshCw className="w-4 h-4 text-purple-500" />,
                    description: "Export items from other modules (barrel files)",
                    syntax: "export { name } from './module.js';",
                    example: "export { Button, Input } from './components';",
                    useCase: "Creating index files that aggregate exports from multiple modules",
                    visual: "Module A → Export → Barrel File → Re-export → Import from Barrel"
                }
            ]
        },
        {
            category: "Import Syntax",
            concepts: [
                {
                    name: "Named Imports",
                    icon: <Download className="w-4 h-4 text-orange-500" />,
                    description: "Import specific named exports from a module",
                    syntax: "import { name1, name2 } from './module.js';",
                    example: "import { calculate, format } from './utils.js';",
                    useCase: "When you need specific utilities from a module",
                    visual: "Import {specificItem} → Module exports {item1, item2, item3}"
                },
                {
                    name: "Default Imports",
                    icon: <PackageOpen className="w-4 h-4 text-teal-500" />,
                    description: "Import the default export from a module",
                    syntax: "import name from './module.js';",
                    example: "import App from './app.js'; import config from './config.js';",
                    useCase: "Importing the main/default export from a module",
                    visual: "Import defaultItem → Module exports default mainThing"
                },
                {
                    name: "Namespace Imports",
                    icon: <Folder className="w-4 h-4 text-pink-500" />,
                    description: "Import all exports as a single namespace object",
                    syntax: "import * as alias from './module.js';",
                    example: "import * as MathUtils from './math.js'; MathUtils.add(1,2);",
                    useCase: "When you need many exports from a module and want to namespace them",
                    visual: "Import * as Namespace → Module exports → Namespace.property"
                },
                {
                    name: "Dynamic Imports",
                    icon: <Zap className="w-4 h-4 text-yellow-500" />,
                    description: "Import modules at runtime (code splitting)",
                    syntax: "const module = await import('./module.js');",
                    example: "const analytics = await import('./analytics.js');",
                    useCase: "Lazy loading, conditional loading, code splitting for performance",
                    visual: "Runtime → await import(path) → Promise → Module loaded on demand"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Module Basics",
            description: "Create and import modules with different export/import patterns",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Create Utility Module
// Create a math.js module that exports:
// 1. Constants: PI, E
// 2. Functions: add, subtract, multiply, divide
// 3. Export all as both named exports and a MathUtils object

// EXERCISE 2: Import Patterns
// Create a main.js file that imports from math.js:
// 1. Import specific functions as named imports
// 2. Import all as namespace
// 3. Create alias for one function
// 4. Use the MathUtils object

// EXERCISE 3: Default Export
// Create a config.js module with:
// 1. Default export: configuration object
// 2. Named exports: environment constants
// 3. Import both in main.js`,
            solution: `// math.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

// Export as object for convenience
export const MathUtils = {
    PI,
    E,
    add,
    subtract,
    multiply,
    divide
};

// config.js
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
};

export const Environment = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TEST: 'test'
};

export default config;

// main.js
// 1. Named imports
import { add, subtract, PI } from './math.js';
console.log('Named imports:', add(5, 3), subtract(10, 4), PI);

// 2. Namespace import
import * as Math from './math.js';
console.log('Namespace:', Math.multiply(4, 5), Math.E);

// 3. Aliased import
import { divide as div } from './math.js';
console.log('Aliased:', div(10, 2));

// 4. Using object export
import { MathUtils } from './math.js';
console.log('MathUtils:', MathUtils.add(1, 2));

// 5. Default import
import config from './config.js';
import { Environment } from './config.js';

console.log('Config:', config);
console.log('Environment:', Environment.PRODUCTION);`,
            hint: "Remember: A module can have multiple named exports but only one default export. Use default for the main thing, named for utilities."
        }
    ];

    const patterns = [
        {
            name: "Named Export/Import",
            code: `// Named exports
export const PI = 3.14159;
export function calculateArea(radius) {
    return PI * radius * radius;
}

// Named imports
import { PI, calculateArea } from './math.js';
console.log('Area:', calculateArea(5));`,
            description: "Export and import specific items"
        },
        {
            name: "Default Export",
            code: `// Default export
const App = {
    version: '1.0.0',
    init() {
        console.log('App started');
    }
};

export default App;

// Default import
import MyApp from './app.js';
MyApp.init();`,
            description: "Main module export"
        },
        {
            name: "Barrel Export",
            code: `// index.js (barrel file)
export { Button } from './Button.js';
export { Input } from './Input.js';
export { Card } from './Card.js';

// Clean import
import { Button, Input, Card } from './components';`,
            description: "Aggregate exports in index files"
        },
        {
            name: "Dynamic Import",
            code: `// Lazy loading
async function loadFeature() {
    const module = await import('./heavyFeature.js');
    module.initialize();
}

// Conditional loading
if (user.isPremium) {
    import('./premiumFeatures.js').then(m => m.enable());
}`,
            description: "Load modules at runtime"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson17" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 3: Advanced</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 17: ES6 Modules</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    ES6 Modules Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Organize and structure JavaScript code with modern module system.
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
                                            <Package className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            ES6 Modules: Organized JavaScript
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        ES6 Modules provide a standardized way to organize JavaScript code into reusable, maintainable pieces with clear dependencies and encapsulation.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Upload className="w-4 h-4" /> Export Types
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Named:</strong> Multiple exports per file</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Default:</strong> One main export</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Re-export:</strong> Barrel files</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Download className="w-4 h-4" /> Import Types
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Static:</strong> Named, default, namespace</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Dynamic:</strong> Runtime loading</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                    <span><strong>Side-effect:</strong> Run module code</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Before vs After ES6 Modules
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                            <h3 className="font-medium text-red-700 dark:text-red-300 mb-2">Old Way (Global Scope)</h3>
                                            <pre className="text-sm font-mono text-red-800 dark:text-red-400">
                                                {`// script1.js - Pollutes global scope
var config = { apiKey: '123' };
function calculate() { /* ... */ }

// script2.js - Can override accidentally
var config = { apiKey: '456' }; // Oops!

// HTML - Manual dependency management
<script src="script1.js"></script>
<script src="script2.js"></script>`}
                                            </pre>
                                        </div>

                                        <div className="flex justify-center">
                                            <ArrowRight className="w-6 h-6 text-yellow-500" />
                                        </div>

                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">ES6 Modules (Encapsulated)</h3>
                                            <pre className="text-sm font-mono text-green-800 dark:text-green-300">
                                                {`// config.js - Explicit exports
export const apiKey = '123';

// math.js - Named exports
export function calculate() { /* ... */ }

// main.js - Explicit imports
import { apiKey } from './config.js';
import { calculate } from './math.js';

// HTML - Single entry point
<script type="module" src="main.js"></script>`}
                                            </pre>
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
                                            <span className="font-mono text-xs text-slate-400">modules-demo.js</span>
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

                                    {/* Module Loading Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <FolderTree className="w-4 h-4 text-blue-400" />
                                            <span className="text-xs font-semibold text-slate-400">Module Dependency Graph</span>
                                        </div>

                                        <div className="flex items-center justify-center space-x-4 mb-3">
                                            {moduleGraph.nodes.map((node, idx) => (
                                                <div key={idx} className="flex flex-col items-center">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-medium
                                                        ${node.status === 'loaded'
                                                            ? 'bg-green-900/50 text-green-300 border border-green-700'
                                                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                                                        }`}
                                                    >
                                                        {node.type === 'folder' ? <Folder className="w-4 h-4" /> :
                                                            node.type === 'entry' ? <FileCode className="w-4 h-4" /> :
                                                                <FileText className="w-4 h-4" />}
                                                    </div>
                                                    <span className="text-xs mt-1 text-slate-400">{node.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="text-xs text-slate-500 text-center">
                                            {moduleGraph.nodes.some(n => n.status === 'loaded')
                                                ? 'Modules loaded: ' + moduleGraph.nodes.filter(n => n.status === 'loaded').length + '/5'
                                                : 'Simulating module loading...'
                                            }
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
                                        Module Concept Explorer
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
                                                                // Simulate module loading for this concept
                                                                const moduleName = concept.name.toLowerCase().includes('export') ? 'export.js' : 'import.js';
                                                                setModuleGraph(prev => ({
                                                                    ...prev,
                                                                    nodes: prev.nodes.map(node =>
                                                                        node.label === 'utils'
                                                                            ? { ...node, status: 'loaded' }
                                                                            : node
                                                                    )
                                                                }));
                                                            }}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <FolderTree className="w-4 h-4" />
                                                            Visualize Module Loading
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Module Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <Package className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                            onClick={() => setCode(`// Named exports\nexport const API_KEY = '12345';\nexport const MAX_SIZE = 100;\nexport function formatText(text) {\n  return text.trim();\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Named Exports
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Default export\nconst App = {\n  version: '1.0.0',\n  init() {\n    console.log('App started');\n  }\n};\n\nexport default App;`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Default Export
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Barrel file (index.js)\nexport { Button } from './Button.js';\nexport { Input } from './Input.js';\nexport { Card } from './Card.js';\n\n// Clean import:\n// import { Button, Input, Card } from './components';`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Barrel Export
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Dynamic import\nasync function loadFeature(feature) {\n  try {\n    const module = await import(\`./features/\${feature}.js\`);\n    module.initialize();\n  } catch (error) {\n    console.error('Failed to load feature:', error);\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Dynamic Import
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Module Best Practices</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Use named exports for utilities</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Use default export for main component</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Create barrel files for directories</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Use dynamic imports for code splitting</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">module-playground.js</span>
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

                                    {/* Module Graph Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <FolderTree className="w-3 h-3 text-blue-400" />
                                            <span className="text-xs text-slate-400">Module Dependencies:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {moduleGraph.nodes.map((node, idx) => (
                                                <span key={idx} className={`px-2 py-0.5 text-xs rounded
                                                    ${node.status === 'loaded'
                                                        ? 'bg-green-900/50 text-green-300'
                                                        : 'bg-slate-800 text-slate-400'
                                                    }`}
                                                >
                                                    {node.label}
                                                </span>
                                            ))}
                                        </div>
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
                                    Module Dependency Visualizer
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Module Import/Export Flow
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Simple Module Chain</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`// math.js\nexport const PI = 3.14159;\nexport function circleArea(r) { return PI * r * r; }\n\n// main.js\nimport { PI, circleArea } from './math.js';\nconsole.log('Area:', circleArea(5));`);
                                                            runCode();
                                                        }}
                                                        className="w-full p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                    >
                                                        <div className="text-sm font-medium">Export → Import → Use</div>
                                                        <div className="text-xs text-slate-500 mt-1">Simple named export/import flow</div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Circular Dependencies</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`// Circular example (avoid this pattern)\n// a.js\nexport const a = 'A';\nimport { b } from './b.js';\nexport function getB() { return b; }\n\n// b.js\nexport const b = 'B';\nimport { a } from './a.js';\nexport function getA() { return a; }\n\n// main.js\nimport { a, getB } from './a.js';\nimport { b, getA } from './b.js';\nconsole.log(a, b, getA(), getB());`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Module A imports B, B imports A</code>
                                                    </button>
                                                    <div className="text-sm text-red-600 dark:text-red-400">
                                                        Warning: Circular dependencies can cause issues!
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Dynamic Import Timing</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`console.log('1: Before dynamic import');\n\n// Dynamic import loads later\nimport('./lazyModule.js').then(module => {\n    console.log('3: Lazy module loaded');\n    module.default();\n});\n\nconsole.log('2: After dynamic import (continues immediately)');`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Static vs dynamic import execution timing</code>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Module Architecture Simulation
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                    <div className="font-bold text-blue-700 dark:text-blue-300">Static Import</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Load at parse time</div>
                                                </div>
                                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                    <div className="font-bold text-green-700 dark:text-green-300">Dynamic Import</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Load at runtime</div>
                                                </div>
                                            </div>

                                            {/* Interactive Module Loader */}
                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => {
                                                        setModuleGraph({
                                                            nodes: [
                                                                { id: 'main', label: 'main.js', type: 'entry', status: 'loaded' },
                                                                { id: 'utils', label: 'utils.js', type: 'utility', status: 'loaded' },
                                                                { id: 'api', label: 'api.js', type: 'service', status: 'loaded' },
                                                                { id: 'ui', label: 'ui.js', type: 'component', status: 'pending' },
                                                                { id: 'analytics', label: 'analytics.js', type: 'dynamic', status: 'pending' }
                                                            ],
                                                            edges: [
                                                                { from: 'main', to: 'utils' },
                                                                { from: 'main', to: 'api' },
                                                                { from: 'ui', to: 'utils' },
                                                                { from: 'analytics', to: 'api' }
                                                            ]
                                                        });
                                                    }}
                                                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                                >
                                                    Simulate Static Import
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        // Simulate dynamic loading
                                                        setModuleGraph(prev => ({
                                                            ...prev,
                                                            nodes: prev.nodes.map(node =>
                                                                node.label === 'analytics.js'
                                                                    ? { ...node, status: 'loaded' }
                                                                    : node
                                                            )
                                                        }));
                                                    }}
                                                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                                                >
                                                    Simulate Dynamic Import
                                                </button>
                                            </div>
                                        </div>

                                        {/* Module Tree Visualization */}
                                        <div className="p-4 bg-slate-900 rounded-lg mb-4">
                                            <div className="text-sm text-slate-400 mb-2">Current Module Tree:</div>
                                            <div className="space-y-2">
                                                {moduleGraph.nodes.map((node, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full
                                                            ${node.status === 'loaded' ? 'bg-green-500' : 'bg-slate-600'}
                                                        `}></div>
                                                        <span className={`text-sm ${node.status === 'loaded' ? 'text-green-300' : 'text-slate-400'}`}>
                                                            {node.label} ({node.type})
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Try Your Module Code</h4>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Write module import/export code..."
                                            />
                                            <div className="flex gap-2">
                                                <button onClick={runCode} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                                    Visualize Dependencies
                                                </button>
                                                <button onClick={resetCode} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Module System Benefits</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Encapsulation:</strong> Private module scope
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Reusability:</strong> Import anywhere
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Maintainability:</strong> Organized code
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Performance:</strong> Tree shaking, code splitting
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson16" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Async/Await</span>
                        </a>
                        <a href="/lesson18" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Classes & OOP</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}