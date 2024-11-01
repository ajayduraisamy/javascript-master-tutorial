import { Link, useParams } from "react-router-dom";
import LessonSidebar from "../components/LessonSidebar";
import { lessons } from "../data/lessons";

export default function LessonPage() {
  const params = useParams();
  const day = Number(params.day || 1);
  const lesson = lessons.find((item) => item.day === day) || lessons[0];

  const prevDay = lesson.day > 1 ? lesson.day - 1 : null;
  const nextDay = lesson.day < lessons.length ? lesson.day + 1 : null;

  return (
    <div className="layout">
      <LessonSidebar lessons={lessons} currentDay={lesson.day} />
      <article className="card">
        <h1>Day {lesson.day}: {lesson.topic}</h1>
        <p className="meta">{lesson.date} | {lesson.module}</p>

        <h2>Explanation</h2>
        <p>{lesson.explanation}</p>

        <h2>Tasks</h2>
        <ul>
          {lesson.tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>

        <h2>Code Example</h2>
        <pre className="code"><code>{lesson.code}</code></pre>

        <h2>Daily Commit Checklist</h2>
        <ol>
          {lesson.commits.map((item) => <li key={item}>{item}</li>)}
        </ol>

        <div className="btn-row">
          {prevDay ? <Link className="btn" to={`/lesson/${prevDay}`}>Previous</Link> : <span />}
          {nextDay ? <Link className="btn primary" to={`/lesson/${nextDay}`}>Next</Link> : <Link className="btn primary" to="/">Back Home</Link>}
        </div>
      </article>
    </div>
  );
}
