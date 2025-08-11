import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ErrorTest from "./components/ErrorTest";
import { initGA, logPageView } from "./lib/analytics";

function Home() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Welcome to My Personal Blog</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">About Me</h1>
      <p>Some info about yourself.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <Link to="/" className="text-blue-600 underline">
        Go Home
      </Link>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex gap-4 p-4 bg-white shadow">
        <Link to="/" className="font-semibold text-blue-600">
          Home
        </Link>
        <Link to="/about" className="font-semibold text-blue-600">
          About
        </Link>
      </nav>

      <main className="mx-auto mt-8 max-w-4xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error-test" element={<ErrorTest />} />
        </Routes>
      </main>
    </div>
  );
}
