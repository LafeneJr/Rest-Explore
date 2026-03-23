// Minimal API layer + types for REST Countries v3.1
// We only fetch the fields we actually render for performance.

export type CountryName = { common: string; official: string };
export type CountryLite = {
  cca3: string;
  name: CountryName;
  flags: { png: string; svg: string };
  region: string;
  population: number;
  capital?: string[];
};
export type CountryFull = CountryLite & {
  subregion?: string;
  languages?: Record<string, string>;
  timezones?: string[];
};

const BASE = "https://restcountries.com/v3.1";

export async function fetchAllCountries(signal?: AbortSignal): Promise<CountryLite[]> {
  const fields = "fields=cca3,name,flags,region,population,capital";
  const res = await fetch(`${BASE}/all?${fields}`, { signal, cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch countries");
  const data = (await res.json()) as CountryLite[];
  // Basic sanity sort by name
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export async function fetchCountryByCode(code: string, signal?: AbortSignal) {
  console.log("Fetching country with code:", code); // 👈 add this
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, { signal });
  if (!res.ok) {
    console.error("Fetch failed:", res.status);
    return undefined;
  }
  const data = await res.json();
  console.log("API response:", data); // 👈 see what comes back
  return data[0]; // restcountries alpha returns an array
}
