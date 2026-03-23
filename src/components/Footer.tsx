import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="border-t border-slate-300 dark:border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-80">
                © {new Date().getFullYear()} CountryInfo. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="countries" className="hover:underline">
                    Countries
                </Link>
                <Link to="about" className="hover:underline">
                    About
                </Link>

                <a href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                    GitHub
                </a>
            </div>
        </div>
    </motion.footer>
  )
}
