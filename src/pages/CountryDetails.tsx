import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import type { CountryFull } from "../utils/api";

export default function CountryDetails() {
  const country =
    useLoaderData() as CountryFull | null;

  if (!country) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 text-lg">
          Country not found.
        </p>

        <Link
          to="/countries"
          className="underline"
        >
          ← Back to Countries
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="max-w-5xl mx-auto"
    >
      <Link
        to="/countries"
        className="inline-block mb-8 underline"
      >
        ← Back
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          {country.flag ? (
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
              "
            />
          ) : (
            <div
              className="
                h-72
                rounded-2xl
                flex
                items-center
                justify-center
                bg-slate-100
                dark:bg-slate-800
              "
            >
              No flag available
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">
            {country.name}
          </h1>

          <p>
            <strong>Official Name:</strong>{" "}
            {country.officialName}
          </p>

          <p>
            <strong>Region:</strong>{" "}
            {country.region}
          </p>

          <p>
            <strong>Subregion:</strong>{" "}
            {country.subregion || "N/A"}
          </p>

          <p>
            <strong>Capital:</strong>{" "}
            {country.capital.length
              ? country.capital.join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population.toLocaleString()}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {country.languages?.length
              ? country.languages.join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Timezones:</strong>{" "}
            {country.timezones?.length
              ? country.timezones.join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Country Code:</strong>{" "}
            {country.code}
          </p>
        </div>
      </div>
    </motion.section>
  );
}