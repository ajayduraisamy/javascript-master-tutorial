import { Toaster } from 'react-hot-toast';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Intro from "./pages/Intro";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";
import Lesson7 from "./pages/Lesson7";
import Lesson8 from "./pages/Lesson8";
import Lesson9 from "./pages/Lesson9";
import Lesson10 from "./pages/Lesson10";
import Lesson11 from "./pages/Lesson11";
import Lesson12 from "./pages/Lesson12";
import Lesson13 from "./pages/Lesson13";
import Lesson14 from "./pages/Lesson14";
import Lesson15 from "./pages/Lesson15";
import Lesson16 from "./pages/Lesson16";
import Lesson17 from "./pages/Lesson17";
// Import all other lessons similarly...


export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />


      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* Lessons Routes */}
        <Route path="/intro" element={<Intro />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/lesson6" element={<Lesson6 />} />
        <Route path="/lesson7" element={<Lesson7 />} />
        <Route path="/lesson8" element={<Lesson8 />} />
        <Route path="/lesson9" element={<Lesson9 />} />
        <Route path="/lesson10" element={<Lesson10 />} />
        <Route path="/lesson11" element={<Lesson11 />} />
        <Route path="/lesson12" element={<Lesson12 />} />
        <Route path="/lesson13" element={<Lesson13 />} />
        <Route path="/lesson14" element={<Lesson14 />} />
        <Route path="/lesson15" element={<Lesson15 />} />
        <Route path="/lesson16" element={<Lesson16 />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


      <Footer />
    </Router>
  );
}


function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-hidden font-sans selection:bg-yellow-500/30">


      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-500/10 dark:bg-yellow-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>


      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center max-w-5xl mx-auto w-full">


        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 shadow-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
            Updated for ES2025
          </span>
        </div>


        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Master JavaScript <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500">
            The Modern Way
          </span>
        </h2>


        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
          From basic fundamentals to advanced architectural patterns.
          Build real-world projects with our interactive, hands-on learning platform designed for
          <span className="text-slate-900 dark:text-slate-200 font-medium"> serious developers.</span>
        </p>


        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="/intro" className="px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:-translate-y-0.5 transition-transform shadow-lg shadow-slate-900/20 dark:shadow-white/10 text-center">
            Start Learning Now
          </a>
          <a href="/intro" className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
            View Documentation
          </a>
        </div>

      </main>
    </div>
  );
}