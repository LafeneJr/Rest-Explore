import { useEffect, useMemo, useState } from "react";
import { CountryCard } from "../components/CountryCard";
import { EmptyState } from "../components/EmptyState";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { Spinner } from "../components/Spinner";
import {
  fetchAllCountries,
  type CountryLite,
} from "../utils/api";

export const Countries = () => {
  const [data, setData] = useState<CountryLite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);

        const countries =
          await fetchAllCountries();

        setData(countries);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load countries"
        );
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  const filtered = useMemo(() => {
    return data.filter((country) => {
      const matchesName =
        country.name
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesRegion =
        !region ||
        country.region === region;

      return matchesName && matchesRegion;
    });
  }, [data, query, region]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <EmptyState
        title="Couldn't load countries"
        subtitle={error}
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Browse Countries
        </h2>

        <p className="opacity-75 text-sm">
          Search and filter by region
        </p>
      </div>

      <SearchAndFilter
        query={query}
        onQuery={setQuery}
        region={region}
        onRegion={setRegion}
      />

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No matches found"
            subtitle="Try a different search or region."
          />
        </div>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((country) => (
            <CountryCard
              key={country.code}
              code={country.code}
              name={country.name}
              region={country.region}
              capital={country.capital}
              population={country.population}
              flag={country.flag ?? ""}
            />
          ))}
        </div>
      )}
    </section>
  );
};