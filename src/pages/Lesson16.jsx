import React, { useState } from 'react';
import {
    Layers, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Zap, AlertCircle,
    CheckCircle, XCircle, Timer, RefreshCw,
    Brain, Code, Lightbulb, Grid, Box,
    Cpu, Package, Users, Eye, Filter, Lock,
    Unlock, Database, Cloud, ArrowRight,
    ArrowDown, Pause, PlayCircle, StopCircle,
    FastForward, Rewind, GitBranch, GitMerge,
    Workflow, Split, Combine, Loader
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson16() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === ASYNC/AWAIT DEEP DIVE ===
// Async/await is syntactic sugar over Promises

// 1. Basic Async Function
async function basicAsync() {
    console.log('1: Start async function');
    
    // await pauses execution until promise settles
    const result = await new Promise(resolve => {
        setTimeout(() => resolve('Resolved value!'), 1000);
    });
    
    console.log('2: After await:', result);
    return result;
}

// Call async function
basicAsync().then(result => {
    console.log('3: Async function returned:', result);
});

// 2. Error Handling with Try/Catch
async function fetchWithErrorHandling() {
    try {
        console.log('Fetching data...');
        
        // Simulate API call
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve({ status: 200, data: { id: 1, name: 'Success' } });
                } else {
                    reject(new Error('Network request failed'));
                }
            }, 800);
        });
        
        console.log('Response received:', response);
        return response.data;
        
    } catch (error) {
        console.error('Caught error:', error.message);
        // Return fallback data
        return { id: 0, name: 'Default', error: true };
    } finally {
        console.log('Fetch operation completed (cleanup)');
    }
}

// 3. Sequential vs Parallel Execution
async function sequentialRequests() {
    console.time('sequential');
    
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    
    console.timeEnd('sequential');
    return { user, posts, comments };
}

async function parallelRequests() {
    console.time('parallel');
    
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchUserPosts(1), // Using known ID for demo
        fetchPostComments(101)
    ]);
    
    console.timeEnd('parallel');
    return { user, posts, comments };
}

// Mock API functions
async function fetchUser() {
    await delay(1000);
    return { id: 1, name: 'Alice', email: 'alice@example.com' };
}

async function fetchUserPosts(userId) {
    await delay(800);
    return [
        { id: 101, title: 'First Post', userId },
        { id: 102, title: 'Second Post', userId }
    ];
}

