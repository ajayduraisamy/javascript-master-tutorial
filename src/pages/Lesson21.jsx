import React, { useState, useEffect, useRef } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Folder, Check, Copy, Play, AlertCircle, Code, Zap, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, Award, Key, Lock, Unlock, ChevronRight,
    ChevronLeft, Eye, EyeOff, RefreshCw, Maximize2, Minimize2,
    Edit, Trash2, Plus, Search, Grid, List, Filter, Layout,
    MousePointer, Pointer, Move, ZapOff, Clock, BatteryCharging,
    Wifi, Compass, BoxSelect, Type, Bold, Italic
} from 'lucide-react';

export default function Lesson21() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'code', 'practice'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [domColor, setDomColor] = useState('bg-blue-500');
    const [selectedElement, setSelectedElement] = useState(null);

    // Typing effect for title
    useEffect(() => {
        const text = "DOM Manipulation";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // DOM Elements for interactive demo
    const [domElements, setDomElements] = useState([
        { id: 1, type: 'div', content: 'Header', className: 'bg-blue-500 text-white', selected: false },
        { id: 2, type: 'p', content: 'This is a paragraph', className: 'bg-green-500 text-white', selected: false },
        { id: 3, type: 'button', content: 'Click Me!', className: 'bg-red-500 text-white', selected: false },
        { id: 4, type: 'span', content: 'Inline text', className: 'bg-yellow-500 text-black', selected: false },
    ]);

    // Solution Code
    const solutionCode = `// Complete DOM Manipulation Example
const container = document.getElementById('container');

// 1. Create new element
const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.className = 'box highlighted';
newDiv.textContent = 'Created with JavaScript!';

// 2. Add to DOM
container.appendChild(newDiv);

// 3. Modify existing element
const firstBox = document.querySelector('.box');
firstBox.style.backgroundColor = 'lightblue';
firstBox.textContent = 'Updated content!';

// 4. Add event listener
firstBox.addEventListener('click', function() {
    this.classList.toggle('active');
    console.log('Element clicked!');
});

// 5. Remove element
const oldElement = document.getElementById('oldElement');
if (oldElement) {
    oldElement.remove();
}`;

    const codeExamples = {
        selection: `// DOM Selection Methods
// Single element selectors
const byId = document.getElementById('myId');
const byClass = document.querySelector('.myClass');
const byTag = document.querySelector('div');

// Multiple elements selectors
const allByClass = document.getElementsByClassName('item');
const allByTag = document.getElementsByTagName('p');
const allByQuery = document.querySelectorAll('.container div');

console.log(byId);        // Returns single element
console.log(allByClass);  // Returns HTMLCollection
console.log(allByQuery);  // Returns NodeList`,

        manipulation: `// DOM Manipulation Methods
const element = document.querySelector('.my-element');

// Modify content
element.textContent = 'New text content';
element.innerHTML = '<strong>HTML</strong> content';
element.setAttribute('data-id', '123');

// Modify styles
element.style.color = 'red';
element.style.fontSize = '20px';
element.style.backgroundColor = '#f0f0f0';

// Modify classes
element.classList.add('active', 'highlighted');
element.classList.remove('old-class');
element.classList.toggle('hidden');

// Create new element
const newElement = document.createElement('div');
newElement.className = 'new-div';
newElement.textContent = 'I am new!';

// Add to DOM
element.appendChild(newElement);
element.prepend(newElement.cloneNode());`,
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

    const domMethods = [
        {
            name: 'getElementById',
            icon: MousePointer,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            example: 'document.getElementById("id")',
            description: 'Select element by ID',
            returns: 'Single Element'
        },
        {
            name: 'querySelector',
            icon: Search,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            example: 'document.querySelector(".class")',
            description: 'CSS selector match',
            returns: 'First Match'
        },
        {
            name: 'querySelectorAll',
            icon: Grid,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            example: 'document.querySelectorAll("p")',
            description: 'All matching elements',
            returns: 'NodeList'
        },
        {
            name: 'createElement',
            icon: Plus,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            example: 'document.createElement("div")',
            description: 'Create new element',
            returns: 'Element Object'
        },
        {
            name: 'appendChild',
            icon: Layout,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            example: 'parent.appendChild(child)',
            description: 'Add child to parent',
            returns: 'Added Child'
        },
        {
            name: 'removeChild',
            icon: Trash2,
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            border: 'border-pink-500/20',
            example: 'parent.removeChild(child)',
            description: 'Remove child element',
            returns: 'Removed Child'
        },
        {
            name: 'classList',
            icon: Edit,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20',
            example: 'element.classList.add("new")',
            description: 'CSS class manipulation',
            returns: 'DOMTokenList'
        },
        {
            name: 'setAttribute',
            icon: Key,
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
            border: 'border-teal-500/20',
            example: 'element.setAttribute("href", "#")',
            description: 'Set element attribute',
            returns: 'void'
        },
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Folder className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What is the DOM?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        The <span className="font-bold text-blue-600 dark:text-blue-400">Document Object Model (DOM)</span> is a programming interface for HTML documents. It represents the page as a tree structure where each node is an object representing a part of the document.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Tree Structure</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">HTML as a hierarchical tree of nodes</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-2">Live Interface</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Dynamic updates to page content</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-2">API</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Methods to interact with elements</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Layout className="w-5 h-5 text-green-600 dark:text-green-400" />
                        DOM Tree Visualization
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Every HTML element becomes a <span className="font-bold text-green-600 dark:text-green-400">node</span> in the DOM tree. JavaScript can access and manipulate these nodes to dynamically update the page.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-green-400 text-sm">
                            &lt;html&gt;<br />
                            &nbsp;&nbsp;&lt;head&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br />
                            &nbsp;&nbsp;&lt;/head&gt;<br />
                            &nbsp;&nbsp;&lt;body&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="content"&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Hello World&lt;/p&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&lt;/body&gt;<br />
                            &lt;/html&gt;
                        </code>
                    </div>
                </div>
            </div>
        ),
        code: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        Common DOM Operations
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Traversing the DOM:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Moving between nodes
const element = document.querySelector('.item');

// Parent/Child navigation
const parent = element.parentNode;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;

// Children collections
const children = element.children;      // Only element children
const childNodes = element.childNodes;  // All nodes (text, comments, etc.)`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Element Properties:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`const el = document.getElementById('myElement');

// Common properties
el.id;                    // Get/set ID
el.className;             // Get/set class string
el.classList;             // Class list object
el.innerHTML;             // HTML content
el.textContent;           // Text content
el.style;                 // Style object
el.dataset;               // Data-* attributes
el.attributes;            // All attributes

// Dimension properties
el.clientWidth;           // Width + padding
el.clientHeight;          // Height + padding
el.offsetWidth;           // Width + padding + border
el.offsetHeight;          // Height + padding + border`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        practice: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-red-200 dark:border-red-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <MousePointer className="w-5 h-5 text-red-600 dark:text-red-400" />
                        Interactive DOM Playground
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Experiment with DOM manipulation in real-time. See how your code affects the visual elements.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Element selected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Manipulation in progress</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Element removed</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    // Interactive DOM Demo Functions
    const addElement = () => {
        const newId = domElements.length + 1;
        const types = ['div', 'p', 'span', 'button'];
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500'];
        const type = types[Math.floor(Math.random() * types.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        setDomElements([
            ...domElements,
            {
                id: newId,
                type,
                content: `New ${type} Element`,
                className: `${color} text-white`,
                selected: false
            }
        ]);
    };

    const removeElement = (id) => {
        setDomElements(domElements.filter(el => el.id !== id));
    };

    const selectElement = (id) => {
        setDomElements(domElements.map(el => ({
            ...el,
            selected: el.id === id
        })));
        setSelectedElement(id);
    };

    const changeElementColor = (color) => {
        if (selectedElement) {
            setDomElements(domElements.map(el => {
                if (el.id === selectedElement) {
                    return { ...el, className: `${color} text-white` };
                }
                return el;
            }));
            setDomColor(color);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson21" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold animate-pulse">
                                MODULE 4: WEB APIs
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Folder className="w-4 h-4" /> Lesson 21
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Interact with Web Pages Programmatically
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Learn to dynamically access, modify, and control HTML elements using JavaScript. Master the art of creating interactive web experiences.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">25-35 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Zap className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-medium">Interactive</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Compass className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium">Core Web Skill</span>
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
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {tab === 'theory' && <BookOpen className="w-4 h-4" />}
                                    {tab === 'code' && <Code className="w-4 h-4" />}
                                    {tab === 'practice' && <MousePointer className="w-4 h-4" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="animate-in fade-in duration-500">
                            {tabContents[activeTab]}
                        </div>
                    </div>

                    {/* DOM Methods Grid */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                                    DOM Methods & Properties
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <BoxSelect className="w-4 h-4" />
                                <span className="hidden sm:inline">8 Essential Methods</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            {domMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className={`
                                        bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm 
                                        p-5 rounded-2xl border ${method.border}
                                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-${method.color.split('text-')[1]}/10
                                        transition-all duration-300 group cursor-pointer
                                        animate-in fade-in slide-in-from-bottom-4
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${method.bg}`}>
                                            <method.icon className={`w-6 h-6 ${method.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-500">
                                                {method.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {method.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                                                EXAMPLE
                                            </div>
                                            <code className="block w-full bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                                                {method.example}
                                            </code>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                Returns: <span className="font-bold text-blue-500">{method.returns}</span>
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(method.example)}
                                                className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                            >
                                                Copy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interactive DOM Playground */}
                    <section className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Code Editor */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                                <div className="flex justify-between items-center px-6 py-4 bg-slate-900/50 border-b border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-sm font-mono text-slate-400">dom_operations.js</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => runCode(codeExamples.selection)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                        >
                                            <Play className="w-4 h-4 fill-current" />
                                            Run Selection
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(codeExamples.selection)}
                                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() => runCode(codeExamples.selection)}
                                            className="px-3 py-1 rounded-lg bg-blue-900/50 hover:bg-blue-800 text-blue-300 hover:text-white text-xs font-mono border border-blue-800"
                                        >
                                            Selection
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.manipulation)}
                                            className="px-3 py-1 rounded-lg bg-green-900/50 hover:bg-green-800 text-green-300 hover:text-white text-xs font-mono border border-green-800"
                                        >
                                            Manipulation
                                        </button>
                                    </div>
                                    <pre className="font-mono text-slate-300 text-sm overflow-x-auto max-h-96">
                                        <code>{codeExamples.selection}</code>
                                    </pre>
                                </div>

                                {/* Output Console */}
                                {output && (
                                    <div className="border-t border-slate-800 bg-black/50">
                                        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-green-500" />
                                                <span className="text-sm font-bold text-slate-400">DOM OUTPUT</span>
                                            </div>
                                            <button
                                                onClick={() => setOutput('')}
                                                className="text-xs text-slate-500 hover:text-slate-300"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                        <pre className="p-6 text-green-400 font-mono text-sm whitespace-pre-wrap">
                                            {output}
                                        </pre>
                                    </div>
                                )}
                            </div>

                            {/* Interactive DOM Demo */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-3xl p-6 border border-slate-300 dark:border-slate-800 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <Move className="w-5 h-5 text-blue-500" />
                                        Interactive DOM Demo
                                    </h3>
                                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 font-mono">
                                        Live Preview
                                    </span>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Click on elements to select them, then use controls to manipulate the DOM in real-time.
                                </p>

                                {/* Controls */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <button
                                        onClick={addElement}
                                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Element
                                    </button>
                                    <button
                                        onClick={() => selectedElement && removeElement(selectedElement)}
                                        disabled={!selectedElement}
                                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${selectedElement
                                            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-lg hover:shadow-red-500/30'
                                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Remove Selected
                                    </button>
                                </div>

                                {/* Color Picker */}
                                <div className="mb-6">
                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                        Change Color:
                                    </div>
                                    <div className="flex gap-2">
                                        {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'].map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => changeElementColor(color)}
                                                disabled={!selectedElement}
                                                className={`w-8 h-8 rounded-full ${color} ${selectedElement ? 'hover:scale-110 transition-transform' : 'opacity-50'}`}
                                                title={color.replace('bg-', '').replace('-500', '')}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* DOM Elements Display */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 min-h-64 border-2 border-dashed border-slate-300 dark:border-slate-700">
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                                        #document (Live DOM Tree)
                                    </div>
                                    <div className="space-y-3">
                                        {domElements.map((element) => (
                                            <div
                                                key={element.id}
                                                onClick={() => selectElement(element.id)}
                                                className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${element.className} ${element.selected
                                                    ? 'ring-4 ring-blue-400 ring-offset-2 dark:ring-offset-slate-800 transform scale-105'
                                                    : 'hover:scale-[1.02] hover:shadow-lg'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="font-mono text-sm">
                                                        &lt;{element.type}&gt; {element.content} &lt;/{element.type}&gt;
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {element.selected && (
                                                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                                                        )}
                                                        <span className="text-xs opacity-75">
                                                            ID: {element.id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {domElements.length === 0 && (
                                            <div className="text-center py-8 text-slate-400">
                                                No elements in DOM. Click "Add Element" to start.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-blue-600">{domElements.length}</div>
                                        <div className="text-xs text-slate-500">Elements</div>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-green-600">
                                            {domElements.filter(e => e.type === 'div').length}
                                        </div>
                                        <div className="text-xs text-slate-500">Divs</div>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {selectedElement ? '1' : '0'}
                                        </div>
                                        <div className="text-xs text-slate-500">Selected</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Practice Exercise */}
                    <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-blue-200 dark:border-blue-900/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/30 animate-bounce">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">DOM Challenge</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Build a Dynamic List</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Real-time DOM</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-blue-600 dark:text-blue-400">Challenge:</span> Create a function that builds a dynamic list. Requirements:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Create an <span className="font-bold text-blue-600">unordered list (ul)</span> element</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Add <span className="font-bold text-green-600">5 list items (li)</span> with sequential numbers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Append the list to a <span className="font-bold text-purple-600">container div</span> with id "list-container"</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">dynamic_list.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a dynamic list with 5 items
function createDynamicList() {
    // Your code here
    
    // 1. Create ul element
    
    // 2. Create 5 li elements with text
    
    // 3. Append li's to ul
    
    // 4. Find container and append ul
    
}

// Call function to test
createDynamicList();`}
                                />

                                {/* Solution Reveal */}
                                {showSolution && (
                                    <div className="border-t border-slate-800 bg-green-950/20 animate-in slide-in-from-top-4">
                                        <div className="px-4 py-2 bg-green-900/30 border-b border-green-900/50 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-400" />
                                            <span className="text-xs font-bold text-green-400">Complete Solution</span>
                                        </div>
                                        <pre className="p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">
                                            {solutionCode}
                                        </pre>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={runPracticeCode}
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test DOM Code</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={clearPractice}
                                    className="px-6 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Reset
                                </button>
                            </div>

                            {/* Output Display */}
                            {practiceOutput && (
                                <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl p-5 border border-slate-800 animate-in fade-in">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-5 h-5 text-green-500" />
                                            <span className="font-bold text-slate-300">DOM Output</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Pointer className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Interactive</span>
                                        </div>
                                    </div>
                                    <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto p-4 bg-black/30 rounded-lg">
                                        {practiceOutput}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <a
                            href="/lesson20"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Design Patterns</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Module Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-21/23 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 21 • Module 4: Web APIs
                            </div>
                        </div>

                        <a
                            href="/lesson22"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Events</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </main>

            {/* Add CSS Animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                    background-size: 200% 200%;
                }
                .animate-gradient {
                    background-size: 300% 300%;
                    animation: gradient-x 5s ease infinite;
                }
            `}</style>
        </div>
    );
}