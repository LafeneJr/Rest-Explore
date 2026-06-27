// src/utils/api.ts

export interface CountryLite {
  code: string;
  name: string;
  officialName: string;
  flag: string | null;
  region: string;
  capital: string[];
  population: number;
}

export interface CountryFull extends CountryLite {
  subregion?: string;
  languages?: string[];
  timezones?: string[];
}

interface RestCountry {
  names?: {
    common?: string;
    official?: string;
  };

  codes?: {
    alpha_2?: string;
    alpha_3?: string;
  };

  flag?: {
    url_png?: string;
    url_svg?: string;
  };

  region?: string;

  capitals?: {
    name?: string;
  }[];

  population?: number;

  subregion?: string;

  languages?: {
    name?: string;
  }[];

  timezones?: string[];
}

const API_KEY =
  import.meta.env.VITE_REST_COUNTRIES_API_KEY;

const BASE =
  "https://api.restcountries.com/countries/v5";

const headers: HeadersInit = {
  Authorization: `Bearer ${API_KEY}`,
};

function normalizeCountry(
  country: RestCountry
): CountryLite {
  return {
    code:
      country.codes?.alpha_3 ||
      country.codes?.alpha_2 ||
      "",

    name:
      country.names?.common ||
      "Unknown",

    officialName:
      country.names?.official ||
      "Unknown",

    flag:
      country.flag?.url_png ||
      country.flag?.url_svg ||
      null,

    region:
      country.region ||
      "Unknown",

    capital:
      country.capitals?.map(
        (capital) => capital.name || ""
      ) || [],

    population:
      country.population || 0,
  };
}

export async function fetchAllCountries(): Promise<
  CountryLite[]
> {
  const fields =
    "names,codes,flag,region,population,capitals";

  const res = await fetch(
    `${BASE}?fields=${fields}`,
    {
      headers,
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch countries (${res.status})`
    );
  }

  const json = await res.json();

  const countries: CountryLite[] =
    json?.data?.objects?.map(
      normalizeCountry
    ) || [];

  console.log(
    "Total countries:",
    countries.length
  );

  return countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export async function fetchCountryByCode(
  code: string
): Promise<CountryFull | null> {
  const res = await fetch(
    `${BASE}/${code}`,
    {
      headers,
    }
  );

  if (!res.ok) {
    return null;
  }

  const json = await res.json();

  const country =
    json?.data?.object ||
    json?.data?.objects?.[0];

  if (!country) {
    return null;
  }

  return {
    ...normalizeCountry(country),

    subregion:
      country.subregion,

    languages:
      country.languages?.map(
        (lang: { name?: string }) =>
          lang.name || ""
      ) || [],

    timezones:
      country.timezones || [],
  };
}