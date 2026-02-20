import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Lesson } from "../data/lessons";

type Props = {
  lessons: Lesson[];
  currentDay?: number;
};

export default function LessonSidebar({ lessons, currentDay }: Props) {
  const [query, setQuery] = useState("");

  const filteredLessons = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return lessons;

    return lessons.filter((lesson) => {
      return (`${lesson.day} ${lesson.topic} ${lesson.module}`).toLowerCase().includes(term);
    });
  }, [lessons, query]);

  const completion = currentDay ? Math.round((currentDay / lessons.length) * 100) : 0;

  return (
    <aside className="panel animate-rise h-fit p-4 md:sticky md:top-24 md:max-h-[calc(100vh-7rem)] md:overflow-auto">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold">Curriculum</h3>
        <span className="pill">{lessons.length} Lessons</span>
      </div>

      <label className="mb-3 block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Search</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Day, topic, module..."
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-ink"
        />
      </label>

      {currentDay ? (
        <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Progress</p>
          <p className="mt-1 text-sm font-semibold text-slate-700">Day {currentDay} of {lessons.length}</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full bg-jade transition-all" style={{ width: `${completion}%` }} />
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        {filteredLessons.map((lesson) => (
          <Link
            key={lesson.day}
            className={[
              "block rounded-xl border px-3 py-2 text-sm transition",
              lesson.day === currentDay
                ? "border-jade/30 bg-jade/10 text-jade"
                : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
            ].join(" ")}
            to={`/lesson/${lesson.day}`}
          >
            <p className="font-medium">Day {lesson.day.toString().padStart(3, "0")}</p>
            <p className="line-clamp-1 text-xs text-slate-500">{lesson.topic}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
