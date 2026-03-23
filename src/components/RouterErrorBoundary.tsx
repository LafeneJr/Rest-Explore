import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"




export const RouterErrorBoundary = () => {

    const error = useRouteError();

    let title = "Something went wrong";
    let message = "An unexpected error occurred.";
    let status = 500;

    if (isRouteErrorResponse(error)) {
        status = error.status;
        title = `Error ${error.status}`;
        message = error.statusText || message
    } else if (error instanceof Error) {
        message = error.message
    }

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-3xl font-bold mb-2">
            {title}
        </h1>
        <p className="mb-6 opacity-80">
            {message}
        </p>
        <p className="mb-6 opacity-80">
            {status}
        </p>

        <Link to="/"
        className="inline-block px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            Go Home
        </Link>
    </div>
  )
}
