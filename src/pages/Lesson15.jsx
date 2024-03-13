import React, { useState } from 'react';
import {
    Clock, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Zap, AlertCircle,
    Cloud, Database, Layers, Lock, Unlock,
    RefreshCw, CheckCircle, XCircle, Timer,
    Brain, Code, Lightbulb, Grid, Box,
    Cpu, Package, Users, Eye, Filter
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson15() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === ASYNCHRONOUS JAVASCRIPT ===
// JavaScript is single-threaded but can handle async operations

// 1. Callbacks (Traditional approach)
function fetchDataWithCallback(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(null, data); // First param is error
    }, 2000);
}

// Callback usage
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data received:', data);
    }
});

// 2. Promises (ES6)
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        console.log('Promise: Fetching data...');
        setTimeout(() => {
            const success = Math.random() > 0.3;
            if (success) {
                resolve({ id: 2, name: 'Jane Smith' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1500);
    });
}

// Promise usage
fetchDataWithPromise()
    .then(data => {
        console.log('Promise resolved:', data);
        return data.name; // Can chain
    })
    .then(name => {
        console.log('Name extracted:', name);
    })
    .catch(error => {
        console.error('Promise rejected:', error.message);
    })
    .finally(() => {
        console.log('Promise completed (cleanup)');
    });

// 3. Promise Combinators
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

// Promise.all (all must succeed)
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log('Promise.all result:', values);
    })
    .catch(error => {
        console.error('Promise.all error:', error);
    });

// Promise.race (first to settle)
Promise.race([
    new Promise(resolve => setTimeout(resolve, 500, 'fast')),
    new Promise(resolve => setTimeout(resolve, 1000, 'slow'))
]).then(result => {
    console.log('Promise.race winner:', result);
});

// Promise.any (first to succeed)
Promise.any([
    Promise.reject(new Error('Error 1')),
    Promise.resolve('Success 1'),
    Promise.resolve('Success 2')
]).then(result => {
    console.log('Promise.any success:', result);
});

// Promise.allSettled (all complete regardless)
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject(new Error('Failure')),
    Promise.resolve('Another success')
]).then(results => {
    console.log('Promise.allSettled:', results);
});

// 4. Async/Await (Modern approach)
async function fetchUserData() {
    try {
        console.log('Async: Starting fetch...');
        
        // Simulate API call
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({ status: 200, data: { user: 'Alice', score: 95 } });
            }, 1000);
        });
        
        console.log('Response received:', response);
        
        // Another async operation
        const processedData = await processData(response.data);
        console.log('Processed data:', processedData);
        
        return processedData;
    } catch (error) {
        console.error('Async error:', error);
        throw error;
    }
}

async function processData(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...data, processed: true, timestamp: new Date() });
        }, 500);
    });
}

// Using async function
fetchUserData()
    .then(result => console.log('Final result:', result))
    .catch(error => console.error('Final error:', error));

