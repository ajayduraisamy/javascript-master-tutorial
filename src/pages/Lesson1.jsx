export default function Lesson1() {
    return (
        <section className="p-6 max-w-4xl mx-auto">

            <h1 className="text-4xl font-bold mb-6">
                Lesson 1 – JavaScript Basics
            </h1>

            {/* What is JavaScript */}
            <div className="mb-8 p-5 rounded-xl bg-white dark:bg-slate-900 border">
                <h2 className="text-2xl font-semibold mb-2">What is JavaScript?</h2>
                <p>
                    JavaScript is a programming language that makes websites interactive.
                </p>
            </div>

            {/* Variables */}
            <div className="mb-8 p-5 rounded-xl bg-white dark:bg-slate-900 border">
                <h2 className="text-2xl font-semibold mb-3">
                    Variables – Memory Boxes
                </h2>

                <p>Variables store values in memory.</p>

                <pre className="bg-slate-100 dark:bg-slate-800 p-4 mt-3 rounded-lg text-sm">
                    {`let name = "Ajay";
let age = 24;
const city = "Chennai";`}
                </pre>

                <p className="mt-3">
                    Use <b>let</b> when the value can change.
                    Use <b>const</b> when value should not change.
                </p>
            </div>

            {/* Data Types */}
            <div className="mb-8 p-5 rounded-xl bg-white dark:bg-slate-900 border">
                <h2 className="text-2xl font-semibold mb-3">Data Types</h2>

                <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm">
                    {`let name = "Ajay";        // String
let age = 24;             // Number
let isStudent = true;    // Boolean

let fruits = ["Apple","Mango"]; // Array

let person = {
  name: "Ajay",
  age: 24
}; // Object`}
                </pre>
            </div>

            {/* Memory diagram */}
            <div className="mb-8 p-5 rounded-xl bg-white dark:bg-slate-900 border">
                <h2 className="text-2xl font-semibold mb-3">
                    Memory Example (Visual)
                </h2>

                <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="border p-3 rounded-lg">name = "Ajay"</div>
                    <div className="border p-3 rounded-lg">age = 24</div>
                    <div className="border p-3 rounded-lg">city = "Chennai"</div>
                </div>
            </div>

            {/* Practice */}
            <div className="p-5 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-300">
                <h2 className="text-2xl font-semibold mb-3">
                    Practice
                </h2>

                <p>Try these:</p>

                <pre className="bg-white dark:bg-slate-900 p-3 mt-2 rounded text-sm">
                    {`let myName = "Your Name";
const myAge = 20;

let colors = ["Red","Blue"];`}
                </pre>
            </div>

        </section>
    );
}
