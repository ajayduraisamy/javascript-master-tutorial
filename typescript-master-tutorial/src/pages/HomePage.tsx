import { Link } from "react-router-dom";
import LessonSidebar from "../components/LessonSidebar";
import { lessons } from "../data/lessons";

export default function HomePage() {
  return (
    <div className="layout">
      <LessonSidebar lessons={lessons} />
      <section className="card">
        <h1>TypeScript Course (Lesson by Lesson)</h1>
        <p className="meta">
          Full roadmap with explanation and code examples for every day from August 1, 2024 to December 31, 2024.
        </p>
        <ul>
          <li>Total days: {lessons.length}</li>
          <li>Tasks each day: 3 to 5</li>
          <li>Commit target each day: 5</li>
        </ul>
        <div className="btn-row">
          <Link className="btn primary" to="/lesson/1">Open Day 1</Link>
          <Link className="btn" to={`/lesson/${lessons.length}`}>Open Last Day</Link>
        </div>
      </section>
    </div>
  );
}
