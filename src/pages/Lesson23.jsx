import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Lock, Check, Copy, Play, AlertCircle, Code, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, Award, Key, Unlock, ChevronRight,
    ChevronLeft, Eye, EyeOff, RefreshCw, Maximize2, Minimize2,
    Database, Save, Trash2, Plus, Search, Filter, Download,
    Upload, Shield, Clock, BatteryCharging, Wifi, HardDrive,
    Server, Cloud, Archive, Settings, User, ShoppingCart,
    Calendar, Tag, DollarSign, Package
} from 'lucide-react';

export default function Lesson23() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('theory'); // 'theory', 'code', 'practice'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);
    const [storageData, setStorageData] = useState({});
    const [newKey, setNewKey] = useState('');
    const [newValue, setNewValue] = useState('');
    const [storageType, setStorageType] = useState('localStorage');

    // Typing effect for title
    useEffect(() => {
        const text = "Browser Storage";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Load storage data on mount
    useEffect(() => {
        loadStorageData();
    }, [storageType]);

    const loadStorageData = () => {
        if (typeof window === 'undefined') return;

        let data = {};
        if (storageType === 'localStorage') {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                try {
                    data[key] = JSON.parse(localStorage.getItem(key));
                } catch {
                    data[key] = localStorage.getItem(key);
                }
            }
        } else if (storageType === 'sessionStorage') {
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                try {
                    data[key] = JSON.parse(sessionStorage.getItem(key));
                } catch {
                    data[key] = sessionStorage.getItem(key);
                }
            }
        } else if (storageType === 'cookies') {
            const cookies = document.cookie.split(';');
            cookies.forEach(cookie => {
                const [key, value] = cookie.split('=');
                if (key && value) {
                    data[key.trim()] = decodeURIComponent(value.trim());
                }
            });
        }

        setStorageData(data);
    };

    // Solution Code
    const solutionCode = `// Complete Browser Storage Example
class StorageManager {
    constructor(storage = localStorage) {
        this.storage = storage;
    }

    // Set item with JSON serialization
    set(key, value) {
        try {
            const serialized = JSON.stringify(value);
            this.storage.setItem(key, serialized);
            console.log(\`Saved: \${key} = \`, value);
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }

    // Get item with JSON parsing
    get(key, defaultValue = null) {
        try {
            const item = this.storage.getItem(key);
            if (item === null) return defaultValue;
            return JSON.parse(item);
        } catch (error) {
            console.error('Parse error:', error);
            return defaultValue;
        }
    }

    // Remove item
    remove(key) {
        this.storage.removeItem(key);
        console.log(\`Removed: \${key}\`);
    }

    // Clear all items
    clear() {
        this.storage.clear();
        console.log('Storage cleared');
    }

    // Get all keys
    keys() {
        return Object.keys(this.storage);
    }

    // Get all items
    getAll() {
        const items = {};
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            items[key] = this.get(key);
        }
        return items;
    }

    // Check storage quota
    checkQuota() {
        let quota = 'Not supported';
        let usage = 'Not supported';
        
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
                const usedMB = (estimate.usage / 1024 / 1024).toFixed(2);
                const quotaMB = (estimate.quota / 1024 / 1024).toFixed(2);
                const percentage = ((estimate.usage / estimate.quota) * 100).toFixed(1);
                
                console.log(\`Used: \${usedMB}MB / \${quotaMB}MB (\${percentage}%)\`);
            });
        }
        return { quota, usage };
    }
}

// Usage examples
const storage = new StorageManager();

// User preferences
storage.set('userPreferences', {
    theme: 'dark',
    language: 'en',
    notifications: true,
    fontSize: 14
});

// Shopping cart
const cart = {
    items: [
        { id: 1, name: 'JavaScript Book', price: 29.99, quantity: 2 },
        { id: 2, name: 'Web Development Course', price: 99.99, quantity: 1 }
    ],
    total: 159.97,
    currency: 'USD'
};
storage.set('shoppingCart', cart);

// Session data (use sessionStorage for temporary data)
const sessionStorage = new StorageManager(window.sessionStorage);
sessionStorage.set('sessionToken', 'abc123xyz');
sessionStorage.set('lastActivity', Date.now());`;

    const codeExamples = {
        localStorage: `// localStorage API Examples
// localStorage persists data across browser sessions

// 1. Basic operations
// Set item (strings only - objects must be stringified)
localStorage.setItem('username', 'john_doe');
localStorage.setItem('isLoggedIn', 'true');

// Set object (must stringify)
const user = {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: { theme: 'dark', language: 'en' }
};
localStorage.setItem('user', JSON.stringify(user));

// Get item
const username = localStorage.getItem('username'); // 'john_doe'
const isLoggedIn = localStorage.getItem('isLoggedIn'); // 'true'

// Get object (must parse)
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // 'John Doe'

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// 2. Utility functions
function saveToStorage(key, value) {
    try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
        return true;
    } catch (error) {
        console.error('Storage error:', error);
        return false;
    }
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        if (item === null) return defaultValue;
        return JSON.parse(item);
    } catch (error) {
        console.error('Parse error:', error);
        return defaultValue;
    }
}

// 3. Storage events (listen in other tabs)
window.addEventListener('storage', (event) => {
    console.log('Storage changed in another tab!');
    console.log('Key:', event.key);
    console.log('Old value:', event.oldValue);
    console.log('New value:', event.newValue);
    console.log('URL:', event.url);
    console.log('Storage area:', event.storageArea);
});`,

        sessionStorage: `// sessionStorage API Examples
// sessionStorage only persists for the current session

// 1. Basic operations (same API as localStorage)
sessionStorage.setItem('sessionId', 'abc123xyz');
sessionStorage.setItem('pageViews', '5');

// Set object
const sessionData = {
    timestamp: Date.now(),
    authToken: 'token_abc123',
    cartItems: ['item1', 'item2']
};
sessionStorage.setItem('session', JSON.stringify(sessionData));

// Get item
const sessionId = sessionStorage.getItem('sessionId');
const views = parseInt(sessionStorage.getItem('pageViews'));

// Remove item
sessionStorage.removeItem('sessionId');

// Clear all
sessionStorage.clear();

// 2. Practical use cases
// Form data persistence (prevent loss on refresh)
const formData = {
    name: 'John',
    email: 'john@example.com',
    message: 'Hello world'
};
sessionStorage.setItem('formDraft', JSON.stringify(formData));

// Page state tracking
let pageState = sessionStorage.getItem('pageState');
if (!pageState) {
    pageState = { currentPage: 1, filters: {} };
    sessionStorage.setItem('pageState', JSON.stringify(pageState));
}

// Multi-step form progression
sessionStorage.setItem('formStep', '2'); // Current step
sessionStorage.setItem('formData', JSON.stringify({
    step1: { completed: true },
    step2: { inProgress: true }
}));`,

        cookies: `// Cookie API Examples
// Cookies are sent with every HTTP request

// 1. Basic operations
// Set cookie (simple)
document.cookie = "username=John_Doe";

// Set cookie with options
document.cookie = "theme=dark; max-age=86400; path=/; secure; samesite=strict";

// Set cookie with expiration date
const expiration = new Date();
expiration.setDate(expiration.getDate() + 7); // 7 days from now
document.cookie = \`auth_token=abc123; expires=\${expiration.toUTCString()}; path=/\`;

// 2. Utility functions
function setCookie(name, value, days = 7, path = '/') {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    let cookie = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)};\`;
    cookie += \`expires=\${expires.toUTCString()};\`;
    cookie += \`path=\${path};\`;
    cookie += 'samesite=strict;';
    
    if (window.location.protocol === 'https:') {
        cookie += 'secure;';
    }
    
    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

function deleteCookie(name, path = '/') {
    document.cookie = \`\${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=\${path};\`;
}

// 3. Usage examples
// User preferences
setCookie('theme', 'dark', 30);
setCookie('language', 'en', 365);

// Analytics/consent
setCookie('cookieConsent', 'accepted', 365);
setCookie('analyticsEnabled', 'true', 365);

// Session management
const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
setCookie('sessionId', sessionId, 1); // Expires in 1 day

// Get cookie value
const theme = getCookie('theme');
console.log('Current theme:', theme); // 'dark'`
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

    const storageTypes = [
        {
            name: 'localStorage',
            icon: Database,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            capacity: '5-10MB',
            persistence: 'Permanent',
            scope: 'Origin',
            useCase: 'User preferences, app state'
        },
        {
            name: 'sessionStorage',
            icon: Clock,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            capacity: '5-10MB',
            persistence: 'Session only',
            scope: 'Tab',
            useCase: 'Form data, temporary state'
        },
        {
            name: 'Cookies',
            icon: Shield,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            capacity: '4KB',
            persistence: 'Expires based',
            scope: 'Domain',
            useCase: 'Authentication, tracking'
        },
        {
            name: 'IndexedDB',
            icon: HardDrive,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            capacity: '>50MB',
            persistence: 'Permanent',
            scope: 'Origin',
            useCase: 'Large datasets, offline apps'
        },
        {
            name: 'Cache API',
            icon: Cloud,
            color: 'text-cyan-500',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
            capacity: 'Varies',
            persistence: 'Until cleared',
            scope: 'Origin',
            useCase: 'Network responses, assets'
        },
        {
            name: 'WebSQL',
            icon: Server,
            color: 'text-red-500',

