import React, { useState } from 'react';
import {
    Calendar, Code, Play, Terminal, Lightbulb,
    ChevronRight, Copy, RotateCcw, Calculator,
    Hash, Filter, RefreshCw, ChevronLeft,
    Search, SortAsc, Trash2, Plus, Minus, Layers, BarChart,
    ArrowUpDown, Split, Merge, BookOpen, Brain,
    Box, Zap, Cpu, FunctionSquare, GitBranch,
    Workflow, Palette, Target, Puzzle, Map,
    Clock, CalendarDays, Timer, Clock4,
    TrendingUp, PieChart, Sigma, Percent,
    DollarSign, Hash as HashIcon, Divide,
    Square, Target as TargetIcon,
    ChartBar, ChartLine, ChartArea,
    Infinity as InfinityIcon, Pi,
    Globe, Sun, Moon, Watch
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson13() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === DATE OBJECT FUNDAMENTALS ===
// 1. Creating Dates
const now = new Date();
console.log('Current date:', now);

const specificDate = new Date('2024-01-15');
console.log('Specific date:', specificDate);

const timestampDate = new Date(1700000000000);
console.log('From timestamp:', timestampDate);

// 2. Date Components
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth()); // January = 0
console.log('Date:', now.getDate());
console.log('Day (0-6):', now.getDay()); // Sunday = 0
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());
console.log('Milliseconds:', now.getMilliseconds());

// 3. Date Formatting
console.log('ISO String:', now.toISOString());
console.log('Locale String:', now.toLocaleString());
console.log('Date String:', now.toDateString());
console.log('Time String:', now.toTimeString());
console.log('Locale Date:', now.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}));

// === DATE MANIPULATION ===
// 4. Modifying Dates
const date = new Date();
date.setFullYear(2025);
date.setMonth(5); // June (0-indexed)
date.setDate(20);
date.setHours(14, 30, 0); // 2:30 PM
console.log('Modified date:', date);

// 5. Date Arithmetic
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log('Tomorrow:', tomorrow);

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log('Next week:', nextWeek);

const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1);
console.log('Last month:', lastMonth);

// 6. Date Comparison
const date1 = new Date('2024-01-15');
const date2 = new Date('2024-02-20');

console.log('date1 < date2:', date1 < date2); // true
console.log('date1 > date2:', date1 > date2); // false
console.log('date1 === date2:', date1.getTime() === date2.getTime()); // false

// === TIME DIFFERENCES ===
// 7. Calculating Differences
function getDateDifference(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    
    return {
        milliseconds: diffInMs,
        seconds: Math.floor(diffInMs / 1000),
        minutes: diffInMinutes,
        hours: diffInHours,
        days: diffInDays,
        weeks: Math.floor(diffInDays / 7),
        months: Math.floor(diffInDays / 30),
        years: Math.floor(diffInDays / 365)
    };
}

const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');
console.log('Date difference:', getDateDifference(startDate, endDate));

// === MATH OBJECT ===
// 8. Basic Math Operations
console.log('Math.PI:', Math.PI);
console.log('Math.E:', Math.E);
console.log('Math.abs(-5):', Math.abs(-5));
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('Math.floor(4.8):', Math.floor(4.8));
console.log('Math.round(4.5):', Math.round(4.5));
console.log('Math.max(1, 5, 3):', Math.max(1, 5, 3));
console.log('Math.min(1, 5, 3):', Math.min(1, 5, 3));
console.log('Math.sqrt(25):', Math.sqrt(25));
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8
console.log('2 ** 3:', 2 ** 3); // ES7 exponentiation operator

// 9. Random Numbers
console.log('Random (0-1):', Math.random());
console.log('Random integer (1-10):', Math.floor(Math.random() * 10) + 1);
console.log('Random integer (min-max):', getRandomInt(50, 100));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 10. Trigonometric Functions
const angleInDegrees = 45;
const angleInRadians = angleInDegrees * (Math.PI / 180);

console.log('sin(45°):', Math.sin(angleInRadians));
console.log('cos(45°):', Math.cos(angleInRadians));
console.log('tan(45°):', Math.tan(angleInRadians));
console.log('atan(1):', Math.atan(1) * (180 / Math.PI), 'degrees');

// === PRACTICAL EXAMPLES ===
// 11. Age Calculator
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

const birthDate = new Date('1990-05-15');
console.log('Age:', calculateAge(birthDate));

// 12. Business Days Calculator
function getBusinessDays(startDate, endDate) {
    let count = 0;
    const current = new Date(startDate);
    
    while (current <= endDate) {
        const dayOfWeek = current.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            count++;
        }
        current.setDate(current.getDate() + 1);
    }
    
    return count;
}

const start = new Date('2024-01-01');
const end = new Date('2024-01-10');
console.log('Business days:', getBusinessDays(start, end));

// 13. Format Currency
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

console.log('Formatted currency:', formatCurrency(1234.56));
console.log('Formatted EUR:', formatCurrency(1234.56, 'EUR'));

// 14. Generate Random Password
function generatePassword(length = 12) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

