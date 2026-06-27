type Props = {
  query: string;
  onQuery: (value: string) => void;

  region: string;
  onRegion: (value: string) => void;
};

const regions = [
  "",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export function SearchAndFilter({
  query,
  onQuery,
  region,
  onRegion,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        className="
          flex-1
          rounded-xl
          border
          border-slate-300
          dark:border-slate-700
          px-4
          py-3
          bg-white
          dark:bg-slate-900
        "
      />

      <select
        value={region}
        onChange={(e) => onRegion(e.target.value)}
        className="
          rounded-xl
          border
          border-slate-300
          dark:border-slate-700
          px-4
          py-3
          bg-white
          dark:bg-slate-900
        "
      >
        <option value="">
          All Regions
        </option>

        {regions
          .filter(Boolean)
          .map((r) => (
            <option
              key={r}
              value={r}
            >
              {r}
            </option>
          ))}
      </select>
    </div>
  );
}