import { Toaster } from 'react-hot-toast';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Sparkles, Zap, Code, Shield, Users, TrendingUp,
  Star, Award, Clock, CheckCircle, Rocket, Globe,
  Database, Cpu, Terminal, Layout, Server, Smartphone,
  MessageSquare, BookOpen, Video, FileCode, BarChart,
  Target, Lock, Headphones, Download, Cloud, GitBranch,
  ChevronRight, Play, Book, Layers, Key, Wrench,
  PieChart, LineChart, Mail, UserCheck, Calendar,
  FileText, Settings, GitPullRequest, Terminal as TerminalIcon
} from 'lucide-react';
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
import Lesson18 from "./pages/Lesson18";
import Lesson19 from "./pages/Lesson19";
import Lesson20 from "./pages/Lesson20";
import Lesson21 from "./pages/Lesson21";
import Lesson22 from "./pages/Lesson22";
import Lesson23 from "./pages/Lesson23";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      }} />

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
        <Route path="/lesson17" element={<Lesson17 />} />
        <Route path="/lesson18" element={<Lesson18 />} />
        <Route path="/lesson19" element={<Lesson19 />} />
        <Route path="/lesson20" element={<Lesson20 />} />
        <Route path="/lesson21" element={<Lesson21 />} />
        <Route path="/lesson22" element={<Lesson22 />} />
        <Route path="/lesson23" element={<Lesson23 />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function LandingPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interactive Coding",
      description: "Write and execute JavaScript code directly in your browser with instant feedback",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modern Stack",
      description: "Learn ES6+,  development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project-Based",
      description: "Build 10+ real-world projects including APIs, dashboards, and full apps",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry Ready",
      description: "Master patterns, best practices, and architecture used by top tech companies",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const modules = [
    {
      title: "JavaScript Fundamentals",
      lessons: 8,
      icon: <Book className="w-5 h-5" />,
      topics: ["Variables", "Functions", "Arrays", "Objects", "DOM", "Events"],
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Advanced Concepts",
      lessons: 7,
      icon: <Cpu className="w-5 h-5" />,
      topics: ["Async/Await", "Closures", "Prototypes", "ES6+", "Modules"],
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Modern JavaScript",
      lessons: 5,
      icon: <Sparkles className="w-5 h-5" />,
      topics: ["TypeScript", "Node.js", "APIs", "Testing", "Bundlers"],
      color: "bg-pink-500/10 border-pink-500/20"
    },
    {
      title: "Real Projects",
      lessons: 3,
      icon: <Rocket className="w-5 h-5" />,
      topics: ["E-commerce", "Dashboard", "Social App", "API Server"],
      color: "bg-orange-500/10 border-orange-500/20"
    }
  ];

  const stats = [
    { value: "40+", label: "Hours Content", icon: <Clock className="w-5 h-5" /> },
    { value: "26", label: "Lessons", icon: <FileCode className="w-5 h-5" /> },
    { value: "3+", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { value: "50+", label: "Exercises", icon: <TerminalIcon className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 text-gray-900 dark:text-gray-100 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 dark:border-yellow-500/30 mb-8 shadow-lg animate-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                PREMIUM MASTER COURSE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
              <span className="block">MASTER</span>
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                JAVASCRIPT
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-gray-600 dark:text-gray-400 mt-4">
                From Zero to Expert Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              The most comprehensive JavaScript course on the web. Master modern JavaScript,
              build production-ready applications, and launch your developer career.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="/intro"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Start Learning Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#curriculum"
                className="px-8 py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg"
              >
                View Curriculum
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">JavaScript Master</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A premium learning experience designed for serious developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured path from JavaScript beginner to expert developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${module.color} hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${module.color.replace('bg-', 'bg-').replace('/10', '/20')}`}>
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{module.lessons} lessons</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                    <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      Module {index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {module.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href="/intro"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Start Module <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Build <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Real Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Apply your skills with industry-relevant projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "Build a fully functional e-commerce shopping cart system with React. This project covers state management, local storage, user interactions, and complex business logic.",
                tech: ["javaScript"],
                icon: <ShoppingCart className="w-8 h-8" />,
                link: "/project3"
              },
              {
                title: "Weather App Project",
                description: "Create a professional weather app that fetches live data, uses geolocation, and provides beautiful visualizations of weather conditions.",
                tech: ["javaScript"],
                icon: <BarChart className="w-8 h-8" />,
                link: "/project2"
              },
              {
                title: "To-Do App Project",
                description: "Build a professional-grade To-Do application from scratch. This project will test and consolidate all the JavaScript skills you've acquired throughout the course.",
                tech: ["javaScript"],
                icon: <Users className="w-8 h-8" />,
                link: "/project1"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute -top-4 left-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 mt-8">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all"
                >
                  View Project <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/20 dark:border-yellow-500/30 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your JavaScript Journey Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who transformed their careers with JavaScript Master
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/intro"
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Rocket className="w-5 h-5" />
                Get Started Now - Free
              </a>
              <a
                href="#curriculum"
                className="px-10 py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-3"
              >
                <BookOpen className="w-5 h-5" />
                View Full Curriculum
              </a>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              No credit card required • 30-day money-back guarantee • Lifetime access
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for icons
const ShoppingCart = ({ className }) => (

  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);