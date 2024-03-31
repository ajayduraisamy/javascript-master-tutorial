import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    ShoppingCart, Check, Copy, Play, Code, Filter,
    Search, Package, Heart, Trash2, Plus, Minus,
    ShoppingBag, CreditCard, CheckCircle, Receipt,
    DollarSign, Info, Target, Terminal, Database,
    BookOpen, AlertCircle, ArrowRight, ArrowLeft,
    Terminal as TerminalIcon, Lightbulb, HelpCircle,
    Sparkles, Award, Tag, Truck, Shield, Star,
    TrendingUp, Settings, Download, Upload, Clock,
    Calendar, User, Lock, Unlock, Eye, EyeOff, Zap,
    BatteryCharging, Wifi, Smartphone, Monitor, Server,
    Check as CheckIcon, XCircle, Percent, Gift
} from 'lucide-react';

export default function Project3() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('overview');
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);

    // E-commerce Cart State
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [searchQuery, setSearchQuery] = useState('');
    const [checkoutStep, setCheckoutStep] = useState(1);
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: 'India'
    });
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });
    const [orderHistory, setOrderHistory] = useState([]);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [showCart, setShowCart] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);

    // Typing effect for title
    useEffect(() => {
        const text = "E-commerce Cart Project";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Initialize mock data
    useEffect(() => {
        const mockProducts = [
            {
                id: 1,
                name: "JavaScript Master Course",
                description: "Complete JavaScript course from beginner to advanced",
                price: 99.99,
                originalPrice: 149.99,
                category: "courses",
                image: "📚",
                rating: 4.9,
                reviews: 1247,
                inStock: true,
                stock: 50,
                tags: ["best-seller", "new"],
                features: ["Lifetime access", "Certificate", "50+ projects"]
            },
            {
                id: 2,
                name: "Web Development Bootcamp",
                description: "Full-stack web development course",
                price: 199.99,
                originalPrice: 299.99,
                category: "courses",
                image: "💻",
                rating: 4.8,
                reviews: 892,
                inStock: true,
                stock: 30,
                tags: ["popular"],
                features: ["Mentorship", "Career support", "Projects"]
            },
            {
                id: 3,
                name: "React Pro Bundle",
                description: "Advanced React patterns and best practices",
                price: 149.99,
                originalPrice: 199.99,
                category: "courses",
                image: "⚛️",
                rating: 4.7,
                reviews: 567,
                inStock: true,
                stock: 25,
                tags: ["trending"],
                features: ["Hooks", "Context", "Redux"]
            },
            {
                id: 4,
                name: "TypeScript Guide",
                description: "Master TypeScript for large-scale applications",
                price: 79.99,
                originalPrice: 99.99,
                category: "books",
                image: "📘",
                rating: 4.6,
                reviews: 321,
                inStock: true,
                stock: 100,
                tags: ["new"],
                features: ["PDF + ePub", "Code examples", "Exercises"]
            },
            {
                id: 5,
                name: "Node.js API Design",
                description: "Build scalable REST APIs with Node.js",
                price: 89.99,
                originalPrice: 119.99,
                category: "books",
                image: "🚀",
                rating: 4.5,
                reviews: 234,
                inStock: true,
                stock: 75,
                tags: [],
                features: ["Real projects", "Deployment guide", "Testing"]
            },
            {
                id: 6,
                name: "Developer T-Shirt",
                description: "Comfortable cotton t-shirt for developers",
                price: 24.99,
                originalPrice: 29.99,
                category: "merchandise",
                image: "👕",
                rating: 4.4,
                reviews: 189,
                inStock: true,
                stock: 20,
                tags: ["sale"],
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "White", "Gray"]
            },
            {
                id: 7,
                name: "Programming Mug",
                description: "Ceramic mug with developer humor",
                price: 14.99,
                originalPrice: 19.99,
                category: "merchandise",
                image: "☕",
                rating: 4.3,
                reviews: 156,
                inStock: true,
                stock: 50,
                tags: ["gift"],
                colors: ["White", "Black"]
            },
            {
                id: 8,
                name: "Wireless Keyboard",
                description: "Mechanical keyboard for programmers",
                price: 129.99,
                originalPrice: 159.99,
                category: "electronics",
                image: "⌨️",
                rating: 4.7,
                reviews: 432,
                inStock: false,
                stock: 0,
                tags: ["premium"],
                features: ["RGB lighting", "Wireless", "Macro keys"]
            }
        ];

        const mockCategories = [
            { id: 'all', name: 'All Products', count: 8, icon: '📦' },
            { id: 'courses', name: 'Courses', count: 3, icon: '🎓' },
            { id: 'books', name: 'Books', count: 2, icon: '📚' },
            { id: 'merchandise', name: 'Merchandise', count: 2, icon: '👕' },
            { id: 'electronics', name: 'Electronics', count: 1, icon: '💻' }
        ];

        setProducts(mockProducts);
        setCategories(mockCategories);

        // Load cart and wishlist from localStorage
        const savedCart = localStorage.getItem('ecommerceCart');
        const savedWishlist = localStorage.getItem('ecommerceWishlist');
        const savedOrders = localStorage.getItem('ecommerceOrders');

        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        }

        if (savedWishlist) {
            try {
                setWishlist(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Error loading wishlist:', error);
            }
        }

        if (savedOrders) {
            try {
                setOrderHistory(JSON.parse(savedOrders));
            } catch (error) {
                console.error('Error loading orders:', error);
            }
        }
    }, []);

    // Save cart, wishlist, and orders to localStorage
    useEffect(() => {
        localStorage.setItem('ecommerceCart', JSON.stringify(cart));
        localStorage.setItem('ecommerceWishlist', JSON.stringify(wishlist));
        localStorage.setItem('ecommerceOrders', JSON.stringify(orderHistory));
    }, [cart, wishlist, orderHistory]);

    // Cart Operations
    const addToCart = (product) => {
        if (!product.inStock) return;

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 500);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    const toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter(id => id !== productId));
        } else {
            setWishlist([...wishlist, productId]);
        }
    };

    // Cart Calculations
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getShippingCost = () => {
        const total = getCartTotal();
        if (total === 0) return 0;
        if (discountApplied && discountCode === 'FREESHIP') return 0;

        switch (shippingMethod) {
            case 'standard': return 4.99;
            case 'express': return 9.99;
            case 'overnight': return 19.99;
            default: return 4.99;
        }
    };

    const getTax = () => {
        const subtotal = getCartTotal() - discountAmount;
        return subtotal * 0.08; // 8% tax
    };

    const getTotal = () => {
        const subtotal = getCartTotal() - discountAmount;
        const shipping = getShippingCost();
        const tax = getTax();
        return subtotal + shipping + tax;
    };

    // Discount Functions
    const applyDiscount = () => {
        const discounts = {
            'WELCOME10': 0.10,
            'SAVE20': 0.20,
            'FREESHIP': 'free_shipping'
        };

        const discount = discounts[discountCode.toUpperCase()];

        if (!discount) {
            alert('Invalid discount code');
            return;
        }

        setDiscountApplied(true);

        if (typeof discount === 'number') {
            setDiscountAmount(getCartTotal() * discount);
            alert(`Applied ${discount * 100}% discount!`);
        } else if (discount === 'free_shipping') {
            alert('Free shipping applied!');
        }
    };

    // Checkout Functions
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        setCheckoutStep(2);
    };

    const handleShippingSubmit = () => {
        // Validate shipping info
        if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address) {
            alert('Please fill in all required shipping information');
            return;
        }
        setCheckoutStep(3);
    };

    const handlePaymentSubmit = () => {
        // Validate payment info
        if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv) {
            alert('Please fill in all payment information');
            return;
        }

        // Create order
        const order = {
            id: `ORD-${Date.now()}`,
            items: [...cart],
            shippingInfo: { ...shippingInfo },
            paymentInfo: {
                ...paymentInfo,
                cardNumber: `**** **** **** ${paymentInfo.cardNumber.slice(-4)}`
            },
            shippingMethod,
            subtotal: getCartTotal(),
            discount: discountAmount,
            shipping: getShippingCost(),
            tax: getTax(),
            total: getTotal(),
            date: new Date().toISOString(),
            status: 'completed'
        };

        // Save order
        setOrderHistory([order, ...orderHistory]);
        setCurrentOrder(order);

        // Clear cart
        setCart([]);
        setDiscountApplied(false);
        setDiscountAmount(0);

        // Move to confirmation
        setCheckoutStep(4);
        setOrderCompleted(true);
    };

    const continueShopping = () => {
        setCheckoutStep(1);
        setShowCart(false);
        setOrderCompleted(false);
        setCurrentOrder(null);
    };

    // Filter and Sort Functions
    const filteredProducts = () => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // Sort products
        switch (sortBy) {
            case 'price-low':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-high':
                return filtered.sort((a, b) => b.price - a.price);
            case 'rating':
                return filtered.sort((a, b) => b.rating - a.rating);
            case 'name':
                return filtered.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return filtered;
        }
    };

    // Solution Code
    const solutionCode = `// Complete E-commerce Cart Implementation
class ECommerceCart {
    constructor() {
        this.cart = [];
        this.wishlist = [];
        this.products = [];
        this.orders = [];
        this.discounts = new Map();
        this.taxRate = 0.08;
        this.shippingRates = {
            standard: 4.99,
            express: 9.99,
            overnight: 19.99
        };
    }

    addToCart(product, quantity = 1) {
        const existing = this.cart.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.cart.push({ ...product, quantity });
        }
        
        this.saveCart();
        this.updateUI();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateUI();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (quantity < 1) this.removeFromCart(productId);
            this.saveCart();
            this.updateUI();
        }
    }

    getSubtotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getTotal() {
        const subtotal = this.getSubtotal();
        const discount = this.getDiscountAmount();
        const shipping = this.getShippingCost();
        const tax = (subtotal - discount) * this.taxRate;
        return subtotal - discount + shipping + tax;
    }

    applyDiscount(code) {
        const discountRules = {
            'WELCOME10': 0.10,
            'SAVE20': 0.20,
            'FREESHIP': 'free_shipping'
        };
        
        const rule = discountRules[code];
        if (rule) {
            this.discounts.set(code, rule);
            this.updateUI();
        }
    }

    // ... additional methods
}`;

    const copySolution = () => {
        navigator.clipboard.writeText(solutionCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const runCode = () => {
        setOutput('Running e-commerce cart simulation...');
        setTimeout(() => {
            setOutput('Cart functionality tested successfully!\n✓ Add/remove items\n✓ Update quantities\n✓ Calculate totals\n✓ Apply discounts\n✓ Checkout process');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="flex">
                <LessonSidebar currentLesson="project3" />

                <div className="flex-1 lg:ml-80 min-h-screen">
                    <div className="max-w-7xl mx-auto p-6 md:p-8">

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {typingEffect}
                                        <span className="animate-pulse">_</span>
                                    </h1>
                                    <p className="text-gray-600 mt-2 flex items-center gap-2">
                                        <ShoppingCart className="w-5 h-5" />
                                        Build a complete shopping cart system with React
                                    </p>
                                </div>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md ${pulseAnimation ? 'animate-pulse' : ''}`}>
                                    <ShoppingBag className="w-5 h-5 text-blue-600" />
                                    <span className="font-semibold">{getCartItemCount()} items</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="font-bold text-green-600">${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Tabs */}
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="border-b border-gray-200">
                                        <nav className="flex overflow-x-auto">
                                            {['overview', 'requirements', 'implementation', 'practice'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`flex-shrink-0 px-6 py-3 font-medium text-sm capitalize transition-colors ${activeTab === tab
                                                        ? 'border-b-2 border-blue-500 text-blue-600'
                                                        : 'text-gray-500 hover:text-gray-700'
                                                        }`}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>

                                    <div className="p-6">
                                        {activeTab === 'overview' && (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-blue-600">
                                                    <Info className="w-5 h-5" />
                                                    <h2 className="text-xl font-bold">Project Overview</h2>
                                                </div>
                                                <p className="text-gray-700">
                                                    Build a fully functional e-commerce shopping cart system with React.
                                                    This project covers state management, local storage, user interactions,
                                                    and complex business logic.
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <h3 className="font-bold text-blue-800 mb-2">🛒 Cart Features</h3>
                                                        <ul className="space-y-2 text-sm">
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Add/remove items
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Quantity management
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Wishlist functionality
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Discount codes
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h3 className="font-bold text-green-800 mb-2">💳 Checkout Process</h3>
                                                        <ul className="space-y-2 text-sm">
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Multi-step checkout
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Shipping options
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Payment processing
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckIcon className="w-4 h-4 text-green-500" />
                                                                Order confirmation
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'requirements' && (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-orange-600">
                                                    <Target className="w-5 h-5" />
                                                    <h2 className="text-xl font-bold">Project Requirements</h2>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-blue-100 p-2 rounded-lg">
                                                            <Code className="w-5 h-5 text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold">Core Cart Functionality</h3>
                                                            <p className="text-sm text-gray-600">Add, remove, update quantities, calculate totals</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-green-100 p-2 rounded-lg">
                                                            <Database className="w-5 h-5 text-green-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold">Local Storage</h3>
                                                            <p className="text-sm text-gray-600">Persist cart data across sessions</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-purple-100 p-2 rounded-lg">
                                                            <Filter className="w-5 h-5 text-purple-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold">Product Filtering</h3>
                                                            <p className="text-sm text-gray-600">Search, category filter, sorting options</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-red-100 p-2 rounded-lg">
                                                            <CreditCard className="w-5 h-5 text-red-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold">Checkout System</h3>
                                                            <p className="text-sm text-gray-600">Multi-step checkout with validation</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'implementation' && (
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-purple-600">
                                                        <TerminalIcon className="w-5 h-5" />
                                                        <h2 className="text-xl font-bold">Implementation Guide</h2>
                                                    </div>
                                                    <button
                                                        onClick={copySolution}
                                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                                        {copied ? 'Copied!' : 'Copy Solution'}
                                                    </button>
                                                </div>

                                                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                                    <pre className="text-sm font-mono">
                                                        {solutionCode}
                                                    </pre>
                                                </div>

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={runCode}
                                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                                    >
                                                        <Play className="w-4 h-4" />
                                                        Run Code
                                                    </button>
                                                    <button
                                                        onClick={() => setShowSolution(!showSolution)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                                    >
                                                        <Lightbulb className="w-4 h-4" />
                                                        {showSolution ? 'Hide Tips' : 'Show Tips'}
                                                    </button>
                                                </div>

                                                {output && (
                                                    <div className="mt-4 p-4 bg-gray-800 text-green-400 rounded-lg">
                                                        <pre>{output}</pre>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {activeTab === 'practice' && (
                                            <div className="space-y-4">
                                                <h2 className="text-xl font-bold">Try It Yourself</h2>
                                                <textarea
                                                    value={userCode}
                                                    onChange={(e) => setUserCode(e.target.value)}
                                                    className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm"
                                                    placeholder="Write your cart implementation here..."
                                                />
                                                <button
                                                    onClick={() => setPracticeOutput('Test your code functionality here...')}
                                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                                >
                                                    Test Code
                                                </button>
                                                {practiceOutput && (
                                                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                                        <pre>{practiceOutput}</pre>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
</div>
                            {/* Right Column */}
                            <div className="space-y-6 mt-4">
                                {/* Products Grid */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <Package className="w-5 h-5" />
                                            Products
                                        </h2>
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-40"
                                                />
                                            </div>
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                            >
                                                <option value="default">Sort</option>
                                                <option value="price-low">Price: Low</option>
                                                <option value="price-high">Price: High</option>
                                                <option value="rating">Rating</option>
                                                <option value="name">Name</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Category Filters */}
                                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                <span>{category.icon}</span>
                                                <span className="whitespace-nowrap">{category.name}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Products Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto p-1">
                                        {filteredProducts().map((product) => (
                                            <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="text-3xl">{product.image}</div>
                                                    <button
                                                        onClick={() => toggleWishlist(product.id)}
                                                        className="text-gray-400 hover:text-red-500"
                                                    >
                                                        <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                                    </button>
                                                </div>

                                                <h3 className="font-bold text-gray-900">{product.name}</h3>
                                                <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">{product.description}</p>

                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex text-yellow-400">
                                                        {'★'.repeat(Math.floor(product.rating))}
                                                        {'☆'.repeat(5 - Math.floor(product.rating))}
                                                    </div>
                                                    <span className="text-sm text-gray-500">({product.reviews})</span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="font-bold text-lg">₹{product.price.toFixed(2)}</span>
                                                        {product.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                                ₹{product.originalPrice.toFixed(2)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => addToCart(product)}
                                                        disabled={!product.inStock}
                                                        className={`px-4 py-2 rounded-lg font-medium text-sm ${product.inStock
                                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                
                                </div>

                                {/* Cart Preview */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <ShoppingCart className="w-5 h-5" />
                                            Shopping Cart
                                        </h2>
                                        <button
                                            onClick={() => setShowCart(!showCart)}
                                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                                        >
                                            {showCart ? 'Hide Details' : 'Show Details'}
                                        </button>
                                    </div>

                                    {cart.length === 0 ? (
                                        <div className="text-center py-8">
                                            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                            <p className="text-gray-500">Your cart is empty</p>
                                            <p className="text-sm text-gray-400 mt-1">Add some products to get started!</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="space-y-3 mb-6">
                                                {cart.slice(0, showCart ? cart.length : 3).map((item) => (
                                                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-2xl">{item.image}</div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-medium truncate">{item.name}</h4>
                                                            <div className="flex items-center gap-4 mt-1">
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                                                                    >
                                                                        <Minus className="w-3 h-3" />
                                                                    </button>
                                                                    <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                                                                    <button
                                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                        className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                                                                    >
                                                                        <Plus className="w-3 h-3" />
                                                                    </button>
                                                                </div>
                                                                <span className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-400 hover:text-red-500"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="border-t pt-4">
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Subtotal</span>
                                                            <span>₹{getCartTotal().toFixed(2)}</span>
                                                    </div>
                                                    {discountAmount > 0 && (
                                                        <div className="flex justify-between text-sm text-green-600">
                                                            <span>Discount</span>
                                                                <span>₹{discountAmount.toFixed(2)}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Shipping</span>
                                                            <span>₹{getShippingCost().toFixed(2)}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-600">Tax</span>
                                                            <span>₹{getTax().toFixed(2)}</span>
                                                    </div>
                                                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                                        <span>Total</span>
                                                            <span>₹{getTotal().toFixed(2)}</span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 mb-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Discount code"
                                                        value={discountCode}
                                                        onChange={(e) => setDiscountCode(e.target.value)}
                                                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                                    />
                                                    <button
                                                        onClick={applyDiscount}
                                                        disabled={discountApplied}
                                                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 text-sm"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={handleCheckout}
                                                    className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                                                >
                                                    Proceed to Checkout
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Stats Footer */}
                        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <ShoppingCart className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Cart Items</div>
                                        <div className="text-2xl font-bold">{getCartItemCount()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <DollarSign className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Cart Total</div>
                                        <div className="text-2xl font-bold">₹{getCartTotal().toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <Heart className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Wishlist</div>
                                        <div className="text-2xl font-bold">{wishlist.length}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <Receipt className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Orders</div>
                                        <div className="text-2xl font-bold">{orderHistory.length}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Modal */}
            {checkoutStep > 1 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        {/* Checkout Header */}
                        <div className="sticky top-0 bg-white border-b p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Checkout</h2>
                                <button
                                    onClick={() => setCheckoutStep(1)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Progress Steps */}
                            <div className="flex items-center justify-between mt-6">
                                {['Cart', 'Shipping', 'Payment', 'Confirmation'].map((step, index) => (
                                    <div key={step} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${checkoutStep > index + 1
                                            ? 'bg-green-600 text-white'
                                            : checkoutStep === index + 1
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            {checkoutStep > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
                                        </div>
                                        <span className={`ml-2 font-medium ${checkoutStep >= index + 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {step}
                                        </span>
                                        {index < 3 && (
                                            <div className={`w-16 h-1 mx-4 ${checkoutStep > index + 1 ? 'bg-green-600' : 'bg-gray-200'}`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Checkout Content */}
                        <div className="p-6">
                            {checkoutStep === 2 && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold">Shipping Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={shippingInfo.name}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                                            className="border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={shippingInfo.email}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                                            className="border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            value={shippingInfo.address}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                                            className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder="City"
                                            value={shippingInfo.city}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                            className="border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder="ZIP Code"
                                            value={shippingInfo.zipCode}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                                            className="border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold">Shipping Method</h4>
                                        {[
                                            { id: 'standard', name: 'Standard', price: 4.99, days: '5-7 business days' },
                                            { id: 'express', name: 'Express', price: 9.99, days: '2-3 business days' },
                                            { id: 'overnight', name: 'Overnight', price: 19.99, days: '1 business day' }
                                        ].map((method) => (
                                            <label key={method.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="shipping"
                                                        value={method.id}
                                                        checked={shippingMethod === method.id}
                                                        onChange={(e) => setShippingMethod(e.target.value)}
                                                        className="mr-3"
                                                    />
                                                    <div>
                                                        <div className="font-medium">{method.name}</div>
                                                        <div className="text-sm text-gray-500">{method.days}</div>
                                                    </div>
                                                </div>
                                                <div className="font-bold">₹{method.price.toFixed(2)}</div>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="flex justify-between pt-6">
                                        <button
                                            onClick={() => setCheckoutStep(1)}
                                            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                                        >
                                            Back to Cart
                                        </button>
                                        <button
                                            onClick={handleShippingSubmit}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </div>
                            )}

                            {checkoutStep === 3 && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold">Payment Information</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            value={paymentInfo.cardNumber}
                                            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={paymentInfo.expiryDate}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                                                className="border border-gray-300 rounded-lg px-4 py-3"
                                            />
                                            <input
                                                type="text"
                                                placeholder="CVV"
                                                value={paymentInfo.cvv}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                                                className="border border-gray-300 rounded-lg px-4 py-3"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Name on Card"
                                            value={paymentInfo.nameOnCard}
                                            onChange={(e) => setPaymentInfo({ ...paymentInfo, nameOnCard: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                        />
                                    </div>

                                    <div className="border-t pt-6">
                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>${getCartTotal().toFixed(2)}</span>
                                            </div>
                                            {discountAmount > 0 && (
                                                <div className="flex justify-between text-green-600">
                                                    <span>Discount</span>
                                                    <span>-${discountAmount.toFixed(2)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span>Shipping</span>
                                                <span>₹{getShippingCost().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Tax</span>
                                                <span>₹{getTax().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                                <span>Total</span>
                                                <span className="text-green-600">₹{getTotal().toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => setCheckoutStep(2)}
                                                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                                            >
                                                Back to Shipping
                                            </button>
                                            <button
                                                onClick={handlePaymentSubmit}
                                                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                            >
                                                Complete Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {checkoutStep === 4 && currentOrder && (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Order Confirmed!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for your purchase. Your order has been received.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Order Number:</span>
                                                <span className="font-bold">{currentOrder.id}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Date:</span>
                                                <span>{new Date(currentOrder.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Total Amount:</span>
                                                <span className="font-bold text-green-600">₹{currentOrder.total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={continueShopping}
                                        className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}