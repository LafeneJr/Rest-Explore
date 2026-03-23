import { useEffect, useMemo, useState } from "react";
import { CountryCard } from "../components/CountryCard";
import { EmptyState } from "../components/EmptyState";
import { SearchAndFilter } from "../components/SearchAndFilter"
import { Spinner } from "../components/Spinner";
import { fetchAllCountries, type CountryLite } from "../utils/api";


export const Countries = () => {

  const [data, setData] = useState<CountryLite[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchAllCountries();
        if (alive) setData(res);
      } catch (e) {
        if (alive) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.filter((c) => {
      const byName = !q || c.name.common.toLowerCase().includes(q);
      const byRegion = !region || c.region === region;
      return byName && byRegion;
    });
  }, [data, query, region]);

  return (
    <section className="max-w-7xl mx-auto">

      <div className="mb-6 flex items-end justify-between gap-3">

        <div>
          
          <h2 className="text-2xl font-bold">
            Browser Countries
          </h2>
          <p className="opacity-75 text-sm">
            Search and filter by region
          </p>
        </div>
      </div>

      <SearchAndFilter 
        query={query}
        onQuery={setQuery}
        region={region}
        onRegion={setRegion}
      />

      {loading && <Spinner />}

      {loading && (

        <div className="mt-8">

          <EmptyState title="Couldn't load countries" subtitle="error" />
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (

        <div className="mt-8">
          <EmptyState title="No matches" subtitle="Try a different search or region." />
        </div>
      )}

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((c) => (
          <CountryCard
          key={c.cca3}
          code={c.cca3}
          name={c.name.common}
          region={c.region}
          capital={c.capital}
          population={c.population}
          flag={c.flags.png}
          />
        ))}
      </div>
    </section>
  )
}
