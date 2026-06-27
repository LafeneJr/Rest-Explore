import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  code: string;
  name: string;
  region: string;
  capital: string[];
  population: number;
  flag: string | null;
};

export function CountryCard({
  code,
  name,
  region,
  capital,
  population,
  flag,
}: Props) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        shadow-sm
      "
    >
      {flag ? (
        <img
          src={flag}
          alt={`${name} flag`}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="
            h-44
            flex
            items-center
            justify-center
            bg-slate-100
            dark:bg-slate-800
          "
        >
          <span className="text-sm opacity-60">
            No flag available
          </span>
        </div>
      )}

      <div className="p-5 space-y-2">
        <h3 className="font-bold text-lg">
          {name}
        </h3>

        <p className="text-sm">
          <strong>Region:</strong> {region}
        </p>

        <p className="text-sm">
          <strong>Capital:</strong>{" "}
          {capital.length > 0
            ? capital.join(", ")
            : "N/A"}
        </p>

        <p className="text-sm">
          <strong>Population:</strong>{" "}
          {population.toLocaleString()}
        </p>

        <Link
          to={`/country/${code}`}
          className="
            inline-block
            mt-3
            rounded-xl
            bg-slate-900
            dark:bg-white
            text-white
            dark:text-slate-900
            px-4
            py-2
            text-sm
            font-medium
          "
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}