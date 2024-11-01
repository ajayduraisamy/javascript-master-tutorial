import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson/:day" element={<LessonPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
