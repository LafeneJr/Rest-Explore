import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import type { CountryFull } from "../utils/api";


export default function CountryDetails() {
  const country = useLoaderData() as CountryFull | undefined;

  if (!country) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">❌ Country not found or failed to load.</p>
        <Link to="/countries" className="underline text-blue-600">
          ← Back to Countries
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto"
    >
      <Link to="/countries" className="inline-block mb-6 text-sm underline">
        ← Back to Countries
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {country.flags?.png && (
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full md:w-96 rounded-2xl border border-slate-200 dark:border-slate-800 object-cover"
          />
        )}

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-extrabold">{country.name.common}</h1>
          <p><strong>Official name:</strong> {country.name.official}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion ?? "N/A"}</p>
          <p><strong>Capital:</strong> {country.capital?.join(", ") ?? "N/A"}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
          <p><strong>Timezones:</strong> {country.timezones?.join(", ")}</p>
          <p><strong>Country code:</strong> {country.cca3}</p>
        </div>
      </div>
    </motion.section>
  );
}
