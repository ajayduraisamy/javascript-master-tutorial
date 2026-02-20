import { CalendarDays, CheckCircle2, Flag, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import LessonSidebar from "../components/LessonSidebar";
import { lessons } from "../data/lessons";

const totalTasks = lessons.reduce((acc, lesson) => acc + lesson.tasks.length, 0);
const totalCommits = lessons.reduce((acc, lesson) => acc + lesson.commits.length, 0);

export default function HomePage() {
  const firstDay = lessons[0];
  const lastDay = lessons[lessons.length - 1];

  return (
    <div className="page-wrap">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <LessonSidebar lessons={lessons} />

        <section className="space-y-5">
          <article className="panel animate-rise overflow-hidden p-6 md:p-8">
            <p className="pill mb-4 gap-2"><Rocket size={14} /> Premium Learning Path</p>
            <h1 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Build TypeScript confidence in 153 focused days
            </h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Structured daily lessons with explanations, hands-on tasks, and commit discipline so your learning stays practical and portfolio-ready.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Course Days</p>
                <p className="mt-1 text-2xl font-bold text-ink">{lessons.length}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Total Tasks</p>
                <p className="mt-1 text-2xl font-bold text-ink">{totalTasks}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Commit Goals</p>
                <p className="mt-1 text-2xl font-bold text-ink">{totalCommits}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Duration</p>
                <p className="mt-1 text-sm font-semibold text-ink">Aug 1 to Dec 31, 2024</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn-primary" to="/lesson/1">Open Day 1</Link>
              <Link className="btn-secondary" to={`/lesson/${lessons.length}`}>Open Last Day</Link>
            </div>
          </article>

          <article className="panel p-6">
            <h2 className="font-display text-xl font-bold">Roadmap Snapshot</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"><Flag size={16} /> Start</p>
                <p className="text-sm text-slate-600">Day {firstDay.day}: {firstDay.topic}</p>
                <p className="mt-1 text-xs text-slate-500">{firstDay.date}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 size={16} /> Finish</p>
                <p className="text-sm text-slate-600">Day {lastDay.day}: {lastDay.topic}</p>
                <p className="mt-1 text-xs text-slate-500">{lastDay.date}</p>
              </div>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500"><CalendarDays size={14} /> Daily progress is optimized for consistency and git proof.</p>
          </article>
        </section>
      </div>
    </div>
  );
}