// 5. Real-world example: Fetching multiple APIs
async function fetchMultipleResources() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json())
        ]);
        
        console.log(\`Users: \${users.length}, Posts: \${posts.length}, Comments: \${comments.length}\`);
        return { users, posts, comments };
    } catch (error) {
        console.error('Failed to fetch resources:', error);
        return { users: [], posts: [], comments: [] };
    }
}

// Uncomment to run:
// fetchMultipleResources();`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [pendingPromises, setPendingPromises] = useState([]);
    const [completedOperations, setCompletedOperations] = useState([]);

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

            // Simulate async visualization
            const operations = [];
            setPendingPromises(['Fetching data...', 'Processing...', 'Loading...']);

            setTimeout(() => {
                setPendingPromises([]);
                setCompletedOperations(['Data loaded', 'Processing complete', 'Ready']);
            }, 2000);

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

    const concepts = [
        {
            category: "Fundamentals",
            concepts: [
                {
                    name: "Event Loop",
                    icon: <RefreshCw className="w-4 h-4 text-blue-500" />,
                    description: "JavaScript's concurrency model that handles async operations",
                    syntax: "Single-threaded with callback queue",
                    example: "setTimeout(() => console.log('later'), 0); console.log('now');",
                    useCase: "Understanding how async code executes",
                    visual: "Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack"
                },
                {
                    name: "Callbacks",
                    icon: <Cpu className="w-4 h-4 text-green-500" />,
                    description: "Functions passed as arguments to be executed later",
                    syntax: "function asyncOp(callback) { /*...*/ callback(result); }",
                    example: "fs.readFile('file.txt', (err, data) => { /* handle */ })",
                    useCase: "Traditional async pattern, event handlers",
                    visual: "Main Code → Async Operation → Callback Function → Result"
                },
                {
                    name: "Callback Hell",
                    icon: <Layers className="w-4 h-4 text-red-500" />,
                    description: "Nested callbacks making code hard to read and maintain",
                    syntax: "Multiple nested callback functions",
                    example: "Multiple async operations depending on each other",
                    useCase: "Problem to avoid with Promises/Async-Await",
                    visual: "Callback → Callback → Callback → (Pyramid of Doom)"
                }
            ]
        },
        {
            category: "Promises",
            concepts: [
                {
                    name: "Promise Basics",
                    icon: <Box className="w-4 h-4 text-purple-500" />,
                    description: "Object representing eventual completion/failure of async operation",
                    syntax: "new Promise((resolve, reject) => { /* async code */ })",
                    example: "fetch(url).then().catch()",
                    useCase: "Modern async operations, API calls",
                    visual: "Pending → (Resolved ✓) or (Rejected ✗)"
                },
                {
                    name: "Promise Chaining",
                    icon: <Filter className="w-4 h-4 text-teal-500" />,
                    description: "Sequencing multiple async operations",
                    syntax: ".then().then().catch()",
                    example: "fetch().then(parse).then(process).catch(handleError)",
                    useCase: "Multiple dependent async steps",
                    visual: "Promise → Then → Then → Catch"
                },
                {
                    name: "Promise Methods",
                    icon: <Package className="w-4 h-4 text-orange-500" />,
                    description: "Static methods for handling multiple promises",
                    syntax: "Promise.all(), Promise.race(), etc.",
                    example: "Promise.all([promise1, promise2, promise3])",
                    useCase: "Parallel async operations, first response wins",
                    visual: "Multiple Promises → Combined Result"
                }
            ]
        },
        {
            category: "Async/Await",
            concepts: [
                {
                    name: "Async Functions",
                    icon: <Zap className="w-4 h-4 text-yellow-500" />,
                    description: "Functions that return promises and can use await",
                    syntax: "async function name() { await promise; }",
                    example: "async function getUser() { const user = await fetchUser(); }",
                    useCase: "Cleaner promise-based code",
                    visual: "Async Function → Returns Promise → Can use await"
                },
                {
                    name: "Await Keyword",
                    icon: <Timer className="w-4 h-4 text-pink-500" />,
                    description: "Pauses execution until promise settles",
                    syntax: "const result = await promise;",
                    example: "const data = await fetch('api');",
                    useCase: "Waiting for async operations to complete",
                    visual: "Code Pauses → Promise Resolves → Code Resumes"
                },
                {
                    name: "Error Handling",
                    icon: <AlertCircle className="w-4 h-4 text-red-600" />,
                    description: "Using try/catch with async/await",
                    syntax: "try { await promise; } catch (error) { /* handle */ }",
                    example: "try { const data = await fetch(); } catch (err) { console.error(err); }",
                    useCase: "Graceful async error handling",
                    visual: "Try Block → Await → Catch Block (if error)"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Promise.all()",
                    icon: <Users className="w-4 h-4 text-green-600" />,
                    description: "Wait for all promises to resolve, fails if any reject",
                    syntax: "Promise.all([promise1, promise2, ...])",
                    example: "const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);",
                    useCase: "Parallel independent operations",
                    visual: "[P1, P2, P3] → All Resolve → [R1, R2, R3]"
                },
                {
                    name: "Promise.race()",
                    icon: <Eye className="w-4 h-4 text-blue-600" />,
                    description: "First promise to settle (resolve or reject) wins",
                    syntax: "Promise.race([promise1, promise2, ...])",
                    example: "Timeout pattern: Promise.race([fetch(), timeout(5000)])",
                    useCase: "Timeout implementations, first response",
                    visual: "[P1, P2, P3] → First Settled → Result"
                },
                {
                    name: "Promise.allSettled()",
                    icon: <Database className="w-4 h-4 text-purple-600" />,
                    description: "Wait for all promises to settle (resolve or reject)",
                    syntax: "Promise.allSettled([promise1, promise2, ...])",
                    example: "Get results of all operations regardless of success/failure",
                    useCase: "When you need all results, even if some fail",
                    visual: "[P1, P2, P3] → All Settled → [{status, value/reason}, ...]"
                },
                {
                    name: "Promise.any()",
                    icon: <Cloud className="w-4 h-4 text-orange-600" />,
                    description: "First promise to resolve (ignore rejections)",
                    syntax: "Promise.any([promise1, promise2, ...])",
                    example: "Multiple API endpoints, first successful response",
                    useCase: "Redundant requests, fallback strategies",
                    visual: "[P1, P2, P3] → First Resolve → Value"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Promise Fundamentals",
            description: "Create and handle promises with different scenarios",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Create a Promise
// Create a function that returns a promise which:
// 1. Resolves with "Success!" after 1 second if random number > 0.5
// 2. Rejects with "Failed!" after 1 second if random number <= 0.5

// EXERCISE 2: Promise Chain
// Simulate user authentication flow:
// 1. Login (returns user ID after 500ms)
// 2. Get profile (requires user ID, returns profile after 300ms)
// 3. Get preferences (requires profile, returns preferences after 200ms)
// Chain these operations and log final result

// EXERCISE 3: Error Handling
// Create a function that fetches data from an API
// Handle these cases:
// 1. Network failure (reject)
// 2. Invalid response (throw error)
// 3. Success (resolve with data)
// Use .catch() and .finally() appropriately`,
            solution: `// SOLUTION 1: Create a Promise
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Success!");
            } else {
                reject("Failed!");
            }
        }, 1000);
    });
}

randomPromise()
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

// SOLUTION 2: Promise Chain
function login() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ userId: 123 }), 500);
    });
}

function getProfile(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ userId, name: 'John', email: 'john@example.com' }), 300);
    });
}

function getPreferences(profile) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ ...profile, theme: 'dark', notifications: true }), 200);
    });
}

login()
    .then(user => {
        console.log('Logged in user:', user);
        return getProfile(user.userId);
    })
    .then(profile => {
        console.log('Profile loaded:', profile);
        return getPreferences(profile);
    })
    .then(preferences => {
        console.log('Final preferences:', preferences);
    })
    .catch(error => {
        console.error('Auth flow error:', error);
    });

// SOLUTION 3: Error Handling
function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulate network call
        setTimeout(() => {
            const networkError = Math.random() < 0.2;
            const invalidResponse = Math.random() < 0.3;
            
            if (networkError) {
                reject(new Error('Network failure'));
            } else if (invalidResponse) {
                reject(new Error('Invalid response format'));
            } else {
                resolve({ data: { id: 1, value: 'Success' } });
            }
        }, 1000);
    });
}

fetchData('https://api.example.com/data')
    .then(response => {
        console.log('Data received:', response.data);
        // Process data further
        return response.data;
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
        // Return fallback data
        return { id: 0, value: 'Default' };
    })
    .finally(() => {
        console.log('Fetch operation completed');
    });`,
            hint: "Promises have three states: pending, fulfilled, rejected. Use resolve() for success, reject() for failure."
        },
        {
            title: "Async/Await Practice",
            description: "Convert promise-based code to async/await and handle complex flows",
            difficulty: "Intermediate",
            starterCode: `// EXERCISE 1: Convert to Async/Await
// Convert this promise chain to async/await:
function getUserData() {
    return fetchUser()
        .then(user => fetchPosts(user.id))
        .then(posts => fetchComments(posts[0].id))
        .then(comments => ({ user, posts, comments }))
        .catch(error => console.error(error));
}

// EXERCISE 2: Sequential vs Parallel
// Create two async functions:
// 1. sequentialRequests(): Makes 3 API calls one after another
// 2. parallelRequests(): Makes 3 API calls simultaneously
// Compare execution times

// EXERCISE 3: Error Recovery
// Create a function that tries multiple endpoints:
// 1. Try primary endpoint
// 2. If fails, try backup endpoint 1
// 3. If fails, try backup endpoint 2
// 4. If all fail, use default data
// Use try/catch and proper error handling`,
            solution: `// SOLUTION 1: Convert to Async/Await
async function getUserDataAsync() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        return { user, posts, comments };
    } catch (error) {
        console.error('Failed to get user data:', error);
        throw error;
    }
}

// Mock functions for example
async function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'Alice' }), 500));
}
async function fetchPosts(userId) {
    return new Promise(resolve => setTimeout(() => resolve([{ id: 101, title: 'Post 1' }]), 400));
}
async function fetchComments(postId) {
    return new Promise(resolve => setTimeout(() => resolve(['Great post!', 'Thanks!']), 300));
}

// SOLUTION 2: Sequential vs Parallel
async function sequentialRequests() {
    console.time('sequential');
    
    const result1 = await mockApiCall('API 1', 800);
    const result2 = await mockApiCall('API 2', 600);
    const result3 = await mockApiCall('API 3', 400);
    
    console.timeEnd('sequential');
    return [result1, result2, result3];
}

async function parallelRequests() {
    console.time('parallel');
    
    const [result1, result2, result3] = await Promise.all([
        mockApiCall('API 1', 800),
        mockApiCall('API 2', 600),
        mockApiCall('API 3', 400)
    ]);
    
    console.timeEnd('parallel');
    return [result1, result2, result3];
}

async function mockApiCall(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(\`\${name} completed\`), delay);
    });
}

// Run both
// sequentialRequests().then(() => parallelRequests());

// SOLUTION 3: Error Recovery
async function fetchWithFallbacks() {
    const endpoints = [
        'https://primary.api/data',
        'https://backup1.api/data',
        'https://backup2.api/data'
    ];
    
    for (const endpoint of endpoints) {
        try {
            console.log(\`Trying: \${endpoint}\`);
            const response = await mockFetch(endpoint);
            console.log(\`Success from: \${endpoint}\`);
            return response;
        } catch (error) {
            console.log(\`Failed: \${endpoint} - \${error.message}\`);
            continue;
        }
    }
    
    console.log('All endpoints failed, using default data');
    return { data: 'default', source: 'fallback' };
}

async function mockFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.6;
            if (success) {
                resolve({ data: \`Data from \${url}\`, status: 200 });
            } else {
                reject(new Error(\`Failed to fetch from \${url}\`));
            }
        }, 500);
    });
}`,
            hint: "Use Promise.all() for parallel execution. With async/await, you can use for loops with try/catch for sequential fallbacks."
        },
        {
            title: "Real-world Async Patterns",
            description: "Implement common async patterns used in production applications",
            difficulty: "Advanced",
            starterCode: `// SCENARIO 1: Rate Limiter
// Create a rate-limited API caller that:
// 1. Limits to 3 requests per second
// 2. Queues excess requests
// 3. Returns results in order

// SCENARIO 2: Retry Logic
// Create a function with exponential backoff:
// 1. Retry failed requests up to 3 times
// 2. Wait 1s, then 2s, then 4s between retries
// 3. Log attempts and final result

// SCENARIO 3: Timeout Wrapper
// Create a utility that wraps any promise with a timeout:
// 1. If promise resolves before timeout, return result
// 2. If timeout reached first, throw TimeoutError
// 3. Clean up timeout to prevent memory leaks`,
            solution: `// SOLUTION 1: Rate Limiter
class RateLimiter {
    constructor(requestsPerSecond) {
        this.queue = [];
        this.processing = false;
        this.requestsPerSecond = requestsPerSecond;
        this.lastRequestTime = 0;
    }
    
    async add(requestFn) {
        return new Promise((resolve, reject) => {
            this.queue.push({ requestFn, resolve, reject });
            this.processQueue();
        });
    }
    
    async processQueue() {
        if (this.processing || this.queue.length === 0) return;
        
        this.processing = true;
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        const delay = Math.max(0, 1000 / this.requestsPerSecond - timeSinceLastRequest);
        
        setTimeout(async () => {
            const item = this.queue.shift();
            try {
                const result = await item.requestFn();
                item.resolve(result);
            } catch (error) {
                item.reject(error);
            }
            
            this.lastRequestTime = Date.now();
            this.processing = false;
            this.processQueue();
        }, delay);
    }
}

// Usage
const limiter = new RateLimiter(3); // 3 requests per second
for (let i = 0; i < 10; i++) {
    limiter.add(() => mockApiCall(\`Request \${i}\`))
        .then(result => console.log(result));
}

// SOLUTION 2: Retry Logic with Exponential Backoff
async function retryWithBackoff(fn, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            console.log(\`Attempt \${attempt + 1}...\`);
            const result = await fn();
            console.log(\`Success on attempt \${attempt + 1}\`);
            return result;
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${attempt + 1} failed: \${error.message}\`);
            
            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000;
                console.log(\`Waiting \${delay}ms before retry...\`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw lastError;
}

// Usage
retryWithBackoff(() => {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7;
        setTimeout(() => {
            success ? resolve('Success!') : reject(new Error('Temporary failure'));
        }, 300);
    });
}).then(console.log).catch(console.error);

// SOLUTION 3: Timeout Wrapper
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TimeoutError';
    }
}

function withTimeout(promise, timeoutMs) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new TimeoutError(\`Operation timed out after \${timeoutMs}ms\`));
        }, timeoutMs);
        
        promise
            .then(result => {
                clearTimeout(timeoutId);
                resolve(result);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                reject(error);
            });
    });
}

// Usage
async function fetchWithTimeout(url, timeout = 3000) {
    const fetchPromise = fetch(url).then(r => r.json());
    return withTimeout(fetchPromise, timeout);
}

// Mock usage
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow result'), 4000));
withTimeout(slowPromise, 2000)
    .then(console.log)
    .catch(error => console.error(error.name, error.message));`,
            hint: "For rate limiting, use a queue and setTimeout. For retries, use a loop with increasing delays. For timeouts, use Promise.race() with a timeout promise."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Asynchronous JavaScript Practice\nconsole.log("Understanding async JS...");`);
        setOutput('');
        setPendingPromises([]);
        setCompletedOperations([]);
    };

    const patterns = [
        {
            name: "Promise Chain",
            code: `// Chaining multiple async operations\nfetch('/api/user')\n  .then(response => response.json())\n  .then(user => fetch(\`/api/posts/\${user.id}\`))\n  .then(posts => console.log(posts))\n  .catch(error => console.error(error));`,
            description: "Sequential async operations"
        },
        {
            name: "Async/Await",
            code: `// Modern async/await pattern\nasync function loadData() {\n  try {\n    const user = await fetchUser();\n    const posts = await fetchPosts(user.id);\n    return { user, posts };\n  } catch (error) {\n    console.error('Failed:', error);\n  }\n}`,
            description: "Cleaner async code"
        },
        {
            name: "Parallel Requests",
            code: `// Multiple requests simultaneously\nasync function loadAll() {\n  const [users, posts, comments] = await Promise.all([\n    fetch('/api/users'),\n    fetch('/api/posts'),\n    fetch('/api/comments')\n  ]);\n  return { users, posts, comments };\n}`,
            description: "Optimize loading time"
        },
        {
            name: "Timeout Pattern",
            code: `// Add timeout to any promise\nfunction withTimeout(promise, ms) {\n  const timeout = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error('Timeout')), ms)\n  );\n  return Promise.race([promise, timeout]);\n}`,
            description: "Prevent hanging promises"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson15" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 3: Advanced</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 15: Asynchronous JavaScript</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Asynchronous JavaScript
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master callbacks, promises, async/await, and build responsive applications.
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
                                            <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Asynchronous Programming in JavaScript
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        JavaScript is single-threaded but handles async operations through the Event Loop. Learn how to write non-blocking code that remains responsive.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <RefreshCw className="w-4 h-4" /> Event Loop
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Single-threaded</strong> execution</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Non-blocking</strong> I/O operations</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Callback queue</strong> and <strong>microtask queue</strong></span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Zap className="w-4 h-4" /> Async Patterns
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Callbacks</strong> (Traditional)</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Promises</strong> (ES6)</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                    <span><strong>Async/Await</strong> (ES2017)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Evolution of Async JavaScript
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                                    <th className="py-2 text-left">Pattern</th>
                                                    <th className="py-2 text-left">Year</th>
                                                    <th className="py-2 text-left">Pros</th>
                                                    <th className="py-2 text-left">Cons</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-medium">Callbacks</td>
                                                    <td className="py-3">ES3</td>
                                                    <td className="py-3 text-green-600 dark:text-green-400">Simple, universal</td>
                                                    <td className="py-3 text-red-600 dark:text-red-400">Callback hell, hard error handling</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-medium">Promises</td>
                                                    <td className="py-3">ES6 (2015)</td>
                                                    <td className="py-3 text-green-600 dark:text-green-400">Chainable, better errors</td>
                                                    <td className="py-3 text-red-600 dark:text-red-400">Still then/catch chains</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 font-medium">Async/Await</td>
                                                    <td className="py-3">ES2017</td>
                                                    <td className="py-3 text-green-600 dark:text-green-400">Readable, try/catch</td>
                                                    <td className="py-3 text-red-600 dark:text-red-400">Requires async functions</td>
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
                                            <span className="font-mono text-xs text-slate-400">async-demo.js</span>
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

                                    {/* Async Status Visualization */}
                                    {pendingPromises.length > 0 && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                                                <span className="text-xs font-semibold text-slate-400">Async Operations</span>
                                            </div>
                                            <div className="space-y-1">
                                                {pendingPromises.map((op, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                        <span className="text-xs text-slate-400">{op}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

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
                                        Async Concept Explorer
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
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Try It Yourself</h4>
                                                        <button
                                                            onClick={() => {
                                                                // Simulate async operation
                                                                setPendingPromises([`Simulating ${concept.name}...`]);
                                                                setTimeout(() => {
                                                                    setPendingPromises([]);
                                                                    setCompletedOperations([`${concept.name} completed!`]);
                                                                }, 1500);
                                                            }}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <Play className="w-4 h-4" />
                                                            Simulate This Pattern
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Async Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <RefreshCw className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                            onClick={() => setCode(`// Basic Promise\nconst promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Success!');\n  }, 1000);\n});\n\npromise.then(console.log).catch(console.error);`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Promise
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Async/Await Example\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Async/Await
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Promise.all Example\nconst promises = [\n  fetch('/api/users'),\n  fetch('/api/posts'),\n  fetch('/api/comments')\n];\n\nPromise.all(promises)\n  .then(responses => Promise.all(responses.map(r => r.json())))\n  .then(console.log);`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Promise.all
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Retry Logic\nasync function retry(fn, retries = 3, delay = 1000) {\n  try {\n    return await fn();\n  } catch (error) {\n    if (retries === 0) throw error;\n    await new Promise(r => setTimeout(r, delay));\n    return retry(fn, retries - 1, delay * 2);\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Retry Pattern
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Async Tips</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                                            <span>Always handle promise rejections</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                            <span>Use async/await for readability</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                            <span>Promise.all for parallel operations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                                            <span>Add timeouts to prevent hanging</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">async-playground.js</span>
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

                                    {/* Async Status */}
                                    {pendingPromises.length > 0 && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <RefreshCw className="w-3 h-3 text-blue-400 animate-spin" />
                                                <span className="text-xs text-slate-400">Pending Operations:</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {pendingPromises.map((op, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 bg-blue-900/50 text-blue-300 text-xs rounded">
                                                        {op}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

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
                                    Async Operation Visualizer
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Event Loop Simulation
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Sync vs Async Execution</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`console.log('1: Sync');\nsetTimeout(() => console.log('2: Async'), 0);\nconsole.log('3: Sync');`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">
                                                            {"console.log('1'); setTimeout(() => console.log('2'), 0); console.log('3');"}
                                                        </code>

                                                    </button>
                                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                                        Output order: 1, 3, 2 (Async moves to callback queue)
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Promise Microtasks</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`console.log('1');\nPromise.resolve().then(() => console.log('2'));\nconsole.log('3');`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Promise microtasks run before next tick</code>
                                                    </button>
                                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                                        Promises go to microtask queue (higher priority than callback queue)
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Async/Await Flow</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`async function demo() {\n  console.log('1: Start');\n  await Promise.resolve();\n  console.log('2: After await');\n}\nconsole.log('3: Before call');\ndemo();\nconsole.log('4: After call');`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">async/await splits function execution</code>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Promise State Visualizer
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                <div className="text-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                                                    <div className="font-bold text-blue-700 dark:text-blue-300">Pending</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400">Initial state</div>
                                                </div>
                                                <div className="text-center p-3 bg-green-100 dark:bg-green-900/30 rounded">
                                                    <div className="font-bold text-green-700 dark:text-green-300">Fulfilled</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400">Operation succeeded</div>
                                                </div>
                                                <div className="text-center p-3 bg-red-100 dark:bg-red-900/30 rounded">
                                                    <div className="font-bold text-red-700 dark:text-red-300">Rejected</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400">Operation failed</div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <button
                                                    onClick={() => {
                                                        setPendingPromises(['Creating promise...']);
                                                        setTimeout(() => {
                                                            setPendingPromises([]);
                                                            setCompletedOperations(['Promise resolved!']);
                                                            setTimeout(() => setCompletedOperations([]), 2000);
                                                        }, 1500);
                                                    }}
                                                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                                                >
                                                    Simulate Successful Promise
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setPendingPromises(['Creating promise...']);
                                                        setTimeout(() => {
                                                            setPendingPromises([]);
                                                            setOutput('[ERROR] Promise rejected: Simulated error');
                                                        }, 1500);
                                                    }}
                                                    className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                                                >
                                                    Simulate Failed Promise
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Try Your Own Async Code</h4>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Write async code to visualize..."
                                            />
                                            <div className="flex gap-2">
                                                <button onClick={runCode} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                                    Visualize Execution
                                                </button>
                                                <button onClick={resetCode} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Event Loop Priority</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>1. Call Stack:</strong> Sync code
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>2. Microtasks:</strong> Promises, queueMicrotask()
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>3. Macrotasks:</strong> setTimeout, setInterval, I/O
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                                        Order: Call Stack → Microtasks → Macrotasks → Repeat
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson14" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Regular Expressions</span>
                        </a>
                        <a href="/lesson16" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Async/Await Deep Dive</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}