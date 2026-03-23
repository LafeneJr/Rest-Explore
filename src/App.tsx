import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"


export const App = () => {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-slate-200 to-white dark:from-sky-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">

      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}
