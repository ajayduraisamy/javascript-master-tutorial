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
            };

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
                    useCase: "Initializing instance properties when object is created",
                    visual: "new Class() → constructor() → Initialized instance"
                },
                {
                    name: "Methods & Properties",
                    icon: <Wrench className="w-4 h-4 text-purple-500" />,
                    description: "Functions and data attached to class instances",
                    syntax: "method() { } get property() { } set property(v) { }",
                    example: "greet() { return 'Hello'; } get age() { return 2024 - this.birthYear; }",
                    useCase: "Defining object behavior and computed properties",
                    visual: "Instance → Properties (data) + Methods (behavior)"
                }
            ]
        },
        {
            category: "Inheritance & Polymorphism",
            concepts: [
                {
                    name: "Class Inheritance",
                    icon: <GitBranch className="w-4 h-4 text-red-500" />,
                    description: "Creating new classes based on existing ones",
                    syntax: "class Child extends Parent { }",
                    example: "class Employee extends Person { constructor(name, title) { super(name); this.title = title; } }",
                    useCase: "Creating specialized versions of general classes",
                    visual: "Parent Class → extends → Child Class → Inherits properties/methods"
                },
                {
                    name: "Super Keyword",
                    icon: <Crown className="w-4 h-4 text-yellow-500" />,
                    description: "Calls parent class constructor or methods",
                    syntax: "super(params) or super.method()",
                    example: "super(name); // call parent constructor or super.greet() // call parent method",
                    useCase: "Accessing parent class functionality from child class",
                    visual: "Child Class → super() → Parent Class constructor/methods"
                },
                {
                    name: "Method Overriding",
                    icon: <RefreshCw className="w-4 h-4 text-teal-500" />,
                    description: "Child class providing its own implementation of parent method",
                    syntax: "method() { /* new implementation */ }",
                    example: "Child class redefines parent's calculate() method",
                    useCase: "Customizing inherited behavior for specific needs",
                    visual: "Parent.method() → Child overrides → Child.method() (different behavior)"
                },
                {
                    name: "Polymorphism",
                    icon: <Layers className="w-4 h-4 text-pink-500" />,
                    description: "Objects of different types treated as same type",
                    syntax: "Different classes with same method signatures",
                    example: "Shape.area() works for Circle, Rectangle, Triangle",
                    useCase: "Writing flexible code that works with multiple object types",
                    visual: "Interface → Multiple Implementations → Same method, different behavior"
                }
            ]
        },
        {
            category: "Advanced Features",
            concepts: [
                {
                    name: "Static Members",
                    icon: <Database className="w-4 h-4 text-indigo-500" />,
                    description: "Properties/methods belonging to class itself, not instances",
                    syntax: "static property = value; static method() { }",
                    example: "static PI = 3.14159; static createDefault() { return new Class(); }",
                    useCase: "Utility functions, constants, factory methods",
                    visual: "Class.staticMethod() → Called on class, not instance"
                },
                {
                    name: "Private Fields/Methods",
                    icon: <Lock className="w-4 h-4 text-gray-600" />,
                    description: "Class members accessible only within class (ES2022)",
                    syntax: "#privateField; #privateMethod() { }",
                    example: "#balance = 0; #validateAmount(amount) { }",
                    useCase: "Encapsulation, hiding implementation details",
                    visual: "Class → #privateField → Only accessible inside class"
                },
                {
                    name: "Getters & Setters",
                    icon: <Key className="w-4 h-4 text-orange-500" />,
                    description: "Special methods for getting/setting property values",
                    syntax: "get property() { } set property(value) { }",
                    example: "get fullName() { return first + ' ' + last; }",
                    useCase: "Computed properties, validation, encapsulation",
                    visual: "obj.property → get property() → Computed value"
                },
                {
                    name: "Abstract Classes",
                    icon: <Shield className="w-4 h-4 text-blue-600" />,
                    description: "Classes that cannot be instantiated, only extended",
                    syntax: "Throw error if new.target === AbstractClass",
                    example: "class Shape { area() { throw Error('Implement'); } }",
                    useCase: "Defining interfaces/contracts for subclasses",
                    visual: "Abstract Class → Must extend → Concrete Class → Can instantiate"
                }
            ]
        },
        {
            category: "Design Patterns",
            concepts: [
                {
                    name: "Singleton Pattern",
                    icon: <Target className="w-4 h-4 text-green-600" />,
                    description: "Ensures class has only one instance globally",
                    syntax: "Return existing instance if already created",
                    example: "Logger, Configuration, Database connection",
                    useCase: "When exactly one instance needed across application",
                    visual: "new Class() → Check instance → Return existing or create new"
                },
                {
                    name: "Factory Pattern",
                    icon: <Factory className="w-4 h-4 text-red-600" />,
                    description: "Creates objects without exposing instantiation logic",
                    syntax: "static create(type, options) { return new Class(options); }",
                    example: "VehicleFactory.create('car', options)",
                    useCase: "Creating different types of related objects",
                    visual: "Factory → create(type) → Returns appropriate object type"
                },
                {
                    name: "Mixin Pattern",
                    icon: <GitMerge className="w-4 h-4 text-purple-600" />,
                    description: "Adding functionality to classes through composition",
                    syntax: "const Mixin = Base => class extends Base { }",
                    example: "CanFly, CanSwim, CanWalk mixins for Animal",
                    useCase: "Multiple inheritance simulation, code reuse",
                    visual: "Base Class + Mixin1 + Mixin2 → Enhanced Class"
                },
                {
                    name: "Builder Pattern",
                    icon: <Building className="w-4 h-4 text-yellow-600" />,
                    description: "Constructs complex objects step by step",
                    syntax: "Fluent interface with chainable methods",
                    example: "new PizzaBuilder().addCheese().addPepperoni().build()",
                    useCase: "Creating objects with many optional parameters",
                    visual: "Builder → setA() → setB() → setC() → build() → Complex object"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Class Basics",
            description: "Create classes with constructors, methods, and inheritance",
            difficulty: "Beginner",
            starterCode: `// EXERCISE 1: Basic Class
// Create a Book class with:
// 1. Properties: title, author, year, isRead (default false)
// 2. Constructor to initialize properties
// 3. Method: read() that marks book as read
// 4. Method: getAge() returns how old the book is
// 5. Getter: description returns formatted string

// EXERCISE 2: Inheritance
// Create EBook class that extends Book:
// 1. Add properties: fileSize, format
// 2. Override description getter to include format
// 3. Add method: getFileSizeInMB() returns size in MB

// EXERCISE 3: Static Methods
// Add to Book class:
// 1. Static method: compareYears(book1, book2)
// 2. Static property: genres array
// 3. Static method: createFromObject(data) factory`,
            solution: `// SOLUTION 1: Basic Class
class Book {
    constructor(title, author, year, isRead = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRead = isRead;
    }
    
    read() {
        this.isRead = true;
        return \`You read "\${this.title}"\`;
    }
    
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    
    get description() {
        return \`"\${this.title}" by \${this.author} (\${this.year}) - \${this.isRead ? 'Read' : 'Unread'}\`;
    }
    
    // Static members
    static genres = ['Fiction', 'Non-fiction', 'Science', 'Fantasy'];
    
    static compareYears(book1, book2) {
        return book1.year - book2.year;
    }
    
    static createFromObject(data) {
        return new Book(data.title, data.author, data.year, data.isRead || false);
    }
}

// SOLUTION 2: Inheritance
class EBook extends Book {
    constructor(title, author, year, fileSize, format = 'PDF', isRead = false) {
        super(title, author, year, isRead);
        this.fileSize = fileSize; // in bytes
        this.format = format;
    }
    
    get description() {
        return \`\${super.description} [\${this.format} - \${this.getFileSizeInMB()}MB]\`;
    }
    
    getFileSizeInMB() {
        return (this.fileSize / (1024 * 1024)).toFixed(2);
    }
    
    // Additional method
    canOpenOnDevice(device) {
        const supportedFormats = {
            'Kindle': ['MOBI', 'AZW'],
            'iPad': ['PDF', 'EPUB'],
            'Android': ['PDF', 'EPUB', 'MOBI']
        };
        return supportedFormats[device]?.includes(this.format) || false;
    }
}

// Usage examples
const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('Brave New World', 'Aldous Huxley', 1932);

console.log(book1.description);
console.log(book1.read());
console.log('Book age:', book1.getAge());

const ebook = new EBook('JS Guide', 'John Doe', 2023, 5242880, 'PDF');
console.log(ebook.description);
console.log('File size:', ebook.getFileSizeInMB(), 'MB');
console.log('Can open on Kindle?', ebook.canOpenOnDevice('Kindle'));

// Static usage
console.log('Genres:', Book.genres);
console.log('Year difference:', Book.compareYears(book1, book2));

const fromData = Book.createFromObject({
    title: 'Test Book',
    author: 'Test Author',
    year: 2020
});
console.log('From factory:', fromData.description);`,
            hint: "Remember to call super() in child class constructor. Use getters for computed properties. Static methods are called on the class, not instances."
        },
        {
            title: "Advanced Class Patterns",
            description: "Implement design patterns and advanced OOP concepts",
            difficulty: "Intermediate",
            starterCode: `// EXERCISE 1: Singleton Pattern
// Create a SettingsManager singleton:
// 1. Stores application settings
// 2. Allows getting/setting values
// 3. Persists to localStorage
// 4. Only one instance exists

// EXERCISE 2: Factory Pattern
// Create a NotificationFactory:
// 1. Creates different notification types (Email, SMS, Push)
// 2. Each type has send() method
// 3. Factory handles creation based on type
// 4. All notifications share common interface

// EXERCISE 3: Mixin Pattern
// Create mixins for different abilities:
// 1. CanSave - adds save() method
// 2. CanDelete - adds delete() method  
// 3. CanValidate - adds validate() method
// 4. Create a Document class using these mixins`,
            solution: `// SOLUTION 1: Singleton Pattern
class SettingsManager {
    constructor() {
        if (SettingsManager.instance) {
            return SettingsManager.instance;
        }
        
        // Load from localStorage
        const saved = localStorage.getItem('appSettings');
        this.settings = saved ? JSON.parse(saved) : {
            theme: 'light',
            language: 'en',
            notifications: true,
            fontSize: 'medium'
        };
        
        SettingsManager.instance = this;
    }
    
    get(key) {
        return this.settings[key];
    }
    
    set(key, value) {
        this.settings[key] = value;
        this.save();
    }
    
    setAll(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        this.save();
    }
    
    getAll() {
        return { ...this.settings }; // Return copy
    }
    
    reset() {
        this.settings = {
            theme: 'light',
            language: 'en',
            notifications: true,
            fontSize: 'medium'
        };
        this.save();
    }
    
    save() {
        localStorage.setItem('appSettings', JSON.stringify(this.settings));
    }
}

// Usage - both refer to same instance
const settings1 = new SettingsManager();
const settings2 = new SettingsManager();
console.log('Same instance?', settings1 === settings2); // true

// SOLUTION 2: Factory Pattern
class NotificationFactory {
    static create(type, options) {
        switch (type.toLowerCase()) {
            case 'email':
                return new EmailNotification(options);
            case 'sms':
                return new SMSNotification(options);
            case 'push':
                return new PushNotification(options);
            default:
                throw new Error(\`Unknown notification type: \${type}\`);
        }
    }
}

class Notification {
    constructor(options) {
        this.recipient = options.recipient;
        this.message = options.message;
        this.timestamp = new Date();
    }
    
    // Abstract method
    send() {
        throw new Error('send() must be implemented');
    }
}

class EmailNotification extends Notification {
    constructor(options) {
        super(options);
        this.subject = options.subject;
        this.from = options.from || 'noreply@example.com';
    }
    
    send() {
        // Simulate email sending
        console.log(\`Sending email to \${this.recipient}: "\${this.subject}"\`);
        return { success: true, type: 'email', id: 'EMAIL_' + Date.now() };
    }
}

class SMSNotification extends Notification {
    constructor(options) {
        super(options);
        this.phone = options.recipient;
    }
    
    send() {
        // Simulate SMS sending
        console.log(\`Sending SMS to \${this.phone}: "\${this.message.substring(0, 20)}..."\`);
        return { success: true, type: 'sms', id: 'SMS_' + Date.now() };
    }
}

class PushNotification extends Notification {
    constructor(options) {
        super(options);
        this.deviceToken = options.deviceToken;
        this.title = options.title || 'Notification';
    }
    
    send() {
        // Simulate push notification
        console.log(\`Sending push to device \${this.deviceToken}: "\${this.title}"\`);
        return { success: true, type: 'push', id: 'PUSH_' + Date.now() };
    }
}

// Factory usage
const email = NotificationFactory.create('email', {
    recipient: 'user@example.com',
    subject: 'Welcome!',
    message: 'Welcome to our service!'
});

const sms = NotificationFactory.create('sms', {
    recipient: '+1234567890',
    message: 'Your verification code is 123456'
});

console.log(email.send());
console.log(sms.send());

// SOLUTION 3: Mixin Pattern
// Mixin definitions
const CanSave = Base => class extends Base {
    save() {
        console.log(\`Saving \${this.constructor.name}...\`);
        this.savedAt = new Date();
        return true;
    }
};

const CanDelete = Base => class extends Base {
    delete() {
        console.log(\`Deleting \${this.constructor.name}...\`);
        this.deletedAt = new Date();
        return true;
    }
};

const CanValidate = Base => class extends Base {
    validate() {
        console.log(\`Validating \${this.constructor.name}...\`);
        return Object.keys(this).length > 0; // Simple validation
    }
};

// Base class
class Document {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
    
    preview() {
        return \`\${this.title}: \${this.content.substring(0, 50)}...\`;
    }
}

// Enhanced class using mixins
class EnhancedDocument extends CanSave(CanDelete(CanValidate(Document))) {
    constructor(title, content, author) {
        super(title, content);
        this.author = author;
    }
    
    // Additional method
    export(format = 'json') {
        const data = {
            title: this.title,
            content: this.content,
            author: this.author,
            createdAt: this.createdAt
        };
        
        if (format === 'json') return JSON.stringify(data, null, 2);
        if (format === 'text') return \`Title: \${data.title}\\nAuthor: \${data.author}\\n\\n\${data.content}\`;
        throw new Error(\`Unsupported format: \${format}\`);
    }
}

// Usage
const doc = new EnhancedDocument('My Doc', 'This is the content...', 'John Doe');
console.log(doc.preview());
console.log('Valid?', doc.validate());
console.log('Save result:', doc.save());
console.log('Export:', doc.export('json'));`,
            hint: "For singletons, check if instance already exists. For factories, use static methods. For mixins, use function composition (Base => class extends Base)."
        },
        {
            title: "Real-world OOP System",
            description: "Design complete OOP system for e-commerce or similar domain",
            difficulty: "Advanced",
            starterCode: `// DESIGN A BANKING SYSTEM WITH OOP

// Requirements:
// 1. Account hierarchy (Savings, Checking, Investment)
// 2. Transaction tracking
// 3. Interest calculation (for savings/investment)
// 4. Overdraft protection
// 5. Transfer between accounts
// 6. Account statements

// TASKS:
// 1. Create base Account class with common functionality
// 2. Implement different account types with specific rules
// 3. Add transaction system
// 4. Implement interest calculation
// 5. Add transfer functionality
// 6. Create Bank class to manage accounts`,
            solution: `// SOLUTION: Complete Banking System

// Base Transaction class
class Transaction {
    constructor(type, amount, description) {
        this.id = 'TXN_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        this.type = type; // 'deposit', 'withdrawal', 'transfer', 'interest'
        this.amount = amount;
        this.description = description;
        this.timestamp = new Date();
        this.status = 'completed';
    }
    
    toString() {
        return \`[\${this.timestamp.toLocaleDateString()}] \${this.type.toUpperCase()}: $\${this.amount.toFixed(2)} - \${this.description}\`;
    }
}

// Base Account class
class Account {
    constructor(accountHolder, accountNumber, initialBalance = 0) {
        if (new.target === Account) {
            throw new Error('Account is abstract and cannot be instantiated');
        }
        
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.transactions = [];
        this.openedDate = new Date();
        this.isActive = true;
        
        if (initialBalance > 0) {
            this.recordTransaction('deposit', initialBalance, 'Initial deposit');
        }
    }
    
    // Private field (ES2022)
    #balance = 0;
    
    // Protected method (convention with _)
    _canWithdraw(amount) {
        return this.#balance >= amount;
    }
    
    get balance() {
        return this.#balance;
    }
    
    // Abstract method (must be implemented by subclasses)
    calculateInterest() {
        throw new Error('calculateInterest() must be implemented');
    }
    
    deposit(amount, description = 'Deposit') {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        
        this.#balance += amount;
        this.recordTransaction('deposit', amount, description);
        return this.#balance;
    }
    
    withdraw(amount, description = 'Withdrawal') {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        
        if (!this._canWithdraw(amount)) {
            throw new Error('Insufficient funds');
        }
        
        this.#balance -= amount;
        this.recordTransaction('withdrawal', amount, description);
        return this.#balance;
    }
    
    recordTransaction(type, amount, description) {
        const transaction = new Transaction(type, amount, description);
        this.transactions.push(transaction);
        return transaction;
    }
    
    getStatement(startDate, endDate = new Date()) {
        const filtered = this.transactions.filter(t => 
            t.timestamp >= startDate && t.timestamp <= endDate
        );
        
        const statement = {
            accountNumber: this.accountNumber,
            accountHolder: this.accountHolder,
            period: { startDate, endDate },
            openingBalance: this.getBalanceAtDate(startDate),
            closingBalance: this.balance,
            transactions: filtered,
            summary: {
                totalDeposits: filtered.filter(t => t.type === 'deposit').reduce((sum, t) => sum + t.amount, 0),
                totalWithdrawals: filtered.filter(t => t.type === 'withdrawal').reduce((sum, t) => sum + t.amount, 0),
                transactionCount: filtered.length
            }
        };
        
        return statement;
    }
    
    getBalanceAtDate(date) {
        // Simpler implementation - in reality would need transaction history
        return this.balance;
    }
    
    close() {
        if (this.balance !== 0) {
            throw new Error('Cannot close account with non-zero balance');
        }
        this.isActive = false;
        return true;
    }
    
    toString() {
        return \`\${this.constructor.name} #\${this.accountNumber} - $\${this.balance.toFixed(2)}\`;
    }
}

// Savings Account
class SavingsAccount extends Account {
    constructor(accountHolder, accountNumber, initialBalance = 0) {
        super(accountHolder, accountNumber, initialBalance);
        this.interestRate = 0.02; // 2% annual
        this.minimumBalance = 100;
    }
    
    _canWithdraw(amount) {
        // Savings requires maintaining minimum balance
        return (this.balance - amount) >= this.minimumBalance;
    }
    
    calculateInterest() {
        const dailyRate = this.interestRate / 365;
        const interest = this.balance * dailyRate;
        this.deposit(interest, 'Interest payment');
        return interest;
    }
    
    // Override withdraw to add fee for excess withdrawals
    withdraw(amount, description = 'Withdrawal') {
        const result = super.withdraw(amount, description);
        
        // Charge fee if more than 3 withdrawals this month
        const thisMonth = new Date().getMonth();
        const withdrawalsThisMonth = this.transactions.filter(t => 
            t.type === 'withdrawal' && 
            t.timestamp.getMonth() === thisMonth
        ).length;
        
        if (withdrawalsThisMonth > 3) {
            const fee = 5;
            super.withdraw(fee, 'Excess withdrawal fee');
        }
        
        return result;
    }
}

// Checking Account
class CheckingAccount extends Account {
    constructor(accountHolder, accountNumber, initialBalance = 0) {
        super(accountHolder, accountNumber, initialBalance);
        this.overdraftLimit = 500;
        this.overdraftFee = 35;
    }
    
    _canWithdraw(amount) {
        // Checking allows overdraft up to limit
        return (this.balance - amount) >= -this.overdraftLimit;
    }
    
    withdraw(amount, description = 'Withdrawal') {
        const beforeBalance = this.balance;
        const result = super.withdraw(amount, description);
        
        // Charge overdraft fee if went from positive to negative
        if (beforeBalance >= 0 && this.balance < 0) {
            super.withdraw(this.overdraftFee, 'Overdraft fee');
        }
        
        return result;
    }
    
    calculateInterest() {
        // Checking accounts typically don't earn interest
        return 0;
    }
}

// Investment Account
class InvestmentAccount extends Account {
    constructor(accountHolder, accountNumber, initialBalance = 0, riskLevel = 'medium') {
        super(accountHolder, accountNumber, initialBalance);
        this.riskLevel = riskLevel;
        this.holdings = [];
        this.setInterestRateByRisk();
    }
    
    setInterestRateByRisk() {
        const rates = {
            'low': 0.03,    // 3%
            'medium': 0.05, // 5%
            'high': 0.08    // 8%
        };
        this.interestRate = rates[this.riskLevel] || rates.medium;
    }
    
    calculateInterest() {
        const monthlyRate = this.interestRate / 12;
        const interest = this.balance * monthlyRate;
        this.deposit(interest, 'Monthly investment return');
        return interest;
    }
    
    addHolding(symbol, quantity, purchasePrice) {
        this.holdings.push({
            symbol,
            quantity,
            purchasePrice,
            purchaseDate: new Date(),
            currentPrice: purchasePrice
        });
    }
    
    getPortfolioValue() {
        const holdingsValue = this.holdings.reduce((sum, holding) => 
            sum + (holding.quantity * holding.currentPrice), 0
        );
        return this.balance + holdingsValue;
    }
}

// Bank class to manage accounts
class Bank {
    constructor(name) {
        this.name = name;
        this.accounts = new Map();
        this.nextAccountNumber = 10001;
    }
    
    createAccount(type, accountHolder, initialBalance, ...options) {
        const accountNumber = this.generateAccountNumber();
        let account;
        
        switch (type.toLowerCase()) {
            case 'savings':
                account = new SavingsAccount(accountHolder, accountNumber, initialBalance);
                break;
            case 'checking':
                account = new CheckingAccount(accountHolder, accountNumber, initialBalance);
                break;
            case 'investment':
                account = new InvestmentAccount(accountHolder, accountNumber, initialBalance, ...options);
                break;
            default:
                throw new Error(\`Unknown account type: \${type}\`);
        }
        
        this.accounts.set(accountNumber, account);
        return account;
    }
    
    generateAccountNumber() {
        return \`\${this.nextAccountNumber++}\`;
    }
    
    getAccount(accountNumber) {
        const account = this.accounts.get(accountNumber);
        if (!account) {
            throw new Error(\`Account \${accountNumber} not found\`);
        }
        return account;
    }
    
    transfer(fromAccountNumber, toAccountNumber, amount, description = 'Transfer') {
        const fromAccount = this.getAccount(fromAccountNumber);
        const toAccount = this.getAccount(toAccountNumber);
        
        // Check if same bank for simplicity
        if (fromAccount.balance < amount) {
            throw new Error('Insufficient funds for transfer');
        }
        
        // Withdraw from source
        fromAccount.withdraw(amount, \`Transfer to \${toAccountNumber}: \${description}\`);
        
        // Deposit to destination
        toAccount.deposit(amount, \`Transfer from \${fromAccountNumber}: \${description}\`);
        
        return {
            from: fromAccountNumber,
            to: toAccountNumber,
            amount,
            timestamp: new Date(),
            description
        };
    }
    
    applyMonthlyInterest() {
        const results = [];
        
        for (const account of this.accounts.values()) {
            if (account.isActive) {
                try {
                    const interest = account.calculateInterest();
                    if (interest > 0) {
                        results.push({
                            accountNumber: account.accountNumber,
                            interest,
                            newBalance: account.balance
                        });
                    }
                } catch (error) {
                    // Some accounts might not implement calculateInterest
                }
            }
        }
        
        return results;
    }
    
    getTotalDeposits() {
        let total = 0;
        for (const account of this.accounts.values()) {
            if (account.isActive) {
                total += account.balance;
            }
        }
        return total;
    }
    
    generateReport() {
        const report = {
            bankName: this.name,
            generatedAt: new Date(),
            totalAccounts: this.accounts.size,
            activeAccounts: Array.from(this.accounts.values()).filter(a => a.isActive).length,
            totalDeposits: this.getTotalDeposits(),
            accountTypes: {}
        };
        
        // Count by type
        for (const account of this.accounts.values()) {
            const type = account.constructor.name;
            report.accountTypes[type] = (report.accountTypes[type] || 0) + 1;
        }
        
        return report;
    }
}

// Usage example
const myBank = new Bank('JavaScript Bank');

// Create accounts
const savings = myBank.createAccount('savings', 'John Doe', 5000);
const checking = myBank.createAccount('checking', 'John Doe', 1000);
const investment = myBank.createAccount('investment', 'John Doe', 10000, 'medium');

console.log('Initial accounts:');
console.log(savings.toString());
console.log(checking.toString());
console.log(investment.toString());

// Perform transactions
savings.deposit(500, 'Monthly savings');
checking.withdraw(200, 'ATM withdrawal');
investment.deposit(1000, 'Bonus investment');

// Transfer between accounts
myBank.transfer(checking.accountNumber, savings.accountNumber, 300, 'Monthly savings transfer');

// Apply interest
const interestResults = myBank.applyMonthlyInterest();
console.log('Monthly interest applied:', interestResults);

// Generate statements
const statement = savings.getStatement(
    new Date('2024-01-01'),
    new Date()
);
console.log('Savings statement:', statement.summary);

// Bank report
const report = myBank.generateReport();
console.log('Bank report:', report);`,
            hint: "Use abstract base classes for common behavior. Implement specific rules in subclasses. Use composition for complex behaviors. Design for extensibility with new account types."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Classes & OOP Practice Area\nconsole.log("Master object-oriented programming...");`);
        setOutput('');
    };

    const patterns = [
        {
            name: "Basic Class",
            code: `class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet() {\n    return \`Hello, I'm \${this.name}\`;\n  }\n}\n\nconst john = new Person('John', 30);\nconsole.log(john.greet());`,
            description: "Simple class with constructor and method"
        },
        {
            name: "Inheritance",
            code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    return \`\${this.name} makes a noise\`;\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return \`\${this.name} barks\`;\n  }\n}\n\nconst dog = new Dog('Rex');\nconsole.log(dog.speak());`,
            description: "Class extending another class"
        },
        {
            name: "Getter/Setter",
            code: `class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  get area() {\n    return this.width * this.height;\n  }\n  \n  set scale(factor) {\n    this.width *= factor;\n    this.height *= factor;\n  }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log('Area:', rect.area);\nrect.scale = 2;\nconsole.log('Scaled area:', rect.area);`,
            description: "Computed properties with getters/setters"
        },
        {
            name: "Static Method",
            code: `class MathUtils {\n  static add(a, b) {\n    return a + b;\n  }\n  \n  static PI = 3.14159;\n}\n\nconsole.log('Sum:', MathUtils.add(5, 3));\nconsole.log('PI:', MathUtils.PI);`,
            description: "Methods/properties on class itself"
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson18" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 3: Advanced</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 18: Classes & OOP</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Classes & Object-Oriented Programming
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master JavaScript classes, inheritance, and object-oriented design patterns.
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
                                            <Users className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Object-Oriented Programming in JavaScript
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        JavaScript uses prototype-based inheritance, but ES6 introduced class syntax that makes OOP more familiar and powerful. Learn to structure your code with classes, inheritance, and design patterns.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Box className="w-4 h-4" /> Class Fundamentals
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span><strong>Constructors:</strong> Object initialization</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Methods:</strong> Object behavior</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span><strong>Properties:</strong> Object state</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                                <GitBranch className="w-4 h-4" /> Advanced Features
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span><strong>Inheritance:</strong> Extending classes</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span><strong>Encapsulation:</strong> Private fields</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                                    <span><strong>Polymorphism:</strong> Multiple forms</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Class vs Prototype Inheritance
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                            <h3 className="font-medium text-red-700 dark:text-red-300 mb-2">Prototype-based (Traditional)</h3>
                                            <pre className="text-sm font-mono text-red-800 dark:text-red-400">
                                                {`function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return "Hello, " + this.name;
};

const john = new Person('John');
console.log(john.greet());`}
                                            </pre>
                                        </div>

                                        <div className="flex justify-center">
                                            <ArrowRight className="w-6 h-6 text-yellow-500" />
                                        </div>

                                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">Class-based (ES6+)</h3>
                                            <pre className="text-sm font-mono text-green-800 dark:text-green-300">
                                                {`class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return \`Hello, \${this.name}\`;
    }
}

const john = new Person('John');
console.log(john.greet());`}
                                            </pre>
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <strong>Note:</strong> ES6 classes are syntactic sugar over JavaScript's prototype inheritance. Under the hood, they work the same way but provide cleaner, more familiar syntax.
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
                                            <span className="font-mono text-xs text-slate-400">classes-demo.js</span>
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

                                    {/* Class Hierarchy Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <GitBranch className="w-4 h-4 text-blue-400" />
                                            <span className="text-xs font-semibold text-slate-400">Class Inheritance Hierarchy</span>
                                        </div>

                                        <div className="space-y-2">
                                            {classHierarchy.edges.map((edge, idx) => {
                                                const fromNode = classHierarchy.nodes.find(n => n.id === edge.from);
                                                const toNode = classHierarchy.nodes.find(n => n.id === edge.to);
                                                return (
                                                    <div key={idx} className="flex items-center">
                                                        <div className="w-16 text-right pr-2">
                                                            <span className="text-xs text-slate-400">{fromNode?.label}</span>
                                                        </div>
                                                        <div className="flex-1 flex items-center">
                                                            <div className="h-px w-4 bg-slate-700"></div>
                                                            <ArrowRight className="w-3 h-3 text-slate-500 mx-1" />
                                                            <div className="h-px flex-1 bg-slate-700"></div>
                                                        </div>
                                                        <div className="w-16 pl-2">
                                                            <span className="text-xs text-slate-300">{toNode?.label}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-3 text-xs text-slate-500">
                                            Shows inheritance relationships between classes
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
                                        OOP Concept Explorer
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
                                                                // Update class hierarchy visualization
                                                                setClassHierarchy(prev => ({
                                                                    ...prev,
                                                                    nodes: prev.nodes.map(node =>
                                                                        node.id === 'person' || node.id === 'employee'
                                                                            ? { ...node, highlighted: true }
                                                                            : node
                                                                    )
                                                                }));
                                                            }}
                                                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            <GitBranch className="w-4 h-4" />
                                                            Visualize Inheritance
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Class Patterns</h3>
                                    <div className="space-y-3">
                                        {patterns.map((pattern, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCode(pattern.code)}
                                                className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                                            >
                                                <div className="font-medium text-slate-700 dark:text-slate-200 text-sm flex items-center justify-between">
                                                    <span>{pattern.name}</span>
                                                    <Users className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                            onClick={() => setCode(`// Basic class\nexport class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n  \n  applyDiscount(percent) {\n    this.price *= (1 - percent / 100);\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Class
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Inheritance\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    return \`\${this.name} makes noise\`;\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return \`\${this.name} barks\`;\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Inheritance
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Getter/Setter\nclass User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  \n  get fullName() {\n    return \`\${this.firstName} \${this.lastName}\`;\n  }\n  \n  set fullName(value) {\n    const [first, last] = value.split(' ');\n    this.firstName = first;\n    this.lastName = last;\n  }\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Getter/Setter
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Static method\nclass MathHelper {\n  static add(a, b) {\n    return a + b;\n  }\n  \n  static subtract(a, b) {\n    return a - b;\n  }\n  \n  static PI = 3.14159;\n}`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Static Members
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">OOP Principles</h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <Shield className="w-4 h-4 text-blue-500 mt-0.5" />
                                            <span><strong>Encapsulation:</strong> Bundle data with methods</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <GitBranch className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span><strong>Inheritance:</strong> Create hierarchies</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Layers className="w-4 h-4 text-purple-500 mt-0.5" />
                                            <span><strong>Polymorphism:</strong> One interface, many forms</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Box className="w-4 h-4 text-orange-500 mt-0.5" />
                                            <span><strong>Abstraction:</strong> Hide complex details</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">classes-playground.js</span>
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

                                    {/* Class Hierarchy Visualization */}
                                    <div className="border-t border-slate-800 bg-slate-950 p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <GitBranch className="w-3 h-3 text-blue-400" />
                                            <span className="text-xs text-slate-400">Class Hierarchy:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {classHierarchy.nodes.map((node, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded">
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
                                    Class & Inheritance Visualizer
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Inheritance Chains
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Simple Inheritance</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`class Vehicle {\n  constructor(make, model) {\n    this.make = make;\n    this.model = model;\n  }\n  \n  drive() {\n    return \`Driving \${this.make} \${this.model}\`;\n  }\n}\n\nclass Car extends Vehicle {\n  constructor(make, model, doors) {\n    super(make, model);\n    this.doors = doors;\n  }\n  \n  honk() {\n    return 'Beep beep!';\n  }\n}\n\nconst myCar = new Car('Toyota', 'Camry', 4);\nconsole.log(myCar.drive());\nconsole.log(myCar.honk());`);
                                                            runCode();
                                                        }}
                                                        className="w-full p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                    >
                                                        <div className="text-sm font-medium">Vehicle → Car inheritance</div>
                                                        <div className="text-xs text-slate-500 mt-1">Parent class with child class extending it</div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Method Overriding</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`class Animal {\n  speak() {\n    return 'Animal sound';\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return 'Woof!';\n  }\n}\n\nclass Cat extends Animal {\n  speak() {\n    return 'Meow!';\n  }\n}\n\nconst animals = [new Animal(), new Dog(), new Cat()];\nanimals.forEach(a => console.log(a.speak()));`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Same method, different implementations</code>
                                                    </button>
                                                    <div className="text-sm text-green-600 dark:text-green-400">
                                                        Polymorphism: One interface, multiple forms
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Multiple Levels</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        onClick={() => {
                                                            setCode(`class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Employee extends Person {\n  constructor(name, title) {\n    super(name);\n    this.title = title;\n  }\n}\n\nclass Manager extends Employee {\n  constructor(name, title, teamSize) {\n    super(name, title);\n    this.teamSize = teamSize;\n  }\n}\n\nconst manager = new Manager('Alice', 'Director', 10);\nconsole.log(manager.name, manager.title, manager.teamSize);`);
                                                            runCode();
                                                        }}
                                                        className="w-full text-left p-2 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700"
                                                    >
                                                        <code className="text-sm">Person → Employee → Manager chain</code>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Class Composition Visualizer
                                        </h3>
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                    <div className="font-bold text-blue-700 dark:text-blue-300">Inheritance</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">"is-a" relationship</div>
                                                </div>
                                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                    <div className="font-bold text-green-700 dark:text-green-300">Composition</div>
                                                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">"has-a" relationship</div>
                                                </div>
                                            </div>

                                            {/* Interactive Class Builder */}
                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => {
                                                        setClassHierarchy({
                                                            nodes: [
                                                                { id: 'shape', label: 'Shape', type: 'base' },
                                                                { id: 'circle', label: 'Circle', type: 'child' },
                                                                { id: 'rectangle', label: 'Rectangle', type: 'child' },
                                                                { id: 'triangle', label: 'Triangle', type: 'child' }
                                                            ],
                                                            edges: [
                                                                { from: 'circle', to: 'shape' },
                                                                { from: 'rectangle', to: 'shape' },
                                                                { from: 'triangle', to: 'shape' }
                                                            ]
                                                        });
                                                    }}
                                                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                                                >
                                                    Visualize Inheritance Tree
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setClassHierarchy({
                                                            nodes: [
                                                                { id: 'car', label: 'Car', type: 'composite' },
                                                                { id: 'engine', label: 'Engine', type: 'component' },
                                                                { id: 'wheels', label: 'Wheels', type: 'component' },
                                                                { id: 'transmission', label: 'Transmission', type: 'component' }
                                                            ],
                                                            edges: [
                                                                { from: 'car', to: 'engine' },
                                                                { from: 'car', to: 'wheels' },
                                                                { from: 'car', to: 'transmission' }
                                                            ]
                                                        });
                                                    }}
                                                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                                                >
                                                    Visualize Composition
                                                </button>
                                            </div>
                                        </div>

                                        {/* Class Tree Visualization */}
                                        <div className="p-4 bg-slate-900 rounded-lg mb-4">
                                            <div className="text-sm text-slate-400 mb-2">Current Class Structure:</div>
                                            <div className="space-y-2">
                                                {classHierarchy.edges.map((edge, idx) => {
                                                    const fromNode = classHierarchy.nodes.find(n => n.id === edge.from);
                                                    const toNode = classHierarchy.nodes.find(n => n.id === edge.to);
                                                    return (
                                                        <div key={idx} className="flex items-center">
                                                            <div className="w-20 text-right pr-2">
                                                                <span className="text-xs text-slate-300">{fromNode?.label}</span>
                                                            </div>
                                                            <div className="flex-1 flex items-center">
                                                                <div className="h-px w-4 bg-slate-700"></div>
                                                                <ArrowRight className="w-3 h-3 text-slate-500 mx-1" />
                                                                <div className="h-px flex-1 bg-slate-700"></div>
                                                            </div>
                                                            <div className="w-20 pl-2">
                                                                <span className="text-xs text-slate-300">{toNode?.label}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                            <h4 className="font-medium mb-3">Design Your Class</h4>
                                            <textarea
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="w-full h-32 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded p-3 font-mono text-sm mb-3"
                                                placeholder="Write class definition to visualize..."
                                            />
                                            <div className="flex gap-2">
                                                <button onClick={runCode} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                                    Visualize Structure
                                                </button>
                                                <button onClick={resetCode} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">OOP Design Principles</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Single Responsibility:</strong> One class, one job
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Open/Closed:</strong> Open for extension, closed for modification
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Liskov Substitution:</strong> Subtypes must be substitutable
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Interface Segregation:</strong> Many specific interfaces
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson17" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">ES6 Modules</span>
                        </a>
                        <a href="/lesson19" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Closures</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}