async function fetchPostComments(postId) {
    await delay(600);
    return [
        { id: 1001, postId, text: 'Great post!' },
        { id: 1002, postId, text: 'Thanks for sharing' }
    ];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 4. Async Iteration
async function processItemsSequentially(items) {
    const results = [];
    
    for (const item of items) {
        console.log(\`Processing item: \${item}\`);
        const result = await processItem(item);
        results.push(result);
    }
    
    return results;
}

async function processItemsParallel(items) {
    const promises = items.map(item => processItem(item));
    return await Promise.all(promises);
}

async function processItem(item) {
    await delay(300);
    return \`Processed: \${item.toUpperCase()}\`;
}

// 5. Advanced Patterns
class AsyncQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }
    
    async add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.process();
        });
    }
    
    async process() {
        if (this.processing || this.queue.length === 0) return;
        
        this.processing = true;
        const { task, resolve, reject } = this.queue.shift();
        
        try {
            const result = await task();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.processing = false;
            this.process();
        }
    }
}

// 6. Real-world Example: E-commerce Checkout
async function checkoutProcess(userId, items) {
    try {
        console.log('Starting checkout process...');
        
        // Step 1: Validate user
        const user = await validateUser(userId);
        console.log('User validated:', user.name);
        
        // Step 2: Check inventory (parallel)
        const inventoryChecks = await Promise.all(
            items.map(item => checkInventory(item.id, item.quantity))
        );
        
        // Step 3: Calculate total
        const total = await calculateTotal(items);
        console.log('Total amount:', total);
        
        // Step 4: Process payment
        const payment = await processPayment(userId, total);
        console.log('Payment processed:', payment.transactionId);
        
        // Step 5: Create order
        const order = await createOrder(userId, items, payment);
        console.log('Order created:', order.id);
        
        // Step 6: Send notifications (fire and forget)
        sendNotification(user.email, 'Order confirmed');
        
        return { success: true, order, payment };
        
    } catch (error) {
        console.error('Checkout failed:', error.message);
        
        // Rollback if needed
        await rollbackCheckout(userId);
        
        return { 
            success: false, 
            error: error.message,
            userFriendlyError: 'Checkout failed. Please try again.'
        };
    }
}

// Mock checkout functions
async function validateUser(id) {
    await delay(500);
    return { id, name: 'John Doe', email: 'john@example.com' };
}

async function checkInventory(itemId, quantity) {
    await delay(300);
    const available = Math.random() > 0.1;
    if (!available) throw new Error(\`Item \${itemId} out of stock\`);
    return { itemId, available: true };
}

async function calculateTotal(items) {
    await delay(200);
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

async function processPayment(userId, amount) {
    await delay(1000);
    return { 
        transactionId: 'TX_' + Math.random().toString(36).substr(2, 9),
        amount,
        status: 'completed'
    };
}

async function createOrder(userId, items, payment) {
    await delay(800);
    return { 
        id: 'ORD_' + Math.random().toString(36).substr(2, 9),
        userId,
        items,
        payment,
        status: 'processing',
        createdAt: new Date()
    };
}

async function sendNotification(email, message) {
    // Fire and forget - don't await
    fetch('/api/notifications', {
        method: 'POST',
        body: JSON.stringify({ email, message })
    }).catch(console.error); // Log but don't throw
}

async function rollbackCheckout(userId) {
    console.log('Rolling back checkout for user:', userId);
    // Implementation would revert any changes made
}

// Run examples
console.log('=== Async/Await Examples ===');
fetchWithErrorHandling().then(console.log);

// Uncomment to run:
// sequentialRequests().then(() => parallelRequests());
// checkoutProcess(1, [
//     { id: 'A1', name: 'Product 1', price: 29.99, quantity: 2 },
//     { id: 'B2', name: 'Product 2', price: 49.99, quantity: 1 }
// ]).then(console.log);`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [asyncState, setAsyncState] = useState({
        isRunning: false,
        currentStep: 0,
        steps: [],
        parallelOps: []
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


            // Simulate async execution visualization
            setAsyncState({
                isRunning: true,
                currentStep: 0,
                steps: [
                    'Starting async execution...',
                    'Creating promises...',
                    'Awaiting results...',
                    'Processing data...',
                    'Finalizing...'
                ],
                parallelOps: ['API Call 1', 'API Call 2', 'DB Query']
            });

            const stepInterval = setInterval(() => {
                setAsyncState(prev => {
                    if (prev.currentStep >= prev.steps.length - 1) {
                        clearInterval(stepInterval);
                        setTimeout(() => {
                            setAsyncState({
                                isRunning: false,
                                currentStep: 0,
                                steps: [],
                                parallelOps: []
                            });
                        }, 1000);
                        return { ...prev, isRunning: false };
                    }
                    return { ...prev, currentStep: prev.currentStep + 1 };
                });
            }, 500);

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
                    name: "Async Functions",
                    icon: <Zap className="w-4 h-4 text-yellow-500" />,
                    description: "Functions declared with async keyword, always return a Promise",
                    syntax: "async function name() { /* ... */ }",
                    example: "async function getUser() { return await fetch('/user'); }",
                    useCase: "Any function that performs asynchronous operations",
                    visual: "async fn → Returns Promise → Can use await inside"
                },
                {
                    name: "Await Keyword",
                    icon: <Pause className="w-4 h-4 text-blue-500" />,
                    description: "Pauses async function execution until Promise settles",
                    syntax: "const result = await promise;",
                    example: "const data = await fetch('api/data');",
                    useCase: "Waiting for async operations to complete",
                    visual: "Code Pauses → Promise Settles → Code Resumes with Value"
                },
                {
                    name: "Error Handling",
                    icon: <AlertCircle className="w-4 h-4 text-red-500" />,
                    description: "Using try/catch blocks with async/await for error handling",
                    syntax: "try { await promise; } catch(error) { /* handle */ }",
                    example: "try { const data = await fetch(); } catch(err) { console.error(err); }",
                    useCase: "Graceful handling of async errors",
                    visual: "Try Block → Await → Catch Block (if error) → Finally (always)"
                }
            ]
        },
        {
            category: "Execution Patterns",
            concepts: [
                {
                    name: "Sequential Execution",
                    icon: <ArrowDown className="w-4 h-4 text-green-500" />,
                    description: "Operations executed one after another using await",
                    syntax: "const a = await op1(); const b = await op2();",
                    example: "Download file, then process, then upload",
                    useCase: "When operations depend on previous results",
                    visual: "Step 1 → Step 2 → Step 3 → Complete"
                },
                {
                    name: "Parallel Execution",
                    icon: <GitMerge className="w-4 h-4 text-purple-500" />,
                    description: "Multiple async operations executed simultaneously",
                    syntax: "const [a, b] = await Promise.all([op1(), op2()]);",
                    example: "Fetch user data, posts, and comments simultaneously",
                    useCase: "Independent operations that can run concurrently",
                    visual: "[Op1, Op2, Op3] → All Execute → [Result1, Result2, Result3]"
                },
                {
                    name: "Concurrent Iteration",
                    icon: <RefreshCw className="w-4 h-4 text-teal-500" />,
                    description: "Process arrays of async operations with controlled concurrency",
                    syntax: "for await (const item of items) { /* process */ }",
                    example: "Processing multiple API requests with rate limiting",
                    useCase: "Batch processing with controlled parallelism",
                    visual: "Items → Process N at a time → Collect Results"
                }
            ]
        },
        {
            category: "Advanced Patterns",
            concepts: [
                {
                    name: "Async Generators",
                    icon: <Workflow className="w-4 h-4 text-orange-500" />,
                    description: "Generators that can yield promises and use await",
                    syntax: "async function* generator() { yield await promise; }",
                    example: "Stream processing, paginated API calls",
                    useCase: "Producing sequences of async values",
                    visual: "Async Generator → yield Promise → for await...of → Process"
                },
                {
                    name: "Race Conditions",
                    icon: <FastForward className="w-4 h-4 text-red-600" />,
                    description: "When async operations complete in unexpected order",
                    syntax: "Multiple awaits without proper sequencing",
                    example: "Two updates to same resource without locking",
                    useCase: "Problem to avoid with proper async design",
                    visual: "Operation A starts → Operation B starts → B finishes first → Data inconsistency"
                },
                {
                    name: "Async Queue",
                    icon: <Database className="w-4 h-4 text-indigo-500" />,
                    description: "Process async tasks in order with controlled concurrency",
                    syntax: "Queue system with max concurrent workers",
                    example: "Rate-limited API calls, file upload queue",
                    useCase: "Managing resource-intensive async operations",
                    visual: "Tasks → Queue → Worker Pool → Results"
                }
            ]
        },
        {
            category: "Real-world Applications",
            concepts: [
                {
                    name: "API Orchestration",
                    icon: <GitBranch className="w-4 h-4 text-green-600" />,
                    description: "Coordinating multiple API calls with complex logic",
                    syntax: "Combines sequential and parallel awaits",
                    example: "E-commerce checkout: validate → inventory → payment → order",
                    useCase: "Complex business workflows with multiple services",
                    visual: "Start → Parallel Checks → Sequential Steps → Rollback on Error"
                },
                {
                    name: "Error Recovery",
                    icon: <Unlock className="w-4 h-4 text-yellow-600" />,
                    description: "Fallback strategies when async operations fail",
                    syntax: "try/catch with retry logic and fallbacks",
                    example: "Try primary API → if fails, try backup → if fails, use cache",
                    useCase: "Building resilient applications",
                    visual: "Primary → Fail → Backup 1 → Fail → Backup 2 → Success"
                },
                {
                    name: "Fire and Forget",
                    icon: <Cloud className="w-4 h-4 text-blue-600" />,
                    description: "Async operations that don't need to be awaited",
                    syntax: "async function call without await",
                    example: "Analytics tracking, notification sending",
                    useCase: "Non-critical background operations",
                    visual: "Start Async Op → Continue Execution → Don't Wait for Result"
                },
                {
                    name: "Async Composition",
                    icon: <Combine className="w-4 h-4 text-purple-600" />,
                    description: "Combining multiple async functions into reusable units",
                    syntax: "Higher-order async functions",
                    example: "createAsyncMiddleware, withRetry, withTimeout",
                    useCase: "Reusable async patterns and utilities",
                    visual: "Base Function → Async Wrapper → Enhanced Function"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Async/Await Basics",
            description: "Convert promise chains to async/await and handle basic patterns",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Convert to Async/Await
// Convert this promise chain to async/await:
function getUserDataOld() {
    return fetchUser()
        .then(user => fetchProfile(user.id))
        .then(profile => fetchSettings(profile.userId))
        .then(settings => ({ user, profile, settings }))
        .catch(error => ({ error: true, message: error.message }));
}

// EXERCISE 2: Error Handling
// Create an async function that:
// 1. Fetches data from an API
// 2. If fails, retries up to 3 times with 1s delay
// 3. If all retries fail, returns default data
// 4. Uses try/catch/finally appropriately

// EXERCISE 3: Sequential Processing
// Create a function that processes an array of URLs:
// 1. Fetches each URL sequentially
// 2. Extracts specific data from each response
// 3. Returns array of processed results
// 4. Skips failed requests (continue with others)`,
            solution: `// SOLUTION 1: Convert to Async/Await
async function getUserDataNew() {
    try {
        const user = await fetchUser();
        const profile = await fetchProfile(user.id);
        const settings = await fetchSettings(profile.userId);
        return { user, profile, settings };
    } catch (error) {
        return { error: true, message: error.message };
    }
}

// Mock functions
async function fetchUser() {
    await delay(300);
    return { id: 1, name: 'Alice' };
}
async function fetchProfile(userId) {
    await delay(200);
    return { userId, bio: 'Developer' };
}
async function fetchSettings(userId) {
    await delay(100);
    return { userId, theme: 'dark' };
}

// SOLUTION 2: Error Handling with Retry
async function fetchWithRetry(url, maxRetries = 3, delayMs = 1000) {
    let lastError;
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            console.log(\`Attempt \${attempt + 1} to fetch \${url}\`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            
            const data = await response.json();
            console.log(\`Success on attempt \${attempt + 1}\`);
            return data;
            
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${attempt + 1} failed: \${error.message}\`);
            
            if (attempt < maxRetries - 1) {
                console.log(\`Waiting \${delayMs}ms before retry...\`);
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }
        }
    }
    
    console.log(\`All \${maxRetries} attempts failed, returning default data\`);
    return { 
        data: null, 
        error: lastError.message,
        source: 'fallback'
    };
}

// SOLUTION 3: Sequential Processing with Error Continuation
async function processUrlsSequentially(urls) {
    const results = [];
    
    for (const url of urls) {
        try {
            console.log(\`Fetching: \${url}\`);
            const response = await fetch(url);
            const data = await response.json();
            
            // Extract specific data (example: extract title property)
            const processed = {
                url,
                title: data.title || 'No title',
                success: true
            };
            
            results.push(processed);
            
        } catch (error) {
            console.error(\`Failed to fetch \${url}: \${error.message}\`);
            results.push({
                url,
                error: error.message,
                success: false
            });
            // Continue with next URL
        }
    }
    
    return results;
}

// Utility function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}`,
            hint: "Remember: async functions always return Promises. Use try/catch for error handling within async functions."
        },
        {
            title: "Advanced Async Patterns",
            description: "Implement complex async patterns for production applications",
            difficulty: "Intermediate",
            starterCode: `// EXERCISE 1: Rate-Limited Batch Processing
// Create a function that processes an array of items:
// 1. Processes N items at a time (concurrency limit)
// 2. Returns all results in original order
// 3. Continues even if some items fail

// EXERCISE 2: Async Timeout Wrapper
// Create a utility function that:
// 1. Wraps any async function with a timeout
// 2. Throws TimeoutError if function takes too long
// 3. Cleans up timeout to prevent memory leaks
// 4. Works with both Promises and async functions

// EXERCISE 3: Circuit Breaker Pattern
// Implement a circuit breaker that:
// 1. Tracks failures of async operations
// 2. Opens circuit after threshold failures
// 3. Allows some requests through after cooldown (half-open)
// 4. Closes circuit when operations succeed`,
            solution: `// SOLUTION 1: Rate-Limited Batch Processing
async function processWithConcurrency(items, processorFn, concurrency = 3) {
    const results = new Array(items.length);
    let currentIndex = 0;
    
    // Worker function
    async function worker() {
        while (currentIndex < items.length) {
            const index = currentIndex++;
            const item = items[index];
            
            try {
                results[index] = {
                    status: 'fulfilled',
                    value: await processorFn(item)
                };
            } catch (error) {
                results[index] = {
                    status: 'rejected',
                    reason: error.message
                };
            }
        }
    }
    
    // Start workers
    const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
    await Promise.all(workers);
    
    return results;
}

// Usage
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
async function processItem(item) {
    await delay(Math.random() * 1000);
    if (Math.random() < 0.1) throw new Error(\`Processing failed for \${item}\`);
    return \`Processed \${item}\`;
}

// processWithConcurrency(items, processItem, 3).then(console.log);

// SOLUTION 2: Async Timeout Wrapper
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TimeoutError';
    }
}

function withTimeout(asyncFn, timeoutMs) {
    return async function(...args) {
        let timeoutId;
        
        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => {
                reject(new TimeoutError(\`Function timed out after \${timeoutMs}ms\`));
            }, timeoutMs);
        });
        
        try {
            const result = await Promise.race([
                asyncFn(...args),
                timeoutPromise
            ]);
            
            clearTimeout(timeoutId);
            return result;
            
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    };
}

// Usage
async function slowOperation(ms) {
    await delay(ms);
    return 'Operation completed';
}

const timedOperation = withTimeout(slowOperation, 500);
// timedOperation(1000).catch(console.error); // Throws TimeoutError

// SOLUTION 3: Circuit Breaker Pattern
class CircuitBreaker {
    constructor(asyncFn, options = {}) {
        this.asyncFn = asyncFn;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
        this.failureCount = 0;
        this.lastFailureTime = null;
        
        this.failureThreshold = options.failureThreshold || 5;
        this.resetTimeout = options.resetTimeout || 10000; // 10 seconds
        this.halfOpenMaxAttempts = options.halfOpenMaxAttempts || 2;
        this.halfOpenAttempts = 0;
    }
    
    async call(...args) {
        if (this.state === 'OPEN') {
            const now = Date.now();
            if (now - this.lastFailureTime > this.resetTimeout) {
                this.state = 'HALF_OPEN';
                this.halfOpenAttempts = 0;
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const result = await this.asyncFn(...args);
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failureCount = 0;
        this.halfOpenAttempts = 0;
        
        if (this.state === 'HALF_OPEN') {
            this.state = 'CLOSED';
        }
    }
    
    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        
        if (this.state === 'HALF_OPEN') {
            this.halfOpenAttempts++;
            if (this.halfOpenAttempts >= this.halfOpenMaxAttempts) {
                this.state = 'OPEN';
            }
        } else if (this.failureCount >= this.failureThreshold) {
            this.state = 'OPEN';
        }
    }
    
    getStatus() {
        return {
            state: this.state,
            failureCount: this.failureCount,
            lastFailureTime: this.lastFailureTime
        };
    }
}

// Usage
async function unreliableApi() {
    await delay(200);
    if (Math.random() < 0.7) {
        throw new Error('API failed');
    }
    return 'API success';
}

const breaker = new CircuitBreaker(unreliableApi, {
    failureThreshold: 3,
    resetTimeout: 5000
});

// Try calling multiple times
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        breaker.call()
            .then(result => console.log(\`Call \${i}: \${result}\`))
            .catch(error => console.log(\`Call \${i}: \${error.message}\`))
            .finally(() => console.log('Breaker status:', breaker.getStatus()));
    }, i * 1000);
}`,
            hint: "For concurrency control, use worker patterns. For circuit breakers, track state transitions based on success/failure rates."
        },
        {
            title: "Real-world Async Systems",
            description: "Build complete async systems with complex orchestration",
            difficulty: "Advanced",
            starterCode: `// SCENARIO 1: E-commerce Order Pipeline
// Build an order processing system that:
// 1. Validates order (sequential)
// 2. Checks inventory for all items (parallel)
// 3. Processes payment
// 4. Creates order record
// 5. Sends notifications (fire and forget)
// 6. Handles rollback if any step fails

// SCENARIO 2: Data Sync Service
// Create a service that synchronizes data between systems:
// 1. Fetches changes from source (paginated)
// 2. Transforms data
// 3. Uploads to destination (batch upload)
// 4. Handles rate limits and retries
// 5. Tracks progress and resumes on failure

// SCENARIO 3: Real-time Dashboard
// Build a dashboard that:
// 1. Fetches multiple data sources in parallel
// 2. Updates UI as data arrives (streaming)
// 3. Caches responses with stale-while-revalidate
// 4. Handles disconnected state with retry
// 5. Debounces rapid updates`,
            solution: `// SOLUTION 1: E-commerce Order Pipeline
class OrderProcessor {
    constructor() {
        this.orders = new Map();
    }
    
    async processOrder(orderData) {
        const orderId = this.generateOrderId();
        this.orders.set(orderId, { status: 'processing', steps: [] });
        
        try {
            // Step 1: Validate order
            await this.logStep(orderId, 'validation');
            const validatedOrder = await this.validateOrder(orderData);
            
            // Step 2: Check inventory (parallel)
            await this.logStep(orderId, 'inventory_check');
            const inventoryResults = await Promise.all(
                validatedOrder.items.map(item => 
                    this.checkInventory(item.productId, item.quantity)
                )
            );
            
            // Step 3: Reserve inventory
            await this.logStep(orderId, 'inventory_reservation');
            await this.reserveInventory(validatedOrder.items);
            
            // Step 4: Process payment
            await this.logStep(orderId, 'payment_processing');
            const payment = await this.processPayment({
                userId: validatedOrder.userId,
                amount: validatedOrder.total,
                currency: 'USD'
            });
            
            // Step 5: Create order
            await this.logStep(orderId, 'order_creation');
            const order = await this.createOrderRecord({
                ...validatedOrder,
                paymentId: payment.id,
                status: 'confirmed'
            });
            
            // Step 6: Send notifications (fire and forget)
            this.sendNotifications(order).catch(console.error);
            
            this.orders.set(orderId, { 
                ...this.orders.get(orderId), 
                status: 'completed', 
                order 
            });
            
            return { success: true, orderId, order };
            
        } catch (error) {
            await this.logStep(orderId, 'error', error.message);
            await this.rollbackOrder(orderId);
            
            this.orders.set(orderId, { 
                ...this.orders.get(orderId), 
                status: 'failed', 
                error: error.message 
            });
            
            return { 
                success: false, 
                orderId, 
                error: error.message,
                userMessage: 'Order processing failed. Please try again.'
            };
        }
    }
    
    // Mock implementations
    async validateOrder(order) {
        await delay(300);
        if (!order.userId || !order.items || order.items.length === 0) {
            throw new Error('Invalid order data');
        }
        
        const total = order.items.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0
        );
        
        return { ...order, total };
    }
    
    async checkInventory(productId, quantity) {
        await delay(200);
        const available = Math.random() > 0.05;
        if (!available) {
            throw new Error(\`Product \${productId} out of stock\`);
        }
        return { productId, available: true };
    }
    
    async reserveInventory(items) {
        await delay(400);
        // Implementation would update inventory database
    }
    
    async processPayment(paymentData) {
        await delay(800);
        if (Math.random() < 0.02) {
            throw new Error('Payment processing failed');
        }
        return { 
            id: 'PAY_' + Math.random().toString(36).substr(2, 9),
            ...paymentData,
            status: 'completed'
        };
    }
    
    async createOrderRecord(orderData) {
        await delay(500);
        return {
            id: 'ORD_' + Math.random().toString(36).substr(2, 9),
            ...orderData,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
    
    async sendNotifications(order) {
        // Fire and forget - don't await
        const notifications = [
            this.sendEmail(order.userEmail, 'Order Confirmation'),
            this.sendSMS(order.userPhone, 'Order placed successfully'),
            this.updateDashboard(order)
        ];
        
        // Run in background, don't await
        Promise.allSettled(notifications).then(results => {
            results.forEach((result, index) => {
                if (result.status === 'rejected') {
                    console.warn(\`Notification \${index} failed:\`, result.reason);
                }
            });
        });
    }
    
    async rollbackOrder(orderId) {
        console.log(\`Rolling back order \${orderId}\`);
        // Implementation would revert inventory, payment, etc.
        await delay(300);
    }
    
    async logStep(orderId, step, error = null) {
        const order = this.orders.get(orderId);
        order.steps.push({ 
            step, 
            timestamp: new Date(),
            error 
        });
        console.log(\`Order \${orderId}: \${step} \${error ? 'failed: ' + error : 'completed'}\`);
    }
    
    generateOrderId() {
        return 'ORDER_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    }
    
    // Mock notification methods
    async sendEmail(email, message) {
        await delay(100);
        console.log(\`Email sent to \${email}: \${message}\`);
    }
    
    async sendSMS(phone, message) {
        await delay(150);
        console.log(\`SMS sent to \${phone}: \${message}\`);
    }
    
    async updateDashboard(order) {
        await delay(200);
        console.log(\`Dashboard updated for order \${order.id}\`);
    }
}

// SOLUTION 2: Data Sync Service
class DataSyncService {
    constructor(sourceApi, destinationApi, options = {}) {
        this.sourceApi = sourceApi;
        this.destinationApi = destinationApi;
        this.batchSize = options.batchSize || 100;
        this.maxConcurrency = options.maxConcurrency || 3;
        this.rateLimitDelay = options.rateLimitDelay || 100;
    }
    
    async syncData(since = null) {
        let page = 1;
        let hasMore = true;
        let syncedCount = 0;
        let failedCount = 0;
        
        console.log('Starting data sync...');
        
        while (hasMore) {
            try {
                // Fetch page from source
                const sourceData = await this.sourceApi.getChanges(page, this.batchSize, since);
                
                if (sourceData.items.length === 0) {
                    hasMore = false;
                    continue;
                }
                
                // Transform data
                const transformed = this.transformData(sourceData.items);
                
                // Upload in batches with concurrency control
                const uploadResults = await this.uploadWithConcurrency(
                    transformed,
                    this.destinationApi.uploadBatch.bind(this.destinationApi)
                );
                
                // Track results
                const successful = uploadResults.filter(r => r.status === 'fulfilled').length;
                const failed = uploadResults.filter(r => r.status === 'rejected').length;
                
                syncedCount += successful;
                failedCount += failed;
                
                console.log(\`Page \${page}: \${successful} succeeded, \${failed} failed\`);
                
                // Apply rate limiting
                await delay(this.rateLimitDelay);
                
                page++;
                hasMore = sourceData.hasMore;
                
            } catch (error) {
                console.error(\`Failed to sync page \${page}: \`, error.message);
                failedCount += this.batchSize;
                
                // Exponential backoff for errors
                const backoffTime = Math.min(1000 * Math.pow(2, page - 1), 30000);
                console.log(\`Waiting \${backoffTime}ms before retry...\`);
                await delay(backoffTime);
            }
        }
        
        console.log(\`Sync completed: \${syncedCount} succeeded, \${failedCount} failed\`);
        return { syncedCount, failedCount };
    }
    
    transformData(items) {
        return items.map(item => ({
            id: item.id,
            data: item,
            transformedAt: new Date(),
            version: '1.0'
        }));
    }
    
    async uploadWithConcurrency(items, uploadFn) {
        const results = new Array(items.length);
        let index = 0;
        
        async function worker() {
            while (index < items.length) {
                const currentIndex = index++;
                const item = items[currentIndex];
                
                try {
                    const result = await uploadFn(item);
                    results[currentIndex] = {
                        status: 'fulfilled',
                        value: result
                    };
                } catch (error) {
                    results[currentIndex] = {
                        status: 'rejected',
                        reason: error.message
                    };
                }
                
                // Small delay between uploads to respect rate limits
                await delay(50);
            }
        }
        
        const workers = Array.from(
            { length: Math.min(this.maxConcurrency, items.length) },
            () => worker()
        );
        
        await Promise.all(workers);
        return results;
    }
}

// SOLUTION 3: Real-time Dashboard
class DashboardService {
    constructor(dataSources, options = {}) {
        this.dataSources = dataSources;
        this.cache = new Map();
        this.cacheDuration = options.cacheDuration || 30000; // 30 seconds
        this.updateInterval = options.updateInterval || 10000; // 10 seconds
        this.updateTimer = null;
        this.subscribers = new Set();
        this.isConnected = true;
    }
    
    async start() {
        console.log('Starting dashboard service...');
        
        // Initial data load
        await this.updateAllData();
        
        // Set up periodic updates
        this.updateTimer = setInterval(() => {
            this.updateAllData().catch(console.error);
        }, this.updateInterval);
        
        // Set up connectivity monitoring
        this.setupConnectivityMonitoring();
    }
    
    stop() {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
        }
        console.log('Dashboard service stopped');
    }
    
    async updateAllData() {
        if (!this.isConnected) {
            console.log('Skipping update - offline');
            return;
        }
        
        console.log('Updating dashboard data...');
        
        try {
            // Fetch all data sources in parallel
            const dataPromises = this.dataSources.map(async (source) => {
                const cacheKey = \`\${source.id}_\${Date.now()}\`;
                
                // Check cache first
                const cached = this.cache.get(source.id);
                if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
                    console.log(\`Using cached data for \${source.id}\`);
                    return { source: source.id, data: cached.data, fromCache: true };
                }
                
                // Fetch fresh data with retry
                const data = await this.fetchWithRetry(source.url);
                
                // Update cache
                this.cache.set(source.id, {
                    data,
                    timestamp: Date.now()
                });
                
                return { source: source.id, data, fromCache: false };
            });
            
            // Process results as they come (streaming updates)
            for (const promise of dataPromises) {
                try {
                    const result = await promise;
                    this.notifySubscribers('data-update', result);
                } catch (error) {
                    console.error(\`Failed to update data source: \${error.message}\`);
                    this.notifySubscribers('data-error', { error: error.message });
                }
            }
            
            this.notifySubscribers('update-complete', { timestamp: new Date() });
            
        } catch (error) {
            console.error('Failed to update dashboard:', error);
            this.notifySubscribers('update-error', { error: error.message });
        }
    }
    
    async fetchWithRetry(url, maxRetries = 3) {
        let lastError;
        
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(\`HTTP \${response.status}\`);
                }
                
                return await response.json();
                
            } catch (error) {
                lastError = error;
                
                if (attempt < maxRetries - 1) {
                    const delayTime = 1000 * Math.pow(2, attempt); // Exponential backoff
                    console.log(\`Retry \${attempt + 1} in \${delayTime}ms...\`);
                    await delay(delayTime);
                }
            }
        }
        
        throw lastError;
    }
    
    setupConnectivityMonitoring() {
        window.addEventListener('online', () => {
            this.isConnected = true;
            console.log('Dashboard back online');
            this.notifySubscribers('connection-changed', { online: true });
            this.updateAllData().catch(console.error);
        });
        
        window.addEventListener('offline', () => {
            this.isConnected = false;
            console.log('Dashboard offline');
            this.notifySubscribers('connection-changed', { online: false });
        });
    }
    
    subscribe(callback) {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }
    
    notifySubscribers(event, data) {
        this.subscribers.forEach(callback => {
            try {
                callback(event, data);
            } catch (error) {
                console.error('Subscriber error:', error);
            }
        });
    }
}

// Utility
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}`,
            hint: "For complex async systems, use classes to manage state. Implement proper error handling and recovery at each step. Use Promise.allSettled() when you need all results regardless of failures."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Async/Await Practice Area\nconsole.log("Master async/await patterns...");`);
        setOutput('');
        setAsyncState({
            isRunning: false,
            currentStep: 0,
            steps: [],
            parallelOps: []
        });
    };

    const patterns = [
        {
            name: "Basic Async Function",
            code: `// Simple async function with await\nasync function getUser(id) {\n  try {\n    const response = await fetch(\`/api/users/\${id}\`);\n    return await response.json();\n  } catch (error) {\n    console.error('Failed to fetch user:', error);\n    return null;\n  }\n}`,
            description: "Foundation of async/await"
        },
        {
            name: "Parallel Execution",
            code: `// Run multiple async operations in parallel\nasync function loadDashboardData() {\n  const [user, posts, notifications] = await Promise.all([\n    fetch('/api/user'),\n    fetch('/api/posts'),\n    fetch('/api/notifications')\n  ]);\n  \n  return {\n    user: await user.json(),\n    posts: await posts.json(),\n    notifications: await notifications.json()\n  };\n}`,
            description: "Optimize loading time"
        },
        {
            name: "Error Recovery",
            code: `// Try multiple sources with fallbacks\nasync function fetchWithFallbacks(urls) {\n  for (const url of urls) {\n    try {\n      const response = await fetch(url);\n      return await response.json();\n    } catch (error) {\n      console.log(\`Failed: \${url}\`);\n      continue;\n    }\n  }\n  throw new Error('All sources failed');\n}`,
            description: "Resilient data fetching"
        },
        {
            name: "Async Queue",
            code: `// Process tasks with concurrency control\nclass AsyncQueue {\n  constructor(concurrency = 1) {\n    this.queue = [];\n    this.workers = [];\n    this.concurrency = concurrency;\n  }\n  \n  async add(task) {\n    return new Promise((resolve, reject) => {\n      this.queue.push({ task, resolve, reject });\n      this.process();\n    });\n  }\n  \n  async process() { /* ... */ }\n}`,
            description: "Rate-limited task processing"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson16" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 3: Advanced</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 16: Async/Await Deep Dive</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Async/Await Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Write cleaner, more readable asynchronous code with modern async/await patterns.
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
                                            <Layers className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Async/Await: The Modern Approach
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Async/await is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code, while maintaining all the benefits of non-blocking execution.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Zap className="w-4 h-4" /> Key Benefits
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span><strong>Readable</strong> like synchronous code</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span><strong>Error handling</strong> with try/catch</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <span><strong>Debugging</strong> with stack traces</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <Layers className="w-4 h-4" /> Patterns
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Sequential</strong> execution</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Parallel</strong> with Promise.all</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Error recovery</strong> patterns</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Evolution: Promises → Async/Await
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h3 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Promise Chain</h3>
                                            <pre className="text-sm font-mono text-slate-600 dark:text-slate-400">
                                                {`fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(\`/api/posts/\${user.id}\`))
  .then(posts => console.log(posts))
  .catch(error => console.error(error));`}
                                            </pre>
                                        </div>

                                        <div className="flex justify-center">
                                            <ArrowDown className="w-6 h-6 text-yellow-500" />
                                        </div>

                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">Async/Await Equivalent</h3>
                                            <pre className="text-sm font-mono text-green-800 dark:text-green-300">
                                                {`async function getUserPosts() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    const posts = await fetch(\`/api/posts/\${user.id}\`);
    console.log(await posts.json());
  } catch (error) {
    console.error(error);
  }
}`}
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
                                            <span className="font-mono text-xs text-slate-400">async-await-demo.js</span>
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

                                    {/* Async Execution Visualizer */}
                                    {asyncState.isRunning && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                                                <span className="text-xs font-semibold text-slate-400">Async Execution Flow</span>
                                            </div>

                                            {/* Steps Progress */}
                                            <div className="mb-3">
                                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                                    <span>Progress</span>
                                                    <span>{asyncState.currentStep + 1}/{asyncState.steps.length}</span>
                                                </div>
                                                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                                                        style={{ width: `${((asyncState.currentStep + 1) / asyncState.steps.length) * 100}%` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Current Step */}
                                            <div className="text-xs text-blue-300 mb-2">
                                                {asyncState.steps[asyncState.currentStep]}
                                            </div>

                                            {/* Parallel Operations */}
                                            {asyncState.parallelOps.length > 0 && (
                                                <div className="mt-2">
                                                    <div className="text-xs text-slate-500 mb-1">Parallel Operations:</div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {asyncState.parallelOps.map((op, idx) => (
                                                            <span key={idx} className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded animate-pulse">
                                                                {op}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
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
                                        Async/Await Concept Explorer
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
                                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Execution Flow</h4>
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
                                                                setAsyncState({
                                                                    isRunning: true,
                                                                    currentStep: 0,
                                                                    steps: [
                                                                        `Starting ${concept.name}...`,
                                                                        'Executing async operations...',
                                                                        'Processing results...',
                                                                        'Finalizing...'
                                                                    ],
                                                                    parallelOps: concept.name.includes('Parallel') ? ['Task 1', 'Task 2', 'Task 3'] : []
                                                                });

                                                                setTimeout(() => {
                                                                    setAsyncState(prev => ({ ...prev, isRunning: false }));
                                                                }, 3000);
                                                            }}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <PlayCircle className="w-4 h-4" />
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Async/Await Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                            onClick={() => setCode(`// Basic async function\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com');\n    return await response.json();\n  } catch (error) {\n    console.error('Error:', error);\n    return null;\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Async Function
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Parallel execution\nasync function loadAllData() {\n  const [data1, data2, data3] = await Promise.all([\n    fetch('/api/1'),\n    fetch('/api/2'),\n    fetch('/api/3')\n  ]);\n  return { data1, data2, data3 };\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Parallel Execution
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Sequential processing\nasync function processItems(items) {\n  const results = [];\n  for (const item of items) {\n    const result = await processItem(item);\n    results.push(result);\n  }\n  return results;\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Sequential Processing
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Error recovery\nasync function resilientFetch(urls) {\n  for (const url of urls) {\n    try {\n      const response = await fetch(url);\n      return await response.json();\n    } catch (error) {\n      console.log(\`Failed: \${url}\`);\n      continue;\n    }\n  }\n  throw new Error('All URLs failed');\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Error Recovery
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Async/Await Tips</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Always use try/catch for error handling</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Use Promise.all() for independent operations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Avoid await in loops when possible</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span>Consider fire-and-forget for non-critical ops</span>
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

                                    {/* Async Execution Status */}
                                    {asyncState.isRunning && (
                                        <div className="border-t border-slate-800 bg-slate-950 p-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Loader className="w-3 h-3 text-blue-400 animate-spin" />
                                                <span className="text-xs text-slate-400">Async Execution:</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                                                        style={{ width: `${((asyncState.currentStep + 1) / (asyncState.steps.length || 1)) * 100}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-slate-400">
                                                    {asyncState.currentStep + 1}/{asyncState.steps.length || 1}
                                                </span>
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
                                    Async/Await Execution Visualizer
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Execution Patterns
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Sequential vs Parallel</h4>
                                                <div className="space-y-3">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`async function sequential() {\n  console.time('sequential');\n  await delay(1000);\n  await delay(800);\n  await delay(600);\n  console.timeEnd('sequential');\n}\n\nasync function parallel() {\n  console.time('parallel');\n  await Promise.all([delay(1000), delay(800), delay(600)]);\n  console.timeEnd('parallel');\n}\n\nfunction delay(ms) { return new Promise(r => setTimeout(r, ms)); }`);
                                                            runCode();
                                                        }}
                                                        className="w-full p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                    >
                                                        <div className="text-sm font-medium">Compare execution times</div>
                                                        <div className="text-xs text-slate-500 mt-1">Sequential: ~2.4s vs Parallel: ~1s</div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Error Handling Flow</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`async function withErrors() {\n  try {\n    console.log('Step 1: Start');\n    await Promise.reject(new Error('Step 2 failed'));\n    console.log('Step 3: This never runs');\n  } catch (error) {\n    console.log('Caught error:', error.message);\n  } finally {\n    console.log('Step 4: Always runs');\n  }\n}`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">try/catch/finally execution flow</code>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Concurrent Processing</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`async function processWithConcurrency(items, concurrency = 2) {\n  const results = [];\n  for (let i = 0; i < items.length; i += concurrency) {\n    const batch = items.slice(i, i + concurrency);\n    const batchResults = await Promise.all(\n      batch.map(async item => {\n        await delay(500);\n        return \`Processed \${item}\`;\n      })\n    );\n    results.push(...batchResults);\n    console.log(\`Batch completed: \${batchResults}\`);\n  }\n  return results;\n}`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Batch processing with controlled concurrency</code>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Interactive Simulation
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <button
                                                    onClick={() => {
                                                        setAsyncState({
                                                            isRunning: true,
                                                            currentStep: 0,
                                                            steps: [
                                                                'Starting sequential execution...',
                                                                'Step 1: Fetching user data (1s)',
                                                                'Step 2: Processing user data (0.8s)',
                                                                'Step 3: Saving results (0.6s)',
                                                                'Sequential complete!'
                                                            ],
                                                            parallelOps: []
                                                        });
                                                    }}
                                                    className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                                >
                                                    <div className="font-bold text-blue-700 dark:text-blue-300">Sequential</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">One after another</div>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setAsyncState({
                                                            isRunning: true,
                                                            currentStep: 0,
                                                            steps: [
                                                                'Starting parallel execution...',
                                                                'Running all operations simultaneously',
                                                                'Waiting for all to complete',
                                                                'Processing results',
                                                                'Parallel complete!'
                                                            ],
                                                            parallelOps: ['API Call 1', 'API Call 2', 'API Call 3']
                                                        });
                                                    }}
                                                    className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                                >
                                                    <div className="font-bold text-green-700 dark:text-green-300">Parallel</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">All at once</div>
                                                </button>
                                            </div>

                                            {/* Live Execution Visualizer */}
                                            <div className="mt-4 p-3 bg-slate-900 rounded-lg">
                                                <div className="text-xs text-slate-400 mb-2">Live Execution</div>
                                                {asyncState.isRunning ? (
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                            <span className="text-xs text-green-300">{asyncState.steps[asyncState.currentStep]}</span>
                                                        </div>
                                                        {asyncState.parallelOps.length > 0 && (
                                                            <div className="ml-4 space-y-1">
                                                                {asyncState.parallelOps.map((op, idx) => (
                                                                    <div key={idx} className="flex items-center gap-2">
                                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                                                        <span className="text-xs text-blue-300">{op}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="text-xs text-slate-500">Click a pattern to start simulation</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Try Your Own Async Code</h4>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Write async/await code to visualize..."
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
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Async/Await Best Practices</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Always handle errors:</strong> Use try/catch
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Use Promise.all():</strong> For independent operations
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Avoid await in loops:</strong> When possible
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Consider cleanup:</strong> Use finally block
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson15" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Asynchronous JS</span>
                        </a>
                        <a href="/lesson17" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">ES6 Modules</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}