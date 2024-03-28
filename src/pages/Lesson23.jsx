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
    const [activeTab, setActiveTab] = useState('theory'); 
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
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            capacity: '50MB',
            persistence: 'Permanent',
            scope: 'Origin',
            useCase: 'Relational data (deprecated)'
        },
    ];

    // Tab Content
    const tabContents = {
        theory: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        What is Browser Storage?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Browser Storage allows web applications to store data locally on the user's device. This enables <span className="font-bold text-blue-600 dark:text-blue-400">offline functionality</span>, <span className="font-bold text-green-600 dark:text-green-400">persistent user preferences</span>, and <span className="font-bold text-purple-600 dark:text-purple-400">improved performance</span> by reducing server requests.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Client-Side</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Data stored on user's browser</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-green-600 mb-2">Persistence</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Data survives page reloads</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600 mb-2">Security</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Origin-based isolation</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Security Considerations
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Browser storage is <span className="font-bold text-red-600 dark:text-red-400">not secure</span> for sensitive data. Always follow these security best practices:
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg">
                        <code className="text-red-400 text-sm">
                            // NEVER store sensitive data in browser storage:<br />
                             Passwords, API keys, tokens<br />
                             Credit card information<br />
                             Personal identification data<br />
                             Encryption keys<br /><br />
                            // Safe to store:<br />
                             User preferences (theme, language)<br />
                             Non-sensitive app state<br />
                             Cached API responses<br />
                             Shopping cart items (temporary)<br />
                             Game progress/scores
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
                        Advanced Storage Patterns
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Storage Manager Class:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`class StorageManager {
    constructor(namespace = 'app', storage = localStorage) {
        this.namespace = namespace;
        this.storage = storage;
    }

    // Namespaced keys to avoid conflicts
    _getKey(key) {
        return \`\${this.namespace}:\${key}\`;
    }

    // Safe set with error handling
    set(key, value, ttl = null) {
        try {
            const item = {
                value: value,
                timestamp: Date.now(),
                expires: ttl ? Date.now() + ttl : null
            };
            
            const serialized = JSON.stringify(item);
            this.storage.setItem(this._getKey(key), serialized);
            return true;
        } catch (error) {
            console.error('Storage set failed:', error);
            return false;
        }
    }

    // Safe get with expiration check
    get(key, defaultValue = null) {
        try {
            const item = this.storage.getItem(this._getKey(key));
            if (!item) return defaultValue;
            
            const parsed = JSON.parse(item);
            
            // Check expiration
            if (parsed.expires && Date.now() > parsed.expires) {
                this.remove(key);
                return defaultValue;
            }
            
            return parsed.value;
        } catch (error) {
            console.error('Storage get failed:', error);
            return defaultValue;
        }
    }

    // Remove item
    remove(key) {
        this.storage.removeItem(this._getKey(key));
    }

    // Clear namespace
    clear() {
        const prefix = this._getKey('');
        for (let i = this.storage.length - 1; i >= 0; i--) {
            const key = this.storage.key(i);
            if (key.startsWith(prefix)) {
                this.storage.removeItem(key);
            }
        }
    }

    // Get all items in namespace
    getAll() {
        const items = {};
        const prefix = this._getKey('');
        
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            if (key.startsWith(prefix)) {
                const itemKey = key.replace(prefix, '');
                items[itemKey] = this.get(itemKey);
            }
        }
        
        return items;
    }
}

// Usage
const userStorage = new StorageManager('user');
userStorage.set('preferences', { theme: 'dark', fontSize: 14 });
userStorage.set('cart', [{ id: 1, name: 'Book' }], 3600000); // 1 hour TTL`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Storage Event Handling:</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Listen for storage changes (cross-tab communication)
window.addEventListener('storage', (event) => {
    console.log('Storage event detected:');
    console.log('- Key:', event.key);
    console.log('- Old value:', event.oldValue);
    console.log('- New value:', event.newValue);
    console.log('- URL:', event.url);
    console.log('- Storage area:', event.storageArea);
    
    // Example: Sync user theme across tabs
    if (event.key === 'user:preferences') {
        try {
            const prefs = JSON.parse(event.newValue);
            if (prefs?.theme) {
                applyTheme(prefs.theme);
                console.log('Theme synced:', prefs.theme);
            }
        } catch (error) {
            console.error('Failed to sync theme:', error);
        }
    }
    
    // Example: Notify about cart changes
    if (event.key === 'app:cart') {
        showNotification('Cart updated in another tab!');
        updateCartDisplay();
    }
});

// Example: Cross-tab sync function
function syncAcrossTabs(key, value) {
    // Set in current tab
    localStorage.setItem(key, JSON.stringify(value));
    
    // The 'storage' event will fire in other tabs
    // but NOT in the current tab
    // To notify current tab, use custom event:
    window.dispatchEvent(new CustomEvent('localStorageChange', {
        detail: { key, value }
    }));
}

// Listen for custom event in current tab
window.addEventListener('localStorageChange', (event) => {
    console.log('Local storage changed in current tab:', event.detail);
});`}
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
                        Live Storage Explorer
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Interact with browser storage in real-time. Add, view, and delete storage items while watching the changes happen live.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">localStorage: Persistent across sessions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">sessionStorage: Tab-specific storage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">Cookies: Sent with HTTP requests</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    // Storage Management Functions
    const addStorageItem = () => {
        if (!newKey.trim() || !newValue.trim()) return;

        try {
            const value = JSON.parse(newValue);
            if (storageType === 'localStorage') {
                localStorage.setItem(newKey, JSON.stringify(value));
            } else if (storageType === 'sessionStorage') {
                sessionStorage.setItem(newKey, JSON.stringify(value));
            } else if (storageType === 'cookies') {
                document.cookie = `${newKey}=${encodeURIComponent(newValue)}; path=/; max-age=86400`;
            }

            setNewKey('');
            setNewValue('');
            loadStorageData();
        } catch (error) {
            // If not valid JSON, store as string
            if (storageType === 'localStorage') {
                localStorage.setItem(newKey, newValue);
            } else if (storageType === 'sessionStorage') {
                sessionStorage.setItem(newKey, newValue);
            } else if (storageType === 'cookies') {
                document.cookie = `${newKey}=${encodeURIComponent(newValue)}; path=/; max-age=86400`;
            }

            setNewKey('');
            setNewValue('');
            loadStorageData();
        }
    };

    const removeStorageItem = (key) => {
        if (storageType === 'localStorage') {
            localStorage.removeItem(key);
        } else if (storageType === 'sessionStorage') {
            sessionStorage.removeItem(key);
        } else if (storageType === 'cookies') {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
        loadStorageData();
    };

    const clearAllStorage = () => {
        if (storageType === 'localStorage') {
            localStorage.clear();
        } else if (storageType === 'sessionStorage') {
            sessionStorage.clear();
        } else if (storageType === 'cookies') {
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        }
        loadStorageData();
    };

    const getStorageQuota = () => {
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate().then(estimate => {
                const usedMB = (estimate.usage / 1024 / 1024).toFixed(2);
                const quotaMB = (estimate.quota / 1024 / 1024).toFixed(2);
                const percentage = ((estimate.usage / estimate.quota) * 100).toFixed(1);
                alert(`Storage Quota:\nUsed: ${usedMB}MB\nTotal: ${quotaMB}MB\nUsage: ${percentage}%`);
            });
        } else {
            alert('Storage quota API not supported in this browser');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="lesson23" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-bold animate-pulse">
                                MODULE 4: WEB APIs
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Lock className="w-4 h-4" /> Lesson 23
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Store Data Locally in the Browser
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Learn to persist user data, cache application state, and build offline-capable web applications using various browser storage APIs.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm font-medium">25-35 min</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Database className="w-4 h-4 text-purple-500" />
                                <span className="text-sm font-medium">6 Storage Types</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Shield className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">Security Focus</span>
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
                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
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

                    {/* Storage Types Comparison */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                                    Storage APIs Comparison
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Database className="w-4 h-4" />
                                <span className="hidden sm:inline">6 Browser Storage Options</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-slate-300 dark:border-slate-700">
                                            <th className="text-left p-6">
                                                <div className="flex items-center gap-2">
                                                    <Database className="w-4 h-4" />
                                                    <span className="font-bold">Storage Type</span>
                                                </div>
                                            </th>
                                            <th className="text-left p-6">
                                                <div className="flex items-center gap-2">
                                                    <HardDrive className="w-4 h-4" />
                                                    <span className="font-bold">Capacity</span>
                                                </div>
                                            </th>
                                            <th className="text-left p-6">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="font-bold">Persistence</span>
                                                </div>
                                            </th>
                                            <th className="text-left p-6">
                                                <div className="flex items-center gap-2">
                                                    <Shield className="w-4 h-4" />
                                                    <span className="font-bold">Scope</span>
                                                </div>
                                            </th>
                                            <th className="text-left p-6">
                                                <div className="flex items-center gap-2">
                                                    <Target className="w-4 h-4" />
                                                    <span className="font-bold">Best For</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {storageTypes.map((storage, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors ${index % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}`}
                                            >
                                                <td className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg ${storage.bg}`}>
                                                            <storage.icon className={`w-5 h-5 ${storage.color}`} />
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{storage.name}</div>
                                                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                                {storage.useCase.split(',')[0]}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="font-mono font-bold">{storage.capacity}</div>
                                                </td>
                                                <td className="p-6">
                                                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${storage.persistence === 'Permanent'
                                                        ? 'bg-green-500/20 text-green-500'
                                                        : storage.persistence === 'Session only'
                                                            ? 'bg-blue-500/20 text-blue-500'
                                                            : 'bg-yellow-500/20 text-yellow-500'
                                                        }`}
                                                    >
                                                        {storage.persistence}
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="text-sm">{storage.scope}</div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                                        {storage.useCase}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-200 dark:border-blue-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="font-bold text-blue-700 dark:text-blue-400">localStorage</span>
                                </div>
                                <p className="text-sm text-blue-600 dark:text-blue-300">
                                    Simple key-value store for persistent data. Great for user preferences and app state.
                                </p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl border border-green-200 dark:border-green-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-green-700 dark:text-green-400">sessionStorage</span>
                                </div>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                    Same API as localStorage but cleared when tab closes. Perfect for temporary data.
                                </p>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span className="font-bold text-yellow-700 dark:text-yellow-400">Cookies</span>
                                </div>
                                <p className="text-sm text-yellow-600 dark:text-yellow-300">
                                    Small data packets sent with HTTP requests. Used for auth, tracking, and small preferences.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Interactive Storage Playground */}
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
                                        <div className="text-sm font-mono text-slate-400">storage_examples.js</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => runCode(codeExamples.localStorage)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                        >
                                            <Play className="w-4 h-4 fill-current" />
                                            Run localStorage
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(codeExamples.localStorage)}
                                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() => runCode(codeExamples.localStorage)}
                                            className="px-3 py-1 rounded-lg bg-indigo-900/50 hover:bg-indigo-800 text-indigo-300 hover:text-white text-xs font-mono border border-indigo-800"
                                        >
                                            localStorage
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.sessionStorage)}
                                            className="px-3 py-1 rounded-lg bg-green-900/50 hover:bg-green-800 text-green-300 hover:text-white text-xs font-mono border border-green-800"
                                        >
                                            sessionStorage
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.cookies)}
                                            className="px-3 py-1 rounded-lg bg-yellow-900/50 hover:bg-yellow-800 text-yellow-300 hover:text-white text-xs font-mono border border-yellow-800"
                                        >
                                            Cookies
                                        </button>
                                    </div>
                                    <pre className="font-mono text-slate-300 text-sm overflow-x-auto max-h-96">
                                        <code>{codeExamples.localStorage}</code>
                                    </pre>
                                </div>

                                {/* Output Console */}
                                {output && (
                                    <div className="border-t border-slate-800 bg-black/50">
                                        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-green-500" />
                                                <span className="text-sm font-bold text-slate-400">STORAGE OUTPUT</span>
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

                            {/* Live Storage Explorer */}
                            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 rounded-3xl p-6 border border-slate-300 dark:border-slate-800 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <Database className="w-5 h-5 text-indigo-500" />
                                        Live Storage Explorer
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={getStorageQuota}
                                            className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30 text-xs"
                                        >
                                            Check Quota
                                        </button>
                                        <button
                                            onClick={clearAllStorage}
                                            className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 text-xs"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>

                                {/* Storage Type Selector */}
                                <div className="mb-6">
                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                        Select Storage Type:
                                    </div>
                                    <div className="flex gap-2">
                                        {['localStorage', 'sessionStorage', 'cookies'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setStorageType(type)}
                                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${storageType === type
                                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Add New Item */}
                                <div className="mb-6 bg-white/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-300 dark:border-slate-700">
                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                                        Add New Storage Item:
                                    </div>
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            value={newKey}
                                            onChange={(e) => setNewKey(e.target.value)}
                                            placeholder="Key (e.g., 'userTheme')"
                                            className="w-full p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                        <textarea
                                            value={newValue}
                                            onChange={(e) => setNewValue(e.target.value)}
                                            placeholder='Value (e.g., "dark" or {"theme": "dark"})'
                                            className="w-full p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20 resize-none font-mono text-sm"
                                        />
                                        <button
                                            onClick={addStorageItem}
                                            disabled={!newKey.trim() || !newValue.trim()}
                                            className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${newKey.trim() && newValue.trim()
                                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                                                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                                }`}
                                        >
                                            <Save className="w-4 h-4" />
                                            Add to {storageType}
                                        </button>
                                    </div>
                                </div>

                                {/* Storage Items Display */}
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 min-h-64 border-2 border-slate-300 dark:border-slate-700">
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono flex justify-between">
                                        <span>{storageType} Items ({Object.keys(storageData).length})</span>
                                        <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-500 text-xs">
                                            {storageType === 'localStorage' ? 'Permanent' :
                                                storageType === 'sessionStorage' ? 'Session' :
                                                    'Cookie'}
                                        </span>
                                    </div>
                                    <div className="space-y-3 max-h-64 overflow-y-auto">
                                        {Object.keys(storageData).length === 0 ? (
                                            <div className="text-center py-8 text-slate-400">
                                                No items in {storageType}. Add some using the form above!
                                            </div>
                                        ) : (
                                            Object.entries(storageData).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-right-4"
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200 truncate">
                                                            {key}
                                                        </div>
                                                        <button
                                                            onClick={() => removeStorageItem(key)}
                                                            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 hover:text-red-700 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white/50 dark:bg-slate-950/50 p-2 rounded">
                                                        {typeof value === 'object'
                                                            ? JSON.stringify(value, null, 2)
                                                            : String(value)
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                {/* Storage Stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-indigo-600">{Object.keys(storageData).length}</div>
                                        <div className="text-xs text-slate-500">Items</div>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-green-600">
                                            {storageType === 'localStorage' ? '∞' :
                                                storageType === 'sessionStorage' ? 'Tab' :
                                                    'Domain'}
                                        </div>
                                        <div className="text-xs text-slate-500">Scope</div>
                                    </div>
                                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {storageType === 'cookies' ? '4KB' : '5-10MB'}
                                        </div>
                                        <div className="text-xs text-slate-500">Capacity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Practice Exercise */}
                    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-indigo-200 dark:border-indigo-900/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 animate-bounce">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Shopping Cart Challenge</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Build a Persistent Shopping Cart</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Persistent Storage</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Challenge:</span> Create a shopping cart system that persists across browser sessions. Requirements:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <span>Store cart items in <span className="font-bold text-indigo-600">localStorage</span></span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Calculate <span className="font-bold text-green-600">total price</span> automatically</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Support <span className="font-bold text-blue-600">add/remove/update</span> operations</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Persist cart across <span className="font-bold text-purple-600">browser restarts</span></span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">shopping_cart.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Create a persistent shopping cart
class ShoppingCart {
    constructor() {
        this.cartKey = 'shoppingCart';
        this.loadCart();
    }

    // Load cart from localStorage
    loadCart() {
        // Your code here
    }

    // Save cart to localStorage
    saveCart() {
        // Your code here
    }

    // Add item to cart
    addItem(item) {
        // Your code here
    }

    // Remove item from cart
    removeItem(itemId) {
        // Your code here
    }

    // Update item quantity
    updateQuantity(itemId, quantity) {
        // Your code here
    }

    // Calculate total price
    calculateTotal() {
        // Your code here
    }

    // Clear entire cart
    clearCart() {
        // Your code here
    }

    // Get all items
    getItems() {
        // Your code here
    }
}

// Usage example
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'JavaScript Book', price: 29.99, quantity: 2 });
console.log('Total:', cart.calculateTotal());`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test Storage Code</span>
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
                                            <span className="font-bold text-slate-300">Storage Output</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Database className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Persistent</span>
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
                            href="/lesson22"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Events</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Module Completion
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-23/23 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Lesson 23 • Module 4: Web APIs Complete!
                            </div>
                        </div>

                        <a
                            href="/project1"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>To-Do App Project</span>
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