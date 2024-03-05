import React, { useState } from 'react';
import {
    Cpu, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw, Key,
    Hash, Filter, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Split, Merge, BookOpen, Brain,
    Folder, Lock, Unlock, Link, Shield, Database,
    Zap, Eye, EyeOff, Wrench, Settings, GitBranch,
    Cog, Package, Users, Globe, Target, Layers2
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson8() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === OBJECT FUNDAMENTALS ===
// 1. Creating Objects
const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
};

// 2. Accessing Properties
console.log(person.name);           // Dot notation
console.log(person['age']);         // Bracket notation
console.log(person.greet());        // Method call

// 3. Modifying Objects
person.email = 'john@example.com';  // Add property
delete person.isAdmin;              // Delete property
person.age = 31;                    // Update property

// === OBJECT METHODS ===
// 4. Object Static Methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log('Keys:', keys);
console.log('Values:', values);
console.log('Entries:', entries);

// 5. Copying Objects
const shallowCopy = { ...person };      // Spread operator
const deepCopy = JSON.parse(JSON.stringify(person));

// === PROTOTYPE CHAIN ===
// 6. Prototypal Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return \`Hi, I'm \${this.name}\`;
};

const john = new Person('John', 30);
console.log(john.introduce());

// 7. Checking Prototypes
console.log(john instanceof Person);
console.log(Object.getPrototypeOf(john) === Person.prototype);`);

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

    // OBJECT CONCEPTS & METHODS
    const objectConcepts = [
        {
            category: "Object Creation",
            concepts: [
                {
                    name: "Object Literal",
                    icon: <Key className="w-4 h-4 text-blue-500" />,
                    description: "Creating objects with {} syntax - most common way",
                    syntax: "const obj = { key: value, method() {} };",
                    example: "const user = { name: 'Alice', age: 25 };",
                    useCase: "When you need a simple object with known properties"
                },
                {
                    name: "Constructor Function",
                    icon: <Cpu className="w-4 h-4 text-purple-500" />,
                    description: "Creates object instances with 'new' keyword",
                    syntax: "function Class() { this.prop = value; }",
                    example: "function Car(brand) { this.brand = brand; }",
                    useCase: "When creating multiple similar objects (old approach)"
                },
                {
                    name: "Object.create()",
                    icon: <GitBranch className="w-4 h-4 text-green-500" />,
                    description: "Creates object with specified prototype",
                    syntax: "Object.create(proto, propertiesObject)",
                    example: "const child = Object.create(parent);",
                    useCase: "Pure prototypal inheritance without constructors"
                },
                {
                    name: "Class Syntax (ES6)",
                    icon: <Package className="w-4 h-4 text-yellow-500" />,
                    description: "Syntactic sugar over prototypes - modern way",
                    syntax: "class ClassName { constructor() {} method() {} }",
                    example: "class User { constructor(name) { this.name = name; } }",
                    useCase: "Modern OOP with inheritance, getters/setters"
                }
            ]
        },
        {
            category: "Property Management",
            concepts: [
                {
                    name: "Object.defineProperty()",
                    icon: <Settings className="w-4 h-4 text-red-500" />,
                    description: "Defines property with custom attributes",
                    syntax: "Object.defineProperty(obj, prop, descriptor)",
                    example: "Object.defineProperty(obj, 'id', { value: 1, writable: false });",
                    useCase: "When you need precise control over property behavior"
                },
                {
                    name: "Getters & Setters",
                    icon: <Lock className="w-4 h-4 text-pink-500" />,
                    description: "Computed properties with access control",
                    syntax: "get fullName() { return ... } set fullName(value) { ... }",
                    example: "get fullName() { return \`\${this.first} \${this.last}\`; }",
                    useCase: "Computed properties or validation on property assignment"
                },
                {
                    name: "Property Descriptors",
                    icon: <Eye className="w-4 h-4 text-orange-500" />,
                    description: "Control property behavior (writable, enumerable, configurable)",
                    syntax: "{ value, writable, enumerable, configurable }",
                    example: "Object.getOwnPropertyDescriptor(obj, 'prop');",
                    useCase: "Understanding or modifying property metadata"
                },
                {
                    name: "Seal/Freeze/PreventExtensions",
                    icon: <Shield className="w-4 h-4 text-teal-500" />,
                    description: "Object immutability methods",
                    syntax: "Object.freeze(obj) / .seal(obj) / .preventExtensions(obj)",
                    example: "const frozen = Object.freeze({ id: 1 });",
                    useCase: "Creating immutable objects for data integrity"
                }
            ]
        },
        {
            category: "Object Methods",
            concepts: [
                {
                    name: "Object.keys()",
                    icon: <Key className="w-4 h-4 text-blue-400" />,
                    description: "Returns array of object's own property names",
                    syntax: "Object.keys(obj)",
                    example: "Object.keys({a:1,b:2}); // ['a', 'b']",
                    useCase: "When you need to iterate over object properties"
                },
                {
                    name: "Object.values()",
                    icon: <Database className="w-4 h-4 text-green-400" />,
                    description: "Returns array of object's own property values",
                    syntax: "Object.values(obj)",
                    example: "Object.values({a:1,b:2}); // [1, 2]",
                    useCase: "When you only need the values from an object"
                },
                {
                    name: "Object.entries()",
                    icon: <Layers2 className="w-4 h-4 text-purple-400" />,
                    description: "Returns array of [key, value] pairs",
                    syntax: "Object.entries(obj)",
                    example: "Object.entries({a:1}); // [['a', 1]]",
                    useCase: "When you need both keys and values together"
                },
                {
                    name: "Object.assign()",
                    icon: <Merge className="w-4 h-4 text-yellow-400" />,
                    description: "Copies properties from source to target object",
                    syntax: "Object.assign(target, ...sources)",
                    example: "Object.assign({}, source1, source2);",
                    useCase: "Merging objects or creating shallow copies"
                }
            ]
        },
        {
            category: "Prototype & Inheritance",
            concepts: [
                {
                    name: "__proto__ vs prototype",
                    icon: <Link className="w-4 h-4 text-indigo-500" />,
                    description: "Understanding the prototype chain",
                    syntax: "obj.__proto__ / Constructor.prototype",
                    example: "john.__proto__ === Person.prototype; // true",
                    useCase: "Debugging inheritance or modifying prototypes"
                },
                {
                    name: "Object.getPrototypeOf()",
                    icon: <GitBranch className="w-4 h-4 text-pink-500" />,
                    description: "Get the prototype of an object (modern approach)",
                    syntax: "Object.getPrototypeOf(obj)",
                    example: "Object.getPrototypeOf([]) === Array.prototype;",
                    useCase: "Getting prototype without using __proto__"
                },
                {
                    name: "Object.setPrototypeOf()",
                    icon: <Wrench className="w-4 h-4 text-red-500" />,
                    description: "Set the prototype of an object",
                    syntax: "Object.setPrototypeOf(obj, prototype)",
                    example: "Object.setPrototypeOf(child, parent);",
                    useCase: "Dynamic inheritance (use with caution)"
                },
                {
                    name: "instanceof Operator",
                    icon: <Target className="w-4 h-4 text-blue-600" />,
                    description: "Checks if object is instance of constructor",
                    syntax: "obj instanceof Constructor",
                    example: "[] instanceof Array; // true",
                    useCase: "Type checking in inheritance hierarchies"
                }
            ]
        },
        {
            category: "Modern ES6+ Features",
            concepts: [
                {
                    name: "Spread Operator (...)",
                    icon: <Globe className="w-4 h-4 text-green-600" />,
                    description: "Copy or merge objects with ... syntax",
                    syntax: "const copy = { ...original };",
                    example: "const merged = { ...obj1, ...obj2 };",
                    useCase: "Object copying and merging (modern alternative to assign)"
                },
                {
                    name: "Object Destructuring",
                    icon: <Split className="w-4 h-4 text-orange-600" />,
                    description: "Extract properties into variables",
                    syntax: "const { prop1, prop2 } = obj;",
                    example: "const { name, age } = user;",
                    useCase: "Extracting multiple properties cleanly"
                },
                {
                    name: "Computed Property Names",
                    icon: <Hash className="w-4 h-4 text-purple-600" />,
                    description: "Use expressions as property names",
                    syntax: "const obj = { [expression]: value };",
                    example: "const key = 'id'; const obj = { [key]: 123 };",
                    useCase: "Dynamic property names"
                },
                {
                    name: "Method Shorthand",
                    icon: <Zap className="w-4 h-4 text-yellow-600" />,
                    description: "Concise method syntax in object literals",
                    syntax: "const obj = { method() { ... } };",
                    example: "const obj = { greet() { return 'Hi'; } };",
                    useCase: "Defining methods without 'function' keyword"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Object Creation & Manipulation",
            description: "Practice creating and modifying objects using various techniques",
            difficulty: "Beginner",
            starterCode: `// TASK 1: Create a user object with properties
