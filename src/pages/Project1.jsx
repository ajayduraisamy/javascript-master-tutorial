import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Award, Check, Copy, Play, AlertCircle, Code, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, CheckCircle, XCircle, Edit, Trash2, Plus,
    Calendar, Clock, Filter, List, CheckSquare, Square,
    Star, StarOff, Archive, RefreshCw, Settings, User,
    Bell, BellOff, TrendingUp, BarChart, Zap, BatteryCharging,
    Wifi, Smartphone, Monitor, Cloud, Save, Download, Upload, ChevronLeft, ChevronRight

} from 'lucide-react';

export default function Project1() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'requirements', 'implementation'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);

    // To-Do App State
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
    const [stats, setStats] = useState({
        total: 0,
        completed: 0,
        active: 0,
        starred: 0
    });

    // Typing effect for title
    useEffect(() => {
        const text = "To-Do App Project";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Load todos from localStorage on mount
    useEffect(() => {
        const savedTodos = localStorage.getItem('javascriptMasterTodos');
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (error) {
                console.error('Error loading todos:', error);
            }
        }
    }, []);

    // Save todos to localStorage and update stats
    useEffect(() => {
        localStorage.setItem('javascriptMasterTodos', JSON.stringify(todos));

        const newStats = {
            total: todos.length,
            completed: todos.filter(todo => todo.completed).length,
            active: todos.filter(todo => !todo.completed).length,
            starred: todos.filter(todo => todo.starred).length
        };
        setStats(newStats);
    }, [todos]);

    // Solution Code
    const solutionCode = `// Complete To-Do App Implementation
class TodoApp {
    constructor() {
        this.todos = this.loadFromStorage();
        this.init();
    }

    // Initialize the app
    init() {
        this.render();
        this.setupEventListeners();
        this.updateStats();
    }

    // Load todos from localStorage
    loadFromStorage() {
        const saved = localStorage.getItem('todoApp');
        return saved ? JSON.parse(saved) : [];
    }

    // Save todos to localStorage
    saveToStorage() {
        localStorage.setItem('todoApp', JSON.stringify(this.todos));
    }

    // Add new todo
    addTodo(title, description = '') {
        const newTodo = {
            id: Date.now(),
            title,
            description,
            completed: false,
            starred: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.todos.push(newTodo);
        this.saveToStorage();
        this.render();
        this.updateStats();
    }

    // Toggle todo completion
    toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                    updatedAt: new Date().toISOString()
                };
            }
            return todo;
        });

        this.saveToStorage();
        this.render();
        this.updateStats();
    }

    // Toggle todo star
    toggleStar(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    starred: !todo.starred,
                    updatedAt: new Date().toISOString()
                };
            }
            return todo;
        });

        this.saveToStorage();
        this.render();
        this.updateStats();
    }

    // Edit todo
    editTodo(id, newTitle, newDescription = '') {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: newTitle,
                    description: newDescription,
                    updatedAt: new Date().toISOString()
                };
            }
            return todo;
        });

        this.saveToStorage();
        this.render();
    }

    // Delete todo
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToStorage();
        this.render();
        this.updateStats();
    }

    // Clear all completed todos
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToStorage();
        this.render();
        this.updateStats();
    }

    // Filter todos
    filterTodos(filterType) {
        switch(filterType) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'starred':
                return this.todos.filter(todo => todo.starred);
            default:
                return this.todos;
        }
    }

    // Update statistics
    updateStats() {
        const stats = {
            total: this.todos.length,
            completed: this.todos.filter(t => t.completed).length,
            active: this.todos.filter(t => !t.completed).length,
            starred: this.todos.filter(t => t.starred).length
        };

        // Update UI with stats
        this.updateStatsDisplay(stats);
    }

    // Render todos to DOM
    render() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.filterTodos(this.currentFilter || 'all');

        todoList.innerHTML = filteredTodos.map(todo => \`
            <div class="todo-item \${todo.completed ? 'completed' : ''} \${todo.starred ? 'starred' : ''}" data-id="\${todo.id}">
                <input type="checkbox" \${todo.completed ? 'checked' : ''} class="todo-checkbox">
                <div class="todo-content">
                    <div class="todo-title">\${todo.title}</div>
                    \${todo.description ? \`<div class="todo-description">\${todo.description}</div>\` : ''}
                    <div class="todo-date">Created: \${new Date(todo.createdAt).toLocaleDateString()}</div>
                </div>
                <div class="todo-actions">
                    <button class="star-btn">\${todo.starred ? '★' : '☆'}</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        \`).join('');
    }

    // Setup event listeners
    setupEventListeners() {
        // Add todo form
        document.getElementById('addTodoForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('todoInput').value;
            const description = document.getElementById('todoDescription').value;
            
            if (title.trim()) {
                this.addTodo(title, description);
                document.getElementById('todoInput').value = '';
                document.getElementById('todoDescription').value = '';
            }
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        // Clear completed button
        document.getElementById('clearCompleted').addEventListener('click', () => {
            this.clearCompleted();
        });
    }

    // Update stats display
    updateStatsDisplay(stats) {
        document.getElementById('totalTodos').textContent = stats.total;
        document.getElementById('completedTodos').textContent = stats.completed;
        document.getElementById('activeTodos').textContent = stats.active;
        document.getElementById('starredTodos').textContent = stats.starred;
    }
}

// Initialize the app
const todoApp = new TodoApp();`;

    const codeExamples = {
        structure: `// To-Do App Structure
// 1. Todo Item Structure
const todoItem = {
    id: Date.now(),              // Unique identifier
    title: 'Learn JavaScript',   // Todo title
    description: 'Complete modules 1-4', // Optional description
    completed: false,           // Completion status
    starred: false,             // Starred/important status
    createdAt: new Date().toISOString(), // Creation timestamp
    updatedAt: new Date().toISOString()  // Last update timestamp
};

// 2. App State Management
class TodoAppState {
    constructor() {
        this.todos = [];
        this.filter = 'all'; // 'all', 'active', 'completed', 'starred'
        this.nextId = 1;
    }

    // CRUD Operations
    addTodo(title, description = '') {
        const newTodo = {
            id: this.nextId++,
            title,
            description,
            completed: false,
            starred: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.todos.push(newTodo);
        this.saveToStorage();
        this.notify();
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => 
            todo.id === id 
                ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
                : todo
        );
        this.saveToStorage();
        this.notify();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToStorage();
        this.notify();
    }

    // Filtering
    getFilteredTodos() {
        switch(this.filter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'starred':
                return this.todos.filter(todo => todo.starred);
            default:
                return this.todos;
        }
    }

    // Statistics
    getStats() {
        return {
            total: this.todos.length,
            completed: this.todos.filter(t => t.completed).length,
            active: this.todos.filter(t => !t.completed).length,
            starred: this.todos.filter(t => t.starred).length
        };
    }

    // Persistence
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('todos');
        this.todos = saved ? JSON.parse(saved) : [];
        this.nextId = this.todos.length > 0 
            ? Math.max(...this.todos.map(t => t.id)) + 1 
            : 1;
    }

    // Observer pattern for UI updates
    notify() {
        // This would trigger UI re-render
        console.log('State updated:', this.getStats());
    }
}`,

        uiComponents: `// To-Do App UI Components
// 1. Todo List Component
function renderTodoList(todos, onToggle, onDelete, onStar) {
    const todoList = document.getElementById('todoList');
    
    todoList.innerHTML = todos.map(todo => \`
        <div class="todo-item \${todo.completed ? 'completed' : ''} \${todo.starred ? 'starred' : ''}" 
             data-id="\${todo.id}">
            
            <!-- Checkbox -->
            <input type="checkbox" 
                   class="todo-checkbox"
                   \${todo.completed ? 'checked' : ''}
                   onchange="onToggle(\${todo.id})">
            
            <!-- Todo Content -->
            <div class="todo-content">
                <div class="todo-title">\${todo.title}</div>
                \${todo.description ? \`
                    <div class="todo-description">\${todo.description}</div>
                \` : ''}
                
                <!-- Metadata -->
                <div class="todo-meta">
                    <span class="todo-date">
                        \${formatDate(todo.createdAt)}
                    </span>
                    \${todo.completed ? \`
                        <span class="todo-completed">
                            ✓ Completed
                        </span>
                    \` : ''}
                </div>
            </div>
            
            <!-- Actions -->
            <div class="todo-actions">
                <!-- Star Button -->
                <button class="btn-star" onclick="onStar(\${todo.id})">
                    \${todo.starred ? '★' : '☆'}
                </button>
                
                <!-- Edit Button -->
                <button class="btn-edit" onclick="onEdit(\${todo.id})">
                    Edit
                </button>
                
                <!-- Delete Button -->
                <button class="btn-delete" onclick="onDelete(\${todo.id})">
                    Delete
                </button>
            </div>
        </div>
    \`).join('');
}

// 2. Stats Component
function renderStats(stats) {
    return \`
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-value">\${stats.total}</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">\${stats.active}</div>
                <div class="stat-label">Active</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">\${stats.completed}</div>
                <div class="stat-label">Done</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">\${stats.starred}</div>
                <div class="stat-label">Starred</div>
            </div>
        </div>
    \`;
}

// 3. Filter Component
function renderFilters(currentFilter, onChange) {
    const filters = [
        { id: 'all', label: 'All', icon: '📋' },
        { id: 'active', label: 'Active', icon: '⚡' },
        { id: 'completed', label: 'Completed', icon: '✅' },
        { id: 'starred', label: 'Starred', icon: '⭐' }
    ];

    return filters.map(filter => \`
        <button class="filter-btn \${currentFilter === filter.id ? 'active' : ''}"
                data-filter="\${filter.id}"
                onclick="onChange('\${filter.id}')">
            \${filter.icon} \${filter.label}
        </button>
    \`).join('');
}

// 4. Add Todo Form
function renderAddForm(onSubmit) {
    return \`
        <form id="addTodoForm" class="add-todo-form">
            <input type="text" 
                   id="todoInput" 
                   class="todo-input"
                   placeholder="What needs to be done?"
                   required>
            
            <textarea id="todoDescription"
                      class="todo-description-input"
                      placeholder="Add description (optional)"
                      rows="2"></textarea>
            
            <button type="submit" class="btn-add">
                <span>+</span> Add Task
            </button>
        </form>
    \`;
}`,

        advancedFeatures: `// Advanced To-Do App Features
// 1. Drag and Drop Reordering
function setupDragAndDrop() {
    const todoList = document.getElementById('todoList');
    let draggedItem = null;

    // Make items draggable
    document.querySelectorAll('.todo-item').forEach(item => {
        item.setAttribute('draggable', 'true');
        
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            setTimeout(() => item.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            draggedItem = null;
        });
    });

    // Handle drop zones
    todoList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(todoList, e.clientY);
        const draggable = document.querySelector('.dragging');
        
        if (afterElement == null) {
            todoList.appendChild(draggable);
        } else {
            todoList.insertBefore(draggable, afterElement);
        }
    });

    // Update order in state after drop
    todoList.addEventListener('drop', () => {
        const newOrder = Array.from(todoList.children).map(child => 
            parseInt(child.dataset.id)
        );
        updateTodoOrder(newOrder);
    });
}

// 2. Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter: Add new todo
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const input = document.getElementById('todoInput');
            if (document.activeElement === input && input.value.trim()) {
                document.getElementById('addTodoForm').submit();
            }
        }

        // Escape: Cancel editing
        if (e.key === 'Escape') {
            cancelEditing();
        }

        // Delete: Delete selected todo
        if (e.key === 'Delete' && document.activeElement.classList.contains('todo-item')) {
            const todoId = document.activeElement.dataset.id;
            deleteTodo(todoId);
        }
    });
}

// 3. Local Storage with Versioning
class PersistentStorage {
    constructor(namespace = 'todoApp', version = '1.0') {
        this.namespace = namespace;
        this.version = version;
        this.key = \`\${namespace}_v\${version}\`;
    }

    save(data) {
        const storageData = {
            data: data,
            version: this.version,
            timestamp: new Date().toISOString(),
            schemaVersion: 1
        };
        
        try {
            localStorage.setItem(this.key, JSON.stringify(storageData));
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            this.handleStorageError(error);
            return false;
        }
    }

    load() {
        try {
            const stored = localStorage.getItem(this.key);
            if (!stored) return null;
            
            const parsed = JSON.parse(stored);
            
            // Check version compatibility
            if (parsed.version !== this.version) {
                return this.migrateData(parsed);
            }
            
            return parsed.data;
        } catch (error) {
            console.error('Load error:', error);
            return null;
        }
    }

    migrateData(oldData) {
        console.log('Migrating data from version', oldData.version, 'to', this.version);
        // Add migration logic here
        return oldData.data;
    }

    handleStorageError(error) {
        if (error.name === 'QuotaExceededError') {
            alert('Storage is full! Some features may not work properly.');
            this.clearOldData();
        }
    }

    clearOldData() {
        // Clear data older than 30 days
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        // Implementation depends on your data structure
    }
}

// 4. Search Functionality
class TodoSearch {
    constructor(todos) {
        this.todos = todos;
        this.searchIndex = this.buildSearchIndex();
    }

    buildSearchIndex() {
        return this.todos.map(todo => ({
            id: todo.id,
            title: todo.title.toLowerCase(),
            description: todo.description ? todo.description.toLowerCase() : '',
            tags: todo.tags || []
        }));
    }

    search(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return this.todos;

        return this.todos.filter((todo, index) => {
            const indexed = this.searchIndex[index];
            return indexed.title.includes(searchTerm) ||
                   indexed.description.includes(searchTerm) ||
                   indexed.tags.some(tag => tag.includes(searchTerm));
        });
    }

    // Fuzzy search with scoring
    fuzzySearch(query) {
        const searchTerm = query.toLowerCase();
        const results = this.todos.map((todo, index) => {
            const indexed = this.searchIndex[index];
            let score = 0;

            // Title match (higher weight)
            if (indexed.title.includes(searchTerm)) score += 100;
            
            // Description match
            if (indexed.description.includes(searchTerm)) score += 50;
            
            // Tag match
            indexed.tags.forEach(tag => {
                if (tag.includes(searchTerm)) score += 30;
            });

            return { todo, score };
        });

        return results
            .filter(result => result.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(result => result.todo);
    }
}`
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

    // To-Do App Functions
    const addTodo = () => {
        if (!newTodo.trim()) return;

        const todo = {
            id: Date.now(),
            title: newTodo.trim(),
            description: newDescription.trim(),
            completed: false,
            starred: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        setTodos([...todos, todo]);
        setNewTodo('');
        setNewDescription('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
                : todo
        ));
    };

    const toggleStar = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, starred: !todo.starred, updatedAt: new Date().toISOString() }
                : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditing = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.title);
    };

    const saveEdit = (id) => {
        if (!editText.trim()) return;

        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, title: editText.trim(), updatedAt: new Date().toISOString() }
                : todo
        ));
        setEditingId(null);
        setEditText('');
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const clearAll = () => {
        setTodos([]);
    };

    const filteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'starred':
                return todos.filter(todo => todo.starred);
            default:
                return todos;
        }
    };

    // Tab Content
    const tabContents = {
        overview: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Project Overview
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Build a fully-featured To-Do application that demonstrates your mastery of <span className="font-bold text-emerald-600 dark:text-emerald-400">JavaScript fundamentals</span>, <span className="font-bold text-blue-600 dark:text-blue-400">DOM manipulation</span>, <span className="font-bold text-purple-600 dark:text-purple-400">event handling</span>, and <span className="font-bold text-indigo-600 dark:text-indigo-400">browser storage</span>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">Real-World App</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Industry-standard project structure and patterns</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Full Stack</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Frontend UI + Backend logic + Data persistence</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Skills You'll Demonstrate
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="font-bold text-blue-600 dark:text-blue-400">DOM Manipulation</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Dynamic UI updates</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="font-bold text-green-600 dark:text-green-400">Event Handling</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">User interactions</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="font-bold text-purple-600 dark:text-purple-400">Local Storage</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Data persistence</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <div className="font-bold text-yellow-600 dark:text-yellow-400">State Management</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">App state control</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        requirements: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Project Requirements
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Your To-Do app must implement all core features and at least 3 advanced features:
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Core Features (Required):
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Add new todos with title and optional description</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Mark todos as complete/incomplete</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Delete individual todos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Filter todos (All/Active/Completed/Starred)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Persist todos using localStorage</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Display statistics (total/active/completed)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Advanced Features (Choose 3+):
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Edit todo items inline</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Star/important todos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Drag and drop reordering</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Keyboard shortcuts</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Search/filter by text</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Due dates and reminders</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Categories/tags for todos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Export/import todos (JSON)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Success Criteria
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <span className="font-medium">Code Quality</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">ES6+ Syntax</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <span className="font-medium">Error Handling</span>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs">Graceful Degradation</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <span className="font-medium">Performance</span>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs">Optimized Updates</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <span className="font-medium">UX/UI</span>
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Intuitive Design</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        implementation: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        Implementation Guide
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Step 1: Project Setup</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// 1. Create project structure
📁 todo-app/
├── 📄 index.html        # Main HTML file
├── 📄 style.css         # Styles
├── 📄 app.js           # Main JavaScript
├── 📄 todoManager.js   # Business logic
└── 📄 storage.js       # Data persistence

// 2. HTML Structure
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript To-Do App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 My To-Do List</h1>
            <div class="stats">...</div>
        </header>
        
        <form id="add-todo-form">
            <input type="text" id="todo-input" placeholder="Add new todo...">
            <button type="submit">Add</button>
        </form>
        
        <div class="filters">...</div>
        
        <div id="todo-list" class="todo-list">
            <!-- Todos will be inserted here -->
        </div>
        
        <footer>
            <button id="clear-completed">Clear Completed</button>
        </footer>
    </div>
    
    <script src="app.js"></script>
</body>
</html>`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Step 2: Architecture Pattern</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Recommended: Model-View-Controller (MVC) Pattern

// MODEL - Data and Business Logic
class TodoModel {
    constructor() {
        this.todos = [];
        this.load();
    }
    
    addTodo(title) { /* ... */ }
    toggleTodo(id) { /* ... */ }
    deleteTodo(id) { /* ... */ }
    save() { /* ... */ }
    load() { /* ... */ }
}

// VIEW - UI Rendering
class TodoView {
    constructor() {
        this.app = document.getElementById('app');
    }
    
    render(todos) { /* ... */ }
    bindAddTodo(handler) { /* ... */ }
    bindToggleTodo(handler) { /* ... */ }
    bindDeleteTodo(handler) { /* ... */ }
}

// CONTROLLER - Event Handling
class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        // Bind events
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        
        // Initial render
        this.onTodoListChanged(this.model.todos);
    }
    
    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText);
        this.onTodoListChanged(this.model.todos);
    }
    
    // ... other handlers
    
    onTodoListChanged = (todos) => {
        this.view.render(todos);
        this.model.save();
    }
}

// Initialize App
const app = new TodoController(new TodoModel(), new TodoView());`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="project1" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold animate-pulse">
                                PROJECT 1: REAL-WORLD APPLICATION
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Award className="w-4 h-4" /> Capstone Project
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Apply Everything You've Learned in a Real Application
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Build a professional-grade To-Do application from scratch. This project will test and consolidate all the JavaScript skills you've acquired throughout the course.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm font-medium">4-6 hours</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Target className="w-4 h-4 text-teal-500" />
                                <span className="text-sm font-medium">9+ Features</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-cyan-500" />
                                <span className="text-sm font-medium">Portfolio Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Tabs */}
                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['overview', 'requirements', 'implementation'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${activeTab === tab
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {tab === 'overview' && <BookOpen className="w-4 h-4" />}
                                    {tab === 'requirements' && <Target className="w-4 h-4" />}
                                    {tab === 'implementation' && <Code className="w-4 h-4" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="animate-in fade-in duration-500">
                            {tabContents[activeTab]}
                        </div>
                    </div>

                    {/* Live To-Do App Demo */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Live To-Do App Demo
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Smartphone className="w-4 h-4" />
                                <span className="hidden sm:inline">Interactive Preview</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* To-Do App Interface */}
                            <div className="lg:col-span-2">
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl">
                                    <div className="p-6 border-b border-slate-300 dark:border-slate-700">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                <List className="w-5 h-5 text-emerald-500" />
                                                My To-Do List
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={clearCompleted}
                                                    className="px-3 py-1 rounded-lg bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 text-sm"
                                                >
                                                    Clear Completed
                                                </button>
                                                <button
                                                    onClick={clearAll}
                                                    className="px-3 py-1 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 text-sm"
                                                >
                                                    Clear All
                                                </button>
                                            </div>
                                        </div>

                                        {/* Add Todo Form */}
                                        <div className="mb-6">
                                            <div className="flex gap-2 mb-3">
                                                <input
                                                    type="text"
                                                    value={newTodo}
                                                    onChange={(e) => setNewTodo(e.target.value)}
                                                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                                                    placeholder="What needs to be done?"
                                                    className="flex-1 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                />
                                                <button
                                                    onClick={addTodo}
                                                    disabled={!newTodo.trim()}
                                                    className={`px-4 py-3 rounded-lg font-bold transition-all ${newTodo.trim()
                                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/30'
                                                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                                        }`}
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <textarea
                                                value={newDescription}
                                                onChange={(e) => setNewDescription(e.target.value)}
                                                placeholder="Add description (optional)"
                                                className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                                                rows="2"
                                            />
                                        </div>

                                        {/* Filters */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {['all', 'active', 'completed', 'starred'].map((f) => (
                                                <button
                                                    key={f}
                                                    onClick={() => setFilter(f)}
                                                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${filter === f
                                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                                                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                                                        }`}
                                                >
                                                    {f === 'all' && '📋 All'}
                                                    {f === 'active' && '⚡ Active'}
                                                    {f === 'completed' && '✅ Completed'}
                                                    {f === 'starred' && '⭐ Starred'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Todo List */}
                                    <div className="p-6 max-h-96 overflow-y-auto">
                                        {filteredTodos().length === 0 ? (
                                            <div className="text-center py-12 text-slate-400">
                                                <div className="text-4xl mb-4">📝</div>
                                                <div className="font-bold text-lg mb-2">No todos found</div>
                                                <p className="text-sm">{
                                                    filter === 'all' ? 'Add your first todo above!' :
                                                        filter === 'active' ? 'No active todos' :
                                                            filter === 'completed' ? 'No completed todos' :
                                                                'No starred todos'
                                                }</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                {filteredTodos().map((todo) => (
                                                    <div
                                                        key={todo.id}
                                                        className={`p-4 rounded-xl border transition-all ${todo.completed
                                                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700'
                                                            } ${todo.starred ? 'border-l-4 border-l-yellow-500' : ''}`}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            {/* Checkbox */}
                                                            <button
                                                                onClick={() => toggleTodo(todo.id)}
                                                                className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${todo.completed
                                                                    ? 'bg-green-500 text-white'
                                                                    : 'border-2 border-slate-400 dark:border-slate-600'
                                                                    }`}
                                                            >
                                                                {todo.completed && <CheckCircle className="w-4 h-4" />}
                                                            </button>

                                                            {/* Todo Content */}
                                                            <div className="flex-1 min-w-0">
                                                                {editingId === todo.id ? (
                                                                    <div className="space-y-2">
                                                                        <input
                                                                            type="text"
                                                                            value={editText}
                                                                            onChange={(e) => setEditText(e.target.value)}
                                                                            className="w-full p-2 rounded bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
                                                                            autoFocus
                                                                        />
                                                                        <div className="flex gap-2">
                                                                            <button
                                                                                onClick={() => saveEdit(todo.id)}
                                                                                className="px-3 py-1 rounded bg-emerald-500 text-white text-sm"
                                                                            >
                                                                                Save
                                                                            </button>
                                                                            <button
                                                                                onClick={() => setEditingId(null)}
                                                                                className="px-3 py-1 rounded bg-slate-300 dark:bg-slate-700 text-sm"
                                                                            >
                                                                                Cancel
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div className={`font-medium ${todo.completed ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                                                                            {todo.title}
                                                                        </div>
                                                                        {todo.description && (
                                                                            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                                                                {todo.description}
                                                                            </div>
                                                                        )}
                                                                        <div className="text-xs text-slate-500 mt-2 flex items-center gap-2">
                                                                            <Clock className="w-3 h-3" />
                                                                            {new Date(todo.createdAt).toLocaleDateString()}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>

                                                            {/* Actions */}
                                                            <div className="flex items-center gap-1">
                                                                <button
                                                                    onClick={() => toggleStar(todo.id)}
                                                                    className={`p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/30 ${todo.starred ? 'text-yellow-500' : 'text-slate-400 hover:text-yellow-500'}`}
                                                                >
                                                                    {todo.starred ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                                                                </button>
                                                                <button
                                                                    onClick={() => startEditing(todo)}
                                                                    className="p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-500"
                                                                >
                                                                    <Edit className="w-4 h-4" />
                                                                </button>
                                                                <button
                                                                    onClick={() => deleteTodo(todo.id)}
                                                                    className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Stats Bar */}
                                    <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-300 dark:border-slate-700">
                                        <div className="flex justify-between items-center text-sm">
                                            <div className="text-slate-600 dark:text-slate-400">
                                                Showing <span className="font-bold">{filteredTodos().length}</span> of <span className="font-bold">{todos.length}</span> todos
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="text-center">
                                                    <div className="font-bold text-emerald-600">{stats.total}</div>
                                                    <div className="text-xs text-slate-500">Total</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-bold text-blue-600">{stats.active}</div>
                                                    <div className="text-xs text-slate-500">Active</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-bold text-green-600">{stats.completed}</div>
                                                    <div className="text-xs text-slate-500">Done</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="font-bold text-yellow-600">{stats.starred}</div>
                                                    <div className="text-xs text-slate-500">Starred</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Examples Panel */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-fit">
                                <div className="flex justify-between items-center px-6 py-4 bg-slate-900/50 border-b border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-sm font-mono text-slate-400">todo_app.js</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => runCode(codeExamples.structure)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                        >
                                            <Play className="w-4 h-4 fill-current" />
                                            Run Code
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(codeExamples.structure)}
                                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() => runCode(codeExamples.structure)}
                                            className="px-3 py-1 rounded-lg bg-emerald-900/50 hover:bg-emerald-800 text-emerald-300 hover:text-white text-xs font-mono border border-emerald-800"
                                        >
                                            Structure
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.uiComponents)}
                                            className="px-3 py-1 rounded-lg bg-blue-900/50 hover:bg-blue-800 text-blue-300 hover:text-white text-xs font-mono border border-blue-800"
                                        >
                                            UI Components
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.advancedFeatures)}
                                            className="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-purple-300 hover:text-white text-xs font-mono border border-purple-800"
                                        >
                                            Advanced
                                        </button>
                                    </div>
                                    <pre className="font-mono text-slate-300 text-sm overflow-x-auto max-h-96">
                                        <code>{codeExamples.structure}</code>
                                    </pre>
                                </div>

                                {/* Output Console */}
                                {output && (
                                    <div className="border-t border-slate-800 bg-black/50">
                                        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-green-500" />
                                                <span className="text-sm font-bold text-slate-400">CODE OUTPUT</span>
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
                        </div>
                    </section>

                    {/* Practice Exercise */}
                    <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-emerald-200 dark:border-emerald-900/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 animate-bounce">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Implementation</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Build Your Own To-Do App</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">Project Mode</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Challenge:</span> Implement the To-Do app according to the requirements. Use the code editor below to write your solution.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <span>Create a <span className="font-bold text-emerald-600">TodoApp class</span> with all required methods</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                        <span>Implement <span className="font-bold text-teal-600">localStorage persistence</span></span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <span>Add at least <span className="font-bold text-cyan-600">3 advanced features</span></span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Include <span className="font-bold text-blue-600">error handling</span> and validation</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">my_todo_app.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Implement your To-Do App here
class TodoApp {
    constructor() {
        this.todos = [];
        this.filter = 'all';
        this.loadFromStorage();
        this.init();
    }

    // Load todos from localStorage
    loadFromStorage() {
        // Your code here
    }

    // Save todos to localStorage
    saveToStorage() {
        // Your code here
    }

    // Add new todo
    addTodo(title, description = '') {
        // Your code here
    }

    // Toggle todo completion
    toggleTodo(id) {
        // Your code here
    }

    // Delete todo
    deleteTodo(id) {
        // Your code here
    }

    // Filter todos
    getFilteredTodos() {
        // Your code here
    }

    // Get statistics
    getStats() {
        // Your code here
    }

    // Initialize app
    init() {
        // Setup event listeners and initial render
    }

    // Render todos to DOM
    render() {
        // Update the UI with current todos
    }

    // ADVANCED FEATURES (choose 3+)
    // 1. Edit todos
    editTodo(id, newTitle) {
        // Your code here
    }

    // 2. Star/unstar todos
    toggleStar(id) {
        // Your code here
    }

    // 3. Clear completed todos
    clearCompleted() {
        // Your code here
    }

    // 4. Search todos
    searchTodos(query) {
        // Your code here
    }

    // 5. Export/import todos
    exportToJSON() {
        // Your code here
    }

    importFromJSON(json) {
        // Your code here
    }
}

// Create and initialize the app
const app = new TodoApp();`}
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
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test My Implementation</span>
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
                                            <span className="font-bold text-slate-300">Project Output</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Project Mode</span>
                                        </div>
                                    </div>
                                    <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto p-4 bg-black/30 rounded-lg">
                                        {practiceOutput}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Project Submission & Next Steps */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-blue-600" />
                                    Project Submission
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Save your code in a GitHub repository</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Include a README with setup instructions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Deploy to GitHub Pages or Netlify</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Test all features thoroughly</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-purple-600" />
                                    Next Project: Weather App
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    Ready for your next challenge? The Weather App project will teach you:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Working with APIs (OpenWeatherMap)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                                        <span>Async/await with real data</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <span>Geolocation API</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Dynamic UI updates based on data</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <a
                            href="/lesson23"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Browser Storage</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Project Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-1/3 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Project 1 • 1 of 3 Projects
                            </div>
                        </div>

                        <a
                            href="/project2"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Weather App Project</span>
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