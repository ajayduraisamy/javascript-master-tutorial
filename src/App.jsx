import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100">

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-2">
          Welcome to JavaScript Master Tutorial
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Learn JavaScript from basic fundamentals to modern ES6+ features,
          with real examples and hands-on practice built directly into this
          learning site.
        </p>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
