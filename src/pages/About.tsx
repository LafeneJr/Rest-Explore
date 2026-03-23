import { motion } from "framer-motion"
export const About = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 80 }}
    transition={{ duration: 0.35 }}
    className="max-w-3xl mx-auto bg-white/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8">

        <h1 className="text-2xl font-bold md-4">
            About 🌍 CountryInfo
        </h1>

        <p className="mb-3 opacity-80">
            CountryInfo is a tiny app that surfaces country data population, capitals, regions and flags
            using the{" "}

            <a href="https://restcountries.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
                REST Countries API
            </a>.
        </p>

        <p className="mb-3 opacity-80">
            Built with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,
            <strong> Framer Motion</strong>, and React Router’s data APIs.
        </p>

        <p className="opacity-80">
            Tip: Try the region filter and search on the Countries page, then click any card for details.
        </p>
    </motion.section>
  )
}
