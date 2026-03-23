import { motion } from "framer-motion"
import { RiArrowRightBoxFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import user1 from "../assets/user1.jfif"

export const Home = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="max-w-7xl mx-auto py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6">

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Explore the world with{<br />}
                <span className="text-slate-600 dark:text-slate-300">
                    live country data
                </span>
            </h1>

            <p className="text-lg opacity-80">
                Search, filter, and dive into details such as population, capitals, regions and flags
                powered by the REST Countries API.
            </p>

            <div className="flex gap-3">

                <Link to="/countries"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    Explore Countries <RiArrowRightBoxFill className="text-3xl" />
                </Link>

                <Link to="/about"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700">
                    Learn More
                </Link>
            </div>
        </div>

        <div className="w-full md:w-[500px] md:px-3">
            <img className="rounded-xl" src={user1} alt="image" />
        </div>


    </motion.section>
  )
}
