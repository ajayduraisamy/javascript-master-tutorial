import React, { useState } from 'react';
import {
    Eye, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Lock, Unlock,
    Box, Layers, Filter, Zap, RefreshCw,
    Brain, Code, Lightbulb, Grid, Cpu,
    Database, Settings, Wrench, Package,
    ArrowRight, ArrowLeft, Home, Building,
    Factory, Crown, Award, Target, UserPlus,
    Shield, Key, Timer, EyeOff, Eye as EyeIcon
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson19() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === CLOSURES: MASTERING LEXICAL SCOPING ===

// A closure is a function that remembers its outer variables
// Functions have access to variables from their creation context, even after that context is gone

// ========== BASIC CLOSURES ==========

// 1. Simple Closure Example
function outerFunction() {
    const outerVariable = 'I am from outer scope!';
    let count = 0;
    
    // Inner function forms a closure
    return function innerFunction() {
        count++;
        return \`\${outerVariable} Accessed \${count} times.\`;
    };
}

const closureExample = outerFunction();
console.log(closureExample()); // "I am from outer scope! Accessed 1 times."
console.log(closureExample()); // "I am from outer scope! Accessed 2 times."
console.log(closureExample()); // "I am from outer scope! Accessed 3 times."

// outerFunction has finished executing, but innerFunction remembers 'outerVariable' and 'count'

// 2. Multiple Closures Sharing State
function createCounter() {
    let privateCount = 0;
    
    return {
        increment: function() {
            privateCount++;
            return privateCount;
        },
        decrement: function() {
            privateCount--;
            return privateCount;
        },
        getCount: function() {
            return privateCount;
        },
        reset: function() {
            privateCount = 0;
            return privateCount;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('Counter 1:', counter1.increment()); // 1
console.log('Counter 1:', counter1.increment()); // 2
console.log('Counter 2:', counter2.increment()); // 1 (independent)
console.log('Counter 1:', counter1.getCount()); // 2
console.log('Counter 2:', counter2.getCount()); // 1

// Each counter has its own private state

// ========== PRACTICAL CLOSURE PATTERNS ==========

// 3. Data Privacy / Encapsulation
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return \`Deposited $\${amount}. New balance: $\${balance}\`;
            }
            return 'Deposit amount must be positive';
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return \`Withdrew $\${amount}. New balance: $\${balance}\`;
            }
            return 'Insufficient funds or invalid amount';
        },
        
        getBalance: function() {
            return \`Current balance: $\${balance}\`;
        },
        
        // No direct access to 'balance' variable!
    };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500)); // "Deposited $500. New balance: $1500"
console.log(myAccount.withdraw(200)); // "Withdrew $200. New balance: $1300"
console.log(myAccount.getBalance()); // "Current balance: $1300"

// Try to access balance directly (won't work)
console.log(myAccount.balance); // undefined

// 4. Function Factories
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log('Double 10:', double(10)); // 20
console.log('Triple 10:', triple(10)); // 30
console.log('Quadruple 10:', quadruple(10)); // 40

// 5. Memoization (Performance Optimization)
function createMemoizedFunction(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key] !== undefined) {
            console.log('Returning cached result for:', args);
            return cache[key];
        }
        
        console.log('Calculating new result for:', args);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Example: Expensive calculation
function expensiveCalculation(n) {
    console.log('Performing expensive calculation...');
    // Simulate expensive operation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result = Math.random();
    }
    return n * n;
}

const memoizedCalc = createMemoizedFunction(expensiveCalculation);

console.log(memoizedCalc(5)); // Calculates
console.log(memoizedCalc(5)); // Returns cached
console.log(memoizedCalc(10)); // Calculates
console.log(memoizedCalc(5)); // Returns cached

// ========== ADVANCED CLOSURE PATTERNS ==========

// 6. Module Pattern (Before ES6 Modules)
const UserModule = (function() {
    // Private variables
    let users = [];
    let nextId = 1;
    
    // Private function
    function generateId() {
        return nextId++;
    }
    
    // Public API
    return {
        addUser: function(name, email) {
            const user = {
                id: generateId(),
                name,
                email,
                createdAt: new Date()
            };
            users.push(user);
            return user;
        },
        
        getUser: function(id) {
            return users.find(user => user.id === id);
        },
        
        getAllUsers: function() {
            return [...users]; // Return copy
        },
        
        deleteUser: function(id) {
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        },
        
        getUserCount: function() {
            return users.length;
        },
        
        // No direct access to 'users' or 'nextId'
    };
})();

// Usage
UserModule.addUser('John Doe', 'john@example.com');
UserModule.addUser('Jane Smith', 'jane@example.com');
console.log('Total users:', UserModule.getUserCount()); // 2
console.log('All users:', UserModule.getAllUsers());

// 7. Currying (Functional Programming)
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Example function to curry
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiplyThreeNumbers);

console.log('Curried result 1:', curriedMultiply(2)(3)(4)); // 24
console.log('Curried result 2:', curriedMultiply(2, 3)(4)); // 24
console.log('Curried result 3:', curriedMultiply(2)(3, 4)); // 24

// Practical currying example
function createLogger(prefix) {
    return function(message) {
        console.log(\`[\${prefix}] \${new Date().toISOString()}: \${message}\`);
    };
}

const errorLogger = createLogger('ERROR');
const infoLogger = createLogger('INFO');
const debugLogger = createLogger('DEBUG');

errorLogger('Something went wrong!');
infoLogger('User logged in');
debugLogger('Processing data...');

// 8. Partial Application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn.apply(this, presetArgs.concat(laterArgs));
    };
}

function sendEmail(from, to, subject, body) {
    return \`Email sent from \${from} to \${to} with subject: "\${subject}"\`;
}

// Create specialized functions
const sendFromAdmin = partial(sendEmail, 'admin@company.com');
const sendWelcomeEmail = partial(sendFromAdmin, 'newuser@example.com', 'Welcome!');

console.log(sendWelcomeEmail('Welcome to our platform...'));

// ========== REAL-WORLD CLOSURE EXAMPLES ==========

// 9. Event Handlers with Closures
function setupButtonHandlers() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((button, index) => {
        // Each handler gets its own closure with 'index'
        button.addEventListener('click', function() {
            console.log(\`Button \${index} clicked: \${this.textContent}\`);
            // 'this' refers to the button element
            // 'index' is captured from the loop
        });
    });
}

// Simulated buttons for demo
const buttons = [
    { textContent: 'Save', click: () => {} },
    { textContent: 'Cancel', click: () => {} },
    { textContent: 'Delete', click: () => {} }
];

buttons.forEach((button, index) => {
    const handler = function() {
        console.log(\`Button \${index} clicked: \${this.textContent}\`);
    }.bind(button);
    
    // In real DOM: button.addEventListener('click', handler);
});

// 10. Timeout/Interval with Closures
function createTimer(initialSeconds) {
    let seconds = initialSeconds;
    let timerId = null;
    
    return {
        start: function() {
            if (timerId) return; // Already running
            
            timerId = setInterval(() => {
                seconds--;
                console.log(\`Time remaining: \${seconds}s\`);
                
                if (seconds <= 0) {
                    this.stop();
                    console.log('Timer complete!');
                }
            }, 1000);
        },
        
        stop: function() {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
        },
        
        reset: function(newSeconds) {
            this.stop();
            seconds = newSeconds || initialSeconds;
        },
        
        getTime: function() {
            return seconds;
        }
    };
}

const myTimer = createTimer(5);
// myTimer.start(); // Uncomment to run

// 11. Authentication State Management
function createAuthManager() {
    let currentUser = null;
    let token = null;
    let refreshToken = null;
    
    return {
        login: function(email, password) {
            // Simulate API call
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email && password) {
                        currentUser = { email, name: 'John Doe' };
                        token = 'fake-jwt-token';
                        refreshToken = 'fake-refresh-token';
                        
                        // Store in localStorage
                        localStorage.setItem('auth_token', token);
                        localStorage.setItem('user', JSON.stringify(currentUser));
                        
                        resolve(currentUser);
                    } else {
                        reject(new Error('Invalid credentials'));
                    }
                }, 100

