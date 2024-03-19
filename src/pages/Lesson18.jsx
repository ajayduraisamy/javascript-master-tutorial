import React, { useState } from 'react';
import {
    Users, Play, Terminal, Copy, RotateCcw,
    ChevronRight, ChevronLeft, Brain, Shield,
    Zap, Key, Lock, Unlock, Box, Layers,
    GitBranch, GitMerge, RefreshCw, Eye,
    Filter, Settings, Wrench, Package,
    Database, Cpu, Code, Lightbulb, Grid,
    ArrowRight, ArrowLeft, Home, Building,
    Factory, Crown, Award, Target, UserPlus
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson18() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === CLASSES & OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT ===

// JavaScript uses prototype-based OOP, but ES6 introduced class syntax
// Classes are syntactic sugar over JavaScript's existing prototype inheritance

// ========== BASIC CLASS SYNTAX ==========

// 1. Class Declaration
class Person {
    // Constructor method (called when creating new instance)
    constructor(name, age) {
        // Instance properties
        this.name = name;
        this.age = age;
        this.createdAt = new Date();
    }
    
    // Instance method (available on all instances)
    greet() {
        return \`Hello, my name is \${this.name} and I'm \${this.age} years old.\`;
    }
    
    // Getter (computed property)
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }
    
    // Setter (validated property assignment)
    set nickname(value) {
        if (value.length < 2) {
            throw new Error('Nickname must be at least 2 characters');
        }
        this._nickname = value;
    }
    
    get nickname() {
        return this._nickname || this.name;
    }
    
    // Static method (called on class, not instance)
    static compareAges(person1, person2) {
        return person1.age - person2.age;
    }
    
    // Static property
    static species = 'Homo sapiens';
}

// Creating instances
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

console.log(alice.greet()); // "Hello, my name is Alice..."
console.log(bob.birthYear); // Calculated property
console.log(Person.species); // Static property
console.log(Person.compareAges(alice, bob)); // Static method: 5

// ========== INHERITANCE ==========

// 2. Class Inheritance (extends)
class Employee extends Person {
    constructor(name, age, position, salary) {
        // Call parent constructor with super()
        super(name, age);
        
        this.position = position;
        this.salary = salary;
        this.employeeId = Employee.generateId();
    }
    
    // Override parent method
    greet() {
        return \`\${super.greet()} I work as a \${this.position}.\`;
    }
    
    // New method specific to Employee
    work() {
        return \`\${this.name} is working as a \${this.position}\`;
    }
    
    // Static method in child class
    static generateId() {
        return 'EMP_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Private field (ES2022 - starts with #)
    #performanceScore = 0;
    
    // Method to access private field
    setPerformance(score) {
        if (score >= 0 && score <= 100) {
            this.#performanceScore = score;
        }
    }
    
    getPerformance() {
        return this.#performanceScore;
    }
}

const manager = new Employee('Carol', 35, 'Engineering Manager', 120000);
console.log(manager.greet()); // Includes parent greeting
console.log(manager.work()); // Employee-specific method
console.log(manager.employeeId); // Generated ID

// ========== ADVANCED CLASS PATTERNS ==========

// 3. Abstract Base Class (pattern)
class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error('Shape is abstract and cannot be instantiated');
        }
        this.color = color;
    }
    
    // Abstract method (must be implemented by child)
    area() {
        throw new Error('Method "area()" must be implemented');
    }
    
    // Abstract method
    perimeter() {
        throw new Error('Method "perimeter()" must be implemented');
    }
    
    describe() {
        return \`A \${this.color} shape with area \${this.area()} and perimeter \${this.perimeter()}\`;
    }
}

// Concrete implementation
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const redCircle = new Circle('red', 5);
const blueRect = new Rectangle('blue', 4, 6);

console.log(redCircle.describe());
console.log(blueRect.describe());

// ========== MIXINS (MULTIPLE INHERITANCE PATTERN) ==========

// 4. Mixins - Composition over Inheritance
const CanSwim = (Base) => class extends Base {
    swim() {
        return \`\${this.name} is swimming!\`;
    }
};

const CanFly = (Base) => class extends Base {
    fly() {
        return \`\${this.name} is flying!\`;
    }
};

const CanWalk = (Base) => class extends Base {
    walk() {
        return \`\${this.name} is walking!\`;
    }
};

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return \`\${this.name} is eating.\`;
    }
}

// Create specific animals by composing mixins
class Duck extends CanSwim(CanFly(CanWalk(Animal))) {
    quack() {
        return \`\${this.name} says: Quack!\`;
    }
}

class Fish extends CanSwim(Animal) {
    // Fish can only swim
}

const donald = new Duck('Donald');
console.log(donald.swim());
console.log(donald.fly());
console.log(donald.walk());
console.log(donald.quack());
console.log(donald.eat());

// ========== REAL-WORLD EXAMPLE: E-COMMERCE SYSTEM ==========

// 5. E-commerce Domain Model
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = true;
    }
    
    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error('Discount must be between 0 and 100');
        }
        this.price *= (1 - percent / 100);
        return this.price;
    }
    
    toString() {
        return \`\${this.name} - $\${this.price.toFixed(2)} (\${this.category})\`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountCode = null;
    }
    
    addItem(product, quantity = 1) {
        const existing = this.items.find(item => item.product.id === product.id);
        
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    
    getTotal() {
        let total = this.items.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
        
        // Apply discount if any
        if (this.discountCode) {
            total *= (1 - this.discountCode.discountPercent / 100);
        }
        
        return total;
    }
    
    applyDiscount(code) {
        // In real app, would validate with server
        this.discountCode = {
            code,
            discountPercent: 10
        };
    }
    
    checkout() {
        if (this.items.length === 0) {
            throw new Error('Cannot checkout empty cart');
        }
        
        const order = new Order(this.items, this.getTotal());
        this.items = []; // Clear cart
        return order;
    }
}

class Order {
    constructor(items, total) {
        this.id = 'ORD_' + Date.now();
        this.items = items;
        this.total = total;
        this.status = 'pending';
        this.createdAt = new Date();
    }
    
    processPayment() {
        // Simulate payment processing
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.2; // 80% success rate
                if (success) {
                    this.status = 'paid';
                    this.paidAt = new Date();
                    resolve({ success: true, orderId: this.id });
                } else {
                    reject(new Error('Payment failed'));
                }
            }, 1000);
        });
    }
    
    ship() {
        if (this.status !== 'paid') {
            throw new Error('Order must be paid before shipping');
        }
        this.status = 'shipped';
        this.shippedAt = new Date();
    }
    
    getSummary() {
        return {
            orderId: this.id,
            total: this.total,
            status: this.status,
            itemCount: this.items.reduce((sum, item) => sum + item.quantity, 0),
            createdAt: this.createdAt
        };
    }
}

// Usage example
const laptop = new Product(1, 'Laptop', 999.99, 'Electronics');
const mouse = new Product(2, 'Mouse', 29.99, 'Electronics');

const cart = new ShoppingCart();
cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.applyDiscount('SAVE10');

console.log('Cart total:', cart.getTotal().toFixed(2));

try {
    const order = cart.checkout();
    console.log('Order created:', order.getSummary());
    
    // Process payment
    order.processPayment()
        .then(result => {
            console.log('Payment successful:', result);
            order.ship();
            console.log('Order shipped:', order.getSummary());
        })
        .catch(error => {
            console.error('Payment failed:', error.message);
        });
} catch (error) {
    console.error('Checkout error:', error.message);
}

// ========== DESIGN PATTERNS WITH CLASSES ==========

// 6. Singleton Pattern
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        
        this.logs = [];
        Logger.instance = this;
    }
    
    log(message) {
        const entry = {
            timestamp: new Date(),
            message
        };
        this.logs.push(entry);
        console.log(\`[\${entry.timestamp.toISOString()}] \${message}\`);
    }
    
    getLogs() {
        return [...this.logs]; // Return copy
    }
    
    clear() {
        this.logs = [];
    }
}

// Both instances refer to same object
const logger1 = new Logger();
const logger2 = new Logger();
console.log('Same instance?', logger1 === logger2); // true

// 7. Factory Pattern
class VehicleFactory {
    static createVehicle(type, options) {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car(options);
            case 'truck':
                return new Truck(options);
            case 'motorcycle':
                return new Motorcycle(options);
            default:
                throw new Error(\`Unknown vehicle type: \${type}\`);
        }
    }
}

class Car {
    constructor({ make, model, year }) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = 'car';
    }
    
    drive() {
        return \`Driving \${this.year} \${this.make} \${this.model}\`;
    }
}

class Truck {
    constructor({ make, model, year, capacity }) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.capacity = capacity;
        this.type = 'truck';
    }
    
    haul() {
        return \`Hauling with \${this.make} \${this.model} (capacity: \${this.capacity} tons)\`;
    }
}

class Motorcycle {
    constructor({ make, model, year }) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = 'motorcycle';
    }
    
    ride() {
        return \`Riding \${this.make} \${this.model}\`;
    }
}

// Factory usage
const myCar = VehicleFactory.createVehicle('car', {
    make: 'Toyota',
    model: 'Camry',
    year: 2023
});

const myTruck = VehicleFactory.createVehicle('truck', {
    make: 'Ford',
    model: 'F-150',
    year: 2022,
    capacity: 3
});

console.log(myCar.drive());
console.log(myTruck.haul());

// ========== PRIVATE CLASS FEATURES (ES2022) ==========

// 8. Modern Private Fields and Methods
class BankAccount {
    // Private fields (start with #)
    #balance = 0;
    #transactionHistory = [];
    
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = this.#generateAccountNumber();
        
        if (initialBalance > 0) {
            this.deposit(initialBalance);
        }
    }
    
    // Private method
    #generateAccountNumber() {
        return 'ACC_' + Math.random().toString(36).substr(2, 10).toUpperCase();
    }
    
    // Private method
    #recordTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            balance: this.#balance,
            timestamp: new Date()
        });
    }
    
    // Public methods
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        
        this.#balance += amount;
        this.#recordTransaction('DEPOSIT', amount);
        return this.#balance;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        
        this.#balance -= amount;
        this.#recordTransaction('WITHDRAWAL', amount);
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    getTransactionHistory() {
        return [...this.#transactionHistory]; // Return copy
    }
    
    // Static private field
    static #bankCode = 'JSBANK';
    
    static getBankCode() {
        return BankAccount.#bankCode;
    }
}

// Usage
const account = new BankAccount('John Doe', 1000);
account.deposit(500);
account.withdraw(200);

console.log('Balance:', account.getBalance());
console.log('Bank Code:', BankAccount.getBankCode());

// ========== CLASS VS PROTOTYPE ==========

// 9. Under the hood: Prototype-based inheritance
function OldWayPerson(name, age) {
    this.name = name;
    this.age = age;
}

OldWayPerson.prototype.greet = function() {
    return \`Hello, I'm \${this.name}\`;
};

OldWayPerson.species = 'Homo sapiens';

const oldPerson = new OldWayPerson('Old Bob', 50);
console.log('Old way:', oldPerson.greet());
console.log('Same species:', OldWayPerson.species);

// Classes are syntactic sugar for this pattern
console.log('Class is function?', typeof Person); // function
console.log('Person prototype:', Person.prototype);
console.log('alice instanceof Person:', alice instanceof Person);

console.log('=== OOP Examples Complete ===');
console.log('Try creating your own classes in the playground!');`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [classHierarchy, setClassHierarchy] = useState({
        nodes: [
            { id: 'person', label: 'Person', type: 'base', methods: ['greet()', 'birthYear'] },
            { id: 'employee', label: 'Employee', type: 'inherited', methods: ['work()'] },
            { id: 'manager', label: 'Manager', type: 'instance', methods: ['manageTeam()'] },
            { id: 'shape', label: 'Shape', type: 'abstract', methods: ['area()', 'perimeter()'] },
            { id: 'circle', label: 'Circle', type: 'concrete', methods: ['area()', 'perimeter()'] }
        ],
        edges: [
            { from: 'employee', to: 'person' },
            { from: 'manager', to: 'employee' },
            { from: 'circle', to: 'shape' }
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
            });

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
            category: "Class Fundamentals",
            concepts: [
                {
                    name: "Class Declaration",
                    icon: <Box className="w-4 h-4 text-blue-500" />,
                    description: "Blueprint for creating objects with shared properties and methods",
                    syntax: "class ClassName { constructor() { } method() { } }",
                    example: "class Person { constructor(name) { this.name = name; } }",
                    useCase: "Creating multiple similar objects with shared behavior",
                    visual: "Class → new Instance() → Object with properties/methods"
                },
                {
                    name: "Constructor",
                    icon: <Factory className="w-4 h-4 text-green-500" />,
                    description: "Special method called when creating new instance",
                    syntax: "constructor(params) { this.property = value; }",
                    example: "constructor(name, age) { this.name = name; this.age = age; }",

