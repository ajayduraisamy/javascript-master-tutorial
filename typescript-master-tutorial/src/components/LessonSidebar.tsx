import { Link } from "react-router-dom";
import type { Lesson } from "../data/lessons";

type Props = {
  lessons: Lesson[];
  currentDay?: number;
};

export default function LessonSidebar({ lessons, currentDay }: Props) {
  return (
    <aside className="sidebar">
      <h3>Lessons</h3>
      {lessons.map((lesson) => (
        <Link
          key={lesson.day}
          className={"lesson-link" + (lesson.day === currentDay ? " active" : "")}
          to={`/lesson/${lesson.day}`}
        >
          Day {lesson.day.toString().padStart(3, "0")}: {lesson.topic}
        </Link>
      ))}
    </aside>
  );
}
