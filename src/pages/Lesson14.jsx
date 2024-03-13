import React, { useState } from 'react';
import {
    Type, Code, Play, Terminal, Lightbulb, Plus,
    ChevronRight, Copy, RotateCcw, Filter, HelpCircle,
    Hash, Search, RefreshCw, ChevronLeft,
    Layers, BarChart, Split, Merge, BookOpen, Brain,
    Box, Zap, Cpu, FunctionSquare, GitBranch,
    Workflow, Palette, Target, Puzzle, Map,
    Regex, CheckSquare, XSquare, AlertTriangle,
    Key, Lock, Unlock, Mail, Phone, Globe,
    CreditCard, Hash as HashIcon, AtSign,
    FileText, Calendar, DollarSign, Percent,
    Shield, Eye, EyeOff, Wrench, Settings,
    Scan, Filter as FilterIcon, ShieldCheck
} from 'lucide-react';
import LessonSidebar from '../components/LessonSidebar';

export default function Lesson14() {
    const [activeTab, setActiveTab] = useState('content');
    const [code, setCode] = useState(`// === REGEX FUNDAMENTALS ===
// 1. Creating Regular Expressions
const regex1 = /pattern/;           // Literal syntax
const regex2 = new RegExp('pattern'); // Constructor syntax
const regex3 = /pattern/gi;         // With flags: g=global, i=case-insensitive

// 2. Basic Patterns
const simplePattern = /hello/;
console.log('Simple match:', simplePattern.test('hello world')); // true

// 3. Character Classes
const digitPattern = /\\d/;          // Any digit (0-9)
const wordPattern = /\\w/;           // Any word character (a-z, A-Z, 0-9, _)
const whitespacePattern = /\\s/;     // Any whitespace
const notDigitPattern = /\\D/;       // Any non-digit

console.log('Digit test:', digitPattern.test('Room 101')); // true
console.log('Word test:', wordPattern.test('hello'));      // true
console.log('Whitespace test:', whitespacePattern.test(' ')); // true

// 4. Quantifiers
const exactThree = /\\d{3}/;        // Exactly 3 digits
const threeOrMore = /\\d{3,}/;      // 3 or more digits
const threeToFive = /\\d{3,5}/;     // 3 to 5 digits
const zeroOrMore = /\\d*/;          // 0 or more digits
const oneOrMore = /\\d+/;           // 1 or more digits
const zeroOrOne = /\\d?/;           // 0 or 1 digit

// 5. Special Characters
const emailPattern = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;
const phonePattern = /^\\+?\\d{10,15}$/;
const urlPattern = /^https?:\\/\\/[\\w.-]+\\.[a-zA-Z]{2,}(\\/\\S*)?$/;

// === REGEX METHODS ===
// 6. test() method - returns boolean
const hasNumber = /\\d/.test('Hello123');
console.log('Has number:', hasNumber); // true

// 7. exec() method - returns match details
const match = /\\d+/.exec('Order 12345 processed');
console.log('Exec result:', match);
if (match) {
    console.log('Matched:', match[0]);      // '12345'
    console.log('Index:', match.index);     // 6
    console.log('Input:', match.input);     // 'Order 12345 processed'
}

// 8. match() method - string method
const str = 'The price is $19.99 and $29.99';
const matches = str.match(/\\d+\\.\\d+/g);
console.log('All matches:', matches); // ['19.99', '29.99']

// 9. search() method - returns index
const index = 'Hello world'.search(/world/);
console.log('Found at index:', index); // 6

// 10. replace() method - replace matches
const replaced = 'Hello World'.replace(/world/i, 'JavaScript');
console.log('Replaced:', replaced); // 'Hello JavaScript'

// 11. split() method - split by pattern
const parts = 'a,b,c,d,e'.split(/,/);
console.log('Split result:', parts); // ['a', 'b', 'c', 'd', 'e']

// === COMMON PATTERNS ===
// 12. Email validation
function isValidEmail(email) {
    const pattern = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

console.log('Valid email?', isValidEmail('test@example.com')); // true
console.log('Valid email?', isValidEmail('invalid-email'));    // false

// 13. Phone number validation
function isValidPhone(phone) {
    // Supports: 1234567890, 123-456-7890, (123) 456-7890, +1-123-456-7890
    const pattern = /^(\\+?\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/;
    return pattern.test(phone);
}

console.log('Valid phone?', isValidPhone('123-456-7890')); // true

// 14. Password strength validation
function isStrongPassword(password) {
    // At least 8 chars, one uppercase, one lowercase, one digit, one special char
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}

console.log('Strong password?', isStrongPassword('Pass123!')); // true

// 15. Credit card validation (simplified)
function isValidCreditCard(card) {
    // Remove spaces and dashes
    const cleaned = card.replace(/[\\s-]/g, '');
    
    // Basic pattern for common card types
    const patterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
    };
    
    // Check Luhn algorithm
    function luhnCheck(cardNumber) {
        let sum = 0;
        let alternate = false;
        
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);
            
            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            
            sum += digit;
            alternate = !alternate;
        }
        
        return sum % 10 === 0;
    }
    
    // Check pattern and Luhn
    for (const [type, pattern] of Object.entries(patterns)) {
        if (pattern.test(cleaned) && luhnCheck(cleaned)) {
            return { valid: true, type };
        }
    }
    
    return { valid: false };
}

console.log('Credit card:', isValidCreditCard('4111111111111111')); // Visa

// === ADVANCED PATTERNS ===
// 16. Lookahead assertions
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$/;
// Positive lookahead: (?=...) - must match what follows
// Negative lookahead: (?!...) - must NOT match what follows

// 17. Groups and capturing
const datePattern = /(\\d{4})-(\\d{2})-(\\d{2})/;
const dateMatch = datePattern.exec('2024-01-15');
if (dateMatch) {
    console.log('Full match:', dateMatch[0]); // '2024-01-15'
    console.log('Year:', dateMatch[1]);      // '2024'
    console.log('Month:', dateMatch[2]);     // '01'
    console.log('Day:', dateMatch[3]);       // '15'
}

// 18. Non-capturing groups
const nonCapturing = /(?:\\d{3})-(\\d{3})/;
const ncMatch = nonCapturing.exec('123-456');
console.log('Non-capturing group:', ncMatch); // Only one capture group

// 19. Named capture groups (ES2018)
const namedPattern = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = '2024-01-15'.match(namedPattern);
if (namedMatch) {
    console.log('Named groups:', namedMatch.groups);
    // { year: '2024', month: '01', day: '15' }
}

// 20. Backreferences
const repeatedWord = /(\\b\\w+\\b) \\1/; // Matches repeated words
console.log('Repeated words:', repeatedWord.test('hello hello')); // true

// === PRACTICAL EXAMPLES ===
// 21. Extract all URLs from text
function extractURLs(text) {
    const urlPattern = /https?:\\/\\/[\\w.-]+\\.[a-zA-Z]{2,}(\\/[\\w.-]*)*/g;
    return text.match(urlPattern) || [];
}

const sampleText = 'Visit https://example.com and http://test.org/path';
console.log('URLs:', extractURLs(sampleText));

// 22. Validate and format phone numbers
function formatPhoneNumber(phone) {
    // Remove all non-digits
    const digits = phone.replace(/\\D/g, '');
    
    // Format: (XXX) XXX-XXXX
    if (digits.length === 10) {
        return digits.replace(/(\\d{3})(\\d{3})(\\d{4})/, '($1) $2-$3');
    }
    
    return phone;
}

console.log('Formatted phone:', formatPhoneNumber('1234567890'));

// 23. Remove HTML tags
function stripHTML(html) {
    return html.replace(/<[^>]*>/g, '');
}

const html = '<div>Hello <b>World</b></div>';
console.log('Stripped HTML:', stripHTML(html));

// 24. Find duplicate words
function findDuplicates(text) {
    const duplicates = [];
    const wordPattern = /\\b(\\w+)\\b/gi;
    const words = text.match(wordPattern) || [];
    const seen = new Set();
    
    words.forEach(word => {
        const lower = word.toLowerCase();
        if (seen.has(lower)) {
            duplicates.push(word);
        }
        seen.add(lower);
    });
    
    return duplicates;
}

console.log('Duplicates:', findDuplicates('hello Hello world world'));

// 25. Password complexity checker
function checkPasswordComplexity(password) {
    const checks = {
        length: /.{8,}/.test(password),
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        digit: /\\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    const strength = score < 3 ? 'Weak' : score < 5 ? 'Medium' : 'Strong';
    
    return { checks, score, strength };
}

console.log('Password check:', checkPasswordComplexity('Pass123!'));`);

    const [output, setOutput] = useState('');
    const [currentConcept, setCurrentConcept] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [regexInput, setRegexInput] = useState('/\\d+/');
    const [testString, setTestString] = useState('Order 12345 processed');
    const [regexFlags, setRegexFlags] = useState('g');
    const [regexResult, setRegexResult] = useState(null);

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

    const testRegex = () => {
        try {
            let pattern;
            if (regexInput.startsWith('/') && regexInput.endsWith('/')) {
                // Remove slashes and parse flags
                const lastSlash = regexInput.lastIndexOf('/');
                const patternStr = regexInput.slice(1, lastSlash);
                const flagsStr = regexInput.slice(lastSlash + 1) + regexFlags;
                pattern = new RegExp(patternStr, flagsStr);
            } else {
                pattern = new RegExp(regexInput, regexFlags);
            }

            const results = {
                pattern: pattern.toString(),
                testResult: pattern.test(testString),
                matchResult: testString.match(pattern),
                execResult: pattern.exec(testString),
                searchResult: testString.search(pattern),
                replaceResult: testString.replace(pattern, 'REPLACED'),
                splitResult: testString.split(pattern)
            };

            setRegexResult(results);
        } catch (error) {
            setRegexResult({ error: error.message });
        }
    };

    // REGEX CONCEPTS
    const concepts = [
        {
            category: "Basic Syntax",
            concepts: [
                {
                    name: "Literal Syntax",
                    icon: <Type className="w-4 h-4 text-blue-500" />,
                    description: "Create regex using /pattern/ syntax (most common)",
                    syntax: "/pattern/",
                    example: "/hello/ matches 'hello'",
                    useCase: "When pattern is known at coding time"
                },
                {
                    name: "Constructor Syntax",
                    icon: <Regex className="w-4 h-4 text-purple-500" />,
                    description: "Create regex using RegExp constructor",
                    syntax: "new RegExp('pattern', 'flags')",
                    example: "new RegExp('hello', 'i') matches 'hello' case-insensitive",
                    useCase: "When pattern is dynamic or from user input"
                },
                {
                    name: "Flags",
                    icon: <FilterIcon className="w-4 h-4 text-green-500" />,
                    description: "Modifiers that change regex behavior",
                    syntax: "/pattern/flags",
                    example: "/hello/gi - global, case-insensitive",
                    useCase: "Controlling matching behavior (case, multiline, etc.)"
                },
                {
                    name: "Character Classes",
                    icon: <HashIcon className="w-4 h-4 text-red-500" />,
                    description: "Match specific character types",
                    syntax: "\\d (digit), \\w (word), \\s (space), . (any)",
                    example: "/\\d+/ matches one or more digits",
                    useCase: "Matching specific character categories"
                }
            ]
        },
        {
            category: "Quantifiers",
            concepts: [
                {
                    name: "Exact Count",
                    icon: <CheckSquare className="w-4 h-4 text-yellow-500" />,
                    description: "Match exactly n occurrences",
                    syntax: "{n}",
                    example: "/\\d{3}/ matches exactly 3 digits",
                    useCase: "When you need specific length matches"
                },
                {
                    name: "Range",
                    icon: <BarChart className="w-4 h-4 text-orange-500" />,
                    description: "Match between n and m occurrences",
                    syntax: "{n,m}",
                    example: "/\\d{3,5}/ matches 3-5 digits",
                    useCase: "Flexible length matching within bounds"
                },
                {
                    name: "One or More",
                    icon: <Plus className="w-4 h-4 text-green-600" />,
                    description: "Match one or more occurrences",
                    syntax: "+",
                    example: "/\\d+/ matches one or more digits",
                    useCase: "When at least one occurrence is required"
                },
                {
                    name: "Zero or More",
                    icon: <Infinity className="w-4 h-4 text-purple-600" />,
                    description: "Match zero or more occurrences",
                    syntax: "*",
                    example: "/\\d*/ matches zero or more digits",
                    useCase: "When presence is optional"
                },
                {
                    name: "Zero or One",
                    icon: <HelpCircle className="w-4 h-4 text-blue-600" />,
                    description: "Match zero or one occurrence",
                    syntax: "?",
                    example: "/\\d?/ matches 0 or 1 digit",
                    useCase: "When something is optional"
                }
            ]
        },
        {
            category: "Anchors & Boundaries",
            concepts: [
                {
                    name: "Start of String",
                    icon: <ChevronRight className="w-4 h-4 text-red-600" />,
                    description: "Match at beginning of string",
                    syntax: "^",
                    example: "/^Hello/ matches 'Hello' at start",
                    useCase: "Validating string starts with pattern"
                },
                {
                    name: "End of String",
                    icon: <ChevronLeft className="w-4 h-4 text-green-600" />,
                    description: "Match at end of string",
                    syntax: "$",
                    example: "/world$/ matches 'world' at end",
                    useCase: "Validating string ends with pattern"
                },
                {
                    name: "Word Boundary",
                    icon: <Globe className="w-4 h-4 text-purple-600" />,
                    description: "Match at word boundaries",
                    syntax: "\\b",
                    example: "/\\bword\\b/ matches 'word' as whole word",
                    useCase: "Matching whole words only"
                },
                {
                    name: "Non-word Boundary",
                    icon: <XSquare className="w-4 h-4 text-yellow-600" />,
                    description: "Match where \\b doesn't match",
                    syntax: "\\B",
                    example: "/\\Bword\\B/ matches 'swordfish' but not 'word'",
                    useCase: "Matching inside words"
                }
            ]
        },
        {
            category: "Groups & Lookarounds",
            concepts: [
                {
                    name: "Capturing Groups",
                    icon: <Layers className="w-4 h-4 text-teal-500" />,
                    description: "Capture matched substring for later use",
                    syntax: "(pattern)",
                    example: "/(\\d{3})-(\\d{3})/ captures area code and prefix",
                    useCase: "Extracting parts of match"
                },
                {
                    name: "Non-capturing Groups",
                    icon: <EyeOff className="w-4 h-4 text-gray-500" />,
                    description: "Group without capturing",
                    syntax: "(?:pattern)",
                    example: "/(?:\\d{3})-(\\d{4})/ only captures last 4 digits",
                    useCase: "Grouping without capturing overhead"
                },
                {
                    name: "Positive Lookahead",
                    icon: <Eye className="w-4 h-4 text-green-700" />,
                    description: "Assert pattern follows current position",
                    syntax: "(?=pattern)",
                    example: "/\\w+(?=\\d)/ matches word followed by digit",
                    useCase: "Complex conditional matching"
                },
                {
                    name: "Negative Lookahead",
                    icon: <AlertTriangle className="w-4 h-4 text-red-700" />,
                    description: "Assert pattern doesn't follow",
                    syntax: "(?!pattern)",
                    example: "/\\d{3}(?!-)/ matches 3 digits not followed by dash",
                    useCase: "Excluding certain patterns"
                },
                {
                    name: "Named Capture Groups",
                    icon: <Key className="w-4 h-4 text-blue-700" />,
                    description: "Capture group with name (ES2018)",
                    syntax: "(?<name>pattern)",
                    example: "/(?<year>\\d{4})-(?<month>\\d{2})/",
                    useCase: "More readable group access"
                }
            ]
        },
        {
            category: "Common Patterns",
            concepts: [
                {
                    name: "Email Validation",
                    icon: <Mail className="w-4 h-4 text-blue-400" />,
                    description: "Basic email address pattern",
                    syntax: "/^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/",
                    example: "Matches: user@example.com",
                    useCase: "Form validation, user registration"
                },
                {
                    name: "Phone Number",
                    icon: <Phone className="w-4 h-4 text-green-400" />,
                    description: "Flexible phone number pattern",
                    syntax: "/^\\+?\\d{10,15}$/",
                    example: "Matches: 1234567890, +123456789012345",
                    useCase: "Contact forms, user profiles"
                },
                {
                    name: "URL Pattern",
                    icon: <Globe className="w-4 h-4 text-purple-400" />,
                    description: "Basic URL matching",
                    syntax: "/^https?:\\/\\/[\\w.-]+\\.[a-zA-Z]{2,}/",
                    example: "Matches: https://example.com",
                    useCase: "Link extraction, URL validation"
                },
                {
                    name: "Password Strength",
                    icon: <Shield className="w-4 h-4 text-red-400" />,
                    description: "Complex password requirements",
                    syntax: "/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}/",
                    example: "Requires: lowercase, uppercase, digit, 8+ chars",
                    useCase: "User registration security"
                }
            ]
        }
    ];

    const exercises = [
        {
            title: "Basic Regex Patterns",
            description: "Practice creating and using basic regular expressions",
            difficulty: "Beginner",
            starterCode: `// TASK 1: Create validation functions
// 1. isOnlyDigits(str) - returns true if string contains only digits
// 2. isOnlyLetters(str) - returns true if string contains only letters (a-z, A-Z)
// 3. isAlphanumeric(str) - returns true if string contains only letters and digits

// TASK 2: Pattern matching
// 1. findFirstNumber(str) - returns first sequence of digits
// 2. findAllEmails(str) - returns array of all email-like patterns
// 3. extractWords(str) - returns array of all words (sequences of letters)

// TASK 3: String manipulation
// 1. removeExtraSpaces(str) - replaces multiple spaces with single space
// 2. extractHashtags(str) - returns array of hashtags (words starting with #)
// 3. camelToSnake(str) - converts camelCase to snake_case

// TASK 4: Simple validation
// 1. isValidUsername(str) - 3-20 chars, letters, digits, underscores only
// 2. isValidHexColor(str) - validates #RGB or #RRGGBB format
// 3. isValidTime(str) - validates 12-hour or 24-hour time format`,
            solution: `// SOLUTION 1: Validation functions
function isOnlyDigits(str) {
    return /^\\d+$/.test(str);
}

function isOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log('Only digits:', isOnlyDigits('12345')); // true
console.log('Only letters:', isOnlyLetters('Hello')); // true
console.log('Alphanumeric:', isAlphanumeric('Hello123')); // true

// SOLUTION 2: Pattern matching
function findFirstNumber(str) {
    const match = str.match(/\\d+/);
    return match ? match[0] : null;
}

function findAllEmails(str) {
    const matches = str.match(/[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}/g);
    return matches || [];
}

function extractWords(str) {
    const matches = str.match(/[a-zA-Z]+/g);
    return matches || [];
}

console.log('First number:', findFirstNumber('Order 12345 for user456'));
console.log('Emails:', findAllEmails('Contact: test@example.com, support@test.org'));
console.log('Words:', extractWords('Hello World! Testing 123.'));

// SOLUTION 3: String manipulation
function removeExtraSpaces(str) {
    return str.replace(/\\s+/g, ' ').trim();
}

function extractHashtags(str) {
    const matches = str.match(/#[a-zA-Z0-9_]+/g);
    return matches || [];
}

function camelToSnake(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

console.log('No extra spaces:', removeExtraSpaces('Hello   World   !'));
console.log('Hashtags:', extractHashtags('#JavaScript #regex #coding'));
console.log('Camel to snake:', camelToSnake('camelCaseExample'));

// SOLUTION 4: Simple validation
function isValidUsername(str) {
    return /^[a-zA-Z0-9_]{3,20}$/.test(str);
}

function isValidHexColor(str) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(str);
}

function isValidTime(str) {
    // 12-hour: 01:23 AM, 11:59 PM
    // 24-hour: 23:59, 00:00
    const pattern12 = /^(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM)$/i;
    const pattern24 = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return pattern12.test(str) || pattern24.test(str);
}

console.log('Valid username:', isValidUsername('user_123'));
console.log('Valid hex color:', isValidHexColor('#FF5733'));
console.log('Valid time:', isValidTime('14:30'));`,
            hint: "Use ^ and $ for exact string validation. Use test() for boolean results. Use match() with g flag to get all matches."
        },
        {
            title: "Intermediate Regex Applications",
            description: "Practice with real-world regex patterns and applications",
            difficulty: "Intermediate",
            starterCode: `// TASK 1: Data extraction
// Create function extractData(text) that extracts:
// 1. All dates in YYYY-MM-DD or MM/DD/YYYY format
// 2. All currency amounts ($19.99, €25, £15.50)
// 3. All URLs (http, https, www.)
// Return object with arrays for each type

// TASK 2: Password validator with feedback
// Create function validatePassword(password) that:
// 1. Checks minimum 8 characters
// 2. Requires at least one uppercase letter
// 3. Requires at least one lowercase letter
// 4. Requires at least one digit
// 5. Requires at least one special character
// Returns object with {isValid: bool, errors: [], score: 1-5}

// TASK 3: HTML/Text processing
// Create function processText(text) that:
// 1. Removes HTML tags but keeps content
// 2. Converts markdown links to HTML: [text](url) -> <a href="url">text</a>
// 3. Finds and highlights code blocks between \`\`\`
// 4. Extracts all headings (# Heading -> <h1>Heading</h1>)

// TASK 4: Log file parser
// Create function parseLogs(logText) that extracts:
// 1. Timestamps [2024-01-15 14:30:25]
// 2. Log levels (INFO, ERROR, WARN, DEBUG)
// 3. Messages after the log level
// 4. IP addresses in messages
// Return array of structured log objects`,
            solution: `// SOLUTION 1: Data extraction
function extractData(text) {
    // Date patterns
    const datePattern1 = /\\b\\d{4}-\\d{2}-\\d{2}\\b/g; // YYYY-MM-DD
    const datePattern2 = /\\b\\d{1,2}\\/\\d{1,2}\\/\\d{4}\\b/g; // MM/DD/YYYY
    
    // Currency patterns
    const currencyPattern = /[£€¥$]\\s?\\d+(?:\\.\\d{2})?/g;
    
    // URL patterns
    const urlPattern = /(?:https?:\\/\\/|www\\.)[\\w.-]+\\.[a-zA-Z]{2,}(?:\\/[\\w.-]*)*/g;
    
    return {
        dates: [
            ...(text.match(datePattern1) || []),
            ...(text.match(datePattern2) || [])
        ],
        currencies: text.match(currencyPattern) || [],
        urls: text.match(urlPattern) || []
    };
}

const sampleText = \`Meeting on 2024-01-15. Budget: $5000. Visit https://example.com.
Another date: 01/20/2024. Price: €19.99. Check www.test.org/path\`;

console.log('Extracted data:', extractData(sampleText));

// SOLUTION 2: Password validator with feedback
function validatePassword(password) {
    const requirements = [
        { pattern: /.{8,}/, message: 'At least 8 characters' },
        { pattern: /[A-Z]/, message: 'At least one uppercase letter' },
        { pattern: /[a-z]/, message: 'At least one lowercase letter' },
        { pattern: /\\d/, message: 'At least one digit' },
        { pattern: /[!@#$%^&*(),.?":{}|<>]/, message: 'At least one special character' }
    ];
    
    const errors = [];
    let score = 0;
    
    requirements.forEach(req => {
        if (req.pattern.test(password)) {
            score++;
        } else {
            errors.push(req.message);
        }
    });
    
    return {
        isValid: errors.length === 0,
        errors,
        score,
        strength: score < 3 ? 'Weak' : score < 5 ? 'Medium' : 'Strong'
    };
}

console.log('Password validation:', validatePassword('Pass123!'));

// SOLUTION 3: HTML/Text processing
function processText(text) {
    // 1. Remove HTML tags but keep content
    let processed = text.replace(/<[^>]*>/g, '');
    
    // 2. Convert markdown links to HTML
    processed = processed.replace(
        /\\[([^\\]]+)\\]\\(([^)]+)\\)/g,
        '<a href="$2">$1</a>'
    );
    
    // 3. Extract and format code blocks
    const codeBlocks = [];
    processed = processed.replace(
        
        (match, code) => {
            codeBlocks.push(code.trim());
            return \`<pre><code>\${code.trim()}</code></pre>\`;
        }
    );
    
    // 4. Extract headings
    const headings = [];
    processed = processed.replace(
        /^#+\\s+(.+)$/gm,
        (match, heading) => {
            const level = match.match(/^#+/)[0].length;
            headings.push({ level, text: heading });
            return \`<h\${level}>\${heading}</h\${level}>\`;
        }
    );
    
    return {
        processed,
        codeBlocks,
        headings,
        originalLength: text.length,
        processedLength: processed.length
    };
}

const markdownText = \`# Heading 1
This is a [link](https://example.com).

\`\`\`javascript
console.log('Hello');
\`\`\`

## Heading 2
More text <b>ignored</b> here.\`;

console.log('Processed text:', processText(markdownText));

// SOLUTION 4: Log file parser
function parseLogs(logText) {
    const logPattern = /\\[(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2})\\]\\s+(INFO|ERROR|WARN|DEBUG)\\s+(.+)/g;
    const ipPattern = /\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b/g;
    
    const logs = [];
    let match;
    
    while ((match = logPattern.exec(logText)) !== null) {
        const [fullMatch, timestamp, level, message] = match;
        const ipAddresses = message.match(ipPattern) || [];
        
        logs.push({
            timestamp,
            level,
            message: message.trim(),
            ipAddresses,
            hasError: level === 'ERROR',
            length: message.length
        });
    }
    
    return {
        logs,
        total: logs.length,
        errors: logs.filter(l => l.level === 'ERROR').length,
        warnings: logs.filter(l => l.level === 'WARN').length,
        uniqueIPs: [...new Set(logs.flatMap(l => l.ipAddresses))]
    };
}

const logData = \`[2024-01-15 10:30:25] INFO User 192.168.1.1 logged in
[2024-01-15 10:31:00] ERROR Database connection failed from 10.0.0.5
[2024-01-15 10:32:15] WARN High memory usage detected
[2024-01-15 10:33:00] INFO Request from 192.168.1.2 processed\`;

console.log('Parsed logs:', parseLogs(logData));`,
            hint: "Use multiple regex patterns for complex extraction. Combine patterns with | for OR logic. Use exec() in while loop for iterative matching."
        },
        {
            title: "Advanced Regex Mastery",
            description: "Master complex regex patterns and optimization techniques",
            difficulty: "Advanced",
            starterCode: `// PROJECT 1: Regex Tester & Debugger
// Create RegExTester class with:
// 1. Live pattern testing with highlighting
// 2. Step-by-step execution visualizer
// 3. Pattern optimization suggestions
// 4. Performance benchmarking
// 5. Common pattern library

// PROJECT 2: Data Validation Framework
// Create ValidationFramework with:
// 1. Chainable validation rules
// 2. Custom regex pattern builder
// 3. International phone/address validation
// 4. Credit card validation with Luhn algorithm
// 5. Real-time feedback and error messages

// PROJECT 3: Text Analysis Engine
// Create TextAnalyzer with:
// 1. Sentiment analysis using regex patterns
// 2. Keyword density calculator
// 3. Plagiarism detection (simple fingerprinting)
// 4. Language detection based on character patterns
// 5. Text summarization using sentence extraction

// PROJECT 4: Advanced Search & Replace
// Create SearchReplaceEngine with:
// 1. Regex-based search with capture group replacement
// 2. Batch file processing
// 3. Pattern history and favorites
// 4. Undo/redo functionality
// 5. Preview mode with diff highlighting`,
            solution: `// PROJECT 1: Regex Tester & Debugger
class RegExTester {
    constructor() {
        this.patternHistory = [];
        this.commonPatterns = {
            email: /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/,
            phone: /^\\+?\\d{10,15}$/,
            url: /^https?:\\/\\/[\\w.-]+\\.[a-zA-Z]{2,}(\\/\\S*)?$/,
            date: /^(\\d{4})-(\\d{2})-(\\d{2})$/,
            time: /^([01]?\\d|2[0-3]):[0-5]\\d$/,
            ip: /^(?:\\d{1,3}\\.){3}\\d{1,3}$/,
            hexColor: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
        };
    }
    
    test(pattern, text, flags = '') {
        const startTime = performance.now();
        let regex;
        
        try {
            regex = new RegExp(pattern, flags);
        } catch (error) {
            return {
                valid: false,
                error: error.message,
                time: 0
            };
        }
        
        const results = {
            pattern: regex.toString(),
            flags,
            testResult: regex.test(text),
            matchResult: text.match(regex),
            execResult: regex.exec(text),
            searchResult: text.search(regex),
            matches: [],
            groups: [],
            performance: 0
        };
        
        // Extract all matches with details
        if (flags.includes('g')) {
            regex.lastIndex = 0; // Reset for global search
            let match;
            while ((match = regex.exec(text)) !== null) {
                results.matches.push({
                    match: match[0],
                    index: match.index,
                    groups: match.slice(1),
                    input: match.input
                });
            }
        } else if (results.execResult) {
            results.matches.push({
                match: results.execResult[0],
                index: results.execResult.index,
                groups: results.execResult.slice(1),
                input: results.execResult.input
            });
        }
        
        // Extract named groups
        if (results.execResult && results.execResult.groups) {
            results.groups = results.execResult.groups;
        }
        
        results.performance = performance.now() - startTime;
        
        // Add to history
        this.patternHistory.unshift({
            pattern,
            flags,
            text,
            timestamp: new Date(),
            results: results.testResult
        });
        
        // Keep history manageable
        if (this.patternHistory.length > 50) {
            this.patternHistory.pop();
        }
        
        return {
            valid: true,
            ...results,
            suggestions: this.getOptimizationSuggestions(regex, pattern)
        };
    }
    
    getOptimizationSuggestions(regex, pattern) {
        const suggestions = [];
        
        // Check for catastrophic backtracking patterns
        if (pattern.includes('(.*)*') || pattern.includes('(.+)+')) {
            suggestions.push('Warning: Pattern may cause catastrophic backtracking');
        }
        
        // Suggest character classes
        if (pattern.includes('[0-9]')) {
            suggestions.push('Consider using \\\\d instead of [0-9]');
        }
        
        if (pattern.includes('[a-zA-Z]')) {
            suggestions.push('Consider using \\\\w (if underscores are acceptable)');
        }
        
        // Check for unnecessary escapes
        const unnecessaryEscapes = pattern.match(/\\\\([\\w])/g);
        if (unnecessaryEscapes) {
            suggestions.push(\`Unnecessary escapes: \${unnecessaryEscapes.join(', ')}\`);
        }
        
        // Suggest anchors if missing
        if (!pattern.startsWith('^') && pattern.includes('$')) {
            suggestions.push('Consider adding ^ anchor for start of string validation');
        }
        
        if (!pattern.endsWith('$') && pattern.startsWith('^')) {
            suggestions.push('Consider adding $ anchor for end of string validation');
        }
        
        return suggestions;
    }
    
    benchmark(pattern, text, iterations = 1000) {
        const regex = new RegExp(pattern);
        const start = performance.now();
        
        for (let i = 0; i < iterations; i++) {
            regex.test(text);
            regex.lastIndex = 0; // Reset for global patterns
        }
        
        const time = performance.now() - start;
        return {
            iterations,
            totalTime: time,
            averageTime: time / iterations,
            opsPerSecond: (iterations / time) * 1000
        };
    }
    
    getCommonPattern(name) {
        return this.commonPatterns[name]?.toString() || null;
    }
    
    getHistory() {
        return this.patternHistory;
    }
}

// Example usage
const tester = new RegExTester();
console.log('Regex test:', tester.test('\\\\d{3}-\\\\d{3}-\\\\d{4}', 'Phone: 123-456-7890'));
console.log('Benchmark:', tester.benchmark('\\\\d+', 'Test 123 testing 456'));

// PROJECT 2: Data Validation Framework
class ValidationFramework {
    constructor() {
        this.rules = [];
        this.customPatterns = {};
    }
    
    addRule(name, pattern, message) {
        this.rules.push({ name, pattern, message });
        return this; // For chaining
    }
    
    addCustomPattern(name, pattern) {
        this.customPatterns[name] = pattern;
        return this;
    }
    
    validate(value, ...ruleNames) {
        const errors = [];
        const results = {};
        
        const rulesToCheck = ruleNames.length > 0 
            ? this.rules.filter(r => ruleNames.includes(r.name))
            : this.rules;
        
        rulesToCheck.forEach(rule => {
            const regex = typeof rule.pattern === 'string' 
                ? new RegExp(rule.pattern)
                : rule.pattern;
            
            const isValid = regex.test(value);
            results[rule.name] = isValid;
            
            if (!isValid) {
                errors.push({
                    rule: rule.name,
                    message: rule.message,
                    pattern: regex.toString()
                });
            }
        });
        
        return {
            isValid: errors.length === 0,
            errors,
            results,
            value
        };
    }
    
    // International phone validation
    validateInternationalPhone(phone, countryCode = 'US') {
        const patterns = {
            US: /^\\+1\\s?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/,
            UK: /^\\+44\\s?\\d{10,11}$/,
            IN: /^\\+91\\s?\\d{10}$/,
            AU: /^\\+61\\s?\\d{9}$/,
            EU: /^\\+\\d{1,3}\\s?\\d{6,14}$/
        };
        
        const pattern = patterns[countryCode] || patterns.EU;
        return pattern.test(phone);
    }
    
    // Credit card validation with Luhn
    validateCreditCard(cardNumber) {
        // Remove non-digits
        const cleaned = cardNumber.replace(/\\D/g, '');
        
        // Check Luhn algorithm
        function luhnCheck(number) {
            let sum = 0;
            let alternate = false;
            
            for (let i = number.length - 1; i >= 0; i--) {
                let digit = parseInt(number.charAt(i), 10);
                
                if (alternate) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                
                sum += digit;
                alternate = !alternate;
            }
            
            return sum % 10 === 0;
        }
        
        // Card type patterns
        const cardTypes = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            jcb: /^(?:2131|1800|35\\d{3})\\d{11}$/
        };
        
        if (!luhnCheck(cleaned)) {
            return { valid: false, type: null };
        }
        
        for (const [type, pattern] of Object.entries(cardTypes)) {
            if (pattern.test(cleaned)) {
                return { valid: true, type };
            }
        }
        
        return { valid: false, type: null };
    }
    
    buildPattern(...components) {
        // Simple pattern builder for common use cases
        const builders = {
            startsWith: (str) => \`^\${str}\`,
            endsWith: (str) => \`\${str}$\`,
            contains: (str) => str,
            exact: (str) => \`^\${str}$\`,
            optional: (str) => \`(?:\${str})?\`,
            oneOrMore: (str) => \`(?:\${str})+\`,
            zeroOrMore: (str) => \`(?:\${str})*\`,
            or: (...patterns) => \`(?:\${patterns.join('|')})\`,
            group: (pattern) => \`(\${pattern})\`,
            nonCapturing: (pattern) => \`(?:\${pattern})\`
        };
        
        let result = '';
        components.forEach(component => {
            if (typeof component === 'function') {
                result = component(result);
            } else if (typeof component === 'string') {
                result += component;
            }
        });
        
        return new RegExp(result);
    }
}

// Example usage
const validator = new ValidationFramework()
    .addRule('email', '^[\\\\w.-]+@[\\\\w.-]+\\\\.[a-zA-Z]{2,}$', 'Invalid email format')
    .addRule('phone', '^\\\\+?\\\\d{10,15}$', 'Invalid phone number')
    .addRule('username', '^[a-zA-Z0-9_]{3,20}$', 'Username must be 3-20 characters (letters, digits, underscores)');

console.log('Validation:', validator.validate('test@example.com', 'email'));
console.log('Credit card:', validator.validateCreditCard('4111111111111111'));
console.log('International phone:', validator.validateInternationalPhone('+1-123-456-7890', 'US'));

// PROJECT 3: Text Analysis Engine
class TextAnalyzer {
    constructor() {
        this.sentimentPatterns = {
            positive: /\\b(happy|joy|love|great|excellent|amazing|wonderful|perfect|good|nice)\\b/gi,
            negative: /\\b(sad|angry|hate|terrible|awful|bad|horrible|disappointing|poor)\\b/gi,
            neutral: /\\b(okay|average|normal|fine|acceptable|moderate)\\b/gi
        };
        
        this.languagePatterns = {
            english: /\\b(the|and|you|that|have|for|with|this)\\b/gi,
            spanish: /\\b(el|la|los|las|y|en|que|de)\\b/gi,
            french: /\\b(le|la|les|et|en|que|de|des)\\b/gi,
            german: /\\b(der|die|das|und|in|zu|den|von)\\b/gi
        };
    }
    
    analyzeSentiment(text) {
        const scores = {
            positive: (text.match(this.sentimentPatterns.positive) || []).length,
            negative: (text.match(this.sentimentPatterns.negative) || []).length,
            neutral: (text.match(this.sentimentPatterns.neutral) || []).length
        };
        
        const total = scores.positive + scores.negative + scores.neutral;
        
        if (total === 0) {
            return { sentiment: 'neutral', scores, confidence: 0 };
        }
        
        const sentiment = scores.positive > scores.negative ? 'positive' : 
                         scores.negative > scores.positive ? 'negative' : 'neutral';
        
        const confidence = Math.max(scores.positive, scores.negative, scores.neutral) / total;
        
        return { sentiment, scores, confidence };
    }
    
    calculateKeywordDensity(text, keywords = null) {
        // Extract words (simplified)
        const words = text.toLowerCase().match(/\\b[a-z]+\\b/g) || [];
        const totalWords = words.length;
        
        if (totalWords === 0) {
            return { density: 0, frequencies: {} };
        }
        
        // If no keywords provided, use all words
        const targetWords = keywords || [...new Set(words)];
        
        const frequencies = {};
        targetWords.forEach(keyword => {
            const pattern = new RegExp(\`\\\\b\${keyword}\\\\b\`, 'gi');
            const matches = text.match(pattern) || [];
            frequencies[keyword] = {
                count: matches.length,
                density: (matches.length / totalWords) * 100
            };
        });
        
        // Overall density (for provided keywords)
        const totalKeywordOccurrences = Object.values(frequencies)
            .reduce((sum, f) => sum + f.count, 0);
        
        const overallDensity = (totalKeywordOccurrences / totalWords) * 100;
        
        return {
            overallDensity,
            frequencies,
            totalWords,
            uniqueWords: new Set(words).size
        };
    }
    
    detectLanguage(text) {
        const scores = {};
        
        for (const [lang, pattern] of Object.entries(this.languagePatterns)) {
            const matches = text.match(pattern) || [];
            scores[lang] = matches.length;
        }
        
        const detected = Object.entries(scores).reduce((a, b) => 
            a[1] > b[1] ? a : b
        );
        
        return {
            language: detected[0],
            confidence: detected[1] / (text.split(' ').length || 1),
            scores
        };
    }
    
    summarize(text, sentenceCount = 3) {
        // Split into sentences
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        
        // Simple scoring based on position and keywords
        const scoredSentences = sentences.map((sentence, index) => {
            let score = 0;
            
            // First sentences are often important
            if (index === 0) score += 2;
            
            // Last sentences are often conclusions
            if (index === sentences.length - 1) score += 1;
            
            // Sentences with keywords
            const keywords = ['important', 'conclusion', 'summary', 'key', 'essential'];
            keywords.forEach(keyword => {
                if (sentence.toLowerCase().includes(keyword)) {
                    score += 1;
                }
            });
            
            // Sentences with numbers/statistics
            if (/\\d+/.test(sentence)) score += 1;
            
            return { sentence: sentence.trim(), score, index };
        });
        
        // Sort by score and take top N
        const topSentences = scoredSentences
            .sort((a, b) => b.score - a.score)
            .slice(0, sentenceCount)
            .sort((a, b) => a.index - b.index);
        
        return {
            summary: topSentences.map(s => s.sentence).join(' '),
            sentences: topSentences,
            compression: (topSentences.length / sentences.length) * 100
        };
    }
}

// Example usage
const analyzer = new TextAnalyzer();
const sampleText = "I am very happy with this product. It's amazing and works perfectly. The quality is excellent and I would definitely recommend it to others.";

console.log('Sentiment analysis:', analyzer.analyzeSentiment(sampleText));
console.log('Keyword density:', analyzer.calculateKeywordDensity(sampleText, ['happy', 'amazing', 'excellent']));
console.log('Language detection:', analyzer.detectLanguage(sampleText));
console.log('Summary:', analyzer.summarize(sampleText));

// PROJECT 4: Advanced Search & Replace
class SearchReplaceEngine {
    constructor() {
        this.history = [];
        this.favorites = new Set();
        this.currentIndex = -1;
    }
    
    search(text, pattern, flags = 'g') {
        const regex = new RegExp(pattern, flags);
        const matches = [];
        let match;
        
        regex.lastIndex = 0; // Reset
        
        while ((match = regex.exec(text)) !== null) {
            matches.push({
                match: match[0],
                index: match.index,
                groups: match.slice(1),
                namedGroups: match.groups || {},
                input: match.input
            });
        }
        
        return {
            pattern: regex.toString(),
            matches,
            count: matches.length,
            hasMatches: matches.length > 0
        };
    }
    
    replace(text, pattern, replacement, flags = 'g') {
        const regex = new RegExp(pattern, flags);
        const replaced = text.replace(regex, replacement);
        
        // Store in history
        const historyItem = {
            pattern,
            replacement,
            flags,
            original: text,
            result: replaced,
            timestamp: new Date(),
            matches: this.search(text, pattern, flags).matches.length
        };
        
        this.history.push(historyItem);
        this.currentIndex = this.history.length - 1;
        
        return {
            result: replaced,
            changes: historyItem.matches,
            diff: this.calculateDiff(text, replaced)
        };
    }
    
    replaceWithCallback(text, pattern, callback, flags = 'g') {
        const regex = new RegExp(pattern, flags);
        const replaced = text.replace(regex, callback);
        
        const historyItem = {
            pattern,
            replacement: '[callback]',
            flags,
            original: text,
            result: replaced,
            timestamp: new Date(),
            isCallback: true
        };
        
        this.history.push(historyItem);
        this.currentIndex = this.history.length - 1;
        
        return replaced;
    }
    
    calculateDiff(original, modified) {
        // Simple diff calculation
        const changes = [];
        const maxLength = Math.max(original.length, modified.length);
        
        for (let i = 0; i < maxLength; i++) {
            if (original[i] !== modified[i]) {
                changes.push({
                    position: i,
                    original: original[i] || '',
                    modified: modified[i] || ''
                });
            }
        }
        
        return {
            changes,
            changeCount: changes.length,
            similarity: ((maxLength - changes.length) / maxLength) * 100
        };
    }
    
    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }
    
    redo() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }
    
    addFavorite(pattern, name = null) {
        this.favorites.add({
            pattern,
            name: name || pattern,
            added: new Date()
        });
    }
    
    batchProcess(files, pattern, replacement, flags = 'g') {
        const results = [];
        
        files.forEach(file => {
            try {
                const result = this.replace(file.content, pattern, replacement, flags);
                results.push({
                    filename: file.name,
                    success: true,
                    changes: result.changes,
                    result: result.result
                });
            } catch (error) {
                results.push({
                    filename: file.name,
                    success: false,
                    error: error.message
                });
            }
        });
        
        return {
            total: files.length,
            successful: results.filter(r => r.success).length,
            failed: results.filter(r => !r.success).length,
            results
        };
    }
    
    preview(text, pattern, replacement, flags = 'g') {
        const regex = new RegExp(pattern, flags);
        const matches = this.search(text, pattern, flags);
        
        // Create highlighted preview
        let preview = text;
        matches.matches.reverse().forEach(match => {
            const before = preview.slice(0, match.index);
            const after = preview.slice(match.index + match.match.length);
            const replacementText = typeof replacement === 'function' 
                ? replacement(...match.groups, match.index, match.input, match.groups)
                : replacement.replace(/\\$(\\d+|&)/g, (m, p1) => {
                    if (p1 === '&') return match.match;
                    if (p1 === '0') return match.match;
                    return match.groups[p1 - 1] || '';
                });
            
            preview = before + \`<mark>\${replacementText}</mark>\` + after;
        });
        
        return {
            preview,
            matches: matches.matches,
            willChange: matches.count > 0
        };
    }
}

// Example usage
const searchEngine = new SearchReplaceEngine();
const testText = "Hello world! Hello everyone!";

console.log('Search results:', searchEngine.search(testText, 'Hello', 'g'));
console.log('Replace results:', searchEngine.replace(testText, 'Hello', 'Hi'));
console.log('Undo:', searchEngine.undo());
console.log('Redo:', searchEngine.redo());`,
            hint: "For performance, compile regex once and reuse. Use non-capturing groups when capture isn't needed. Be careful with global flag and lastIndex property."
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

    const commonPatterns = [
        { name: "Email", pattern: "/^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/" },
        { name: "Phone US", pattern: "/^\\+?1?\\s?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/" },
        { name: "URL", pattern: "/^https?:\\/\\/[\\w.-]+\\.[a-zA-Z]{2,}(\\/\\S*)?$/" },
        { name: "Date YYYY-MM-DD", pattern: "/^\\d{4}-\\d{2}-\\d{2}$/" },
        { name: "Time 24h", pattern: "/^([01]?\\d|2[0-3]):[0-5]\\d$/" },
        { name: "IP Address", pattern: "/^(?:\\d{1,3}\\.){3}\\d{1,3}$/" },
        { name: "Hex Color", pattern: "/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/" },
        { name: "Digits Only", pattern: "/^\\d+$/" },
        { name: "Letters Only", pattern: "/^[a-zA-Z]+$/" },
        { name: "Username", pattern: "/^[a-zA-Z0-9_]{3,20}$/" }
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <LessonSidebar currentLesson="lesson14" />

            <main className="flex-1 lg:ml-80 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 font-mono">
                            <span>Module 2: Intermediate</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Lesson 14: Regular Expressions</span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                                    Regular Expressions Mastery
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Master pattern matching, text processing, and validation with powerful regular expressions.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl font-semibold hover:bg-emerald-500/20 transition-all">
                                <Regex className="w-5 h-5" />
                                <span>Mark Complete</span>
                            </button>
                        </div>
                    </div>

                    {/* Live Regex Tester */}
                    <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-2xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-3 mb-4">
                            <Regex className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Regex Tester</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Regex Pattern
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={regexInput}
                                            onChange={(e) => setRegexInput(e.target.value)}
                                            className="flex-1 p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 font-mono"
                                            placeholder="/pattern/"
                                        />
                                        <select
                                            value={regexFlags}
                                            onChange={(e) => setRegexFlags(e.target.value)}
                                            className="p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900"
                                        >
                                            <option value="">No flags</option>
                                            <option value="g">Global (g)</option>
                                            <option value="i">Case-insensitive (i)</option>
                                            <option value="m">Multiline (m)</option>
                                            <option value="s">Dotall (s)</option>
                                            <option value="gi">g + i</option>
                                            <option value="gm">g + m</option>
                                            <option value="gim">g + i + m</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Test String
                                    </label>
                                    <textarea
                                        value={testString}
                                        onChange={(e) => setTestString(e.target.value)}
                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 font-mono h-24"
                                        placeholder="Enter text to test against..."
                                    />
                                </div>

                                <button
                                    onClick={testRegex}
                                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    Test Regex
                                </button>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-300 dark:border-slate-700">
                                <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Test Results</h4>
                                {regexResult ? (
                                    regexResult.error ? (
                                        <div className="text-red-600 dark:text-red-400 p-2 bg-red-50 dark:bg-red-900/20 rounded">
                                            Error: {regexResult.error}
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-3 h-3 rounded-full ${regexResult.testResult ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                <span className="font-mono text-sm">
                                                    Pattern: {regexResult.pattern}
                                                </span>
                                            </div>
                                            <div className="text-sm">
                                                Matches: {regexResult.matchResult?.length || 0}
                                            </div>
                                            {regexResult.matchResult && (
                                                <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded">
                                                    <div className="font-mono text-xs whitespace-pre-wrap">
                                                        {JSON.stringify(regexResult.matchResult, null, 2)}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                ) : (
                                    <div className="text-slate-500 dark:text-slate-400 text-center py-4">
                                        Click "Test Regex" to see results
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex overflow-x-auto gap-6 pb-px scrollbar-hide">
                            {['content', 'concepts', 'exercises', 'playground', 'pattern-library'].map((tab) => (
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
                                            <Regex className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                            Regular Expressions: Pattern Power
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                        Regular expressions are powerful patterns used for matching, searching, and manipulating text. They're essential for validation, data extraction, and text processing.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                                <Search className="w-4 h-4" /> Common Uses
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                                                    <span>Form validation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                                    <span>Data extraction</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span>Text search & replace</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                                            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4" /> Best Practices
                                            </h3>
                                            <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                                                    <span>Test thoroughly</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-1.5"></div>
                                                    <span>Use online testers</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5"></div>
                                                    <span>Avoid catastrophic backtracking</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        Common Character Classes
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                                    <th className="py-2 text-left">Class</th>
                                                    <th className="py-2 text-left">Matches</th>
                                                    <th className="py-2 text-left">Example</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono text-blue-500">\d</td>
                                                    <td className="py-3">Any digit (0-9)</td>
                                                    <td className="py-3 font-mono text-xs">"Room 101" → "1", "0", "1"</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono text-green-500">\w</td>
                                                    <td className="py-3">Word char (a-z, A-Z, 0-9, _)</td>
                                                    <td className="py-3 font-mono text-xs">"Hello_123" → all chars</td>
                                                </tr>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <td className="py-3 font-mono text-purple-500">\s</td>
                                                    <td className="py-3">Whitespace</td>
                                                    <td className="py-3 font-mono text-xs">"Hello World" → space</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 font-mono text-orange-500">.</td>
                                                    <td className="py-3">Any char except newline</td>
                                                    <td className="py-3 font-mono text-xs">"a.b" → matches "axb"</td>
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
                                            <span className="font-mono text-xs text-slate-400">regex-demo.js</span>
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
                                        Regex Concepts Explorer
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
                                            onClick={() => setCode(`// Email validation\nconst emailPattern = /^[\\\\w.-]+@[\\\\w.-]+\\\\.[a-zA-Z]{2,}$/;\nconsole.log('Valid email?', emailPattern.test('test@example.com'));`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Email Validation</div>
                                            <div className="text-xs text-slate-500">Basic email pattern</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Phone number validation\nconst phonePattern = /^\\\\+?1?\\\\s?\\\\(?\\\\d{3}\\\\)?[-.\\\\s]?\\\\d{3}[-.\\\\s]?\\\\d{4}$/;\nconsole.log('Valid phone?', phonePattern.test('123-456-7890'));`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Phone Validation</div>
                                            <div className="text-xs text-slate-500">US phone number pattern</div>
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Password strength\nconst passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]{8,}$/;\nconsole.log('Strong password?', passwordPattern.test('Pass123!'));`)}
                                            className="w-full text-left p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="font-medium text-slate-700 dark:text-slate-200 text-sm">Password Strength</div>
                                            <div className="text-xs text-slate-500">Complex password requirements</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Templates</h3>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setCode(`// Basic pattern matching\n// Practice with test(), match(), replace() methods\n// Try different flags: g, i, m`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Basic Pattern Matching
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Data extraction\n// Extract emails, phone numbers, dates from text\n// Use capture groups to extract specific parts`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Data Extraction
                                        </button>
                                        <button
                                            onClick={() => setCode(`// String manipulation\n// Remove extra spaces, format text, replace patterns\n// Use backreferences in replacements`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            String Manipulation
                                        </button>
                                        <button
                                            onClick={() => setCode(`// Advanced patterns\n// Lookaheads, named groups, non-capturing groups\n// Complex validation patterns`)}
                                            className="w-full text-left p-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                        >
                                            Advanced Patterns
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-800 h-full flex flex-col">
                                    <div className="flex justify-between items-center bg-slate-950/50 px-4 py-3 border-b border-slate-800">
                                        <span className="font-mono text-xs text-slate-400">regex-playground.js</span>
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

                    {/* Tab Content: Pattern Library */}
                    {activeTab === 'pattern-library' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Regex Pattern Library
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Common Validation Patterns
                                        </h3>
                                        <div className="space-y-4">
                                            {commonPatterns.map((pattern, idx) => (
                                                <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-medium text-slate-900 dark:text-white">
                                                            {pattern.name}
                                                        </h4>
                                                        <button
                                                            onClick={() => {
                                                                setRegexInput(pattern.pattern);
                                                                setActiveTab('playground');
                                                            }}
                                                            className="text-xs text-blue-600 hover:underline"
                                                        >
                                                            Use
                                                        </button>
                                                    </div>
                                                    <code className="block text-sm font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded">
                                                        {pattern.pattern}
                                                    </code>
                                                    <div className="mt-2 text-xs text-slate-500">
                                                        Click "Use" to load into playground
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                            Pattern Examples & Usage
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">How to Use These Patterns</h4>
                                                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                                    <p>1. Copy pattern to your code</p>
                                                    <p>2. Use with test() for validation:</p>
                                                    <code className="block font-mono text-xs p-2 bg-white dark:bg-slate-900 rounded">
                                                        const isValid = /pattern/.test(value);
                                                    </code>
                                                    <p>3. Use with match() for extraction:</p>
                                                    <code className="block font-mono text-xs p-2 bg-white dark:bg-slate-900 rounded">
                                                        const matches = text.match(/pattern/g);
                                                    </code>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Quick Test Area</h4>
                                                <div className="space-y-2">
                                                    <select
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                        onChange={(e) => {
                                                            const selected = commonPatterns.find(p => p.name === e.target.value);
                                                            if (selected) setRegexInput(selected.pattern);
                                                        }}
                                                    >
                                                        <option>Select a pattern...</option>
                                                        {commonPatterns.map((p, idx) => (
                                                            <option key={idx} value={p.name}>{p.name}</option>
                                                        ))}
                                                    </select>
                                                    <input
                                                        type="text"
                                                        placeholder="Test string..."
                                                        className="w-full p-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900"
                                                        onChange={(e) => setTestString(e.target.value)}
                                                    />
                                                    <button
                                                        onClick={testRegex}
                                                        className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
                                                    >
                                                        Test Selected Pattern
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                                <h4 className="font-medium mb-2">Regex Flags Explained</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>g</strong> - Global (find all matches)
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>i</strong> - Case-insensitive
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>m</strong> - Multiline mode
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>s</strong> - Dot matches newline
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>u</strong> - Unicode mode
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-slate-900 rounded">
                                                        <strong>y</strong> - Sticky mode
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg border border-green-200 dark:border-green-800">
                                    <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Pro Tips</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Use online testers:</strong> regex101.com, regexr.com
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Test edge cases:</strong> Empty strings, boundaries
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Keep it simple:</strong> Complex regex is hard to maintain
                                        </div>
                                        <div className="p-2 bg-white dark:bg-slate-800 rounded">
                                            <strong>Comment complex patterns:</strong> Use (?#comment) syntax
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Nav */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <a href="/lesson13" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="font-medium">Dates & Math</span>
                        </a>
                        <a href="/lesson15" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="font-medium">Asynchronous JS</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}