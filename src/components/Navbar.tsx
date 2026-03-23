import { motion } from "framer-motion"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { FaBars, FaGlobe, FaMoon, FaSun, } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
export const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState(
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )

    const linksCls = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-xl transition ${
            isActive
            ? "bg-slate-900/10 dark:bg-white/10 font-semibold"
            : "hover:bg-slate-900/5 dark:hover:bg-white/5"
        }`;

    const toggleDark = () => {
        const next = !dark
        setDark(next)
        document.documentElement.classList.toggle("dark", next)
    }

  return (
    <motion.nav 
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="sticky top-0 z-50 backdrop-blur bg-white/70
    dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

            <Link to="/"
            className="inline-flex items-center gap-2 font-extrabold tracking-tight">
                <FaGlobe className="size-6" />
                <span className="text-xl">
                    CountryInfo
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
                <NavLink to="/" className={linksCls}>Home</NavLink>
                <NavLink to="countries" className={linksCls}>Countries</NavLink>
                <NavLink to="about" className={linksCls}>About</NavLink>

                <button
                onClick={toggleDark}
                aria-label="Toggle theme"
                className="ml-2 p-2 rounded-xl hover:bg-slate-900/5 dark:hover:bg-white/5">
                    {dark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </button>

            </div>
            
                <button
                className="md:hidden p-2 rounded-xl hover:bg-slate-900/5 dark:hover:bg-white/5"
                onClick={() => setOpen((v) => !v)}
                aria-label="Open menu">
                    {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>

            {open && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="mt-30 bg-slate-900/50 pt-2 rounded-lg px-2 flex flex-col gap-1">
                        <NavLink to="/" className={linksCls} onClick={() => setOpen(false)}>
                        Home
                        </NavLink>

                        <NavLink to="countries" className={linksCls} onClick={() => setOpen(false)}>
                        Countries
                        </NavLink>

                        <NavLink to="about" className={linksCls} onClick={() => setOpen(false)}>
                        About
                        </NavLink>

                        <button
                        onClick={() => { toggleDark(); setOpen(false); }}
                        className="mt-1 px-3 py-2 rounded-xl hover:bg-slate-900/5 dark:hover:bg-white/5 text-left">
                            {dark ? "Light mode" : "Dark mode"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    </motion.nav>
  )
}