console.log('Random password:', generatePassword());`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const runCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args);
            };

            try {
                // eslint-disable-next-line no-eval
                eval(code);
            } catch (e) {
                console.log("Runtime Error:", e.message);
            }

            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    // DATE & MATH CONCEPTS
    const concepts = [
        {
            category: "Date Creation & Basics",
            concepts: [
                {
                    name: "new Date()",
                    icon: <Calendar className="w-4 h-4 text-blue-500" />,
                    description: "Create date objects with current time or specific values",
                    syntax: "new Date() / new Date('2024-01-15') / new Date(year, month, ...)",
                    example: "const now = new Date(); const specific = new Date('2024-12-25');",
                    useCase: "Getting current date/time or creating specific dates"
                },
                {
                    name: "Date.parse()",
                    icon: <Clock className="w-4 h-4 text-purple-500" />,
                    description: "Parse date string and return timestamp",
                    syntax: "Date.parse(dateString)",
                    example: "const timestamp = Date.parse('2024-01-15'); // 1705276800000",
                    useCase: "Converting date strings to timestamps"
                },
                {
                    name: "Date.now()",
                    icon: <Timer className="w-4 h-4 text-green-500" />,
                    description: "Returns current timestamp in milliseconds",
                    syntax: "Date.now()",
                    example: "const timestamp = Date.now(); // 1705276800000",
                    useCase: "Performance measurement, unique IDs, timing"
                },
                {
                    name: "Date.UTC()",
                    icon: <Globe className="w-4 h-4 text-yellow-500" />,
                    description: "Returns timestamp for UTC date",
                    syntax: "Date.UTC(year, month, day, hours, minutes, seconds, ms)",
                    example: "const utcTime = Date.UTC(2024, 0, 15);",
                    useCase: "Working with UTC dates across timezones"
                }
            ]
        },
        {
            category: "Date Methods",
            concepts: [
                {
                    name: "Getter Methods",
                    icon: <CalendarDays className="w-4 h-4 text-red-500" />,
                    description: "Extract date components (year, month, day, etc.)",
                    syntax: "date.getFullYear(), date.getMonth(), date.getDate(), ...",
                    example: "const year = date.getFullYear(); const month = date.getMonth();",
                    useCase: "Extracting specific parts of a date"
                },
                {
                    name: "Setter Methods",
                    icon: <Watch className="w-4 h-4 text-orange-500" />,
                    description: "Modify date components",
                    syntax: "date.setFullYear(year), date.setMonth(month), ...",
                    example: "date.setFullYear(2025); date.setMonth(11); // December",
                    useCase: "Modifying dates for calculations"
                },
                {
                    name: "Formatting Methods",
                    icon: <Clock4 className="w-4 h-4 text-pink-500" />,
                    description: "Convert dates to strings in various formats",
                    syntax: "date.toISOString(), date.toLocaleString(), date.toString()",
                    example: "date.toLocaleDateString('en-US', { weekday: 'long' });",
                    useCase: "Displaying dates in user-friendly formats"
                },
                {
                    name: "UTC Methods",
                    icon: <Sun className="w-4 h-4 text-teal-500" />,
                    description: "Work with dates in UTC timezone",
                    syntax: "date.getUTCFullYear(), date.getUTCHours(), etc.",
                    example: "const utcHours = date.getUTCHours();",
                    useCase: "International applications, server-side date handling"
                }
            ]
        },
        {
            category: "Date Operations",
            concepts: [
                {
                    name: "Date Arithmetic",
                    icon: <Calculator className="w-4 h-4 text-blue-400" />,
                    description: "Add/subtract time from dates",
                    syntax: "date.setDate(date.getDate() + days)",
                    example: "const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);",
                    useCase: "Calculating future/past dates"
                },
                {
                    name: "Date Comparison",
                    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
                    description: "Compare dates using timestamps",
                    syntax: "date1.getTime() > date2.getTime()",
                    example: "if (date1 > date2) { /* date1 is later */ }",
                    useCase: "Sorting dates, checking if date is in range"
                },
                {
                    name: "Time Difference",
                    icon: <Timer className="w-4 h-4 text-purple-400" />,
                    description: "Calculate difference between dates",
                    syntax: "const diff = date2 - date1; // milliseconds",
                    example: "const daysDiff = Math.floor((date2 - date1) / (1000*60*60*24));",
                    useCase: "Age calculation, countdowns, time elapsed"
                },
                {
                    name: "Date Validation",
                    icon: <TargetIcon className="w-4 h-4 text-yellow-400" />,
                    description: "Check if date is valid",
                    syntax: "!isNaN(date.getTime())",
                    example: "function isValidDate(d) { return d instanceof Date && !isNaN(d); }",
                    useCase: "Validating user input dates"
                }
            ]
        },
        {
            category: "Math Basics",
            concepts: [
                {
                    name: "Math Constants",
                    icon: <Pi className="w-4 h-4 text-red-600" />,
                    description: "Mathematical constants (π, e, etc.)",
                    syntax: "Math.PI, Math.E, Math.SQRT2, Math.LN2",
                    example: "const circumference = 2 * Math.PI * radius;",
                    useCase: "Geometric calculations, scientific computing"
                },
                {
                    name: "Rounding Methods",
                    icon: <HashIcon className="w-4 h-4 text-orange-600" />,
                    description: "Round numbers up, down, or to nearest",
                    syntax: "Math.round(), Math.floor(), Math.ceil(), Math.trunc()",
                    example: "Math.round(4.7); // 5, Math.floor(4.7); // 4",
                    useCase: "Financial calculations, pagination, display formatting"
                },
                {
                    name: "Min/Max",
                    icon: <ChartBar className="w-4 h-4 text-green-600" />,
                    description: "Find minimum or maximum values",
                    syntax: "Math.min(...values), Math.max(...values)",
                    example: "const highest = Math.max(1, 5, 3, 9); // 9",
                    useCase: "Data analysis, validation, finding extremes"
                },
                {
                    name: "Random Numbers",
                    icon: <InfinityIcon className="w-4 h-4 text-purple-600" />,
                    description: "Generate random numbers between 0-1",
                    syntax: "Math.random()",
                    example: "const random = Math.random(); // 0 ≤ n < 1",
                    useCase: "Games, simulations, random sampling"
                }
            ]
        },
        {
            category: "Advanced Math",
            concepts: [
                {
                    name: "Exponents & Roots",
                    icon: <Box className="w-4 h-4 text-blue-700" />,
                    description: "Power and root calculations",
                    syntax: "Math.pow(base, exp), Math.sqrt(x), Math.cbrt(x)",
                    example: "Math.pow(2, 3); // 8, Math.sqrt(16); // 4",
                    useCase: "Scientific calculations, 3D graphics, physics"
                },
                {
                    name: "Trigonometry",
                    icon: <Sigma className="w-4 h-4 text-green-700" />,
                    description: "Sine, cosine, tangent and their inverses",
                    syntax: "Math.sin(x), Math.cos(x), Math.tan(x)",
                    example: "Math.sin(Math.PI / 2); // 1",
                    useCase: "Graphics, animations, physics, games"
                },
                {
                    name: "Logarithms",
                    icon: <ChartLine className="w-4 h-4 text-purple-700" />,
                    description: "Natural and base-10 logarithms",
                    syntax: "Math.log(x), Math.log10(x), Math.log2(x)",
                    example: "Math.log(Math.E); // 1",
                    useCase: "Scientific computing, data scaling, algorithms"
                },
                {
                    name: "Absolute & Sign",
                    icon: <ChartArea className="w-4 h-4 text-red-700" />,
                    description: "Absolute value and sign functions",
                    syntax: "Math.abs(x), Math.sign(x)",
                    example: "Math.abs(-5); // 5, Math.sign(-10); // -1",
                    useCase: "Distance calculations, direction, validation"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Date Manipulation Practice",
            description: "Practice creating, formatting, and manipulating dates",
            difficulty: "Beginner",
            starterCode: `// TASK 1: Date Formatter
