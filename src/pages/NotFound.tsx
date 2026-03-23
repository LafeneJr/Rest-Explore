import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="max-w-2xl mx-auto text-center py-16">
    <h1 className="text-3xl font-bold mb-2">Page not found</h1>
    <p className="mb-6 opacity-80">The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="inline-block px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
      Go Home
    </Link>
  </div>
);
