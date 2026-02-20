import { ChevronLeft, ChevronRight, Code2, FileCheck2, ListChecks, NotebookText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import LessonSidebar from "../components/LessonSidebar";
import { lessons } from "../data/lessons";

export default function LessonPage() {
  const params = useParams();
  const day = Number(params.day || 1);
  const lesson = lessons.find((item) => item.day === day) || lessons[0];

  const prevDay = lesson.day > 1 ? lesson.day - 1 : null;
  const nextDay = lesson.day < lessons.length ? lesson.day + 1 : null;
  const progress = Math.round((lesson.day / lessons.length) * 100);

  return (
    <div className="page-wrap">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <LessonSidebar lessons={lessons} currentDay={lesson.day} />

        <article className="space-y-5">
          <section className="panel animate-rise p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="pill mb-3">Day {lesson.day.toString().padStart(3, "0")} of {lessons.length}</p>
                <h1 className="font-display text-2xl font-bold text-ink md:text-3xl">{lesson.topic}</h1>
                <p className="mt-2 text-sm text-slate-600">{lesson.date} | {lesson.module}</p>
              </div>
              <div className="min-w-40 rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">Progress</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">{progress}%</p>
                <div className="mt-2 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-jade" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </section>

          <section className="panel p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold"><NotebookText size={20} /> Explanation</h2>
            <p className="leading-7 text-slate-700">{lesson.explanation}</p>
          </section>

          <section className="panel p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold"><ListChecks size={20} /> Daily Tasks</h2>
            <ul className="space-y-2">
              {lesson.tasks.map((task) => (
                <li key={task} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  {task}
                </li>
              ))}
            </ul>
          </section>

          <section className="panel p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold"><Code2 size={20} /> Code Example</h2>
            <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-4 font-mono text-sm text-slate-100"><code>{lesson.code}</code></pre>
          </section>

          <section className="panel p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold"><FileCheck2 size={20} /> Daily Commit Checklist</h2>
            <ol className="space-y-2">
              {lesson.commits.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <div className="flex items-center justify-between gap-3">
            {prevDay ? (
              <Link className="btn-secondary gap-2" to={`/lesson/${prevDay}`}>
                <ChevronLeft size={16} /> Previous
              </Link>
            ) : (
              <span />
            )}

            {nextDay ? (
              <Link className="btn-primary gap-2" to={`/lesson/${nextDay}`}>
                Next <ChevronRight size={16} />
              </Link>
            ) : (
              <Link className="btn-primary" to="/">Back Home</Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