// Create function formatDate(date, format = 'YYYY-MM-DD') that:
// 1. Returns date in specified format
// 2. Supported formats: 'YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY'
// 3. Handle invalid dates

// TASK 2: Age Calculator
// Create function getAge(birthDate) that:
// 1. Returns age in years
// 2. Accounts for month and day
// 3. Returns object with years, months, days

// TASK 3: Business Days Calculator
// Create function countBusinessDays(startDate, endDate) that:
// 1. Counts days excluding weekends
// 2. Optionally exclude holidays array
// 3. Handle date range validation

// TASK 4: Date Range Generator
// Create function getDateRange(startDate, endDate, interval = 'day') that:
// 1. Returns array of dates between start and end
// 2. Interval can be: 'day', 'week', 'month', 'year'
// 3. Include/exclude endpoints based on parameter`,
            solution: `// SOLUTION 1: Date Formatter
function formatDate(date, format = 'YYYY-MM-DD') {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid date');
    }
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    switch(format) {
        case 'YYYY-MM-DD':
            return \`\${year}-\${month}-\${day}\`;
        case 'DD/MM/YYYY':
            return \`\${day}/\${month}/\${year}\`;
        case 'MMM DD, YYYY':
            return \`\${monthNames[date.getMonth()]} \${day}, \${year}\`;
        default:
            throw new Error('Unsupported format');
    }
}

const today = new Date();
console.log('YYYY-MM-DD:', formatDate(today, 'YYYY-MM-DD'));
console.log('DD/MM/YYYY:', formatDate(today, 'DD/MM/YYYY'));
console.log('MMM DD, YYYY:', formatDate(today, 'MMM DD, YYYY'));

// SOLUTION 2: Age Calculator
function getAge(birthDate) {
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust negative months/days
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    
    // Calculate total days
    const timeDiff = today.getTime() - birthDate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    return {
        years,
        months,
        days,
        totalDays
    };
}

const birthDate = new Date('1990-05-15');
console.log('Age details:', getAge(birthDate));

// SOLUTION 3: Business Days Calculator
function countBusinessDays(startDate, endDate, holidays = []) {
    let count = 0;
    const current = new Date(startDate);
    const end = new Date(endDate);
    
    // Reset times for accurate day comparison
    current.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    // Convert holidays to date strings for comparison
    const holidaySet = new Set(
        holidays.map(h => new Date(h).toDateString())
    );
    
    while (current <= end) {
        const dayOfWeek = current.getDay();
        const dateString = current.toDateString();
        
        // Check if it's a weekday and not a holiday
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidaySet.has(dateString)) {
            count++;
        }
        
        // Move to next day
        current.setDate(current.getDate() + 1);
    }
    
    return count;
}

const start = new Date('2024-01-01');
const end = new Date('2024-01-15');
const holidays = ['2024-01-01', '2024-01-08']; // Example holidays
console.log('Business days:', countBusinessDays(start, end, holidays));

// SOLUTION 4: Date Range Generator
function getDateRange(startDate, endDate, interval = 'day', includeEnd = true) {
    const dates = [];
    const current = new Date(startDate);
    const end = new Date(endDate);
    
    // Reset times
    current.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    if (!includeEnd) {
        end.setDate(end.getDate() - 1);
    }
    
    while (current <= end) {
        dates.push(new Date(current));
        
        switch(interval) {
            case 'day':
                current.setDate(current.getDate() + 1);
                break;
            case 'week':
                current.setDate(current.getDate() + 7);
                break;
            case 'month':
                current.setMonth(current.getMonth() + 1);
                break;
            case 'year':
                current.setFullYear(current.getFullYear() + 1);
                break;
            default:
                throw new Error('Invalid interval');
        }
    }
    
    return dates;
}

const rangeStart = new Date('2024-01-01');
const rangeEnd = new Date('2024-01-10');
console.log('Daily range:', getDateRange(rangeStart, rangeEnd, 'day'));
console.log('Weekly range:', getDateRange(rangeStart, rangeEnd, 'week'));`,
            hint: "Use Date methods like getDate(), setDate(), getMonth(), setMonth(). Remember months are 0-indexed. Use getTime() for date comparisons."
        },
        {
            title: "Math Operations & Calculations",
            description: "Practice mathematical operations and calculations",
            difficulty: "Intermediate",
            starterCode: `// TASK 1: Financial Calculator
// Create financial calculator with functions:
// 1. calculateCompoundInterest(principal, rate, time, compoundsPerYear)
// 2. calculateLoanPayment(principal, annualRate, years)
// 3. calculateInvestmentGrowth(initial, monthlyContribution, years, annualReturn)

// TASK 2: Statistics Functions
// Create statistics utility with functions:
// 1. calculateMean(numbers) - average
// 2. calculateMedian(numbers) - middle value
// 3. calculateMode(numbers) - most frequent
// 4. calculateStandardDeviation(numbers)

// TASK 3: Geometry Calculator
// Create geometry functions:
// 1. circleArea(radius), circleCircumference(radius)
// 2. triangleArea(base, height), trianglePerimeter(side1, side2, side3)
// 3. distanceBetweenPoints(x1, y1, x2, y2)
// 4. isPointInCircle(pointX, pointY, circleX, circleY, radius)

// TASK 4: Random Data Generator
// Create random data generator:
// 1. generateRandomInteger(min, max)
// 2. generateRandomFloat(min, max, decimals)
// 3. generateRandomColor()
// 4. generateRandomDate(startDate, endDate)`,
            solution: `// SOLUTION 1: Financial Calculator
class FinancialCalculator {
    static calculateCompoundInterest(principal, annualRate, years, compoundsPerYear = 12) {
        const rate = annualRate / 100;
        const amount = principal * Math.pow(
            1 + rate / compoundsPerYear,
            compoundsPerYear * years
        );
        const interest = amount - principal;
        
        return {
            principal,
            amount,
            interest,
            effectiveAnnualRate: Math.pow(1 + rate/compoundsPerYear, compoundsPerYear) - 1
        };
    }
    
    static calculateLoanPayment(principal, annualRate, years) {
        const monthlyRate = annualRate / 100 / 12;
        const payments = years * 12;
        
        if (monthlyRate === 0) {
            return principal / payments;
        }
        
        const payment = principal * 
            (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
            (Math.pow(1 + monthlyRate, payments) - 1);
        
        const totalPayment = payment * payments;
        const totalInterest = totalPayment - principal;
        
        return {
            monthlyPayment: Math.round(payment * 100) / 100,
            totalPayment: Math.round(totalPayment * 100) / 100,
            totalInterest: Math.round(totalInterest * 100) / 100
        };
    }
    
    static calculateInvestmentGrowth(initial, monthlyContribution, years, annualReturn) {
        const monthlyReturn = annualReturn / 100 / 12;
        const months = years * 12;
        
        // Future value of initial investment
        const futureValueInitial = initial * Math.pow(1 + monthlyReturn, months);
        
        // Future value of monthly contributions (annuity)
        let futureValueContributions = 0;
        if (monthlyReturn > 0) {
            futureValueContributions = monthlyContribution * 
                (Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn;
        } else {
            futureValueContributions = monthlyContribution * months;
        }
        
        const totalValue = futureValueInitial + futureValueContributions;
        const totalContributions = initial + (monthlyContribution * months);
        const totalEarnings = totalValue - totalContributions;
        
        return {
            totalValue: Math.round(totalValue * 100) / 100,
            totalContributions: Math.round(totalContributions * 100) / 100,
            totalEarnings: Math.round(totalEarnings * 100) / 100,
            roi: Math.round((totalEarnings / totalContributions) * 100 * 100) / 100
        };
    }
}

console.log('Compound Interest:', 
    FinancialCalculator.calculateCompoundInterest(1000, 5, 10, 12));
console.log('Loan Payment:', 
    FinancialCalculator.calculateLoanPayment(200000, 4.5, 30));
console.log('Investment Growth:', 
    FinancialCalculator.calculateInvestmentGrowth(5000, 200, 10, 7));

// SOLUTION 2: Statistics Functions
class Statistics {
    static calculateMean(numbers) {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
    
    static calculateMedian(numbers) {
        const sorted = [...numbers].sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        
        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }
        return sorted[middle];
    }
    
    static calculateMode(numbers) {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];
        
        numbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
            if (frequency[num] > maxFreq) {
                maxFreq = frequency[num];
                modes = [num];
            } else if (frequency[num] === maxFreq) {
                modes.push(num);
            }
        });
        
        return modes.length === numbers.length ? [] : [...new Set(modes)];
    }
    
    static calculateStandardDeviation(numbers) {
        const mean = this.calculateMean(numbers);
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        const variance = this.calculateMean(squaredDifferences);
        return Math.sqrt(variance);
    }
    
    static calculateStatistics(numbers) {
        return {
            count: numbers.length,
            mean: this.calculateMean(numbers),
            median: this.calculateMedian(numbers),
            mode: this.calculateMode(numbers),
            range: Math.max(...numbers) - Math.min(...numbers),
            standardDeviation: this.calculateStandardDeviation(numbers),
            variance: Math.pow(this.calculateStandardDeviation(numbers), 2)
        };
    }
}

const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
console.log('Statistics:', Statistics.calculateStatistics(data));

// SOLUTION 3: Geometry Calculator
class GeometryCalculator {
    static circleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    
    static circleCircumference(radius) {
        return 2 * Math.PI * radius;
    }
    
    static triangleArea(base, height) {
        return 0.5 * base * height;
    }
    
    static trianglePerimeter(side1, side2, side3) {
        return side1 + side2 + side3;
    }
    
    static distanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    static isPointInCircle(pointX, pointY, circleX, circleY, radius) {
        const distance = this.distanceBetweenPoints(pointX, pointY, circleX, circleY);
        return distance <= radius;
    }
    
    static rectangleArea(width, height) {
        return width * height;
    }
    
    static rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
}

console.log('Circle area (r=5):', GeometryCalculator.circleArea(5));
console.log('Distance between (0,0) and (3,4):', 
    GeometryCalculator.distanceBetweenPoints(0, 0, 3, 4));
console.log('Is point (2,2) in circle at (0,0) with r=3?',
    GeometryCalculator.isPointInCircle(2, 2, 0, 0, 3));

// SOLUTION 4: Random Data Generator
class RandomGenerator {
    static integer(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    static float(min, max, decimals = 2) {
        const random = Math.random() * (max - min) + min;
        return Math.round(random * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
    
    static color() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    static date(startDate, endDate) {
        const start = startDate.getTime();
        const end = endDate.getTime();
        const randomTime = start + Math.random() * (end - start);
        return new Date(randomTime);
    }
    
    static array(length, generator) {
        return Array.from({ length }, generator);
    }
    
    static choice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

console.log('Random integer 1-10:', RandomGenerator.integer(1, 10));
console.log('Random float 0-1:', RandomGenerator.float(0, 1, 3));
console.log('Random color:', RandomGenerator.color());
console.log('Random date in 2024:', 
    RandomGenerator.date(new Date('2024-01-01'), new Date('2024-12-31')));
console.log('Random choice:', RandomGenerator.choice(['A', 'B', 'C', 'D']));`,
            hint: "For financial calculations, use Math.pow() for compound growth. For statistics, sort arrays for median. For geometry, remember Math.PI and Pythagorean theorem."
        },
        {
            title: "Real-World Applications",
            description: "Build practical applications using Date and Math objects",
            difficulty: "Advanced",
            starterCode: `// PROJECT 1: Countdown Timer
// Create CountdownTimer class that:
// 1. Takes target date/time
// 2. Updates remaining time every second
// 3. Formats output as days:hours:minutes:seconds
// 4. Triggers callback when timer ends
// 5. Has pause/resume/reset functionality

// PROJECT 2: Data Visualization Helper
// Create ChartHelper class for:
// 1. generateHistogram(data, bins) - bin data and count frequencies
// 2. normalizeData(data, min, max) - scale data to range
// 3. calculateLinearRegression(xData, yData) - find best fit line
// 4. generateRandomDataset(size, distribution) - normal/uniform distribution

// PROJECT 3: Calendar Generator
// Create Calendar class that:
// 1. generateMonth(year, month) - returns 2D array of weeks
// 2. highlightDates(dates, color) - mark specific dates
// 3. calculateEaster(year) - returns Easter date
// 4. getMoonPhase(date) - calculates moon phase

// PROJECT 4: Game Physics Engine
// Create simple PhysicsEngine with:
// 1. Vector math (add, subtract, multiply, normalize)
// 2. Collision detection (circle-circle, rectangle-rectangle)
// 3. Projectile motion calculations
// 4. Gravity simulation`,
            solution: `// PROJECT 1: Countdown Timer
class CountdownTimer {
    constructor(targetDate, onTick, onComplete) {
        this.targetDate = new Date(targetDate);
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.isRunning = false;
        this.intervalId = null;
        this.pausedTime = null;
    }
    
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.update();
        this.intervalId = setInterval(() => this.update(), 1000);
    }
    
    pause() {
        if (!this.isRunning) return;
        
        this.isRunning = false;
        this.pausedTime = new Date();
        clearInterval(this.intervalId);
    }
    
    resume() {
        if (this.isRunning || !this.pausedTime) return;
        
        // Adjust target date by paused duration
        const pauseDuration = new Date() - this.pausedTime;
        this.targetDate = new Date(this.targetDate.getTime() + pauseDuration);
        this.pausedTime = null;
        
        this.start();
    }
    
    reset(newTargetDate = null) {
        clearInterval(this.intervalId);
        this.isRunning = false;
        this.pausedTime = null;
        
        if (newTargetDate) {
            this.targetDate = new Date(newTargetDate);
        }
    }
    
    update() {
        const now = new Date();
        const remaining = this.targetDate - now;
        
        if (remaining <= 0) {
            this.reset();
            if (this.onComplete) this.onComplete();
            return;
        }
        
        const time = this.formatTime(remaining);
        if (this.onTick) this.onTick(time);
    }
    
    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        return {
            total: milliseconds,
            days,
            hours,
            minutes,
            seconds: secs,
            formatted: \`\${days}d \${hours}h \${minutes}m \${secs}s\`,
            isComplete: milliseconds <= 0
        };
    }
    
    getRemainingTime() {
        return this.formatTime(this.targetDate - new Date());
    }
}

// Example usage
const timer = new CountdownTimer(
    new Date(Date.now() + 10000), // 10 seconds from now
    (time) => console.log('Tick:', time.formatted),
    () => console.log('Timer complete!')
);

// timer.start(); // Uncomment to start

// PROJECT 2: Data Visualization Helper
class ChartHelper {
    static generateHistogram(data, bins = 10) {
        const min = Math.min(...data);
        const max = Math.max(...data);
        const binWidth = (max - min) / bins;
        
        const histogram = Array(bins).fill(0).map((_, i) => ({
            binStart: min + (i * binWidth),
            binEnd: min + ((i + 1) * binWidth),
            count: 0,
            values: []
        }));
        
        data.forEach(value => {
            let binIndex = Math.floor((value - min) / binWidth);
            // Handle edge case where value equals max
            if (binIndex === bins) binIndex = bins - 1;
            
            histogram[binIndex].count++;
            histogram[binIndex].values.push(value);
        });
        
        return histogram;
    }
    
    static normalizeData(data, targetMin = 0, targetMax = 1) {
        const dataMin = Math.min(...data);
        const dataMax = Math.max(...data);
        const range = dataMax - dataMin;
        
        if (range === 0) return data.map(() => targetMin);
        
        const targetRange = targetMax - targetMin;
        
        return data.map(value => 
            targetMin + ((value - dataMin) / range) * targetRange
        );
    }
    
    static calculateLinearRegression(xData, yData) {
        const n = xData.length;
        const sumX = xData.reduce((a, b) => a + b, 0);
        const sumY = yData.reduce((a, b) => a + b, 0);
        const sumXY = xData.reduce((sum, x, i) => sum + x * yData[i], 0);
        const sumX2 = xData.reduce((sum, x) => sum + x * x, 0);
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        
        // Calculate R-squared
        const yMean = sumY / n;
        const ssTotal = yData.reduce((sum, y) => sum + Math.pow(y - yMean, 2), 0);
        const ssResidual = yData.reduce((sum, y, i) => {
            const yPred = slope * xData[i] + intercept;
            return sum + Math.pow(y - yPred, 2);
        }, 0);
        const rSquared = 1 - (ssResidual / ssTotal);
        
        return {
            slope,
            intercept,
            rSquared,
            predict: (x) => slope * x + intercept
        };
    }
    
    static generateRandomDataset(size, distribution = 'normal') {
        if (distribution === 'normal') {
            // Box-Muller transform for normal distribution
            return Array.from({ length: size }, () => {
                let u = 0, v = 0;
                while(u === 0) u = Math.random();
                while(v === 0) v = Math.random();
                return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
            });
        } else {
            // Uniform distribution
            return Array.from({ length: size }, () => Math.random() * 2 - 1);
        }
    }
}

// Example usage
const testData = [1, 2, 2, 3, 3, 3, 4, 4, 5];
console.log('Histogram:', ChartHelper.generateHistogram(testData, 5));

const xData = [1, 2, 3, 4, 5];
const yData = [2, 4, 5, 4, 5];
console.log('Linear Regression:', ChartHelper.calculateLinearRegression(xData, yData));

// PROJECT 3: Calendar Generator
class Calendar {
    static generateMonth(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        const weeks = [];
        let week = [];
        
        // Add empty days for first week
        for (let i = 0; i < firstDay.getDay(); i++) {
            week.push(null);
        }
        
        // Add days of the month
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day);
            week.push({
                date,
                day,
                isWeekend: date.getDay() === 0 || date.getDay() === 6,
                isToday: this.isToday(date)
            });
            
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
        }
        
        // Add empty days for last week
        if (week.length > 0) {
            while (week.length < 7) {
                week.push(null);
            }
            weeks.push(week);
        }
        
        return weeks;
    }
    
    static isToday(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    }
    
    static calculateEaster(year) {
        // Computus algorithm
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        
        const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        
        return new Date(year, month, day);
    }
    
    static getMoonPhase(date) {
        // Simplified moon phase calculation
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        // Calculate days since known new moon (approximate)
        const knownNewMoon = new Date(2000, 0, 6); // Jan 6, 2000
        const daysSince = Math.floor((date - knownNewMoon) / (1000 * 60 * 60 * 24));
        const moonCycle = 29.53; // days
        const phase = (daysSince % moonCycle) / moonCycle;
        
        if (phase < 0.03 || phase > 0.97) return 'New Moon';
        if (phase < 0.22) return 'Waxing Crescent';
        if (phase < 0.28) return 'First Quarter';
        if (phase < 0.47) return 'Waxing Gibbous';
        if (phase < 0.53) return 'Full Moon';
        if (phase < 0.72) return 'Waning Gibbous';
        if (phase < 0.78) return 'Last Quarter';
        return 'Waning Crescent';
    }
    
    static highlightDates(weeks, datesToHighlight, highlightColor = '#ffeb3b') {
        const dateSet = new Set(datesToHighlight.map(d => d.toDateString()));
        
        return weeks.map(week => 
            week.map(day => {
                if (!day) return day;
                if (dateSet.has(day.date.toDateString())) {
                    return { ...day, highlight: highlightColor };
                }
                return day;
            })
        );
    }
}

// Example usage
console.log('March 2024 Calendar:', Calendar.generateMonth(2024, 2));
console.log('Easter 2024:', Calendar.calculateEaster(2024));
console.log('Moon phase today:', Calendar.getMoonPhase(new Date()));

// PROJECT 4: Game Physics Engine
class PhysicsEngine {
    constructor(gravity = 9.8) {
        this.gravity = gravity;
        this.objects = [];
    }
    
    static Vector = class {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
        
        add(v) {
            return new PhysicsEngine.Vector(this.x + v.x, this.y + v.y);
        }
        
        subtract(v) {
            return new PhysicsEngine.Vector(this.x - v.x, this.y - v.y);
        }
        
        multiply(scalar) {
            return new PhysicsEngine.Vector(this.x * scalar, this.y * scalar);
        }
        
        dot(v) {
            return this.x * v.x + this.y * v.y;
        }
        
        magnitude() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        
        normalize() {
            const mag = this.magnitude();
            if (mag === 0) return new PhysicsEngine.Vector();
            return new PhysicsEngine.Vector(this.x / mag, this.y / mag);
        }
        
        distanceTo(v) {
            return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
        }
    };
    
    static checkCircleCollision(circle1, circle2) {
        const distance = circle1.position.distanceTo(circle2.position);
        return distance <= (circle1.radius + circle2.radius);
    }
    
    static checkRectangleCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    static calculateProjectileMotion(initialVelocity, angle, gravity = 9.8) {
        const angleRad = angle * (Math.PI / 180);
        const vx = initialVelocity * Math.cos(angleRad);
        const vy = initialVelocity * Math.sin(angleRad);
        
        // Time of flight
        const timeOfFlight = (2 * vy) / gravity;
        
        // Maximum height
        const maxHeight = (vy * vy) / (2 * gravity);
        
        // Range
        const range = vx * timeOfFlight;
        
        return {
            vx,
            vy,
            timeOfFlight,
            maxHeight,
            range,
            positionAtTime: (t) => new PhysicsEngine.Vector(
                vx * t,
                vy * t - 0.5 * gravity * t * t
            )
        };
    }
    
    static applyGravity(object, deltaTime) {
        if (!object.isStatic) {
            object.velocity.y += (this.gravity || 9.8) * deltaTime;
            object.position.y += object.velocity.y * deltaTime;
        }
        return object;
    }
    
    addObject(object) {
        this.objects.push(object);
    }
    
    update(deltaTime) {
        this.objects.forEach(obj => {
            if (!obj.isStatic) {
                // Apply gravity
                obj.velocity.y += this.gravity * deltaTime;
                
                // Update position
                obj.position.x += obj.velocity.x * deltaTime;
                obj.position.y += obj.velocity.y * deltaTime;
                
                // Simple ground collision
                if (obj.position.y > 500 && obj.type === 'circle') { // Assuming ground at y=500
                    obj.position.y = 500;
                    obj.velocity.y *= -0.8; // Bounce with energy loss
                }
            }
        });
        
        // Check collisions
        this.checkCollisions();
    }
    
    checkCollisions() {
        for (let i = 0; i < this.objects.length; i++) {
            for (let j = i + 1; j < this.objects.length; j++) {
                const obj1 = this.objects[i];
                const obj2 = this.objects[j];
                
                if (obj1.type === 'circle' && obj2.type === 'circle') {
                    if (PhysicsEngine.checkCircleCollision(obj1, obj2)) {
                        this.resolveCircleCollision(obj1, obj2);
                    }
                }
            }
        }
    }
    
    resolveCircleCollision(circle1, circle2) {
        // Simple collision resolution
        const collisionVector = circle1.position.subtract(circle2.position);
        const distance = collisionVector.magnitude();
        
        if (distance === 0) return;
        
        const normalized = collisionVector.multiply(1 / distance);
        
        // Separate circles
        const overlap = (circle1.radius + circle2.radius) - distance;
        circle1.position = circle1.position.add(normalized.multiply(overlap / 2));
        circle2.position = circle2.position.subtract(normalized.multiply(overlap / 2));
        
        // Swap velocities (simple elastic collision)
        const tempVelocity = circle1.velocity;
        circle1.velocity = circle2.velocity;
        circle2.velocity = tempVelocity;
    }
}

// Example usage
const engine = new PhysicsEngine();
const ball1 = {
    type: 'circle',
    position: new PhysicsEngine.Vector(100, 100),
    velocity: new PhysicsEngine.Vector(2, 0),
    radius: 20,
    isStatic: false
};

const ball2 = {
    type: 'circle',
    position: new PhysicsEngine.Vector(150, 100),
    velocity: new PhysicsEngine.Vector(-1, 0),
    radius: 20,
    isStatic: false
};

engine.addObject(ball1);
engine.addObject(ball2);

console.log('Projectile motion:', 
    PhysicsEngine.calculateProjectileMotion(50, 45));
console.log('Vector math example:', 
    new PhysicsEngine.Vector(3, 4).magnitude());`,
            hint: "For timers, use setInterval with 1000ms. For physics, separate position and velocity vectors. For calendar, work with weeks as arrays of days."
        }
    ];

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const resetCode = () => {
        setCode(`// Practice Area\nconsole.log("Start coding!");`);
        setOutput('');
    };

    const updateLiveDate = () => {
        setCurrentDate(new Date());
    };

    // Start live date updates
    React.useEffect(() => {
        const interval = setInterval(updateLiveDate, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson13" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 13: Dates & Math</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Dates & Math Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master JavaScript Date object and Math library for real-world applications, calculations, and data manipulation.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <Calculator className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Live Date Display */}
                    <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                <div>
                                    <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Live Date & Time</div>
                                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                                        {currentDate.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div className="text-lg text-slate-600 dark:text-slate-400">
                                        {currentDate.toLocaleTimeString('en-US', {
                                            hour12: true,
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-slate-500 dark:text-slate-400">Timestamp</div>
                                <div className="font-mono text-slate-700 dark:text-slate-300">
                                    {currentDate.getTime()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'playground', 'calculator'].map((tab) => (
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
                            {/* Left Column: Theory */}
                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                            <Calendar className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Mastering Dates & Math in JavaScript
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        The Date object and Math library are essential for handling time-based data, calculations, and real-world applications like calendars, financial tools, games, and data analysis.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <CalendarDays className="w-4 h-4" /> Date Object
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Timezone-aware:</strong> Local vs UTC</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Mutable:</strong> Methods modify in place</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Timestamps:</strong> Milliseconds since 1970</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                                            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                                <Calculator className="w-4 h-4" /> Math Library
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Static methods:</strong> No constructor</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Constants:</strong> PI, E, SQRT2, etc.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5"></div>
                                                    <span><strong>Random:</strong> Pseudo-random 0-1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Quick Reference
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {concepts.slice(0, 3).map((category, idx) => (
                                            <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                                    {category.category}
                                                </h3>
                                                <div className="space-y-1">
                                                    {category.concepts.slice(0, 2).map((concept, cIdx) => (
                                                        <button
                                                            key={cIdx}
                                                            onClick={() => {
                                                                setActiveTab('concepts');
                                                                const conceptIndex = concepts.slice(0, idx)
                                                                    .reduce((acc, cat) => acc + cat.concepts.length, 0) + cIdx;
                                                                setCurrentConcept(conceptIndex);
                                                            }}
                                                            className="block w-full text-left px-2 py-1 text-sm hover:bg-white dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300 transition-colors"
                                                        >
                                                            {concept.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Code Editor */}
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-4 h-4 text-emerald-400" />
                                            <span className="font-mono text-xs text-slate-400">dates-math.js</span>
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
                                        Concepts Explorer
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
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Common Patterns</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCode(`// Date Formatting\const now = new Date();\nconst formatted = now.toLocaleDateString('en-US', {\n  weekday: 'long',\n  year: 'numeric',\n  month: 'long',\n  day: 'numeric'\n});\nconsole.log('Formatted date:', formatted);`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Date Formatting</div>
                                            <div className="text-xs text-slate-500">Localized date display</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Date Arithmetic\nconst today = new Date();\nconst tomorrow = new Date(today);\ntomorrow.setDate(today.getDate() + 1);\n\nconst nextWeek = new Date(today);\nnextWeek.setDate(today.getDate() + 7);\n\nconst lastMonth = new Date(today);\nlastMonth.setMonth(today.getMonth() - 1);\n\nconsole.log('Tomorrow:', tomorrow);\nconsole.log('Next week:', nextWeek);\nconsole.log('Last month:', lastMonth);`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Date Arithmetic</div>
                                            <div className="text-xs text-slate-500">Add/subtract days, months, years</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Random Data Generation\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction getRandomFloat(min, max, decimals = 2) {\n  const random = Math.random() * (max - min) + min;\n  return Math.round(random * 10**decimals) / 10**decimals;\n}\n\nconsole.log('Random int 1-10:', getRandomInt(1, 10));\nconsole.log('Random float 0-1:', getRandomFloat(0, 1, 3));`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Random Generation</div>
                                            <div className="text-xs text-slate-500">Random integers and floats</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Date Practice\n// Create, format, and manipulate dates\n// Calculate differences between dates`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Date Manipulation
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Math Practice\n// Practice Math functions\n// Try rounding, min/max, random, trigonometry`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Math Functions
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Real-world Scenarios\n// Age calculator, countdown timer\n// Financial calculations, statistics`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Real Applications
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Performance Testing\n// Compare date creation methods\n// Test math operation performance`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Performance
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">dates-math-playground.js</span>
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

                    {/* Tab Content: Interactive Calculator */}
                    {activeTab === 'calculator' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Interactive Date & Math Calculator
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Date Calculator
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Date Difference</h4>
                                                <div className="space-y-2">
                                                    <input
                                                        type="date"
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                        defaultValue="2024-01-01"
                                                    />
                                                    <input
                                                        type="date"
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                        defaultValue="2024-12-31"
                                                    />
                                                    <button
                                                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                                        onClick={() => {
                                                            const code = `const date1 = new Date('2024-01-01');\nconst date2 = new Date('2024-12-31');\nconst diff = date2 - date1;\nconst days = Math.floor(diff / (1000 * 60 * 60 * 24));\nconsole.log('Days difference:', days);`;
                                                            setCode(code);
                                                        }}
                                                    >
                                                        Calculate Difference
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Add to Date</h4>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Days"
                                                        className="p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Months"
                                                        className="p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Years"
                                                        className="p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                </div>
                                                <button
                                                    className="w-full mt-2 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                                                    onClick={() => {
                                                        const code = `const date = new Date();\ndate.setDate(date.getDate() + 7);\nconsole.log('Date + 7 days:', date.toDateString());`;
                                                        setCode(code);
                                                    }}
                                                >
                                                    Add to Current Date
                                                </button>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Format Date</h4>
                                                <select className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900">
                                                    <option>YYYY-MM-DD</option>
                                                    <option>DD/MM/YYYY</option>
                                                    <option>MMM DD, YYYY</option>
                                                    <option>Full date with time</option>
                                                </select>
                                                <button
                                                    className="w-full mt-2 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
                                                    onClick={() => {
                                                        const code = `const date = new Date();\nconsole.log('ISO:', date.toISOString());\nconsole.log('Locale:', date.toLocaleDateString());\nconsole.log('Custom:', date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));`;
                                                        setCode(code);
                                                    }}
                                                >
                                                    Generate Formatted Dates
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Math Calculator
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Basic Operations</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        className="p-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded"
                                                        onClick={() => setCode('console.log("Round 4.7:", Math.round(4.7));')}
                                                    >
                                                        Round
                                                    </button>
                                                    <button
                                                        className="p-2 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-800/50 rounded"
                                                        onClick={() => setCode('console.log("Floor 4.7:", Math.floor(4.7));')}
                                                    >
                                                        Floor
                                                    </button>
                                                    <button
                                                        className="p-2 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50 rounded"
                                                        onClick={() => setCode('console.log("Ceil 4.2:", Math.ceil(4.2));')}
                                                    >
                                                        Ceil
                                                    </button>
                                                    <button
                                                        className="p-2 bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800/50 rounded"
                                                        onClick={() => setCode('console.log("Random:", Math.random());')}
                                                    >
                                                        Random
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Financial Calculator</h4>
                                                <div className="space-y-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Principal"
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Annual Rate %"
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Years"
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                    />
                                                    <button
                                                        className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                                                        onClick={() => {
                                                            const code = `function compoundInterest(p, r, t) {\n  return p * Math.pow(1 + r/100, t);\n}\nconsole.log('Compound interest:', compoundInterest(1000, 5, 10));`;
                                                            setCode(code);
                                                        }}
                                                    >
                                                        Calculate Compound Interest
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Geometry Calculator</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        className="p-2 bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 rounded"
                                                        onClick={() => setCode('console.log("Circle area (r=5):", Math.PI * Math.pow(5, 2));')}
                                                    >
                                                        Circle Area
                                                    </button>
                                                    <button
                                                        className="p-2 bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-800/50 rounded"
                                                        onClick={() => setCode('console.log("Distance (0,0 to 3,4):", Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2)));')}
                                                    >
                                                        Distance
                                                    </button>
                                                    <button
                                                        className="p-2 bg-teal-100 dark:bg-teal-900/30 hover:bg-teal-200 dark:hover:bg-teal-800/50 rounded"
                                                        onClick={() => setCode('console.log("Sin 30°:", Math.sin(30 * Math.PI / 180));')}
                                                    >
                                                        Trigonometry
                                                    </button>
                                                    <button
                                                        className="p-2 bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-800/50 rounded"
                                                        onClick={() => setCode('console.log("Log10(100):", Math.log10(100));')}
                                                    >
                                                        Logarithms
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Try These Examples</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <button
                                            className="p-2 bg-white dark:bg-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                                            onClick={() => setCode('// Generate random password\nfunction generatePassword(length=12) {\n  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";\n  let password = "";\n  for (let i = 0; i < length; i++) {\n    password += chars[Math.floor(Math.random() * chars.length)];\n  }\n  return password;\n}\nconsole.log("Random password:", generatePassword());')}
                                        >
                                            Random Password Generator
                                        </button>
                                        <button
                                            className="p-2 bg-white dark:bg-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                                            onClick={() => setCode('// Countdown to next year\nconst now = new Date();\nconst nextYear = new Date(now.getFullYear() + 1, 0, 1);\nconst diff = nextYear - now;\nconst days = Math.floor(diff / (1000 * 60 * 60 * 24));\nconst hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\nconsole.log(`Days until ${nextYear.getFullYear()}: ${days}d ${hours}h`);')}
                                        >
                                            Countdown to New Year
                                        </button>
                                        <button
                                            className="p-2 bg-white dark:bg-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                                            onClick={() => setCode('// Calculate age\nfunction calculateAge(birthDate) {\n  const today = new Date();\n  let age = today.getFullYear() - birthDate.getFullYear();\n  const m = today.getMonth() - birthDate.getMonth();\n  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {\n    age--;\n  }\n  return age;\n}\nconsole.log("Age if born Jan 1, 2000:", calculateAge(new Date("2000-01-01")));')}
                                        >
                                            Age Calculator
                                        </button>
                                        <button
                                            className="p-2 bg-white dark:bg-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                                            onClick={() => setCode('// Format currency\nfunction formatCurrency(amount, currency = "USD") {\n  return new Intl.NumberFormat("en-US", {\n    style: "currency",\n    currency: currency\n  }).format(amount);\n}\nconsole.log("Formatted:", formatCurrency(1234.56, "USD"));')}
                                        >
                                            Currency Formatter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson12" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Error Handling</span>
                        </a>
                        <a href="/lesson14" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Regular Expressions</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}