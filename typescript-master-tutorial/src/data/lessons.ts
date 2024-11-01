export type Lesson = {
  day: number;
  date: string;
  module: string;
  topic: string;
  explanation: string;
  tasks: string[];
  code: string;
  commits: string[];
};

export const lessons: Lesson[] = [
    {
        "day":  1,
        "date":  "Thursday, 01 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  2,
        "date":  "Friday, 02 August 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  3,
        "date":  "Saturday, 03 August 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  4,
        "date":  "Sunday, 04 August 2024",
        "module":  "Async and API Typing",
        "topic":  "Error handling strategy",
        "explanation":  "Today focus: Error handling strategy. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  5,
        "date":  "Monday, 05 August 2024",
        "module":  "React with TypeScript",
        "topic":  "Refactoring a feature module",
        "explanation":  "Today focus: Refactoring a feature module. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  6,
        "date":  "Tuesday, 06 August 2024",
        "module":  "Projects and Architecture",
        "topic":  "Module boundaries",
        "explanation":  "Today focus: Module boundaries. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  7,
        "date":  "Wednesday, 07 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Primitive types",
        "explanation":  "Today focus: Primitive types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  8,
        "date":  "Thursday, 08 August 2024",
        "module":  "Core Type Modeling",
        "topic":  "Literal types",
        "explanation":  "Today focus: Literal types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  9,
        "date":  "Friday, 09 August 2024",
        "module":  "Generics and Utilities",
        "topic":  "Utility types",
        "explanation":  "Today focus: Utility types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  10,
        "date":  "Saturday, 10 August 2024",
        "module":  "Async and API Typing",
        "topic":  "Reusable API helpers",
        "explanation":  "Today focus: Reusable API helpers. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  11,
        "date":  "Sunday, 11 August 2024",
        "module":  "React with TypeScript",
        "topic":  "Typed component props",
        "explanation":  "Today focus: Typed component props. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  12,
        "date":  "Monday, 12 August 2024",
        "module":  "Projects and Architecture",
        "topic":  "DTO and domain types",
        "explanation":  "Today focus: DTO and domain types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  13,
        "date":  "Tuesday, 13 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Type inference",
        "explanation":  "Today focus: Type inference. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  14,
        "date":  "Wednesday, 14 August 2024",
        "module":  "Core Type Modeling",
        "topic":  "Type alias vs interface",
        "explanation":  "Today focus: Type alias vs interface. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  15,
        "date":  "Thursday, 15 August 2024",
        "module":  "Generics and Utilities",
        "topic":  "Discriminated unions",
        "explanation":  "Today focus: Discriminated unions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  16,
        "date":  "Friday, 16 August 2024",
        "module":  "Async and API Typing",
        "topic":  "Promise typing",
        "explanation":  "Today focus: Promise typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  17,
        "date":  "Saturday, 17 August 2024",
        "module":  "React with TypeScript",
        "topic":  "State and hooks typing",
        "explanation":  "Today focus: State and hooks typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  18,
        "date":  "Sunday, 18 August 2024",
        "module":  "Projects and Architecture",
        "topic":  "Validation approach",
        "explanation":  "Today focus: Validation approach. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  19,
        "date":  "Monday, 19 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Functions with return types",
        "explanation":  "Today focus: Functions with return types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  20,
        "date":  "Tuesday, 20 August 2024",
        "module":  "Core Type Modeling",
        "topic":  "Optional and readonly properties",
        "explanation":  "Today focus: Optional and readonly properties. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  21,
        "date":  "Wednesday, 21 August 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic functions",
        "explanation":  "Today focus: Generic functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  22,
        "date":  "Thursday, 22 August 2024",
        "module":  "Async and API Typing",
        "topic":  "Async await patterns",
        "explanation":  "Today focus: Async await patterns. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  23,
        "date":  "Friday, 23 August 2024",
        "module":  "React with TypeScript",
        "topic":  "Context typing",
        "explanation":  "Today focus: Context typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  24,
        "date":  "Saturday, 24 August 2024",
        "module":  "Projects and Architecture",
        "topic":  "Testing typed functions",
        "explanation":  "Today focus: Testing typed functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  25,
        "date":  "Sunday, 25 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Arrays and tuples",
        "explanation":  "Today focus: Arrays and tuples. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  26,
        "date":  "Monday, 26 August 2024",
        "module":  "Core Type Modeling",
        "topic":  "Object types",
        "explanation":  "Today focus: Object types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  27,
        "date":  "Tuesday, 27 August 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic constraints",
        "explanation":  "Today focus: Generic constraints. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  28,
        "date":  "Wednesday, 28 August 2024",
        "module":  "Async and API Typing",
        "topic":  "Fetch response models",
        "explanation":  "Today focus: Fetch response models. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  29,
        "date":  "Thursday, 29 August 2024",
        "module":  "React with TypeScript",
        "topic":  "Form event typing",
        "explanation":  "Today focus: Form event typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  30,
        "date":  "Friday, 30 August 2024",
        "module":  "Projects and Architecture",
        "topic":  "Mini project increment",
        "explanation":  "Today focus: Mini project increment. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  31,
        "date":  "Saturday, 31 August 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  32,
        "date":  "Sunday, 01 September 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  33,
        "date":  "Monday, 02 September 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  34,
        "date":  "Tuesday, 03 September 2024",
        "module":  "Async and API Typing",
        "topic":  "Error handling strategy",
        "explanation":  "Today focus: Error handling strategy. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  35,
        "date":  "Wednesday, 04 September 2024",
        "module":  "React with TypeScript",
        "topic":  "Refactoring a feature module",
        "explanation":  "Today focus: Refactoring a feature module. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  36,
        "date":  "Thursday, 05 September 2024",
        "module":  "Projects and Architecture",
        "topic":  "Module boundaries",
        "explanation":  "Today focus: Module boundaries. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  37,
        "date":  "Friday, 06 September 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Primitive types",
        "explanation":  "Today focus: Primitive types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  38,
        "date":  "Saturday, 07 September 2024",
        "module":  "Core Type Modeling",
        "topic":  "Literal types",
        "explanation":  "Today focus: Literal types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  39,
        "date":  "Sunday, 08 September 2024",
        "module":  "Generics and Utilities",
        "topic":  "Utility types",
        "explanation":  "Today focus: Utility types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  40,
        "date":  "Monday, 09 September 2024",
        "module":  "Async and API Typing",
        "topic":  "Reusable API helpers",
        "explanation":  "Today focus: Reusable API helpers. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  41,
        "date":  "Tuesday, 10 September 2024",
        "module":  "React with TypeScript",
        "topic":  "Typed component props",
        "explanation":  "Today focus: Typed component props. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  42,
        "date":  "Wednesday, 11 September 2024",
        "module":  "Projects and Architecture",
        "topic":  "DTO and domain types",
        "explanation":  "Today focus: DTO and domain types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  43,
        "date":  "Thursday, 12 September 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Type inference",
        "explanation":  "Today focus: Type inference. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  44,
        "date":  "Friday, 13 September 2024",
        "module":  "Core Type Modeling",
        "topic":  "Type alias vs interface",
        "explanation":  "Today focus: Type alias vs interface. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  45,
        "date":  "Saturday, 14 September 2024",
        "module":  "Generics and Utilities",
        "topic":  "Discriminated unions",
        "explanation":  "Today focus: Discriminated unions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  46,
        "date":  "Sunday, 15 September 2024",
        "module":  "Async and API Typing",
        "topic":  "Promise typing",
        "explanation":  "Today focus: Promise typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  47,
        "date":  "Monday, 16 September 2024",
        "module":  "React with TypeScript",
        "topic":  "State and hooks typing",
        "explanation":  "Today focus: State and hooks typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  48,
        "date":  "Tuesday, 17 September 2024",
        "module":  "Projects and Architecture",
        "topic":  "Validation approach",
        "explanation":  "Today focus: Validation approach. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  49,
        "date":  "Wednesday, 18 September 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Functions with return types",
        "explanation":  "Today focus: Functions with return types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  50,
        "date":  "Thursday, 19 September 2024",
        "module":  "Core Type Modeling",
        "topic":  "Optional and readonly properties",
        "explanation":  "Today focus: Optional and readonly properties. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  51,
        "date":  "Friday, 20 September 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic functions",
        "explanation":  "Today focus: Generic functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  52,
        "date":  "Saturday, 21 September 2024",
        "module":  "Async and API Typing",
        "topic":  "Async await patterns",
        "explanation":  "Today focus: Async await patterns. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  53,
        "date":  "Sunday, 22 September 2024",
        "module":  "React with TypeScript",
        "topic":  "Context typing",
        "explanation":  "Today focus: Context typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  54,
        "date":  "Monday, 23 September 2024",
        "module":  "Projects and Architecture",
        "topic":  "Testing typed functions",
        "explanation":  "Today focus: Testing typed functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  55,
        "date":  "Tuesday, 24 September 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Arrays and tuples",
        "explanation":  "Today focus: Arrays and tuples. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  56,
        "date":  "Wednesday, 25 September 2024",
        "module":  "Core Type Modeling",
        "topic":  "Object types",
        "explanation":  "Today focus: Object types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  57,
        "date":  "Thursday, 26 September 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic constraints",
        "explanation":  "Today focus: Generic constraints. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  58,
        "date":  "Friday, 27 September 2024",
        "module":  "Async and API Typing",
        "topic":  "Fetch response models",
        "explanation":  "Today focus: Fetch response models. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  59,
        "date":  "Saturday, 28 September 2024",
        "module":  "React with TypeScript",
        "topic":  "Form event typing",
        "explanation":  "Today focus: Form event typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  60,
        "date":  "Sunday, 29 September 2024",
        "module":  "Projects and Architecture",
        "topic":  "Mini project increment",
        "explanation":  "Today focus: Mini project increment. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  61,
        "date":  "Monday, 30 September 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  62,
        "date":  "Tuesday, 01 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  63,
        "date":  "Wednesday, 02 October 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  64,
        "date":  "Thursday, 03 October 2024",
        "module":  "Async and API Typing",
        "topic":  "Error handling strategy",
        "explanation":  "Today focus: Error handling strategy. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  65,
        "date":  "Friday, 04 October 2024",
        "module":  "React with TypeScript",
        "topic":  "Refactoring a feature module",
        "explanation":  "Today focus: Refactoring a feature module. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  66,
        "date":  "Saturday, 05 October 2024",
        "module":  "Projects and Architecture",
        "topic":  "Module boundaries",
        "explanation":  "Today focus: Module boundaries. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  67,
        "date":  "Sunday, 06 October 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Primitive types",
        "explanation":  "Today focus: Primitive types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  68,
        "date":  "Monday, 07 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Literal types",
        "explanation":  "Today focus: Literal types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  69,
        "date":  "Tuesday, 08 October 2024",
        "module":  "Generics and Utilities",
        "topic":  "Utility types",
        "explanation":  "Today focus: Utility types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  70,
        "date":  "Wednesday, 09 October 2024",
        "module":  "Async and API Typing",
        "topic":  "Reusable API helpers",
        "explanation":  "Today focus: Reusable API helpers. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  71,
        "date":  "Thursday, 10 October 2024",
        "module":  "React with TypeScript",
        "topic":  "Typed component props",
        "explanation":  "Today focus: Typed component props. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  72,
        "date":  "Friday, 11 October 2024",
        "module":  "Projects and Architecture",
        "topic":  "DTO and domain types",
        "explanation":  "Today focus: DTO and domain types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  73,
        "date":  "Saturday, 12 October 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Type inference",
        "explanation":  "Today focus: Type inference. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  74,
        "date":  "Sunday, 13 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Type alias vs interface",
        "explanation":  "Today focus: Type alias vs interface. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  75,
        "date":  "Monday, 14 October 2024",
        "module":  "Generics and Utilities",
        "topic":  "Discriminated unions",
        "explanation":  "Today focus: Discriminated unions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  76,
        "date":  "Tuesday, 15 October 2024",
        "module":  "Async and API Typing",
        "topic":  "Promise typing",
        "explanation":  "Today focus: Promise typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  77,
        "date":  "Wednesday, 16 October 2024",
        "module":  "React with TypeScript",
        "topic":  "State and hooks typing",
        "explanation":  "Today focus: State and hooks typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  78,
        "date":  "Thursday, 17 October 2024",
        "module":  "Projects and Architecture",
        "topic":  "Validation approach",
        "explanation":  "Today focus: Validation approach. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  79,
        "date":  "Friday, 18 October 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Functions with return types",
        "explanation":  "Today focus: Functions with return types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  80,
        "date":  "Saturday, 19 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Optional and readonly properties",
        "explanation":  "Today focus: Optional and readonly properties. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  81,
        "date":  "Sunday, 20 October 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic functions",
        "explanation":  "Today focus: Generic functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  82,
        "date":  "Monday, 21 October 2024",
        "module":  "Async and API Typing",
        "topic":  "Async await patterns",
        "explanation":  "Today focus: Async await patterns. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  83,
        "date":  "Tuesday, 22 October 2024",
        "module":  "React with TypeScript",
        "topic":  "Context typing",
        "explanation":  "Today focus: Context typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  84,
        "date":  "Wednesday, 23 October 2024",
        "module":  "Projects and Architecture",
        "topic":  "Testing typed functions",
        "explanation":  "Today focus: Testing typed functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  85,
        "date":  "Thursday, 24 October 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Arrays and tuples",
        "explanation":  "Today focus: Arrays and tuples. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  86,
        "date":  "Friday, 25 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Object types",
        "explanation":  "Today focus: Object types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  87,
        "date":  "Saturday, 26 October 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic constraints",
        "explanation":  "Today focus: Generic constraints. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  88,
        "date":  "Sunday, 27 October 2024",
        "module":  "Async and API Typing",
        "topic":  "Fetch response models",
        "explanation":  "Today focus: Fetch response models. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  89,
        "date":  "Monday, 28 October 2024",
        "module":  "React with TypeScript",
        "topic":  "Form event typing",
        "explanation":  "Today focus: Form event typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  90,
        "date":  "Tuesday, 29 October 2024",
        "module":  "Projects and Architecture",
        "topic":  "Mini project increment",
        "explanation":  "Today focus: Mini project increment. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  91,
        "date":  "Wednesday, 30 October 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  92,
        "date":  "Thursday, 31 October 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  93,
        "date":  "Friday, 01 November 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  94,
        "date":  "Saturday, 02 November 2024",
        "module":  "Async and API Typing",
        "topic":  "Error handling strategy",
        "explanation":  "Today focus: Error handling strategy. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  95,
        "date":  "Sunday, 03 November 2024",
        "module":  "React with TypeScript",
        "topic":  "Refactoring a feature module",
        "explanation":  "Today focus: Refactoring a feature module. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  96,
        "date":  "Monday, 04 November 2024",
        "module":  "Projects and Architecture",
        "topic":  "Module boundaries",
        "explanation":  "Today focus: Module boundaries. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  97,
        "date":  "Tuesday, 05 November 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Primitive types",
        "explanation":  "Today focus: Primitive types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  98,
        "date":  "Wednesday, 06 November 2024",
        "module":  "Core Type Modeling",
        "topic":  "Literal types",
        "explanation":  "Today focus: Literal types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  99,
        "date":  "Thursday, 07 November 2024",
        "module":  "Generics and Utilities",
        "topic":  "Utility types",
        "explanation":  "Today focus: Utility types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  100,
        "date":  "Friday, 08 November 2024",
        "module":  "Async and API Typing",
        "topic":  "Reusable API helpers",
        "explanation":  "Today focus: Reusable API helpers. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  101,
        "date":  "Saturday, 09 November 2024",
        "module":  "React with TypeScript",
        "topic":  "Typed component props",
        "explanation":  "Today focus: Typed component props. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  102,
        "date":  "Sunday, 10 November 2024",
        "module":  "Projects and Architecture",
        "topic":  "DTO and domain types",
        "explanation":  "Today focus: DTO and domain types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  103,
        "date":  "Monday, 11 November 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Type inference",
        "explanation":  "Today focus: Type inference. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  104,
        "date":  "Tuesday, 12 November 2024",
        "module":  "Core Type Modeling",
        "topic":  "Type alias vs interface",
        "explanation":  "Today focus: Type alias vs interface. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  105,
        "date":  "Wednesday, 13 November 2024",
        "module":  "Generics and Utilities",
        "topic":  "Discriminated unions",
        "explanation":  "Today focus: Discriminated unions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  106,
        "date":  "Thursday, 14 November 2024",
        "module":  "Async and API Typing",
        "topic":  "Promise typing",
        "explanation":  "Today focus: Promise typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  107,
        "date":  "Friday, 15 November 2024",
        "module":  "React with TypeScript",
        "topic":  "State and hooks typing",
        "explanation":  "Today focus: State and hooks typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  108,
        "date":  "Saturday, 16 November 2024",
        "module":  "Projects and Architecture",
        "topic":  "Validation approach",
        "explanation":  "Today focus: Validation approach. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  109,
        "date":  "Sunday, 17 November 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Functions with return types",
        "explanation":  "Today focus: Functions with return types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  110,
        "date":  "Monday, 18 November 2024",
        "module":  "Core Type Modeling",
        "topic":  "Optional and readonly properties",
        "explanation":  "Today focus: Optional and readonly properties. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  111,
        "date":  "Tuesday, 19 November 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic functions",
        "explanation":  "Today focus: Generic functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  112,
        "date":  "Wednesday, 20 November 2024",
        "module":  "Async and API Typing",
        "topic":  "Async await patterns",
        "explanation":  "Today focus: Async await patterns. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  113,
        "date":  "Thursday, 21 November 2024",
        "module":  "React with TypeScript",
        "topic":  "Context typing",
        "explanation":  "Today focus: Context typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  114,
        "date":  "Friday, 22 November 2024",
        "module":  "Projects and Architecture",
        "topic":  "Testing typed functions",
        "explanation":  "Today focus: Testing typed functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  115,
        "date":  "Saturday, 23 November 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Arrays and tuples",
        "explanation":  "Today focus: Arrays and tuples. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  116,
        "date":  "Sunday, 24 November 2024",
        "module":  "Core Type Modeling",
        "topic":  "Object types",
        "explanation":  "Today focus: Object types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  117,
        "date":  "Monday, 25 November 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic constraints",
        "explanation":  "Today focus: Generic constraints. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  118,
        "date":  "Tuesday, 26 November 2024",
        "module":  "Async and API Typing",
        "topic":  "Fetch response models",
        "explanation":  "Today focus: Fetch response models. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  119,
        "date":  "Wednesday, 27 November 2024",
        "module":  "React with TypeScript",
        "topic":  "Form event typing",
        "explanation":  "Today focus: Form event typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  120,
        "date":  "Thursday, 28 November 2024",
        "module":  "Projects and Architecture",
        "topic":  "Mini project increment",
        "explanation":  "Today focus: Mini project increment. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  121,
        "date":  "Friday, 29 November 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  122,
        "date":  "Saturday, 30 November 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  123,
        "date":  "Sunday, 01 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  124,
        "date":  "Monday, 02 December 2024",
        "module":  "Async and API Typing",
        "topic":  "Error handling strategy",
        "explanation":  "Today focus: Error handling strategy. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  125,
        "date":  "Tuesday, 03 December 2024",
        "module":  "React with TypeScript",
        "topic":  "Refactoring a feature module",
        "explanation":  "Today focus: Refactoring a feature module. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  126,
        "date":  "Wednesday, 04 December 2024",
        "module":  "Projects and Architecture",
        "topic":  "Module boundaries",
        "explanation":  "Today focus: Module boundaries. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  127,
        "date":  "Thursday, 05 December 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Primitive types",
        "explanation":  "Today focus: Primitive types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  128,
        "date":  "Friday, 06 December 2024",
        "module":  "Core Type Modeling",
        "topic":  "Literal types",
        "explanation":  "Today focus: Literal types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  129,
        "date":  "Saturday, 07 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Utility types",
        "explanation":  "Today focus: Utility types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  130,
        "date":  "Sunday, 08 December 2024",
        "module":  "Async and API Typing",
        "topic":  "Reusable API helpers",
        "explanation":  "Today focus: Reusable API helpers. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  131,
        "date":  "Monday, 09 December 2024",
        "module":  "React with TypeScript",
        "topic":  "Typed component props",
        "explanation":  "Today focus: Typed component props. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  132,
        "date":  "Tuesday, 10 December 2024",
        "module":  "Projects and Architecture",
        "topic":  "DTO and domain types",
        "explanation":  "Today focus: DTO and domain types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  133,
        "date":  "Wednesday, 11 December 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Type inference",
        "explanation":  "Today focus: Type inference. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  134,
        "date":  "Thursday, 12 December 2024",
        "module":  "Core Type Modeling",
        "topic":  "Type alias vs interface",
        "explanation":  "Today focus: Type alias vs interface. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  135,
        "date":  "Friday, 13 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Discriminated unions",
        "explanation":  "Today focus: Discriminated unions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  136,
        "date":  "Saturday, 14 December 2024",
        "module":  "Async and API Typing",
        "topic":  "Promise typing",
        "explanation":  "Today focus: Promise typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  137,
        "date":  "Sunday, 15 December 2024",
        "module":  "React with TypeScript",
        "topic":  "State and hooks typing",
        "explanation":  "Today focus: State and hooks typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  138,
        "date":  "Monday, 16 December 2024",
        "module":  "Projects and Architecture",
        "topic":  "Validation approach",
        "explanation":  "Today focus: Validation approach. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  139,
        "date":  "Tuesday, 17 December 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Functions with return types",
        "explanation":  "Today focus: Functions with return types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  140,
        "date":  "Wednesday, 18 December 2024",
        "module":  "Core Type Modeling",
        "topic":  "Optional and readonly properties",
        "explanation":  "Today focus: Optional and readonly properties. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  141,
        "date":  "Thursday, 19 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic functions",
        "explanation":  "Today focus: Generic functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  142,
        "date":  "Friday, 20 December 2024",
        "module":  "Async and API Typing",
        "topic":  "Async await patterns",
        "explanation":  "Today focus: Async await patterns. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  143,
        "date":  "Saturday, 21 December 2024",
        "module":  "React with TypeScript",
        "topic":  "Context typing",
        "explanation":  "Today focus: Context typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  144,
        "date":  "Sunday, 22 December 2024",
        "module":  "Projects and Architecture",
        "topic":  "Testing typed functions",
        "explanation":  "Today focus: Testing typed functions. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  145,
        "date":  "Monday, 23 December 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Arrays and tuples",
        "explanation":  "Today focus: Arrays and tuples. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  146,
        "date":  "Tuesday, 24 December 2024",
        "module":  "Core Type Modeling",
        "topic":  "Object types",
        "explanation":  "Today focus: Object types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  147,
        "date":  "Wednesday, 25 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Generic constraints",
        "explanation":  "Today focus: Generic constraints. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type Task = { id: number; title: string; done: boolean };\nconst tasks: Task[] = [{ id: 1, title: \u0027Learn TS\u0027, done: false }];",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  148,
        "date":  "Thursday, 26 December 2024",
        "module":  "Async and API Typing",
        "topic":  "Fetch response models",
        "explanation":  "Today focus: Fetch response models. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "const courseName: string = \"TypeScript Master\";\nconsole.log(courseName);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  149,
        "date":  "Friday, 27 December 2024",
        "module":  "React with TypeScript",
        "topic":  "Form event typing",
        "explanation":  "Today focus: Form event typing. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 6));",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  150,
        "date":  "Saturday, 28 December 2024",
        "module":  "Projects and Architecture",
        "topic":  "Mini project increment",
        "explanation":  "Today focus: Mini project increment. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "type User = { id: number; name: string };\nconst user: User = { id: 1, name: \"Ajay\" };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  151,
        "date":  "Sunday, 29 December 2024",
        "module":  "TypeScript Foundations",
        "topic":  "Setup and tsconfig",
        "explanation":  "Today focus: Setup and tsconfig. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error."
                  ],
        "code":  "function printValue(value: string | number) {\n  if (typeof value === \"string\") console.log(value.toUpperCase());\n  else console.log(value.toFixed(2));\n}",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  152,
        "date":  "Monday, 30 December 2024",
        "module":  "Core Type Modeling",
        "topic":  "Union types",
        "explanation":  "Today focus: Union types. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic."
                  ],
        "code":  "interface ApiResponse\u003cT\u003e { data: T; ok: boolean }\nconst r: ApiResponse\u003c{count: number}\u003e = { data: { count: 3 }, ok: true };",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    },
    {
        "day":  153,
        "date":  "Tuesday, 31 December 2024",
        "module":  "Generics and Utilities",
        "topic":  "Mapped types basics",
        "explanation":  "Today focus: Mapped types basics. Learn the concept, write typed code, validate compiler feedback, and refine with best practices.",
        "tasks":  [
                      "Read concept explanation and note 3 key points.",
                      "Write the sample code manually and run it.",
                      "Change one type intentionally and observe compiler error.",
                      "Solve one small exercise from the same topic.",
                      "Write a short summary in your daily note."
                  ],
        "code":  "async function getData(): Promise\u003cstring\u003e {\n  return \"done\";\n}\ngetData().then(console.log);",
        "commits":  [
                        "Commit 1 - notes and reading",
                        "Commit 2 - example implementation",
                        "Commit 3 - exercise solution 1",
                        "Commit 4 - exercise solution 2/refactor",
                        "Commit 5 - recap and push"
                    ]
    }
];