// - name, email, age, isActive
// - Add a greet method that returns "Hello, [name]"
// - Add a property using bracket notation: 'userType' = 'premium'
// - Update age by 1
// - Delete isActive property

// Your code here:


// TASK 2: Create an object using Object.create()
// - Create a vehicle prototype with start() method
// - Create a car that inherits from vehicle
// - Add car-specific property: wheels = 4

// Your code here:`,
            solution: `// SOLUTION 1
const user = {
    name: 'John',
    email: 'john@example.com',
    age: 30,
    isActive: true,
    greet() {
        return \`Hello, \${this.name}\`;
    }
};

user['userType'] = 'premium';
user.age += 1;
delete user.isActive;

console.log(user);
console.log(user.greet());

// SOLUTION 2
const vehicle = {
    start() {
        return 'Vehicle starting...';
    }
};

const car = Object.create(vehicle);
car.wheels = 4;
car.brand = 'Toyota';

console.log(car.start());  // Inherited
console.log(car.wheels);   // Own property`,
            hint: "Remember: dot notation for known keys, bracket notation for dynamic keys. Object.create() sets up inheritance."
        },
        {
            title: "Object Methods & Iteration",
            description: "Practice using Object static methods and iterating over objects",
            difficulty: "Intermediate",
            starterCode: `const products = {
    laptop: { price: 999, stock: 5 },
    phone: { price: 699, stock: 10 },
    tablet: { price: 399, stock: 8 },
    headphones: { price: 199, stock: 15 }
};

// TASK 1: Use Object methods to:
// 1. Get all product names (keys)
// 2. Get all product objects (values)
// 3. Convert to array of [key, value] pairs
// 4. Filter products with stock < 10

// TASK 2: Calculate total inventory value
// - Use Object.values() and reduce()

// TASK 3: Create a new object with 10% discount
// - Use Object.entries() and reduce()`,
            solution: `const products = {
    laptop: { price: 999, stock: 5 },
    phone: { price: 699, stock: 10 },
    tablet: { price: 399, stock: 8 },
    headphones: { price: 199, stock: 15 }
};

// TASK 1
const productNames = Object.keys(products);
console.log('Product names:', productNames);

const productList = Object.values(products);
console.log('Product list:', productList);

const productEntries = Object.entries(products);
console.log('Product entries:', productEntries);

const lowStock = Object.entries(products)
    .filter(([name, product]) => product.stock < 10)
    .map(([name]) => name);
console.log('Low stock products:', lowStock);

// TASK 2
const totalValue = Object.values(products)
    .reduce((total, product) => total + (product.price * product.stock), 0);
console.log('Total inventory value: $', totalValue);

// TASK 3
const discountedProducts = Object.entries(products)
    .reduce((acc, [name, product]) => {
        acc[name] = {
            ...product,
            discountedPrice: product.price * 0.9
        };
        return acc;
    }, {});
console.log('Discounted products:', discountedProducts);`,
            hint: "Combine Object.entries() with array methods for complex transformations. Use spread operator for immutability."
        },
        {
            title: "Prototypes & Class Inheritance",
            description: "Implement inheritance using both prototypes and ES6 classes",
            difficulty: "Advanced",
            starterCode: `// TASK 1: Create inheritance using prototypes
// - Animal constructor with name and eat() method
// - Dog constructor that inherits from Animal, adds bark() method
// - Create instance and test inheritance chain

// TASK 2: Convert to ES6 classes
// - Create same hierarchy using class syntax
// - Add getter for full description
// - Add static method to count instances

// TASK 3: Implement method overriding
// - Override eat() method in Dog class
// - Call parent method using super()`,
            solution: `// TASK 1: Prototype Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return \`\${this.name} is eating\`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return \`\${this.name} is barking\`;
};

const dog1 = new Dog('Buddy', 'Golden');
console.log(dog1.eat());  // Inherited
console.log(dog1.bark()); // Own method

// TASK 2: ES6 Classes
class AnimalClass {
    constructor(name) {
        this.name = name;
        AnimalClass.count++;
    }
    
    eat() {
        return \`\${this.name} is eating\`;
    }
    
    get description() {
        return \`Animal named \${this.name}\`;
    }
    
    static getCount() {
        return AnimalClass.count;
    }
}
AnimalClass.count = 0;

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    // TASK 3: Method Overriding
    eat() {
        return \`\${super.eat()} dog food\`;
    }
    
    bark() {
        return \`\${this.name} is barking\`;
    }
    
    get description() {
        return \`Dog named \${this.name}, breed: \${this.breed}\`;
    }
}

const dog2 = new DogClass('Max', 'Labrador');
console.log(dog2.eat());  // Overridden method
console.log(dog2.description); // Getter
console.log('Total animals:', AnimalClass.getCount()); // Static method`,
            hint: "Remember: super() must be called before using 'this' in child constructor. Static methods belong to class, not instances."
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

    const loadExample = (exampleCode) => {
        setCode(exampleCode);
        setActiveTab('practice-lab');
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson8" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 8: Objects & Prototypes</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Complete Objects & Prototypes Guide
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master JavaScript objects from basics to advanced prototypes, inheritance, and modern ES6+ features.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <Key className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'practice-lab', 'prototype-visualizer'].map((tab) => (
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
                                            <Cpu className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Objects: JavaScript's Core Building Block
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Objects are collections of key-value pairs. Everything in JavaScript that is not a primitive (string, number, etc.) is an object. They form the basis of OOP in JavaScript through prototypal inheritance.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Key className="w-4 h-4" /> Property Types
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Data Properties:</strong> Store values</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Accessor Properties:</strong> Getters/Setters</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Internal Properties:</strong> [[Prototype]]</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                                            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                                <Link className="w-4 h-4" /> Prototype Chain
                                            </h3>
                                            <div className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                                                <div className="font-mono text-xs bg-white dark:bg-slate-800 p-2 rounded">
                                                    <div>instance → Constructor.prototype</div>
                                                    <div>→ Object.prototype → null</div>
                                                </div>
                                                <p className="mt-2 text-xs">Every object links to a prototype object</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Quick Reference
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {objectConcepts.map((category, idx) => (
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
                                                                const conceptIndex = objectConcepts.slice(0, idx)
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

                            {/* Right Column: Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">objects-demo.js</span>
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
                                        Object Concepts Explorer
                                    </h2>
                                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                        <button
                                            onClick={() => setCurrentConcept(prev => Math.max(0, prev - 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 font-mono text-sm font-medium">
                                            {currentConcept + 1} / {objectConcepts.flatMap(c => c.concepts).length}
                                        </span>
                                        <button
                                            onClick={() => setCurrentConcept(prev => Math.min(objectConcepts.flatMap(c => c.concepts).length - 1, prev + 1))}
                                            className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-md shadow-sm transition-all"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {(() => {
                                    const allConcepts = objectConcepts.flatMap(c => c.concepts);
                                    const concept = allConcepts[currentConcept] || allConcepts[0];
                                    const category = objectConcepts.find(c => c.concepts.includes(concept));

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
                                                                onClick={() => loadExample(concept.example)}
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
                                            <button
                                                onClick={runCode}
                                                className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                            >
                                                Test Solution
                                            </button>
                                        </div>

                                        {showSolution && (
                                            <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-4 rounded-xl">
                                                <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-500">
                                                    <Cpu className="w-4 h-4" />
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

                    {/* Tab Content: Practice Lab */}
                    {activeTab === 'practice-lab' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCode(`// Object Basics\nconst user = {\n  name: 'Alice',\n  age: 25,\n  email: 'alice@example.com'\n};\n\n// TODO: Add method, update property, delete property`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Beginner</div>
                                            <div className="text-xs text-slate-500">Basic Object Operations</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Object Methods\nconst data = { a: 1, b: 2, c: 3 };\n\n// TODO: Use Object.keys(), Object.values(), Object.entries()\n// Transform, filter, or calculate based on object data`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Intermediate</div>
                                            <div className="text-xs text-slate-500">Object Static Methods</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Prototypes & Classes\n// TODO: Create class hierarchy\n// Implement inheritance, getters/setters, static methods\n// Practice method overriding`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Advanced</div>
                                            <div className="text-xs text-slate-500">OOP & Prototypes</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Patterns</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Factory Function\nfunction createUser(name, email) {\n  return {\n    name,\n    email,\n    createdAt: new Date(),\n    getEmail() { return this.email; }\n  };\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Factory Pattern
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Singleton Pattern\nconst Config = {\n  apiUrl: 'https://api.example.com',\n  get(key) { return this[key]; },\n  set(key, value) { this[key] = value; }\n};\nObject.freeze(Config);`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Singleton Pattern
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Object Composition\nconst canFly = { fly() { return 'Flying!'; } };\nconst canSwim = { swim() { return 'Swimming!'; } };\n\nfunction createBird(name) {\n  return { name, ...canFly };\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Composition over Inheritance
                                        </button>
                                    </div>
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
                                        className="flex-1 w-full bg-slate-950 text-slate-300 font-mono text-sm p-4 focus:outline-none min-h-[300px]"
                                        spellCheck="false"
                                    />
                                    {output && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap">{output}</pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab Content: Prototype Visualizer */}
                    {activeTab === 'prototype-visualizer' && (
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Prototype Chain Visualizer
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                        Enter Custom Hierarchy
                                    </h3>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                        <textarea
                                            className="w-full h-40 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm"
                                            defaultValue={`// Example: Animal → Mammal → Dog
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function() { return 'Eating'; };

function Mammal(name) {
    Animal.call(this, name);
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.walk = function() { return 'Walking'; };

function Dog(name, breed) {
    Mammal.call(this, name);
    this.breed = breed;
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { return 'Barking'; };

const myDog = new Dog('Buddy', 'Golden');`}
                                        />
                                        <button className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                            Visualize Chain
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                        Visualization
                                    </h3>
                                    <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-300 dark:border-slate-700">
                                        <div className="space-y-4">
                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
                                                <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">myDog (Instance)</div>
                                                <div className="text-xs text-slate-500">Properties: name, breed</div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-6 bg-slate-400"></div>
                                            </div>

                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
                                                <div className="font-mono text-sm font-bold text-purple-600 dark:text-purple-400">Dog.prototype</div>
                                                <div className="text-xs text-slate-500">Methods: bark(), constructor</div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-6 bg-slate-400"></div>
                                            </div>

                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
                                                <div className="font-mono text-sm font-bold text-green-600 dark:text-green-400">Mammal.prototype</div>
                                                <div className="text-xs text-slate-500">Methods: walk()</div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-6 bg-slate-400"></div>
                                            </div>

                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-yellow-200 dark:border-yellow-800">
                                                <div className="font-mono text-sm font-bold text-yellow-600 dark:text-yellow-400">Animal.prototype</div>
                                                <div className="text-xs text-slate-500">Methods: eat()</div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-6 bg-slate-400"></div>
                                            </div>

                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700">
                                                <div className="font-mono text-sm font-bold text-slate-600 dark:text-slate-400">Object.prototype</div>
                                                <div className="text-xs text-slate-500">Built-in methods: toString(), etc.</div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-0.5 h-6 bg-slate-400"></div>
                                            </div>

                                            <div className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-400 dark:border-slate-600">
                                                <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-500">null</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                                        <p><strong>Prototype Chain:</strong> myDog → Dog.prototype → Mammal.prototype → Animal.prototype → Object.prototype → null</p>
                                        <p className="mt-2"><strong>Key Insight:</strong> JavaScript looks up properties through this chain. If a property isn't found on the object, it checks the prototype, then the prototype's prototype, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson7" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Array </span>
                        </a>
                        <a href="/lesson9" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Modern JavaScript: ES6</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}