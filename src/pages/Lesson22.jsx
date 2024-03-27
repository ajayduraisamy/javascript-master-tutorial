import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Zap, Check, Copy, Play, AlertCircle, Code, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, Award, Key, Lock, Unlock, ChevronRight,
    ChevronLeft, Eye, EyeOff, RefreshCw, Maximize2, Minimize2,
    MousePointer, Pointer, Move, Clock, BatteryCharging,
    Wifi, Cursor, Compass, BoxSelect, Type, Bold, Italic,
    Volume2, VolumeX, Mic, MicOff, Upload, Download,
    Maximize, Minimize, RotateCcw, Search, Filter
} from 'lucide-react';

export default function Lesson22() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'code', 'practice'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [eventLog, setEventLog] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [keyPressed, setKeyPressed] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [isListening, setIsListening] = useState(false);

    // Typing effect for title
    useEffect(() => {
        const text = "Event Handling";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Mouse movement tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (isListening) {
                addEventLog('mousemove', `X: ${e.clientX}, Y: ${e.clientY}`);
            }
        };

        const handleKeyDown = (e) => {
            setKeyPressed(e.key);
            if (isListening) {
                addEventLog('keydown', `Key: ${e.key}, Code: ${e.code}`);
            }
        };

        const handleKeyUp = () => {
            setKeyPressed('');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isListening]);

    const addEventLog = (type, details) => {
        const newLog = {
            id: Date.now(),
            type,
            details,
            timestamp: new Date().toLocaleTimeString(),
            color: getEventColor(type)
        };
        setEventLog(prev => [newLog, ...prev.slice(0, 9)]); // Keep last 10 events
    };

    const getEventColor = (type) => {
        const colors = {
            click: 'text-blue-500 bg-blue-500/10',
            keydown: 'text-green-500 bg-green-500/10',
            mousemove: 'text-purple-500 bg-purple-500/10',
            scroll: 'text-yellow-500 bg-yellow-500/10',
            submit: 'text-red-500 bg-red-500/10',
            change: 'text-pink-500 bg-pink-500/10',
            focus: 'text-indigo-500 bg-indigo-500/10',
            blur: 'text-teal-500 bg-teal-500/10',
            default: 'text-slate-500 bg-slate-500/10'
        };
        return colors[type] || colors.default;
    };

    // Solution Code
    const solutionCode = `// Complete Event Handling Example
const button = document.getElementById('myButton');
const input = document.getElementById('myInput');
const container = document.getElementById('container');

// 1. Click event with multiple handlers
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Coordinates:', event.clientX, event.clientY);
    
    // Prevent default if needed
    event.preventDefault();
    
    // Stop propagation
    event.stopPropagation();
});

// 2. Input events
input.addEventListener('input', (e) => {
    console.log('Input value:', e.target.value);
});

input.addEventListener('focus', () => {
    console.log('Input focused');
});

input.addEventListener('blur', () => {
    console.log('Input lost focus');
});

// 3. Keyboard events
document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
    if (e.key === 'Escape') {
        console.log('Escape pressed!');
    }
});

// 4. Custom events
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' }
});

button.addEventListener('myCustomEvent', (e) => {
    console.log('Custom event received:', e.detail.message);
});

// Trigger custom event
button.dispatchEvent(customEvent);`;

    const codeExamples = {
        basic: `// Basic Event Listeners
const button = document.getElementById('myButton');

// Method 1: addEventListener (Recommended)
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event object:', event);
    console.log('Target element:', event.target);
    console.log('Mouse coordinates:', event.clientX, event.clientY);
});

// Method 2: Inline HTML (Not Recommended)
// <button onclick="handleClick()">Click me</button>

// Method 3: Element property
button.onclick = function() {
    console.log('Button clicked via onclick property');
};

// Multiple events on same element
button.addEventListener('mouseover', () => {
    console.log('Mouse over button');
});

button.addEventListener('mouseout', () => {
    console.log('Mouse left button');
});`,

        propagation: `// Event Propagation: Bubbling and Capturing
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

// Bubbling Phase (default)
outer.addEventListener('click', () => {
    console.log('Outer clicked (bubbling)');
});

inner.addEventListener('click', () => {
    console.log('Inner clicked (bubbling)');
});

button.addEventListener('click', (e) => {
    console.log('Button clicked');
    // e.stopPropagation(); // Stop bubbling
    // e.stopImmediatePropagation(); // Stop all handlers
});

// Capturing Phase (useCapture: true)
outer.addEventListener('click', () => {
    console.log('Outer clicked (capturing)');
}, true);

inner.addEventListener('click', () => {
    console.log('Inner clicked (capturing)');
}, true);

// Event delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        console.log('Item clicked via delegation:', e.target);
    }
});`,

        keyboard: `// Keyboard Events
document.addEventListener('keydown', (event) => {
    console.log('Key down:', event.key);
    console.log('Key code:', event.code);
    console.log('Ctrl pressed:', event.ctrlKey);
    console.log('Shift pressed:', event.shiftKey);
    console.log('Alt pressed:', event.altKey);
});

document.addEventListener('keyup', (event) => {
    console.log('Key up:', event.key);
});

document.addEventListener('keypress', (event) => {
    console.log('Key pressed:', event.key);
});

// Specific key handling
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter pressed');
        event.preventDefault(); // Prevent form submission
    }
    
    if (event.key === 'Escape') {
        console.log('Escape pressed - closing modal');
    }
    
    if (event.ctrlKey && event.key === 's') {
        console.log('Ctrl+S pressed - saving');
        event.preventDefault(); // Prevent browser save dialog
    }
});`
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

    const eventTypes = [
        {
            name: 'click',
            icon: MousePointer,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            example: 'element.addEventListener("click", handler)',
            description: 'Mouse click/touch tap',
            commonUse: 'Buttons, links, interactive elements'
        },
        {
            name: 'keydown',
            icon: Type,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            example: 'document.addEventListener("keydown", handler)',
            description: 'Keyboard key pressed',
            commonUse: 'Form inputs, keyboard shortcuts'
        },
        {
            name: 'input',
            icon: Bold,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            example: 'input.addEventListener("input", handler)',
            description: 'Input value changed',
            commonUse: 'Real-time validation, search'
        },
        {
            name: 'submit',
            icon: Upload,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            example: 'form.addEventListener("submit", handler)',
            description: 'Form submission',
            commonUse: 'Form validation, AJAX requests'
        },
        {
            name: 'scroll',
            icon: Move,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            example: 'window.addEventListener("scroll", handler)',
            description: 'Element scrolling',
            commonUse: 'Infinite scroll, animations'
        },
        {
            name: 'load',
            icon: Download,
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            border: 'border-pink-500/20',
            example: 'window.addEventListener("load", handler)',
            description: 'Resource loaded',
            commonUse: 'Initialization, DOM ready'
        },
        {
            name: 'mouseover',
            icon: Cursor,
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20',
            example: 'element.addEventListener("mouseover", handler)',
            description: 'Mouse enters element',
            commonUse: 'Hover effects, tooltips'
        },
        {
            name: 'focus',
            icon: Target,
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
            border: 'border-teal-500/20',
            example: 'input.addEventListener("focus", handler)',
            description: 'Element gains focus',
            commonUse: 'Form fields, accessibility'
        },
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        What are Events?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Events are <span className="font-bold text-yellow-600 dark:text-yellow-400">actions or occurrences</span> that happen in the browser, which can be detected and responded to using JavaScript. They're the foundation of interactive web applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-yellow-600 mb-2">User Events</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Clicks, key presses, mouse movements</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Browser Events</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Page load, resize, scroll</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-2">Network Events</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">AJAX responses, resource loading</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Compass className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Event Flow: Bubbling & Capturing
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Events propagate through the DOM in three phases: <span className="font-bold text-green-600 dark:text-green-400">Capturing</span> (top-down), <span className="font-bold text-blue-600 dark:text-blue-400">Target</span>, and <span className="font-bold text-purple-600 dark:text-purple-400">Bubbling</span> (bottom-up).
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-green-400 text-sm">
                            // Event Propagation Example<br />
                            &lt;div id="grandparent"&gt;<br />
                            &nbsp;&nbsp;&lt;div id="parent"&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button id="child"&gt;Click me&lt;/button&gt;<br />
                            &nbsp;&nbsp;&lt;/div&gt;<br />
                            &lt;/div&gt;<br /><br />
                            // Clicking button triggers:<br />
                            1. Capture: grandparent → parent → button<br />
                            2. Target: button (handled here)<br />
                            3. Bubble: button → parent → grandparent
                        </code>
                    </div>
                </div>
            </div>
        ),
        code: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Event Object & Methods
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Event Object Properties:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`function handleEvent(event) {
    // Common properties
    event.type;           // Event type ('click', 'keydown', etc.)
    event.target;         // Element that triggered event
    event.currentTarget;  // Element with event listener
    event.timeStamp;      // Time when event occurred
    
    // Mouse event properties
    event.clientX;        // X coordinate relative to viewport
    event.clientY;        // Y coordinate relative to viewport
    event.pageX;          // X coordinate relative to document
    event.pageY;          // Y coordinate relative to document
    event.button;         // Mouse button (0=left, 1=middle, 2=right)
    
    // Keyboard event properties
    event.key;            // Key value ('a', 'Enter', 'Escape')
    event.code;           // Physical key location ('KeyA', 'Enter')
    event.ctrlKey;        // Ctrl key pressed
    event.shiftKey;       // Shift key pressed
    event.altKey;         // Alt key pressed
    event.metaKey;        // Meta/Command key pressed
    
    // Form event properties
    event.value;          // Input value
    event.checked;        // Checkbox state
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Event Methods:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`function handleEvent(event) {
    // Prevent default browser behavior
    event.preventDefault();
    
    // Stop event propagation (bubbling)
    event.stopPropagation();
    
    // Stop all event handlers on current element
    event.stopImmediatePropagation();
}

// Remove event listener (must use same function reference)
const handler = () => console.log('Clicked');
element.addEventListener('click', handler);
element.removeEventListener('click', handler);

// One-time event listener
element.addEventListener('click', () => {
    console.log('This runs only once');
}, { once: true });

// Passive event listener (performance optimization)
element.addEventListener('touchstart', handler, { passive: true });`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        practice: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Live Event Monitoring
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Toggle event listening to see real-time events happening on this page. Watch how different interactions generate different events.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                {isListening ? 'Listening to events...' : 'Event monitoring paused'}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Click anywhere to generate click events</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Press any key for keyboard events</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const handleTestClick = () => {
        setClickCount(prev => prev + 1);
        if (isListening) {
            addEventLog('click', `Test Button - Count: ${clickCount + 1}`);
        }
    };

    const clearEventLog = () => {
        setEventLog([]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-yellow-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson22" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 font-bold animate-pulse">
                                MODULE 4: WEB APIs
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Lesson 22
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Making Websites Interactive with JavaScript
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Master event-driven programming to create responsive, interactive web applications that react to user actions in real-time.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-medium">30-40 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-medium">Real-time</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <MousePointer className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-medium">Interactive UI</span>
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
                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/30'
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

                    {/* Event Types Grid */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                                    Common Event Types
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Zap className="w-4 h-4" />
                                <span className="hidden sm:inline">8 Essential Events</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            {eventTypes.map((event, index) => (
                                <div
                                    key={index}
                                    className={`
                                        bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm 
                                        p-5 rounded-2xl border ${event.border}
                                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-${event.color.split('text-')[1]}/10
                                        transition-all duration-300 group cursor-pointer
                                        animate-in fade-in slide-in-from-bottom-4
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${event.bg}`}>
                                            <event.icon className={`w-6 h-6 ${event.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500">
                                                {event.name}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                                                EXAMPLE
                                            </div>
                                            <code className="block w-full bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                                                {event.example}
                                            </code>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                Used for: <span className="font-bold text-blue-500">{event.commonUse}</span>
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(event.example)}
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

                    {/* Interactive Event Playground */}
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
                                        <div className="text-sm font-mono text-slate-400">event_handlers.js</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => runCode(codeExamples.basic)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-yellow-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                        >
                                            <Play className="w-4 h-4 fill-current" />
                                            Run Example
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(codeExamples.basic)}
                                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() => runCode(codeExamples.basic)}
                                            className="px-3 py-1 rounded-lg bg-yellow-900/50 hover:bg-yellow-800 text-yellow-300 hover:text-white text-xs font-mono border border-yellow-800"
                                        >
                                            Basic Events
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.propagation)}
                                            className="px-3 py-1 rounded-lg bg-blue-900/50 hover:bg-blue-800 text-blue-300 hover:text-white text-xs font-mono border border-blue-800"
                                        >
                                            Propagation
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.keyboard)}
                                            className="px-3 py-1 rounded-lg bg-green-900/50 hover:bg-green-800 text-green-300 hover:text-white text-xs font-mono border border-green-800"
                                        >
                                            Keyboard Events
                                        </button>
                                    </div>
                                    <pre className="font-mono text-slate-300 text-sm overflow-x-auto max-h-96">
                                        <code>{codeExamples.basic}</code>
                                    </pre>
                                </div>

                                {/* Output Console */}
                                {output && (
                                    <div className="border-t border-slate-800 bg-black/50">
                                        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-green-500" />
                                                <span className="text-sm font-bold text-slate-400">EVENT OUTPUT</span>
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

                            {/* Live Event Monitor */}
                            <div className="bg-gradient-to-br from-slate-50 to-yellow-50 dark:from-slate-900 dark:to-yellow-950/30 rounded-3xl p-6 border border-slate-300 dark:border-slate-800 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-yellow-500" />
                                        Live Event Monitor
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsListening(!isListening)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${isListening
                                                ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                                                : 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                                                }`}
                                        >
                                            {isListening ? '● Listening' : '○ Paused'}
                                        </button>
                                        <button
                                            onClick={clearEventLog}
                                            className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Events are captured in real-time. Try clicking, moving mouse, or pressing keys.
                                </p>

                                {/* Event Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-yellow-600 text-center">
                                            {mousePosition.x}, {mousePosition.y}
                                        </div>
                                        <div className="text-xs text-slate-500 text-center">Mouse Position</div>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-blue-600 text-center">
                                            {keyPressed || 'None'}
                                        </div>
                                        <div className="text-xs text-slate-500 text-center">Current Key</div>
                                    </div>
                                </div>

                                {/* Test Controls */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <button
                                        onClick={handleTestClick}
                                        className="px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center gap-2 flex-1"
                                    >
                                        <MousePointer className="w-4 h-4" />
                                        Click Test ({clickCount})
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.scrollBy(0, 100);
                                            if (isListening) {
                                                addEventLog('scroll', 'Scrolled down 100px');
                                            }
                                        }}
                                        className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 flex-1"
                                    >
                                        <Move className="w-4 h-4" />
                                        Test Scroll
                                    </button>
                                </div>

                                {/* Event Log */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 min-h-64 border-2 border-slate-300 dark:border-slate-700">
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono flex justify-between">
                                        <span>Event Log (Last 10 events)</span>
                                        <span>Active: {eventLog.length}</span>
                                    </div>
                                    <div className="space-y-2 max-h-64 overflow-y-auto">
                                        {eventLog.length === 0 ? (
                                            <div className="text-center py-8 text-slate-400">
                                                No events captured yet. Start interacting with the page!
                                            </div>
                                        ) : (
                                            eventLog.map((event) => (
                                                <div
                                                    key={event.id}
                                                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-right-4"
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${event.color}`}>
                                                                {event.type}
                                                            </span>
                                                            <span className="text-sm font-mono text-slate-700 dark:text-slate-300">
                                                                {event.details}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-slate-500">
                                                            {event.timestamp}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                {/* Instructions */}
                                <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-400 mb-2">
                                        <Info className="w-4 h-4" />
                                        <span className="font-bold">Try these interactions:</span>
                                    </div>
                                    <ul className="text-xs text-blue-600 dark:text-blue-300 space-y-1">
                                        <li>• Click anywhere on the page</li>
                                        <li>• Move your mouse around</li>
                                        <li>• Press any keyboard key</li>
                                        <li>• Scroll up/down the page</li>
                                        <li>• Click the "Test" buttons above</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Practice Exercise */}
                    <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-yellow-200 dark:border-yellow-900/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg shadow-yellow-500/30 animate-bounce">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Event Handling Challenge</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Build an Interactive Form Validator</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Real-time Validation</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-yellow-600 dark:text-yellow-400">Challenge:</span> Create a form validator that responds to user input in real-time. Requirements:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span>Validate email format on <span className="font-bold text-yellow-600">input</span> event</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Show password strength on <span className="font-bold text-green-600">keyup</span> event</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Prevent form submission on <span className="font-bold text-blue-600">submit</span> if invalid</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Show real-time feedback using <span className="font-bold text-purple-600">focus</span>/<span className="font-bold text-purple-600">blur</span> events</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">form_validator.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a real-time form validator
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Email validation on input
emailInput.addEventListener('input', (e) => {
    const email = e.target.value;
    // Your validation logic here
    // Should validate email format
});

// Password strength on keyup
passwordInput.addEventListener('keyup', (e) => {
    const password = e.target.value;
    // Your strength checking logic here
    // Check length, special chars, etc.
});

// Form submission prevention
form.addEventListener('submit', (e) => {
    // Prevent submission if invalid
    e.preventDefault();
    // Validate all fields
    // Submit only if valid
});

// Focus/blur for UX
emailInput.addEventListener('focus', () => {
    // Show help text
});

emailInput.addEventListener('blur', () => {
    // Hide help text, show validation
});`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-2xl hover:shadow-yellow-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test Event Code</span>
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
                                            <span className="font-bold text-slate-300">Event Validation Output</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Real-time</span>
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
                            href="/lesson21"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>DOM Manipulation</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Module Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-22/23 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 22 • Module 4: Web APIs
                            </div>
                        </div>

                        <a
                            href="/lesson23"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold hover:shadow-2xl hover:shadow-yellow-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Browser Storage</span>
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

// Helper component for activity icon
function Activity(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
}