import { motion } from "framer-motion"
import { Link } from "react-router-dom";



type Props = {
  code: string;
  name: string;
  region: string;
  capital?: string[];
  population: number;
  flag: string; // PNG URL
};

export const CountryCard = ({code, name, region, capital, population, flag,}: Props) => {    
  return (
    <motion.section
    whileHover={{ scale: 1.01, y: -3}}
    className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden dark:bg-slate-900">

        <img src={flag} alt={`${name} flag`}
        className="h-40 w-full object-cover"
        loading="lazy" />

        <div className="p-4 space-y-2">

            <h3 className="text-lg font-bold">
                {name}
            </h3>

            <p className="text-sm opacity-80">
                <strong>Region:</strong> {region}
            </p>

            <p className="text-sm opacity-80">
                <strong>Capital:</strong> {capital?.join(", ") || "N/A"}
            </p>

            <p className="text-sm opacity-80">
                <strong>Population:</strong> {population.toLocaleString()}
            </p>

            <Link to={`/country/${code}`}
            className="inline-block mt-3 text-sm px-3 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                View details
            </Link>
        </div>
    </motion.section>
  )
}
